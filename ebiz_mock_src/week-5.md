Week 5
Mock 1
Q1) Which goal of quality information services concerns the ability to handle waves of demand, either by scaling up to a larger server or scaling out to more servers?
A) Performance
B) Availability and maintainability
C) Scalability
D) Security
Correct: C

Q2) Which web server performance metric is measured in HTTP operations per second or in megabits per second?
A) Throughput
B) Latency
C) Availability
D) Scalability
Correct: A

Q3) A web server must keep listening for client requests and serve more than one request at a time. Which two techniques are used to handle concurrent requests?
A) Caching and proxying
B) Mirroring and striping
C) Packet switching and routing
D) Forking and multithreading
Correct: D

Q4) In DNS-based load balancing, how are client requests spread across a cluster of servers?
A) The server that receives each request redirects it to another server
B) A special TCP router chooses the least-loaded server
C) Servers are mapped round-robin during address translation
D) Clients are assigned to servers according to their physical location
Correct: C

Q5) A company publishes the address of a special TCP router as its website address. The router diverts each request to the server with the lightest load. Which load-balancing method is this?
A) DNS based, using address translation
B) Dispatcher based
C) Server based, using address redirection
D) Mirror based, copying the site to every server
Correct: B

Q6) A company places a proxy server between its internal users and the Internet. The proxy hides internal addresses and filters incoming traffic to protect users' privacy. Which proxy benefit from the lecture is primarily illustrated?
A) Privacy and security through firewall functions
B) Network traffic reduction through repeated caching
C) Dynamic load balancing across mirrored servers
D) Storage of dedicated community content
Correct: A

Q7) A web page loads slowly because the web server waits for responses from an external ad server and a trust service before the page is complete. Which characteristic of e-business infrastructure explains this delay?
A) Mainframe systems always require a legacy protocol
B) Data warehouses are queried in real time for every page request
C) Caches store only static files and never dynamic content
D) Third-party services add delay to the web server's response
Correct: D

Q8) What does MTTR stand for in the context of availability and maintainability?
A) Maximum time to restart
B) Mean time to repair a failed component
C) Mean time to replicate
D) Minimum transfer time to recover
Correct: B

Q9) In the HTTP protocol, in which format is the client's request written, and in which format is the server's response returned?
A) Both are written in MIME
B) Both are written in ASCII
C) The request is in ASCII and the response is in MIME
D) The request is in MIME and the response is returned in ASCII text
Correct: C

Q10) A web address is typed without any port number, such as http://www.example.edu/courses/index.htm. What does the omission indicate?
A) The standard port for the protocol is used by default
B) The server is unreachable on the default port
C) The connection is encrypted on a hidden port
D) No port is needed because the address is an IP address
Correct: A

Q11) An ISP answers a domain lookup from its cache, and the answer is marked non-authoritative. What is the reason?
A) The domain's registration was revoked by the central registry body
B) The cached answer belongs to a different protocol
C) The ISP has not yet registered the domain with ICANN
D) The ISP is only a DNS relay, not in charge of the domain's DNS
Correct: D

Q12) A provider leases connections from a national or regional ISP instead of operating its own backbone, and sells dial-up access to end users. Which ISP level is this?
A) National or regional ISP
B) Local ISP
C) Root server
D) Registry server
Correct: B

Q13) Routing tables in the Internet change with network state, and there is no fixed routing scheme between hosts. Which characteristic of the Internet does this describe?
A) Connection-oriented
B) Circuit-switched
C) Connectionless, so each packet is routed independently
D) Dedicated-path
Correct: C

Q14) A website is mirrored on several servers. Each request first reaches one server, which redirects the client to a less loaded server, and clients notice slower responses. Which load-balancing method is in use, and what is its drawback?
A) Server based, which increases client response time
B) DNS based, which reduces response time
C) Dispatcher based, which reduces response time for every client
D) Proxy based, which increases privacy
Correct: A

Q15) When a client's ISP has no cached answer for a domain and does not know its nameservers, where does the ISP look next?
A) Its own cache a second time
B) The root servers or registry servers
C) The browser's local history
D) The client's own domain registrar, which holds the domain's records
Correct: B

Mock 2
Q1) Which layer of the TCP/IP model provides end-to-end transport service between two hosts?
A) Application layer
B) Transport layer
C) Network layer
D) Link layer
Correct: B

Q2) How many bits long is an IPv6 address?
A) 32 bits, the IPv4 length
B) 64 bits, as in some older systems
C) 128 bits
D) 256 bits, which is used for keys
Correct: C

Q3) Which transport protocol is connectionless, performs no handshaking, and provides no acknowledgement or retransmission?
A) TCP
B) IP
C) ARP
D) UDP
Correct: D

Q4) Which mechanism lets TCP keep several segments in transit at once while controlling how much unacknowledged data may be outstanding?
A) Sliding window mechanism
B) Round-robin address translation
C) Spanning tree protocol
D) Packet sniffing
Correct: A

Q5) A socket identifies a network process uniquely across the Internet. Which two elements make up a socket?
A) MAC address and port number
B) IP address and port number
C) Protocol number and checksum
D) Host name and sequence number
Correct: B

Q6) A LAN has been extended using a device that regenerates the frames, and the network must respect a maximum bit-budget delay. Which device is this?
A) Bridge that filters frames by MAC address
B) Gateway that translates between protocols
C) Repeater
D) Router that forwards packets by IP address
Correct: C

Q7) Which protocol do bridges use to avoid forming loops in the network topology?
A) Spanning tree
B) Address Resolution Protocol
C) Border Gateway Protocol
D) Domain Name System
Correct: A

Q8) Which network device forwards traffic based on IP addresses rather than MAC addresses, selects the best path for each packet, and requires skilled support staff?
A) Repeater
B) Transceiver
C) Bridge
D) Router
Correct: D

Q9) Which device encodes data into electrical or light signals for transmission onto the physical medium, and converts received signals back into data?
A) Gateway that translates between protocols
B) Transceiver
C) Router that forwards packets by IP address
D) Bridge that filters frames by MAC address
Correct: B

Q10) The lecture notes that the fastest memories are available only in small numbers of bits per chip. Why do larger memories tend to be slower?
A) They use fewer transistors per cell, so their addresses are shorter
B) They are always volatile
C) They have more signal delay and need more decoding levels
D) They store data only on magnetic surfaces, which slows every access
Correct: C

Q11) A program repeatedly reads the same loop counter, which stays in the cache after the first access. Which principle of locality does this illustrate?
A) Temporal locality
B) Spatial locality, where nearby addresses are used together
C) Page locality, which applies only to virtual memory pages
D) Bus locality, which depends on the memory bus width
Correct: A

Q12) A program references a page that is not currently in main memory. What happens, and what does the CPU usually do while the disk access occurs?
A) A cache hit occurs and the CPU stalls
B) The DNS cache is refreshed and the CPU idles
C) The program is terminated, and the missing page is written to tape
D) A page fault occurs and the CPU switches to another task
Correct: D

Q13) Which measure of execution time includes disk access, memory accesses, input-output activity and operating-system overhead?
A) CPU time
B) User CPU time
C) Response time
D) System CPU time
Correct: C

Q14) A designer speeds up the CPU 100 times while leaving I/O unchanged, and the overall speedup is still only about 10 times. What conclusion does the lecture draw from this example?
A) Faster CPUs alone always deliver proportional speedups for every system
B) I/O performance can limit the overall performance of the CPU
C) Response time depends only on CPU time
D) Cost can be ignored when upgrading the CPU
Correct: B

Q15) A host has the IP address 128.0.0.1 in dot-decimal form. Which is its binary equivalent, as given in the lecture?
A) 10000000.00000000.00000000.00000001
B) 00000001.00000000.00000000.10000000
C) 10000000.00000001.00000000.00000000
D) 11111111.00000000.00000000.00000001
Correct: A

Mock 3
Q1) Which storage type is non-volatile, stores information as patterns of magnetization on a coated surface, and is accessed sequentially with read/write heads?
A) Semiconductor storage
B) Magnetic storage, using read/write heads on a coated surface
C) Optical disc storage
D) Dynamic random access memory
Correct: B

Q2) Which type of semiconductor memory is used almost exclusively as primary storage in modern computers?
A) Dynamic volatile semiconductor memory
B) Flash memory
C) CD-ROM used for mass distribution of software
D) Magnetic tape
Correct: A

Q3) Which optical disc format is read-only and used for the mass distribution of music, video and computer programs?
A) CD-R
B) CD-RW
C) DVD-RAM
D) CD-ROM
Correct: D

Q4) Storage devices are part of a host computer or connected directly to a single server, such as RAID arrays or tape libraries, so workstations must reach the server to use them. Which storage model is this?
A) Network access storage shared across the LAN
B) Storage area network
C) Direct-attached storage
D) Optical disc storage
Correct: C

Q5) Many computers on a LAN share the same storage space over TCP/IP using NFS or CIFS, which centralises disk management. Which storage model is described?
A) Network access storage
B) Direct-attached storage
C) Storage area network
D) Magnetic tape library
Correct: A

Q6) A company needs fast, block-based storage on a dedicated storage network, but accepts that the network is not easily scalable and cannot span more than about 10 km. Which storage model fits?
A) Network access storage
B) Storage area network, a dedicated block-based network
C) Direct-attached storage
D) Optical disc storage
Correct: B

Q7) A web page is assembled by a server-side script that queries a database and then sends the finished HTML to the browser. Which type of page generation is this?
A) Static page generation
B) Client-side scripting only
C) Dynamic webpage generation
D) Browser cache replay
Correct: C

Q8) Which system software manages a computer's processors, memory, devices and stored programs and data, deciding which process gets each resource and when?
A) Database management system
B) Compiler
C) Domain name system
D) Operating system
Correct: D

Q9) In a relational database, two tables are linked by a common field, such as the department number (Deptno) that appears in both the Department and Employee tables. What does this field allow?
A) Records in the two tables to be linked
B) The tables to be stored on different hosts only
C) The database to skip query processing
D) Physical storage of the tables in one file
Correct: A

Q10) Which component of a database system provides applications and users with access to the organization's databases and manages the stored data?
A) Web server that hosts the company's public pages
B) Database management system
C) Router that forwards packets between networks
D) Browser that displays pages to the user
Correct: B

Q11) A bank's branch offices each keep their own transaction databases on the bank's intranet, and the databases are used together as one system. Which type of database is this?
A) Data marts
B) End-user databases
C) Distributed databases on an intranet
D) External databases on the Internet and online services
Correct: C

Q12) In a data warehouse system, which component captures, cleans, transforms, transports and loads data from operational and external databases?
A) Data acquisition
B) Data analysis
C) Metadata management
D) Warehouse design
Correct: A

Q13) In the data mining process, which step turns the transformed data held in the data warehouse into patterns?
A) Selection
B) Data transformation
C) Data mining
D) Interpretation and evaluation
Correct: C

Q14) A telecom company wants to predict which of its current customers are likely to cancel their contracts, based on past behaviour. Which data mining task for CRM fits best?
A) Clustering and deviation analysis
B) Association
C) Generalization
D) Classification
Correct: D

Q15) An analyst moves from a region's total sales to the individual product sales and sales representatives that make up that total. Which OLAP operation is being used?
A) Consolidation
B) Drill-down into the detailed records behind a total
C) Slicing and dicing
D) Multidimensional indexing
Correct: B
