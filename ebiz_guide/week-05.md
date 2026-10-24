# Week 5 — Internet, Web and E-Business Infrastructure (Lectures 1 to 5)

## In one breath

Week 5 explains what sits underneath a website. First come the parts that keep a site fast, scalable and always up: web servers, application servers, database servers, load balancers, proxies and caches. Then come the internet itself (packets, domain names, HTTP, cookies), the layered networking rules (the OSI and TCP/IP models), the physical hardware and storage behind it, and finally the data that the business keeps and analyses (databases, data warehouses, OLAP).

**The big analogy:** a busy restaurant chain in a big city. The front door (web server) takes every order and hands it to the kitchen (application server). The kitchen reads the recipe book and the stock register (database server). Several branches share the rush (load balancing), and a helpline (DNS) tells every customer which branch to visit. Every question this week is about one part of that restaurant.

## Mind map

```text
Week 5: Internet, Web and E-Business Infrastructure
├── 1. Infrastructure for quality service
│   ├── Goals: performance, scalability, availability
│   ├── Web system: client, web server, app server, database
│   ├── Web server: HTTP daemon, forking/multithreading
│   ├── Web metrics: throughput, latency
│   ├── Load balancing: DNS, dispatcher, server based
│   ├── Proxies, caches, third-party services
│   └── Data warehouse, OLAP, business intelligence
├── 2. Internet and the Web
│   ├── ARPANET origins, packet switching
│   ├── Hosts, routers, best-effort delivery
│   ├── ISPs: local and national/regional
│   ├── DNS: names to IP, cache, root servers
│   ├── ICANN: names and numbers
│   ├── URL: protocol, domain, port, resource
│   ├── HTTP: stateless, ASCII request, MIME response
│   └── Static vs dynamic pages, cookies
├── 3. Networking resources
│   ├── Standard bodies: ISO, IAB, IEEE
│   ├── OSI model: seven layers
│   ├── TCP/IP: four layers
│   ├── Encapsulation: headers added per layer
│   ├── IP addresses: IPv4 32-bit, IPv6 128-bit
│   ├── TCP (connection-oriented) vs UDP (connectionless)
│   └── Port, protocol number, socket
├── 4. Hardware and software resources
│   ├── Devices: transceiver, repeater, bridge, switch, router, gateway
│   ├── Platforms: client, blade server, mainframe
│   ├── Server types and selection factors
│   ├── Response time vs CPU time
│   ├── Memory hierarchy, cache, virtual memory
│   ├── Storage: magnetic, semiconductor, optical
│   ├── Network storage: DAS, NAS, SAN
│   └── Operating system functions
└── 5. Data resources
    ├── Logical data: database, file, record, field
    ├── Entities and relationships (ERD)
    ├── Relational tables and keys
    ├── DBMS, SQL, logical vs physical views
    ├── Database types; data warehouse parts
    ├── Data mining process
    └── OLAP: consolidation, drill-down, slicing, dicing
```

## Concept cards

### 1. Infrastructure for quality information service

**Quality of information services** (three goals)
- What it is: The three things a good e-business site must deliver: performance, scalability, and availability with maintainability.
- Think of it as: A restaurant that serves food fast, can handle the Sunday rush, and keeps running when a stove breaks.
- Spot it in a question: "response time" = performance. "waves of demand" = scalability. "fails over", "self-repair", "diagnostics" = availability and maintainability.

**Performance** (of an e-business service)
- What it is: How quickly a page responds. The delay can come from the ISP (internet service provider), the network, the servers, the applications, or third-party services.
- Think of it as: A slow order can be the waiter, the kitchen, the road to the restaurant, or the delivery partner.
- Spot it in a question: "response time", "delay caused by ISP, network, servers, applications or third parties".

**Scalability**
- What it is: Handling waves of demand. Scale up means a bigger single server. Scale out means more servers.
- Think of it as: Scaling up is hiring a bigger chef. Scaling out is opening more kitchens.
- Spot it in a question: "waves of demand", "larger server" = scale up, "more servers" = scale out.

**Availability and maintainability**
- What it is: The site stays up and can be repaired quickly. It includes finding single points of failure, a minimum working configuration, self-repair, diagnostics and alerts, and emergency procedures.
- Think of it as: A restaurant with a backup generator, so one power cut does not close the kitchen.
- Spot it in a question: "continue operating if one server fails" → find and remove single points of failure.

**MTTF and MTTR**
- What it is: MTTF (mean time to failure) is the average time a system runs before it fails. MTTR (mean time to repair) is the average time taken to fix it.
- Think of it as: How long the bulb lasts (MTTF) and how long the electrician takes to replace it (MTTR).
- Spot it in a question: "mean time to repair" = MTTR. "mean time to failure" = MTTF.

**Technology platform for e-business**
- What it is: The stack of parts that a site is built from: software solutions, web languages, packaged e-business solutions, server platforms, data infrastructure, networking infrastructure (including overview, communication protocols and network security), and digital payment systems.
- Think of it as: A shopping mall's list of parts: buildings, roads, electricity, security and the payment counters.
- Spot it in a question: a list of building blocks. Choose the one that matches the job described.

**Web system architecture**
- What it is: Three main tiers. The web client (browser) talks over the internet to the web server and application server, which talks to the database server.
- Think of it as: A customer at the counter, a waiter taking the order, and the kitchen store behind the wall.
- Spot it in a question: client, web and application server, database server.

**Web server elements**
- What it is: A web server is built from an HTTP server (the software), TCP/IP (the protocol), an operating system, and hardware (processor, disks, network interfaces).
- Think of it as: A shop, from the signboard (HTTP server) down to the building bricks (hardware).
- Spot it in a question: a layer listed under the HTTP server, such as TCP/IP, the operating system or the hardware.

**Web server (HTTP server or HTTP daemon)**
- What it is: Software that keeps listening for client requests and returns the file requested. It can handle more than one request at a time, using forking (starting a new process per request) or multithreading (several threads inside one process).
- Think of it as: A receptionist who never leaves the desk and can serve several visitors at once, by calling in a helper for each.
- Spot it in a question: "keeps listening", "returns the requested file" → web server. "forking" or "multithreading" → how it handles many requests at once.

**Throughput** (web server metric)
- What it is: The rate at which HTTP requests are serviced. Measured in HTTP operations per second, or in megabits per second (Mbps).
- Think of it as: How many customers the counter serves per minute.
- Spot it in a question: "operations per second" or "megabits per second" → throughput.

**Latency** (web server metric)
- What it is: The time taken to complete one request. Average latency is the average time to handle requests.
- Think of it as: How long one customer waits from ordering to receiving the food.
- Spot it in a question: "time required to complete a request", "average time for handling requests" → latency.

**Dynamic load balancing**
- What it is: Splitting traffic across several servers and mirroring the site, so no single server is overloaded.
- Think of it as: Several branches of the same restaurant, with customers sent to whichever branch is least busy.
- Spot it in a question: "splitting traffic", "mirroring the site". Three methods follow.
  - DNS-based: the name service maps the site name to a cluster of servers in round-robin order during address translation.
  - Dispatcher-based: the public address is a special TCP router, which sends each request to the server with the least load.
  - Server-based: the first server redirects the client to another server. The redirect adds delay, so client response time goes up.

**Application server**
- What it is: Handles all transactions between the web server and the back-end database. It supports programming and scripting languages.
- Think of it as: The kitchen manager who turns each customer's order into the steps the kitchen must follow.
- Spot it in a question: "handles transactions between the web server and the backend database" → application server (not the DNS server, the proxy or the router).

**Database server**
- What it is: A server that runs a database management system (DBMS), uses structured query language (SQL), and offers database connectivity.
- Think of it as: The stock register in the back office, read and updated only through the register clerk.
- Spot it in a question: "DBMS", "SQL", "database connectivity".

**Mainframe and legacy systems**
- What it is: Older large systems that the web site still needs to reach. They are linked through integration technologies.
- Think of it as: An old family ledger that the new app still has to read.
- Spot it in a question: "legacy", "integration technologies".

**Proxy server**
- What it is: A server that sits between users and the internet. It reduces network traffic, adds privacy and security (through firewall functions), and can share load.
- Think of it as: A receptionist who screens every visitor at the building gate and remembers common answers.
- Spot it in a question: "hides internal addresses", "filters traffic", "firewall" → proxy with privacy and security. "reduces repeated requests" → traffic reduction.

**Cache**
- What it is: A store of copies of recent or common content, kept nearer to users so the same content need not be fetched again. Caches come in levels, and dedicated community proxy servers can hold shared cache.
- Think of it as: A shop keeping the best-selling items at the front, so customers do not walk to the godown each time.
- Spot it in a question: "traffic reduction", "levels of caches", "community proxy".

**Third-party services**
- What it is: Outside services a page calls, such as security services, ad servers, trust services and escrow services. They add delay to the web server's response time.
- Think of it as: A restaurant waiting for a delivery partner's app to confirm payment before it can serve the bill.
- Spot it in a question: a slow page explained by "ad servers" or "trust services" → third-party services add delay.

**Data warehouse, data mart and business intelligence** (other data resources)
- What it is: A data warehouse collects data from across the organisation. A data mart is a smaller, topic-focused slice of it. Online analytical processing (OLAP) queries and business intelligence (BI) tools turn the data into reports and insight.
- Think of it as: The company's big ledger room (warehouse), a department's own shelf of files (data mart), and the analyst who reads them (BI).
- Spot it in a question: "warehouse", "mart", "OLAP", "business intelligence". Details are in section 5.

### 2. Internet and the Web

**The Internet (origins and basic features)**
- What it is: A collection of networks that began in 1960 as ARPANET, a research network funded by the US Department of Defense. Its basic features are that it is data-centric, separates communication from data processing, and uses packet switching.
- Think of it as: A nationwide courier system built from many local courier networks that agree to pass parcels to each other.
- Spot it in a question: "ARPANET", "US DOD", "collection of networks", "packet switching".

**Packet switching**
- What it is: Data is cut into small packets. Each packet travels separately and is put back together at the destination.
- Think of it as: Sending a book by posting its pages in separate envelopes, each routed on its own.
- Spot it in a question: "packets", "several packets discarded" = packet switching. Circuit switching reserves one fixed path, and the lecture does not treat it as the internet's method.

**Hosts and routers**
- What it is: A packet network has two kinds of node. Hosts are where data originates and ends. Routers pass packets along the way.
- Think of it as: Houses (hosts) and the post offices that move the letters between them (routers).
- Spot it in a question: "originators and destinations" = hosts. "responsible for routing" = routers.

**Connectionless, best-effort delivery**
- What it is: No fixed route is set up between hosts. Routing tables change with network state (congestion or link failure). Packets can arrive out of sequence. If a packet is lost to congestion or a failed link, it is simply discarded. Detecting that and fixing it is the job of the host computer.
- Think of it as: A postal service that does not promise delivery. If a letter gets lost, the sender has to notice and send it again.
- Spot it in a question: "best-effort", "no fixed routing", "packets discarded", "out of sequence" → connectionless best-effort delivery. The correct option usually says the recovery is the host's job.

**Connecting to the Internet**
- What it is: A computer must be connected to a router that is part of the Internet. Routers are run by universities, research centres or commercial companies (ISPs).
- Think of it as: You cannot reach the city's road network until your lane joins a main road.
- Spot it in a question: "connected to a router that is part of the Internet".

**Local ISP**
- What it is: Leases its connection from a national or regional ISP, and gives dial-up access to end users, charging them for it.
- Think of it as: A neighbourhood cable operator that buys its bandwidth from a bigger company.
- Spot it in a question: "leases connections", "dial-up access", "charges users" → local ISP.

**National or regional ISP**
- What it is: Has its own backbone (the main high-capacity network carrying traffic) and charges local ISPs for carrying their traffic.
- Think of it as: The highway company that local roads pay to use.
- Spot it in a question: "own backbone", "charges local ISPs" → national or regional ISP.

**Domain Name System (DNS)**
- What it is: The system that converts human-readable domain names into IP addresses. It is a distributed database, and many other application protocols depend on it.
- Think of it as: The phone book that turns a shop's name into its phone number.
- Spot it in a question: "converting domain names to IP addresses", "distributed database storing domain names".

**How DNS works** (the lookup chain)
- What it is: The browser asks the client's ISP for the IP address. The ISP answers from its cache if it can. The answer is then marked non-authoritative, because the ISP is only a DNS relay and not in charge of the domain. If the answer is missing or too old, the ISP asks the domain's nameservers. If it does not know them, it looks at the root servers or registry servers.
- Think of it as: Asking your neighbour for a phone number. If they do not know it, they check the directory office, and that office checks the national register.
- Spot it in a question: "cached answer", "non-authoritative", "DNS relay", "root servers", "registry servers". Trap: an answer from the ISP cache does not make the ISP the owner of the domain.

**ICANN** (Internet Corporation for Assigned Names and Numbers)
- What it is: A private, non-government, non-profit corporation responsible for IP address space allocation, protocol parameter assignment, domain name system management, and root server system management.
- Think of it as: The national authority that hands out official house numbers and street names, without being a government department.
- Spot it in a question: "coordinating domain name system management", "non-profit", "root server system". Not IEEE (electrical engineers' body), not ISO (standards body), not ARPANET (the original network).

**URL** (Uniform Resource Locator)
- What it is: The unique address of an internet resource, written as protocol://domain-name:port/directory/resource.
- Think of it as: A full postal address: country (protocol), city (domain), flat number (port), and the item in the flat (resource).
- Spot it in a question: the parts of an address. The port can be left out when the standard port is used.

**HTTP** (HyperText Transfer Protocol)
- What it is: An application-level protocol. A client sends a request and the server returns a response. The request is written in ASCII, and the response is returned in MIME (Multipurpose Internet Mail Extensions) format, such as HTML text or JPEG and GIF images. HTTP is stateless: each request stands alone.
- Think of it as: A waiter who takes each order as a separate slip, and does not remember the last table's order unless you tell him.
- Spot it in a question: "request in ASCII, response in MIME", "stateless".

**HTTP request-response model**
- What it is: The client makes a TCP connection to the server at port 80. It sends the HTTP request (header and data). The server returns the HTTP response: a status, a header, and the requested resource.
- Think of it as: Ringing the shop's bell (connection), stating the item (request), and getting the item in a bag with a receipt (response).
- Spot it in a question: "port 80", "status, header, resource".

**Static web page generation**
- What it is: The page is a fixed file written with HTML tags, and the browser displays it as it is.
- Think of it as: A printed brochure. Every reader gets the same text.
- Spot it in a question: "HTML tags and browser" and no database involved.

**Dynamic web page generation**
- What it is: The page is built on request. Server-side programming queries the database, passes data to the web server, and sends back the finished page. Examples named on the slide: Java servlets and JSP, Microsoft ASP, PHP and CGI scripts. Client-side programming (for example JavaScript) runs in the browser.
- Think of it as: A menu printed fresh for each table, with today's prices and dishes.
- Spot it in a question: "server-side script queries a database and sends the finished page" = dynamic. "JavaScript running in the browser" = client-side.

**Cookies**
- What it is: Small pieces of data that the server sets in the browser, so it can recognise the client on later requests. They solve HTTP's stateless nature, track the client, and support things like shopping carts. They also raise privacy issues. The server sends a Set-cookie header with a name and value. The client returns the value in a Cookie header on later requests.
- Think of it as: A token ticket the restaurant hands you. You show it on every visit, so the waiter knows your table without asking again.
- Spot it in a question: "recognise a returning user", "shopping cart", "Set-cookie header". Scenario clue: personalised content after login, on a stateless protocol, points here.

### 3. Networking resources (protocols and layers)

**Computer network and its building blocks**
- What it is: A set of communicating devices. The building blocks are the framework (standards bodies, the ISO-OSI reference model, addressing), protocols (a protocol suite, and the applications that use it), and hardware (the physical connections).
- Think of it as: A postal system: the rules and standards (framework), the letter formats and delivery steps (protocols), and the roads and vans (hardware).
- Spot it in a question: framework, protocol, or hardware. Match the word in the question to the building block.

**Standard organisations**
- What it is: ISO (International Standards Organization) sets international standards. IAB (Internet Advisory Board) guides the internet's technical standards. IEEE (Institute of Electrical and Electronics Engineers) sets electrical and electronic standards, including many network standards.
- Think of it as: Three different referees for three different sports.
- Spot it in a question: match the body to its field. ICANN (names and numbers) is covered in section 2, not here.

**ISO-OSI reference model** (OSI = Open Systems Interconnection)
- What it is: A seven-layer reference model. It was meant as the benchmark for standardising network protocols. It uses divide and conquer: each layer handles one group of functions and talks to its neighbours through well-defined interfaces. Each layer is insulated from the addressing details of the layer below. Protocols can be designed and compared inside this framework. Today TCP/IP is the most important protocol suite.
- Think of it as: A factory assembly line. Each station does one job, and passes the work along through a fixed hatch.
- Spot it in a question: "benchmark", "layers isolate related functions", "well-defined interfaces". Scenario clue: "why are protocols layered" is answered by isolating related functions, so design and comparison are simpler.
- The seven layers, top to bottom: 7 Application, 6 Presentation, 5 Session, 4 Transport, 3 Network, 2 Data Link, 1 Physical.

**TCP/IP layered model**
- What it is: A four-layer model used in practice.
  - Application layer: provides a specific application (for example HTTP, FTP, SMTP, Telnet).
  - Transport layer: provides end-to-end transport service between two hosts (TCP or UDP).
  - Network layer: forwards packets across the network (IP).
  - Link layer: provides the interface or access to the physical network.
- Think of it as: A four-floor building that does the same job as the seven-floor blueprint, with some floors merged.
- Spot it in a question: "end-to-end between two hosts" = transport. "forwards packets across the network" = network. "access to the network" = link.

**TCP/IP and OSI in context** (how they line up)
- What it is: The OSI application, presentation and session layers all sit inside TCP/IP's application layer. OSI transport = TCP and UDP. OSI network = IP and ARP. OSI data link and physical = the link layer (LLC and MAC sublayers, over the physical medium).
- Think of it as: Two maps of the same city, one drawn with more streets, one with fewer.
- Spot it in a question: "which protocol sits at layer 4" → TCP or UDP. "ARP" → network layer.

**Encapsulation** (processing at each layer)
- What it is: As data moves down the stack, each layer adds its own header. The unit has a different name at each layer: stream or message at the application layer, segment at transport, datagram at network, and frame at the link layer.
- Think of it as: Packing a gift: the item goes in a box (TCP header), the box in a courier bag (IP header), and the bag in a van envelope (link header). The receiver peels each layer in reverse.
- Spot it in a question: "segment", "datagram", "frame" are layer names. Headers stack in the order TCP, then IP, then link.

**Link layer**
- What it is: Gives access to the network. It handles the physical addressing, many access-control protocols for each physical network standard, and two functions: encapsulating IP datagrams into frames, and mapping IP addresses to the physical addresses used by the network.
- Think of it as: The local postman who turns a letter into a van-ready parcel and knows each house's door number.
- Spot it in a question: "frames", "physical addresses", "access control", "Ethernet" (which sits here).

**Network layer and IP** (Internet Protocol)
- What it is: Defines the datagram and the internet addressing scheme. It moves data between the network and transport layers, routes datagrams, and performs segmentation and reassembly of datagrams.
- Think of it as: The routing clerk who writes the address on each parcel and chooses the road.
- Spot it in a question: "routing datagrams", "addressing scheme", "segmentation and reassembly".

**IP addresses** (IPv4 and IPv6)
- What it is: IPv4 uses a 32-bit address. IPv6 uses a 128-bit address. The IPv4 header holds fields such as TTL (time to live), PID (protocol identifier), checksum, source address, destination address, and options with padding.
- Think of it as: IPv4 is a phone number with 10 digits. IPv6 is a number long enough that the world will not run out.
- Spot it in a question: "32 bit" = IPv4. "128 bit" = IPv6. A stated address length of 128 bits is the quickest clue.

**Dot-decimal notation and the network and host parts**
- What it is: IPv4 addresses are written as four decimal numbers separated by dots (for example 128.0.0.1). Each number is one byte in binary. An address has two parts: the network number and the host number within that network.
- Think of it as: A house address: the street (network number) and the house number on that street (host number).
- Spot it in a question: "binary equivalent of an address" → convert each decimal number to 8 bits. Example: 128.0.0.1 is 10000000.00000000.00000000.00000001.

**Transport layer: TCP and UDP**
- What it is: Two protocols with different promises.
  - TCP (Transmission Control Protocol): connection-oriented, uses handshaking, tracks source and destination ports, sequence numbers and acknowledgements, and uses a sliding window to control how much unacknowledged data is in flight.
  - UDP (User Datagram Protocol): connectionless, no handshaking, carries only source and destination ports, no acknowledgement, and no retransmission.
- Think of it as: TCP is a registered courier with a signed delivery receipt and a re-send if a parcel is lost. UDP is a postcard: fast, and nobody checks if it arrived.
- Spot it in a question: "handshaking", "sliding window", "acknowledgement" = TCP. "no handshaking, no retransmission" = UDP.

**Sliding window mechanism**
- What it is: TCP's way of letting several segments be in transit at once, while limiting how much data can be sent before it is acknowledged.
- Think of it as: Sending several parcels at once, but only as many as the receiver has room to unpack.
- Spot it in a question: "several segments in transit", "controls unacknowledged data" → sliding window.

**Application layer**
- What it is: All the processes that use the transport layer to deliver data. Examples named: HTTP, FTP, Telnet and SMTP.
- Think of it as: The passengers on the bus, each heading to a different destination.
- Spot it in a question: the protocol name in the list of application protocols.

**Port, protocol number and socket**
- What it is: Data multiplexing combines data from many sources for the network, and demultiplexing divides incoming data to the right destinations. The protocol number identifies the transport protocol (TCP or UDP). The port number identifies the application, and it may be allocated dynamically. A socket is the combination of an IP address and a port number, which uniquely identifies a process across the whole internet.
- Think of it as: An apartment block. The IP address is the building, the port is the flat number, and the socket is the full address of one flat.
- Spot it in a question: "two applications on the same host" → port number decides which application gets the data. "IP address plus port" → socket. "MAC address" does not decide the application.

### 4. Hardware and software resources

**Networking hardware in context** (which device works at which layer)
- What it is: Each device sits at one layer of the OSI stack. Layer 1: repeaters and transceivers. Layer 2: switches and bridges. Layer 3: routers. Layers 3 and 4: bridge-routers. Layer 5: gateways.
- Think of it as: Floors of a building. The lower the floor, the more basic the job (signals), and the higher, the more it understands (addresses, protocols).
- Spot it in a question: match the device to the layer or to the field it reads (MAC address = layer 2, IP address = layer 3).

**Transceiver** (media attachment unit)
- What it is: Encodes data into electrical or light signals ready for the physical medium, and converts received signals back into data. A network adapter card is an example.
- Think of it as: A translator at each end of a phone line, turning speech into electric pulses and back.
- Spot it in a question: "encodes data into electrical or light signals", "converts the signal back into data" → transceiver.

**Repeater**
- What it is: Extends a LAN (local area network) by regenerating the frames. It must respect the network's maximum acceptable delay (the bit-budget delay). Mostly dumb. Some are semi-intelligent, with memory, and can stop the regeneration of error frames and collision frames. Example given: 10/100 BaseT Ethernet.
- Think of it as: A loudspeaker on a long corridor that repeats the announcement so it reaches the far end, without understanding it.
- Spot it in a question: "extend the LAN", "regenerate", "no filtering" → repeater. Regenerating frames within a bit-budget delay is a repeater's job.

**Bridge**
- What it is: Filters and forwards traffic using Layer 2 (MAC address) fields, independent of the Layer 3 protocol. It manages traffic at link level by associating node MAC addresses with interfaces. It protects the topology by stopping loops, using spanning tree or its variants.
- Think of it as: A gatekeeper at a junction who reads the local address on each parcel and sends it only to the right side, and stops the parcels from circling back.
- Spot it in a question: "layer 2 fields", "MAC addresses", "stop loops", "spanning tree" → bridge.

**Spanning tree protocol**
- What it is: The protocol bridges use to stop loops from forming in the network topology.
- Think of it as: A one-way street plan that makes sure no car drives in a circle.
- Spot it in a question: "avoid loops" → spanning tree. It is not ARP, BGP or DNS.

**Switch**
- What it is: A high-speed bridge. Used when a shared-access LAN needs higher bandwidth. It replaces old bridges and repeaters.
- Think of it as: A bridge upgraded to a multi-lane highway.
- Spot it in a question: "increase LAN bandwidth while keeping the forwarding and filtering of bridges" → switch. A bridge's filtering with more speed is the clue.

**Router**
- What it is: A special-purpose layer 3 device, used in place of a host. It forwards traffic by IP address, not MAC address. Routers talk to each other, learn their neighbours, routes and costs, and pick the best path for each packet. They are scalable and can support very large internetworks. They need skilled support and maintenance staff.
- Think of it as: A junction manager with a map of the whole country who decides the best road for each lorry.
- Spot it in a question: "forwards by IP address", "selects the best path", "skilled staff" → router.

**Gateway**
- What it is: A generic term for any network device that can perform protocol translation. Gateways are also transport relay devices. Older literature calls routers gateways.
- Think of it as: An interpreter at a border post who lets people who speak different languages communicate.
- Spot it in a question: "protocol translation" → gateway. Do not confuse with router (routing by address) unless the question says older literature.

**Bridge vs router vs switch (quick clue)**
- Bridge: layer 2, MAC address, loop prevention. Switch: a fast bridge for shared LANs. Router: layer 3, IP address, best path. Gateway: translates protocols.
- Spot it in a question: MAC = bridge or switch. IP = router. Translation = gateway.

**Computer hardware platforms**
- What it is: Three main kinds. Client machines (desktop PCs, mobile devices such as PDAs, laptops). Servers (blade servers, which are ultra-thin computers stacked in racks). Mainframes (large machines; the slide says one IBM mainframe equals thousands of blade servers). The slide also names top chip producers (AMD, Intel, IBM) and top firms (IBM, HP, Dell, Sun Microsystems).
- Think of it as: Personal diaries (clients), a row of filing cabinets (blade servers), and one huge central archive room (mainframe).
- Spot it in a question: "blade servers in racks" → server. "thousands of blade servers equivalent" → mainframe.

**Server** (a computer, or the software, that provides services to other computers)
- What it is: The slide lists these server types.
  - Application server: runs certain software applications.
  - Communications server: carrier-grade computing platform for communication networks.
  - Database server: provides database services.
  - Fax server: provides fax services to clients.
  - File server: provides file services.
  - Game server: clients connect to play online together.
  - Standalone server: an emulator for client-server (web-based) programs.
  - Web server: HTTP clients connect to it to send commands and receive responses and data.
- Think of it as: Each server is a specialist counter in the same office: post, files, accounts, games.
- Spot it in a question: match the service in the question to the server type. "send commands and receive responses along with data" = web server.

**Factors that influence server selection**
- What it is: The slide ranks these from most important to least important (from an Advisory Council study): applications support, cost, ease of administration, familiarity, homogeneity, interoperability, reliability (mean time between failures), scalability, security, and vendor support.
- Think of it as: Buying a car. First check it fits your needs (applications support), then the price, then how easy it is to service.
- Spot it in a question: "most important" = applications support. "least important" = vendor support. Mean time between failures is the reliability factor.

**Execution time: response time and CPU time**
- What it is: Response time (also called elapsed, wall-clock, or latency to complete a task) includes disk access, memory access, input and output activity, and operating system overhead. CPU time is the time the CPU is actually computing, excluding waiting for I/O or other programs. It splits into user CPU time and system CPU time.
- Think of it as: Response time is the whole visit to the bank, queues included. CPU time is only the time the teller spends counting.
- Spot it in a question: "includes disk access, I/O, OS overhead" = response time. "time when the CPU is computing" = CPU time. "elapsed time on the unloaded system" = system performance. "user CPU time on the unloaded system" = CPU performance.

**I/O bottleneck** (why faster CPUs do not speed up everything)
- What it is: Response time depends on I/O time as well as CPU time. The lecture's examples: if CPU time is 10 per cent of response time and the CPU is sped up 10 times, the overall speedup is only about 5 times (half the potential wasted). If the CPU is made 100 times faster without improving I/O, the speedup is only about 10 times, and 90 per cent of the potential is wasted.
- Think of it as: A fast cook in a restaurant whose waiters are slow. The food is ready quickly, but customers still wait for service.
- Spot it in a question: "speeds up the CPU 100 times, overall only about 10 times" → I/O performance limits the CPU. The lecture's conclusion: I/O performance can reduce CPU performance.

**Cost constraint in hardware purchase**
- What it is: When buying, the cost is usually held constant, set by system or commercial needs. Speed and storage capacity are then adjusted to meet the cost target.
- Think of it as: Fixing the budget first, then choosing the best phone you can afford.
- Spot it in a question: "cost is held constant" = speed and storage are the variables.

**Memory hierarchy** (smaller is faster)
- What it is: Faster memory is smaller, because signal propagation and decoding slow down large memories. The fastest memories come in few bits per chip and cost more per byte. The hierarchy runs from registers (fastest), through cache, to main memory, to disk (slowest), and the design relies on the principle of locality.
- Think of it as: A desk (registers), a drawer (cache), a bookshelf (main memory) and a godown (disk). Things you use most sit closest.
- Spot it in a question: "smaller is faster", "faster but costlier per byte", "faster to slower" → memory hierarchy.

**Cache**
- What it is: A small, fast memory close to the CPU that holds the most recently accessed code or data. A cache hit means the item is found in the cache. A cache miss means it is not, and the hardware fetches it from slower memory, usually stalling the CPU until the data arrives. The miss time depends on memory latency and bandwidth (how much data arrives at once).
- Think of it as: A kitchen counter with the spices you used today. A hit is grabbing the pinch of salt from the counter. A miss is walking to the store room.
- Spot it in a question: "small fast memory near the CPU" = cache. "hardware handles it, CPU pauses or stalls" = cache miss.

**Locality** (temporal and spatial)
- What it is: Temporal locality means an item used recently is likely to be used again soon. Spatial locality means items near a recently used address are likely to be used soon after.
- Think of it as: Temporal: the same tool stays on your workbench because you keep using it. Spatial: when you take one book from a shelf, you probably need the one beside it.
- Spot it in a question: "the same loop counter read again and again" = temporal. "nearby addresses used together" = spatial.

**Main memory, virtual memory and page fault**
- What it is: Every object a program references must reside in main memory. Virtual memory uses disk space as an extension, in fixed-size pages. If a page is not in main memory, a page fault occurs. The CPU usually switches to another task while the disk access happens.
- Think of it as: Your desk holds only the files you need today. A missing file has to be fetched from the godown, so you work on another job meanwhile.
- Spot it in a question: "page not in main memory" = page fault. "CPU switches to another task during disk access" = the usual response.

**Storage types**
- What it is: Three families: magnetic, semiconductor and optical. (Details in the next three cards.)
- Think of it as: Three kinds of cupboard, each with a different speed, size and cost.
- Spot it in a question: match the storage technology described to its family.

**Magnetic storage**
- What it is: Non-volatile. Information is stored as patterns of magnetisation on a coated surface, read and written by read/write heads. Because a head covers only part of the surface, it is sequential access and must seek or cycle. Examples: floppy disk and hard disk (magnetic disks), and magnetic tape for tertiary and off-line storage.
- Think of it as: A cassette tape. You have to wind forward to reach a song.
- Spot it in a question: "non-volatile", "patterns of magnetisation", "read/write heads", "sequential access" → magnetic.

**Semiconductor storage**
- What it is: Built from integrated circuits with millions of tiny transistors or capacitors. Both volatile and non-volatile forms exist. In modern computers, primary storage is almost always dynamic volatile memory (DRAM, dynamic random access memory). Flash memory is non-volatile and used as off-line storage for home computers. Non-volatile semiconductor memory is also used as secondary storage in advanced devices.
- Think of it as: A whiteboard in a meeting room. It is fast and erased when the power goes off (volatile), except for a flash drive that keeps the notes.
- Spot it in a question: "integrated circuits", "primary storage today", "flash memory" → semiconductor. "dynamic volatile" = DRAM, the primary storage answer.

**Optical disc storage**
- What it is: Non-volatile and sequential access. Tiny pits etched on a circular disc are read with a laser diode, by watching the reflection. Three groups: CD, CD-ROM and DVD are read-only, used for mass distribution of music, video and programs. CD-R, DVD-R and DVD+R are write-once, for off-line storage. CD-RW, DVD-RW, DVD+RW and DVD-RAM are slow to write and fast to read, also for off-line storage.
- Think of it as: A printed record (read-only), a blank CD you burn once (write-once), and a rewritable board you can erase and reuse (rewritable).
- Spot it in a question: "read-only and mass distribution" = CD-ROM family. "write once" = CD-R or DVD-R. "rewritable, slow write" = CD-RW family.

**Network storage**
- What it is: Any storage accessed over a computer network. It centralises information management in an organisation and reduces duplication. Three models: direct-attached storage (DAS), network-attached storage (NAS), and storage area network (SAN).
- Think of it as: Keeping files in your own cupboard (DAS), in a shared office almirah that everyone opens over the network (NAS), or in a separate, dedicated warehouse with its own delivery lanes (SAN).
- Spot it in a question: the model the question describes. The three cards below separate them.

**Direct-attached storage (DAS)**
- What it is: The most basic model. The storage is part of the host, or connected directly to a single server (such as RAID arrays or tape libraries). Network workstations must go through the server to reach it. It was the first widely popular model and still makes up most installed storage.
- Think of it as: A hard drive plugged into one computer. Everyone else asks that computer for the files.
- Spot it in a question: "part of the host computer", "directly connected to a single server", "workstations must access the server" → DAS.

**Network-attached storage (NAS)**
- What it is: Storage devices accessed over a TCP/IP network, rather than attached to the computer's bus (for example SCSI). Multiple computers share the same space, and disk management is central. Usually built from disks in redundant RAID arrays. Protocols used: NFS, CIFS or HTTP. It allows sharing between different operating systems, such as Unix and Windows NT. Strengths: scalable, data can travel long distances. Weaknesses: slow and prone to congestion, and backup and recovery are inefficient (they depend on the DAS devices).
- Think of it as: A shared almirah at the office, reachable by everyone's computer over the office network.
- Spot it in a question: "shared over TCP/IP", "NFS, CIFS", "many computers share one storage pool" → NAS. "file-level" sharing is the usual framing.

**Storage area network (SAN)**
- What it is: Very similar to NAS, but it uses a block-based protocol and runs over an independent, specialised storage network. Only server-class devices with SCSI or Fibre Channel can connect. SAN file sharing depends on the operating system, and many operating systems do not support it. Fibre Channel reaches about 10 km at best. Data transfer is much faster. Strengths: efficient data integrity, backup and recovery; faster, no congestion. Weaknesses: not easily scalable, and data cannot be sent over long distances.
- Think of it as: A private high-speed freight line between the factory and the warehouse, fast and secure, but expensive to extend.
- Spot it in a question: "block-based", "independent specialised storage network", "about 10 km", "server-class devices" → SAN.

**Operating system** (OS)
- What it is: A collection of programs that manages the system's resources: memory, processors, devices, and information (programs and data). It decides which process gets each resource, how much, and when. It allocates resources and takes them back when needed.
- Think of it as: The manager of a shared office, deciding who gets the printer, the meeting room and the power plug, and when.
- Spot it in a question: "manages memory, processors, devices and information" → operating system, not DBMS, compiler or DNS.

**Functions of an operating system** (five)
- User interface: end-user and system interaction, and network communications.
- Resource management: managing the use of hardware resources.
- Task management: managing the accomplishment of tasks.
- File management: managing data and program files.
- Utilities and other functions: a range of support services.
- Spot it in a question: the matching verb, for example "manage files" = file management, "manage hardware" = resource management.

### 5. Data resources

**Logical data elements** (database, file, record, field)
- What it is: A database holds files (for example a payroll file and a benefits file). A file holds records, and each record is one employee, customer or order. A record is split into fields, such as name, social security number and salary.
- Think of it as: A register book (database) with sections (files), one row per person (record), and one column per detail (field).
- Spot it in a question: the layer a word names. Field is the smallest, record holds fields, file holds records, database holds files.

**Entity**
- What it is: A thing the business needs to store information about, such as a customer, an order or a product. The lecture uses "Customer", "Order" and "Product" as examples.
- Think of it as: A noun in the business: a person, place or thing that gets its own table or box.
- Spot it in a question: "objects connected through associations" → entities. Attributes are the details of an entity, and queries and views are different things.

**Relationship and the entity relationship diagram (ERD)**
- What it is: A relationship is the association between two entities, such as "ordered on" or "supplies". An entity relationship diagram draws the entities as boxes and the relationships as labelled lines, with symbols showing one or many. The slide's example links purchase order item, product, supplier, purchase order, product stock and warehouse. Product "supplies" from supplier. Product stock "holds" in the warehouse.
- Think of it as: A family tree for business data: who belongs to whom and how many.
- Spot it in a question: "associations between objects" → ERD, relationship. "boxes and labelled lines" → ERD.

**Relational database structure** (tables and a common field)
- What it is: Data is stored in tables. Two tables are linked by a common field. The slide's example: a Department table and an Employee table, both with a Deptno (department number) field. Each employee row points to a department through Deptno.
- Think of it as: Two registers that share one column, so you can find each employee's department from the department number.
- Spot it in a question: "common field", "linked by Deptno" → the records in two tables are linked. The link does not mean the tables are stored in one file or on one host.

**Database management system (DBMS)**
- What it is: Software that gives applications and users access to the organisation's databases and manages the stored data. The lecture's example: a customer database with checking, savings and installment loan programs. Each program reaches the data through the DBMS.
- Think of it as: The librarian. Every reader asks the librarian, who fetches the book from the stacks.
- Spot it in a question: "provides access to databases and manages stored data" → DBMS. Not the web server or the router.

**Structured Query Language (SQL)**
- What it is: The language for reading and changing relational databases. Its common keywords are SELECT (which columns), FROM (which tables) and WHERE (which rows). The slide translates "What customers had no orders last month?" into a SELECT with a WHERE NOT EXISTS condition.
- Think of it as: Writing a filing request: "show me these columns, from this cabinet, where this condition holds".
- Spot it in a question: "query language", "SELECT", "WHERE" → SQL.

**Logical user views vs physical data views**
- What it is: Logical user views are the subsets of data each department needs. Different departments see different parts of the same stored data. The full set of data elements and relationships needed for all services is the schema, and the department's subset is a subschema. A physical data view is how the data is organised and where it sits on storage media.
- Think of it as: One warehouse stock list, where the sales team sees only the saleable items, the accounts team sees prices, and the godown keeper sees where each box sits.
- Spot it in a question: "different departments view different subsets" = logical user views. "organisation and location on the storage media" = physical data view.

**Database types used by organisations and end users**
- What it is: The lecture's diagram shows these types. End-user databases (on the client PC). Distributed databases on intranets and other networks. External databases on the internet and online services. Operational databases of the organisation. Data marts. A data warehouse on the network server.
- Think of it as: A shop's notebook (end-user), the branch ledgers linked over a network (distributed), a supplier's catalogue online (external), the day-to-day cash book (operational), a department shelf (data mart), and the head office archive (warehouse).
- Spot it in a question: "branch offices each keep their own databases, used together as one system" → distributed databases on an intranet. "external, on the internet and online services" → external.

**Data warehouse system: components**
- What it is: Data flows through several blocks. Data acquisition captures, cleans, transforms, transports and loads data from operational, external and other databases. Data management holds the analytical data store, the enterprise warehouse and the data marts. Data analysis queries, reports, analyses, mines and delivers. Metadata management holds the metadata directory and repository. Warehouse design sits alongside. Web information systems deliver results to users.
- Think of it as: A supply line for a kitchen. Ingredients come in and get washed and chopped (acquisition), stored in cold rooms (management), cooked and served (analysis), with a recipe book that describes everything (metadata).
- Spot it in a question: "captures, cleans, transforms, transports and loads" = data acquisition. "describes the data" = metadata. "query, report, analyse, mine, deliver" = data analysis.

**Data mining process**
- What it is: Five steps, shown left to right. Selection (pick the relevant data from databases) produces target data. Data transformation prepares it in the data warehouse. Data mining turns it into patterns. Interpretation and evaluation turn the patterns into business knowledge.
- Think of it as: Sifting sand. You choose the sand to sift, clean it, run the sieve, look at what is left in the pan, and decide if it is gold.
- Spot it in a question: "turns transformed data into patterns" = the data mining step. "turns patterns into business knowledge" = interpretation and evaluation. "chooses the relevant data first" = selection.

**Data mining tasks for customer relationship management** (not drawn on the slides; general knowledge)
- What it is: Classification predicts a known category from past examples (for example, will this customer cancel or stay). Association finds items bought together. Clustering groups similar customers without labels. Generalisation summarises data. Deviation analysis finds outliers.
- Think of it as: Classification is a spam filter that has learned from labelled mail. Association is "customers who buy bread also buy butter". Clustering is grouping shoppers by taste without being told the groups.
- Spot it in a question: "predict which current customers are likely to leave" → classification. "items bought together" → association. "group similar customers" → clustering.

**OLAP** (online analytical processing)
- What it is: Fast analysis of data organised for several viewpoints at once. The data can be seen as a multidimensional cube: indicators (such as customer value, turnover, profitability) measured along dimensions (such as customer groups, product line, service palette, sales region and time).
- Think of it as: A Rubik's cube of sales. Each face is a different question: by region, by product, by time.
- Spot it in a question: "multidimensional", "indicators and dimensions", "cube" → OLAP.

**OLAP: consolidation** (roll-up)
- What it is: Aggregating data, from simple roll-ups to complex groupings. The slide's example: sales offices roll up to district level, and districts roll up to regional level.
- Think of it as: Adding the shop totals into a district total, and district totals into a state total.
- Spot it in a question: "aggregation", "roll-up", "from sales offices to district to region" → consolidation.

**OLAP: drill-down**
- What it is: Going in the reverse direction, from a consolidated total to the detailed data behind it. The slide's example: the sales by individual product or by sales rep that make up a region's total.
- Think of it as: Clicking the total in your bank statement to see each transaction.
- Spot it in a question: "from a total to the detail behind it" → drill-down. Trap: it is the opposite of consolidation.

**OLAP: slicing and dicing**
- What it is: Looking at the data from different viewpoints. One slice might show all sales of one product type across regions. Another might show all sales by channel within each product type. It is often done along a time axis to find trends.
- Think of it as: Cutting a cake in different directions: one slice by region, another by product, another by year.
- Spot it in a question: "different viewpoints", "one slice shows", "along a time axis" → slicing and dicing.

**Fact and dimension, indicator and dimension** (OLAP vocabulary)
- What it is: Indicators are the numbers you measure (customer value, turnover, profitability). Dimensions are the ways you split those numbers (customer group, product line, region, time).
- Think of it as: Indicators are the scores on the report card. Dimensions are the subjects and the terms they fall in.
- Spot it in a question: "measured" = indicator; "by region, by time" = dimension.

## How it flows

**Web system architecture**
```text
Web client ──► Internet ──► Web server + application server ──► Database server
(browser)                   (HTTP and business logic)           (DBMS, SQL)
```
The client only sees the web server. The application server does the work between the web server and the data.

**Web server elements (stack, bottom to top)**
```text
Hardware  (processor, disks, network interfaces)
Operating system
TCP/IP
HTTP server  (listens for requests, returns files)
```

**Dynamic load balancing: three methods**
```text
DNS-based:        name ──► round-robin list of servers (decided at address translation)
Dispatcher-based: public address = TCP router ──► router sends to least-loaded server
Server-based:     server A ──► redirect ──► server B   (extra round trip, slower response)
```

**Packet switching path**
```text
Host A ──► Router 1 ──► Router 2 ──► Router 3 ──► Host B
            (routes change with congestion; a lost packet is dropped; host A notices and resends)
```

**DNS lookup chain**
```text
Browser ──► client's ISP (cache?)
   ├── yes: return answer, marked non-authoritative (ISP is only a relay)
   └── no or too old ──► domain's nameservers
           └── unknown? ──► root servers or registry servers
```

**HTTP request-response and cookies**
```text
Client ── TCP connection to port 80 ──► Server
Client ── HTTP request (ASCII, header + data) ──► Server
Server ── HTTP response (status, header, MIME resource) ──► Client
Server sends:     Set-cookie: Name=Value          (on first response)
Client returns:   Cookie: Name=Value              (on every later request)
```

**Static vs dynamic page**
```text
STATIC:   stored HTML file ──► browser shows the same page for everyone
DYNAMIC:  request ──► server script ──► database query ──► page built ──► browser
```

**OSI and TCP/IP in one view**
```text
OSI 7 Application   ┐
OSI 6 Presentation  ├──► TCP/IP Application   (FTP, HTTP, Telnet, SMTP)
OSI 5 Session       ┘
OSI 4 Transport     ───► TCP and UDP           (TCP/IP Transport)
OSI 3 Network       ───► IP and ARP            (TCP/IP Network)
OSI 2 Data link     ┐
OSI 1 Physical      ┘──► LLC/MAC and physical  (TCP/IP Link)
```

**Encapsulation (sending side, top to bottom)**
```text
Application data
   + TCP header  = segment
   + IP header   = datagram
   + link header = frame ──► physical medium
Receiver removes the headers in reverse order.
```

**Networking hardware by layer**
```text
Layer 5  Session ........... gateway (protocol translation)
Layer 3-4                    router, bridge-router
Layer 3  Network ........... router (reads IP address)
Layer 2  Data link ......... switch, bridge (reads MAC address)
Layer 1  Physical .......... repeater, transceiver (signal only)
```

**Memory hierarchy (fastest at top)**
```text
CPU registers ──► cache ──► main memory ──► disk (virtual memory pages)
   fastest,           small,        larger,          slowest,
   smallest           fast                           largest
Cache hit: found in cache. Cache miss: fetched from slower level, CPU stalls.
Page fault: page not in main memory; CPU switches to another task during disk access.
```

**Network storage models**
```text
DAS:  workstation ──► server ──► disks (storage hangs off one server)
NAS:  workstations ──► TCP/IP LAN ──► NAS box (file sharing, NFS/CIFS)
SAN:  servers ──► dedicated storage network (block level, Fibre Channel) ──► storage array
```

**Operating system functions**
```text
                 User interface (end user, system, network)
    ┌──────────────┬──────────────┬──────────────┬──────────────┐
Resource        Task            File           Utilities
management      management      management     and other
(hardware)      (tasks)         (data, programs) (support)
```

**Data model hierarchy**
```text
Database ──► files (payroll file, benefits file)
   └── file ──► records (Employee record 1, 2, 3...)
         └── record ──► fields (name, SS no., salary)
```

**Relational link**
```text
Department table: Deptno | Dname | Dloc | Dmgr
Employee table:   Empno | Ename | Etitle | Esalary | Deptno
                             Deptno links each employee row to one department row
```

**Database system with a DBMS**
```text
Inquiry screen ──► customer transaction processing
       checking program ──┐
       savings program  ──┼──► DBMS ──► one customer database
       loan program     ──┘
Programs never touch the data directly; they go through the DBMS.
```

**Data warehouse system**
```text
Operational, external, other databases
   ──► DATA ACQUISITION (capture, clean, transform, transport, load)
   ──► DATA MANAGEMENT (analytical store, enterprise warehouse, data marts)
   ──► DATA ANALYSIS (query, report, analyse, mine, deliver) ──► users, web information systems
METADATA MANAGEMENT (directory, repository) sits beside, serving both sides.
```

**Data mining process**
```text
Databases ──► SELECTION ──► target data ──► DATA TRANSFORMATION ──► data warehouse
   ──► DATA MINING ──► patterns ──► INTERPRETATION / EVALUATION ──► business knowledge
```

**OLAP moves on the cube**
```text
Consolidation (roll-up):   sales office ──► district ──► region          (up, summarise)
Drill-down:                region ──► district ──► sales office          (down, detail)
Slice and dice:           same cube viewed by product, by region, by year (across)
```

## Don't mix these up

| These look alike | How to tell them apart | Tie-breaker word |
|---|---|---|
| Scale up vs scale out | Scale up: one bigger server. Scale out: more servers | "larger server" vs "more servers" |
| Performance vs scalability vs availability | Performance: speed of response. Scalability: handling waves of demand. Availability: staying up and being repaired | "response time" / "waves of demand" / "keeps running if one fails" |
| Throughput vs latency | Throughput: requests served per second (or Mbps). Latency: time taken for one request | "per second" vs "time to complete" |
| Response time vs CPU time | Response time includes disk, memory, I/O and OS overhead. CPU time counts only the processor working | "waiting, disk, I/O" → response time; "CPU computing" → CPU time |
| User CPU time vs system CPU time | User: the program's own work. System: the operating system's work for it | "operating system work" → system CPU time |
| MTTF vs MTTR | MTTF: average time until failure. MTTR: average time to repair | "to failure" vs "to repair" |
| Single point of failure vs minimum configuration | A single point of failure is one part whose loss stops the site. Minimum configuration is the smallest set that keeps it working | "find and remove the one part" → single point of failure |
| Dispatcher-based vs DNS-based vs server-based balancing | Dispatcher: a TCP router picks the least-loaded server. DNS: round-robin during address translation. Server: redirects the client to another server | "TCP router" → dispatcher; "round-robin, address translation" → DNS; "redirect" → server (slower) |
| Web server vs application server vs database server | Web server returns files over HTTP. Application server handles transactions to the back end. Database server runs the DBMS and SQL | "HTTP, files" / "transactions between web server and database" / "DBMS, SQL" |
| Proxy vs cache | Proxy sits between users and the internet and can filter and hide addresses. Cache stores copies to avoid refetching | "hides addresses, firewall" → proxy; "stores copies, traffic reduction" → cache |
| Third-party services vs proxy | Third-party services are outside services a page calls (ads, trust) and add delay. Proxies are your own gateway servers | "ad server, trust service, escrow" → third party |
| Data warehouse vs data mart | Warehouse: the whole organisation's collected data. Mart: a smaller, topic-focused slice | "whole organisation" vs "one department's topic" |
| Circuit switching vs packet switching | Circuit switching reserves a fixed path. Packet switching sends independent packets that may take different routes | "packets discarded" or "packets out of sequence" → packet switching |
| Connection-oriented (TCP) vs connectionless (UDP, IP) | TCP sets up a connection and handshakes. UDP and IP just send | "handshaking, acknowledgement" → TCP |
| Best-effort delivery vs guaranteed delivery | Best-effort: the network may discard packets, and the host must recover. Guaranteed: the network promises delivery | "discarded on congestion" → best effort |
| Hosts vs routers | Hosts originate and receive data. Routers forward packets along the way | "originators and destinations" vs "responsible for routing" |
| Local ISP vs national or regional ISP | Local ISP leases from the bigger ISP and sells dial-up access. National/regional ISP runs its own backbone and charges local ISPs | "leases connections" → local; "own backbone" → national |
| DNS vs ICANN | DNS converts names to IP addresses. ICANN coordinates the names and numbers system | "converting names" → DNS; "coordinating assignment" → ICANN |
| Root servers vs registry servers vs nameservers | Nameservers hold a domain's own records. Root and registry servers are the next place to look when the nameservers are unknown | "domain's own nameservers" vs "unknown, look upwards" |
| Cached (non-authoritative) answer vs authoritative answer | A relay ISP's cached answer is non-authoritative. The domain's own nameserver gives the authoritative answer | "ISP is only a relay" → non-authoritative |
| URL vs IP address vs domain name | URL: full address including protocol, port and resource. Domain name: human name. IP address: numeric address | "protocol://" → URL; "192.0.2.1" style → IP |
| Port number vs IP address vs socket vs MAC address | Port: which application. IP: which host. Socket: IP plus port. MAC: the physical network card on the local link | "which application on the host" → port; "uniquely across the Internet" → socket; "local network card" → MAC |
| IPv4 vs IPv6 | IPv4: 32-bit. IPv6: 128-bit | the bit length in the question |
| HTTP request vs HTTP response | Request: client to server, written in ASCII. Response: server to client, returned in MIME (HTML, JPEG, GIF) | "sent by client" → ASCII; "returned by server" → MIME |
| Static vs dynamic page | Static: a stored HTML file. Dynamic: built on request, often from a database | "database query" or "server script" → dynamic |
| Server-side vs client-side programming | Server-side: runs on the server (servlets, ASP, PHP, CGI). Client-side: runs in the browser (JavaScript) | "runs in the browser" → client-side |
| Cookies vs URL | Cookie: small data the server stores in the browser to recognise the client. URL: an address | "recognise a returning user" → cookie |
| OSI model vs TCP/IP model | OSI has seven layers and is the reference. TCP/IP has four layers and is the working suite | "seven layers, reference" vs "four layers, most important suite in use" |
| Transport layer vs network layer | Transport: end-to-end between two hosts (TCP, UDP). Network: forwarding packets across the network (IP) | "between two hosts" vs "across the network" |
| Link layer vs physical layer | Link: access to the network and frames. Physical: the signals and media | "frames, MAC" vs "signals, medium" |
| TCP vs UDP | TCP: connection-oriented, acknowledgements, sliding window. UDP: connectionless, no retransmission | "acknowledgement, handshaking" → TCP; "no acknowledgement" → UDP |
| Sliding window vs spanning tree | Sliding window controls data in flight in TCP. Spanning tree stops loops in bridged networks | "unacknowledged data" → sliding window; "loops" → spanning tree |
| Frame vs packet vs datagram vs segment | Segment: transport unit. Datagram: IP unit. Frame: link unit | the layer named in the question |
| Repeater vs bridge vs switch vs router | Repeater: layer 1, regenerates signals. Bridge: layer 2, filters by MAC. Switch: fast bridge for shared LANs. Router: layer 3, routes by IP | "regenerates" → repeater; "MAC, filters, loops" → bridge; "higher bandwidth" → switch; "IP, best path" → router |
| Gateway vs router | Gateway translates protocols. Router routes by IP (older books call routers gateways) | "protocol translation" → gateway |
| Transceiver vs network adapter card | The transceiver is the function that encodes signals and converts them back. The adapter card is the example device | "encodes into electrical or light signals" → transceiver |
| Bridge vs switch | A switch is a high-speed bridge for shared LANs that need more bandwidth | "more bandwidth" → switch |
| Spanning tree vs ARP vs BGP | Spanning tree stops bridge loops. ARP maps IP to MAC. BGP is an inter-network routing protocol | "loops" → spanning tree; "IP to MAC" → ARP |
| Fork vs multithread | Forking starts a new process per request. Multithreading runs several threads inside one process | "new process" vs "threads" |
| DAS vs NAS vs SAN | DAS: attached to one server. NAS: file sharing over TCP/IP. SAN: block-level over a dedicated network | "single server" → DAS; "NFS, CIFS, TCP/IP" → NAS; "block, Fibre Channel, dedicated" → SAN |
| NAS vs SAN scalability | NAS is scalable and works over long distances, but is slow. SAN is faster, but not easily scalable and limited to about 10 km | "faster, backup and integrity" → SAN; "scalable, shared" → NAS |
| Magnetic vs semiconductor vs optical storage | Magnetic: magnetised surface, sequential. Semiconductor: integrated circuits, DRAM and flash. Optical: pits read by laser | "magnetisation", "transistors", "laser and pits" |
| CD-ROM vs CD-R vs CD-RW | CD-ROM: read-only, mass distribution. CD-R: write once. CD-RW: rewritable, slow write | "read only" → CD-ROM; "write once" → CD-R; "rewrite" → CD-RW |
| Primary storage vs secondary vs off-line storage | Primary: memory the CPU uses directly (DRAM). Secondary: disks and flash in devices. Off-line: tapes and discs kept apart | "dynamic RAM, CPU" → primary |
| Cache vs main memory vs virtual memory | Cache: small, fastest, near the CPU. Main memory: holds everything the program references. Virtual memory: uses disk pages to extend main memory | "small, fast, near CPU" → cache; "page fault" → virtual memory |
| Cache hit vs cache miss vs page fault | Hit: found in cache. Miss: fetched from slower memory, CPU stalls. Page fault: page not in main memory, CPU switches task | "found" = hit; "stall" = miss; "page not in memory" = page fault |
| Temporal vs spatial locality | Temporal: same item used again soon. Spatial: nearby items used soon | "same item again" vs "neighbouring address" |
| Operating system vs DBMS vs compiler vs DNS | OS manages hardware and programs. DBMS manages data. DNS converts names. Compiler turns code into machine code | "processors, memory, devices" → OS; "database access" → DBMS |
| Database vs DBMS | Database: the stored data. DBMS: the software that manages and gives access to it | "stores data" vs "manages access" |
| Entity vs attribute vs relationship | Entity: a thing (customer, order). Attribute: a detail of the thing (name, salary). Relationship: the link between entities | "object" → entity; "detail" → attribute; "link" → relationship |
| Field vs record vs file | Field: one detail. Record: one row of fields. File: a collection of records | "one detail" / "one row" / "collection" |
| Logical user view vs physical data view | Logical: the subset each department sees. Physical: where and how data is stored | "department sees a subset" vs "storage media" |
| Schema vs subschema | Schema: all the data elements and relationships for the whole organisation. Subschema: the part one application or department needs | "all services" vs "checking loan processing" |
| Shared field vs table | A shared field (for example Deptno) links two tables. A table holds the rows of one kind of entity | "common field" → the link between tables |
| SQL vs DBMS | SQL is the language for queries. DBMS is the software that runs them | "query language" → SQL |
| Drill-down vs consolidation | Consolidation (roll-up) adds detail up into totals. Drill-down goes from totals back down to detail | "totals from sales offices" → consolidation; "detail behind a total" → drill-down |
| Slicing and dicing vs drill-down | Slicing and dicing looks at the cube from different sides. Drill-down goes into the detail under a total | "different viewpoints", "time axis" → slicing and dicing |
| OLAP vs data mining | OLAP answers questions you already framed, across dimensions. Data mining finds patterns you did not know to look for | "multidimensional cube" → OLAP; "patterns" → data mining |
| Data acquisition vs data analysis vs metadata management | Acquisition: capture, clean, transform, load. Analysis: query, report, mine. Metadata: describes the data | verbs in the question: capture/clean/load; query/report; describe |
| Selection vs data transformation vs data mining | Selection picks the relevant data. Transformation prepares it. Mining finds patterns | the step the question describes |
| Classification vs clustering vs association | Classification: predicts a known category. Clustering: groups without labels. Association: items bought together | "predict who will leave" → classification; "group similar customers" → clustering; "bought together" → association |
| Cookie vs session data | A cookie is stored in the browser and sent back with each request. Server-side session data stays on the server | "stored in the browser" → cookie |

## Must-remember facts

### Lists, numbers and memory tricks

| List | Items | Memory trick |
|---|---|---|
| Goals of quality information services (three) | Performance, scalability, availability and maintainability | "Fast, Full, Forever-up" (speed, load, uptime) |
| Availability items | Single points of failure, minimum configuration, self-repair, diagnostics and alerts, emergency procedures, MTTF, MTTR | "Find the weak spot, keep a minimum, repair itself, shout when hurt, have a plan" |
| Technology platform for e-business (nine parts) | Software solutions, web languages, packaged solutions, server platforms, data infrastructure, networking infrastructure, communication protocols, network security, digital payment systems | "Software, Languages, Packages, Servers, Data, Network, Protocols, Security, Payments" |
| Web system tiers (four) | Web client, web server, application server, database server | "Client asks, Web receives, App works, Database keeps" |
| Dynamic load balancing methods (three) | DNS-based, dispatcher-based, server-based | "Names rotate, Router picks, Server redirects (slower)" |
| Web server performance metrics (two) | Throughput (per second or Mbps), latency (time per request) | "Throughput = how many; Latency = how long" |
| Concurrency techniques (two) | Forking, multithreading | "Fork = new process; Thread = new worker in the same process" |
| Proxy benefits (three) | Traffic reduction, privacy and security (firewall), load balancing | "Save traffic, Guard, Share load" |
| Cache facts | Traffic reduction, levels of cache, dedicated community proxy servers | "Copy close, store in levels" |
| OSI layers (seven) | Application, presentation, session, transport, network, data link, physical | "All People Seem To Need Dates, Please" (7 to 1: Application, Presentation, Session, Transport, Network, Data link, Physical) |
| TCP/IP layers (four) | Application, transport, network, link | "A-T-N-L: Apps, Trips between hosts, Neighbourhood routing, Local link" |
| Encapsulation names | Stream/message, segment (TCP), datagram (IP), frame (link) | "Segment, Datagram, Frame: the layer's own parcel" |
| IP address sizes | IPv4 = 32 bits, IPv6 = 128 bits | "Four-byte IPv4, sixteen-byte IPv6" |
| IPv4 header fields named | TTL, PID, checksum, source address, destination address, options and padding | "Time, Protocol, Check, Source, Destination, Options" |
| TCP features | Connection-oriented, handshaking, source and destination port, sequence number, acknowledgement, sliding window | "Shake hands, count, confirm, slide" |
| UDP features | Connectionless, no handshaking, ports only, no acknowledgement, no retransmission | "Postcard: ports only, no re-send" |
| Socket | IP address plus port number | "Building plus flat number" |
| Networking devices by layer | Repeater and transceiver (1), switch and bridge (2), router (3), bridge-router (3-4), gateway (5) | "Layer 1 repeats, Layer 2 filters MAC, Layer 3 routes IP, Gateway translates" |
| Bridge functions | Layer 2 filtering and forwarding, MAC associations, loop prevention (spanning tree) | "Read MAC, forward, stop loops" |
| Repeater rules | Extends LAN, regenerates frames, bit-budget delay limit, mostly dumb, some semi-intelligent | "Extend, Regenerate, Respect the delay budget" |
| Router rules | Layer 3, forwards by IP, learns neighbours and costs, best path, scalable, skilled staff | "IP in, best path out, needs experts" |
| Server types (eight) | Application, communications, database, fax, file, game, standalone, web | "A-C-D-F-F-G-S-W" (Apps, Carriers, Data, Fax, Files, Games, Standalone emulator, Web) |
| Server selection factors (ten) | Applications support (most important), cost, ease of administration, familiarity, homogeneity, interoperability, reliability (MTBF), scalability, security, vendor support (least) | "Apps first, Vendors last: Cost, Admin, Familiar, Same, Interop, Reliable, Scale, Secure" |
| Computer platforms (three) | Client machines, blade servers, mainframes | "Clients carry, Blades rack, Mainframe equals thousands of blades" |
| Storage families (three) | Magnetic, semiconductor, optical | "Magnet tape, Chip memory, Laser disc" |
| Optical families (three) | Read-only (CD, CD-ROM, DVD), write-once (CD-R, DVD-R, DVD+R), rewritable (CD-RW, DVD-RW, DVD+RW, DVD-RAM) | "Read, Write once, Rewrite slowly" |
| Network storage models (three) | DAS, NAS, SAN | "Direct to one server, Network files, Storage network blocks" |
| NAS protocols | NFS, CIFS, HTTP | "Network file names" |
| Fibre Channel SAN limit | About 10 km at best | "SAN: 10 km, then it stops" |
| Operating system functions (five) | User interface, resource management, task management, file management, utilities and other functions | "Talk, Hardware, Tasks, Files, Extras" |
| Memory hierarchy (four levels) | Registers, cache, main memory, disk | "Desk, drawer, shelf, godown" |
| Locality (two) | Temporal (same item again), spatial (neighbour item) | "Time: same again. Space: next door" |
| Data hierarchy | Field, record, file, database | "Field in a record, records in a file, files in a database" |
| Database types on the diagram (six) | End-user, distributed (intranet), external (internet and online services), operational, data mart, data warehouse | "End, Distributed, External, Operational, Mart, Warehouse" |
| Data warehouse components (six) | Data acquisition, data management, data analysis, metadata management, warehouse design, web information systems | "Acquire, Manage, Analyse, Describe, Design, Publish" |
| Data mining steps (five) | Selection, data transformation, data warehouse, data mining, interpretation and evaluation | "Select, Transform, Warehouse, Mine, Interpret" |
| OLAP operations (three named) | Consolidation (roll-up), drill-down, slicing and dicing | "Roll up to totals, drill into detail, slice and dice across" |
| OLAP dimensions named | Customer groups, product line, service palette, sales region, time | "Who, What, Service, Where, When" |
| OLAP indicators named | Customer value, turnover, profitability | "Value, Money in, Profit" |

### Quotes, authors and examples

| Item | What the lecture says (paraphrased) | Remember |
|---|---|---|
| Menascé and Almeida (2000) | Source of the three goals of quality information services (scaling for e-business) | "Performance, scalability, availability" |
| Kurose and Ross (2010) | Standard networking textbook cited for the internet and protocol slides | "Top-down networking" |
| ARPANET | The internet's ancestor, from 1960, funded by the US Department of Defense | "1960, DoD, packets" |
| ICANN | Private non-profit that handles IP address allocation, protocol parameters, domain name system management and root server management | "Names and numbers, non-government" |
| ISO, IAB, IEEE | International standards, internet technical advice, electrical and electronic engineering standards | "ISO = international standard, IAB = internet advice, IEEE = engineers" |
| Port 80 | Default port in the HTTP request-response model | "80 = web" |
| MIME | Multipurpose Internet Mail Extensions: the format for responses (HTML text, JPEG or GIF images) | "Response is MIME" |
| Advisory Council study | Source of the ranking of server selection factors | "Applications first" |
| I/O speedup example (slide 66) | A 10 times faster CPU with a 10 per cent non-CPU share gives only about 5 times overall. A 100 times faster CPU with I/O unchanged gives about 10 times | "Slowest part sets the pace" |
| Dell, IBM, HP, Sun Microsystems, Intel, AMD | Firms and chip makers named on the platforms slide | "Chips: Intel, AMD, IBM. Firms: IBM, HP, Dell, Sun" |

## How this week gets asked

**The question patterns**
- Scenario, then "which goal, component, device or layer?" The short story is a website outage, a slow page, a shared file, a warehouse of records, or a data analyst's question. The four options are official names.
- "Why is it designed this way?" Layering, stateless HTTP, best-effort delivery, the memory hierarchy. The right answer gives the reason, not a fact.
- "Which identifier, port, address or field?" Port vs IP vs MAC vs socket vs checksum.
- "Which device or layer?" Repeater, bridge, switch, router, gateway, transceiver.
- "Which storage or memory technology?" DAS, NAS, SAN; magnetic, semiconductor, optical; cache, main memory, page fault.
- "Which database, data or analysis concept?" Entity, logical user view, DBMS, SQL, drill-down, data mining step.
- "Which measurement?" Throughput, latency, response time, CPU time, MTTR.

**Distractor traps for this week**
- Right technology, wrong layer. A router is layer 3, a bridge is layer 2. A question about MAC addresses points to a bridge or switch, not a router.
- Absolute words: "always", "never", "eliminates", "only", "guaranteed". The internet is best-effort, not guaranteed. A faster CPU does not always give proportional speedup, because the I/O share caps the gain.
- Near-twins: NAS vs SAN, DAS vs NAS, TCP vs UDP, cache vs main memory, CD-R vs CD-RW, drill-down vs consolidation, data warehouse vs data mart.
- Plausible but unrelated protocols. ARP, BGP, DNS and spanning tree all sound like networking. Match each to its job.
- Faster hardware is not always the fix. Options that say "upgrade the CPU" for an I/O-bound delay are traps.
- The DNS ISP answer is not authoritative. Options that say the ISP owns or registers the domain are wrong.
- Concepts from other weeks. Week 4's distribution network and logistics terms are not answers to week 5 infrastructure questions.

**If the question says ___ → pick the option about ___**
1. "Keeps working if one server fails" or "single points of failure" → identify and remove single points of failure.
2. "Waves of demand" → scalability (scale up with a bigger server, or scale out with more servers).
3. "Requests split across servers, least busy one picked by a special TCP router" → dispatcher-based balancing.
4. "Handles transactions between the web server and the database" → application server.
5. "Packets discarded in congestion, page still arrives" → best-effort packet delivery.
6. "Domain names and IP numbers coordinated by a non-government non-profit" → ICANN.
7. "Server remembers a returning user in a stateless protocol" → cookies.
8. "Several applications on one host" → port number. "Increase LAN bandwidth while keeping bridge filtering" → switch.
9. "Department sees its own subset of the same data" → logical user views. "Objects connected by associations" → entities.
10. "Faster CPU, overall speedup far lower" → I/O performance limits the CPU.
11. "Converts signals to and from electrical or light" → transceiver. "Regenerates frames" → repeater.
12. "Predicts which current customers will leave" → classification.

## Practice walk-through

**Q1.** An e-commerce company wants its site to keep running if one server fails. Which measure directly supports this?
- Answer: D) Identifying and eliminating single points of failure
- Why: Availability means removing the parts whose failure would stop the site (see the availability card under quality of information services).
- Trap: "Increasing the processor speed of the primary server" makes the server faster, but it does nothing if the server still fails.

**Q2.** Which component mainly handles interactions between the web server and the back-end database?
- Answer: A) Application server
- Why: The application server handles all transactions between the web server and the back-end database (web system architecture card).
- Trap: "Router" moves packets, and "DNS server" finds addresses. Neither handles the transactions.

**Q3.** A page from abroad arrives even though some packets are dropped on the way. Which feature makes this possible?
- Answer: B) Best-effort packet delivery
- Why: The internet is a packet-switched, connectionless, best-effort network. Lost packets are the host's job to recover (Internet and packet switching cards).
- Trap: "Circuit switching" reserves a fixed path, which is not how the internet works here.

**Q4.** A startup wants a globally accessible domain. Which organisation coordinates the domain name system management functions?
- Answer: D) ICANN
- Why: ICANN is the private, non-government, non-profit body responsible for domain name system management (ICANN card).
- Trap: "IEEE" sets electrical and electronic standards, and "ISO" sets international standards. Neither coordinates domain names.

**Q5.** A web app shows personalised recommendations after login, and HTTP is stateless. Which mechanism lets the server recognise the returning user?
- Answer: D) Cookies
- Why: A server sets a cookie with a Set-cookie header and the browser returns it on later requests (cookies card).
- Trap: "DNS caching" speeds up name lookups. It does not identify a user.

**Q6.** Why are networking protocols organised into layers?
- Answer: B) To isolate related functions and simplify protocol design and comparison
- Why: Layers isolate groups of related functions, with well-defined interfaces, so protocols can be designed and compared (OSI card).
- Trap: "To eliminate the need for addressing schemes for each layer" is wrong: each layer is insulated from the addressing details of the layer below, not free of addressing.

**Q7.** Two applications on the same host share one IP address. Which identifier delivers incoming data to the right application?
- Answer: C) Port number
- Why: The port number identifies the application. The IP address identifies the host, and the socket is the IP address plus the port (port, socket cards).
- Trap: "MAC address" identifies a network card on the local link, not an application.

**Q8.** An organisation wants more LAN bandwidth while keeping bridge-style forwarding and filtering. Which device fits?
- Answer: D) Switch
- Why: A switch is a high-speed bridge, used when a shared LAN needs more bandwidth (bridge and switch cards).
- Trap: "Repeater" regenerates signals but does not filter. "Router" forwards by IP, which is layer 3, not the bridge's layer 2 filtering.

**Q9.** "Customer", "Order" and "Product" are separate objects linked by associations. These objects are examples of:
- Answer: D) Entities
- Why: Entities are the things a business stores data about, linked by relationships (entity and ERD cards).
- Trap: "Attributes" are the details of each object, such as a customer's name, not the objects themselves.

**Q10.** A bank stores each customer's data once, but each department sees a different subset. Which concept enables this?
- Answer: C) Logical user views
- Why: Logical user views (subschemas) show each department the data elements it needs, while the data is stored once (logical user views card).
- Trap: "Physical data view" is about where the data sits on storage media, not what each department sees.

## 60-second recap

- Quality information service means performance, scalability, and availability with maintainability. Remove single points of failure.
- Scale up is a bigger server. Scale out is more servers.
- A web server listens and returns files. An application server runs the transactions. A database server runs the DBMS and SQL.
- Load balancing: DNS round-robin, dispatcher (TCP router, least loaded), server redirect (slower).
- The internet is connectionless, packet-switched and best-effort. Lost packets are the host's job.
- DNS turns names into IP addresses. ISP answers from cache are non-authoritative. ICANN coordinates names and numbers.
- HTTP is stateless. The request is ASCII, the response is MIME. Cookies remember the user.
- OSI has seven layers, TCP/IP has four. Each layer is insulated from the layer below.
- TCP is connection-oriented with acknowledgements and sliding window. UDP is connectionless with no retransmission.
- Socket equals IP address plus port number. Port picks the application.
- Repeater (layer 1), bridge and switch (layer 2, MAC), router (layer 3, IP), gateway (protocol translation).
- Response time includes I/O and overhead. CPU time counts only the processor. I/O can cap the CPU's gains.
- Cache is small and fast; a hit is found, a miss stalls the CPU; a page fault switches the CPU to another task.
- Storage: magnetic is sequential; semiconductor is DRAM for primary storage and flash for off-line; optical is read-only, write-once or rewritable.
- DAS hangs off one server, NAS shares files over TCP/IP, SAN is block-level, fast, and limited to about 10 km.
- Entities are the things; relationships link them; logical user views show each department its subset; SQL queries it.
- Data warehouse flows from acquisition to management to analysis, with metadata beside it. Data mining goes select, transform, mine, interpret.
- OLAP: consolidation rolls up, drill-down goes into detail, slicing and dicing looks from different sides.

---

Coverage check: 45/45 mock questions answerable from this guide.
