# Week 6 — Security for E-Business (Lectures 1 to 5)

## In one breath

Week 6 is about keeping an online business safe. First it names what "secure" means (identity, secrecy, no tampering, availability, no denying an order, and a trail of what happened), and the common attacks. Then it explains the locks that make it work: encryption (symmetric and asymmetric keys), hash functions that act as fingerprints, digital signatures, certificates and the public key infrastructure (PKI) that issues them, and TLS (Transport Layer Security), the protocol that wraps web traffic. The last lecture shows that all this protection costs server speed, and works out how much.

**The big analogy:** a bank's branch that receives a cheque. Checking who is at the counter is authentication. Sealing the envelope is confidentiality. A signature and a seal from the bank's registered officer is a digital signature and a certificate. The lock on the strong room, and the CCTV that records who went in, are integrity and auditing. The extra time the clerk spends checking every cheque is the performance cost of security. Every question this week is about one of these pieces.

## Mind map

```text
Week 6: Security for E-Business
├── 1. Security categories and attacks
│   ├── Legitimate use: identify, authenticate, authorise
│   ├── Confidentiality (secret content)
│   ├── Integrity (no tampering)
│   ├── Availability (up when needed)
│   ├── Non-repudiation (no denying)
│   ├── Auditing or traceability
│   ├── Attacks: sniffing, IP spoofing, denial of service
│   └── TCP three-way handshake (SYN, SYN-ACK, ACK)
├── 2. Security terminology
│   ├── Cryptography: plaintext -> ciphertext
│   ├── Symmetric key: same key both ways (DES, RC4...)
│   ├── Asymmetric key: public and private (RSA)
│   ├── Key strength; block vs stream ciphers
│   ├── Hash functions: fixed-size digest
│   ├── Hash uses: integrity, authentication
│   ├── Hash variants: MD, SHA, RIPEMD, Whirlpool
│   └── Jargon: malware, worm, virus, trojan, rootkit, phishing
├── 3. Digital signature, certificates, PKI
│   ├── Digital signature: hash, then encrypt with private key
│   ├── Verification: decrypt with public key, compare digests
│   ├── Digital certificate: proves a public key's owner
│   ├── Certificate authority (CA) signs the certificate
│   ├── PKI functions: issue, validate, revoke, manage keys
│   └── India: CCA at the root, licensed CAs
├── 4. Protocols for security: TLS
│   ├── SSL (Netscape) -> TLS (IETF)
│   ├── Sits on top of TCP, under HTTP
│   ├── Handshake protocol: agree algorithms, exchange secrets
│   ├── Record protocol: encrypt, authenticate, compress
│   ├── Client Hello, Server Hello, key exchange, finished
│   ├── Session reuse with cached session state
│   ├── Client-server interaction diagrams (CSID)
│   └── Overheads: round trips, bytes, processing
└── 5. Security protocols and server performance
    ├── Throughput = 1 / service demand at bottleneck
    ├── Service demand at client, network, server CPU, disk
    ├── Insecure site: disk is the bottleneck (100 req/s)
    ├── TLS on all pages: server CPU bottleneck (19.3 req/s)
    ├── TLS on part of site: 31.43 req/s
    ├── Cryptographic accelerator: disk is bottleneck again
    └── Cached session states: 43.67 req/s
```

## Concept cards

### 1. Security categories and attacks

**Legitimate use** (identification, authentication, authorisation)
- What it is: Three checks that give a user the right access. Identification says who you claim to be. Authentication proves it. Authorisation decides what you may do.
- Think of it as: A bank counter. You say your name (identification), show your ID (authentication), and the officer checks you can approve this payment (authorisation).
- Spot it in a question: "password is correct but access is refused" → authorisation. "says who they are" → identification. "proves it is really them" → authentication.

**Authentication**
- What it is: A guarantee to two parties in a dialogue that they are really talking to whom they think. Server authentication: you are buying from the real shop, not an imposter. Client authentication: the bank knows it is really you.
- Think of it as: Checking the caller really is your bank before you read out your PIN.
- Spot it in a question: "right server, not an imposter" = server authentication. "right client in internet banking" = client authentication.

**Confidentiality**
- What it is: Protecting the content of messages and data sent over the internet from unauthorised people.
- Think of it as: Writing your letter in a sealed envelope, so the postman cannot read it.
- Spot it in a question: "protect the content", "credit card information during transmission", "unauthorised people reading". Encryption delivers confidentiality.

**Integrity**
- What it is: Preventing data from being changed by an attacker while it travels over the internet.
- Think of it as: A sealed envelope that shows if someone has opened and re-glued it.
- Spot it in a question: "modified", "changed the delivery address", "altered in transit". The wrong option is usually confidentiality, which hides content but does not stop changes.
- Attacker types: an active attacker modifies packets. A passive attacker only listens.

**Availability**
- What it is: Systems, data and resources are usable when needed, despite outages and environmental disruptions.
- Think of it as: A shop that keeps trading even when the power fails, because it has a generator.
- Spot it in a question: "keeps working when one server fails", "still serves customers during a power failure" → availability.

**Non-repudiation**
- What it is: Preventing the sender of a message from denying they sent it.
- Think of it as: A signed receipt for a registered letter. You cannot later say you never signed for it.
- Spot it in a question: "denies placing the order", "evidence that the buyer signed". Digital signatures provide it (section 3).

**Auditing or traceability**
- What it is: The process of examining transactions, so you can see what happened and who did it.
- Think of it as: The CCTV footage and the visitor register at a building gate.
- Spot it in a question: "examining transactions", "after they have taken place", "trail".

**Sniffing** (attack)
- What it is: A packet sniffer is a program on a network device that receives every data-link frame passing its network interface, including traffic not meant for it. It is a passive attack, because it only listens.
- Think of it as: Someone at a crossroads reading every postcard that passes, not just the ones addressed to them.
- Spot it in a question: "receives every frame passing the interface", "reads traffic not addressed to it" → packet sniffer.

**IP spoofing** (attack)
- What it is: Changing the IP addresses in packets, so the packet looks as if it came from someone else.
- Think of it as: Writing a fake return address on an envelope, so it looks as if your trusted neighbour sent it.
- Spot it in a question: "altered the source address", "claims to come from a trusted router" → IP spoofing.

**Denial of service** (attack on availability)
- What it is: Creating extra, apparently legitimate workload that the server cannot handle. The slide's example is a large number of partially opened TCP connections.
- Think of it as: A crowd of fake customers queueing at a shop, so real customers cannot get in.
- Spot it in a question: "extra workload", "server cannot handle", "partially opened TCP connections".

**Active and passive attackers** (data integrity)
- Active: modifies packets in transit. Passive: only listens and reads.
- Spot it in a question: "modifies" = active. "only listens" = passive. Sniffing is passive; altering a packet is active.

**Three-way handshake in TCP**
- What it is: The three steps that open a TCP connection. Step 1: the initiator sends SYN with its starting sequence number. Step 2: the responder sends SYN and ACK together, acknowledging the first SYN and giving its own starting sequence number. Step 3: the initiator sends ACK (and may start sending data).
- Think of it as: "Hello, can we talk?" (SYN), "Yes, hello, and can you hear me?" (SYN-ACK), "Yes, I hear you, go ahead" (ACK).
- Spot it in a question: the message that does both jobs at once is SYN, ACK.

**Non-repudiation example**
- The slide's example is denying an order you have placed. Non-repudiation stops that denial.

### 2. Security terminology

**Cryptography**
- What it is: A technique that scrambles data (plaintext) so that it is extremely difficult, expensive and time-consuming for an unauthorised person to unscramble. The scrambled result is the ciphertext.
- Think of it as: A secret code. Anyone can see the gibberish, but only the person with the key can read it.
- Spot it in a question: "plaintext", "ciphertext", "scrambled", "encrypted".

**Encryption and decryption** (the two steps)
- What it is: Encryption: the encrypted message is produced from the message and an encryption key (EncryptedMsg = Encrypt(Msg, key_e)). Decryption: the message is recovered from the encrypted message and a decryption key (Msg = Decrypt(EncryptedMsg, key_d)).
- Think of it as: Locking a box with one key and opening it with a key (the same key in the symmetric case, a matching key in the asymmetric case).
- Spot it in a question: "key_e" and "key_d" tell you whether the keys are the same (symmetric) or different (asymmetric).

**Symmetric key cryptography**
- What it is: The same key encrypts and decrypts (key_e = key_d). Examples named: DES (Data Encryption Standard), TDES (triple DES), IDEA, RC2, RC4 and RC5. A hardware implementation is about 100 times faster than software. Problems: the key must be shared secretly (key distribution problem), and it cannot be used for authentication or non-repudiation, because both parties hold the same key.
- Think of it as: A house key that you copy for a family member. Either of you can open the door, so the door cannot tell which of you came in.
- Spot it in a question: "one secret key for both", "hardware is faster", "key distribution", "cannot authenticate". The option that says symmetric keys prove who sent a message is wrong.

**Asymmetric key cryptography** (public key cryptography)
- What it is: Different keys for encryption and decryption (key_e is not key_d). One key is public (known to everybody), the other private (known only to the owner). Example named: RSA (Ron Rivest, Adi Shamir and Leonard Adleman), patented until 2000. It is much slower than symmetric algorithms (the slide says RSA is about 100 times slower than DES). Private-key operations are slower than public-key operations. Time grows with the key length in bits.
- Think of it as: A post box with a public slot (anyone can drop a letter in with the public key) and a private key only the owner has to open it.
- Spot it in a question: "public key and private key", "different key for encryption and decryption", "RSA", "much slower".

**Key strength** (asymmetric key sizes)
- What it is: Strength depends on key size. 1024 bits: low strength. 2048 bits: medium strength. 4096 bits: high strength. Symmetric keys are much smaller: a 256-bit symmetric key gives strong encryption.
- Think of it as: A padlock with 4 dials (weak) vs 10 dials (strong). Asymmetric padlocks need many more dials to be safe.
- Spot it in a question: "high-strength asymmetric key" = 4096 bits. A 256-bit key is strong for symmetric encryption.

**Block cipher algorithm**
- What it is: Encrypts data in blocks. RC2 (from RSA Data Security Inc.) uses 8-byte blocks. Block algorithms are typically slower than stream algorithms.
- Think of it as: Packing items into boxes of fixed size before sealing each box.
- Spot it in a question: "blocks", "8 bytes", "fixed-size chunks", "slower".

**Stream cipher algorithm**
- What it is: Operates on each byte of data as it arrives. Stream algorithms are typically faster than block algorithms.
- Think of it as: Sealing each coin as it passes through a machine, one at a time.
- Spot it in a question: "each byte", "faster than block algorithms".

**Points to note on key use**
- Bulk data transfer is generally not done with asymmetric key cryptography, because it is too slow.
- In practice, a session key is exchanged using RSA, and then DES (or another symmetric algorithm) carries the bulk data.
- Spot it in a question: "large volume of records securely" → use asymmetric only to exchange the session key, and symmetric encryption for the records.

**Hash function**
- What it is: Any function that maps data of arbitrary size to data of fixed size. The output is called the hash value, hash code, digest, or simply hash.
- Think of it as: A fingerprint of a document. Any size of document gives a short fixed-length fingerprint.
- Spot it in a question: "arbitrary size to fixed size", "digest", "hash value".

**Hash function use** (authentication and integrity, not encryption)
- What it is: Hashes are not used for encryption. They are used for authentication and data integrity. The threats they help detect are: masquerade (a message inserted from a fraudulent source), content modification (changing the message), sequence modification (inserting, deleting or reordering), and timing modification (replaying a valid session).
- Think of it as: A fingerprint check at a gate. If the fingerprint on the file does not match, the file has been changed.
- Spot it in a question: "not used for encryption" is true. "used for authentication and integrity" is the right use. Replaying a recorded session is timing modification.

**Hash function properties**
- What it is: Three rules. It should be easy to compute the hash of a message. It should be hard to get the message back from its hash. It should be very hard to find a different message with the same hash.
- Think of it as: A fingerprint should be easy to take, impossible to turn back into a face, and no two faces should give the same print.
- Spot it in a question: "hard to obtain the original message from the hash" (one-way). "very hard to find another message with the same hash" (collision resistance). A hash should be easy to compute.

**Data integrity through hash functions**
- What it is: The sender hashes the data to make a message digest. The receiver hashes the received data with the same algorithm and compares the two digests. If they differ, the data was modified.
- Think of it as: Sending a parcel with the weight written on the box. The receiver weighs it. A different weight means something was taken or added.
- Spot it in a question: "compare digests", "message digest equal?" → integrity check.

**Applications of hash functions**
- What it is: Three groups. Public key algorithms (password logins, encryption key management, digital signatures). Integrity checking (virus and malware scanning). Authentication (secure web connections).
- Think of it as: The same fingerprint tool used at three different gates.
- Spot it in a question: "password login" or "digital signature" → public key use. "virus scanning" → integrity checking. "secure web connection" → authentication.

**Hashing algorithm variants** (the lecture's list)
- MD4 and MD5 by Ron Rivest (1990 and 1994).
- SHA-0 and SHA-1 by the NSA (1993 and 1995).
- RIPEMD-160 (1996).
- SHA-2 (2002), in sizes 224, 256, 384 and 512 bits. The slide prints "385", which is a typo for 384.
- Whirlpool, Tiger, GOST-3411 and SHA-3.
- Spot it in a question: "developed by Ron Rivest" = MD4 or MD5. "by the NSA" = SHA-0 or SHA-1.

**Security jargon: malware family**
- Malware: a newer general term for any software written with malicious intent (short for malicious software).
- Virus: a piece of code that replicates by attaching itself to another object. It can attack the registry, replace system files or take over e-mail programs.
- Worm: an independent program that copies itself from one computer to another, usually over a network or through e-mail attachments. It does not need to attach to another program file.
- Trojan horse: a "back door" program that lets intruders take remote control of a computer without the owner's knowledge. It can be installed through thousands of free software packages downloaded from the internet.
- Rootkit: an especially harmful Trojan (or group of programs) that hides itself inside the core of the operating system, so virus scanners miss it. It starts before the operating system.
- Adware: software that invades your computer as persistent pop-up advertising.
- Spyware: software that performs secret behaviours such as advertising or collecting personal information, generally without consent.
- Spot it in a question: "replicates by attaching" = virus. "copies itself over the network without attaching" = worm. "back door" = Trojan horse. "hides below the operating system" = rootkit. "persistent pop-ups" = adware. "collects personal information secretly" = spyware.

**Security jargon: people and access**
- Cracker: someone who breaks into computers or networks without authorisation, for fun or to steal (such as credit card numbers). Also called a black hat hacker.
- Hacker: a general term for anyone who pokes into computers and operating systems to find their weaknesses.
- Intruder: any unauthorised individual who tries to access a computer system from outside. Also called an attacker.
- Probe: a program that gathers information about a system or its users.
- Firewall: software, hardware or both that blocks unauthorised access to a machine or a network. Internal firewalls sit on one machine. External firewalls are separate hardware protecting many machines.
- Spot it in a question: "black hat" = cracker. "poking around to find weaknesses" = hacker. "gathers information" = probe. "blocks unauthorised access" = firewall.

**Security jargon: deception**
- Social engineering: obtaining confidential information by manipulation. For example, people claiming to be administrators trick users into giving passwords.
- Phishing: a form of social engineering in which an attacker pretends to be a trustworthy entity, using official-looking e-mail or instant messages, to get passwords, bank account numbers or national ID numbers.
- Spot it in a question: "manipulation", "claims to be an administrator" = social engineering. "fake bank e-mail asking for login details" = phishing.

**Security jargon: risk and damage**
- Vulnerability: a weakness in security procedures that can be used to break the system's security policy.
- Threat: any event that may harm a system through destruction, disclosure, modification of data or denial of service.
- Risk: the probability that a vulnerability will cause a harmful result.
- System compromise: a violation of security policy in which sensitive information may have been disclosed.
- Spot it in a question: "weakness" = vulnerability. "event that may harm" = threat. "probability of harm" = risk.

### 3. Digital signature, certificates and PKI

**Digital signature**
- What it is: A mathematical scheme for showing that a digital message or document is authentic. A valid signature tells the recipient that the message came from a known sender (authentication), that the sender cannot deny sending it (non-repudiation), and that it was not altered in transit (integrity). It addresses those three categories together.
- Think of it as: A wax seal with a unique family crest, which only one person can press. Anyone can check the seal matches the crest.
- Spot it in a question: "authentication, non-repudiation and data integrity" all together → digital signature. It is not used to hide the content (that is confidentiality).

**Digital signature generation** (sender side)
- What it is: The sender hashes the message to get a message digest. The sender encrypts that digest with its own private key. The result is the signature, sent with the message.
- Think of it as: Writing a summary of the letter, then sealing the summary with your private stamp.
- Spot it in a question: "encrypts the digest with the sender's private key". The sender uses its private key, not its public key.

**Digital signature verification** (receiver side)
- What it is: The receiver hashes the received message itself to get a digest. It decrypts the signature with the sender's public key to get the sender's digest. It then compares the two digests. If they match, the message is authentic and unchanged. If they differ, the message was tampered with.
- Think of it as: Checking the stamp with the public key, then re-reading the letter and comparing the summaries.
- Spot it in a question: "where is tampering revealed?" → comparing the received message digest with the decrypted digest. The sender's public key is used for decryption, not for encryption.

**Digital certificate** (public key certificate or identity certificate)
- What it is: An electronic document used to prove that a public key belongs to a particular owner. It holds information about the key, information about the owner (called the subject), and the digital signature of the entity that verified the certificate (called the issuer).
- Think of it as: An ID card for a public key, with a photo (the key), a name (the owner), and the signature of the government office that checked it (the issuer).
- Spot it in a question: "proves ownership of a public key" → digital certificate. "signed by the entity that verified it" → issuer.
- Types named: server certificate (identifies a web site) and client certificate (identifies a user or client).

**Certifying Authority (CA)**
- What it is: The trusted issuer that verifies a certificate's contents and signs the certificate with its own private key. This signature is what binds the public key to the named owner.
- Think of it as: A notary public who checks your identity and stamps the document.
- Spot it in a question: "who digitally signs the certificate?" → the Certifying Authority (CA). The server administrator or the client does not sign their own certificate.

**Public key infrastructure (PKI)**
- What it is: The foundation on which other security applications, systems and network security components are built. Public key cryptography supports integrity, authentication and non-repudiation. To join a PKI, an end entity enrolls or registers, and the result is a public key certificate. The binding is declared when a trusted CA digitally signs the certificate with its private key.
- Think of it as: A country's civil registry: births are registered, certificates are issued and signed by the office, and anyone can check them against the office's public record.
- Spot it in a question: "foundation for security applications" = PKI. "enrol or register" = the first step of participation.

**Server certificate: generation and verification**
- What it is: The server's information (name, issuer CA, serial number, validity period, public key) is hashed. The hash is encrypted with the CA's private key, and the result is attached as the X.509 certificate. The client verifies it by hashing the server information, decrypting the signature with the CA's public key, and comparing the two digests.
- Think of it as: A government ID whose details are summarised and stamped by the issuing office. Anyone with the office's public stamp-check can verify the stamp.
- Spot it in a question: "encrypted with the CA's private key" when generating, "decrypted with the CA's public key" when verifying.

**Components of the server information**
- Name, issuer CA, serial number, validity period, and the public key of the server (the slide ends with "...", meaning other fields may follow).
- Spot it in a question: "which field identifies the issuing CA?" → the issuer CA field. "until when is it valid?" → validity.

**PKI functions** (four)
- Public key cryptography: generating, distributing, administering and controlling cryptographic keys.
- Certificate issuance: binding a public key to an individual, an organisation, another entity, or some data such as an e-mail or a purchase order.
- Certificate validation: verifying that a trust relationship or binding exists and that the certificate is still valid for the operation.
- Certificate revocation: cancelling a previously issued certificate. The cancellation is published on a Certificate Revocation List, or an Online Certificate Status Protocol process is used.
- Spot it in a question: "cancels a certificate" = revocation. "binds a key to a name" = issuance. "checks it is still valid" = validation. "generation, distribution, administration and control of keys" = public key cryptography (the function).

**PKI in India**
- The Controller of Certifying Authorities (CCA) sits at the root. Certifying Authorities are licensed by the CCA. The slide lists eight: Safescrypt, NIC, IDRBT, TCS, MtnlTrustline, iCertCA, GNFC and e-Mudhra CA. The slide also mentions certificate enrolment and the cryptographic service provider (CSP).
- Spot it in a question: "root of India's PKI" = CCA. "licenses the CAs" = CCA. Not ICANN, not IEEE, not the IAB.

### 4. Protocols for security: TLS

**SSL and TLS**
- What it is: SSL (Secure Sockets Layer) was first developed by Netscape. It was superseded by TLS (Transport Layer Security), which made minor changes over SSL 3.0 and is standardised by the IETF (Internet Engineering Task Force). The lecture cites RFC 2246 for TLS.
- Think of it as: SSL was the first version of a lock. TLS is the improved lock that replaced it, with the same key idea.
- Spot it in a question: "first developed by Netscape" = SSL. "superseded by" = TLS.

**Where TLS sits**
- What it is: TLS is a session-layer protocol that runs on top of TCP. HTTP runs on top of TLS, so the web page is protected on its way between browser and server. The lecture lists its jobs as authentication, confidentiality and non-repudiation.
- Think of it as: A sealed armoured van (TLS) that carries the letter (HTTP) on the road (TCP).
- Spot it in a question: "on top of TCP" = TLS. Options that put TLS under TCP, or replace IP addressing, are wrong.

**TLS protocol stack in context**
- What it is: Two sub-protocols. The TLS Handshake Protocol negotiates the cryptographic and compression algorithms and exchanges secrets through public key cryptography. The TLS Record Protocol generates the secret key, handles encryption and decryption, message authentication and compression.
- Think of it as: The handshake is the two people agreeing on the code book before talking. The record protocol is the actual sealed conversation.
- Spot it in a question: "negotiates algorithms and exchanges secrets" = Handshake. "encrypts and decrypts application data" = Record.

**TLS Handshake Protocol: what it decides**
- What it is: The public key algorithm (for example RSA) and the key used to send the shared secret. The bulk encryption algorithm (for example DES) and the session key used during the session. The message authentication code algorithm (for example MD5). The compression algorithm. The server authenticates itself to the client, and the client sometimes authenticates itself too.
- Think of it as: Agreeing the language, the cipher, the stamp and the courier before sending the first letter.
- Spot it in a question: "selecting the public key algorithm and the shared secret" → Handshake. "server authenticates itself to the client" → Handshake.

**TLS Record Protocol: what it does**
- What it is: Encryption and decryption (DES, TDES, RC4 named). Message authentication (MD5, SHA, SHA1). Compression and decompression (Lempel-Ziv-Stac (LZS) named). The slide says the overhead of compression is negligible.
- Think of it as: The sealing machine, the tamper-proof label printer, and the compactor, all running on every packet.
- Spot it in a question: "encrypting application data with the bulk cipher" → Record Protocol. Choosing the algorithms is the Handshake's job.

**Client-server interaction**
- What it is: Every e-business function is implemented through a set of client-server interactions. Examples named: HTTP request and response, remote procedure calls (RPC), object request broker (ORB), CORBA, and web services. A client sends a request to the primary server and gets a response. The primary server may itself act as a client to another server.
- Think of it as: A customer asks the shop counter for an item, and the counter staff phones the warehouse to get it.
- Spot it in a question: "chain of requests and responses between servers" = client-server interaction.

**Client-server interaction diagram (CSID)**
- What it is: A way to draw client-server interactions with performance information. The lecture says UML sequence diagrams and message sequence charts model interactions but do not carry performance parameters, so the CSID adds them. Two node types: client and server. Start and finished nodes are squares. Internal nodes are circles. Directed arcs show a message sent from one node to another. Each arc is labelled with the probability of that path and the size of the message.
- Think of it as: A family group chat map where each arrow shows who messaged whom, how likely that path is, and how big the message is.
- Spot it in a question: "a directed arc represents" → a message transmitted between nodes. "start and finished nodes" → squares. "internal nodes" → circles.

**TLS handshake messages** (the sequence and sizes in the lecture)
- Client Hello (about 68 bytes at most): a random number from the client (28 bytes), client time (4 bytes), session ID (0 to 32 bytes), cipher suites supported (2 bytes), compression algorithms supported (1 byte), and protocol version (1 byte).
- Server Hello (813 bytes in total): the X.509 server certificate (750 bytes), a server random number (28 bytes), a server session ID (0 to 32 bytes), the cipher suite chosen by the server (2 bytes), and the compression method (1 byte).
- Client key exchange and client finished (75 bytes in the lecture's diagram): the client checks the server's certificate, creates a premaster secret and derives the bulk encryption key, then encrypts the premaster secret with the server's public key (48 bytes). The client finished message is 27 bytes.
- Server finished (27 bytes): the server decrypts the premaster secret with its private key, derives the same key from the premaster secret and both random numbers, and sends back a finished message encrypted with the bulk key.
- Spot it in a question: "28 bytes random" = client or server random number. "750 bytes" = certificate. "2 bytes" = cipher suite. "27 bytes" = finished messages. "48 bytes" = encrypted premaster secret.
- Memory: Hello, Hello, Key, Finished. The client's first message carries options, the server's reply carries the certificate.

**Session reuse with cached session state**
- What it is: The client sends the old session ID it wants to reuse, plus a new random number. If the server still has that session cached, it sends back the same session ID with a new server random number. The client confirms with a client finished message. The full handshake is skipped.
- Think of it as: Showing your old membership card at the gym, so you skip the joining form.
- Spot it in a question: "old session ID", "cached at the server" → session reuse. It saves the expensive handshake.

**Overhead due to TLS** (three kinds)
- Increase in round-trip times (RTTs): extra message exchanges before data flows.
- Byte overhead: extra bytes in the handshake and in each record.
- Processing time at the client and at the server.
- Client processing: handshaking, decryption and verification. The handshaking part is server-certificate verification, encryption of the master secret with the server's public key, and bulk key generation.
- Server processing: handshaking, encryption and message digest generation. The handshaking part is decryption of the master secret with the server's private key, and bulk key generation.
- Spot it in a question: "round-trip times", "byte overhead", "processing time" are the three named overheads. Disk seek time is not one of them.

### 5. Impact of security protocols on server performance

**Web server throughput**
- What it is: The number of completed queries divided by the observation period. The lecture also gives throughput = 1 / service demand.
- Think of it as: How many customers the counter finishes in one hour.
- Spot it in a question: "completed queries per period" or "1 divided by service demand" → throughput.

**Service demand**
- What it is: The time a resource needs to serve one request. The slide describes it as the average response time per service request. The worked examples add up the time each resource spends on one request.
- Think of it as: How many minutes each counter clerk needs to handle one customer.
- Spot it in a question: "the time a device spends per request". The higher it is, the lower the throughput.

**Bottleneck resource**
- What it is: The device with the highest service demand. Web server throughput = 1 / service demand at the bottleneck device. The possible bottlenecks are the server, storage, network and client.
- Think of it as: The slowest counter in a queue sets the speed of the whole line.
- Spot it in a question: "highest service demand" = bottleneck. "throughput is set by the bottleneck" is the key rule.

**The worked example's inputs**
- Average file size requested: about 16,384 bytes (the slide prints "16, 385", but the calculations use 16,384 bytes, or 16,384 × 8 bits).
- Average CPU time per file access at the server, with no secure connection: 0.002 seconds.
- Average disk access time: 0.01 seconds.
- Average network delay: 0.001737 seconds.
- Spot it in a question: these are the inputs for the five scenarios below.

**Scenario 1: insecure connection (no TLS)**
- What it is: The disk is the bottleneck, with a service demand of 0.01 seconds, so throughput = 1 / 0.01 = 100 requests per second.
- Think of it as: The shelf is the slowest counter, so the shop serves 100 customers a second at most.
- Spot it in a question: "without TLS" → disk is the bottleneck → 100 requests per second.

**Scenario 2: secure connection for all pages**
- What it is: Each secure request adds TLS work. Client service demand = handshake time + decryption + verification. Server CPU service demand = handshake time + encryption + message digest generation + the normal CPU time.
- Think of it as: Every customer now needs ID checks, a sealed bag and a receipt check, which takes time at both counters.
- Spot it in a question: "secure connection for all the pages" → recompute the service demand at client and server.

**Handshake timing table (client side, in milliseconds)**
- Key size 512 bits: verifying the server certificate 2.4 ms, encrypting the master secret 1.31 ms, key generation 0.10 ms, total 3.81 ms.
- Key size 768 bits: 3.61, 2.61, 0.10, total 5.87 ms.
- Key size 1024 bits: 7.09, 5.20, 0.10, total 12.36 ms.
- Spot it in a question: total grows as the key grows. Verification and encryption rise sharply from 512 to 1024 bits.

**Handshake timing table (server side, in milliseconds)**
- Key size 512 bits: decrypting the master secret with the private key 10.13 ms, key generation 0.10 ms, total 10.23 ms.
- Key size 768 bits: 23.66, 0.10, total 23.76 ms.
- Key size 1024 bits: 47.93, 0.10, total 48.03 ms.
- Spot it in a question: the server pays most for private-key decryption, and it grows fast with key size.

**Algorithm speeds used in the calculations (megabits per second)**
- Encryption and decryption: RC4 140, DES 40, TDES 15.
- Message digest (MD) generation or verification: MD5 180, SHA 130, SHA1 130.
- Spot it in a question: RC4 is the fastest cipher in the table, TDES the slowest.

**Client service time example** (1024-bit key, RC4 and MD5)
- What it is: 0.01239 seconds for the handshake, plus the time to decrypt and verify the 16,384-byte file at 140 and 180 Mbps. The total is about 0.01405 seconds.
- Spot it in a question: client service demand for a secure page, using the given speeds.

**Server service time example** (same settings)
- What it is: Handshake (0.04808 seconds on the slide, close to the 48.03 ms server total for 1024 bits) plus encryption plus MD generation plus the normal CPU time of 0.002 seconds. The total is about 0.051694 seconds.
- Spot it in a question: server CPU service demand, secure, all pages.

**Scenario 2 result: all pages secure**
- Service demands: client 0.01405 s, network 0.001737 s, server CPU 0.051694 s, server disk 0.01 s.
- The server CPU is the bottleneck. Throughput = 1 / 0.05169 = about 19.3 requests per second.
- That is about 20 per cent of the throughput without TLS (the slide's wording).
- Spot it in a question: "secure for every page" → server CPU is the bottleneck, about 19.3 requests per second.

**Scenario 3: secure connection for part of the site**
- What it is: Assume 40 per cent of requests are for insecure documents and 60 per cent are secure. The server CPU service demand is the weighted average: 0.4 × 0.002 + 0.6 × 0.051694 = about 0.0318 seconds.
- The CPU is still the bottleneck. Throughput = 1 / 0.0318 = about 31.43 requests per second.
- Think of it as: Only some customers need the ID check, so the line moves faster on average.
- Spot it in a question: "part of the site secure" → weighted average, throughput rises above the all-secure figure but stays below 100.

**Scenario 4: cryptographic accelerator**
- What it is: A public key math processor. The lecture assumes it speeds up the handshake protocol by a factor of 50, and that both client and server use it.
- Client service time: 0.01239 / 50 + decryption and verification time = about 0.001405 seconds.
- Server CPU service time: 0.04808 / 50 + encryption and digest time + 0.002 = about 0.004625 seconds.
- Now the disk (0.01 seconds) is the bottleneck again, so the maximum throughput is 100 requests per second.
- Spot it in a question: "cryptographic accelerator" → the handshake is faster, so the bottleneck returns to disk and throughput returns to 100.

**Scenario 5: cached session states**
- What it is: Assume 60 per cent of connections reuse a cached session state. For those, the server CPU work is session key generation (0.0001 seconds) plus encryption and digest time, plus the normal 0.002 seconds. That gives about 0.00376 seconds.
- Server CPU service demand = 0.6 × 0.00376 + 0.4 × 0.05169 = about 0.0229 seconds.
- Throughput = 1 / 0.0229 = about 43.67 requests per second.
- Spot it in a question: "cached session states" or "session reuse" → a weighted average, giving about 43.67 requests per second.

**Summary of the five scenarios** (requests per second)
- Insecure (no TLS): 100, bottleneck disk.
- Secure for all pages: about 19.3, bottleneck server CPU.
- Secure for part of the site (40 per cent insecure): about 31.43, bottleneck server CPU.
- Cryptographic accelerator: 100, bottleneck disk.
- Cached session states (60 per cent reused): about 43.67, bottleneck server CPU.
- Spot it in a question: match the scenario to the throughput number. Only the all-secure case is near 19.3.

## How it flows

**Attacks against the three TCP/IP layers**
```text
Application:  phishing, social engineering, Trojan horse, worm, virus
Transport:    partially opened TCP connections (denial of service)
Network:      IP spoofing (fake source address), packet sniffing (passive listening)
```
Each attack is named by what the attacker does: listen (passive), change (active), overload (denial of service), or pretend (spoofing, phishing).

**Three-way handshake (opening a TCP connection)**
```text
Host 1 ──── SYN (my starting sequence number is x) ────────► Host 2
Host 1 ◄─── SYN, ACK (I got yours; my number is y) ───────── Host 2
Host 1 ──── ACK (got yours), DATA starts ──────────────────► Host 2
```

**Encryption and decryption**
```text
Symmetric:   plaintext ──[key]──► ciphertext ──[same key]──► plaintext
Asymmetric:  plaintext ──[public key]──► ciphertext ──[private key]──► plaintext
             (or the reverse, for signatures: private key to sign, public key to check)
```

**Hash function and integrity check**
```text
Sender:    message ──► hash ──► digest A ─────────┐
                                                  compare: A = B ?  yes: intact
Receiver:  message ──► hash ──► digest B ─────────┘               no: changed
```

**Digital signature: generation and verification**
```text
GENERATE (Site A):  message ──► hash ──► digest ──[encrypt with A's PRIVATE key]──► signature
                    message + signature ──► Internet ──► Site B
VERIFY (Site B):    message ──► hash ──► digest B
                    signature ──[decrypt with A's PUBLIC key]──► digest A
                    compare digest A with digest B ──► match = authentic, unchanged, from A
```

**Certificate chain of trust**
```text
Server info (name, issuer CA, serial, validity, server public key)
   ──► hash ──► [encrypt with CA's PRIVATE key] ──► X.509 certificate
Client receives certificate:
   ──► hash the server info ──► [decrypt with CA's PUBLIC key] ──► compare digests
```

**PKI roles**
```text
End entity ──enrol/register──► Certifying Authority (CA) ──signs──► public key certificate
India: CCA (root) ──licenses──► CAs (Safescrypt, NIC, IDRBT, TCS, ...)
Life of a certificate: issued ──► validated ──► revoked (listed on CRL, or checked by OCSP)
```

**TLS in context (layers)**
```text
HTTP
TLS  (Handshake protocol + Record protocol)
TCP
IP
```

**TLS handshake sequence**
```text
Client ── Client Hello ──────────────────────────► Server
       (random 28 B, session ID, cipher suites, compression, version)
Client ◄─────────────────── Server Hello ───────── Server
       (X.509 certificate 750 B, random 28 B, session ID, cipher suite, compression)
Client ── Client key exchange + Client finished ─► Server
       (premaster secret encrypted with server's public key, 48 B; finished 27 B)
Client ◄─────────────────── Server finished ────── Server   (27 B, encrypted with bulk key)
Then:  application data protected by the Record protocol
```

**Session reuse (cached session state)**
```text
Client ── old session ID + new random number ──────► Server
Server has the session cached?
   yes ──► Server ── same session ID + new server random ──► Client
           Client ── client finished ──► Server        (no certificate, no key exchange)
   no  ──► full handshake as above
```

**Record protocol (every packet of application data)**
```text
application data ──► compress (LZS) ──► add MAC (MD5, SHA, SHA1) ──► encrypt (DES, TDES, RC4) ──► TCP
```

**Client-server interaction diagram (CSID)**
```text
[start node, square] ──message (probability p, size n bytes)──► (internal node, circle)
                          ──message──► (internal node, circle) ──message──► [finished node, square]
Nodes: client or server. Arcs: a message; labelled with path probability and message size.
```

**Throughput rule**
```text
Throughput = 1 / service demand at the bottleneck
Bottleneck = the resource with the highest service demand (server CPU, disk, network, client)
```

**Five scenarios, one line each (requests per second)**
```text
No TLS:                 disk bottleneck (0.01 s)              ──► 100
TLS on every page:      server CPU bottleneck (0.0517 s)      ──► 19.3
TLS on part (40% clear): server CPU (0.0318 s)                ──► 31.43
Accelerator (50x handshake): disk bottleneck again            ──► 100
Cached sessions (60% reused): server CPU (0.0229 s)           ──► 43.67
```

**Where the time goes on the server (secure page)**
```text
Server service demand (CPU) = handshake (decrypt master secret with private key, the big cost)
                            + encryption + MD generation (scales with file size)
                            + normal CPU time (0.002 s)
```

## Don't mix these up

| These look alike | How to tell them apart | Tie-breaker word |
|---|---|---|
| Authentication vs authorisation | Authentication proves who you are. Authorisation decides what you may do | "proves who" vs "permission to approve" |
| Identification vs authentication | Identification is the claim (username). Authentication is the proof (password, certificate) | "claims" vs "proves" |
| Confidentiality vs integrity | Confidentiality hides content. Integrity stops changes (the content can be read but must not be altered) | "hidden from" → confidentiality; "modified" or "changed" → integrity |
| Integrity vs non-repudiation | Integrity: the data was not changed. Non-repudiation: the sender cannot deny sending | "altered in transit" vs "deny placing the order" |
| Availability vs integrity | Availability: the system is up when needed. Integrity: the data is unchanged | "fails over, outage, still serving" vs "modified" |
| Auditing or traceability vs non-repudiation | Auditing examines transactions after they happen. Non-repudiation stops the sender denying a message | "examining transactions" vs "cannot deny" |
| Active vs passive attack | Active: modifies packets. Passive: only listens | "modifies in transit" vs "only listens" |
| Packet sniffing vs IP spoofing | Sniffing reads frames passing an interface (passive). Spoofing changes the source address (forging) | "reads frames" vs "altered source address" |
| Denial of service vs sniffing | DoS overloads the server with work. Sniffing reads traffic | "cannot handle the workload" vs "receives every frame" |
| Packet sniffer vs firewall | A sniffer reads traffic. A firewall blocks unauthorised access | "receives every frame" vs "blocks" |
| SYN vs SYN-ACK vs ACK | SYN starts the connection. SYN-ACK acknowledges and gives the server's number. ACK completes it | the message that does two jobs at once is SYN-ACK |
| Symmetric vs asymmetric key | Symmetric: one shared key, fast, key distribution problem. Asymmetric: public and private keys, slow | "same key" vs "public and private" |
| Symmetric key vs digital signature (for proof of sender) | A shared symmetric key cannot prove who sent a message. A private-key signature can | "both parties hold the same key" → not proof |
| Encryption vs hashing | Encryption is reversible with a key. A hash is a one-way fingerprint of fixed size | "decrypt" or "recover the message" → encryption; "digest" or "fixed size" → hash |
| Block vs stream cipher | Block: fixed-size blocks (RC2, 8 bytes), slower. Stream: byte by byte, faster | "blocks" vs "each byte" |
| Hash value vs message digest vs signature | Digest and hash value are the same output. A signature is the digest encrypted with a private key | "encrypted with the private key" → signature |
| Masquerade vs content modification vs replay (timing modification) | Masquerade: a message from a fraudulent source. Content modification: the content changed. Timing modification: a valid session is replayed | "fraudulent source" / "changed content" / "recorded session resent" |
| Sequence modification vs timing modification | Sequence: inserting, deleting or reordering messages. Timing: replaying a valid session later | "reorder or delete" vs "replay later" |
| Cracker vs hacker | A cracker breaks in without authorisation (black hat). A hacker is anyone who probes systems for weaknesses | "without authorisation", "steal" → cracker |
| Intruder vs hacker | An intruder is an unauthorised individual who tries to access the system from outside. A hacker is a general term | "tries to access from outside" → intruder |
| Virus vs worm | Virus: attaches itself to another object. Worm: independent, copies itself over the network | "attaches to another object" → virus; "independent program" → worm |
| Trojan horse vs rootkit | Trojan: a back door for remote control. Rootkit: hides deep in the operating system core | "back door, remote control" → Trojan; "hides from virus scanners in the OS core" → rootkit |
| Adware vs spyware | Adware: persistent pop-up advertising. Spyware: secret collection of personal information | "pop-ups" → adware; "collects personal information secretly" → spyware |
| Malware vs virus | Malware is the umbrella term for any malicious software. A virus is one kind | "any software written with malicious intent" → malware |
| Social engineering vs phishing | Social engineering is manipulation for information in general. Phishing is social engineering by fake official e-mail or messages | "fake e-mail from a bank" → phishing |
| Vulnerability vs threat vs risk | Vulnerability: a weakness. Threat: an event that may cause harm. Risk: the probability that a vulnerability causes harm | "weakness" / "event" / "probability" |
| Probe vs threat | A probe gathers information about a system. A threat is any event that may cause harm | "gathers information" → probe |
| Firewall: internal vs external | Internal: on one machine. External: separate hardware protecting many machines | "on an individual machine" vs "protects multiple machines" |
| Symmetric algorithms vs asymmetric algorithms (examples) | Symmetric: DES, TDES, IDEA, RC2, RC4, RC5. Asymmetric: RSA | "RSA" → asymmetric |
| Ron Rivest vs Rivest-Shamir-Adleman | Ron Rivest designed MD4 and MD5 (hash). RSA is the public key algorithm named after Rivest, Shamir and Adleman | "MD4, MD5" → Rivest hash; "RSA" → public key |
| MD5 vs SHA-1 | Both are hash functions. MD5 is by Ron Rivest. SHA-1 is by the NSA | developer named in the question |
| Key strength: 1024 vs 2048 vs 4096 bits | 1024 low, 2048 medium, 4096 high for asymmetric keys | the size word: low, medium, high |
| Digital signature vs digital certificate | Signature: proves the message came from the signer. Certificate: proves a public key belongs to an owner, signed by a CA | "message" → signature; "public key belongs to" → certificate |
| Server certificate vs client certificate | Server certificate identifies a web site. Client certificate identifies a user or client | "web site" → server; "user or client" → client |
| Certificate issuance vs certificate validation vs certificate revocation | Issuance binds the key to an owner. Validation checks it is still trusted and valid. Revocation cancels it | "binds" / "checks validity" / "cancels" |
| Certificate revocation list vs certificate | A certificate proves identity. A revocation list shows cancelled certificates | "cancelled" → revocation list |
| Public key cryptography (PKI function) vs asymmetric algorithm | The PKI function covers generating, distributing, administering and controlling keys. The algorithm is the maths (RSA) | "generation, distribution, administration" → PKI function |
| CA vs CCA | A CA issues and signs certificates. The CCA is the root body in India that licenses CAs | "licenses the CAs" → CCA |
| ICANN vs CCA | ICANN coordinates internet names and numbers. CCA is India's root for certifying authorities | "domain names" → ICANN; "India's certifying authorities" → CCA |
| SSL vs TLS | SSL was developed by Netscape. TLS superseded it, with minor changes over SSL 3.0 | "first developed by Netscape" → SSL |
| TLS Handshake vs TLS Record | Handshake agrees algorithms and exchanges secrets. Record encrypts, authenticates and compresses data | "negotiate" / "exchange secrets" → Handshake; "encrypt application data" → Record |
| Client Hello vs Server Hello | Client Hello: the client's options and random number. Server Hello: the server's choices and its certificate | "certificate" in the message → Server Hello |
| Client finished vs server finished | Client finished (27 bytes) follows the client key exchange. Server finished (27 bytes) confirms the server decrypted the premaster secret | "after the client key exchange" vs "after decrypting" |
| Premaster secret vs master secret vs session key | Premaster secret: sent encrypted with the server's public key. Master (and bulk) key: derived from it and the random numbers. Session key: used during the session | the stage in the question |
| Full handshake vs session reuse | Full handshake exchanges the certificate and key. Reuse sends the old session ID and skips it when cached | "old session ID" → reuse |
| Round trip time vs byte overhead vs processing overhead | The three overheads of TLS. Round trips add delay, bytes add size, processing adds CPU time | the kind of cost in the question |
| Client processing vs server processing (TLS) | Client: verify the certificate, encrypt the master secret, derive keys. Server: decrypt the master secret with its private key, derive keys | "verify certificate" → client; "private key decryption" → server |
| CSID vs UML sequence diagram | A UML sequence diagram shows messages but no performance data. A CSID adds probabilities and message sizes | "probability and message size" → CSID |
| Start/finish node vs internal node (CSID) | Start and finish nodes are squares. Internal nodes are circles | "squares" vs "circles" |
| Throughput vs response time (server) | Throughput: requests per second. Response time: time for one request | "per second" vs "time for one" |
| Service demand vs bottleneck | Service demand is the time per request at one device. The bottleneck is the device with the highest service demand | "highest" → bottleneck |
| Throughput with TLS on all pages vs part of site | All pages: the server CPU is the bottleneck at about 19.3 requests per second. Part of site: about 31.43 | "40 per cent insecure" → part of site |
| Cryptographic accelerator vs cached session states | Accelerator speeds up the handshake by 50 times for all sessions. Cached sessions skip most handshakes for 60 per cent of connections | "factor of 50" → accelerator; "cached" → sessions |
| Disk bottleneck vs CPU bottleneck (example) | Without TLS, or with an accelerator, the disk limits throughput to 100 requests per second. With TLS on every page, the server CPU is the limit | the scenario named |

## Must-remember facts

### Lists, numbers and memory tricks

| List | Items | Memory trick |
|---|---|---|
| Security categories (six) | Legitimate use (identification, authentication, authorisation), confidentiality, integrity, availability, non-repudiation, auditing or traceability | "Legit, Secret, Sealed, Up, Can't-deny, Trail" |
| Legitimate use (three) | Identification, authentication, authorisation | "Who, Proof, Permission" |
| Attacker types (two) | Active (modifies packets), passive (only listens) | "Active changes, Passive watches" |
| Attack types named (three) | Sniffing, IP spoofing, denial of service | "Sniff = read, Spoof = fake address, Deny = overload" |
| TCP handshake (three steps) | SYN; SYN-ACK; ACK (with data) | "Hi, Hi-got-it, Got-it-go" |
| Symmetric algorithms named | DES, TDES, IDEA, RC2, RC4, RC5 | "DES and his TDES IDEA of RC" |
| Asymmetric algorithm named | RSA (Rivest, Shamir, Adleman), patented until 2000 | "RSA = Rivest, Shamir, Adleman" |
| Key strength (asymmetric) | 1024 bits low, 2048 medium, 4096 high | "1024, 2048, 4096 = low, medium, high" |
| Symmetric strength | 256-bit keys give strong encryption | "256 is enough for one key" |
| Block cipher example | RC2, 8-byte blocks | "Block = batch, slower" |
| Stream cipher | Works on each byte, faster | "Stream = each byte, faster" |
| Hash function properties (three) | Easy to compute, hard to reverse, very hard to find a second message with the same hash | "Easy to make, hard to reverse, hard to clone" |
| Hash misuses (four threats) | Masquerade, content modification, sequence modification, timing modification | "Fake sender, Changed content, Shuffled order, Replayed session" |
| Hash applications (three groups) | Public key uses (passwords, key management, signatures), integrity checking (virus scanning), authentication (secure web) | "Keys, Checks, Proves" |
| Hash algorithms named | MD4, MD5 (Rivest 1990, 1994), SHA-0, SHA-1 (NSA 1993, 1995), RIPEMD-160 (1996), SHA-2 (2002), Whirlpool, Tiger, GOST-3411, SHA-3 | "Rivest's MD in 90 and 94, NSA's SHA in 93 and 95" |
| SHA-2 sizes | 224, 256, 384, 512 (the slide prints 385) | "Two-two-four-five-twelve" |
| Malware family (six terms) | Virus, worm, Trojan horse, rootkit, adware, spyware | "Virus attaches, Worm travels, Trojan opens a back door, Rootkit hides, Adware pops, Spyware spies" |
| People and access terms | Cracker (black hat), hacker, intruder (attacker), probe, firewall | "Cracker breaks in, Hacker pokes, Intruder enters, Probe peeks, Firewall blocks" |
| Deception terms | Social engineering, phishing | "Phishing is social engineering by fake e-mail" |
| Risk terms | Vulnerability (weakness), threat (event), risk (probability), system compromise (disclosure) | "Weak, Event, Chance, Leaked" |
| Digital signature covers (three) | Authentication, non-repudiation, data integrity | "A-N-I: Authentic, Not deniable, Intact" |
| Digital certificate parts | Key information, owner (subject), issuer's signature; server or client type | "Key, Owner, Issuer's stamp" |
| PKI functions (four) | Public key cryptography, certificate issuance, certificate validation, certificate revocation | "Keys, Issue, Validate, Revoke" |
| Server info fields (five named) | Name, issuer CA, serial number, validity, server public key | "Name, Issuer, Serial, Valid, Key" |
| PKI in India | CCA at the root; licensed CAs: Safescrypt, NIC, IDRBT, TCS, MtnlTrustline, iCertCA, GNFC, e-Mudhra CA | "CCA is the root; eight CAs under it" |
| TLS sub-protocols (two) | Handshake protocol, record protocol | "Handshake agrees, Record protects" |
| Handshake decides (five) | Public key algorithm and shared secret key; bulk cipher and session key; MAC algorithm; compression; server authenticates (client sometimes) | "Key, Cipher, MAC, Squeeze, Prove" |
| Record protocol parts (three) | Encryption and decryption (DES, TDES, RC4), message authentication (MD5, SHA, SHA1), compression (LZS) | "Encrypt, Authenticate, Compress" |
| Client Hello fields (six) | Random number (28 bytes), time (4 bytes), session ID (0 to 32 bytes), cipher suites (2 bytes), compression (1 byte), protocol version (1 byte) | "Random, Time, Session, Ciphers, Compress, Version" |
| Server Hello fields (five) | X.509 certificate (750 bytes), random number (28 bytes), session ID (0 to 32 bytes), cipher suite (2 bytes), compression (1 byte) | "Certificate, Random, Session, Cipher, Compress" |
| Finished messages | Client finished 27 bytes, server finished 27 bytes | "Both finish at 27" |
| TLS overheads (three) | Round-trip times, byte overhead, processing time | "Time, Bytes, Brains" |
| Server service demand items (three) | Handshake (decrypt master secret), encryption and MD generation, normal CPU time (0.002 s) | "Handshake, Crypto, Normal" |
| CSID node shapes | Start and finish = squares, internal = circles | "Ends are squares, middles are circles" |
| Algorithm speeds (Mbps) | RC4 140, DES 40, TDES 15; MD5 180, SHA 130, SHA1 130 | "RC4 fastest, TDES slowest" |
| Throughput scenarios (five) | No TLS (100), TLS on all (19.3), TLS on part (31.43), accelerator (100), cached sessions (43.67) | "Plain 100, All-secure 19, Part 31, Accelerator 100, Cached 43" |

### Quotes, authors and examples

| Item | What the lecture says (paraphrased) | Remember |
|---|---|---|
| Netscape | First developed SSL | "Netscape made SSL" |
| IETF | Standardises TLS (the lecture cites RFC 2246) | "IETF standardises TLS" |
| Ron Rivest | Designed MD4 and MD5 (and is one of the RSA authors) | "Rivest: MD4, MD5, RSA" |
| Adi Shamir and Leonard Adleman | With Rivest, the RSA algorithm | "RSA trio" |
| NSA | Designed SHA-0 and SHA-1 | "NSA: SHA" |
| Lempel-Ziv-Stac (LZS) | Compression used by the TLS record protocol, overhead negligible | "LZS compresses" |
| DES, RC4, TDES (speeds) | Named in the record protocol and in the speed table | "DES, RC4, TDES" |
| Phishing example | Fake official e-mail from a trusted entity asking for login details | "Fake bank e-mail" |
| Non-repudiation example | Denying an order you have placed | "Deny an order" |
| Example of server authentication | Buying a book from the right server, not an imposter | "Right shop, not imposter" |
| Example of client authentication | Internet banking, communicating with the right client | "Right customer at the bank" |
| Example of integrity | Modifying a book order or changing a delivery address | "Changed address" |
| Example of confidentiality | Protecting credit card information during transmission | "Card number in transit" |
| Example of denial of service | Partially opened TCP connections that overload the server | "Half-open connections" |
| Example of IP spoofing | Altering source addresses in packet headers | "Fake return address" |
| Example of asymmetric slowness | RSA is about 100 times slower than DES | "RSA is 100 times slower" |
| Example of hardware speed | A hardware implementation of symmetric encryption is about 100 times faster than software | "Hardware 100 times faster" |
| Cryptographic accelerator | A public key math processor that speeds up the handshake by a factor of 50 (lecture assumption) | "Accelerator = 50 times handshake" |

## How this week gets asked

**The question patterns**
- Scenario, then "which security category or attack?" A short story (an order changed in transit, a fake e-mail, a flood of half-open connections) is followed by four official terms.
- "Which stage, message or field?" The TLS handshake and the certificate fields are favourite places for precise questions: the message that carries the certificate, the byte size of a field, the party that signs.
- "Which algorithm, key or hash property?" Symmetric vs asymmetric, the key size strength, the hash rules.
- "Which party does X?" Who signs a certificate (the CA), who encrypts the digest (the sender's private key), who decrypts the premaster secret (the server's private key).
- "Which throughput or bottleneck?" Compare the scenario to the five throughput numbers.
- "Which overhead or definition?" The three TLS overheads, the definition of throughput, the CSID shapes.

**Distractor traps for this week**
- Confidentiality vs integrity. Encryption hides content but does not stop someone changing it. Options that say encryption "guarantees" integrity are traps.
- Symmetric keys sound secure enough, so they are tempting for non-repudiation. The lecture is clear: they cannot prove who sent a message.
- Hash functions sound like encryption. They are not used for encryption; they are one-way fingerprints.
- Digital signature vs encryption. A signature uses the sender's private key on the digest. Checking it uses the sender's public key.
- Certificate issuer vs certificate owner vs certificate holder. Only the CA signs the certificate.
- Jargon pairs: virus vs worm, Trojan vs rootkit, cracker vs hacker, adware vs spyware, vulnerability vs threat vs risk.
- Absolute words: "always", "never", "guarantees", "eliminates", "only". Check the lecture: TLS overhead is not zero, compression overhead is negligible, a stronger key is not always faster.
- Performance traps: upgrading the CPU when the disk or the handshake is the bottleneck. The bottleneck decides throughput, not the fastest device.
- Options that mix a real term with a wrong function (a real PKI function with a wrong definition).

**If the question says ___ → pick the option about ___**
1. "Permission refused even though the login was correct" → authorisation.
2. "Changed in transit", "altered address" → integrity.
3. "Denies placing the order", "buyer signed it" → non-repudiation.
4. "Keeps serving during a power failure at one site" → availability.
5. "Examine transactions after they happened" → auditing or traceability.
6. "Reads every frame passing the interface" → packet sniffer. "Forged source address" → IP spoofing.
7. "Extra workload the server cannot handle" → denial of service.
8. "Large volume of records securely between servers" → RSA to exchange a session key, symmetric encryption for the records.
9. "Store only the hash of a password" → the hash is hard to reverse.
10. "Fake e-mail from a trusted bank asking for credentials" → phishing.
11. "Signed the message digest with the sender's private key" → digital signature generation. "Compare digests after decrypting with the public key" → verification.
12. "Who signs the certificate" → the Certifying Authority. "Root of India's PKI" → the CCA.
13. "Negotiate cipher suites and compression" → Client Hello or Server Hello (handshake). "Encrypt application data" → record protocol.
14. "Throughput at the bottleneck" → 1 divided by the service demand of the bottleneck device.

## Practice walk-through

**Q1.** An online banking customer enters the correct username and password, but the system refuses access because they lack permission to approve corporate payments. Which aspect of legitimate use is enforced?
- Answer: C) Authorization of the customer
- Why: The login is correct, so identity and authentication pass. The refusal is about what the customer may do, which is authorisation (legitimate use card).
- Trap: "Authentication of the customer" sounds right because a password is involved, but the password check has already passed.

**Q2.** A customer's order is intercepted and the delivery address is changed before it reaches the seller. Which security category is violated?
- Answer: D) Integrity
- Why: Integrity prevents data from being modified by an attacker in transit (integrity card).
- Trap: "Confidentiality" is about hiding the content. Here the message was changed, not just read.

**Q3.** During TCP connection setup, which message both acknowledges the client's request and gives the server's starting sequence number?
- Answer: D) SYN, ACK
- Why: The second step of the three-way handshake sets SYN and ACK together: it acknowledges the first SYN and gives the server's sequence number (three-way handshake card).
- Trap: "SYN" alone starts the connection. It does not acknowledge anything.

**Q4.** A company must transfer a large volume of transaction records securely between two servers while keeping cryptographic work efficient. Which approach fits best?
- Answer: C) Use RSA to exchange a session key and symmetric encryption for the records
- Why: Asymmetric encryption is slow, so it is used only to exchange the session key. Symmetric encryption carries the bulk data (points-to-note card).
- Trap: "Use RSA encryption for all transaction records" is slow for bulk data, which the lecture says is not done with asymmetric keys.

**Q5.** A security administrator stores only hash values of passwords. Which hash property makes this useful?
- Answer: A) Obtaining the original message from the hash should be difficult
- Why: A hash is one-way. A stolen hash should not reveal the password (hash function properties card).
- Trap: "The hash must be larger than the original message" is false: a hash has a fixed size, usually smaller than the message.

**Q6.** A fake e-mail from a trusted bank asks customers to enter their login credentials on a fake website. Which pair of jargon terms fits?
- Answer: C) Social Engineering and Phishing
- Why: Phishing is social engineering through official-looking e-mail to get passwords. The pair names both the method and the family.
- Trap: "Adware and Spyware" are software that shows ads or collects data. They do not describe a fake login e-mail.

**Q7.** An attacker changes a digitally signed message in transit. Which part of verification is most likely to reveal it?
- Answer: C) Comparison of the received message digest with the decrypted digest
- Why: The receiver hashes the message it got, decrypts the signature with the sender's public key, and compares the two digests. A change makes them differ (digital signature verification card).
- Trap: "Generation of the sender's public key" is not part of verification. The public key is used, not generated, at this step.

**Q8.** A public key certificate holds the server's name, serial number, validity and public key. Who digitally signs it?
- Answer: D) The Certifying Authority (CA)
- Why: The CA verifies the certificate contents and signs it with its private key, which binds the key to the named owner (Certifying Authority card).
- Trap: "The server administrator" owns the key but cannot be the one who vouches for it.

**Q9.** A TLS client lists several cipher suites and compression methods in its Client Hello. Why?
- Answer: D) To allow both parties to agree on compatible security mechanisms
- Why: The handshake lets client and server agree on algorithms that both support (TLS handshake messages card and handshake decides card).
- Trap: "To provide the server's public key" is what the server sends (in its certificate), not what the client lists.

**Q10.** In a client-server interaction diagram, a directed arc from one node to another represents:
- Answer: C) A message transmitted between nodes
- Why: Arcs show a message sent to another node, labelled with the probability of that path and the message size (CSID card).
- Trap: "The execution time of a server process" is not what an arc means. Times are in the node or elsewhere in the model.

## 60-second recap

- Legitimate use: identification says who, authentication proves it, authorisation decides what.
- Six security categories: confidentiality (hide), integrity (no change), availability (up), non-repudiation (cannot deny), auditing (trail), and legitimate use.
- Sniffing reads frames passively. IP spoofing forges the source. Denial of service overloads the server.
- The TCP handshake: SYN, then SYN-ACK, then ACK. The middle message does two jobs.
- Symmetric keys are fast with one shared key, but cannot prove who sent a message. Asymmetric keys are slow, with a public and a private key.
- Use asymmetric encryption to swap the session key, and symmetric encryption for bulk data.
- Hash functions are one-way fixed-size fingerprints for integrity and authentication, never for encryption.
- Digital signature: hash the message, encrypt the digest with the sender's private key. The receiver decrypts with the public key and compares digests.
- A certificate binds a public key to its owner, signed by a Certifying Authority. PKI covers issue, validate, revoke and manage keys. India's root is the CCA.
- SSL was first developed by Netscape and superseded by TLS. TLS runs on top of TCP and under HTTP.
- TLS Handshake agrees the algorithms and exchanges secrets. TLS Record encrypts, authenticates and compresses the data.
- TLS costs round trips, bytes and processing time. Session reuse skips most of the handshake.
- Throughput = 1 / service demand at the bottleneck. Securing every page moves the bottleneck to the server CPU, to about 19.3 requests per second.
- An accelerator or cached sessions raise throughput again, and the bottleneck moves back to the disk (100) or to the CPU at about 43.67.

---

Coverage check: 45/45 mock questions answerable from this guide.
