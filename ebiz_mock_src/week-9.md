Week 9
Mock 1
Q1) Which type of decision support application is typical of middle management, according to the lecture?
A) Product pricing and profitability forecasting systems, which support middle managers
B) Operational order entry systems used by counter clerks for daily sales
C) Personal reminder spreadsheets maintained by individual employees each week
D) Web page layout tools used by graphic designers for corporate sites
Correct: A

Q2) A decision support system receives sales records from several regional databases. Before the analytical models run, staff must check values for errors, remove invalid entries and combine the records. Which DSS function layer is responsible for these tasks?
A) Data management functions
B) Model management functions, such as analytical modelling
C) User interface functions
D) Order fulfilment functions, which ship goods to customers
Correct: A

Q3) During a statistical review of monthly order values, an analyst flags a few orders that are far larger than all the others. Which statistical model type in the lecture covers this kind of check?
A) Multivariate predictive modelling
B) Collaborative filtering
C) Outlier analysis, a descriptive statistical model type
D) Association rule mining, which finds items that frequently occur together
Correct: C

Q4) Which web server log file records failed requests and server faults, separately from the record of served requests?
A) Common log format
B) Extended (combined) log format
C) Error log, which holds the server's fault records
D) Access log, which records every request served with its status and size
Correct: C

Q5) A web analytics report needs the total volume of content delivered from the server to each visitor's browser. Which extended log field provides this?
A) The referrer field, which records the page the visitor came from
B) The time-taken field, which records how long the action lasted in total
C) The user agent field, which identifies the browser and its version
D) The bytes sent field, counting bytes sent from the server to the client for each request
Correct: D

Q6) A log line reads: 203.30.5.145 - - [01/Jun/1999:03:09:21 -0600] "GET /Calls/OWOM.html HTTP/1.0" 200 3942. Which conclusion does the lecture's field description support?
A) The request failed with a server error and no content was delivered
B) The server answered successfully and sent about 3,942 bytes
C) The visitor submitted a form using the POST method and was redirected
D) The client sent 3,942 bytes of form data to the server
Correct: B

Q7) Which mechanisms does the lecture list for tracking sessions more reliably than the access log alone?
A) Ping packets and ICMP echo replies sent periodically to the visitor's browser
B) Caching of whole websites on proxy servers
C) Cookies, URL rewriting and hidden form fields
D) Dynamic DNS and DHCP lease renewal
Correct: C

Q8) Before analysing human navigation, an analyst removes log entries for embedded images, videos and audio, as well as requests from robots and crawlers. What is this preprocessing step called in the lecture?
A) Sessionization, which groups requests into visits using time thresholds
B) Filtering the merged access log files to remove embedded and robot entries
C) Path completion, which infers navigation steps hidden by caching and link structure
D) Semantic integration, which maps requested URLs onto domain concepts
Correct: B

Q9) Data preprocessing also removes irrelevant fields and erroneous references from server logs. Which preprocessing task does the lecture assign to this work?
A) Data cleaning, which removes irrelevant fields from the logs
B) Data reduction by sampling and dimensionality reduction of the pageviews
C) Pageview identification
D) Data integration
Correct: A

Q10) In the web usage mining process, which phase covers data cleaning, sessionization and the creation of a user transaction database before any patterns are discovered?
A) Presentation phase
B) Pattern discovery phase
C) Archival phase
D) Data preparation phase
Correct: D

Q11) Which drawback of static aggregation reports does the lecture state?
A) They must be recalculated for each individual visitor
B) They cannot summarise page views by day
C) They need much more disk space than raw logs
D) They cannot dig deeper into the data
Correct: D

Q12) A news site wants to load the next article a reader is likely to open in the background, and to reorder its homepage links for each reader. Which applications of web usage mining does this combine?
A) Card fraud detection and credit scoring
B) Calibrating database backup schedules
C) Calibration of the server's CPU and memory usage
D) Pre-fetching or caching, and personalisation
Correct: D

Q13) In a customer behaviour model graph, what do the entry and exit dummy states represent?
A) Two product categories that every customer must visit before any purchase is possible on the site
B) Customers begin in the entry state before entering the site and end in the exit state after leaving
C) The first and last pages of the site's homepage, which are always loaded for each visit
D) Separate session models for mobile visitors and for desktop visitors on the same site
Correct: B

Q14) On an e-commerce model, a Select state is followed by Browse 8 times, Add to cart 4 times, Browse 7 times and exit 1 time. What is the estimated probability of moving from Select to Add to cart?
A) Probability 0.40, which is the share of Select visits that led to Browse
B) Probability 0.05, which is the share of Select visits that led to exit
C) Probability 0.20, which is the share of Select visits that led to Add to cart
D) Probability 0.35, which is the share of Select visits that led to the second Browse
Correct: C

Q15) In a customer behaviour model, what does the customer's think time measure?
A) The total time a customer spends in the entry state before leaving the site
B) The time between the client receiving a page and its next request for another page
C) The average time between two separate visits made by the same customer
D) The time the server takes to process a request after receiving it from the client
Correct: B


Mock 2
Q1) A system builds its recommendations mainly from historical transaction records and statistical patterns, without relying on an explicit mathematical model of the business. Which DSS category does this describe?
A) Model-driven DSS
B) Data-driven DSS, which relies on the analysis of stored data
C) Operational transaction system that records orders and payments as they occur
D) Static reporting system
Correct: B

Q2) A logistics planner must choose the single delivery schedule that minimises cost while respecting every truck's capacity and time windows. Which analytical model type from the lecture fits best?
A) Descriptive statistics
B) Decision analysis
C) Simulation
D) Optimization
Correct: D

Q3) Which of the following is a descriptive data mining technique?
A) Regression, which predicts a numeric value from known inputs
B) Clustering and similarity matching, which group records by shared properties
C) Classification, which assigns visitors to predefined classes using labelled examples
D) Collaborative filtering, which predicts preferences from the choices of similar users
Correct: B

Q4) Which functions are listed in the lecture for the user interface layer of a typical DSS?
A) Hyperlinked multimedia and 3-D visualisation, both user interface functions
B) Outlier analysis and univariate forecasting for historical sales records
C) Statistical process control and six sigma performance management methods
D) Order entry and invoice printing for the daily operational transactions
Correct: A

Q5) In a W3C extended log file, what does the "sc-" prefix on a field name indicate?
A) A client-to-server action, such as a request sent from the browser to the site
B) A client-only action, such as a button clicked inside the visitor's browser
C) A server-to-client action, such as the status returned to the browser
D) A server-only action, such as a file being read from the disk by the server
Correct: C

Q6) Which access log field identifies the browser name and version making the request?
A) The referrer field, which records the URL from which the request originated
B) The user agent field, which describes the client software
C) The bytes field, which records the number of bytes transferred
D) The status field, which records the HTTP code sent back by the server
Correct: B

Q7) Which W3C extended log field records how long, in milliseconds, an action took?
A) time-taken, which records the duration of the action in milliseconds
B) time, which records when the activity occurred during the day
C) cs-bytes, which records the number of bytes received by the server
D) cs-version, which records the protocol version used by the client
Correct: A

Q8) A site stores a visitor's session identifier in a cookie that is sent with every request. In the W3C extended log format, which field would capture that content?
A) cs-uri-query
B) cs(User Agent), which records the browser software and its version string
C) cs(Referrer)
D) cs(Cookie), which records the cookie content sent or received
Correct: D

Q9) Which of the following is NOT listed in the lecture as a problem of relying on the access log alone?
A) Caching of pages by browsers and proxies
B) Dynamic address allocation by ISPs
C) The stateless nature of the HTTP protocol
D) Fast broadband connections for visitors
Correct: D

Q10) A preprocessing team restores requests that were hidden by browser and proxy caching so that navigation paths are complete. When, according to the lecture, should these missing references be added back?
A) Before user identification takes place, when the logs are still unprocessed
B) Before any log files are merged
C) Before robot entries are filtered out
D) After sessionization, once sessions have been identified
Correct: D

Q11) Why does the lecture say heuristics are needed to sessionize access data?
A) Proxies, dynamic IP addresses and cached requests make reliable visit identification difficult, so heuristics are needed
B) Because every browser now enables cookies by default, so heuristics are rarely needed in practice
C) Because the webmaster must define every session in advance by hand for each individual visitor
D) Because heuristics reduce the storage needed for raw logs to zero and remove the need for any log files
Correct: A

Q12) What is a click path, as defined in the lecture?
A) The sequence of hyperlinks that one or more visitors follow on a given site
B) A file type that is defined as a page, shown to the visitor as one display
C) A request for a file from the web server, counted once for each file in a page
D) A series of requests from one uniquely identified client with a timeout of about thirty minutes
Correct: A

Q13) A site analyst wants to find groups of visitors who navigate the site in similar ways, rather than groups who share demographics. Which data mining approach from the lecture fits best?
A) Classification of visitors into predefined customer classes
B) Card fraud detection, which flags unusual payment transactions for review
C) Session clustering, which finds visitors with common behaviour
D) Clustering on demographic properties and interests of individual visitors
Correct: C

Q14) How is the average think time for a transition from one state to another calculated?
A) The number of times the transition occurred divided by the total think time across visits
B) The total think time summed across every state in the whole behaviour model graph
C) Total think time for that transition divided by the number of times it occurred
D) The longest think time observed for that transition across all customers
Correct: C

Q15) A Markov chain model of browsing shows customers staying on the same product page for several consecutive requests. Which modelling issue does this observation raise?
A) Time-independence
B) Negative transition probabilities, which would make the matrix invalid for analysis
C) Self-transition, where a state transitions back to itself
D) Missing dummy states
Correct: C


Mock 3
Q1) Which term in the lecture's timeline covers the period 2005 to 2010 and focuses on statistical and mathematical analysis for decisions?
A) Analytics
B) Big data
C) Executive support
D) Decision support
Correct: A

Q2) Which characteristic best distinguishes a decision support system from routine transaction processing?
A) It records every routine transaction in a standard format for later auditing
B) It provides interactive, ad hoc support for nonroutine decisions made by managers
C) It produces the same fixed report every day for all managers in the company
D) It processes payments and orders for customers in real time at the counter
Correct: B

Q3) The board of a firm wants decision support aimed specifically at the choices of its senior executives, rather than at middle managers' routine reporting. Which term from the lecture's timeline matches this focus?
A) Big data
B) Online analytical processing
C) Executive support
D) Business intelligence
Correct: C

Q4) A row in an access log shows "-" in the cs-username field. What does this indicate?
A) The visitor's IP address could not be resolved to a host name
B) The server failed to record the request properly in the access log
C) The visitor's browser had cookies disabled during the whole visit
D) The visitor was anonymous, with no authenticated user name recorded in the log
Correct: D

Q5) Which HTTP method, recorded in the cs-method field, is used for a typical request to retrieve a page?
A) GET, the method used to request a resource from the server
B) POST
C) 200, the success status code returned by the server for a page
D) HTTP/1.0
Correct: A

Q6) Which W3C extended log field reports the status of an action in terms used by Microsoft Windows rather than in HTTP or FTP terms?
A) cs-version, which reports the protocol version used by the client
B) sc-status, which reports the status in HTTP or FTP terms
C) sc-bytes, which reports the number of bytes sent by the server
D) sc-win32-status, the status in Windows terms
Correct: D

Q7) Roughly what share of the effort in web log analysis does the lecture say filtering consumes?
A) About a quarter of the total analysis effort
B) About half of the total analysis effort spent on writing reports and dashboards
C) About 80 percent of the total effort in log analysis
D) Roughly one tenth of the whole analysis effort
Correct: C

Q8) A site wants to recognise a visitor's navigation without relying only on the server log. Which user identification mechanism, using JavaScript embedded in each page, does the lecture cite?
A) Page tagging, which runs JavaScript on each page to record visits
B) Manual visitor registration forms
C) Static IP address reservation
D) Server-side CPU monitoring of the processor load on the web server
Correct: A

Q9) A sessionization rule closes a session when its total duration exceeds a maximum, or when a single page stay exceeds a maximum. Which family of heuristics does this rule belong to?
A) Cookie-based identification
B) Time-oriented heuristics, which use timing thresholds
C) Navigation-oriented heuristic
D) Path-completion heuristics that infer pages hidden by caching
Correct: B

Q10) A request arrives with an undefined referrer, only a few seconds after the same visitor's previous request, and the referring page cannot be identified. Under the navigation-oriented (href) heuristic in the lecture, how should it be handled?
A) Start a new session, because the referrer is undefined
B) Discard it, because every page must be reached from a previous page of the same session
C) Treat it as a robot request and remove it from the log
D) Keep it in the same session, since it arrived within the time threshold
Correct: D

Q11) A marketing analyst wants to view web sessions by country and then by product category, switching between daily, monthly and yearly totals on the same data. Which capability from the lecture's analysis levels supports this?
A) Hit counting from the raw access log
B) OLAP, which allows the aggregation level to change across multiple dimensions
C) Static aggregation reports, which are fixed by predetermined units such as days or sessions
D) Session analysis, which examines individual session paths
Correct: B

Q12) A retailer finds that many customers who view a diaper page also view a beer page. What does a rule such as "diaper implies beer" mean, according to the lecture?
A) Viewing the diaper page directly causes visitors to later view the beer page
B) The items co-occur often in sessions, but this does not prove that one causes the other
C) Diapers and beer must be stocked together in the same physical store to sell
D) Beer pages are always visited before diaper pages in every single session recorded
Correct: B

Q13) An online shop wants to show a phone case on the same page as phones that customers often view together with it, to increase sales. Which web usage mining application is this?
A) Cross-selling through association rules between products shown on the same page
B) Fraud detection by classifying card payments as genuine or suspicious
C) Click-stream logging of every visit kept for legal compliance and audit purposes
D) Calibration of the web server's response time under heavy concurrent visitor load
Correct: A

Q14) In a customer behaviour model graph, which elements form the dynamic part?
A) The entry and exit dummy states that bound every customer session
B) The set of states, each representing a functional area of the site
C) The transitions that are allowed by the site layout and navigation structure
D) The transition probability matrix and the average transition time matrix
Correct: D

Q15) Which property of the transition probability matrix of a customer behaviour model holds?
A) Transitions from the entry state directly to the exit state are required for every session
B) Probabilities leaving the exit state need not sum to one
C) No transition can be made into the entry state from any state other than the exit state
D) The exit state can transition to any product state
Correct: C
