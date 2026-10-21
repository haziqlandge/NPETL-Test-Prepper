Week 6
Mock 1
Q1) Which security category protects the content of messages or data transmitted over the Internet from unauthorized people?
A) Availability
B) Auditing or traceability
C) Confidentiality
D) Authentication
Correct: C

Q2) Which security category refers to the process of examining transactions after they have taken place?
A) Confidentiality, which keeps message contents secret
B) Non-repudiation, which stops a sender denying a message
C) Integrity, which prevents unauthorized modification
D) Auditing or traceability, which examines transactions after they occur
Correct: D

Q3) A program receives every data-link frame that passes its network interface, so it can read traffic not addressed to it. What is this program called?
A) Packet sniffer
B) IP spoofer that changes the source address of packets
C) Rootkit that hides itself inside the operating system core
D) Firewall that blocks unauthorized access to a network
Correct: A

Q4) An attacker does not merely listen to packets but modifies them while they travel across the network. Which kind of attack is this?
A) Passive attack
B) Active attack, which alters packets while they are in transit
C) Denial-of-service attack
D) Phishing attack
Correct: B

Q5) An attacker creates a large number of partially opened TCP connections, generating extra workload that the server cannot handle. Which category of attack is this?
A) Sniffing
B) IP spoofing
C) Denial of service
D) Non-repudiation failure
Correct: C

Q6) A message arrives claiming to come from a trusted router, because the attacker altered the source address in the packet headers. Which attack has been carried out?
A) IP spoofing
B) Packet sniffing
C) Denial of service
D) Social engineering
Correct: A

Q7) A seller keeps evidence that a buyer digitally signed an order, so the buyer cannot later deny placing it. Which security category is being provided?
A) Availability
B) Confidentiality
C) Integrity
D) Non-repudiation
Correct: D

Q8) A cloud storage service keeps serving customers during a power failure at one data centre by switching to a backup site. Which security category is being served?
A) Confidentiality
B) Availability
C) Integrity
D) Non-repudiation
Correct: B

Q9) A system uses one secret key both to encrypt and to decrypt messages, and hardware implementations of such algorithms run much faster than software ones. What type of cryptographic algorithm is this?
A) Asymmetric key algorithm
B) Hash function
C) Symmetric key algorithm
D) Digital signature scheme
Correct: C

Q10) According to the lecture, which asymmetric key length is classed as a high-strength key?
A) 512 bits
B) 1024 bits
C) 2048 bits
D) 4096 bits
Correct: D

Q11) An algorithm encrypts data in fixed-size blocks, such as the 8-byte blocks used by RC2. How does this type of algorithm compare with stream ciphers?
A) Block algorithms are typically slower than stream algorithms
B) Block algorithms are typically faster than stream algorithms
C) Block algorithms work on single bytes and are therefore faster
D) Block algorithms cannot be used to encrypt data
Correct: A

Q12) A hash-based scheme must detect a valid session that an attacker records and resends later. Which hash-related threat is this?
A) Masquerade
B) Timing modification
C) Content modification
D) Sequence modification
Correct: B

Q13) An anti-virus tool compares a file's hash value with a stored reference value to decide whether the file has been altered. Which application of hash functions is this?
A) Bulk encryption of large volumes of transaction records
B) Session key distribution between two communicating servers
C) Data compression of large files before transmission
D) Integrity checking, such as virus and malware scanning
Correct: D

Q14) Which hashing algorithms were developed by Ron Rivest?
A) SHA-1 and SHA-2
B) MD4 and MD5, the algorithms of 1990 and 1994
C) RIPEMD-160 and Whirlpool
D) GOST-3411 and Tiger
Correct: B

Q15) A cryptographer warns that a hash function is weak if an attacker can find two different documents that produce the same digest. Which property of a hash function is being violated?
A) It should be easy to compute the hash value of any message
B) It should be hard to recover the original message from its hash value
C) It should be very hard to find another message with the same hash
D) The hash must always be longer than the message it summarises
Correct: C

Mock 2
Q1) Which term describes software that invades a computer in the form of persistent pop-up advertisements?
A) Adware
B) Spyware
C) Cracker
D) Worm
Correct: A

Q2) Which term describes someone who breaks into computers or networks without authorization, often to steal valuable information, and is also called a "black hat" hacker?
A) Hacker
B) Probe
C) Cracker
D) Rootkit, a hidden Trojan inside the operating system
Correct: C

Q3) Which self-replicating program spreads by copying itself from one computer to another over a network or through e-mail attachments, without attaching to another program file?
A) Virus
B) Worm
C) Trojan horse
D) Spyware
Correct: B

Q4) Which term describes a "back door" program that gives an intruder remote control of a computer without the owner's knowledge, and that can arrive inside thousands of free software packages?
A) Probe, a program that gathers information about a system
B) Firewall, software or hardware that blocks unauthorized access
C) Rootkit, hidden deep in the operating system core
D) Trojan horse
Correct: D

Q5) Which term describes the probability that a vulnerability will cause a harmful result?
A) Risk
B) Threat
C) Vulnerability
D) Probe
Correct: A

Q6) Which three security categories does a digital signature address?
A) Confidentiality, availability and auditing traceability
B) Authentication, non-repudiation and integrity
C) Availability, confidentiality and non-repudiation
D) Authentication, auditing and confidentiality
Correct: B

Q7) In the digital signature generation process, the sender encrypts the message digest using which key?
A) The sender's public key
B) The receiver's public key
C) The sender's private key
D) The receiver's private key
Correct: C

Q8) A digital certificate is an electronic document used to prove ownership of which key?
A) A symmetric session key
B) The server's private key
C) A hash function output
D) A public key
Correct: D

Q9) In the server information carried in an X.509 certificate, which field identifies the Certifying Authority that issued it?
A) Issuer CA
B) Serial number of the certificate
C) Validity
D) Name
Correct: A

Q10) Which PKI function cancels a previously issued certificate and publishes the cancellation in a Certificate Revocation List?
A) Certificate issuance
B) Certificate revocation
C) Certificate validation
D) Public key cryptography
Correct: B

Q11) Which body sits at the root of India's public key infrastructure and licenses the Certifying Authorities?
A) ICANN, which allocates Internet names and numbers
B) The Internet Advisory Board
C) Controller of Certifying Authorities (CCA)
D) IEEE, a body for electrical and electronics engineering
Correct: C

Q12) Which organization first developed SSL, and which protocol later superseded it?
A) Netscape; TLS
B) IETF; HTTP
C) NSA; SHA-3
D) Ron Rivest; RSA
Correct: A

Q13) According to the lecture, where does TLS sit relative to TCP?
A) TLS runs beneath TCP as a physical-layer protocol
B) TLS replaces IP addressing with its own routing scheme entirely
C) TLS runs only inside UDP datagrams, never over TCP at all
D) TLS runs on top of TCP as a session-layer protocol
Correct: D

Q14) Which of the following functions belongs to the TLS Record Protocol rather than the Handshake Protocol?
A) Selecting the public-key algorithm used to transmit the shared secret
B) Encrypting and decrypting application data with the bulk cipher
C) Authenticating the server certificate during the handshake
D) Choosing the compression algorithm for the session
Correct: B

Q15) Which of the following is NOT listed among the overheads caused by TLS?
A) Increase in round-trip times
B) Byte overhead
C) Disk seek time
D) Processing time at the client
Correct: C

Mock 3
Q1) In a client-server interaction diagram, how are the start and finished nodes drawn compared with internal nodes?
A) All nodes are drawn as squares
B) Start and finished nodes are squares, and internal nodes are circles
C) Start and finished nodes are circles, while internal nodes are drawn as squares
D) Start and finished nodes are arrows, and internal nodes are circles
Correct: B

Q2) The lecture's Client Hello message contains several fields. Which field is 28 bytes long?
A) The client's random number, generated fresh for each handshake
B) The session identifier, which can be 0 to 32 bytes long
C) The cipher suite list supported by the client, 2 bytes
D) The protocol version, which is one byte in the example
Correct: A

Q3) In the lecture's example, the Server Hello message totals 813 bytes, of which the X.509 server certificate is 750 bytes. Which element of the Server Hello occupies just 2 bytes?
A) The server's random number
B) The compression method
C) The server's cipher suite
D) The server session ID, which can be 0 to 32 bytes long
Correct: C

Q4) After the client's key exchange, the server returns a message that verifies the handshake. How many bytes does this server finished message occupy in the lecture?
A) 27 bytes, the same size as the client finished message
B) 48 bytes
C) 68 bytes
D) 813 bytes
Correct: A

Q5) Which compression method is listed for the TLS Record Protocol, with negligible overhead?
A) Huffman coding applied to each record payload block
B) Lempel-Ziv-Stac (LZS)
C) Run-length encoding of the record payload, applied per block
D) Gzip
Correct: B

Q6) Which part of the TLS handshake overhead falls on the server?
A) Verification of the server certificate
B) Encryption of the master secret with the server's public key
C) Decrypting the master secret with the server's private key
D) Encryption of the server's certificate using the client's public key, sent before the Hello messages
Correct: C

Q7) In the lecture's throughput model, web server throughput equals 1 divided by the service demand at which resource?
A) The resource with the lowest service demand, which is used first
B) The bottleneck device, which has the highest service demand
C) The client device only
D) The network link with the lowest delay
Correct: B

Q8) In the lecture's example with no TLS, the server disk is the bottleneck. What throughput does that give?
A) 19.3 requests per second
B) 31.43 requests per second
C) 43.67 requests per second
D) 100 requests per second
Correct: D

Q9) In the same example, securing every page makes the server CPU the bottleneck, with a service demand of about 0.0517 seconds. What is the resulting throughput?
A) 19.3 requests per second
B) 0.0517 requests per second
C) 51.7 requests per second
D) 100 requests per second
Correct: A

Q10) When only part of the site is secured (40% of requests are for insecure documents), why does throughput fall less than when all pages are secured?
A) The client's service demand goes to zero
B) The disk becomes the only bottleneck
C) The server CPU's service demand becomes a lower weighted average
D) Cryptographic accelerators are installed automatically on every server in the network
Correct: C

Q11) If 60% of connections reuse cached session states, the server CPU service demand drops to about 0.0229 seconds. What throughput results?
A) 19.3 requests per second
B) 43.67 requests per second
C) 31.43 requests per second
D) 100 requests per second
Correct: B

Q12) With a cryptographic accelerator that speeds up the handshake by a factor of 50, which device becomes the bottleneck in the lecture's example?
A) Server disk
B) Client
C) Network
D) Server CPU, which is still doing the encryption work
Correct: A

Q13) Which type of digital certificate is used to identify a web site to browsers?
A) Client certificate
B) Symmetric session key
C) Message digest
D) Server certificate
Correct: D

Q14) Why are symmetric key algorithms, on their own, not suitable for authentication or non-repudiation?
A) They are too slow for any authentication use at all
B) They produce digests that are always shorter than the messages they cover
C) They use keys that are too long to store safely
D) Both parties hold the same key, so it cannot show who sent a message
Correct: D

Q15) Which PKI function is responsible for the generation, distribution, administration and control of cryptographic keys?
A) Certificate issuance
B) Certificate validation
C) Public key cryptography
D) Certificate revocation, which cancels a previously issued certificate
Correct: C
