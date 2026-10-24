# Week 9 — Decision Support, Web Logs, Web Usage Mining and User Behaviour Models

## In one breath

Every click on a website leaves a trace in a log file. This week shows how to turn those traces into decisions. Five lectures: (1) decision support systems (DSS), the tools managers use to test choices; (2) how web logs are made and what each field means; (3) cleaning the logs and grouping clicks into visits (sessions); (4) web usage mining, the methods that find patterns in those visits; (5) user behaviour models, which show how visitors move from page to page and what they do next.

**The big analogy:** A shop's CCTV and billing counter. The camera (web server log) records every person who walks in, including children, the delivery boy and the security guard (robots and embedded files). Someone has to delete the noise, then group each customer's walk through the shop into one visit (sessionization). The manager then asks: "which aisles do people walk to before buying?" (web usage mining), and "what is the chance a shopper moves from the entrance to the billing counter?" (behaviour model).

---

## Mind map

Short forms used in the tree, spelled out once here: DSS (Decision Support System); OLAP (Online Analytical Processing); BI (Business Intelligence); HTTP (HyperText Transfer Protocol); IP (Internet Protocol); URL (Uniform Resource Locator); ISP (Internet Service Provider); W3C (World Wide Web Consortium); CBMG (Customer Behavior Model Graph); NLP (Natural Language Processing).

```text
WEEK 9: Decide, read the log, mine the clicks, model the visitor
├── 1. Decision support
│   ├── DSS = interactive, ad hoc support for nonroutine decisions
│   ├── Model-driven vs data-driven DSS
│   ├── Components: user interface, model management, data management
│   ├── Analytical models: optimisation, simulation, decision analysis
│   ├── Statistical models: descriptive, outlier, predictive
│   ├── Data mining: predictive vs descriptive techniques
│   ├── Text mining = NLP to find patterns in text
│   └── Timeline: decision support -> executive support -> OLAP -> BI -> analytics -> big data
├── 2. Web logs and sessions
│   ├── Server logs: access log and error log
│   ├── Common and extended (combined) log formats
│   ├── Extended fields: IP, user, time, method, status, bytes, referrer, agent
│   ├── Problems: caching, dynamic IPs, stateless HTTP, crawlers
│   ├── Session tracking: cookies, URL rewriting, hidden form fields
│   ├── Preprocessing: cleaning, integration, transformation, reduction
│   ├── Robots and embedded files removed (filtering takes ~80% of effort)
│   ├── Sessionization: time-oriented and navigation-oriented heuristics
│   └── Path completion and semantic integration
├── 3. Web usage mining
│   ├── Usage mining = mine clickstream data for personalisation and profit
│   ├── Analysis levels: static aggregation, session analysis, OLAP, data mining
│   ├── Definitions: hit, page view, visit/session, click path
│   ├── Data mining menu: sequence mining, association rules, clustering, classification
│   ├── Association rules: co-occurrence, not causality (diaper and beer)
│   └── Applications: pre-fetching, reorganisation, personalisation, cross-selling
└── 4. User behaviour modelling
    ├── Markov chains: next state depends on current state
    ├── Customer behaviour model graph (CBMG): static and dynamic parts
    ├── Entry and exit dummy states
    ├── Transition probability matrix and average transition time matrix
    ├── Think time: client receives page -> next request
    └── Properties: no return to entry except from exit; exit loops or goes to entry
```

---

## Concept cards

### 1. Decision support

**DSS (Decision Support System)**
- What it is: a system that gives managers and business professionals interactive, ad hoc support for their decisions, especially nonroutine ones.
- Think of it as: a car's navigation app that lets you try a different route before you commit to a drive.
- Spot it in a question: "interactive", "ad hoc", "nonroutine decisions", "evaluate alternatives" → DSS. A routine order-entry system is not a DSS.

**Nonroutine decision (example)**
- What it is: a one-off question such as "what is the impact on the production schedule if December sales doubled?"
- Think of it as: a question you have not faced before, so there is no ready-made rule.
- Spot it in a question: "what if", "impact on", "not a routine decision" → nonroutine, so a DSS is needed.

**Model-driven DSS**
- What it is: a DSS built around mathematical or statistical models of the business (for example an optimisation model).
- Think of it as: a recipe-based cook who works from a formula.
- Spot it in a question: "explicit mathematical model" → model-driven.

**Data-driven DSS**
- What it is: a DSS that works from stored data and patterns in past records, without an explicit model of the business.
- Think of it as: a cook who learns from the thousands of meals served last year.
- Spot it in a question: "historical transaction records", "statistical patterns", "without an explicit model" → data-driven.

**Middle management (DSS users)**
- What it is: the lecture says DSS serve middle management. Examples: product pricing, profitability forecasting and risk analysis systems.
- Think of it as: a shift supervisor who needs the numbers to set the week's prices.
- Spot it in a question: "product pricing and profitability forecasting" → middle management DSS.

**Components of a typical DSS (slide 5)**
- What it is: three function layers, stacked. User interface functions (hyperlinked multimedia, 3-D visualisation) at the top. Model management functions (analytical modelling, statistical analysis) in the middle. Data management functions (data extraction, validation, sanitation, integration and replication) at the bottom, drawing on operational, market, sales and customer account data, and data marts.
- Think of it as: a restaurant. The menu and dining room are the interface, the kitchen's recipes are the models, and the pantry, where ingredients are checked and cleaned, is the data layer.
- Spot it in a question: "check values for errors, remove invalid entries, combine records" → data management functions. "Hyperlinked multimedia, 3-D visualisation" → user interface functions. "Analytical modelling, statistical analysis" → model management.

**Optimisation (analytical model)**
- What it is: finding the best solution that meets all the constraints, such as the cheapest schedule within truck capacity and time windows.
- Think of it as: packing the maximum number of boxes into a van without breaking the weight limit.
- Spot it in a question: "best choice under constraints", "minimise cost while respecting capacity and time windows" → optimisation.

**Simulation (analytical model)**
- What it is: running a model of the system to see how it behaves under different conditions.
- Think of it as: a flight simulator for the business.
- Spot it in a question: "what happens under a set of conditions" → simulation.

**Decision analysis (analytical model)**
- What it is: comparing alternatives under uncertainty to choose the best option.
- Think of it as: a decision tree for a business choice.
- Spot it in a question: "compare alternative strategies" → decision analysis.

**Static versus dynamic models**
- What it is: a static model does not change over time. A dynamic model describes behaviour that changes over time.
- Think of it as: a photograph (static) versus a video (dynamic).
- Spot it in a question: "system behaviour unchanged over time" → static. "changes over time" → dynamic.

**Deterministic versus stochastic models**
- What it is: a deterministic model gives a fixed outcome once the inputs are set. A stochastic model includes random variation or uncertainty in the outcomes.
- Think of it as: a vending machine (deterministic: the same button always gives the same snack) versus a lottery (stochastic: the result varies).
- Spot it in a question: "random fluctuations", "uncertainty incorporated" → stochastic (bank Q2 answer). "Outcomes fixed once inputs specified" → deterministic.

**Descriptive statistics**
- What it is: summaries of data, such as averages, totals and spreads.
- Think of it as: a school report card that shows the class average.
- Spot it in a question: "summarise", "average", "spread" → descriptive statistics.

**Outlier analysis**
- What it is: a statistical check that flags values far away from the rest of the data.
- Think of it as: spotting the one student who scored 98 when everyone else scored 40 to 60.
- Spot it in a question: "far larger than all the others", "unusual values flagged" → outlier analysis, a descriptive statistical model type.

**Univariate and multivariate predictive models**
- What it is: univariate predictive models use one input to predict an outcome. Multivariate predictive models use several inputs.
- Think of it as: predicting tomorrow's rain from today's humidity (one input) versus from humidity, wind and pressure (many inputs).
- Spot it in a question: "one input" → univariate; "several inputs" → multivariate.

**Predictive data-mining techniques**
- What it is: regression (predicts a numeric value), classification (assigns records to predefined classes), and collaborative filtering (predicts preferences from the choices of similar users).
- Think of it as: a weather forecast (regression), a spam filter (classification), and "people who liked this also liked…" (collaborative filtering).
- Spot it in a question: "predict a number", "assign to predefined classes", "similar users' choices" → the matching technique.

**Descriptive data-mining techniques**
- What it is: clustering and similarity matching (groups records by shared properties), and association rules and variants (what items occur together).
- Think of it as: sorting a box of mixed socks into pairs (clustering), and noticing that buyers of bread often buy butter (association).
- Spot it in a question: "group records by shared properties", "which items occur together" → descriptive technique.

**Text mining**
- What it is: finding patterns and themes in text using natural language processing (NLP), which is software that understands human language.
- Think of it as: reading thousands of reviews at once and noticing the phrases that keep coming up.
- Spot it in a question: "frequently occurring phrases and themes in reviews", "natural language" → text mining (bank Q3 answer).

**Timeline of decision-support terms (slide 10)**
- What it is: decision support (1970 to 1985), executive support (1980 to 1990, focus on senior executives), OLAP (1990 to 2000, software for multidimensional data tables), business intelligence (1989 to 2005, data-driven decisions with emphasis on reporting), analytics (2005 to 2010, statistical and mathematical analysis for decisions), big data (2010 to present, very large, unstructured, fast-moving data).
- Think of it as: the fashion history of the same idea, with a new name every decade or so.
- Spot it in a question: "2005 to 2010, statistical and mathematical analysis" → analytics. "Senior executives" → executive support.

**OLAP (Online Analytical Processing) (timeline view)**
- What it is: software for analysing multidimensional data tables. Covered in more detail under web usage mining.
- Think of it as: a spreadsheet pivot table with many more dimensions.
- Spot it in a question: "multidimensional data tables", "1990 to 2000" → OLAP.

### 2. Web logs and sessions

**HTTP (HyperText Transfer Protocol) (review)**
- What it is: the rules a browser and a web server use to talk. The browser sends a request (for example GET a page), and the server sends back a response with a status code.
- Think of it as: a waiter taking an order (request) and bringing the dish (response) with a status note: "ready" (200) or "not found" (404).
- Spot it in a question: "GET", "status code", "request and response" → HTTP.

**Server log files**
- What it is: files a web server writes as it works. Two main types: the access log (one line for each request served) and the error log (faults).
- Think of it as: a CCTV recording at the shop entrance (access log) and the security incident book (error log).
- Spot it in a question: "records every request served" → access log. "Failed requests and server faults" → error log.

**Access log (formats)**
- What it is: the access log comes in the common log format and the extended (combined) log format. The extended format adds the referrer and the user agent.
- Think of it as: the common format is a short receipt; the extended format is the same receipt with the customer's address and the device they used.
- Spot it in a question: "referrer and user agent added" → extended (combined) format.

**Error log**
- What it is: the log of failed requests and server faults, kept separately from the served requests.
- Think of it as: the incident register of a hotel, separate from the guest register.
- Spot it in a question: "failed requests", "server faults", "separately recorded" → error log.

**Typical log line (slide 21)**
- What it is: the layout is ip_addr, two dashes, date and time, method, file, protocol, status code, bytes sent, referrer and user agent. Example: 203.30.5.145 requests /Calls/OWOM.html using HTTP/1.0, gets status 200 and 3,942 bytes.
- Think of it as: one line of a diary: who, when, what they asked for, whether it worked, how big it was, where they came from, and what device.
- Spot it in a question: "status 200 and 3,942 bytes" → the server answered successfully and sent about 3,942 bytes.

**Extended log fields (slides 22 and 23)**
- What it is: the W3C extended log format fields. Date, time, client IP (c-ip), user name (cs-username), site and server names, server IP and port, method (cs-method), URI stem and query, protocol status (sc-status), Win32 status (sc-win32-status), bytes sent (sc-bytes), bytes received (cs-bytes), time taken (time-taken), protocol version (cs-version), host (cs-host), user agent, cookie (cs(Cookie)) and referrer (cs(Referrer)).
- Think of it as: a long customer form with a field for every fact about the visit.
- Spot it in a question: match the field to its description (see the lookup cards below).

**Prefix letters in W3C field names**
- What it is: the prefix shows who acts. s = server action. cs = client-to-server action. c = client action. sc = server-to-client action.
- Think of it as: the direction of an arrow in a conversation.
- Spot it in a question: "sc-" → server to client, such as the status returned to the browser. "cs-" → client to server.

**User name field (cs-username)**
- What it is: the authenticated user name, found by HTTP authentication. An anonymous user shows as "-".
- Think of it as: the name on a visitor's pass. A dash means no pass was shown.
- Spot it in a question: "dash in the username field" → anonymous visitor.

**Method, URL and protocol**
- What it is: the method is the action the client wants, such as GET (fetch a page) or POST (send form data). The URL is the file requested. The protocol version is the HTTP version used.
- Think of it as: "fetch this book (GET)" versus "fill and hand over this form (POST)".
- Spot it in a question: "GET to retrieve a page", "POST for a form" → method.

**Status and bytes**
- What it is: the status is the HTTP code (200 success, and so on). Size (sc-bytes) is the total bytes the server sends to the client.
- Think of it as: the delivery slip, with the outcome and the parcel weight.
- Spot it in a question: "how much content delivered to the browser" → bytes sent.

**Referrer**
- What it is: the URL of the page from which the request came, the previously visited page. It is how you learn whether a visitor came from a search engine or another site.
- Think of it as: the "how did you hear about us?" box on a form.
- Spot it in a question: "arrived from a search engine or another website" → referrer field (bank Q4 answer).

**User agent**
- What it is: the name and version of the browser and operating system making the request.
- Think of it as: the device label on the customer's phone.
- Spot it in a question: "browser name and version" → user agent.

**Time taken**
- What it is: the duration of the action in milliseconds.
- Think of it as: a stopwatch on the request.
- Spot it in a question: "how long, in milliseconds" → time-taken.

**Cookie field (cs(Cookie))**
- What it is: the content of the cookie sent or received, if any.
- Think of it as: a membership card the site hands you, which you show on every visit.
- Spot it in a question: "session identifier in a cookie sent with every request" → cs(Cookie).

**Windows status (sc-win32-status)**
- What it is: the status of the action in terms used by Microsoft Windows, rather than HTTP or FTP terms.
- Think of it as: the same outcome written in Windows jargon instead of web jargon.
- Spot it in a question: "status in Microsoft Windows terms" → sc-win32-status.

**Protocol status (sc-status)**
- What it is: the status of the action in HTTP or FTP terms.
- Think of it as: the outcome written in the web's own words.
- Spot it in a question: "status in HTTP or FTP terms" → sc-status.

**Hits**
- What it is: a request for a file from the web server. It counts every file, including images and scripts. It is available only in log analysis.
- Think of it as: counting every footstep in the shop, including the staff.
- Spot it in a question: "requests for any file" → hits. Bank Q9: 4,000 hits against 800 page views is explained by embedded files.

**Page view**
- What it is: a request for a file whose type is defined as a page, and the set of page files and related objects that make one display in the browser.
- Think of it as: one shelf of a shop, counting once even if it has many items on it.
- Spot it in a question: "one browser display", "set of page files and related objects" → page view (bank Q6 answer).

**Visit or session**
- What it is: a series of requests from the same uniquely identified client with a set timeout, often 30 minutes. A visit contains one or more page views.
- Think of it as: one trip into the shop, from the door to the exit, with a gap of more than 30 minutes meaning a new trip.
- Spot it in a question: "timeout, often 30 minutes" → visit or session.

**Click path**
- What it is: the sequence of hyperlinks one or more visitors follow on a site.
- Think of it as: the trail of footprints through the shop.
- Spot it in a question: "sequence of hyperlinks followed" → click path.

**Caching problem (log)**
- What it is: browsers and proxy servers keep copies of pages, so some requests never reach the server log.
- Think of it as: a shopper who takes a catalogue copy home, so the shop never sees the second look.
- Spot it in a question: "requests bypass the server log because of caching" → caching problem, which path completion fixes (bank Q7 answer).

**Dynamic address allocation by the ISP**
- What it is: the ISP gives a visitor a different IP address at different times, so one visitor appears as several.
- Think of it as: a customer who changes their name tag every time they enter, so the shop thinks they are several people.
- Spot it in a question: "dynamic IP address" → problem with the access log.

**Stateless nature of HTTP**
- What it is: HTTP does not remember a visitor from one request to the next, so the log alone cannot link the requests.
- Think of it as: a receptionist who forgets each visitor as soon as they leave the desk.
- Spot it in a question: "does not remember previous requests" → stateless HTTP.

**Crawler activity**
- What it is: search engine robots and other automated programs that visit pages and create log entries that are not human visits.
- Think of it as: a mystery shopper, or a robot vacuum that wanders the shop at night.
- Spot it in a question: "robots", "crawlers", "spiders" → crawler activity.

**Tedious preprocessing**
- What it is: the cleaning and filtering the logs need before analysis. The lecture says it is tedious.
- Think of it as: sorting the day's receipts before the accountant can add them up.
- Spot it in a question: "cleaning and preprocessing is tedious" → a problem of relying on the access log.

**Session tracking alternatives**
- What it is: cookies (small files kept by the browser), URL rewriting (adding an ID to each link), and hidden form fields (an ID carried inside forms).
- Think of it as: a name badge (cookie), a name written on every shop bag (URL rewriting), and a name written inside a form (hidden field).
- Spot it in a question: "a more reliable way to track sessions than the access log alone" → cookies, URL rewriting or hidden form fields.

**Filtering merged access log files**
- What it is: removing entries that are not human page visits. Remove embedded requests (image, video and audio files, and HTML files within a frame). Remove robot entries (not human-like trials; find robots by searching links; or analysing the user agent field, and robots.txt for well-behaved robots). Use a table of web pages. The lecture says filtering consumes 80 percent of the effort in log analysis.
- Think of it as: removing the staff, the cleaners and the delivery boys from the CCTV footage, so you can study the real customers.
- Spot it in a question: "remove images and robots before analysing human navigation" → filtering merged access log files. "How much of the effort" → 80 percent.

**Robot.txt**
- What it is: a file at a website's root that tells well-behaved robots which pages they may visit.
- Think of it as: a "staff only" sign that polite robots obey.
- Spot it in a question: "well-behaved robots" → robots.txt.

**Data cleaning (preprocessing)**
- What it is: removing irrelevant references and fields in server logs, references caused by spider navigation, and erroneous references. Adding missing references due to caching (done after sessionization).
- Think of it as: removing the blank, damaged and duplicate tickets from a queue.
- Spot it in a question: "remove irrelevant fields and erroneous references" → data cleaning.

**Data integration (preprocessing)**
- What it is: synchronising data from several server logs, integrating semantics (metadata, e-commerce and application server data), and integrating demographic or registration data.
- Think of it as: merging the guest lists from three hotel branches into one list.
- Spot it in a question: "combine logs from several servers", "synchronise" → data integration (bank Q5 answer).

**Data transformation (preprocessing)**
- What it is: user identification, sessionization or episode identification, and pageview identification.
- Think of it as: giving each customer a visit number and grouping each visit's pages together.
- Spot it in a question: "identify users, sessions and pageviews" → data transformation.

**Data reduction (preprocessing)**
- What it is: sampling and dimensionality reduction (ignoring some pageviews or items), and identifying user transactions (sets or sequences of pageviews, possibly with weights).
- Think of it as: keeping a sample of the receipts, or only the sales that matter.
- Spot it in a question: "sampling", "ignore certain pageviews", "user transactions" → data reduction.

**Data preparation phase**
- What it is: the stage that covers cleaning, sessionization and creating a user transaction database, before any patterns are discovered. The usage mining process diagram puts it first, before pattern discovery.
- Think of it as: washing and cutting the vegetables before the cooking starts.
- Spot it in a question: "before any patterns are discovered" → data preparation.

**Why sessionize**
- What it is: the quality of the patterns depends on the quality of the data. In web usage, the data is the sessions: everything a visitor does from entering the site until leaving it. Reliable session data is hard to get because of proxies, anonymisers, dynamic IP addresses, cached references and servers that cannot tell visits apart.
- Think of it as: one customer's full shopping trip, not a random pile of footsteps.
- Spot it in a question: "quality of patterns depends on data quality", "sessions" → sessionization.

**Why heuristics are needed**
- What it is: cookies and embedded session IDs give the most faithful approximation of visits, but not every site uses them and not every user accepts them. So heuristics must be used to sessionize the access data.
- Think of it as: estimating how many guests came to a party from the number of chairs taken, when nobody has a name tag.
- Spot it in a question: "cookies are not used or accepted everywhere" → heuristics needed.

**User identification mechanisms**
- What it is: ways to identify a user more reliably than the log. The slide lists page tags (JavaScript on each page), and some browser plugins (software agents).
- Think of it as: a sensor in each shop aisle that reports which customer passed by.
- Spot it in a question: "JavaScript embedded in each page" → page tagging.

**Time-oriented heuristics (sessionization, slide 36)**
- What it is: rules that use time. h1: the total session duration must not exceed a maximum (30 minutes in the experiments). h2: the page stay time must not exceed a maximum (10 minutes).
- Think of it as: a shop that closes the visit after half an hour in total, or after 10 minutes at one shelf.
- Spot it in a question: "session closes when total duration or a single page stay exceeds a maximum" → time-oriented heuristics.

**Navigation-oriented heuristic (href, slide 36)**
- What it is: a page must have been reached from a previous page in the same session. Exception: if the referrer is undefined and the time since the last request is below a threshold (10 seconds in the experiments), the request is kept in the same session.
- Think of it as: a visitor who turns up through a side door within a few seconds of the last visit is still the same visitor.
- Spot it in a question: "undefined referrer, arrived a few seconds after the last request" → keep in the same session.

**Sessionization heuristics accuracy**
- What it is: the slide says these heuristics are quite accurate, citing Spiliopoulou et al. (2003).
- Think of it as: a rule of thumb that has been tested and works well enough.
- Spot it in a question: "how accurate are the heuristics" → quite accurate.

**Path completion**
- What it is: inferring the user's missing page references caused by caching. It needs extensive knowledge of the site's link structure. Referrer information in logs helps disambiguate the inferred paths. It is much harder in frame-based sites.
- Think of it as: filling in the missing stops on a bus route by knowing which stops are connected.
- Spot it in a question: "inferring missing navigation steps due to caching" → path completion (bank Q7 answer).

**Restoring missing references (after sessionization)**
- What it is: missing references due to caching are added back after the sessions have been identified.
- Think of it as: adding the stop you missed back into the trip once you know the bus route.
- Spot it in a question: "when are the missing references added back" → after sessionization.

**Semantic integration**
- What it is: associating each requested page with one or more domain concepts, to better understand the process of navigation. A request can map to one concept, or several requests can map to one concept.
- Think of it as: labelling each shelf with the product category it belongs to, so you can see the trip by category.
- Spot it in a question: "map URLs to concepts such as Mobile Phones" → semantic integration (bank Q8 answer, which focuses on concepts rather than specific URLs).

**Semantic session modelling**
- What it is: concepts can concern content or service, can be part of an ontology (in the simplest case a concept hierarchy), and a session can be a set, sequence, tree or graph of requests.
- Think of it as: a shopping trip drawn as a map of categories rather than as a list of product codes.
- Spot it in a question: "a session is a set, sequence, tree or graph of requests" → semantic session modelling.

### 3. Web usage mining

**Web usage mining (definition)**
- What it is: the measurement, collection, analysis and reporting of internet data to understand and optimise web usage. The lecture's summary: it has emerged as the essential tool for personalised, user-friendly and business-optimal web services, by using clickstream data for many mining purposes.
- Think of it as: reading the shop's CCTV to understand where customers go, and rearranging the shelves on that basis.
- Spot it in a question: "understanding and optimising web usage", "clickstream data" → web usage mining.

**Web log analytics tools**
- What it is: tools that do the reporting. The slide lists Webalizer, Sawmill, WebTrends, AWStats, WWWStat, Apache Logs Viewer and Google Analytics.
- Think of it as: different dashboards for the same CCTV footage.
- Spot it in a question: "name the tool" → the list above.

**Static aggregation and statistics (level 1)**
- What it is: the most common form of analysis. Data is aggregated by predetermined units such as days or sessions. Advantages: a quick overview of how the site is used, and little disk space or processing power. Drawback: no ability to dig deeper into the data.
- Think of it as: the daily sales summary printed at closing time. Quick to read, but you cannot ask why sales dipped in one aisle.
- Spot it in a question: "predetermined units", "quick overview", "cannot dig deeper" → static aggregation.

**Session analysis (level 2)**
- What it is: the simplest deep form of analysis. Individual or groups of server sessions and e-commerce data are examined. Advantages: insight into typical customer behaviour, and tracing specific site problems. Drawbacks: a lot of data, and difficult to generalise.
- Think of it as: watching the CCTV of individual customers' trips.
- Spot it in a question: "examine individual sessions", "trace specific problems" → session analysis.

**OLAP (level 3)**
- What it is: allows changes to the aggregation level across multiple dimensions, such as category, country and month. It is generally associated with a data warehouse. It is very flexible, but needs significantly more resources than static reports.
- Think of it as: a Rubik's cube of sales data that you can turn to any face.
- Spot it in a question: "change the level of aggregation", "multiple dimensions", "data warehouse", "drill down" → OLAP.

**Data mining (level 4)**
- What it is: discovering hidden patterns in the visitor data using the data mining menu below. It goes deeper than OLAP.
- Think of it as: a detective finding a pattern across many cases that no one has asked about yet.
- Spot it in a question: "discover hidden patterns", "predict", "group visitors" → data mining.

**Data mining menu (slide 55)**
- What it is: prediction of the next event (sequence mining, Markov chains), discovery of associated events or application objects (association rules), discovery of visitor groups with common properties and interests (clustering), discovery of visitor groups with common behaviour (session clustering), characterisation of visitors into predefined classes (classification), and card fraud detection.
- Think of it as: a menu of questions the detective can ask: what happens next, what goes together, who is similar, who belongs in which class, and is this a fraud.
- Spot it in a question: "visitor groups with common behaviour" → session clustering. "Predefined classes" → classification. "Predict the next event" → sequence mining with Markov chains.

**Navigation patterns**
- What it is: each session makes a user trail through the site (a sequence of pages in time order). A pattern is a frequent trail. Co-occurrence of pages matters, such as shopping basket and checkout. Two methods: association rule mining and the Markov chain model.
- Think of it as: the most common route a group of shoppers takes through the mall.
- Spot it in a question: "frequent trail", "trail of pages" → navigation patterns.

**Trail and association approach (slide 57)**
- What it is: each session gives one trail. Six sample trails in the lecture (for example A1 then A2 then A3, or A5 then A2 then A4 then A6). Association rules are then mined from the trails.
- Think of it as: writing each customer's route on a card, then sorting the cards for common combinations.
- Spot it in a question: "each session results in a trail" → trail-based association.

**Association rule mining**
- What it is: given many transactions (or trails), find rules that predict the occurrence of an item from the occurrence of other items. Example rules: {Diaper} implies {Beer}; {Milk, Bread} implies {Eggs, Coke}. The slide's warning: implication means co-occurrence, not causality.
- Think of it as: noticing that people who buy umbrellas also buy raincoats. It does not mean the umbrella causes the raincoat purchase.
- Spot it in a question: "frequently co-occurring items", "which items predict others" → association rule mining (bank Q10 answer). "Causes" → wrong; the rule only shows co-occurrence.

**Support and confidence (as used in association rules)**
- What it is: the lecture gives the idea of co-occurrence but does not define these terms. Support is the share of all transactions containing the items. Confidence is the share of transactions with the first item that also contain the second.
- Think of it as: how popular the combination is (support) and how often the second item follows the first (confidence).
- Spot it in a question: "how often the rule holds" → confidence (general knowledge; the slide shows the rules only).

**Applications of web usage mining**
- What it is: pre-fetching and caching web pages (load the next page before it is asked for), web site reorganisation, personalisation, and recommendation of links and products.
- Think of it as: a shop that puts the likely next item at the front of the shelf before you ask.
- Spot it in a question: "load the next article in the background", "reorder homepage links for each reader" → pre-fetching or caching plus personalisation.

**Calibration of a web server (application)**
- What it is: predicting the next page invocation across a group of concurrent web users under certain constraints, using sequence mining and Markov chains.
- Think of it as: a restaurant planning how many cooks to bring on, based on the order sequence it expects.
- Spot it in a question: "predict next page for concurrent users" → calibration of a web server.

**Cross-selling of products (application)**
- What it is: map web pages or objects to products, discover associated products (association rules, sequence mining), and place associated products on the same page.
- Think of it as: putting the phone case beside the phone on the shelf.
- Spot it in a question: "show a phone case on the same page as phones customers view together with it" → cross-selling through association rules.

**Sophisticated cross-selling and up-selling (application)**
- What it is: map pages to products of different price groups, identify customer groups (clustering, classification), discover associated products of the same or different price categories, and formulate recommendations (suggestions on associated products, or based on the preferences of similar users).
- Think of it as: a sales assistant who knows what similar customers bought and suggests a better model at a higher price.
- Spot it in a question: "recommend based on similar users", "different price groups" → sophisticated cross-selling and recommendation.

**Use by search engines (summary)**
- What it is: the lecture says search engines use web usage mining to improve search quality and evaluate search results. E-commerce sites use it to organise their sites and increase profits.
- Think of it as: the search engine learning which results people click and ranking them higher next time.
- Spot it in a question: "improve search quality" → search engines use web usage mining.

### 4. User behaviour modelling

**Probabilistic model of browsing behaviour**
- What it is: a model that describes how users browse. It gives insight into how users use the website, and it provides a way to make predictions, which helps with pre-fetching and personalisation.
- Think of it as: a weather map of where shoppers usually go next.
- Spot it in a question: "describe browsing behaviour and predict it" → probabilistic browsing model.

**Markov chain (for browsing)**
- What it is: a finite-state model in which each state is a web page or a category of pages. If only the order of visits matters, each new request is a transition between states. The next state depends only on the current state.
- Think of it as: a board game where your next square depends only on the square you are on now, not on how you got there.
- Spot it in a question: "next state depends only on the current state", "finite states", "transitions" → Markov chain.

**Issues with the Markov model**
- What it is: self-transition (a visitor stays in the same state, such as reloading or browsing one page category for several requests) and time-independence (the model ignores time).
- Think of it as: a shopper who lingers in one aisle, and a model that ignores the clock.
- Spot it in a question: "stays on the same page for several consecutive requests" → self-transition.

**Discrete-time Markov chain**
- What it is: a stochastic process, a sequence of random variables X0, X1, X2 and so on, used to model systems that change over time with uncertainty.
- Think of it as: rolling a die each turn, where each turn's chance depends only on where you are now.
- Spot it in a question: "sequence of random variables over time" → discrete-time Markov chain.

**Customer behaviour model graph (CBMG)**
- What it is: a model of the website as states (functional areas, or groups of pages) and transitions between them. It has a static part (the states and the allowed transitions, from the site layout) and a dynamic part (the transition probability matrix and the average transition time matrix).
- Think of it as: a floor plan of the shop (static) with a count of how many shoppers walk from each area to each other area (dynamic).
- Spot it in a question: "customer behaviour model graph", "static part", "dynamic part" → CBMG.

**States in the model**
- What it is: a state is a functional area of the website, represented by a page or a group of pages.
- Think of it as: a room in the shop, such as "electronics" or "checkout".
- Spot it in a question: "functional area of the website" → state.

**Entry and exit dummy states**
- What it is: two dummy states. The customer is assumed to stay in the entry state before entering the site, and to stay in the exit state after leaving it.
- Think of it as: the outside of the shop door and the car park where shoppers wait before and after.
- Spot it in a question: "before entering and after leaving the site" → entry and exit states.

**Static part of a CBMG**
- What it is: determine the set of functions the e-commerce site provides, group pages into states, and determine all possible transitions between states (from the site layout).
- Think of it as: the building plan: which rooms exist and which doors connect them.
- Spot it in a question: "from the site layout" → static part.

**Dynamic part of a CBMG**
- What it is: the transition probability matrix (how likely each move is) and the average transition time matrix (how long each move takes).
- Think of it as: the footfall counts and the average time spent walking between rooms.
- Spot it in a question: "transition probability matrix", "average transition time matrix" → dynamic part.

**Transition probability matrix**
- What it is: a table of the probabilities of moving from each state to each other state. Each row sums to one.
- Think of it as: a betting table giving the chance of each next move from each square.
- Spot it in a question: "probability of moving from state A to state B" → read the matrix.

**Estimating transition probabilities (slide 71)**
- What it is: count how often each transition happens from a state, then divide by the total number of transitions out of that state. Example from the slide: from Select, Browse 8 times, Add to cart 4 times, Browse 7 times and exit 1 time. Total 20, so Select to Add to cart = 4/20 = 0.20.
- Think of it as: out of 20 shoppers who visited Select, 4 went on to Add to cart, so the chance is 4 in 20.
- Spot it in a question: "estimated probability from Select to Add to cart" → 4/20 = 0.20.

**Customer think time (slide 72)**
- What it is: the time between the client receiving a page and the client sending its next request for another page. In the lecture's timeline, it is the gap from when page A has arrived at the client to when the request for page B is sent.
- Think of it as: the time a shopper spends reading a shelf before walking on.
- Spot it in a question: "time between the page arriving and the next request" → think time.

**Average think time (slide 73)**
- What it is: the total think time for a transition from one state to another, divided by how often that transition happened. The slide's example: Select to Browse, Select to Add to cart, and Select to exit, with total think times such as 10, 15, 12 and 5.
- Think of it as: the average time people spent before moving on from Select to each next room.
- Spot it in a question: "average think time for a transition" → total think time for that transition divided by its frequency.

**Properties of the transition probability matrix (slide 75)**
- What it is: four rules. No transition can go to the entry state from any state other than the exit state. No transition can go from the entry state directly to the exit state. No transition can go from the exit state to any state other than the entry state. From the exit state, the probability of staying in exit plus the probability of going to entry equals one.
- Think of it as: a one-way door. You can only leave the shop through the exit and re-enter through the entry, and no one jumps from the entry to the exit.
- Spot it in a question: "no transition into the entry state from any state other than the exit state" → property of the matrix.

---

## How it flows

### 1. Decision support

**A. The three layers of a DSS (slide 5)**

```text
USER INTERFACE FUNCTIONS          hyperlinked multimedia, 3-D visualisation
   ▲▼  legacy software, web browser, other software connect here
MODEL MANAGEMENT FUNCTIONS        analytical modelling, statistical analysis
   ▲▼
DATA MANAGEMENT FUNCTIONS         extraction, validation, sanitation, integration, replication
   ▲
DATA SOURCES                      operational data, market data, sales data, customer account data
                                  (through data marts and other databases)
```

The data layer cleans the data first. The model layer then works on clean data. The interface shows the answer.

**B. Analytical models, stacked by question (slides 6 to 8)**

```text
ANALYTICAL MODELS      optimisation, simulation, decision analysis
                       static vs dynamic;  deterministic vs stochastic
STATISTICAL MODELS     descriptive statistics, outlier analysis,
                       univariate predictive models, multivariate predictive models
DATA MINING MODELS     predictive: regression, classification, collaborative filtering
                       descriptive: clustering / similarity matching, association rules
TEXT MINING            natural language processing to discover patterns in text
```

**C. The decision support timeline (slide 10, read as a table)**

```text
1970-1985   decision support       use of data analysis to support decisions
1980-1990   executive support      focus on senior executives
1990-2000   OLAP                   software for multidimensional data tables
1989-2005   business intelligence  tools for data-driven decisions, with reporting emphasis
2005-2010   analytics              statistical and mathematical analysis for decisions
2010-now    big data               very large, unstructured, fast-moving data
```

The periods overlap, because the terms were in use at the same time.

### 2. Web logs and sessions

**A. How a web log is made (slides 13 to 20, a simple picture)**

```text
VISITOR'S BROWSER ──HTTP request: GET a page──► WEB SERVER
                  ◄──HTTP response: status and the page────
                                    │
                                    ├──► ACCESS LOG: one line per request served
                                    └──► ERROR LOG:  failed requests and server faults
```

Each click makes a request. Each served request adds one line to the access log.

**B. From a raw log line to fields (slides 21 to 23)**

```text
203.30.5.145  - -  [01/Jun/1999:03:09:21 -0600]  "GET /Calls/OWOM.html HTTP/1.0"  200  3942  "referrer URL"  "Mozilla/4.5 (Win98)"
   │              │          │                         │       │        │      │       │            │               │
 client IP     user name   time              method   file   protocol  status  bytes      referrer          user agent
```

Read the status 200 as success, and 3942 as bytes sent to the client.

**C. Cleaning and sessionizing the log (slides 31 to 33)**

```text
MERGED ACCESS LOGS (from several servers)
   │
   ▼  1. DATA CLEANING        remove irrelevant fields, spider references, erroneous references
   │                          add missing references due to caching (later, after sessionizing)
   ▼  2. DATA INTEGRATION     synchronise logs, add semantics and demographic data
   ▼  3. DATA TRANSFORMATION  identify users, sessions (sessionization) and page views
   ▼  4. DATA REDUCTION       sample; keep user transactions (sets or sequences of page views)
   │
   ▼
USER TRANSACTION DATABASE
```

**D. Filtering robots and embedded requests (slide 28)**

```text
ALL REQUESTS
   ├── embedded requests (image, video, audio, HTML frames)   ──► REMOVE
   ├── robot entries (spiders, crawlers)                      ──► REMOVE
   │     find via: link-searching patterns, user agent field, robots.txt
   └── human page requests                                    ──► KEEP for analysis
Filtering takes about 80 percent of the effort in log analysis.
```

**E. Sessionization heuristics (slide 36)**

```text
TIME-ORIENTED
   h1: total session duration must not exceed a maximum (30 min in the experiments)
   h2: a page stay must not exceed a maximum (10 min in the experiments)

NAVIGATION-ORIENTED (href)
   A page must have been reached from a previous page in the same session.
   EXCEPTION: referrer undefined AND time since last request below a threshold (10 seconds)
              ──► keep the request in the same session
```

**F. Semantic integration: from URL to concept (slides 38 and 39)**

```text
URL:      /electronics/mobile/item123  and  /electronics/mobile/item456
            │
            ▼ associate each requested page with a domain concept
CONCEPT:  "Mobile Phones"
Result:   the analysis looks at concepts (the trip through categories), not at each product code.
```

### 3. Web usage mining

**A. The four levels of analysis (slides 45 to 50)**

```text
LEVEL 1  STATIC AGGREGATION AND STATISTICS   daily or session totals; quick; cannot dig deeper
LEVEL 2  SESSION ANALYSIS                     individual or group sessions; insight; a lot of data
LEVEL 3  OLAP                                 change aggregation across dimensions; needs a data warehouse
LEVEL 4  DATA MINING                          hidden patterns: sequences, associations, clusters, classes
```

**B. Web usage mining process (slide 24, read as a diagram)**

```text
DATA PREPARATION PHASE
   site content and structure + domain knowledge + web and application server logs
      ──► data preprocessing: cleaning, pageview identification, sessionization,
                                integration, transformation
      ──► user transaction database
                                  │
PATTERN DISCOVERY PHASE           ▼
   usage mining: transaction clustering, pageview clustering, correlation analysis,
                 association rule mining, sequential pattern mining
      ──► pattern analysis: pattern filtering, aggregation, characterisation
      ──► aggregate user models
```

**C. Trails and association rules (slides 56 to 58)**

```text
SESSION (one customer)        TRAIL
  visited A1, A2, A3   ──►    A1 > A2 > A3

ALL TRAILS (sample of six)           PATTERNS YOU CAN READ OFF THE TRAILS (the slide does not list these)
  1  A1 > A2 > A3                    A2 co-occurs with A3 (trails 1, 2, 3, 6)
  2  A1 > A2 > A3                    A5 co-occurs with A2 and A4 (trails 4, 5)
  3  A1 > A2 > A3 > A4
  4  A5 > A2 > A4
  5  A5 > A2 > A4 > A6
  6  A5 > A2 > A3 > A6
```

The rules show co-occurrence, not that one page causes a visit to the other.

**D. Cross-selling and recommendation (slides 60 and 61)**

```text
VISITOR VIEWS PHONE PAGE ──► association rules say: phone case often viewed with phone
   ──► place phone case on the same page (cross-selling)
   ──► recommend suggestions based on the preferences of similar users (clustering, classification)
```

### 4. User behaviour modelling

**A. A Markov chain of browsing (slide 67 and 74)**

```text
     0.14     ┌─────┐   1    ┌─────┐
  S ─────────►│  A1 │───────►│  A2 │ ...
  (entry)     └─────┘        └─────┘                       F (exit)
  (a sketch of the slide 74 structure, not a copy; each state's outgoing probabilities sum to one)
```

Each state can be a page or a group of pages. A visit is a walk along the arrows, and the next step depends only on where the visitor is now.

**B. The CBMG (slides 69 and 70)**

```text
           ┌──── ENTRY (dummy) ────┐
           │  customer waits here  │ before entering
           ▼                        
   [Browse] ─── [Select] ─── [Add to cart] ─── [Checkout / Exit]
      ▲   │                       │                  │
      └───┘ self-transition       └──────────────────┘
                                                      ▼
                                              EXIT (dummy)  customer waits here after leaving
STATIC PART:   the states and the allowed transitions (from the site layout)
DYNAMIC PART:  transition probability matrix + average transition time matrix
```

The diagram is a teaching sketch of the structure, not a slide picture. The state names are examples.

**C. Counting transitions to get probabilities (slide 71)**

```text
From SELECT, observed moves:
   Browse        8 times
   Add to cart   4 times
   Browse        7 times
   Exit          1 time
                 ──────
   total         20

Probability Select -> Add to cart = 4 / 20 = 0.20
Probability Select -> Browse (first)  = 8 / 20 = 0.40
Probability Select -> Browse (second) = 7 / 20 = 0.35
Probability Select -> Exit = 1 / 20 = 0.05
```

**D. Think time (slides 72 and 73)**

```text
CLIENT                                         SERVER
t0  request for page A ───────────────────────►
t1                                                 (server receives A)
t2                              ◄── server sends page A
t3  page A arrives at the client
    ◄──────── CUSTOMER'S THINK TIME ────────►      (reading time)
t5  request for page B ───────────────────────►
t6                                                 (server receives B)

Average think time for a transition = total think time for that transition / number of times it happened
```

---

## Don't mix these up

| These look alike | How to tell them apart | Tie-breaker word |
|---|---|---|
| Access log vs error log | Access log: one line for each request served (status and bytes). Error log: failed requests and server faults, kept separately. | "served, every request" = access; "failed, faults" = error |
| Common log format vs extended (combined) log format | Common: the basic fields. Extended (combined): adds the referrer and the user agent. | "referrer and browser" = extended |
| Hits vs page views | Hit: a request for any file, including images and scripts. Page view: a request for a file of page type plus the files that make one display. | "any file" = hit; "one browser display" = page view |
| Page view vs visit (session) | Page view: one page display. Visit: a series of requests from one client with a timeout, often 30 minutes. | "one display" = page view; "timeout" = visit |
| Click path vs trail | Click path: the sequence of hyperlinks followed on a site. Trail: the page sequence in one session, used as a mining input. | "hyperlinks followed" = click path; "per session, mined" = trail |
| Static aggregation vs session analysis vs OLAP vs data mining | Static: fixed summaries by day or session, cannot dig. Session analysis: looks at individual sessions. OLAP: change aggregation across dimensions (needs data warehouse). Data mining: hidden patterns. | "fixed summary" = static; "individual sessions" = session analysis; "change the level" = OLAP; "hidden patterns" = data mining |
| Predictive vs descriptive data mining | Predictive: regression, classification, collaborative filtering (predict something). Descriptive: clustering and association rules (describe groups or co-occurrence). | "predict a value or class" = predictive; "group or co-occur" = descriptive |
| Clustering vs classification | Clustering: groups found from the data, with no predefined classes. Classification: assigns records to predefined classes. | "predefined classes" = classification; "groups with common properties" = clustering |
| Association rules vs clustering | Association: which items occur together. Clustering: which records are alike. | "occur together" = association; "alike" = clustering |
| Session clustering vs demographic clustering | Session clustering groups visitors by how they navigate. Demographic clustering groups by who they are. | "navigate similarly" = session clustering; "demographics, interests" = demographic |
| Association rule vs causation | A rule (diaper implies beer) shows co-occurrence only. It does not prove one causes the other. | "co-occur" = rule; "causes" = wrong |
| Deterministic vs stochastic models | Deterministic: fixed outcome once inputs are set. Stochastic: includes random variation and uncertainty. | "fixed once inputs" = deterministic; "random fluctuations, uncertainty" = stochastic |
| Static vs dynamic models | Static: unchanged over time. Dynamic: changes over time. | "unchanged" = static; "over time" = dynamic |
| Analytical, statistical and data mining models (levels) | Analytical: optimisation, simulation, decision analysis. Statistical: descriptive stats, outliers, predictive models. Data mining: regression, clustering, association and others. | "best choice under constraints" = analytical; "outliers, averages" = statistical |
| Optimisation vs simulation | Optimisation finds the best solution. Simulation tests how the system behaves under a set of conditions. | "best schedule" = optimisation; "what happens if" = simulation |
| Descriptive vs predictive vs prescriptive analytics | Descriptive: what happened. Predictive: what will happen. Prescriptive: what to do. (The lecture's analytics terms are used in other weeks too.) | "history" = descriptive; "forecast" = predictive; "best action" = prescriptive |
| Data cleaning vs data integration vs data transformation vs data reduction | Cleaning: remove irrelevant and erroneous entries. Integration: combine logs and data sources. Transformation: identify users, sessions and page views. Reduction: sample, keep user transactions. | "remove errors" = cleaning; "combine logs" = integration; "identify sessions" = transformation; "sample" = reduction |
| Sessionization vs path completion | Sessionization groups requests into visits. Path completion infers missing page references caused by caching. | "group into visits" = sessionization; "missing because of caching" = path completion |
| Time-oriented vs navigation-oriented heuristics | Time-oriented: session duration and page stay limits. Navigation-oriented (href): a page must follow a previous page in the session, with the undefined referrer exception. | "duration or stay" = time-oriented; "previous page, referrer" = navigation-oriented |
| Cookies vs URL rewriting vs hidden form fields | Cookie: small file kept by the browser. URL rewriting: ID added to each link. Hidden form field: ID carried inside forms. | "kept by browser" = cookie; "in the link" = URL rewriting; "in the form" = hidden field |
| Semantic integration vs path completion | Semantic integration maps URLs to concepts. Path completion infers the missing steps. | "URLs to concepts" = semantic; "missing steps" = path completion |
| Robot entries vs embedded entries | Robot entries: spiders and crawlers (use robots.txt, user agent, link patterns). Embedded entries: images, video, audio, and HTML frames inside a page. | "spider, crawler" = robot; "image, video, frame" = embedded |
| Hits vs visits (bank Q9 trap) | 4,000 hits and 800 page views mean many hits were embedded files, not separate page views. | "embedded" = the reason for the gap |
| Pre-fetching vs personalisation | Pre-fetching loads the next page early. Personalisation tailors what each reader sees. | "load in the background" = pre-fetch; "tailored for each reader" = personalisation |
| Time-taken vs think time | Time-taken (log field): how long the server action took, in milliseconds. Think time: time the customer spends reading between pages. | "server action, milliseconds" = time-taken; "customer reading" = think time |
| Bytes sent vs bytes received | Bytes sent (sc-bytes): from server to client. Bytes received (cs-bytes): from client to server. | "server to client" = sent; "client to server" = received |
| sc- vs cs- prefix | sc- is server-to-client. cs- is client-to-server. | "status returned to the browser" = sc-; "request sent from the browser" = cs- |
| sc-status vs sc-win32-status | sc-status: HTTP or FTP terms. sc-win32-status: Windows terms. | "HTTP or FTP" = sc-status; "Windows" = win32 |
| Username "-" vs missing user | A dash in cs-username means an anonymous visitor (no authenticated name). It is not a failed write. | "dash" = anonymous |
| GET vs POST | GET requests a resource. POST sends data to the server, such as a form. | "retrieve a page" = GET; "send form data" = POST |
| Browser (user agent) vs referrer | User agent: the browser name and version. Referrer: the previous page's URL. | "browser and version" = agent; "where they came from" = referrer |
| Markov chain vs CBMG | Markov chain: the mathematical process. CBMG: the website model built on that chain, with static and dynamic parts. | "website model, static and dynamic parts" = CBMG |
| Static part vs dynamic part of a CBMG | Static: states and allowed transitions from the site layout. Dynamic: probability and time matrices from data. | "site layout" = static; "matrix from counts" = dynamic |
| Transition probability matrix vs average transition time matrix | Probability matrix: how likely each move is. Time matrix: how long each move takes on average. | "how likely" = probability; "how long" = time |
| Entry state vs exit state | Entry: the customer waits before entering the site. Exit: the customer waits after leaving. Neither is a real page. | "before entering" = entry; "after leaving" = exit |
| Self-transition vs time-independence | Self-transition: the state moves to itself (stays on the same page). Time-independence: the Markov model ignores time. | "same page again" = self-transition; "ignores time" = time-independence |
| Average think time vs total think time | Total: the sum of all think times for one transition. Average: total divided by how many times it happened. | "divided by count" = average |
| Markov chain next step vs full history | The Markov model uses only the current state to predict the next, not the whole path. | "only the current state" = Markov |

---

## Must-remember facts

### Definitions as the slides word them

| Term | Definition on the slide | Source named on the slide |
|---|---|---|
| Decision support systems | "Provide interactive ad hoc support for the decision-making processes of managers and other business professionals" | Lecture slide 4 |
| Web usage mining | "The measurement, collection, analysis and reporting of internet data for purposes of understanding and optimizing web usage" | Lecture slide 50 (UCSF School of Medicine) |
| Hit | "A request for a file from the web server. Available only in log analysis" | Lecture slide 51 (UCSF) |
| Page view | "A request for a file whose type is defined as a page" | Lecture slide 51 (UCSF) |
| Visits or sessions | "A series of requests from the same uniquely identified client with a set timeout, often 30 minutes" | Lecture slide 51 (UCSF) |
| Click path | "the sequence of hyperlinks one or more website visitors follows on a given site" | Lecture slide 51 (UCSF) |
| Pageview | "a set of page files and associated objects that contribute to a single display in a Web Browser" | Lecture slide 32 |
| Why sessionize | "Quality of the patterns discovered depends on the quality of the data on which mining is applied" | Lecture slide 33 |
| Association rules | "Implication means co-occurrence, not causality!" | Lecture slide 58 |
| Analytics (timeline) | "Focus on statistical and mathematical analysis for decisions" (2005 to 2010) | Lecture slide 10 |
| Big data (timeline) | "Focus on very large, unstructured, fast-moving data" (2010 to present) | Lecture slide 10 |

### Numbers, lists and memory tricks

| List or number | Items | Memory trick |
|---|---|---|
| DSS components (3 layers) | user interface, model management, data management | Top to bottom: "Show, Think, Store": what the user sees, what the model does, where the data is cleaned and kept. |
| Analytical models (3) | optimisation, simulation, decision analysis | "Best, What if, Choose": the best solution, test a scenario, compare options. |
| Model pairs (2 pairs) | static vs dynamic; deterministic vs stochastic | "Still or moving?" and "Fixed or random?" |
| Statistical model types (4) | descriptive statistics, outlier analysis, univariate predictive, multivariate predictive | "Describe, Spot the odd one, Predict with one input, Predict with many." |
| Predictive data mining (3) | regression, classification, collaborative filtering | "Number, Class, Similar people": regression gives a number, classification a class, collaborative filtering uses similar users. |
| Descriptive data mining (2) | clustering and similarity matching, association rules | "Group together, Go together." |
| Decision-support timeline (6) | decision support, executive support, OLAP, BI, analytics, big data | "Decide, Executive, OLAP, BI, Analyse, Big": one word per decade. |
| Server log types (2) | access log, error log | "Access = all served. Error = all failed." |
| Log formats (2) | common, extended (combined) | "Common has the basics; Extended adds referrer and agent." |
| Extended log prefixes (4) | s-, cs-, c-, sc- | "s = server does it; cs = client sends to server; c = client only; sc = server sends to client." |
| Extended fields (about 20) | date, time, c-ip, cs-username, s-sitename, s-computername, s-ip, s-port, cs-method, cs-uri-stem, cs-uri-query, sc-status, sc-win32-status, sc-bytes, cs-bytes, time-taken, cs-version, cs-host, cs(User Agent), cs(Cookie), cs(Referrer) | Group by role: who (IP, user), what (method, URI), result (status, bytes, time), context (agent, cookie, referrer). |
| Access log problems (5) | caching, dynamic address allocation, stateless HTTP, crawler activity, tedious preprocessing | "Cache, Dynamic, Stateless, Crawlers, Tedious": five things that spoil the raw log. |
| Session tracking alternatives (3) | cookies, URL rewriting, hidden form fields | "Cookie in the browser, ID in the link, ID in the form." |
| Preprocessing stages (4) | cleaning, integration, transformation, reduction | "Clean, Combine, Change, Cut down." |
| Transformation tasks (3) | user identification, sessionization, pageview identification | "Who, When (session), Which page." |
| Reduction tasks (2) | sampling and dimensionality reduction, identifying user transactions | "Sample it, Keep the transactions." |
| Heuristics (time-oriented: 2; navigation: 1) | h1 total session duration (30 min), h2 page stay (10 min), href (referrer rule, 10 seconds) | "Two clocks and one link": two time limits, one link rule. |
| Analysis levels (4) | static aggregation, session analysis, OLAP, data mining | "Summary, Single trip, Slice, Search." |
| Web log tools (7) | Webalizer, Sawmill, WebTrends, AWStats, WWWStat, Apache Logs Viewer, Google Analytics | Any analytics dashboard for the logs. |
| Data mining menu (6) | sequence mining (Markov), association rules, clustering, session clustering, classification, card fraud detection | "Next, Go-together, Alike, Same behaviour, Class, Fraud." |
| Applications (6) | pre-fetching and caching, site reorganisation, personalisation, recommendation, calibration of server, cross-selling | "Fetch early, Re-layout, Personalise, Recommend, Calibrate, Cross-sell." |
| CBMG parts (4) | states, entry state, exit state, static part, dynamic part | "Entry and exit wait outside; the static part is the map, the dynamic part is the counts." |
| CBMG matrix properties (4) | no transition into entry except from exit; no entry to exit directly; no exit except to entry; exit goes to exit or entry | "One-way doors: come in only at the entry, leave only at the exit." |

### Example companies and case studies from the slides

| Name | Where on the slides | What it illustrates |
|---|---|---|
| Lycos (search engine referral) | Slide 21 (sample log) | The referrer field shows the visitor came from a search results page |
| acr-news.org | Slide 21 (sample log) | Example site in a sample log; visitors arrive from its own pages |
| Cisco (Internet Protocol Journal) | Slide 18 (HTTP review source) | Source of an HTTP review |
| Apache HTTP Server documentation | Slide 20 | Source of the access and error log format description |
| Search engine web crawlers | Slide 19 | Crawlers that create non-human log entries |
| Example shopping site | Slides 38 and 41 | Worked example: search, refine and choose item; mapping URLs to concepts |
| Home page, catalog ordering, shopping cart | Slide 47 | Static aggregation example: sessions and views per page |
| Kid's Stuff products, electronics, educational, radio-controlled | Slide 49 | OLAP drill-down example across product categories |
| Diaper and beer baskets | Slide 58 | Classic association rule example (co-occurrence, not cause) |
| Browsing graph with states A1 to A6, S and F | Slide 74 | Markov chain example of a CBMG |
| Session at a website with states Browse, Select, Add to cart | Slides 71 and 73 | Worked probability and think-time example |

---

## How this week gets asked

- **Scenario, then name the concept.** Most questions describe a manager's or analyst's situation and ask which DSS capability, log field, preprocessing step, mining technique or model property it describes.
- **Which DSS layer or model type?** Data management, model management and user interface functions; analytical versus statistical versus data mining models; stochastic versus deterministic (bank Q1, Q2).
- **Which mining technique?** Predictive versus descriptive; association versus clustering versus classification; session clustering; text mining (bank Q3, Q10).
- **Which log field or log type?** Referrer, bytes sent, user agent, time taken, cookie field, prefix letters, Windows status, the anonymous dash, and access versus error log (bank Q4).
- **Which preprocessing task?** Cleaning, integration, transformation, reduction, filtering robots and embedded files, path completion and semantic integration (bank Q5, Q7, Q8).
- **Which definition?** Page view, hit, visit or session, click path, web usage mining (bank Q6, Q9).
- **Which heuristic?** Time-oriented (duration or page stay) versus navigation-oriented (the referrer rule).
- **Which analysis level or OLAP behaviour?** Static aggregation, session analysis, OLAP, data mining.
- **Which model property or calculation?** Markov transition probabilities, average think time, matrix properties, self-transition, entry and exit states.
- **Which timeline term?** Decision support, executive support, OLAP, business intelligence, analytics, big data.

**Distractor traps for this week**

- **Association means cause.** A rule such as "diaper implies beer" shows co-occurrence only. Any option saying one page causes another is wrong.
- **Hits versus page views.** Thousands of hits with fewer page views means embedded files, not extra visits.
- **Robots are one cause, not the whole story.** Robot entries come from spiders and crawlers and are filtered out. The lecture's explanation for a large hit-to-page gap is embedded files.
- **Ordering of preprocessing.** Missing references from caching are added after sessionization, not before user identification.
- **Units and meaning.** Time-taken is in milliseconds. Think time is the customer's reading time, not the server's processing time.
- **Anonymous versus failed.** A dash in the username field means an anonymous visitor, not a failed write.
- **Fast internet is not a log problem.** Fast broadband is not in the lecture's list of access-log problems.
- **OLAP versus static reports.** Static aggregation cannot dig deeper. OLAP can change the level of aggregation across dimensions.
- **Predictive versus prescriptive.** A forecast of next quarter's demand is predictive. Choosing the best price and advertising mix is prescriptive.
- **Stochastic versus deterministic.** "Random fluctuations" points to stochastic. "Fixed once inputs are set" points to deterministic.
- **Matrix properties.** Options that let the customer move from the entry state straight to the exit state, or into the entry state from anywhere but the exit, break the CBMG rules.
- **Absolute words.** "Always", "only", "every", "never". The lecture's heuristics are described as "quite accurate", not perfect.
- **Concepts from other weeks.** Options naming EDI, RFID or GPS are wrong for week 9 log questions.

**If the question says ___ → pick the option about ___**

1. "Interactive, ad hoc, nonroutine decision, evaluate scenarios" → a DSS with analytical models, not routine reporting.
2. "Explicit uncertainty or random fluctuations" → stochastic model.
3. "Frequently occurring phrases and themes in text" → text mining with NLP.
4. "Arrived from a search engine or another site" → referrer field.
5. "Merge logs from several servers" → data integration (synchronise and integrate).
6. "Image files and scripts counted with a page" → embedded requests, filtered out before analysis.
7. "Requests missing from the log because of caching" → path completion.
8. "Map URLs to a concept such as Mobile Phones" → semantic integration, so the analysis is at concept level.
9. "Session closes after a total duration or page-stay limit" → time-oriented heuristic.
10. "Undefined referrer but a few seconds after the last request" → keep it in the same session (navigation-oriented exception).
11. "Items that occur together" → association rule mining, which shows co-occurrence and not causation.
12. "Probability from a state to another from counts" → count that move and divide by all moves out of the state.
13. "Time between a page arriving and the next request" → think time.
14. "Next state depends only on the current state" → Markov chain.

---

## Practice walk-through

**Q1.** A retail manager wants to evaluate the impact of a 20 percent increase in holiday-season demand on inventory before implementing changes. Which DSS capability fits?
- Answer: D) Using analytical models to evaluate alternative scenarios before making decisions
- Why: A DSS tests what-if scenarios with analytical models, before the decision is made. See "DSS" and "Components of a typical DSS".
- Trap: B) Generating standardized reports summarizing previous inventory performance. Reports describe the past; they cannot test a 20 percent change ahead of time.

**Q2.** A business analyst builds a model that predicts demand and accounts for random fluctuations from weather and market conditions. Which best describes it?
- Answer: D) A stochastic model that explicitly incorporates uncertainty into outcomes
- Why: Random fluctuations mean uncertainty is built into the model. See "Deterministic versus stochastic models".
- Trap: A) A deterministic model where outcomes are fixed once inputs are specified. This sounds close, but it rules out the randomness the question describes.

**Q3.** A company wants to find frequently occurring phrases and themes in thousands of customer reviews. Which approach fits?
- Answer: D) Text mining using natural language processing to identify patterns
- Why: Text mining uses NLP to discover patterns in text. See "Text mining".
- Trap: A) Time-series forecasting to estimate future review volumes. That forecasts counts, not themes in the wording.

**Q4.** In an extended web log, which field helps decide whether a visitor arrived from a search engine or another website?
- Answer: D) A field containing the URL of the previously visited webpage
- Why: The referrer field stores the URL the request came from. See "Referrer".
- Trap: A) A field identifying the browser version used during the request. The user agent shows the browser, not where the visitor came from.

**Q5.** A company merges access logs from several web servers in different regions. Which preprocessing activity is most critical before analysing customer behaviour?
- Answer: D) Synchronizing and integrating data collected from different server logs
- Why: Data integration combines and synchronises logs from several servers. See "Data integration (preprocessing)".
- Trap: A) Generating association rules from the combined clickstream records. Rules come later, after the data is cleaned and integrated.

**Q6.** During web usage mining, a page view is best understood as:
- Answer: D) A set of page files and related objects contributing to one browser display
- Why: That is the lecture's definition of a page view. See "Page view" and "Pageview" in the facts.
- Trap: A) A sequence of user visits occurring within a predefined timeout interval. That describes a visit or session.

**Q7.** A website has extensive caching, so some requests never reach the server log. Which preprocessing activity addresses this?
- Answer: D) Inferring missing navigation steps through path completion techniques
- Why: Path completion infers the missing references caused by caching. See "Path completion".
- Trap: A) Removing requests associated with known search-engine crawlers. That is filtering robots, not caching.

**Q8.** A retailer turns URLs such as /electronics/mobile/item123 and /electronics/mobile/item456 into the concept "Mobile Phones". What is the main advantage?
- Answer: D) It allows navigation analysis to focus on concepts rather than specific URLs
- Why: Semantic integration maps pages to domain concepts so the analysis works at concept level. See "Semantic integration".
- Trap: B) It eliminates the requirement to identify sessions before mining begins. Sessions are still needed; semantic mapping does not replace them.

**Q9.** A website records 4,000 hits in a day but only 800 page views. Which interpretation is most reasonable?
- Answer: D) Many requests were for embedded objects such as images or scripts
- Why: Hits count every file request. Page views count page displays. The gap is mostly embedded files. See "Hits" and "Page view".
- Trap: B) Most requests originated from robots rather than human visitors. Robots may add some hits, but the lecture's explanation for the gap is embedded files.

**Q10.** An online bookstore finds customers often visit the "Programming Books" page and the "Machine Learning Books" page in the same session. Which technique uncovers this?
- Answer: D) Association-rule mining identifying frequently co-occurring items
- Why: Pages that occur together are co-occurrence, which association rules find. See "Association rule mining".
- Trap: C) Markov-chain models estimating probabilities of future transitions. A Markov model predicts the next step; it is not the tool that finds two pages occurring together in a session.

---

## 60-second recap

- A DSS gives interactive, ad hoc support for nonroutine decisions, and it serves middle managers.
- A DSS has user interface, model management and data management layers. Data management cleans and combines the data first.
- Analytical models include optimisation, simulation and decision analysis. Statistical models include outlier analysis and predictive models.
- Predictive mining predicts (regression, classification, collaborative filtering). Descriptive mining groups and finds co-occurrence (clustering, association rules).
- The access log records every request served. The error log records failures. The extended format adds the referrer and the user agent.
- Key fields: status (outcome), bytes sent (sc-bytes), user agent, referrer, time-taken (milliseconds), cs(Cookie). A dash in the username means anonymous.
- Access logs have problems: caching, dynamic IP addresses, stateless HTTP, crawlers and tedious preprocessing. Cookies, URL rewriting and hidden fields help track sessions.
- Preprocessing has four stages: clean, integrate, transform (users, sessions, page views), and reduce. Filtering robots and embedded files takes about 80 percent of the effort.
- Sessionization uses time-oriented heuristics (30-minute session and 10-minute page stay) and a navigation-oriented referrer rule (10 seconds).
- Missing references from caching are restored after sessionization, using path completion.
- Web usage mining has four analysis levels: static aggregation, session analysis, OLAP and data mining.
- Association rules show co-occurrence, not causation. They drive cross-selling, and personalisation and pre-fetching use the same patterns.
- Markov chains model browsing: the next state depends only on the current state. CBMG adds a static part (states and allowed transitions) and a dynamic part (probability and time matrices).
- Transition probability = count of that move divided by total moves out of the state. Average think time = total think time for a transition divided by its count.
- The matrix properties: nothing goes into entry except from exit, nothing goes from entry straight to exit, and from exit you can only go to exit or entry.

---

Coverage check: 45/45 mock questions answerable from this guide.
