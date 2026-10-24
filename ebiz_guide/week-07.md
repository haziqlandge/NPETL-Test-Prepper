# Week 7 — Digital Payments, Interoperability, EDI and XML, Web Services, Cloud

## In one breath

This week has five lectures. (1) How people pay for things online. (2) Why the computers of two companies struggle to talk to each other. (3) The old way (EDI, Electronic Data Interchange) and the new way (XML, Extensible Markup Language) of sending business documents. (4) Web services, where one program calls another over the internet. (5) Cloud computing, where you rent computing power instead of owning it.

**The big analogy:** Ordering food on Swiggy. You pay the app (payment system). Swiggy's app and the restaurant's billing software must understand each other (interoperability). The order slip has a fixed layout both sides can read (EDI, XML). Swiggy's app calls the restaurant's menu service over the internet (web services). The whole app runs on rented servers you never see (cloud).

---

## Mind map

Short forms used in the tree, spelled out once here: TLS (Transport Layer Security); SET (Secure Electronic Transaction); B2B (business to business); EFT (Electronic Funds Transfer); SWIFT (Society for Worldwide Interbank Financial Telecommunication); VAN (Value-Added Network); AIAG (Automotive Industry Action Group); AEB (Asia EDIFACT Board); X.12 (the US and Canada EDI standard); EDIFACT (EDI for Administration, Commerce and Trade, the European standard); AS1 to AS4 (EDI over the internet protocols); HTTP (HyperText Transfer Protocol); SOAP (Simple Object Access Protocol); WSDL (Web Services Description Language); UDDI (Universal Description, Discovery and Integration); REST (REpresentational State Transfer); RPC (Remote Procedure Call); RMI (Remote Method Invocation); EJB (Enterprise JavaBeans); CORBA (Common Object Request Broker Architecture); IaaS (Infrastructure as a Service); PaaS (Platform as a Service); SaaS (Software as a Service).

```text
WEEK 7: Paying, connecting and renting computing
├── 1. Digital payments
│   ├── Payment system = value moves from payer to beneficiary
│   ├── 4 parts: instruments, rules, institutions, legal system
│   ├── 4 assessment lenses: technological, economic, social, regulatory
│   ├── Payment cards: credit, debit, charge
│   ├── Card steps: authenticate, check and hold, settle
│   ├── Closed loop (2 parties) vs open loop (3 or more)
│   ├── Card safety: TLS link, payment gateway, SET protocol
│   ├── Peer-to-peer: PayPal (third party) vs bank app
│   ├── Electronic cheque (CyberCash)
│   ├── Digital cash: identifiable/anonymous, online/offline
│   ├── Double spending (copying a digital coin)
│   ├── E-wallet: server-side or client-side
│   ├── Smart card: chip on the card (Mondex, Visa Cash)
│   └── B2B payments: SWIFT, EFT, online bill payment
├── 2. Interoperability (systems must talk)
│   ├── Supply chain integration = collaboration + interoperability
│   ├── 4 dimensions: data, service, process, business
│   ├── 3 technical layers: communication, content/data, process
│   ├── Middleware: RPC, RMI, EJB, CORBA
│   ├── Different databases and different meanings
│   └── Worked example: vendor-managed inventory (VMI)
├── 3. EDI and XML (business documents)
│   ├── EDI = precisely defined transactions, agreed standards
│   ├── 5 basic steps: prepare, outbound translate, send, inbound translate, process
│   ├── Standards: X.12 (US, Canada), EDIFACT (Europe), AIAG (auto), AEB (Asia)
│   ├── Links: peer-to-peer (direct) or VAN (third-party network)
│   ├── EDI over internet: AS1 (mail), AS2 (HTTP), AS3 (FTP), AS4 (web services)
│   ├── 6 benefits: cost, speed, accuracy, security, integration, just-in-time
│   ├── 10 implementation cost items
│   ├── XML = self-describing tagged text; wrapper and parser
│   └── XML frameworks: eCO, cXML, BizTalk, RosettaNet, ebXML, XML/EDIFACT
├── 4. Web services (software calls software)
│   ├── Machine-to-machine interaction over a network
│   ├── SOAP = XML envelope; WSDL = interface; UDDI = directory
│   ├── REST = call a URL path; readable; JavaScript friendly
│   ├── Intra-enterprise vs inter-enterprise workflow
│   ├── Orchestration = one conductor; choreography = no conductor
│   └── Composite web services: 5 cycles reduced to 2
└── 5. Cloud computing (rent, do not own)
    ├── 6 characteristics: remotely hosted, ubiquitous, commodified; pooled, elastic, measured
    ├── Service models: IaaS, PaaS, SaaS
    ├── Deployment models: private, community, public, hybrid
    ├── Advantages: cheap PCs, cheap software, auto updates, huge storage
    └── Disadvantages: needs internet, slow, security, data loss, hard to move
```

---

## Concept cards

### 1. Digital payments

**Payment system**
- What it is: a mechanism that moves value from a payer to a beneficiary, so the payer's debt to the beneficiary is cleared. The RBI (Reserve Bank of India) describes it as a two-way flow of payments for goods and services.
- Think of it as: the whole pipe between your wallet and the shopkeeper's till, including the banks, the rules and the courts behind it.
- Spot it in a question: "mechanism", "transfer of value", "payer and beneficiary", "discharges the obligation" → the right option describes money moving so the payer is settled. Wrong options describe bandwidth, product catalogues or encryption of messages.

**Components of a payment system**
- What it is: four parts. Instruments (the thing you pay with), rules, regulations and procedures, institutions (banks and networks), and legal systems (the law that makes the transfer enforceable).
- Think of it as: a cricket match. The bat and ball are the instruments, the laws of the game are the rules, the board and umpires are the institutions, and the courts are what you call when someone cheats.
- Spot it in a question: "cheque, card or cash" → instruments; "who runs it, banks or card networks" → institutions; "procedures, guidelines" → rules; "enforce in court" → legal system.

**Technological aspect (assessment criterion)**
- What it is: the security side of an electronic payment system. It has four factors: authenticity, non-repudiation, integrity and confidentiality.
- Think of it as: the seal, signature and lock on a valuable parcel.
- Spot it in a question: "security", "encrypt", "signature", "tamper-proof" → technological aspect.

**Authenticity**
- What it is: proof that the sender or the message is really who it says it is.
- Think of it as: the bank counter checking your photo ID before it gives you the cash.
- Spot it in a question: "impersonation", "fake sender", "verify the identity of the payer" → authenticity.

**Non-repudiation**
- What it is: the sender cannot later deny having sent or approved the transaction, because there is proof.
- Think of it as: the signed receipt you get for a registered-post letter. You cannot later say you never sent it.
- Spot it in a question: "later deny", "cannot back out", "evidence in a dispute", "proof that the payer initiated it" → non-repudiation. Do not confuse with integrity.

**Integrity**
- What it is: the message or data is not changed on the way.
- Think of it as: a sealed juice box. If the seal is broken you know someone tampered with it.
- Spot it in a question: "altered", "changed in transit", "tampered with" → integrity.

**Confidentiality**
- What it is: only the intended receiver can read the content.
- Think of it as: a letter in a sealed envelope that only the addressee can open.
- Spot it in a question: "read by others", "eavesdropping", "keep the details private" → confidentiality (usually achieved with encryption).

**Economic aspect (assessment criterion)**
- What it is: four factors that decide whether the business side works: cost of transactions, user reach, value mobility and financial risk.
- Think of it as: the four things a shop owner counts before taking a new payment method: how much each sale costs, how many customers can use it, how easily money moves, and how much could be lost.
- Spot it in a question: "fee per transaction", "how many customers can use it", "money moves easily", "risk of losing funds" → economic aspect.

**Cost of transactions**
- What it is: what it costs to process each payment.
- Think of it as: the commission a shop pays the card company for every swipe.
- Spot it in a question: "per-transaction fee", "processing fee", "cheap to run" → cost of transactions.

**User reach**
- What it is: how many people and places can use the payment system.
- Think of it as: a payment app accepted at every kirana shop versus one accepted only inside one mall.
- Spot it in a question: "worldwide acceptance", "how many customers can use it" → user reach.

**Value mobility**
- What it is: how easily value (money) can be moved from one party or place to another.
- Think of it as: sending a bank transfer from Chennai to Kolkata versus carrying a bag of notes.
- Spot it in a question: "money moves between parties", "transfer value easily". Trap: "mobility" also appears in the social aspect, but there it means the person being mobile.

**Financial risk**
- What it is: the chance of losing money, through fraud, default or a failing partner.
- Think of it as: the risk a shop takes when it accepts a cheque that might bounce.
- Spot it in a question: "risk of loss", "fraud loss", "who pays if the money is not received" → financial risk.

**Social aspect (assessment criterion)**
- What it is: how the system feels to ordinary people. Three factors: anonymity, user friendliness and mobility.
- Think of it as: how private it feels, how easy it is to use, and whether you can use it on the go.
- Spot it in a question: "people with little technical training", "keep the purchase private", "use across devices" → social aspect.

**Anonymity**
- What it is: the payer's identity is hidden from the merchant or from other people.
- Think of it as: paying cash at a paan shop, where nobody writes your name down.
- Spot it in a question: "hide the identity", "untraceable purchase", "customer wants privacy" → anonymity (smart cards and anonymous e-money give it).

**User friendliness**
- What it is: how easy the system is for an ordinary person to use.
- Think of it as: one tap to pay (like UPI, the Unified Payments Interface) versus a form with twenty fields.
- Spot it in a question: "easy to use", "little technical training", "simple interface" → user friendliness.

**Mobility (social aspect)**
- What it is: the user can pay from anywhere, on any device, and keep the payment working when they switch devices.
- Think of it as: WhatsApp chats that show up on your phone and your laptop.
- Spot it in a question: "across devices", "on the move", "mobile phone payments" → social mobility.

**Regulatory aspect (assessment criterion)**
- What it is: the system must follow government rules and laws.
- Think of it as: the traffic rules every driver on the road must obey, whatever car they drive.
- Spot it in a question: "government regulations", "must comply with the law", "central bank rules" → regulatory aspect.

**Payment cards**
- What it is: the umbrella term for all plastic cards used to make purchases.
- Think of it as: the plastic key to your money. Credit, debit and charge cards are three types of key.
- Spot it in a question: "plastic card", "swipe", "card used to buy things" → payment cards in general. Then pick the type from the wording (limit, bank account, month end).

**Credit card**
- What it is: a card with a spending limit based on the user's credit history. The bank lends you the money and you pay later.
- Think of it as: a local shopkeeper who lets you take goods on credit up to a limit he sets after checking your past payments.
- Spot it in a question: "spending limit", "credit history", "borrowed money", "pay later" → credit card.

**Debit card**
- What it is: removes the amount from the cardholder's bank account and transfers it to the seller's bank account.
- Think of it as: paying cash from your own pocket right away. The money leaves you now.
- Spot it in a question: "removes from bank account", "transfers to seller's account" → debit card.

**Charge card**
- What it is: a card with no spending limit. The full amount is due at the end of the billing period.
- Think of it as: a monthly tab at a club or restaurant. You eat freely and settle the bill at month end.
- Spot it in a question: "no spending limit", "paid in full at end of billing period" → charge card.

**Payment acceptance and processing**
- What it is: the three steps a merchant follows once it gets a customer's card details: (1) authenticate the card, (2) check with the card issuer and put a hold on the money, (3) settlement.
- Think of it as: a hotel check-in. The hotel checks your ID, confirms and blocks the room, and the bill is settled at checkout.
- Spot it in a question: "after the merchant receives card information", "steps in order" → payment acceptance and processing. Read the scenario to see which step is described.

**Authorization hold**
- What it is: the card issuer confirms that the money or credit exists and reserves that amount. Nothing is moved yet.
- Think of it as: the hotel's pre-authorisation on your card for a deposit. The money is blocked, not spent.
- Spot it in a question: "verify available funds before approving", "place a hold", "reserve the credit line" → authorization hold (bank Q2 answer).

**Settlement**
- What it is: the actual movement of money to the merchant after the hold. It is the final step.
- Think of it as: the bank clearing your cheque at the end of the day, when the blocked money really goes across.
- Spot it in a question: "money actually transferred", "final payment to the merchant" → settlement.

**Card processing center**
- What it is: the central hub that receives card requests, passes them to the card networks and issuing banks, and sends back the answer. The lecture slides call it the Card Processing Center (CPC).
- Think of it as: the main sorting office of a courier company, which routes every parcel to the right city.
- Spot it in a question: "processing center", "hub", "routes the request to the card company" → CPC.

**Card issuer (issuing bank)**
- What it is: the bank that gave the customer the card. It checks the limit or balance the card draws on, approves or declines each request, and holds the money or credit behind the card.
- Think of it as: the bank that issued your card and decides whether a swipe goes through.
- Spot it in a question: "issuing bank", "card issuer", "verify funds with the issuer" → card issuer. The merchant checks with it during the hold.

**Closed loop system**
- What it is: the card issuer pays the merchants that accept its card directly, with no middleman. Two parties only.
- Think of it as: a shop chain's own gift card, usable only inside that chain.
- Spot it in a question: "issuer pays merchants directly", "without an intermediary", "two parties" → closed loop.

**Open loop system**
- What it is: a system with three or more parties. Visa and MasterCard are the examples in the lecture.
- Think of it as: a meal voucher accepted by many restaurants through a network company that settles between them.
- Spot it in a question: "three or more parties", "Visa or MasterCard" → open loop.

**Merchant account**
- What it is: the special account an online merchant must set up before it can process card payments for internet transactions. To open one, a new merchant supplies a business plan, details of existing bank accounts, and business and personal credit histories.
- Think of it as: a shop's card-swipe counter that the bank approves only after checking the shop owner's background.
- Spot it in a question: "online merchant must set up", "business plan and credit history required" → merchant account.

**TLS (Transport Layer Security) for card transactions**
- What it is: an encryption protocol that protects data on the connection between the customer and the server. It gives mutual authentication (client and server check each other). It does not protect the data after it reaches the merchant's server.
- Think of it as: an armoured van carrying cash from the shop to the bank. The van is safe on the road, but it does not check what the bank does with the money.
- Spot it in a question: "encrypted connection", "both sides authenticate" → TLS. The gaps are: no guarantee the merchant keeps card data safe, and no guarantee the merchant is allowed to receive that card's payment.

**Payment gateway (trusted third party service)**
- What it is: a trusted third-party service that takes the card data and handles the payment for the merchant. It is the lecture's answer to the TLS gaps.
- Think of it as: an escrow agent in a property deal. A neutral party holds and checks the money between buyer and seller.
- Spot it in a question: "trusted third party", "gateway", "fix for the TLS gap" → payment gateway.

**SET (Secure Electronic Transaction) protocol**
- What it is: an older protocol for secure card payments on the internet. The slides say it is "not widely accepted".
- Think of it as: a special high-security lock that few shops have fitted.
- Spot it in a question: "SET protocol" → it is a real card-payment protocol and appears in the internet-based example list. But when the question asks for the practical fix for the TLS gap, the lecture's answer is the payment gateway, not SET.

**Trusted third party (TTP)**
- What it is: an independent middleman that both sides trust. It holds, routes or checks the payment in between.
- Think of it as: the bank that holds the security deposit in a house rental, so neither side can run off with it.
- Spot it in a question: "trusted third party" → PayPal in peer-to-peer; payment gateways in card safety; TTP is also the example for credit-card payments on the internet.

**Peer-to-peer (P2P) payment methods**
- What it is: online technology that lets a customer transfer funds from a bank account or credit card to another individual's account, via the internet or a mobile phone. Two types: through a trusted third party (for example PayPal), or through the web or mobile interface the bank provides.
- Think of it as: paying a friend with UPI from your phone instead of handing over cash.
- Spot it in a question: "one person pays another person", "via mobile phone or internet" → P2P. Then check whether a third party or the bank's own app does the work.

**PayPal**
- What it is: a digital payment system and the lecture's example of a trusted-third-party peer-to-peer method.
- Think of it as: a digital post office box that holds money between two people.
- Spot it in a question: "PayPal" → trusted-third-party P2P. Its steps: sender sets up an account and requests to send, sender funds the payment by credit card, receiver is e-mailed, receiver moves money to a bank or asks for a cheque.

**Electronic cheque (e-cheque)**
- What it is: an electronic version of the paper cheque. The customer's wallet software stores the checking-account information. The payment is encrypted in layers, and the merchant sends it to the bank. Example: CyberCash.
- Think of it as: writing a paper cheque, but sealing it inside two envelopes that need two different keys.
- Spot it in a question: "similar to paper cheques", "wallet stores checking-account information", "CyberCash" → electronic cheque.

**Public key and private key (as used in e-cheques and digital cash)**
- What it is: a matched pair of keys. What one key locks, only the other key can unlock. The lecture uses them in two layers: the bank's public key protects the payment details, and the customer's private key protects the whole package.
- Think of it as: a padlock you give to everyone (public) and the only key to it stays in your pocket (private).
- Spot it in a question: "encrypted with the bank's public key" → only the bank's private key can open it.

**Digital cash (e-cash)**
- What it is: computer files that hold huge random numbers, digitally stamped by the bank. The customer's wallet software keeps them. The lecture says they are encrypted with the bank's private key and then the customer's public key. They can be identifiable or anonymous, and online or offline.
- Think of it as: digital banknotes. Each note is a unique file with a unique number, like a gift card with a unique code.
- Spot it in a question: "digital coins", "serial number", "wallet stores the coins", "stamped by the bank" → digital cash.

**Double spending**
- What it is: spending the same digital coin twice. A copy of a file is easy to make, so the same coin can be used again unless someone checks.
- Think of it as: photocopying a 500-rupee note and using both copies.
- Spot it in a question: "same electronic token spent twice", "copy of money", "anonymous and offline money" → double spending. Online checking by the bank stops it (bank Q1 answer).

**Identifiable electronic money**
- What it is: the bank gives every coin file a serial number, so the coin can be traced to the holder. Example: CyberCash.
- Think of it as: a cheque with a name written on it. The bank knows whose it is.
- Spot it in a question: "the bank provides the serial number", "can be traced" → identifiable electronic money.

**Anonymous electronic money**
- What it is: the customer creates the serial number, "blinds" it (hides it), and the bank signs it without seeing the number. The bank can verify the coin is genuine but cannot link it back to the customer. Example: DigiCash.
- Think of it as: putting a note inside carbon paper before handing it to the bank. The bank stamps the outside, but never sees what is written inside.
- Spot it in a question: "customer creates the serial number", "blinded", "signed by the bank" → anonymous electronic money.

**Online electronic money**
- What it is: money that is validated online, with the bank actively taking part in each transaction. Example: CyberCash.
- Think of it as: a card swipe that calls the bank in real time to check the balance.
- Spot it in a question: "validated online", "active participation of the bank" → online electronic money.

**Offline electronic money**
- What it is: money that is not validated online. It moves peer to peer, straight from one person to another. Example: DigiCash. This is where double spending becomes a risk when the money is also anonymous.
- Think of it as: cash in your hand. The shopkeeper cannot phone the central bank to check the note, so they trust it.
- Spot it in a question: "not validated online", "peer to peer transaction" → offline electronic money.

**Electronic wallet (e-wallet)**
- What it is: a store for the customer's credit card numbers, electronic cash, owner identification and contact information. It saves the customer from typing the details again and makes shopping faster.
- Think of it as: the saved-cards-and-address feature on a shopping app. You type it once and it fills in every time after that.
- Spot it in a question: "enter the information just once", "saves card and address", "makes shopping efficient" → e-wallet.

**Server-side electronic wallet**
- What it is: the customer's information is stored on a remote server that belongs to a particular merchant or wallet publisher.
- Think of it as: a locker in the shop where the shop keeps your things for you.
- Spot it in a question: "stored on a remote server of the merchant or wallet publisher", "e-commerce company keeps customer card number on its own server" → server-side wallet.

**Client-side electronic wallet**
- What it is: the consumer's information is stored on his or her own computer.
- Think of it as: the wallet in your own pocket. Nobody else holds it.
- Spot it in a question: "stored on his or her own computer" → client-side wallet.

**Smart card**
- What it is: a card with a computer chip embedded on its face. Very common in Europe. Used for health care, transport, ID, retail, pay phones, loyalty programmes and bank machines. A reader asks for the user's PIN (Personal Identification Number). Bank machines load cash onto it, and merchants download cash from it. It gives the customer anonymity. The slides name GemPlus and MasterCard as leading suppliers, and Mondex and Visa Cash as examples.
- Think of it as: a prepaid metro card with a chip. The money lives on the card itself, not in a bank account.
- Spot it in a question: "chip on the card", "PIN", "loaded with cash", "Mondex or Visa Cash", "anonymity of purchase" → smart card.

**SWIFT (Society for Worldwide Interbank Financial Telecommunication) network**
- What it is: the secure messaging network that banks use to send payment instructions to each other, including across countries.
- Think of it as: a secure courier network that only banks are allowed to use, carrying signed money instructions.
- Spot it in a question: "interbank", "international transfer", "SWIFT" → electronic funds transfer, or B2B payments.

**EFT (Electronic Funds Transfer)**
- What it is: moving money electronically from one bank account to another.
- Think of it as: an online bank transfer (for example, NEFT (National Electronic Funds Transfer) or RTGS (Real Time Gross Settlement) in India, which are not named in the slides but work the same way).
- Spot it in a question: "electronic transfer between bank accounts" → EFT. Its internet-era match is SWIFT.

**Online B2B payments**
- What it is: business-to-business payments done online. The slides list three: electronic funds transfer, online bill payment, and B2B payment gateways.
- Think of it as: a factory paying its raw-material supplier through the bank's website instead of writing cheques.
- Spot it in a question: "business pays business online", "bill payment between firms" → online B2B payments.

**Real-world payment and its internet twin (pairs to memorise)**
- What it is: the lecture matches each real-world method with an internet-based example. Cash equivalents: DigiCash and Millicent. Cheques: CyberCash. Credit card payments: trusted third parties (TTP) and SET. Electronic funds transfer: SWIFT.
- Think of it as: a matching exercise where each paper thing has an online twin.
- Spot it in a question: "which internet system matches cheques" → CyberCash. Options that swap the pairs are the usual trap.

**Millicent**
- What it is: named on the slide as a cash-equivalent internet payment system. The slide gives no further detail.
- Think of it as: an online version of small cash payments.
- Spot it in a question: "cash equivalent on the internet" → DigiCash or Millicent, not CyberCash.

### 2. Interoperability

**Supply chain (SC) integration**
- What it is: two parts working together. Collaboration (strategic) and interoperability (technical).
- Think of it as: two shops running one joint delivery business. They must agree on the plan (collaboration), and their billing and stock systems must read each other's data (interoperability).
- Spot it in a question: "supply chain integration" → it has two sides; pick the one the scenario is about.

**Collaboration (in SC integration)**
- What it is: the strategic side. Agreeing goals, sharing benefits and deciding how partners work together.
- Think of it as: two business owners deciding to share a warehouse and split the costs.
- Spot it in a question: "strategic", "agree on goals", "joint strategy" → collaboration. The lecture says collaboration is strategic.

**Interoperability (in SC integration)**
- What it is: the technical side. Systems from different partners exchange and use data correctly.
- Think of it as: two phones with different charging ports. You need a common adapter before the charger works.
- Spot it in a question: "technical", "systems exchange data correctly" → interoperability. The lecture says interoperability is technical.

**Interoperability of data (dimension)**
- What it is: finding and sharing information held in different databases, which sit on different machines, operating systems and database management systems (DBMS). Also resolving the meaning and structure differences in the content. EDI and XML are the main tools for this.
- Think of it as: two people writing the same address in different forms. The postman must still understand both.
- Spot it in a question: "database", "field name", "format", "different DBMS", "stock_level versus currentStockLevel" → data interoperability.

**Interoperability of service (dimension)**
- What it is: identifying, combining and running together applications that were designed separately. It needs a common architectural framework such as CORBA (Common Object Request Broker Architecture) or SOA (Service Oriented Architecture).
- Think of it as: lego bricks with the same studs. Pieces made by different factories still click together.
- Spot it in a question: "applications designed independently", "SAP and Oracle packages clash", "common architecture framework", "CORBA or SOA" → service interoperability.

**Interoperability of process (dimension)**
- What it is: linking different process descriptions so they form one joint process. It means coordinating a sequence of exchange steps. In web services this is done by orchestration or choreography.
- Think of it as: a relay race. Each runner must hand over the baton at the right point, in the right order.
- Spot it in a question: "order of steps", "coordinate the exchanges", "triggered at the right point", "composed workflow" → process interoperability.

**Interoperability of business (dimension)**
- What it is: whether the business itself fits together. Vision and culture, work methods, organisation structure, accounting systems and rules, and labour legislation. It may force the process to be re-engineered.
- Think of it as: two companies with different holiday calendars, pay rules and approval chains trying to share one project.
- Spot it in a question: "responsibilities", "policies", "work methods", "accounting rules", "labour law", "reengineer the process" → business interoperability.

**B2B interoperability technical layers**
- What it is: the three technical layers of business-to-business interoperability: communication level, content/data level and process level.
- Think of it as: a courier parcel. The carrier is the communication, the labelled contents are the content/data, and the delivery schedule is the process.
- Spot it in a question: "technical layers", "three layers" → pick the layer that matches the detail in the scenario. The fourth "business" dimension is not a technical layer.

**Communication level (technical layer)**
- What it is: exchanging messages between partners. Partners use many different protocols and frameworks. This layer translates and converts messages so that they can cross between heterogeneous protocols. It has two sub-levels: the network-protocol level (TCP/IP, which means Transmission Control Protocol and Internet Protocol: basic data transfer, low-level programming) and the object and component middleware level (RPC, RMI, EJB, CORBA).
- Think of it as: the postal service and a translator on the envelope. The letter gets from A to B, even if the sender and receiver speak different systems.
- Spot it in a question: "messages between partners", "protocols", "TCP/IP", "remote procedure call", "CORBA replaced by REST APIs" → communication level (bank Q6 answer).

**Content/data level (technical layer)**
- What it is: resolves the semantic (meaning) and structural (format) differences of documents. It decides whether a document is a purchase order, a request for quote or a product description. Its goal is independence from data models, formats and languages.
- Think of it as: a translator for the contents of the envelope. Is this a bill or a receipt? Does the word "price" include tax or not?
- Spot it in a question: "same word, different meaning", "price with or without tax", "which document type", "data format" → content/data level. EDI and XML frameworks work here.

**Semantic difference**
- What it is: the same concept is interpreted differently by two parties.
- Think of it as: "lunch at 1" meaning 1 pm to one person and 1 am to the other.
- Spot it in a question: "different interpretations of the same concept" → semantic difference. Example on the slide: "price" with tax or without tax.

**Structural difference**
- What it is: the same information is laid out in different formats or structures.
- Think of it as: an address written on one form with a PIN code box and on another with it in the middle of the line.
- Spot it in a question: "different formats", "different structure" → structural difference.

**Process level (technical layer)**
- What it is: linking process descriptions into collaborative processes. In the lecture's section on business processes it is split into intra-enterprise workflow (inside one company) and inter-enterprise workflow (across companies). In web services, processes are composed with orchestration or choreography.
- Think of it as: the timetable of a wedding that involves three different caterers. Each one knows its slot, and the whole event runs in order.
- Spot it in a question: "link process descriptions", "composed services", "workflow across firms" → process level.

**Middleware (object and component-based)**
- What it is: software in the middle that lets a program call functions or objects that live on another machine.
- Think of it as: a receptionist who connects your call to the right department in another office building.
- Spot it in a question: "invoke a remote object", "distributed objects" → middleware.

**Component**
- What it is: an independent piece of working functionality that is delivered as a black box. You see its interface, not the inside.
- Think of it as: a mixer-grinder. You know which button does what and what comes out, not how the motor is built.
- Spot it in a question: "black box", "presented through its interface" → component.

**RPC (Remote Procedure Call)**
- What it is: calling a function that runs on another computer as if it were local. The result comes back to you.
- Think of it as: phoning a colleague in another office, asking them to run a calculation and read back the answer.
- Spot it in a question: "invoke remote functionality", "procedure call across machines" → RPC. SOAP also invokes services using RPC (see web services).

**RMI (Remote Method Invocation) and EJB (Enterprise JavaBeans)**
- What it is: two Java-based middleware technologies. RMI lets one Java object call methods on another Java object remotely. EJB is a server-side component model for business applications written in Java.
- Think of it as: RMI is the direct phone line between two Java objects. EJB is a ready-made business department that runs on a Java server.
- Spot it in a question: "Java-based remote method calls" → RMI; "Java business components on the server" → EJB.

**CORBA (Common Object Request Broker Architecture)**
- What it is: an OMG (Object Management Group) standard that lets objects written in different languages and running on different machines call each other through a broker. The slides write it as "Common Object Broker Architecture" in one place and "Common Object Request Broker Architecture" in another. They are the same standard.
- Think of it as: a United Nations interpreter for software objects. Any language can speak, and the broker translates.
- Spot it in a question: "legacy CORBA-based integration", "common architecture across languages" → CORBA (middleware in the communication level, or the service framework).

**SOA (Service Oriented Architecture)**
- What it is: a common framework that treats software as reusable services which other applications can find and call.
- Think of it as: a shopping mall where every shop offers a service anyone can book.
- Spot it in a question: "common architectural framework", "service-oriented" → SOA, which is the service-interoperability answer.

**ERP (Enterprise Resource Planning)**
- What it is: large business software suites that run finance, inventory, HR and other departments. Examples in the slides: SAP R/3, Baan, PeopleSoft and Oracle E-Business Suite.
- Think of it as: the master software that runs every department of one big office.
- Spot it in a question: "SAP R/3 and Oracle E-Business Suite" → a service interoperability issue, because the two packages are technically incompatible.

**Intra-enterprise workflow**
- What it is: automation of steps inside one company. Traditional workflow systems and ERP systems do this.
- Think of it as: the approval chain inside one office, where a file goes from clerk to manager to accounts.
- Spot it in a question: "inside one company", "traditional workflow system", "ERP inside one firm" → intra-enterprise.

**Inter-enterprise workflow**
- What it is: automation of steps across independent companies. The slides say web services do this.
- Think of it as: the approval chain running between two offices in two different cities that do not share a boss.
- Spot it in a question: "across independent organisations", "two different companies share a workflow" → inter-enterprise, with web services.

**Vendor-managed inventory (VMI)**
- What it is: an arrangement where the supplier decides the stock levels in the retailer's store and sends replacement stock, based on the retailer's stock data.
- Think of it as: a milk supplier who checks your fridge and tops it up before you run out, instead of waiting for your order.
- Spot it in a question: "supplier manages the retailer's stock", "consignment", "reorder point" → VMI.

**Consignment stock**
- What it is: goods owned by the supplier but kept in the retailer's store. The retailer pays only when it starts to use them.
- Think of it as: a snack vending machine inside someone else's shop. The machine owner owns the snacks until a customer buys one.
- Spot it in a question: "supplier still owns the stock until used", "pay when consignment usage begins" → consignment stock.

**Reorder point**
- What it is: the stock level at which the supplier must send a new consignment.
- Think of it as: the "time to buy milk" line on your mental list.
- Spot it in a question: "calculate the reorder point", "on reaching the reorder point, generate a purchase order" → reorder point.

**Purchase order and invoice (in VMI)**
- What it is: a purchase order is the supplier's order document for new stock. An invoice is the bill sent after the stock is used.
- Think of it as: an order slip (purchase order) and a bill (invoice) in a restaurant.
- Spot it in a question: "generate purchase order", "send invoice" → the supplier's document steps in the VMI flow.

**UML (Unified Modeling Language) state chart diagram**
- What it is: a diagram that shows the states a system can be in and the events that move it from one state to another. The lecture uses it to model the supplier and retailer activities.
- Think of it as: a traffic light. Red, yellow and green are states, and a timer or a sensor triggers each move.
- Spot it in a question: "states and transitions" → state chart diagram.

**UML sequence diagram**
- What it is: a diagram that shows messages passing between parties in time order, with each party drawn as a vertical line.
- Think of it as: a WhatsApp chat log, with the time running down the page and each message drawn as an arrow between two people.
- Spot it in a question: "messages in time order between supplier and retailer" → sequence diagram (the lecture models the VMI information flow this way).

### 3. EDI and XML

**EDI (Electronic Data Interchange)**
- What it is: the exchange of electronic data between companies, using precisely defined transactions. It is also the set of hardware, software and standards that make this work.
- Think of it as: filling in a fixed-layout government form. Every field is in the same place, so the other side reads it without asking any questions.
- Spot it in a question: "precisely defined transactions", "standard electronic documents between companies" → EDI.

**EDI benefits**
- What it is: six benefits named on the slide. Cost saving, speed, accuracy, security, system integration and just-in-time support.
- Think of it as: a supplier that is cheap, fast, accurate, safe, well connected to your systems, and delivers just in time.
- Spot it in a question: "which benefit" → match the wording. "Reduce stock by arriving just when needed" is the just-in-time benefit.

**Just-in-time (JIT) support**
- What it is: supplies arrive exactly when production needs them, so the company holds less stock in its own warehouse.
- Think of it as: a dabbawala who delivers your tiffin at lunch time, not a week's supply on Monday.
- Spot it in a question: "arrive exactly when needed", "less stock in own warehouse" → just-in-time support.

**Traditional EDI**
- What it is: EDI on private or specialised networks. The slide says it is old, expensive and time-tested.
- Think of it as: a private courier company that only your big client uses.
- Spot it in a question: "traditional EDI", "old electronic standard", "established companies and governments use it" → traditional EDI.

**Internet-based EDI**
- What it is: EDI sent over the public internet using the EDIINT protocols (AS1 to AS4).
- Think of it as: the same fixed-layout form, but sent through the normal post rather than a private courier.
- Spot it in a question: "EDI over the internet", "secure and reliable EDI over the internet" → internet-based EDI (EDIINT).

**Basic EDI steps**
- What it is: the five steps of an EDI exchange. (1) Preparation of electronic documents, (2) outbound translation, (3) communication, (4) inbound translation, (5) processing the electronic documents.
- Think of it as: sending a letter in another language. Write it in your own language, translate it into the agreed standard, post it, the other side translates it back, and then acts on it.
- Spot it in a question: "which step comes after X" → follow the order above. Communication comes right after outbound translation.

**Preparation of electronic documents (EDI step 1)**
- What it is: the company creates the order or invoice in its own system, in electronic form.
- Think of it as: writing your shopping list on your own notebook before you convert it into the standard form.
- Spot it in a question: "the first step", "document created inside the company" → preparation.

**Outbound translation (EDI step 2)**
- What it is: converting the company's own data format into the agreed EDI standard format before sending.
- Think of it as: copying your handwritten order onto the standard order form the supplier understands.
- Spot it in a question: "before sending", "from internal format to standard format" → outbound translation.

**Communication (EDI step 3)**
- What it is: sending the translated document to the partner, over a direct link or through a value-added network.
- Think of it as: posting the sealed envelope.
- Spot it in a question: "sending the document", "transmission", "direct link or VAN" → communication.

**Inbound translation (EDI step 4)**
- What it is: converting the received standard document back into the receiving company's own format.
- Think of it as: the receiver copies the standard form into their own system's layout.
- Spot it in a question: "after receiving", "converted into own system's format" → inbound translation.

**Processing electronic documents (EDI step 5)**
- What it is: the receiving company's systems act on the document, for example by entering the order and starting fulfilment.
- Think of it as: the shop opening your order and packing it.
- Spot it in a question: "the final step", "the order is acted on" → processing.

**EDI standards**
- What it is: EDI works only when partners agree on compatible hardware, software and a common electronic form format. Several standards exist. The slide names AIAG, X.12 and EDIFACT, and mentions the AEB.
- Think of it as: everyone agreeing that a bill must be written in one language before anyone can read it.
- Spot it in a question: "companies must agree on a standard" → this is the common-standard requirement.

**AIAG (Automotive Industry Action Group)**
- What it is: an EDI standard body for the automotive industry.
- Think of it as: the car-industry's own dialect of EDI.
- Spot it in a question: "automotive industry standard" → AIAG.

**X.12**
- What it is: the EDI standard used in the United States and Canada. The purchase-order example on slide 59 is an ANSI (American National Standards Institute) X12 document, with transaction set 850 for purchase orders.
- Think of it as: the North American version of the standard form.
- Spot it in a question: "US and Canada", "ANSI X12" → X.12. Trap: X.12 is not the European standard.

**EDIFACT (EDI for Administration, Commerce and Trade)**
- What it is: an umbrella of EDI standards used in Europe.
- Think of it as: the European version of the standard form. The "E" in EDIFACT is for Europe.
- Spot it in a question: "Europe", "umbrella of standards", "ORDERS message in UNH+ format" → EDIFACT.

**AEB (Asia EDIFACT Board)**
- What it is: the Asian board that coordinates EDIFACT in Asia. India is a member, along with Japan, Korea, Hong Kong, China, Singapore, Taiwan and Malaysia.
- Think of it as: the regional committee that makes the European form work in Asia.
- Spot it in a question: "India", "Asia EDIFACT Board" → AEB, which is a member of the Asian EDIFACT group.

**Peer-to-peer EDI communication**
- What it is: trading partners connect directly to each other. The slide says it suits large companies. For example, an automotive manufacturer keeps a modem pool that hundreds of suppliers dial into. The drawback: a supplier that works with several manufacturers may need a different modem or VPN device and different software for each one.
- Think of it as: a dedicated phone line between two offices. It works well if the two offices trade a lot, and gets messy if one supplier has many such lines.
- Spot it in a question: "large companies", "connect directly to each trading partner", "modem pool" → peer-to-peer.

**VPN (Virtual Private Network)**
- What it is: a private, encrypted tunnel built over the public internet, so two sites can talk as if they had a private line.
- Think of it as: a private lane cut through a public road, with a locked gate at each end.
- Spot it in a question: "VPN device", "private encrypted link over the internet" → VPN. It is one of the things a supplier may need for each peer-to-peer link (slide 61).

**Value-Added Network (VAN)**
- What it is: a third-party service provider that receives EDI transactions, reads the "from" and "to" information, and routes each transaction to the right recipient. It also offers extra services: retransmitting documents, third-party audit information, acting as a gateway between transmission methods, and telecommunications support. VANs are run by telecom companies, industry consortia, or a large company for its suppliers.
- Think of it as: the central post office that sorts everyone's letters and keeps a record of each one.
- Spot it in a question: "third-party network", "receives, routes and keeps audit records" → VAN (bank Q8 answer).

**EDIINT (EDI over the Internet)**
- What it is: a set of protocols for secure and reliable EDI transmission over the internet. Four standards: AS1, AS2, AS3 and AS4.
- Think of it as: the rule book for sending EDI letters through the internet post.
- Spot it in a question: "protocols for EDI over the internet" → EDIINT. The question then names an AS standard, or asks which protocol carries what.

**AS1**
- What it is: EDIINT standard that sends XML over SMTP (Simple Mail Transfer Protocol, which is e-mail), with S/MIME (Secure/Multipurpose Internet Mail Extensions) for encryption and security.
- Think of it as: sending the EDI document as an encrypted e-mail attachment.
- Spot it in a question: "SMTP" or "e-mail" → AS1.

**AS2**
- What it is: EDIINT standard that sends XML over HTTP (HyperText Transfer Protocol) or HTTPS (its secure form), with S/MIME security. The slide says AS2 is an adjustment of AS1 that puts S/MIME over HTTP/HTTPS.
- Think of it as: the same encrypted letter, now carried through the web instead of e-mail.
- Spot it in a question: "XML over HTTP or HTTPS", "S/MIME over HTTP" → AS2.

**AS3**
- What it is: EDIINT standard that is FTP-based (File Transfer Protocol), which moves files.
- Think of it as: dropping the EDI file into a shared folder on the partner's server.
- Spot it in a question: "File Transfer Protocol", "FTP" → AS3.

**AS4**
- What it is: EDIINT standard based on web services.
- Think of it as: the EDI document sent as a call to the partner's web service.
- Spot it in a question: "web services based" → AS4.

**S/MIME (Secure/Multipurpose Internet Mail Extensions)**
- What it is: a security layer that encrypts and signs messages. It appears in AS1 (over SMTP) and AS2 (over HTTP/HTTPS).
- Think of it as: the sealed and signed envelope wrapped around the EDI letter.
- Spot it in a question: "S/MIME" → security for AS1 and AS2.

**EDI implementation cost components (ten items)**
- What it is: the costs a company meets when it starts EDI. The slides list ten items. They are grouped below for memory; each item has its own card.
- Think of it as: setting up a new office. There are software costs, machine costs, people costs, phone-line and legal costs.
- Spot it in a question: "which cost category" → read the wording. A contract points to legal cost, a course to training cost, and a hire to additional resource cost.

**Translation software cost**
- What it is: the cost of the software that converts data between the company's format and the EDI standard. It is usually charged per CPU (central processing unit), and vendors often negotiate a site licence.
- Think of it as: buying a translator app licence for each computer that uses it.
- Spot it in a question: "per CPU", "site licence" → translation software.

**Software maintenance cost**
- What it is: the cost of a maintenance contract. It is always advisable because it gives technical help and usually automatic updates, including new transaction sets.
- Think of it as: an annual service plan for your phone that also sends new features.
- Spot it in a question: "maintenance contract", "updates", "technical assistance" → software maintenance.

**Internal software development cost**
- What it is: the cost of changing the company's own internal systems so they work with EDI. It is costed like any other software project.
- Think of it as: rebuilding the kitchen so the new appliances fit.
- Spot it in a question: "modifications to internal systems" → internal software development.

**Hardware cost**
- What it is: the cost of computers and their configuration, plus extras such as operating system licences, networking interfaces and backup systems.
- Think of it as: buying the server, plus the cables and the backup drive that go with it.
- Spot it in a question: "platform and configuration", "backup systems" → hardware cost.

**Specialty hardware cost**
- What it is: special devices needed for the EDI project, such as bar-code equipment or special printers.
- Think of it as: the barcode scanner at a supermarket counter.
- Spot it in a question: "bar code equipment", "special printers" → specialty hardware.

**Training cost**
- What it is: the cost of training people for new procedures, in-house or from vendors for software and hardware.
- Think of it as: sending staff to a course so they know how to use the new system.
- Spot it in a question: "in-house training", "vendor training" → training cost.

**Additional resource cost**
- What it is: the cost of hiring a specialist, for example a technical person who knows UNIX system administration, when a business first moves into an open-systems environment.
- Think of it as: bringing in an electrician when you install a new kind of wiring that your staff has never handled.
- Spot it in a question: "hire a technical specialist", "first time into UNIX" → additional resource cost.

**Networking cost**
- What it is: costs of a private network (leased phone lines and networking hardware), or, if the company uses a VAN, the VAN's pricing for its services.
- Think of it as: the monthly fee for the phone line and the router that connects your office.
- Spot it in a question: "leased phone lines", "VAN pricing" → networking cost.

**Legal cost and the EDI Trading Partner Agreement**
- What it is: the cost of contracts between partners. EDI needs a standard contract form, the EDI Trading Partner Agreement, which defines responsibilities and protects both sides. Lawyers' fees go into the legal cost.
- Think of it as: the rental agreement that sets out who pays the electricity bill and who fixes the leaking tap.
- Spot it in a question: "agreement defining responsibilities", "lawyers propose a standard agreement" → legal cost.

**Consulting cost**
- What it is: the cost of hiring experts to help with the first plan, especially to decide strategic objectives.
- Think of it as: paying an architect to draw the plan before the builders start.
- Spot it in a question: "professional help in the first planning phase", "strategic objectives" → consulting cost.

**XML (Extensible Markup Language)**
- What it is: a meta-markup language, which means a language for making your own labels (tags). It describes structured data. The slides call it the universal format for structured documents and data, and say it works across loosely coupled applications. It supports Unicode, so it can carry any written language.
- Think of it as: a labelled box system. Each piece of data has a tag, so anyone reading it knows what it is. For example, a price tag reads <price>500</price>.
- Spot it in a question: "structured data", "tags", "self-describing", "human and machine readable", "platform independent" → XML.

**XML tree structure**
- What it is: an XML document nests its elements like a family tree. A parent element holds child elements. The slide example is customer with payment and order children, and order with an item child.
- Think of it as: a folder with sub-folders, each sub-folder holding files.
- Spot it in a question: "hierarchical", "records, lists and trees", "parent and child elements" → XML tree.

**XML wrapper**
- What it is: the step on the sending side that wraps the data, such as a purchase order from a customer's database, in XML tags so it can cross the internet.
- Think of it as: packing a gift into a labelled box before you post it.
- Spot it in a question: "wraps", "packs", "adds tags to the data before sending" → XML wrapper. The reader is the parser, not the wrapper.

**XML parser**
- What it is: the software on the receiving side that reads an XML document and splits it into parts that the receiver's database can use.
- Think of it as: the person who opens the labelled box and puts each item on the right shelf.
- Spot it in a question: "reads the received XML", "parser" → XML parser.

**Why XML (the slide's list)**
- What it is: the advantages the slides give. It is human- and machine-readable, platform independent, supports Unicode, can represent records, lists and trees, is self-documenting (structure and field names are visible), has a strict syntax that makes parsing simple, is based on international standards, and is plain text.
- Think of it as: a letter that anyone can read, even without the sender explaining the labels.
- Spot it in a question: "self-documenting", "platform independent", "plain text" → XML advantages.

**XML-based frameworks**
- What it is: business messaging standards built on XML. The slides list six: eCO, cXML, BizTalk, RosettaNet, ebXML and XML/EDIFACT. They are cards below.
- Think of it as: different schools of the same language (XML). Each school teaches a different business vocabulary.
- Spot it in a question: "XML-based framework for e-business" → pick the named one from the scenario.

**eCO (The Electronic Commerce framework)**
- What it is: an XML-based framework for electronic commerce.
- Think of it as: a shop-to-shop language of orders and invoices written in XML.
- Spot it in a question: "eCO" or "Electronic Commerce framework" → eCO.

**cXML (Commerce XML)**
- What it is: an XML-based framework for commerce.
- Think of it as: a catalogue-and-order language that buyers and sellers speak in XML.
- Spot it in a question: "Commerce XML" → cXML.

**BizTalk**
- What it is: an XML-based business messaging product. It is a Microsoft product.
- Think of it as: a post office sorting centre that understands XML business messages.
- Spot it in a question: "BizTalk", "Microsoft" → BizTalk.

**RosettaNet**
- What it is: an XML-based set of partner interface processes, which are standard ways for trading partners to exchange business documents.
- Think of it as: a set of standard meeting agendas that partners agree to follow.
- Spot it in a question: "partner interface processes", "RosettaNet" → RosettaNet.

**ebXML (Electronic-Business-XML)**
- What it is: an XML-based framework for electronic business.
- Think of it as: a common XML rulebook for business-to-business trade.
- Spot it in a question: "Electronic-Business-XML", "ebXML" → ebXML.

**XML/EDIFACT**
- What it is: lets EDIFACT message types be used by XML systems, so the company does not have to redesign its existing EDIFACT messages.
- Think of it as: plugging a European appliance into an Indian socket with an adapter, so the appliance still works.
- Spot it in a question: "company already has EDIFACT message types and wants XML systems to use them" → XML/EDIFACT.

### 4. Web services

**Web service**
- What it is: "a method of communication between two electronic devices over the Web" (Wikipedia), and "a software system designed to support interoperable machine-to-machine interaction over a network" (W3C, the World Wide Web Consortium). The key idea is software calling software.
- Think of it as: a vending machine for software. You press a button (call a function), it returns the result, and no human has to be in between.
- Spot it in a question: "machine-to-machine", "platform independent interface", "one application uses another over the web", "IRCTC booking service" → web service (bank Q9 answer).

**IRCTC ticket service example**
- What it is: the lecture's example. A railway ticket service (IRCTC, Indian Railway Catering and Tourism Corporation) exposes two operations, bookTicket() and cancelTicket(). Travel dealer sites (makemytrip.com and cleartrip.com) call it. The consumer sites run on different platforms, shown as Struts and .NET/Ruby. The interface must be platform independent, and requests and responses should be in natural language.
- Think of it as: the railway reservation counter that every travel website can call, whatever software each travel site runs on.
- Spot it in a question: "a travel portal accesses railway reservation through a platform-independent interface" → web service, not a database link.

**SOAP (Simple Object Access Protocol)**
- What it is: an XML-based message protocol. It is the envelope for each request and response. It uses WSDL for its interface, invokes services with RPC, runs over HTTP, and does not return human-readable results. It is slower than REST.
- Think of it as: a formal registered-post envelope with fixed sections for the header, the address and the letter.
- Picture on slide 86: SOAP takes the data plus the SOAP standard and produces "huge data" to send to the server. REST sends the data as it is.
- Spot it in a question: "envelope for request and response", "XML message protocol", "uses WSDL", "invokes through RPC", "heavier and slower" → SOAP.

**WSDL (Web Services Description Language)**
- What it is: the interface description for a SOAP web service. It tells the client which operations exist and what inputs and outputs they need.
- Think of it as: a restaurant menu card. It lists the dishes you can order, what each one needs and what you will get.
- Spot it in a question: "describes the interface", "tells a client how to call the service", "machine-readable description" → WSDL. Trap: WSDL is not the envelope (SOAP) and not the directory (UDDI).

**UDDI (Universal Description, Discovery and Integration)**
- What it is: a repository of web services. The slides call it the yellow pages where providers publish and clients search for services.
- Think of it as: the printed yellow pages or a directory listing service, where businesses advertise.
- Spot it in a question: "repository", "yellow pages", "publish and find services", "directory" → UDDI.

**REST (REpresentational State Transfer)**
- What it is: an architectural style of communication, not a message protocol. The client calls the service through a URL path over HTTP. It uses XML or JSON for results. The results are readable. The slides say it is easy to call from JavaScript and much faster than SOAP.
- Think of it as: ordering from a website by typing the page address of the item you want. Each resource has its own web address.
- Spot it in a question: "architectural style", "simply calls the service via URL path", "readable results", "easy to call from JavaScript", "much faster" → REST. REST does not need a WSDL file.

**JSON (JavaScript Object Notation)**
- What it is: a light text format for structured data. The slide lists REST as using XML and JSON.
- Think of it as: the same information as XML, with fewer tags and less typing.
- Spot it in a question: "uses XML and JSON" → REST.

**Composite web service (CWS)**
- What it is: one service that combines several services into one process. It invokes each one and collects the replies. The lecture uses composite web services to merge the five VMI cycles into two.
- Think of it as: a travel agent who books your flight, hotel and cab. You talk to one person, and the agent talks to the rest.
- Spot it in a question: "one central composite service that invokes each service and collects replies" → orchestration. "Five cycles clubbed into two" → composite web services.

**Orchestration**
- What it is: one central controller (the composite service) calls each service, gets the replies and decides the next step.
- Think of it as: an orchestra conductor. Each musician plays when the conductor gives the signal.
- Spot it in a question: "central", "conductor", "invokes each service and collects replies", "composite service" → orchestration.

**Choreography**
- What it is: there is no central controller. Each service knows its own part and exchanges messages directly with the next service through send and receive.
- Think of it as: a dance group with no leader. Each dancer knows when to step, based on the dancer next to them.
- Spot it in a question: "no central controller", "each partner sends and receives", "peer" → choreography.

**BPEL (Business Process Execution Language)**
- What it is: the process language used in the lecture's CSInformation and InvoiceInformation diagrams. The slides label the central box a "BPEL process". They do not expand the name, so the expansion here is standard.
- Think of it as: the script that a conductor follows when running the orchestra.
- Spot it in a question: "BPEL process" → a central orchestrating process.

**Client and web service (roles in a call)**
- What it is: the client asks for something, and the web service answers. In the slides, clients include a dealer site, a supplier client and a retailer client.
- Think of it as: a customer at a counter, and the clerk who serves them.
- Spot it in a question: "client sends a request, service replies" → client-service exchange.

**Five VMI cycles and two business processes**
- What it is: the original VMI with web services needed five separate cycles. Each cycle had its own service, and each needed a manual activation of the client. The lecture clubs them into two business processes: CSInformation (pre-consignment stock delivery) and InvoiceInformation (post-consignment stock delivery).
- Think of it as: five ticket counters at a railway station merged into two windows, one before the train arrives and one after.
- Spot it in a question: "five cycles", "clubbed into two", "pre-consignment", "post-consignment" → composite web services.

**CSInformation (pre-consignment stock delivery)**
- What it is: the first composite process (CS means consignment stock). The client sends a product ID and gets back consignment stock information. Behind it sit ReorderLevel(), StockInfo() and CSStatus(). Its back-end is a BPEL process.
- Think of it as: the first window where the retailer asks, "what do I need to order before the stock arrives?"
- Spot it in a question: "pre-consignment", "before delivery", "reorder level and stock information" → CSInformation.

**InvoiceInformation (post-consignment stock delivery)**
- What it is: the second composite process. The client sends a product ID and gets back invoice information. Behind it sit InvoiceInfo() and StockInfo().
- Think of it as: the second window, which deals with the bill after the stock has been delivered and used.
- Spot it in a question: "post-consignment", "after delivery", "invoice" → InvoiceInformation.

**Information flow between supplier and retailer (VMI)**
- What it is: the ordered list of messages the lecture draws as a UML sequence diagram. GetStockLevel(), SetStockLevel(), GeneratePurchaseOrder(), SetConsignmentDetail(), AcknowledgeConsignmentReceipt(), SetConsignmentUsageBeginInfo() and SendInvoice(). (The slide spells the second one SetCosignmentDetaill.)
- Think of it as: the script of a conversation between the supplier and the retailer, in time order.
- Spot it in a question: "message names in the supplier and retailer conversation" → the list above, in that order.

### 5. Cloud computing

**Cloud computing**
- What it is: the delivery of computing as a service rather than a product. Shared computing resources, software and information are provided to computers and other devices over a network. It has a shared pool of configurable resources, on-demand network access, and is provisioned by the service provider.
- Think of it as: electricity from the grid. You do not build a power plant. You plug in and pay for the units you use.
- Spot it in a question: "as a service rather than a product", "shared pool", "on demand over a network", "provisioned by the provider" → cloud computing.

**Remotely hosted (characteristic)**
- What it is: services or data live on remote infrastructure owned by the provider, not on your own machine.
- Think of it as: money kept in a bank vault, not under the mattress.
- Spot it in a question: "hosted on remote infrastructure", "data stored off-site" → remotely hosted.

**Ubiquitous (characteristic)**
- What it is: services and data are available from anywhere.
- Think of it as: your WhatsApp account, which works from your phone in Delhi or your laptop in Pune.
- Spot it in a question: "available from anywhere", "any device" → ubiquitous.

**Commodified (characteristic)**
- What it is: the result is a utility computing model, like gas or electricity. You pay for what you use.
- Think of it as: the electricity meter in your home.
- Spot it in a question: "utility computing", "pay for what you use", "like gas and electricity" → commodified.

**Resource pooling (characteristic)**
- What it is: the provider's resources are pooled to serve many clients. The client has location independence, which means they do not control where the physical resources are.
- Think of it as: a shared taxi stand. Many passengers use the same pool of cabs, and you do not choose which engine takes you.
- Spot it in a question: "serve multiple clients from one shared pool", "location independence", "customer does not know physical location" → resource pooling.

**Rapid elasticity (characteristic)**
- What it is: the ability to scale a service in or out quickly, as demand changes.
- Think of it as: a caterer at a wedding who adds 200 extra plates for the rush hour and removes them afterwards.
- Spot it in a question: "scale in or out quickly", "sudden spike in demand" → rapid elasticity. Trap: pooling is about sharing, elasticity is about scaling.

**Measured service (characteristic)**
- What it is: the provider meters usage and controls and optimises the services based on that metering.
- Think of it as: the taxi meter, or your mobile data meter.
- Spot it in a question: "controlling and optimising services based on metering" → measured service.

**Service models (overview)**
- What it is: three ways to buy cloud services. Infrastructure as a Service (IaaS), Platform as a Service (PaaS) and Software as a Service (SaaS).
- Think of it as: three levels of help. IaaS gives you an empty flat, PaaS gives you a furnished workspace, and SaaS gives you a hotel room where everything is done for you.
- Spot it in a question: "which service model" → match the scenario to the level of control the customer keeps. Trap: deployment models (private, public) are a different question.

**IaaS (Infrastructure as a Service)**
- What it is: the vendor gives users access to computing resources such as servers, storage and networking, on a pay-as-you-go basis. The organisation runs its own platforms and applications on top. It is built on virtualisation.
- Think of it as: renting an empty, furnished-with-utilities flat. You bring your own furniture and cook your own food.
- Key features (slide 109): pay on demand instead of buying hardware; scalable; saves the cost of buying and maintaining hardware; no single point of failure because the data sits in the cloud.
- Spot it in a question: "servers, storage and networking", "pay-as-you-go", "run our own platform and applications" → IaaS. Examples on the slide: Amazon Web Services and Rackspace Hosting. The slide says IaaS "rent processing, storage, N/W capacity and computing resources".

**Virtualization**
- What it is: an abstraction of an execution environment that can be made available to authorised clients dynamically, through well-defined protocols.
- Think of it as: one big building split into many virtual flats, each one made ready when a tenant asks for it.
- Spot it in a question: "abstraction", "virtual machines made on demand" → virtualization (the engine under IaaS).

**PaaS (Platform as a Service)**
- What it is: a cloud environment where developers build, test, host and manage applications. It has storage, computing resources and a suite of prebuilt tools. The provider manages the infrastructure, security, operating systems, server software and backups.
- Think of it as: a co-working space with desks, printers and meeting rooms already set up. You bring the work; the space takes care of the rest.
- Key features (slide 111): tools to test, develop and host in one environment; teams can work together even when remote; provider handles security, OS, server software and backups.
- Spot it in a question: "developers build and test without managing servers", "tools to develop and host in the same environment", "provider manages OS and backups" → PaaS (bank Q10 answer). Examples on the slide: Google App Engine and Windows Azure.

**SaaS (Software as a Service)**
- What it is: ready-made software accessed through the web or an API, usually on a subscription. Users do not install, manage or upgrade anything. Data stays in the cloud.
- Think of it as: watching a film on a streaming app instead of buying a DVD and a player.
- Key features (slide 113): subscription; no installing or upgrading; data stays safe in the cloud even if a PC fails; scales with need; works from almost any internet-connected device.
- Spot it in a question: "ready-made software through a browser", "subscription", "no installation or upgrades" → SaaS (bank Q10 answer). Examples on the slide: Salesforce CRM and LotusLive.

**Deployment models (overview)**
- What it is: four ways a cloud can be set up. Private, community, public and hybrid.
- Think of it as: where you live. A house of your own, a housing society shared with neighbours who have the same concerns, a hotel open to the public, or a mix of two places.
- Spot it in a question: "who uses it" → single organisation (private), a group with shared concerns (community), anyone (public), two or more clouds combined (hybrid).

**Private cloud**
- What it is: used by one organisation only. It may be managed by the organisation or by a third party, and it can be on or off the organisation's premises.
- Think of it as: your own house. You may hire a caretaker, but only your family lives there.
- Spot it in a question: "single organisation only", "the company's own data centre", "on or off premises" → private cloud.

**Community cloud**
- What it is: infrastructure shared by several organisations that have shared concerns and belong to a specific community. Managed by the organisations or by a third party.
- Think of it as: a housing society where residents share the lift and the gate, because they have the same needs.
- Spot it in a question: "several organisations", "shared concerns", "specific community", "universities sharing data" → community cloud.

**Public cloud**
- What it is: a mega-scale infrastructure sold to the general public and available to anyone.
- Think of it as: a public bus or a hotel. Anyone can buy a ticket or a room.
- Spot it in a question: "sold to the public", "mega-scale", "available to the general public" → public cloud.

**Hybrid cloud**
- What it is: a composition of two or more clouds bound together by standard or proprietary technology.
- Think of it as: a home kitchen plus a restaurant kitchen. Ordinary meals are cooked at home, and overflow orders go to the restaurant. One menu, two kitchens.
- Spot it in a question: "composition of two or more clouds", "payroll on our own infrastructure and the web store on a shared provider" → hybrid cloud.

**Cloud concern: dependence and monopoly**
- What it is: relying on others may limit flexibility and innovation. The big internet companies (the slide names Google and IBM) may monopolise the market. Some say cloud is a return to mainframe-style computing, which the PC was a reaction against.
- Think of it as: a city where only one water company supplies everyone. Prices and rules are set by the one company.
- Spot it in a question: "dependence on others", "monopolise", "return to mainframe" → dependence concern.

**Cloud concern: security and ownership**
- What it is: it is unclear how safe outsourced data is, and it is not always clear who owns the data.
- Think of it as: keeping your valuables in a locker in someone else's building.
- Spot it in a question: "how safe is outsourced data", "who owns the data" → security and ownership concern.

**Cloud concern: policy and access**
- What it is: if data is stored in another country, whose law applies? What happens if the remote server goes down? How do you get your files then? Users have been locked out of accounts and lost access to their data.
- Think of it as: a bank in another country that freezes your account, and you have no branch to visit.
- Spot it in a question: "stored abroad, whose policy applies", "server goes down", "locked out of account" → policy and access concern.

**Advantages of cloud computing (eleven items)**
- What it is: lower computer costs (the PC needs little power, disk or drives); improved performance (fewer programs loaded); reduced software costs (for example Google Docs); instant software updates; improved document format compatibility; unlimited storage capacity; increased data reliability (data survives a PC crash); universal document access; latest version availability; easier group collaboration; device independence.
- Think of it as: a shopping list of benefits. Cheap PC, cheap software, always-updated apps, huge storage, safe data, and access from any device.
- Spot it in a question: "which is an advantage" → check the item against this list. Disadvantages are the opposite side.

**Disadvantages of cloud computing (eight headings)**
- What it is: requires a constant internet connection; does not work well with low-speed connections such as dial-up; features may be limited compared with desktop software (for example, PowerPoint versus Google Presentation); can be slow; stored data might not be secure; stored data can be lost (no physical or local backup); HPC (High Performance Computing) problems; and general concerns about different protocols and APIs (application programming interfaces).
- Think of it as: a restaurant that works only when the power and the road are both working. No internet means no food.
- Spot it in a question: "intermittent connection", "low-speed", "no internet", "data lost", "features limited" → disadvantage.

**HPC (High Performance Computing) concern**
- What it is: compute-intensive applications that use MPI (Message Passing Interface) or OpenMP (Open Multi-Processing) are hard to run on cloud. Scheduling matters, because all the virtual machines should be placed together (co-located) to reduce communication delay.
- Think of it as: a relay team that must stand close together to pass the baton fast. Scattered across the city, it runs slowly.
- Spot it in a question: "MPI or OpenMP", "virtual machines co-located", "compute-intensive" → HPC disadvantage.

**Cloud interoperability gap**
- What it is: each cloud uses different protocols and APIs, so applications may not run across cloud systems. The slide also notes that Amazon has its own database system (not SQL-92) and its own workflow system, so normal applications must be adapted to run there.
- Think of it as: a socket that fits only one brand of plug. Your appliance needs a new plug for each brand.
- Spot it in a question: "different protocols and APIs", "must be adapted to run on the platform" → cloud interoperability gap.

**Virtual machine (VM)**
- What it is: a software-made computer that runs inside a real server, with its own operating system and applications.
- Think of it as: a flat inside a big building. Many flats share the building, but each one is separate.
- Spot it in a question: "virtual machine", "co-located VMs" → cloud infrastructure concept (IaaS and HPC).

---

## How it flows

### 1. Digital payments

**A. What a payment system is, in one picture**

```text
PAYER (buyer)                                             BENEFICIARY (seller)
     │  transfers value                                          ▲
     ▼                                                           │ receives value
┌─────────────────────────── PAYMENT SYSTEM ───────────────────────────┐
│  Instruments     (cheque, card, cash, e-wallet, digital cash)         │
│  Rules, regulations and procedures                                    │
│  Institutions    (banks, card networks, processing centres)           │
│  Legal system    (makes the transfer enforceable)                     │
└──────────────────────────────────────────────────────────────────────┘
```

The payer's obligation is cleared when value reaches the beneficiary. The flow is two-way in the economy: payments go one way, goods and services go the other.

**B. Card payment acceptance and processing (slide 11)**

```text
Customer gives card details to the merchant
        │
        ▼
[1] Merchant AUTHENTICATES the card
        │
        ▼
[2] Merchant CHECKS with the card issuer ──► is credit or money available?
        │                                       yes: a HOLD is placed on that amount
        ▼
[3] SETTLEMENT: the held money actually moves to the merchant
```

- Step 1: make sure the card is real.
- Step 2: check the money is there and block it, so nobody else can spend it. The merchant is not paid yet.
- Step 3: the money moves. This is when the merchant really gets paid.

**C. Card authorization process (slide 14, the state-government example)**

```text
(1) Customer ──► Agency's payment device                 (authorization request, blue)
(2) Payment device ──► Card Processing Center (CPC)
(3) CPC ──► American Express / Visa / MasterCard / Discover
          Visa and MasterCard pass the request to their Issuing Bank
(4) Reply comes back: issuing bank ──► Visa/MasterCard ──► CPC
          (American Express and Discover reply directly)
(5) CPC ──► Agency's payment device                      (authorization response, red)
(6) Payment device ──► Customer
```

The numbers are the ones printed on the slide. Authorization is the "can I charge this?" question. It is answered before any money moves.

**D. Card settlement process (slide 15)**

```text
Agency's payment device ──(1) settlement request──► Card Processing Center
CPC ──(2) settlement request──► Visa / MasterCard / American Express / Discover
Visa / MasterCard ──(3)──► their Issuing Banks
CPC ──(4) transfer of funds──► Interim Working Account
Interim Working Account ──(5)──► Agency's Designated Account
American Express and Discover ──(5)──► Agency's Designated Account (directly)
Issuing Banks ──(6) transfer of funds──► Visa / MasterCard
Visa / MasterCard ──(7) transfer of funds──► CPC
```

Settlement is the "money really moves" stage. Authorization comes first and only blocks the money.

**E. Closed loop versus open loop**

```text
CLOSED LOOP (two parties)
  Customer ──► Card issuer ──── pays the merchant directly ────► Merchant

OPEN LOOP (three or more parties)
  Customer ──► Card issuer ──► Visa or MasterCard (middle network) ──► Merchant
```

Closed loop cuts out the middle. Open loop, the usual card system, adds a network in between.

**F. The TLS gap and the payment-gateway fix (slide 16)**

```text
Customer ──── TLS encrypted link (both sides authenticate) ────► Merchant's server
                                 GAP 1: card data can be misused on the merchant's server
                                 GAP 2: no guarantee the merchant may take this card's payment

FIX: Customer ──► Trusted third party: PAYMENT GATEWAY ──► card network / bank
```

TLS protects the road. The gateway protects what happens after the road, and checks that the merchant is allowed to take the payment.

**G. Peer-to-peer through a trusted third party (PayPal, slide 18)**

```text
Sender ──(a) sets up an account and requests to send payment──► PayPal (trusted third party)
Sender ──(b) funds the payment by credit card──────────────────► PayPal
PayPal ──(c) e-mails the receiver────────────────────────────► Receiver
Receiver ──(d) moves funds to a bank account OR asks for a cheque──► PayPal
```

The letters (a) to (d) are added for reading; the slide lists these steps in order.

**H. Electronic cheque: two layers of encryption (slide 19)**

```text
Customer's payment details (checking account)  +  information for the merchant
        │
        ▼ encrypt with the BANK'S PUBLIC KEY      (only the bank's private key opens this inner layer)
        │
        ▼ encrypt the whole package with the CUSTOMER'S PRIVATE KEY
        │
        ▼ sent to the MERCHANT ──► merchant forwards to the BANK ──► bank opens the inner layer, transfers the funds
```

The outer layer shows the package came from the customer. Only the bank can read the inner payment details.

**I. Digital cash: when the money is checked (slides 20 and 22)**

```text
Bank creates coins: huge random numbers, digitally stamped by the bank
        │
        ▼
Coins live in the customer's wallet software
        │
        ▼
Customer pays the seller with a coin
        │
        ├── ONLINE:  the coin is validated live by the bank      (CyberCash)   → double spending stopped
        └── OFFLINE: no live check, peer to peer                  (DigiCash)    → double spending risk if also anonymous
```

The "double spending" problem only appears when the money is both anonymous and offline.

**J. Anonymous electronic money: blinding (slide 21)**

```text
Customer makes a serial number for the coin
        │
        ▼ "blinds" it: hides the number inside a wrapper, like carbon paper
        │
        ▼ sends the blinded coin to the bank
Bank signs the outside without seeing the serial number
        │
        ▼ returns the signed coin to the customer
Customer spends the coin. The bank can check the signature but cannot link the coin back to the customer.
```

The last line describes the purpose of blinding, which the slide hints at but does not spell out.

**K. Identifiable versus anonymous, online versus offline (slides 21 and 22)**

```text
                     IDENTIFIABLE                                  ANONYMOUS
                     bank gives the serial number                  customer makes the serial number
ONLINE               CyberCash                                     (no example on the slides)
OFFLINE              (no example on the slides)               DigiCash
```

These are two separate questions. Who knows the coin is yours? (identity). Does the bank check it live? (timing).

**L. Electronic wallet: where the data sits (slides 23 and 24)**

```text
SERVER-SIDE WALLET:  customer ──► remote server of a merchant or wallet publisher holds card and address
CLIENT-SIDE WALLET:  customer's own computer or phone holds the card and address and sends them when paying
```

**M. Six e-payment methods (slide 8)**

```text
E-PAYMENT METHODS
├── Payment cards           (credit, debit, charge)
├── Peer-to-peer            (PayPal-type third party, or bank web and mobile)
├── E-wallets               (server-side or client-side)
├── Digital cash            (identifiable or anonymous; online or offline)
├── Smart cards             (chip on the card; Mondex, Visa Cash)
└── B2B payments            (SWIFT, EFT, online bill payment, B2B gateways)
```

### 2. Interoperability

**A. Supply chain integration has two halves (slide 30)**

```text
SUPPLY CHAIN INTEGRATION
   ├── COLLABORATION      = strategic issues  (goals, trust, shared plans)
   └── INTEROPERABILITY   = technical issues  (systems exchange and use data)
```

**B. Four dimensions of supply chain interoperability (slide 31)**

```text
INTEROPERABILITY
   ├── DATA        fields, formats, meaning of data          (stock_level vs currentStockLevel)
   ├── SERVICE     separately built applications working together  (SAP R/3 vs Oracle E-Business Suite)
   ├── PROCESS     order and trigger of exchange steps       (orchestration, choreography)
   └── BUSINESS    work methods, rules, accounting, labour law, responsibilities
```

**C. Three technical layers of B2B interoperability (slide 45)**

```text
  ┌──────────────────────────────────────────────────────────┐
  │ PROCESS level      links process descriptions             │  (order of steps)
  ├──────────────────────────────────────────────────────────┤
  │ CONTENT / DATA     meaning and structure of documents     │  (PO vs RFQ; price incl. tax?)
  ├──────────────────────────────────────────────────────────┤
  │ COMMUNICATION      messages and protocols between partners │  (TCP/IP, RPC, CORBA, REST)
  └──────────────────────────────────────────────────────────┘
```

The stacking is a teaching picture. The lecture lists the three layers in the order communication, content/data, process.

**D. The communication level in two sub-levels (slides 47 to 49)**

```text
COMMUNICATION LEVEL
   ├── Network-protocol level
   │      TCP/IP, plain data transfer, low-level programming
   └── Object and component middleware level
          ├── RPC        call a function on another machine
          ├── Java RMI   Java objects calling each other remotely
          ├── Java EJB   Java business components on a server
          └── OMG CORBA  objects in any language, through a broker
```

**E. VMI: what the supplier and the retailer do (slides 37-38 and 91-92)**

```text
SUPPLIER SIDE
  After its own stock changes: update its own stock status
  Every 24 hours: check the retailer's stock status
  Calculate the reorder point
  On reaching the reorder point:
     1. generate purchase order
     2. dispatch consignment stock
     3. update consignment stock status
  Decrease its stock level when the consignment enters the retailer's inventory
  Wait until the retailer updates "consignment usage begins"

RETAILER SIDE
  Stock available           ──► continue retail operation
  Using consignment stock   ──► make payment
  Stock unavailable         ──► 1. use consignment stock
                                2. update stock level
                                3. inform supplier
                                4. get invoice information
  On receipt of invoice     ──► a state in the retailer's chart
```

The supplier decides when to send stock. The retailer pays only when it uses the stock. Many data exchanges must run in the right order. That is why the lecture calls it a process interoperability problem.

**F. The VMI message flow (slide 39, UML sequence diagram)**

```text
SUPPLIER                                          RETAILER
   │──── GetStockLevel() ───────────────────────────►│     supplier asks for stock level
   │◄─── SetStockLevel() ····························│     retailer replies (dashed return)
   │  GeneratePurchaseOrder()  (supplier's own step)│
   │──── SetConsignmentDetail() ────────────────────►│     supplier sends consignment details
   │◄··· AcknowledgeConsignmentReceipt() ············│     retailer confirms receipt
   │◄─── SetConsignmentUsageBeginInfo() ────────────│     retailer says usage has begun
   │──── SendInvoice() ·····························►│     supplier sends invoice (dashed)
```

Read top to bottom. The arrows show the direction on slide 39. Solid arrows are calls. Dashed arrows are replies or notices.

**G. Data interoperability in one example (slide 41)**

```text
RETAILER database                         SUPPLIER database
field: stock_level          ≠             field: currentStockLevel
           └──── same quantity, different name, needs a common format or mapping ────┘
```

**G2. The four VMI interoperability issues (slides 40 to 44)**

```text
DATA       same quantity, different field names (stock_level vs currentStockLevel): needs a common format
SERVICE    one partner runs SAP R/3, the other Oracle E-Business Suite: how does the stock data cross?
PROCESS    many data exchange steps must run in order: how are they coordinated?
BUSINESS   does the new information sharing force the business process to be re-engineered?
```

**H. Process level: intra-enterprise versus inter-enterprise (slide 83)**

```text
INTRA-ENTERPRISE (inside one company)              INTER-ENTERPRISE (between companies)
   traditional workflow systems                        web services connect the workflows
   ERP systems: SAP R/3, Baan, PeopleSoft              of independent organisations
```

**I. Cross-platform data flow between two firms (slides 95 and 96)**

```text
(1) Supplier DB (MySQL)           ──get information──►  Supplier Web Server (Java EE web services)
(2) Supplier Web Server            ──supplier data, XML──► Retailer Client (.NET)
(3) Retailer Client                ──information update──► Retailer DB (MS SQL)
(4) Retailer DB (MS SQL)           ──get information──►  Retailer Web Server (.NET web services)
(5) Retailer Web Server            ──retailer data, XML──► Supplier Client (Java EE)
(6) Supplier Client                ──information update──► Supplier DB (MySQL)
```

The numbers are added here to help reading. The slide shows a loop with no numbers. The only thing that crosses between the two companies is XML. Each side can use its own platform.

The web services each side exposes (slides 95 and 96): the retailer side offers stock level, consignment stock receipt status and consignment usage status. The supplier side offers consignment stock dispatch status and generate invoice.

### 3. EDI and XML

**A. The five basic EDI steps (slide 58)**

```text
[1] PREPARATION of electronic documents        (order is made in the company's own system)
        │
        ▼
[2] OUTBOUND TRANSLATION                       (own format ──► agreed EDI standard)
        │
        ▼
[3] COMMUNICATION                              (send by direct link or through a VAN)
        │
        ▼
[4] INBOUND TRANSLATION                        (EDI standard ──► partner's own format)
        │
        ▼
[5] PROCESSING OF ELECTRONIC DOCUMENTS         (partner's systems act on the order)
```

Read it as: write it, translate it, send it, translate it back, act on it.

**B. The same purchase order in two standards (slide 59)**

```text
PAPER PURCHASE ORDER          ANSI X12 (ST*850 = purchase order)     EDIFACT (UNH+ORDERS)
Item 1, qty 100, price 27.65   ST*850*540001                          UNH+SSDD1+ORDERS:D:03B:UN:EAN008'
                               BEG*00*SA*4768*65*20120930              BGM+220+4768+9'
                               PO1*1*100*EA*27.65**VN*331896-42        PRI+AAA:27.65'
                               SE*8*54001                              UNT+10+SSDD1'
```

The lecture shows the same paper order turned into the X12 format (US standard) and into the EDIFACT format (European standard).

**C. Two ways for partners to connect (slides 61 to 63)**

```text
PEER-TO-PEER (direct, suits large companies)
   Manufacturer ════ dedicated line or modem pool or VPN ════ Supplier A
   Manufacturer ════ another link and another software ═════ Supplier B
   (a supplier with many manufacturers needs a different setup for each)

VALUE-ADDED NETWORK (third party in the middle)
   Company A ──► [VAN: receives, reads from and to, routes, keeps audit records] ──► Company B
```

**D. XML wrapper and XML parser (slide 72)**

```text
Customer's database (e.g. DB2)
        │ purchase order
        ▼
[XML WRAPPER]  puts XML tags around the order
        │
        ▼ over the Internet
[XML PARSER]   reads the XML on the receiving side
        │
        ▼
Supplier's database (e.g. Oracle)
```

The wrapper is on the sending side. The parser is on the receiving side.

**E. What an XML document looks like as a tree (slides 73 and 74)**

```text
customer
├── payment
└── order
    └── item
```

Each box is an element. Elements nest inside each other, the way folders nest inside folders.

**F. The EDIINT protocol ladder (slide 64)**

```text
AS1  ── XML ── over SMTP (e-mail)            security: S/MIME
AS2  ── XML ── over HTTP or HTTPS (web)      security: S/MIME (AS1 moved onto HTTP)
AS3  ── EDI files ── over FTP (file transfer)
AS4  ── EDI messages ── through web services
```

**G. Who uses which EDI standard (slides 60 and 61)**

```text
Automotive industry              ──►  AIAG
United States and Canada         ──►  X.12
Europe                           ──►  EDIFACT (umbrella of standards)
Asia                             ──►  AEB (Asia EDIFACT Board), e.g. India, Japan, Korea,
                                      Hong Kong, China, Singapore, Taiwan, Malaysia
```

**H. The EDI cost tree (slides 65 to 70)**

```text
EDI IMPLEMENTATION COST (ten items)
├── SOFTWARE   translation software, software maintenance, internal software development
├── HARDWARE   hardware costs, specialty hardware (bar-code equipment, printers)
├── PEOPLE     training, additional resource (specialist), consulting
└── NETWORK and LEGAL   networking (phone lines, VAN pricing), legal (EDI Trading Partner Agreement)
```

**I. The XML frameworks (slides 55 and 80)**

```text
XML-BASED FRAMEWORKS
   ├── eCO           The Electronic Commerce framework
   ├── cXML          Commerce XML
   ├── BizTalk       XML business messaging
   ├── RosettaNet    partner interface processes
   ├── ebXML         Electronic-Business-XML
   └── XML/EDIFACT   lets EDIFACT message types be used by XML systems
```

**J. Why traditional EDI and XML sit at the content/data layer (slides 53 to 55)**

```text
CONTENT/DATA LAYER answers:
   "Is this a purchase order or a request for quote?"   (structural and semantic)
   "Does price include tax?"                             (semantic)
Tools that solve it:  traditional EDI, Internet-based EDI, XML frameworks
```

### 4. Web services

**A. A web service call, in order**

```text
CLIENT (for example a travel portal)
   │ 1. find the service in the directory (UDDI, yellow pages)        optional
   │ 2. read the interface description (WSDL, the menu card)
   │ 3a. SOAP: send an XML envelope with the request (RPC style)
   │ 3b. REST: send an HTTP request to a URL path (resource style)
   ▼
WEB SERVICE (for example the IRCTC ticket service: bookTicket(), cancelTicket())
   │ 4. returns the result (SOAP XML envelope, or readable XML or JSON from REST)
   ▼
CLIENT shows the booking to the traveller
```

The numbers are a teaching order. The lecture gives the terms, not this sequence.

**B. Orchestration versus choreography (slide 89)**

```text
ORCHESTRATION (one central boss)                 CHOREOGRAPHY (no boss)

   Service A ── reply ──► ┌───────────┐ ◄── reply ── Service B       Service A ◄──────► Service B
                          │ COMPOSITE │                                    ▲                 ▲
   Service D ── reply ──► │  SERVICE  │ ◄── reply ── Service C              │  send / receive │
                          └───────────┘                                    ▼                 ▼
          composite service invokes each service           Service D ◄──────► Service C
          and collects the replies                         (each service talks only to its partners)
```

Orchestration: one controller calls everyone. Choreography: everyone knows the steps and passes messages along.

**C. VMI with web services: five cycles becomes two (slides 97 to 99)**

```text
BEFORE: five cycles
   cycle 1 ──► cycle 2 ──► cycle 3 ──► cycle 4 ──► cycle 5
   (one service per cycle; the client must be activated by hand each time)

AFTER: two composite processes
   CSInformation            pre-consignment stock delivery     (before the stock arrives)
   InvoiceInformation       post-consignment stock delivery    (after the stock is used)
```

**D. CSInformation (slide 98)**

```text
CSInfoClient ──► Product ID ──► CSInformation()  [BPEL process]
                                   ├── ReorderLevel() ──► Reorder Level back
                                   ├── StockInfo()    ──► Present Stock Info back
                                   └── CSStatus()     ──► CS Information back
CSInformation() returns "CS Information" to CSInfoClient
```

CS means consignment stock. The Product ID goes out, and the stock and reorder information comes back.

**E. InvoiceInformation (slide 99)**

```text
InvoiceInfoClient ──► Product ID ──► InvoiceInformation()  [BPEL process]
                                        ├── InvoiceInfo()  ──► Invoice Info back
                                        └── StockInfo()    ──► Present Stock Info back
InvoiceInformation() returns "Invoice Info" to InvoiceInfoClient
```

### 5. Cloud computing

**A. The three service models stacked (slide 114)**

```text
┌──────────────────────────────────────────────────────────┐
│ SaaS   Software as a Service                              │  you USE finished applications
│        examples: Salesforce CRM, LotusLive                │
├──────────────────────────────────────────────────────────┤
│ PaaS   Platform as a Service                              │  you DEPLOY your own applications
│        examples: Google App Engine, Windows Azure         │
├──────────────────────────────────────────────────────────┤
│ IaaS   Infrastructure as a Service                        │  you RENT processing, storage,
│        examples: Amazon Web Services, Rackspace Hosting   │  network and computing resources
└──────────────────────────────────────────────────────────┘
```

The slide's source is "Effectively and Securely Using the Cloud Computing Paradigm" by Peter Mell and Tim Grance. Moving from the bottom to the top, the provider does more and the customer does less.

**B. Who looks after what (from the slides' key features)**

```text
           IaaS                   PaaS                      SaaS
You manage  OS, apps, data          your apps and data        only your data and settings
Provider    servers, storage,       also OS, server          everything: software,
manages     network                 software, backups        upgrades, security
```

This table is a summary of slides 109, 111 and 113.

**C. The four deployment models (slides 115 and 116)**

```text
PRIVATE     one organisation only; on or off premises
COMMUNITY   several organisations with shared concerns (for example universities)
PUBLIC      sold to the general public; mega-scale
HYBRID      two or more clouds combined by standard or proprietary technology
```

**D. The cloud utility idea (slides 103 and 104)**

```text
Electricity:   power plant ──► grid ──► your meter ──► you pay per unit used
Cloud:         provider data centre ──► internet ──► your PC or phone ──► you pay for what you use (metered)
```

**E. Virtualization under IaaS (slide 108)**

```text
ONE PHYSICAL SERVER
   ├── virtual machine 1   (client A's operating system and applications)
   ├── virtual machine 2   (client B's operating system and applications)
   └── virtual machine 3   (...)
```

Each client gets a virtual machine when it asks for one. Clients do not see each other's machines.

---

## Don't mix these up

| These look alike | How to tell them apart | Tie-breaker word |
|---|---|---|
| Credit card vs debit card vs charge card | Credit: borrowed, limit set by credit history. Debit: money leaves your bank account now and goes to the seller's bank. Charge: no limit, full bill due at end of billing period. | "limit" = credit; "bank account" = debit; "no limit" = charge |
| Closed loop vs open loop | Closed: the issuer pays the merchant directly, two parties. Open: three or more parties, for example Visa or MasterCard. | "directly" = closed; "three or more" = open |
| Authorization hold vs settlement | Hold: money is checked and blocked, not moved. Settlement: the money actually moves to the merchant. | "verify, hold, reserve" = authorization; "transfer, final" = settlement |
| Identifiable vs anonymous electronic money | Identifiable: the bank gives the serial number, so the coin can be traced (CyberCash). Anonymous: the customer makes the serial, blinds it, and the bank signs it without seeing it (DigiCash). | "bank provides serial" = identifiable; "customer creates, blinded" = anonymous |
| Online vs offline electronic money | Online: validated live by the bank (CyberCash). Offline: not validated online, peer to peer (DigiCash). | "validated online" = online; "peer to peer, not validated" = offline |
| The two digital-cash classifications | They are independent questions. CyberCash is identifiable and online. DigiCash is anonymous and offline. Double spending risk comes from anonymous plus offline. | "who is it traced to?" = identity; "does the bank check it live?" = timing |
| Server-side vs client-side e-wallet | Server-side: data on a merchant's or wallet publisher's remote server. Client-side: data on the customer's own computer. | "remote server of merchant" = server-side; "his or her own computer" = client-side |
| Electronic cheque vs digital cash vs e-wallet | E-cheque: a paper cheque copy with checking-account data (CyberCash). Digital cash: stamped number-files held in a wallet (DigiCash). E-wallet: saved payment details for quick checkout. | "account" = e-cheque; "random number coins" = digital cash; "enter once, saved" = e-wallet |
| Smart card vs payment card | Smart card: chip on the card with money or ID loaded (Mondex, Visa Cash). Payment card: plastic card linked to a bank account or credit line. | "chip", "PIN", "loaded" = smart card |
| Real-world system vs its internet twin | Cash equivalents: DigiCash, Millicent. Cheques: CyberCash. Credit card payments: TTP and SET. Electronic funds transfer: SWIFT. Options often swap these. | match the pair as listed; "cheque" and "CyberCash" go together |
| PayPal-type P2P vs bank web or mobile P2P | Both move money between people. PayPal is a third party in the middle. The bank method uses the bank's own web or mobile interface. | "third party" = PayPal; "bank's own app" = bank method |
| TLS vs SET vs payment gateway | TLS: encrypts the link, both sides authenticate, but no guarantee after arrival. SET: a secure card protocol, not widely accepted. Payment gateway: trusted third party that the lecture recommends. | "encrypted link" = TLS; "not widely accepted" = SET; "trusted third party" = gateway |
| Authenticity vs non-repudiation vs integrity vs confidentiality | Authenticity: the sender is who they claim to be. Non-repudiation: the sender cannot deny it later. Integrity: content not changed. Confidentiality: others cannot read it. | "impersonate" = authenticity; "deny later" = non-repudiation; "altered" = integrity; "read, spy" = confidentiality |
| Technological vs economic vs social vs regulatory aspects | Technological: security. Economic: cost, reach, value movement, financial risk. Social: anonymity, ease of use, mobility of the person. Regulatory: government rules. | "fee, cost, risk" = economic; "people, privacy, easy" = social; "law, government" = regulatory |
| Social mobility vs value mobility | Social mobility: the user can pay on the move and across devices. Value mobility: money can be moved easily between parties. | "devices, on the move" = social; "money moves" = economic |
| Data vs service vs process vs business dimensions | Data: field names, formats, meaning. Service: separately built applications (ERP, CORBA, SOA). Process: order of steps. Business: policy, accounting, labour law, work methods. | "field name, format" = data; "applications, framework" = service; "order, trigger" = process; "policy, labour law" = business |
| Data dimension vs content/data layer | The same idea. The layer is the technical name for resolving meaning and structure. | If the question says "technical layer", use the layer name |
| Communication layer vs content/data layer | Communication: how messages travel and protocols are translated (TCP/IP, RPC, CORBA, REST). Content/data: what the document means (PO vs RFQ, price with or without tax). | "protocol, transport, messages" = communication; "meaning, document type" = content/data |
| Collaboration vs interoperability | Collaboration: strategic (goals, agreements). Interoperability: technical (systems exchanging data). | "strategic" = collaboration; "technical" = interoperability |
| Intra-enterprise vs inter-enterprise workflow | Intra: inside one company (SAP R/3, Baan, PeopleSoft). Inter: between independent companies, done with web services. | "inside one company" = intra; "independent organisations" = inter |
| Dimension "business" vs layer "process" | Business: culture, labour law, accounting rules, responsibilities. Process: order and timing of exchange steps. | "labour law, policy" = business; "sequence, triggered" = process |
| Peer-to-peer EDI vs VAN | Peer-to-peer: partners connect directly; suits large companies. VAN: third party receives, routes and keeps audit records. | "directly" = peer-to-peer; "third party, routes, audit" = VAN |
| VAN vs EDIINT | VAN: a network service provider in the middle. EDIINT: a set of protocols (AS1 to AS4) for EDI over the internet. | "provider, routes, audit" = VAN; "AS number, protocol" = EDIINT |
| AS1 vs AS2 vs AS3 vs AS4 | AS1: XML over SMTP (e-mail). AS2: XML over HTTP or HTTPS (web). AS3: FTP (file transfer). AS4: web services. | remember 1 = mail, 2 = HTTP, 3 = FTP, 4 = web services |
| X.12 vs EDIFACT vs AIAG vs AEB | X.12: US and Canada. EDIFACT: Europe. AIAG: automotive. AEB: Asia EDIFACT Board (India is a member). | region or industry word in the question |
| XML/EDIFACT vs EDIFACT vs other XML frameworks | EDIFACT is an EDI standard. XML/EDIFACT lets XML systems use EDIFACT message types. eCO, cXML, BizTalk, RosettaNet and ebXML are XML frameworks of their own. | "XML systems use EDIFACT message types" = XML/EDIFACT |
| XML wrapper vs XML parser | Wrapper: sender adds the XML tags. Parser: receiver reads the XML. | "packs, wraps" = wrapper; "reads, receives" = parser |
| Translation software vs software maintenance vs internal development | Translation software: licence per CPU or site. Maintenance: a contract for updates and new transaction sets. Internal development: changing the company's own systems. | "per CPU" = translation; "updates, contract" = maintenance; "modify internal systems" = internal development |
| Hardware vs specialty hardware vs networking | Hardware: computers and their configuration. Specialty hardware: bar-code equipment, special printers. Networking: leased lines and VAN pricing. | "bar code, printers" = specialty; "phone lines, VAN fees" = networking |
| Legal cost vs consulting cost | Legal: contracts such as the EDI Trading Partner Agreement. Consulting: expert help with the plan and strategic objectives. | "agreement, lawyers" = legal; "expert planning, strategy" = consulting |
| Training cost vs additional resource cost | Training: courses for staff. Additional resource: hiring a specialist, for example a UNIX administrator. | "course, vendor training" = training; "hire a specialist" = additional resource |
| SOAP vs REST | SOAP: XML envelope, WSDL, RPC, heavier and slower, not readable. REST: URL path, HTTP, readable results, easy from JavaScript, much faster. | "envelope, WSDL, RPC" = SOAP; "URL path, JavaScript, fast" = REST |
| WSDL vs UDDI vs SOAP vs REST | WSDL: interface description. UDDI: directory of services. SOAP: message envelope. REST: architectural style. | "describes interface" = WSDL; "yellow pages" = UDDI; "envelope" = SOAP; "URL style" = REST |
| Human-readable output vs machine-to-machine interoperability | A web service is about software calling software. Readable output is a side effect for humans and is not the point of the definition. | "machine-to-machine" = web service; "human-readable only" = a trap |
| Orchestration vs choreography | Orchestration: one central composite service invokes and collects replies. Choreography: no centre; services send and receive with each other. | "central, conductor, invokes" = orchestration; "no central, peers" = choreography |
| Five cycles vs two processes | CSInformation handles pre-consignment (before the stock arrives). InvoiceInformation handles post-consignment (after the stock is used). | "before delivery" = CSInformation; "invoice, after" = InvoiceInformation |
| IaaS vs PaaS vs SaaS | IaaS: rent servers, storage and network; you run your own OS and apps. PaaS: build, test and host your own apps on a ready platform. SaaS: use finished software through a browser. | "rent servers" = IaaS; "develop and test apps" = PaaS; "ready software, browser, subscription" = SaaS |
| Private vs community vs public vs hybrid cloud | Private: one organisation. Community: several organisations with shared concerns. Public: anyone, mega-scale. Hybrid: two or more clouds combined. | "single organisation" = private; "shared concerns" = community; "general public" = public; "two or more clouds" = hybrid |
| Service model vs deployment model | Service model answers "what do I get?" (IaaS, PaaS, SaaS). Deployment model answers "who shares it and where?" (private, community, public, hybrid). Some options mix the two; that is a trap. | check if the option names a service model or a deployment model |
| Resource pooling vs rapid elasticity vs measured service | Pooling: many clients share the resources; location independence. Elasticity: scale up or down quickly. Measured: metering to control and optimise. | "shared, location" = pooling; "scale quickly" = elasticity; "metered, optimise" = measured |
| Remotely hosted vs ubiquitous vs commodified | Remotely hosted: data or services on remote infrastructure. Ubiquitous: available from anywhere. Commodified: pay for use, like a utility. | "off-site" = remotely hosted; "anywhere" = ubiquitous; "utility, pay what you use" = commodified |
| Cloud dependence vs security vs policy concerns | Dependence: monopoly and loss of flexibility. Security: how safe outsourced data is, who owns it. Policy: which country's law, server down, locked out. | "monopolise, mainframe" = dependence; "safe, owner" = security; "abroad, server down, locked out" = policy |
| Cloud advantages vs disadvantages | Advantages: cheap PCs, cheaper software, updates, storage, access from anywhere. Disadvantages: needs internet, slow on low speed, limited features, data loss, HPC limits. | the question's wording tells which side you are on |
| XML vs traditional EDI: readability and storage | XML is intuitive and easy to read, but verbose, and its storage needs grow. EDI is cryptic, but once understood it is quick to implement and needs minimal storage. | "readable, verbose, storage grows" = XML; "cryptic, minimal storage" = EDI |
| XML vs traditional EDI: age and reach | XML is new technology, internet based and easy to implement, but has many complex standards. EDI is time-tested, established, with a large existing user base and low business risk. | "new, internet" = XML; "time-tested, established, larger user base" = EDI |
| XML vs traditional EDI: cost | XML is cheap to deploy over the internet, but tools and developers still cost money and bandwidth can be costly. EDI is traditionally expensive, though tool costs are falling and it uses less bandwidth. | "cheap over the internet" = XML; "traditionally expensive" = EDI |
| XML vs traditional EDI: who uses it | XML: new economy companies, high business risk. EDI: established companies (Fortune 500) and governments, status quo, low business risk. | "new economy" = XML; "Fortune 500, governments" = EDI |
| Peer-to-peer payment vs peer-to-peer EDI | Payment: one person pays another person's account (PayPal or a bank app). EDI: two trading companies connect directly to swap business documents. | "people, money" = payment; "companies, documents, modem" = EDI |

---

## Must-remember facts

### Definitions as the slides word them

| Term | Definition on the slide | Source named on the slide |
|---|---|---|
| Payment system | "a mechanism that facilitates transfer of value between a payer and a beneficiary by which the payer discharges the payment obligations to the beneficiary" | RBI FAQ |
| Electronic payment assessment | four aspects: technological, economic, social, regulatory | IEEE (Institute of Electrical and Electronics Engineers) paper (ieeexplore) |
| Web service (Wikipedia) | "a method of communication between two electronic devices over the Web" | Wikipedia |
| Web service (W3C) | "a software system designed to support interoperable machine-to-machine interaction over a network" | W3C |
| EDI | "exchange of electronic data between companies using precisely defined transactions" | Lecture slide 56 |
| XML | "a meta-markup language that provides a format for describing structured data" | Lecture slide 71 |
| Cloud computing | "the delivery of computing as a service rather than a product, whereby shared computing resources, software, and information are provided to computers and other devices over a network" | Lecture slide 103 |
| IaaS | "users access to computing resources such as servers, storage, and networking" | Lecture slide 107 |
| SaaS | "provides users with access to a vendor's cloud-based software" | Lecture slide 112 |
| Interoperability of service | "identifying, composing and operating together various applications that are designed and implemented independently" | Lecture slide 33 |
| Business interoperability | "identifies the fundamental artifacts related to business issues" | Lecture slide 35 |
| Process interoperability | "linking different process descriptions to form collaborative processes" | Lecture slide 34 |
| Semantic difference | "different interpretations of the same concept" (example: "price" with or without tax) | Lecture slide 54 |
| SWIFT | Society for Worldwide Interbank Financial Telecommunication | Lecture slide 26 (FFIEC e-banking book) |

### Numbers and lists, with memory tricks

| List or number | Items | Memory trick |
|---|---|---|
| Parts of a payment system (4) | instruments, rules/regulations/procedures, institutions, legal systems | Cricket: the bat and ball, the laws of the game, the board and umpires, the courts. |
| Assessment aspects (4) | technological, economic, social, regulatory | "Tiny Elephants Sleep Rough" = T, E, S, R |
| Technological factors (4) | authenticity, non-repudiation, integrity, confidentiality | A signed, sealed letter: signed (authentic), cannot be denied, not opened or changed, private. |
| Economic factors (4) | cost of transactions, user reach, value mobility, financial risk | "COST, REACH, VALUE, RISK": the four things a shop owner counts. |
| Social factors (3) | anonymity, user friendliness, mobility | "A, U, M": Anonymous, Usable, Mobile. |
| Payment cards (3) | credit, debit, charge | Credit = borrowed, limit. Debit = straight from the bank now. Charge = clear at month end. |
| Payment card pros and cons (2 and 1) | Pros: worldwide acceptance; built-in security for merchants. Con: merchants pay per-transaction fees and monthly processing fees. | Two pros (world, security), one cost (fees to the merchant). |
| Card loop types (2) | closed (two parties), open (three or more) | Closed = two. Open = three or more. |
| Card processing steps (3) | authenticate, check and hold, settle | Hotel check-in: ID check, room block, checkout bill. |
| E-payment methods (6) | payment cards, peer-to-peer, e-wallets, digital cash, smart cards, B2B | "Cards, Peer, Wallet, Digital cash, Smart card, B2B": first letters C, P, W, D, S, B. |
| Digital cash labels (2 pairs) | identifiable or anonymous; online or offline | Who is it traced to? Does the bank check it live? |
| Wallet locations (2) | server-side, client-side | Server = the shop's locker. Client = your own pocket. |
| Real-world and internet pairs (4) | cash to DigiCash and Millicent; cheque to CyberCash; credit card to TTP and SET; transfer to SWIFT | "Cyber cheque" (cheque to CyberCash). "Swift transfer" (transfer to SWIFT). "Secure card" (SET). |
| Interoperability dimensions (4) | data, service, process, business | "Don't Stop Pushing Buttons" = D, S, P, B |
| B2B technical layers (3) | communication, content/data, process | The 3 Cs: Carrier (communication), Contents (content/data), Calendar (process). |
| Communication sub-levels (2) | network-protocol, object and component middleware | Network = the road. Middleware = the translator at the door. |
| Middleware technologies (4) | RPC, RMI, EJB, CORBA | RPC = call a function. RMI = Java to Java. EJB = Java business parts on a server. CORBA = any language, through a broker. |
| Basic EDI steps (5) | prepare, outbound translation, communication, inbound translation, processing | P-O-C-I-P: "Pizza Outlet Calls In Person." |
| EDI benefits (6) | cost saving, speed, accuracy, security, system integration, just-in-time support | A shop that is cheap, fast, accurate, safe, well connected, and stocks just in time. |
| EDI standards (4) | AIAG (automotive), X.12 (US and Canada), EDIFACT (Europe), AEB (Asia) | A = automotive. X = North America (the X of X.12). E = Europe. A-E-B = Asia's board. |
| EDIINT protocols (4) | AS1, AS2, AS3, AS4 | Number = transport: 1 = mail, 2 = HTTP, 3 = FTP (file), 4 = web services. |
| EDI implementation costs (10) | translation software, software maintenance, internal software development, hardware, specialty hardware, training, additional resources, networking, legal, consulting | A new office: software (3), machines (2), people (3), phones and lawyers (2). |
| XML-based frameworks (6) | eCO, cXML, BizTalk, RosettaNet, ebXML, XML/EDIFACT | Six names: five XML business frameworks plus XML/EDIFACT (EDIFACT inside XML). |
| Web service terms (4) | SOAP, WSDL, UDDI, REST | S-W-U-R: Send a letter (SOAP), Win the menu (WSDL), Use the directory (UDDI), Reach by URL (REST). |
| VMI processes (2) | CSInformation (pre-consignment), InvoiceInformation (post-consignment) | CS = consignment stock before delivery. Invoice = the bill after use. |
| Cloud characteristics (6) | remotely hosted, ubiquitous, commodified; resource pooling, rapid elasticity, measured service | Three "where and what" (remote, everywhere, utility) and three "how it runs" (pooled, elastic, metered). |
| Cloud service models (3) | IaaS, PaaS, SaaS | Rent an empty flat (IaaS). Rent a furnished co-working desk (PaaS). Stay in a hotel (SaaS). |
| Cloud deployment models (4) | private, community, public, hybrid | Private = my house. Community = housing society. Public = public bus or hotel. Hybrid = home kitchen plus restaurant kitchen. |
| Cloud advantages (11) | lower computer costs, improved performance, reduced software costs, instant updates, document format compatibility, unlimited storage, data reliability, universal document access, latest version, group collaboration, device independence | Cheap PC, cheap software, always up to date, huge storage, safe data, any device. |
| Cloud disadvantages (8 headings) | constant internet needed, low-speed connections, limited features, can be slow, not secure, data can be lost, HPC problems, protocols and APIs differ | "Net, speed, features, slow, secure, lost, HPC, APIs." |
| Cloud concerns (3 groups) | dependence and monopoly; security and ownership; policy and access | Who controls me? Is it safe and mine? Which law and what if it goes down? |

### Example companies and case studies from the slides

| Name | Where on the slides | What it illustrates |
|---|---|---|
| DigiCash | Slides 7, 20, 21, 22 | Anonymous, offline electronic money. The double-spending case. |
| CyberCash | Slides 7, 19, 21, 22 | Electronic cheque. Identifiable, online electronic money. |
| Millicent | Slide 7 | Internet cash-equivalent payment system. |
| Mondex and Visa Cash | Slides 20, 25 | Smart-card digital cash. |
| GemPlus and MasterCard | Slide 25 | Leading smart-card suppliers. |
| PayPal | Slide 18 | Trusted-third-party peer-to-peer payment. |
| SWIFT network | Slides 7, 26 | Electronic funds transfer and B2B payments. |
| Visa and MasterCard | Slides 12, 15 | Open loop systems; card networks in the settlement example. |
| SET protocol | Slides 7, 16 | Secure card protocol, "not widely accepted". |
| Payment gateway | Slide 16 | The trusted-third-party answer to the TLS gap. |
| American Express and Discover | Slides 14, 15 | Card networks in the authorisation and settlement example. |
| State-government card payment example | Slides 14, 15 | Shows the authorisation process and the settlement process step by step. |
| Automotive modem pool | Slide 61 | An automotive manufacturer with hundreds of suppliers dialling in (peer-to-peer). |
| ANSI X12 850 and EDIFACT ORDERS | Slide 59 | The same paper purchase order written in X12 and in EDIFACT. |
| AIAG, X.12, EDIFACT, AEB | Slide 60 | The EDI standards by region and industry. |
| SAP R/3, Oracle E-Business Suite | Slide 42 | Two ERP packages that clash in a VMI integration. |
| Baan, PeopleSoft | Slide 83 | ERP systems used for intra-enterprise workflow. |
| VMI supplier and retailer | Slides 36 to 44, 90 to 99 | The worked example for all four interoperability dimensions and for composite web services. |
| IRCTC ticket service | Slide 85 | Web service with bookTicket() and cancelTicket(), used by travel sites. |
| makemytrip.com and cleartrip.com | Slide 85 | Two dealer sites that call the same web service. |
| Struts and .NET/Ruby | Slide 85 | Platforms the dealer sites run on. The pairing is not clear from the slide text. |
| MySQL and Java EE; MS SQL and .NET | Slides 95, 96 | Cross-platform data flow between two firms, with XML in the middle. |
| Oracle and DB2 | Slide 72 | The databases on each side of the XML wrapper example. |
| Salesforce CRM and LotusLive | Slide 114 | SaaS examples. |
| Google App Engine and Windows Azure | Slide 114 | PaaS examples. |
| Amazon Web Services and Rackspace Hosting | Slide 114 | IaaS examples. |
| Google Docs | Slide 120 | Reduced software cost example. |
| Google and IBM | Slide 117 | Named as possible monopolies in the cloud concern. |
| Amazon's own database and workflow system | Slide 129 | Cloud example where normal applications must be adapted (not SQL-92). |

---

## How this week gets asked

- **Scenario, name the concept.** Most bank and mock questions describe a short story (a start-up, a merchant, a manufacturer) and ask which concept it points to. Find the trigger word first.
- **Which interoperability dimension or technical layer?** Shows up in bank Q3, Q5 and Q6, and in the mocks as service, process, business and layer questions.
- **Which EDI standard, EDIINT protocol or communication method?** Bank Q8, and the mocks ask about X.12 and EDIFACT, the AS1 to AS4 protocols, and peer-to-peer.
- **Pairings: real-world payment and its internet twin.** Appears in the mocks. Options swap the pairs.
- **Which definition best describes?** Payment system, EDI and web service definitions (bank Q9).
- **Which cloud service model or deployment model?** Bank Q10; the mocks ask about community, hybrid and IaaS.
- **Which cloud characteristic?** Measured service and resource pooling.
- **Which card, wallet or e-money type?** Bank Q1; closed loop, charge card, server-side wallet, anonymous e-money; smart card anonymity.
- **Which web service term or style?** WSDL, REST and the SOAP envelope.
- **Which orchestration or choreography pattern?** A central composite service versus no central controller.
- **Which step comes next?** EDI step order, and which VMI process is pre- or post-consignment.
- **Which component wraps or reads XML?** XML wrapper versus XML parser.
- **Which EDI cost category?** Legal and consulting costs in particular, plus the other eight items.
- **Fill-in-the-blank comparison.** Bank Q7, and XML versus traditional EDI.
- **Which is NOT?** Which is NOT one of the B2B technical layers (the financial settlement level is not one).
- **Which benefit?** Just-in-time support.
- **Which XML framework?** XML/EDIFACT.

**Distractor traps for this week**

- **Swapped pairs.** The options swap the real-world and internet examples, or the EDIINT standards. Check the pair against the table in the facts section.
- **Layers that do not exist here.** "Presentation level", "financial settlement level", "application level" and "business process layer" look plausible. The lecture's three technical layers are communication, content/data and process.
- **Absolute words.** "Guarantee", "always", "only", "eliminates", "widely accepted". The slide says TLS gives "no guarantee", and SET is "not widely accepted". A true-sounding but absolute option is usually wrong.
- **Human-readable traps.** A web service is about machine-to-machine interaction. Readable output is not its point. SOAP does not return a human-readable form. REST does.
- **Reversed comparisons.** Bank Q7 option A reverses the XML and EDI traits. Read which one the slide calls cryptic and which one readable.
- **WSDL for REST.** REST does not need a WSDL. WSDL belongs to SOAP.
- **VAN for big companies.** For large companies the lecture says peer-to-peer is suited. The VAN is a third-party network that suits many smaller partners.
- **Integrity for deny.** A reply that stops someone denying a payment is non-repudiation, not integrity.
- **Mobility in two places.** Social mobility (the user moves across devices) is not value mobility (money moves). Economic is value mobility.
- **Wrapper versus parser.** The wrapper is the sender's packing step. The parser is the receiver's reading step.
- **Service model versus deployment model.** "SaaS and community cloud" mixes a service model with a deployment model. Check each half.
- **Pooling versus elasticity.** Pooling is about sharing resources across clients. Elasticity is about scaling up and down.
- **Choosing the one from another week.** Options such as B2C, B2G or other week concepts are wrong for this week's questions.

**If the question says ___ → pick the option about ___**

1. "Verify funds, place a hold, reserve the credit line" → authorization hold (not settlement, not statement).
2. "Money validated online, double spending, token verified by the issuing bank" → online electronic money and double spending.
3. "Field name differs, database format, stock_level vs currentStockLevel" → data interoperability.
4. "Order of exchange steps, triggered at the right point, sequence" → process interoperability.
5. "Work methods, accounting rules, labour law, responsibilities, policies" → business interoperability.
6. "Messages between partners, protocols, CORBA replaced by REST, TCP/IP" → communication level.
7. "Price with or without tax, document is a purchase order or an RFQ" → content/data level.
8. "One central composite service calls each service and collects replies" → orchestration. "No central controller, services exchange messages" → choreography.
9. "Third-party network routes and keeps audit records" → VAN. "Large companies connect directly" → peer-to-peer.
10. "EDI over e-mail" → AS1. "EDI over HTTP" → AS2. "EDI files by FTP" → AS3. "EDI through web services" → AS4.
11. "Readable results, URL path, easy from JavaScript" → REST. "Envelope, WSDL, RPC" → SOAP.
12. "Develop and test apps without managing servers" → PaaS. "Ready software in a browser, subscription" → SaaS. "Rent servers, storage and networks" → IaaS.
13. "Shared by organisations with shared concerns" → community. "Mix of two or more clouds" → hybrid. "Single organisation" → private. "General public, mega-scale" → public.
14. "Anonymous, customer-created serial, blinded, signed by bank" → anonymous e-money (DigiCash). "Bank-issued serial, traceable" → identifiable (CyberCash).

---

## Practice walk-through

**Q1.** A start-up's digital currency is verified by the issuing bank before each transaction. Which problem does this reduce?
- Answer: C) Double spending of electronic money
- Why: Online validation of each token by the bank stops the same token being spent twice. See "Double spending" and "Online electronic money".
- Trap: B) Lack of interoperability among databases. The week covers interoperability, but this scenario is about money tokens, not databases.

**Q2.** A merchant checks with the card issuer for available funds before approving a purchase. What is the purpose?
- Answer: D) To place a hold on the required funds or credit line
- Why: That is the authorization hold step (step 2 of payment acceptance and processing). See "Authorization hold" and "Payment acceptance and processing".
- Trap: A) To generate the monthly statement. Statements belong to billing after the sale, not the check before approval.

**Q3.** Retailer and supplier use different databases and operating systems. XML helps them exchange purchase-order data. Which challenge does XML primarily address?
- Answer: C) Data interoperability
- Why: Different databases and formats are the data dimension. XML is a data exchange standard. See "Interoperability of data" and "XML".
- Trap: D) Service interoperability. Different operating systems sound like a service problem, but the question is about the data they hold and exchange.

**Q4.** A company wants to minimise the chance that a payer can later deny starting a transaction. Which criterion is most relevant?
- Answer: C) Non-repudiation
- Why: Non-repudiation means the sender cannot deny the transaction later. See "Non-repudiation" under the technological aspect.
- Trap: B) Integrity. Integrity stops a message being changed, not a payer denying it.

**Q5.** A manufacturer and retailer revise responsibilities, information-sharing policies and operating procedures for VMI. Which dimension is addressed?
- Answer: D) Business interoperability
- Why: Responsibilities, policies and procedures are the business dimension. See "Interoperability of business".
- Trap: C) Process interoperability. Procedures sound like process, but the question is about the rules and responsibilities behind them, not the order of exchange steps.

**Q6.** A company replaces a CORBA-based integration platform with REST APIs and microservices. The goal is still for components on different systems to exchange requests and responses. Which B2B technical layer?
- Answer: C) Communication level
- Why: Sending requests and responses between systems, and switching protocols, is the communication level. See "Communication level".
- Trap: A) Content/Data level. The data is exchanged, but the question is about how messages move between components.

**Q7.** Which fill-in is correct: compared with traditional EDI, XML is generally considered ___, whereas traditional EDI is often regarded as ___?
- Answer: B) easier to read and implement over the Internet; more established with a larger existing user base
- Why: XML is readable and internet-based. EDI is time-tested, with a larger established user base. See "XML versus EDI" in Don't mix these up.
- Trap: A) more cryptic and less readable; easier to understand and extend. This reverses the traits. EDI is the cryptic one.

**Q8.** A company chooses a third-party network that receives transactions, examines sender and receiver, routes them and keeps audit records. Which EDI communication mechanism?
- Answer: C) Value-Added Network (VAN)
- Why: A third-party network that routes and audits is the VAN. See "Value-Added Network (VAN)".
- Trap: B) AS2. AS2 is a protocol for sending EDI over HTTP. It does not provide a third-party routing and audit service.

**Q9.** A travel portal accesses railway reservation functionality on another organisation's system through a platform-independent interface. Which characteristic makes it possible?
- Answer: C) Interoperable machine-to-machine interaction
- Why: That is the W3C definition of a web service. See "Web service" and "IRCTC ticket service example".
- Trap: A) Human-readable output only. Readable results are not what makes it work across platforms. The point is machine-to-machine interaction.

**Q10.** A company wants developers to build and test applications without managing servers. Another department wants ready-made software through a browser. Which service models respectively?
- Answer: C) PaaS and SaaS
- Why: Building and testing apps without servers is PaaS. Ready software in a browser is SaaS. See "PaaS" and "SaaS".
- Trap: A) IaaS and PaaS. IaaS means renting raw servers, and the second department is not building anything. Its software is SaaS.

---

## 60-second recap

- A payment system moves value from payer to beneficiary, and clears the payer's obligation.
- The four assessment aspects are technological, economic, social and regulatory. Non-repudiation stops a payer denying a transaction.
- Card payments run in three steps: authenticate, check and hold, settle.
- Debit takes money from your bank now. Credit is borrowed up to a limit. Charge has no limit and is paid at month end.
- Closed loop is two parties with the issuer paying the merchant directly. Open loop is three or more, for example Visa or MasterCard.
- TLS secures the link but gives no guarantee at the merchant's server. The lecture's fix is a payment gateway (trusted third party).
- Digital cash risks double spending when it is anonymous and offline. Online validation stops it.
- Identifiable money (CyberCash) comes with a bank serial. Anonymous money (DigiCash) has a customer-made, blinded serial.
- Four interoperability dimensions: data, service, process, business. Three technical layers: communication, content/data, process.
- EDI has five steps: prepare, outbound translate, communicate, inbound translate, process. Peer-to-peer suits large companies. VAN is a third-party network.
- EDIINT: AS1 is mail, AS2 is HTTP, AS3 is FTP, AS4 is web services. X.12 is US and Canada. EDIFACT is Europe.
- XML is readable and internet-based. EDI is time-tested and cryptic. XML wrapper packs, XML parser reads.
- SOAP is the envelope with WSDL and RPC. REST is the URL path, readable and easy from JavaScript. UDDI is the yellow pages.
- Orchestration has one central controller. Choreography has no controller. Composite web services turned five VMI cycles into two processes.
- Cloud has six characteristics. Service models: IaaS rents infrastructure, PaaS builds on a platform, SaaS uses finished software. Deployment models: private (one organisation), community (shared concerns), public (anyone), hybrid (two or more clouds).

---

Coverage check: 45/45 mock questions answerable from this guide.
