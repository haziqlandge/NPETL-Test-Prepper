# Week 10 — Customer Behavior Models, Capacity Planning and Recommender Systems

## In one breath

This week has four parts. First, a **CBMG (Customer Behavior Model Graph)** turns website click logs into a map of how visitors move from page group to page group, with the chance of each move and the time spent. Second, **capacity planning** asks whether the servers can cope with next year's traffic before that traffic arrives, using queue maths to predict slow-downs. Third, **recommender systems** suggest products, and the exam wants you to name the type from a short scenario. Fourth, the **content-based recommender** learns each user's taste from the features of items, using a decision tree and "information gain" to pick the most useful feature.

**The big analogy:** A festival sale day at a big online shop (think Flipkart's Big Billion Days). The shop manager draws a map of how shoppers walk from aisle to aisle (the CBMG), works out how long they linger, adds billing counters before the rush (capacity planning), and a shop assistant says "people like you also bought this" (the recommender).

## Mind map

```text
WEEK 10: Customer behavior, capacity planning, recommenders
│
├── 1. CUSTOMER BEHAVIOR MODEL (CBMG)
│   ├── Built from web logs: a session = a walk through states
│   ├── Dummy states: Entry (start) and Exit (end)
│   ├── Transition probability matrix P (rows add to 1)
│   │   └── 4 fixed rules (Entry and Exit are special)
│   ├── Mean holding time matrix Z (seconds per branch)
│   ├── Mean time in a state: t_i = sum of p_ij x z_ij
│   ├── Mean number of transitions: v = [I - P']^-1
│   ├── Average session length (sum of v_1j)
│   ├── Limiting state probability (long-run share of visits)
│   ├── Buy-to-visit ratio (share of visits that buy)
│   └── Cluster sessions first (K-means), then one CBMG each
│
├── 2. CAPACITY PLANNING
│   ├── Goal: predict saturation, delay it as cheaply as possible
│   ├── 3 forces: natural growth, new apps, changing behavior
│   ├── Adequate capacity = 3 elements
│   │   ├── Service level agreement (SLA)
│   │   │   ├── Performance targets (8-second rule)
│   │   │   ├── Quality of service (QoS): uptime, failure and repair times
│   │   │   ├── Scalability
│   │   │   └── Bottleneck analysis
│   │   ├── Specified technologies and standards
│   │   └── Cost constraints (budget)
│   ├── Workload characterization
│   │   ├── CBMG to CSID (client-server interaction diagram), per function
│   │   └── Service demand, bottleneck, site throughput
│   ├── Performance modeling
│   │   ├── Each resource = a queue; all = queuing network
│   │   ├── Single queue: U, N, X, R = S / (1 - U)
│   │   └── Analytical model or simulation model
│   ├── Workload forecasting (per business function)
│   └── Worked case: $130M goal, 400% event traffic
│
├── 3. RECOMMENDER SYSTEMS
│   ├── Purpose: suggest items (information, products, services)
│   ├── Advantages: less overload, more sales, loyal customers
│   ├── Examples: music, news, articles; Double-click, CDnow, Amazon
│   ├── Framework: users, items, preferences, features
│   ├── 3 decisions: prediction, Top-N items, Top-M users
│   └── 7 system types
│       ├── Popularity-based (same list for everyone)
│       ├── Content-based (item features)
│       ├── Collaborative filtering (people with similar taste)
│       ├── Association-based (bought together)
│       ├── Demographics-based (similar profiles)
│       ├── Reputation-based (people you respect)
│       └── Hybrid (a mix)
│
└── 4. CONTENT-BASED RECOMMENDER
    ├── 4 phases: features, representation, profile, recommend
    ├── Feature types: extrinsic (typed in) vs intrinsic (extracted)
    ├── Feature scores: TF and TF*IDF (term frequency x inverse doc freq)
    ├── Learners: linear regression, decision tree, neural network
    ├── Decision tree: split on highest information gain
    └── Stop when pure, no attributes, or no samples
```

## Concept cards

### 1. Customer behavior model (CBMG)

**Customer Behavior Model Graph (CBMG)**
- What it is: a diagram of how visitors move through a site. Each box is a state (one page or a group of pages), and each arrow is a move from one state to the next, with a count and a time.
- Think of it as: a floor plan of a shop with arrows showing how shoppers walk from counter to counter, and how many went that way.
- Spot it in a question: "graph", "navigational pattern", "states and transitions", "a visitor's path through the site" → the answer will be a state name, a probability, a time or a rule about the Entry or Exit state.

**State (node)**
- What it is: one page, or a group of pages, that a visitor is on at a given moment. In Example-I the states are Home, Product Catalog, Shopping Cart, Select, Pay, plus the dummy Entry and Exit.
- Think of it as: a room in the shop.
- Spot it in a question: "node", "state consisting of one or more pages" → a room.

**Entry state (dummy start)**
- What it is: a fake starting state. Every session begins here, and no real page is in it.
- Think of it as: the shop's main gate. You walk in and then go to a shelf.
- Spot it in a question: "beginning of a session", "dummy state", "starts the visit" → Entry.

**Exit state (dummy end)**
- What it is: a fake ending state. Every session finishes here. A visitor who reaches it can only stay at Exit or go back to Entry for a new session.
- Think of it as: the exit door and the till at the end of your trip.
- Spot it in a question: "ends the session", "terminates", "leaves the site" → Exit. On the slide it is called the trapping state (its row and column are deleted to form P'). From Exit a visitor can only stay at Exit or go back to Entry for a new session.

**Dangling link**
- What it is: an arrow that goes to Exit. It means the visitor leaves the site from that page.
- Think of it as: walking out of the shop from this aisle without going to any other aisle.
- Spot it in a question: "dangling link represents..." → a connection to Exit (Mock 1 Q2 uses this).

**Transition**
- What it is: one move from state i to state j, for example Home to Product Catalog.
- Think of it as: one step of walking from one room to the next.
- Spot it in a question: "transition count", "moves from state i to state j", "branch" → one arrow.

**Transition probability matrix P (p_ij)**
- What it is: the chance that a visitor in state i goes next to state j. Each row adds up to 1 (100 percent).
- Think of it as: the odds, standing in one shop, of which door you take next.
- Spot it in a question: "probability of the next state", "transition probability matrix" → divide that arrow's count by the total count leaving that state.

**Count and accumulated think time (the brackets on the slide)**
- What it is: the slides write each branch as [count, time]. The count is how many times that move happened. The time is the total think time (seconds spent reading or choosing) for those moves.
- Think of it as: a tally sheet at the door: "walked this way 45 times, 300 seconds in total".
- Spot it in a question: a pair like (50, 350) → see the two ways to get expected time in the section "Mean time in a state" below.

**Think time**
- What it is: the seconds a visitor spends on a page before clicking to the next one.
- Think of it as: how long a shopper stands looking at a shelf before walking on.
- Spot it in a question: "think time", "accumulated think time" → seconds in the state.

**Mean holding time matrix Z (z_ij)**
- What it is: the time value attached to each branch. Z is the matrix of these values (z_ij). In the Example-I slide the holding time of a branch is the number written in the holding-time matrix (for example Home to Product Catalog = 300 s).
- Think of it as: a stopwatch reading on each walkway.
- Spot it in a question: "holding time attached to each transition" → z_ij.

**Mean time spent in a state (t_i)**
- What it is: the expected time a visitor spends in state i before making a transition. Formula: t_i = sum over j of p_ij x z_ij.
- Think of it as: a weighted average. If you leave the shelf 25 percent of the time after 100 seconds and 75 percent of the time after 600 seconds, the answer is weighted by how often each exit is taken, not a simple average.
- Spot it in a question: "expected time before making a transition", "mean time in a state", "probability-weighted holding times" → the formula.

**Mean number of transitions, matrix v (v = [I - P']^-1)**
- What it is: for each transient state i, v_ij is the mean number of visits to state j from i before the session ends. I is the identity matrix (ones on the diagonal). P' is the transition matrix with the trapping state (Exit) row and column removed.
- Think of it as: counting every room a shopper walks through, including return trips, before reaching the exit door.
- Spot it in a question: "v = [I - P']^-1", "mean number of transitions", "before trapping", "transient states" → the v matrix.

**Trapping state**
- What it is: the slide's name for the Exit state. Its row and column are removed from the transition matrix to get P'. It marks the end of the session.
- Think of it as: the one-way door at the end of the shop visit.
- Spot it in a question: "trapping state", "absorbing", "removed from P to get P'" → Exit.

**Average session length**
- What it is: the expected number of states (visits or requests) in one session. From the v matrix it is the sum of the Entry row, sum over j of v_1j. In the store case of slide 38 it is given as 8.144 requests per session.
- Think of it as: how many rooms one shopper visits on an average trip.
- Spot it in a question: "average session length", "how many requests per session" → sum of v_1j, or the given number.

**Mean time spent in the session (from state i)**
- What it is: the total expected time of one session starting from state i. Formula: sum over j (from 2 to n) of v_ij x t_j.
- Think of it as: visits times the time spent per visit, added up over the whole trip.
- Spot it in a question: "average time per session", "time spent in the session" → v times t.

**Limiting state probability**
- What it is: the long-run chance that a random visitor is on a given state, after the model has run for a long time.
- Think of it as: take a photo of the shop floor many times; the share of photos that show each aisle is the limiting probability.
- Spot it in a question: "long run", "probability that a customer visits a state", "lim Pr" → limiting state probability. It is about visiting a state, not about a session being put in a cluster (Mock 2 Q15).

**Buy-to-visit ratio (BV)**
- What it is: the share of visits (sessions) that end in a purchase. In the store case BV = 0.046, which means 4.6 percent.
- Think of it as: out of 100 people who walk in, how many buy. It is a conversion rate.
- Spot it in a question: "buy-to-visit ratio", "conversion", "what share of visitors buy" → BV. It is used in the revenue formula (see Capacity planning).

**Migration rate out of a state**
- What it is: the chances of moving from one state to each of the other states. The slide asks for the migration rate from Shopping Cart. Read this from the row of the transition matrix for that state. The slide does not define it further, so treat this reading as the working definition.
- Think of it as: at one counter, the share of people who go to each other counter next.
- Spot it in a question: "migration rate from the state X" → the row of P for X.

**Clustering the sessions (K-means)**
- What it is: grouping similar sessions together with an algorithm such as K-means (K-means sorts items into K groups by how close they are). Then you build one CBMG per group and study each group's behavior.
- Think of it as: sorting shoppers into groups such as window-shoppers, bargain hunters and buyers, then studying each group on its own.
- Spot it in a question: "group the customers", "cluster sessions", "K-means" → clustering, which comes before the per-cluster CBMG (Mock 3 Q15).

**Vb (browsing visits) and Vs (searching visits)**
- What it is: the average number of visits to browse-product (b) and search-product (s) states. Together, Vb + Vs measures exploration.
- Think of it as: window-shopping and searching the shelves.
- Spot it in a question: "browsing and searching", "exploration before deciding", "high Vb and Vs" → exploration (Bank Q4).

### 2. Capacity planning

**Capacity planning**
- What it is: predicting when the future load will saturate the system, and finding the most cost-effective way to delay saturation as much as possible.
- Think of it as: a bus company counts how many people will want seats next year, then decides when to add buses and whether a cheaper timetable change can wait.
- Spot it in a question: "predict when load saturates", "cost-effective", "delay saturation", "planning for future growth" → capacity planning. The right option is always about predicting first, then planning.

**Saturation**
- What it is: the point where the system cannot cope and queues grow fast.
- Think of it as: the bill counter when the whole queue has stopped moving.
- Spot it in a question: "saturate", "system overloaded" → saturation.

**Three factors that shape future workload**
- What it is: (1) natural evolution of the existing workload, (2) deployment of new applications and services, (3) changes in customer behavior.
- Think of it as: more people come anyway, new counters open, and people shop differently.
- Spot it in a question: "which is a factor in future workload" → one of these three. A fixed budget is not a workload factor (Mock 1 Q7).

**Adequate capacity: three elements**
- What it is: adequate capacity is a function of (1) the service level agreement, (2) the specified technologies and standards, and (3) cost constraints.
- Think of it as: a kitchen sized by how fast the food must come out, which appliances are allowed, and how big the owner's budget is.
- Spot it in a question: "adequate capacity depends on" → these three.

**Service level agreement (SLA)**
- What it is: the promise of performance and quality the site must keep. Its parts are performance, quality of service, scalability and bottleneck analysis.
- Think of it as: a delivery promise like "food in 30 minutes or the dessert is free".
- Spot it in a question: "agreed service level", "targets management sets" → SLA.

**Performance requirements (within the SLA)**
- What it is: lower and upper bounds on performance numbers set by management, such as server-side response time under 2 seconds and throughput above 30,000 requests per second. Management also looks at the customers' expectation (the 8-second rule).
- Think of it as: a speed limit (no slower than 2 seconds) and a minimum traffic target (at least 30,000 per second) on a highway.
- Spot it in a question: "response time < 2 seconds", "throughput > 30,000 requests per second" → performance bounds set by management (Mock 3 Q3).

**8-second rule**
- What it is: the slide's name for the customers' expectation that a page should respond in about 8 seconds.
- Think of it as: the patience limit at a counter. Beyond it, people walk away.
- Spot it in a question: "customers' expectation", "8-second rule" → the expected response time.

**Quality of service (QoS)**
- What it is: the requirements about the site being up and reliable. The slide lists site availability, the cost of unavailability, single points of failure, the minimum configuration possible, and MTTF and MTTR.
- Think of it as: the shutter of the shop. Is it open when people come? What does it cost when it is shut? Which single hinge, if broken, shuts the whole shop?
- Spot it in a question: "availability", "downtime cost", "single point of failure", "minimum configuration", "MTTF", "MTTR" → QoS.

**Mean time to failure (MTTF)**
- What it is: the average time a part works before it breaks.
- Think of it as: the average working life of a bulb.
- Spot it in a question: "time between failures", "how long it runs before it fails" → MTTF.

**Mean time to repair (MTTR)**
- What it is: the average time needed to fix a part after it breaks.
- Think of it as: how long the electrician takes to replace the bulb.
- Spot it in a question: "time to fix", "time to restore" → MTTR. (Standard formula, not on the slide: availability is roughly MTTF divided by (MTTF + MTTR).)

**Single point of failure**
- What it is: one component whose failure brings the whole site down.
- Think of it as: the one power cable that feeds the whole mall.
- Spot it in a question: "one component whose failure stops the site" → single point of failure.

**Minimum configuration**
- What it is: the smallest set of hardware that still runs the site.
- Think of it as: the fewest counters you can open and still serve customers.
- Spot it in a question: "smallest working setup" → minimum configuration.

**Scalability**
- What it is: an infrastructure is scalable if it keeps an adequate service level even when the load rises above the expected level.
- Think of it as: a lift built for 10 people that still moves reasonably with 14 people in it.
- Spot it in a question: "keeps service level when workload rises above expected", "grows with demand" → scalable (Mock 3 Q1 → the right option says "keeps the required service levels even when load rises above the expected level").

**Bottleneck resource**
- What it is: the resource that limits the performance and the maximum throughput of the site.
- Think of it as: the narrow exit door in a crowded mall. The narrowest door decides how fast people can leave.
- Spot it in a question: "limits performance", "maximum throughput", "slowest part" → bottleneck (Mock 3 Q5).

**Maximum throughput**
- What it is: the most requests per second the site can handle before it is at its limit. You find it with performance modeling and the bottleneck.
- Think of it as: the top speed of the conveyor belt.
- Spot it in a question: "determining maximum throughput" → performance model plus bottleneck.

**Scaling up**
- What it is: replacing one machine with a bigger, faster machine (more processing power or memory).
- Think of it as: swapping a small auto-rickshaw for a bus.
- Spot it in a question: "upgrade a single server", "bigger machine" → scaling up.

**Scaling out**
- What it is: adding more machines that work in parallel.
- Think of it as: opening more billing counters instead of making one counter faster.
- Spot it in a question: "add more servers in parallel rather than upgrading one" → scaling out (Mock 3 Q2).

**Steps in capacity planning (6 steps)**
- What it is: (1) characterize customer behavior, (2) characterize site workload, (3) forecast the workload, (4) develop performance models, (5) obtain performance parameters, (6) predict performance and check it against the QoS. The slide prints "workload forecasting" twice, once as step 3 and once as the last step. The exam treats the step after you forecast the arrival rate as the performance check (Bank Q6).
- Think of it as: a restaurant planning a festival night. Study the customers, study the kitchen, forecast the crowd, model the kitchen, measure the cooking times, check the waiting time.
- Spot it in a question: "after forecasting the arrival rate, what next?" → evaluate waiting time, utilization and bottlenecks against QoS.

**Workload characterization**
- What it is: turning the CBMG into server demand. For each e-business function, draw the CSID, find the service demand of each resource, rank the functions by demand, find the bottleneck and the site throughput, then average the throughput.
- Think of it as: working out how much work each dish (search, buy, pay) puts on the kitchen.
- Spot it in a question: "for each e-business function draw ..." → workload characterization.

**CSID (client-server interaction diagram)**
- What it is: a diagram of the chain of servers that one request passes through: client, web server, application server, database server, and back again.
- Think of it as: a relay race where the baton goes client to web server to app server to database and returns the same way.
- Spot it in a question: "interaction diagram", "the path of one request through servers" → CSID.

**Service demand**
- What it is: the total service time a resource spends on one e-business function. It is the sum of the service times of all the references (requests) that touch that resource.
- Think of it as: the total minutes a cashier spends on all the items in one customer's basket.
- Spot it in a question: "service demand is computed as ..." → the sum of service times of all references. The wrong option is a visit count or a think time (Mock 3 Q6).

**Network, CPU and disk service demand**
- What it is: the three kinds of demand on the CSID. Network demand is the time to move data between machines. CPU (central processing unit) and disk demand is the time the processor and hard disk spend on each request.
- Think of it as: the road between shops, the cashier's hands, and the back-room storage.
- Spot it in a question: "network service demand", "CPU and disk" → the three parts of the CSID.

**Performance modeling**
- What it is: each resource (CPU, disk, network link) is modeled as a queue, and all the resources together form a queuing network. The model can be analytical (maths formulas) or a simulation (a computer run of the model).
- Think of it as: a supermarket with a line in front of every till, packing table and exit, all linked together.
- Spot it in a question: "each resource is modeled as a queue", "analytical or simulation" → performance modeling.

**Model inputs and model outputs**
- What it is: the inputs (arrival rate and service rate) come from the access log. The outputs (waiting time, response time and facility utilization) come from the model.
- Think of it as: the inputs are what you count at the door; the outputs are what the model tells you about the queue.
- Spot it in a question: "arrival and service rates come from ..." → the access log. "response time is obtained from ..." → the model (Mock 3 Q7).

**Queue and queuing network**
- What it is: a queue is a line of requests waiting for one resource. A queuing network is many queues connected in a chain or a web.
- Think of it as: one bank counter line, versus a chain of counters in a whole bank branch.
- Spot it in a question: "single queue", "queuing network", "more realistic" → see the difference below.

**Single queue approach**
- What it is: one server with requests arriving at rate λ and being served at rate μ.
- Think of it as: one cashier. The busier the cashier (utilization close to 1), the longer everyone waits, and the waiting grows very fast.
- Spot it in a question: "single queue", "one server", "λ and μ" → use the formulas in the Mini-formula card below.

**Arrival rate (λ, lambda)**
- What it is: the mean number of requests arriving per second.
- Think of it as: people per minute arriving at the door.
- Spot it in a question: "requests per second arriving" → λ.

**Service rate (μ, mu) and service time (S = 1/μ)**
- What it is: μ is the number of requests the server can finish per second. S is the time for one request, S = 1/μ.
- Think of it as: μ is how many customers the cashier can serve per minute; S is the minutes per customer.
- Spot it in a question: "service time 20 ms" → S = 0.020 s. "service rate" → μ. Watch the units (ms versus seconds).

**Utilization (U)**
- What it is: the fraction of time the server is busy. U = λ/μ = λ x S. Also U = 1 - p0.
- Think of it as: the share of the working day the cashier is busy serving people.
- Spot it in a question: "utilization", "server busy", "requests per second times service time" → U = λ x S (Mock 1 Q8).

**Probability of zero requests (p0) and of k requests (pk)**
- What it is: p0 = 1 - λ/μ, the chance the server is idle. pk = (1 - λ/μ)(λ/μ)^k, the chance of exactly k requests at the server.
- Think of it as: the chance the till is empty right now, and the chance there are exactly k people at it.
- Spot it in a question: "probability that zero requests are being served" → p0.

**Average number of requests (N) and throughput (X)**
- What it is: N = U/(1 - U), the average number of requests in the system. X = μU, the throughput, meaning the completed requests per second (equal to λ when the server keeps up).
- Think of it as: how many people are at the till on average, and how many people leave the till per second.
- Spot it in a question: "average number of requests" → N. "average throughput of the server" → X.

**Response time (R)**
- What it is: the total time from a request arriving to it being finished, waiting plus service. R = N/X = S/(1 - U).
- Think of it as: the total time you spend at the till, queue plus billing.
- Spot it in a question: "response time", "how long a user waits" → S/(1 - U). Waiting time is R minus S.

**Queuing network model of a site**
- What it is: a request enters the web server, then goes to the application server, then to the database server. Each server has its own processor and disk queue. The response travels back through the same servers.
- Think of it as: a chain of departments in a store: receiving, the counter, then the back-room storeroom.
- Spot it in a question: "web server, application server, database server, each with disks" → queuing network of a site (slide 32).

**Analytical model and simulation model**
- What it is: an analytical model uses maths formulas to get the performance numbers. A simulation model runs the system as a computer program with random events.
- Think of it as: working out the answer with a calculator versus running a practice drill.
- Spot it in a question: "formulas" → analytical. "run a computer model with random events" → simulation.

**Workload forecasting**
- What it is: estimating future demand. Steps: visually inspect the data, choose a forecasting model, forecast each business function separately, feed the forecasts into the performance and workload models, and plan for future waves of demand.
- Think of it as: a weather forecast for shoppers before festival season, done shop by shop.
- Spot it in a question: "future waves of demand", "forecast each business function", "special events" → workload forecasting.

**Planning situations (two in the lecture)**
- What it is: (1) assessing the impact of business goals (the board's revenue goal and whether the site can carry it), and (2) introducing a new digitally downloadable product (music in MP4, a standard digital media file format) and planning capacity before launch.
- Think of it as: "Can we reach the target?" and "Can we open a new counter before the new product sells?"
- Spot it in a question: "board sets a goal", "introducing a new product" → one of these two situations. Mock 3 Q9 wants you to forecast the new workload and feed it into the performance models.

**Revenue throughput and sessions per second**
- What it is: revenue per second = sessions per second x buy-to-visit ratio x average sale. Turned around, sessions per second = revenue per second / (BV x average sale).
- Think of it as: money per second = number of walk-ins x share who buy x average bill.
- Spot it in a question: "how many sessions per second must the site support" → divide revenue per second by (BV x average sale) (Mock 3 Q10).

### 3. Recommender systems

**Recommender system**
- What it is: a system that suggests items (information, products or services) that a user is likely to like, based on demographics, item features, and user preferences such as ratings or purchase history.
- Think of it as: a shop assistant who remembers what you liked and says "try this".
- Spot it in a question: "suggest", "personalized suggestions", "recommend items the user will like" → recommender system.

**Information overload**
- What it is: too many choices for a person to browse. Recommenders decrease it.
- Think of it as: a 500-page menu versus a waiter who recommends three dishes.
- Spot it in a question: "decreased information overload" → an advantage of recommenders.

**Customer relationship management (CRM) and loyal customers**
- What it is: CRM means keeping customers happy and coming back. Recommenders increase sales and produce loyal customers.
- Think of it as: the shop that remembers your birthday and your size.
- Spot it in a question: "better customer relationship management", "loyal customers", "increased sales" → recommender advantages.

**Personalized versus non-personalized**
- What it is: personalized means the list depends on this particular user. Non-personalized means everyone gets the same list.
- Think of it as: a custom tailor's suit versus a ready-made shirt in one size.
- Spot it in a question: "same list for everyone" → non-personalized. "based on this user's history" → personalized.

**Users, items and preferences (the framework)**
- What it is: users U (u1 to un), each with demographic data and a list of items they have expressed a preference on. Items I (i1 to in), each with a set of features. The preference p_ij is how user u_i feels about item i_j.
- Think of it as: a spreadsheet with users as rows, items as columns, and each cell holding a rating or a question mark.
- Spot it in a question: "users and items with features and preferences" → the framework.

**Explicit and implicit preference**
- What it is: explicit means the user states it (for example a 4-star rating). Implicit means it is inferred from behavior: a purchase, a page visit, a search.
- Think of it as: "I said I liked it" versus "I bought it twice so I must like it".
- Spot it in a question: "subjective rating explicitly stated" → explicit. "inferred from purchase, navigation, browsing or searching" → implicit.

**Active user (u_a)**
- What it is: the user who is receiving the recommendations right now.
- Think of it as: the customer standing at the counter.
- Spot it in a question: "for an active user" → the person being recommended to.

**New item and new user**
- What it is: the slide's example has a new item (i_new) that nobody has rated yet, and a new user (u_new) with no history. The top-M users decision is used for a new item.
- Think of it as: a brand-new product on the shelf with no reviews, and a customer who has never shopped before.
- Spot it in a question: "a newly available item" → top-M users (for the item). "a new visitor with no history" → demographics or popularity are the usual fallbacks (Mock 1 Q15).

**Prediction (recommendation decision)**
- What it is: predicting how much an active user will like an item they have not yet rated. It can be personalized or non-personalized.
- Think of it as: guessing your star rating for a movie you have not seen.
- Spot it in a question: "how much will this user like this unseen item", "predicts preference" → prediction (Mock 1 Q13, Bank Q9).

**Top-N recommendations (recommendation decision)**
- What it is: a list of N items that the active user will like most. The list must contain only items the user has not already rated or chosen.
- Think of it as: a "for you" page with 10 items you have not bought yet.
- Spot it in a question: "list of N items", "top 5", "items not already bought" → Top-N. The trap is an option that includes items the user already bought.

**Top-M users (recommendation decision)**
- What it is: finding M users who would value a newly available item the most.
- Think of it as: choosing 100 customers to send the first invitation to a new product launch.
- Spot it in a question: "M users for a new item", "who should receive this new item" → Top-M users (Mock 3 Q12).

**Popularity-based recommender**
- What it is: recommends the items that are most popular in the community. The popularity measures can be the percentage of users who bought the item or the average rating. It is non-personalized, simple and efficient.
- Think of it as: the bestseller shelf or the "trending now" list that everyone sees.
- Spot it in a question: "most popular", "bestseller", "same list for every user", "percentage of users who purchased" → popularity-based (Mock 1 Q11).

**Content-based recommender**
- What it is: recommends items that are similar in content to the items this user liked in the past. It uses item features and the user's own preferences. It is personalized.
- Think of it as: a librarian who knows what each book is about and offers more books on the topics you enjoyed.
- Spot it in a question: "item features", "items similar to ones the user liked", "text documents" → content-based. Full detail in section 4.

**Collaborative filtering recommender**
- What it is: finds users whose taste is similar to the active user (user-to-user correlation based on taste), then recommends what those users liked. Also called social information filtering. It uses user preferences. It is personalized.
- Think of it as: asking a friend who has the same taste in films.
- Spot it in a question: "users with similar taste", "social information filtering", "word of mouth" → collaborative filtering.

**Association-based recommender**
- What it is: recommends items that are bought together with items the user has bought or shown interest in. It is based on co-occurrences: items that customers often buy in the same basket. It is personalized.
- Think of it as: "people who bought a phone also buy the case" shown next to the cart.
- Spot it in a question: "bought together", "co-occurrence", "items in the cart", "frequently purchased together" → association-based (Mock 1 Q10).

**Demographics-based recommender**
- What it is: finds users who are similar in demographic terms (age group, gender, city or other profile data), then uses their preferences. It uses individual preferences and item features. It is personalized.
- Think of it as: "people your age in your city liked this".
- Spot it in a question: "age group, gender, city", "customers with similar profiles" → demographics-based (Mock 1 Q15).

**Reputation-based recommender**
- What it is: identifies the users that a user respects, and uses the opinions of those selected people to make recommendations. It uses user preferences and a reputation matrix (who respects whom).
- Think of it as: taking the reading list of the senior student you trust.
- Spot it in a question: "endorse", "respects", "trusted reviewers", "reputation matrix" → reputation-based (Mock 1 Q14).

**Hybrid recommender**
- What it is: a combination of two or more of the other types.
- Think of it as: a thali that mixes several dishes.
- Spot it in a question: "combines several approaches" → hybrid.

**Early research and commercial systems (names)**
- What it is: social information filtering (automating word of mouth, recommending music albums, Upendra Shardanand and Pattie Maes), GroupLens (personalized recommendations for Usenet news items, Resnick and Konstan), and Citeseer (recommendation of relevant articles, Rucker and Pollano). Commercial: Double-click.com (personalized banner ads), CDnow.com (music albums), Amazon.com (books).
- Think of it as: the first shops that tried recommending, each in one product area.
- Spot it in a question: "personalized banner ads" → Double-click.com. "music albums" → CDnow.com or the early research. "books" → Amazon.com.

### 4. Content-based recommender

**Content-based recommender (approach)**
- What it is: recommends items similar to those the user liked in the past. It learns the user profile automatically and changes it over time using relevance feedback (the user's reactions). It is especially popular for documents. When the items are text documents the process belongs to text mining.
- Think of it as: a student who keeps a notebook of what you liked and what you rejected, and updates the notebook after each lesson.
- Spot it in a question: "recommends items similar to those liked in the past", "relevance feedback", "documents" → content-based.

**Relevance feedback**
- What it is: the user's reaction (like or dislike, click or skip) that is used to adjust the user profile.
- Think of it as: a thumbs up or thumbs down that updates the notebook.
- Spot it in a question: "adaptively changing the user profile" → relevance feedback.

**Text mining**
- What it is: the field that finds useful patterns in text documents.
- Think of it as: reading thousands of documents with a machine and marking the important words.
- Spot it in a question: "documents" plus "belongs to a discipline called" → text mining.

**Phases of content-based recommendation generation (4 phases)**
- What it is: (1) feature extraction and selection, (2) representation, (3) user profile learning, (4) recommendation generation.
- Think of it as: a tailor who first picks the measurements that matter, then records them in a table, then learns the customer's fit, then cuts the suit.
- Spot it in a question: "correct order of the phases" → the order above (Mock 2 Q1).

**Feature extraction and selection**
- What it is: choosing the features that describe the items. The method depends on the item type. The aim is the minimum number of features that are necessary and sufficient to describe the items.
- Think of it as: choosing which five things to write on a product card, not all five hundred.
- Spot it in a question: "minimum number of features", "which features describe the item" → this phase.

**Extrinsic features (feature specification)**
- What it is: features that are written down for each item by hand, from outside the content. For movies: category, MPAA (Motion Picture Association of America) rating, Maltin rating, Academy award, length, origin and director.
- Think of it as: the label on a packet (weight, brand, expiry date).
- Spot it in a question: "director", "MPAA rating", "running length", "specified for each film" → extrinsic (Mock 2 Q2).

**Intrinsic features (feature extraction)**
- What it is: features pulled out of the item's own content. For text documents this means extracting nouns and noun phrases, then scoring them.
- Think of it as: reading a book and writing down its important words yourself.
- Spot it in a question: "extracted from the content", "nouns and noun phrases", "words from the text" → intrinsic.

**Feature selection techniques**
- What it is: for extrinsic features, the slide lists statistical analysis (forward and backward stepwise multiple regression), the genetic algorithm, and the attribute selection measures used in decision tree induction.
- Think of it as: adding or removing one question at a time from a survey and keeping only the questions that help, or letting a survival-of-the-fittest search pick the best set.
- Spot it in a question: "stepwise regression", "genetic algorithm", "attribute selection in decision trees" → feature selection for extrinsic features.

**Forward and backward stepwise regression**
- What it is: forward adds one feature at a time when it helps; backward starts with all features and removes the weakest one at a time.
- Think of it as: building a team one player at a time, or cutting the bench one player at a time.
- Spot it in a question: "stepwise multiple regression" → statistical feature selection.

**Genetic algorithm (for features)**
- What it is: a search method that keeps the best candidate feature sets and mixes them to make better ones, like natural selection.
- Think of it as: breeding the best recipes over many rounds.
- Spot it in a question: "genetic algorithm" → a feature-selection search technique.

**Why text features need a cheap score**
- What it is: a text document can produce hundreds or thousands of intrinsic features. Methods that test feature combinations (stepwise, genetic) become intractable, so the slide uses an evaluation function that scores each feature on its own, then keeps the top k.
- Think of it as: ranking 3,000 candidate words by a quick score and keeping the best 80, instead of testing every combination.
- Spot it in a question: "600 candidate features, keep the top 80" → score each feature and keep the top k (Bank Q10).

**Term frequency (TF)**
- What it is: how many times a term appears within one document.
- Think of it as: how often a word appears in this one essay.
- Spot it in a question: "within-document term frequency" → TF.

**Inverse document frequency (IDF)**
- What it is: a measure that gives low weight to terms that appear in many documents and high weight to terms that appear in few.
- Think of it as: the word "the" appears in every essay, so it tells you nothing. A rare word like "mutiny" tells you a lot.
- Spot it in a question: "inverse document frequency", "rare across the collection" → IDF.

**TF*IDF**
- What it is: the score that multiplies the within-document term frequency by the inverse document frequency. The top k features with the highest score are kept.
- Think of it as: words that are frequent in this document but rare across all documents are the special words to keep.
- Spot it in a question: "combines within-document term frequency with inverse document frequency" → TF*IDF (Mock 2 Q3).

**Representation**
- What it is: preparing the training data set. Each item in the training set is labeled with the user's preference (this is the dependent variable). Each feature gets a value (these are the independent variables), which can be binary (yes or no) or continuous. The scale is decided by the analyst.
- Think of it as: making a table where each row is a film the user has seen, the columns are its features, and the last column is how much the user liked it.
- Spot it in a question: "the preference rating is the dependent variable", "features are the independent variables", "binary or continuous" → representation (Mock 2 Q7).

**Dependent variable and independent variable**
- What it is: the dependent variable is what you predict (the user's preference rating). The independent variables are the inputs you use to predict it (the item features).
- Think of it as: the exam score (dependent) depends on hours studied and attendance (independent).
- Spot it in a question: "which is the dependent variable" → the preference rating.

**User profile learning**
- What it is: establishing the relationship between the preference scores and the item features, using an adaptive learning algorithm, and training the model. The algorithms named on the slide are multiple linear regression, decision tree induction and back-propagation neural networks.
- Think of it as: learning the rule "this user likes films with these features" from the rows of the training table.
- Spot it in a question: "establishes the relationship between preference scores and item features" → user profile learning (Mock 2 Q4).

**Multiple linear regression (learner)**
- What it is: a learner that predicts the rating as a weighted sum of the features.
- Think of it as: scoring each film by adding points for each feature with a weight, like a cricket score formula.
- Spot it in a question: "linear" → regression learner.

**Decision tree induction (learner)**
- What it is: a learner that builds a tree of yes or no questions on the features. Each path to a leaf gives the predicted preference.
- Think of it as: a flow chart that asks "is it a movie?", then "is the language Hindi?", and so on.
- Spot it in a question: "tree", "root", "leaf", "information gain" → decision tree induction.

**Back-propagation neural network (learner)**
- What it is: a network of layers that learns its weights by sending the error backwards and correcting them.
- Think of it as: a student who corrects each mock test by going back over every wrong answer.
- Spot it in a question: "neural network", "back propagation" → neural network learner.

**Apriori (NOT on this list)**
- What it is: a frequent-itemset method used for association rules. The slide does not list it among the learners for the user profile.
- Think of it as: a different tool in the same shed.
- Spot it in a question: "which is NOT an adaptive learning algorithm listed" → Apriori is the odd one out (Mock 2 Q5).

**Recommendation generation**
- What it is: using the learned profile to predict scores, produce a Top-N list for the active user, or find the Top-M users for a new item by scoring all users. The system also watches the user's actions and retrains the learner if needed.
- Think of it as: the final prediction and the "watch and adjust" loop.
- Spot it in a question: "predicts the rating, produces the top list, retrains when behavior changes" → recommendation generation.

**Decision tree induction (basic algorithm)**
- What it is: a greedy algorithm. The tree is built top-down in a recursive, divide-and-conquer way. At the start all training examples are at the root. The attributes must be categorical (continuous values are discretized in advance). The examples are split on the selected attribute. The attribute is chosen by a heuristic or statistical measure, for example information gain.
- Think of it as: asking the single best question first, splitting the crowd into groups, and then asking the best question inside each group.
- Spot it in a question: "top-down", "recursive", "divide-and-conquer", "heuristic or statistical measure" → decision tree induction.

**Greedy algorithm**
- What it is: at each step it picks the locally best choice (the best split right now) and never goes back to change it.
- Think of it as: grabbing the best-looking mango in the basket at each step, and never going back to swap it for a better one.
- Spot it in a question: "picks the locally best split without revisiting earlier choices" → greedy (Mock 2 Q12).

**Stopping conditions (3)**
- What it is: stop splitting a node when (1) all samples at the node belong to the same class, (2) there are no remaining attributes (use majority voting to label the leaf), or (3) there are no samples left.
- Think of it as: stop when everyone in the group agrees, when you have run out of questions (vote for the most common answer), or when the group is empty.
- Spot it in a question: "when should partitioning stop" → one of these three. "Majority voting" → no attributes left.

**Majority voting**
- What it is: labeling a leaf with the most common class among its samples.
- Think of it as: the answer that most people in the group gave.
- Spot it in a question: "leaf labeled by majority" → majority voting.

**Attribute selection measure: information gain**
- What it is: the measure used to pick which attribute to split on. Choose the attribute with the highest information gain. Information gain = Info(D) minus Info_A(D).
- Think of it as: the question that removes the most confusion about the answer.
- Spot it in a question: "highest information gain", "attribute selection measure" → information gain (Mock 2 Q8).

**Info(D) (expected information, or entropy)**
- What it is: the uncertainty about the class of a random tuple in data set D. Formula: Info(D) = minus the sum over i of p_i x log2(p_i), where p_i = |C_i,D| / |D|. For the buys_computer data (9 yes, 5 no) Info(D) = 0.940.
- Think of it as: how mixed the group is. A pure group has entropy 0.
- Spot it in a question: "expected information needed to classify a tuple in D" → Info(D) (entropy). Its value 0.940 is not the gain (Mock 2 Q10 trap).

**Info_A(D) (information after the split)**
- What it is: the weighted entropy of the partitions after splitting on attribute A. Formula: sum over j of (|Dj| / |D|) x I(Dj).
- Think of it as: the mess left after you have sorted the group by one question, weighted by group size.
- Spot it in a question: "information needed after using attribute A to split D" → Info_A(D). For age it is 0.694 (Mock 2 Q10 trap).

**Gain(A)**
- What it is: Gain(A) = Info(D) minus Info_A(D). It is the reduction in uncertainty from splitting on A.
- Think of it as: the mess before minus the mess after.
- Spot it in a question: "information gained by branching on attribute A" → Gain(A). For age it is 0.246, the highest.

**Root node and leaf node**
- What it is: the root is the first test in the tree (the attribute with the highest gain). A leaf is a final answer (the predicted class).
- Think of it as: the root is the first question asked at the door, and the leaf is the final verdict.
- Spot it in a question: "first attribute tested" → root. "final prediction" → leaf.

## How it flows

### 1. Customer path through the Example-I CBMG

```text
  Entry (1) ──► Home (2) ──► Product Catalog (3) ──► Select (5) ──► Pay (6) ──► Exit (7)
  (start)                                                                  (end)
```

Every session starts at Entry and finishes at Exit. Real sessions loop back, for example Shopping Cart goes back to Product Catalog, and Pay goes back to Shopping Cart.

Every state with its exits (probability and holding time, from slides 7, 9 and 10):

```text
Entry (1)           ──75% ──► Home (2)                      holding 0 s
                    ──25% ──► Product Catalog (3)           holding 0 s

Home (2)            ──45/75 ──► Product Catalog (3)         holding 300 s
                    ──30/75 ──► Shopping Cart (4)           holding 400 s

Product Catalog (3) ──20/76 ──► Shopping Cart (4)           holding 100 s
                    ──20/76 ──► Select (5)                  holding 150 s
                    ──36/76 ──► Exit (7)                    holding 250 s

Shopping Cart (4)   ──5/20  ──► Product Catalog (3)         holding 100 s
                    ──5/20  ──► Pay (6)                     holding 600 s
                    ──10/20 ──► Exit (7)                    holding 200 s

Select (5)          ──5/20  ──► Pay (6)                     holding 200 s
                    ──15/20 ──► Exit (7)                    holding 100 s

Pay (6)             ──1/10  ──► Shopping Cart (4)           holding 200 s
                    ──9/10  ──► Exit (7)                    holding 100 s
```

Each row adds up to 1. Read the count over the total leaving that state. The holding times are the slide 10 values.

### 2. The four CBMG rules (slide 4)

```text
Entry (1)        ──► a browsing state only (never straight to Exit)
Browsing states  ──► another browsing state, or Exit (never back to Entry)
Exit (n)         ──► Exit itself OR Entry (for a new session), nothing else
```

Rule list, in exam words: no transition into Entry except from Exit; no transition from Entry straight to Exit; no transition from Exit to anything except Entry, and p(Exit to Exit) + p(Exit to Entry) = 1.

### 3. Mean time in a state (weighted average of holding times)

```text
 state i ──► exits j with probability p_ij and holding time z_ij
                     │
                     ▼
    t_i = p_i1 z_i1 + p_i2 z_i2 + ... + p_in z_in   (sum over all exits)
```

Example: Shopping Cart t = (5/20)(100) + (5/20)(600) + (10/20)(200) = 25 + 150 + 100 = 275 seconds.

Mean time per visit for every Example-I state (worked from the slide 9 and 10 values):

```text
Entry            0 s          (dummy)
Home             340 s        (45/75 x 300 + 30/75 x 400)
Product Catalog  184.2 s      (20/76 x 100 + 20/76 x 150 + 36/76 x 250)
Shopping Cart    275 s        (computed above)
Select           125 s        (5/20 x 200 + 15/20 x 100)
Pay              110 s        (1/10 x 200 + 9/10 x 100)
```

### 4. Two ways to get expected time (watch the bracket type)

```text
Type A: each branch gives a holding time z_ij (Example-I, Mock 1 Q5)
        expected time = sum of p_ij x z_ij

Type B: each branch gives (count, accumulated think time) (Bank Q2)
        expected time = total think time / total count
        = (350 + 280 + 160) / (50 + 35 + 20) = 790 / 105 = 7.52 s
```

### 5. Mean number of transitions and session length (formula chain)

```text
P  ──► drop the trapping state (Exit) row and column ──► P'
P' ──► [I - P']^-1 ──► v (mean number of visits from each state)
v  ──► average session length = sum of v_1j (the Entry row)
v  ──► mean time in session from state i = sum over j of v_ij x t_j
```

### 6. Capacity planning: six steps

```text
 1  Characterize customer behavior          (CBMG)
        │
        ▼
 2  Characterize site workload              (CSID for each function, service demand)
        │
        ▼
 3  Workload forecasting                    (future arrival rates per function)
        │
        ▼
 4  Develop performance models              (queuing network)
        │
        ▼
 5  Obtain performance parameters           (service times, arrival rates)
        │
        ▼
 6  Predict performance, check QoS          (waiting time, utilization, bottleneck)
```

Steps 1 and 2 describe the site's users and work. Step 3 predicts the future. Steps 4 and 5 build and fill the model. Step 6 checks whether the quality-of-service targets are still met, and tells you what to change if they are not.

### 7. Workload characterization

```text
 CBMG ──► for each e-business function (search, browse, buy, pay ...)
            │
            ▼
        draw the CSID (the chain of servers for one request)
            │
            ▼
        sum service times per resource  ──► service demand
            │
            ▼
        rank the functions by demand, find the bottleneck resource
            │
            ▼
        site throughput for each function, then the average throughput
```

### 8. CSID chain for one request

```text
  Client (C) ──► Web server (WS) ──► Application server (AS) ──► Database server (DS)
     ▲                                                                   │
     └──── Web server (WS) ◄──── Application server (AS) ◄───────────────┘
   Network demand on the links, CPU and disk demand inside each server
```

Each arrow pair is a service-demand piece. The network carries the data, and the servers use CPU and disk. The request goes out and the answer comes back the same way.

### 9. Queuing network of a site (slide 32)

```text
 Request ──► [ Web server  proc ] ──► [ Application server  proc ] ──► [ Database server  proc ]
                  │ disk                       │ disk                          │ disk
                  ▼                            ▼                               ▼
              (queue)                      (queue)                         (queue)
 Response ◄── the same servers in reverse order
```

Each box is a queue. The whole picture is one queuing network, so the slowest queue (the bottleneck) limits the site.

### 10. Single queue formulas (slide 24)

```text
 requests in ──► [ queue ──► server (rate μ) ] ──► requests out (throughput X)
   rate λ

 U   = λ / μ   = λ x S          (busy share of time)
 p0  = 1 - U                    (chance the server is empty)
 N   = U / (1 - U)              (average number of requests at the server)
 X   = μ x U                    (completed requests per second)
 R   = S / (1 - U)              (response time, where S = 1/μ)
```

Example (slide 25): 18,000 search requests in 3,600 s gives λ = 5 per second. S = 0.048 s, so U = 5 x 0.048 = 0.24 and R = 0.048 / 0.76 = 0.063 s. If the rate grows 4 times, λ = 20, U = 0.96 and R = 0.048 / 0.04 = 1.2 s.

### 11. Performance decision loop

```text
 access log ──► arrival rate λ, service time S (model inputs)
     │
     ▼
 queue model ──► utilization U, response time R, waiting time, bottleneck
     │
     ▼
 meets the QoS targets?
     ├── yes ──► plan is done
     └── no  ──► change: scale up, scale out, or fix the bottleneck ──► run the model again
```

### 12. From business goal to server load (slide 38)

```text
 $130,000,000 per year
   ÷ 31,536,000 seconds per year      = $4.122 per second
   ÷ (BV 0.046 x average sale $225)   = $10.35 per session
   ──► sessions per second            = 4.122 / 10.35 = 0.398
   x average session length 8.144     = 3.241 requests per second (normal day)
   x traffic burst 20                 = 64.82 requests per second to serve
   Question: is the infrastructure adequate for 64.82 per second? If not, plan first.
```

### 13. Recommender framework (slide 47)

```text
              items ──►   i1    i2    i3    i4   ...   im    i_new
 users
 u1  (demographics)        1     0     1     0          ?     ?
 u2  (demographics)        1     ?     0     0          ?     ?
 u3  (demographics)        ?     1     0     1          ?     ?
 u4  (demographics)        0     1     0     1          ?     ?
 ...
 un  (demographics)        0     0     0     1          0     ?
 u_new                     ?     ?     ?     ?          ?     ?

 1 or 0 = the user's preference for that item; ? = not known yet
 The new item column i_new is what the top-M users decision fills in.
```

### 14. Three recommendation decisions

```text
 Prediction   : one active user + one unrated item   ──► a predicted score
 Top-N        : one active user                      ──► N items not yet rated or bought
 Top-M users  : one new item                         ──► M users who will value it most
```

### 15. Content-based recommender: four phases

```text
 Item descriptions and user history
     │  1 Feature extraction and selection   (choose the features that matter)
     ▼
 Training table (one row per item the user rated)
     │  2 Representation                     (features = X, preference = Y)
     ▼
 Learned user profile model
     │  3 User profile learning              (regression, decision tree or neural net)
     ▼
 Recommendations
        4 Recommendation generation          (prediction, Top-N, Top-M users)
```

### 16. Feature selection for text (slide 62)

```text
 document text ──► candidate terms (hundreds or thousands)
     │
     ▼
 score each term on its own:  TF, then TF*IDF
     │
     ▼
 keep the top k highest scores
     │
     ▼
 those k terms are the features used for learning
```

### 17. Decision tree induction loop (slide 68)

```text
 start: all training examples at the root
     │
     ▼
 compute the information gain of each attribute
     │
     ▼
 pick the attribute with the highest gain, split the examples into branches
     │
     ▼
 repeat inside each branch
     │
     ▼
 STOP at a leaf when:  all samples have the same class
                    OR no attributes are left (majority vote)
                    OR no samples are left
```

### 18. buys_computer decision tree (slide 67, used in Mock 2 Q11)

```text
                              age?
            ┌───────────────────┼────────────────────┐
          <=30              31...40                >40
            │                  │                     │
        student?             YES                credit rating?
       ┌─────┴─────┐                          ┌───────┴───────┐
      no          yes                     excellent         fair
       │           │                          │               │
      NO          YES                        NO              YES
```

Read it top-down. A 45-year-old with fair credit goes right (over 40), then fair, so the answer is YES (buys).

### 19. Assignment tree for the online song store (slides 72 and 73)

```text
 Type?
  ├── Classical ──► Language?
  │                    ├── Hindi    ──► YES (buy)
  │                    ├── English  ──► YES (buy)
  │                    └── Telugu   ──► NO
  └── Rock ──► NO
```

Worked answers: an English album of classical songs goes to Classical then English, which is YES, so include the customer. A rock song from a Telugu movie goes to Rock, which is NO, so do not suggest it. Type has the highest gain (0.558), then Language (0.186), then Category (0.073).

## Don't mix these up

| These look alike | How to tell them apart | Tie-breaker word |
|---|---|---|
| CBMG vs CSID | CBMG = the visitor's path through the site's states. CSID = the chain of servers one request passes through. | "visitor path, pages, clicks" → CBMG. "request, server, chain" → CSID |
| CBMG vs queuing network | CBMG describes customers. Queuing network describes servers and their queues. | "customers / sessions" → CBMG. "servers / waiting time / utilization" → queuing network |
| Entry vs Exit | Entry is only a start and nothing goes into it except from Exit. Exit is the end and can go back to Entry or stay. Entry can never jump to Exit. | "Exit can return; Entry never jumps to Exit" |
| Transition probability p_ij vs holding time z_ij | p_ij is the chance of the next move. z_ij is the seconds spent for that move. | "chance" vs "seconds" |
| Mean time in a state t_i vs one holding time z_ij | t_i is the weighted average over all exits from state i. z_ij is one branch only. | "all exits" vs "one branch" |
| Two kinds of time data: holding times vs (count, think time) pairs | Example-I gives holding times, so weight them by p. Bank-style pairs give total seconds, so divide total seconds by total count. | "given a time per branch" vs "given (count, seconds)" |
| Transition probability P vs mean number of transitions v | P is the chance of one next step. v adds up the expected visits over the whole session until Exit. | "one step" vs "whole session" |
| Average session length vs average time per session vs average throughput | Length = how many states or requests. Time = seconds. Throughput = requests served per second. | "how many" / "how long" / "per second" |
| Limiting state probability vs transition probability | Limiting = long-run share of visits to a state. Transition = odds of the very next move. | "long run" vs "next move" |
| Buy-to-visit ratio vs revenue | BV is a fraction of visits that buy (0.046 = 4.6 percent). Revenue is dollars = sessions x BV x average sale. | "fraction" vs "dollars" |
| Store's 95 percent no-purchase figure vs BV 0.046 | The store case says 95 percent make no purchase, so about 5 percent buy. The planning uses BV 0.046 from the CBMG table. | Use 0.046 in the calculation |
| Arrival rate λ vs service rate μ | λ = requests coming in per second. μ = requests the server can finish per second. | "coming in" vs "can finish" |
| Utilization U vs response time R vs throughput X vs waiting time | U = busy share (λ/μ). R = total time at the server, waiting plus service. X = completed per second. Waiting = R minus S. | "busy share?", "total time?", "per second?", "queue only?" |
| Service time S vs response time R | S = time for one request with no queue. R = S/(1 - U), which grows fast as U approaches 1. | "alone" vs "with the queue" |
| Scalable vs performance targets vs QoS vs bottleneck | Scalable = still good above the expected load. Performance = response time and throughput targets. QoS = uptime and failure items. Bottleneck = the one resource that limits the site. | "above expected load" / "numbers" / "failure, repair" / "limits" |
| Scaling up vs scaling out | Up = one bigger machine. Out = more machines in parallel. | "bigger" vs "more in parallel" |
| MTTF vs MTTR | MTTF = working time before failure. MTTR = time to repair. | "fails" vs "fixes" |
| Single point of failure vs minimum configuration | Single point of failure = one part whose failure stops the site. Minimum configuration = the smallest setup that still works. | "one weak link" vs "smallest working set" |
| Analytical model vs simulation model | Analytical = maths formulas. Simulation = run the system as a model with random events. | "formula" vs "run" |
| Service demand vs service time | Service time = one request's time at one resource. Service demand = sum of service times of all requests of a function at that resource. | "all references in a function" |
| Workload forecasting vs capacity planning | Forecasting predicts the future load. Capacity planning uses the forecast to decide the infrastructure. | "predict the load" vs "decide the infrastructure" |
| Model inputs vs model outputs | Inputs (arrival rate, service rate) come from the access log. Outputs (waiting time, response time, utilization) come from the model. | "from the log" vs "from the model" |
| Extrinsic vs intrinsic features | Extrinsic = typed in by hand (director, MPAA rating). Intrinsic = pulled out of the content (nouns, words). | "specified" vs "extracted from the text" |
| TF vs TF*IDF | TF counts a term inside one document. TF*IDF also reduces the score for a term that appears in every document. | "common everywhere" → TF*IDF lowers it |
| Dependent vs independent variable | Dependent = the preference rating (what you predict). Independent = the item features (what you use). | "predicted" vs "used to predict" |
| Info(D) vs Info_A(D) vs Gain(A) | Info(D) = mess before the split (0.940). Info_A(D) = mess after the split (0.694 for age). Gain = before minus after (0.246 for age). | "before", "after", "difference" |
| Greedy vs exhaustive search | Greedy = the best split right now, never revisited. Exhaustive = try every tree. | "never goes back" |
| Root vs leaf | Root = the first test (highest gain). Leaf = the final answer (majority vote). | "first question" vs "final verdict" |
| Stopping on one class vs stopping on no attributes | One class = every sample agrees, so the leaf is pure. No attributes = all questions used, so label by majority vote. | "all agree" vs "out of questions" |
| Prediction vs Top-N vs Top-M users | Prediction = one score for one unrated item. Top-N = N items for one user, not yet rated. Top-M = M users for one new item. | "a score" / "N items" / "M users" |
| Popularity-based vs collaborative filtering | Popularity = same list for everyone. Collaborative = users with a similar taste. | "everyone" vs "similar users" |
| Collaborative filtering vs demographics-based | Collaborative = similar taste (ratings). Demographics = similar profile (age, gender, city). | "taste" vs "profile" |
| Content-based vs collaborative filtering | Content-based uses the item's features and this user's history. Collaborative uses other users' preferences. | "item features" vs "other users" |
| Association-based vs collaborative filtering | Association = items bought together (co-occurrence). Collaborative = people with similar taste. | "bought together" vs "people like you" |
| Reputation-based vs collaborative filtering | Reputation = whose opinion you respect or endorse. Collaborative = whoever has a similar taste. | "respects / endorses" vs "similar taste" |
| Association-based vs content-based | Association = co-purchase patterns across customers. Content-based = features of the item the user liked. | "bought together" vs "what the item is about" |
| Clustering vs decision tree | Clustering groups sessions with no labels (K-means). Decision tree induction predicts a class from labelled examples. | "group the sessions" vs "build a tree of questions" |
| Early research names vs commercial names | Early research: Shardanand and Maes (music albums), GroupLens (Usenet news), Citeseer (articles). Commercial: Double-click (banner ads), CDnow (music albums), Amazon (books). | Ask: "research system" or "shop" |

## Must-remember facts

### Numbers and formulas

| Fact | Detail | Memory trick |
|---|---|---|
| Example-I branch counts | Entry: 75 to Home, 25 to Product Catalog. Home: 45 to Product Catalog, 30 to Shopping Cart. Product Catalog: 20 to Shopping Cart, 20 to Select, 36 to Exit (total 76). Shopping Cart: 5 to Product Catalog, 5 to Pay, 10 to Exit (total 20). Select: 5 to Pay, 15 to Exit (total 20). Pay: 1 to Shopping Cart, 9 to Exit (total 10). | Count the "exit" total first, then divide |
| Product Catalog to Exit | 36 / 76 = 47.4 percent | Common trap: 36.0 percent (divided by 100), 26.3 percent (20/76) |
| Shopping Cart mean time | 275 seconds: (5/20)x100 + (5/20)x600 + (10/20)x200 | Weighted, not a plain average (plain average of 100, 600 and 200 is 300) |
| Home mean time | 340 seconds | Weights 45/75 and 30/75 |
| Bank Q2 expected time | 790 / 105 = 7.52 seconds (take total think time over total count) | Trap: 7.0 is only 350 / 50, the first branch |
| Utilization | U = λ x S, for example 30 req/s x 0.020 s = 0.6 | Put ms into seconds first |
| Response time | R = S / (1 - U). Example: S = 0.048 s, U = 0.24, R = 0.063 s | Response grows quickly as U approaches 1 |
| Quadrupled search load | λ = 20, U = 0.96, R = 1.2 s | Slide prints "1900 percent" increase, the numbers give about 1800 percent (about 19 times) |
| Business goal | $130 million merchandise, $3 million ad sales (board goal for next year) | Revenue goal, not traffic goal |
| Store facts (slide 34) | Sells computer components, other electronic products, software and gift items. Last year: merchandise revenue $94,378,000; ad revenue $900,000. 95 percent of customers do not buy. Special events: traffic up to 400 percent of ordinary days. | "95 no, 400 peak" |
| Revenue per second | $130,000,000 / 31,536,000 = $4.122 per second. (The slide prints 13,000,000 by mistake; 4.122 needs 130,000,000.) | Use 130 million |
| Sessions per second | 4.122 / (0.046 x 225) = 0.398 sessions per second | Divide by BV x average sale |
| Requests per second | 0.398 x 8.144 = 3.241 requests per second on a normal day | Sessions x requests per session |
| Burst load | 20 x 3.241 = 64.82 requests per second to serve | Burst is 20 times normal |
| Buy-to-visit ratio | 0.046 (4.6 percent) in the store case | Buyers per visitor |
| Average sale | $225 in the store case | Sale per buyer |
| Information gain (buys_computer) | Info(D) = 0.940 (9 yes, 5 no). Info_age = 0.694. Gain: age 0.246, student 0.151, credit rating 0.048, income 0.029. | Highest gain goes to the root (age) |
| Age partitions | 30 or under: 5 customers, 2 buy. 31 to 40: 4 customers, all buy. Over 40: 5 customers, 3 buy. | 2, 4, 3 buyers |
| Assignment gains (slide 73) | Type 0.558, Language 0.186, Category 0.073. | Type is the root |

### Lists (with memory tricks)

| List | Items | Memory trick |
|---|---|---|
| 3 factors of future workload | Natural evolution of existing workload; deployment of new applications and services; changes in customer behavior | "Grow, Launch, Behave" |
| 3 elements of adequate capacity | Service level agreement; specified technologies and standards; cost constraints | "Service, Tech, Cash" |
| 4 parts of the SLA | Performance; quality of service; scalability; bottleneck analysis | "Perform, Quality, Scale, Bottleneck" (a restaurant review) |
| QoS items (6) | Site availability; cost of unavailability; single points of failure; minimum configuration; MTTF; MTTR | "Is it up? What does down cost? One weak link? Smallest setup? How long until it breaks? How long to fix?" |
| 6 capacity-planning steps | Characterize customer behavior; characterize site workload; workload forecasting; develop performance models; obtain performance parameters; predict performance and check QoS | "Can Some Folks Make Perfect Pancakes" (C, S, F, M, P, P) |
| Workload characterization steps (5) | Draw the CSID; find service demand per resource; rank the most demanding functions; find bottleneck and site throughput; find average throughput | "Draw, Sum, Rank, Bottleneck, Average" |
| Workload forecasting steps (5) | Visual inspection of data; choose forecasting models; forecast each business function; feed forecasts into performance and workload models; plan for future waves | "Look, Choose, Split by function, Feed, Plan waves" |
| Queuing network use cases | More realistic; depends on how much detail you need; depends on the data you have | "Real but needs data" |
| 7 recommender types | Popularity; content-based; collaborative filtering; association-based; demographics-based; reputation-based; hybrid | "Pete Can Cook After Dinner, Really Hungry" (P, C, C, A, D, R, H) |
| 3 recommendation decisions | Prediction; Top-N; Top-M users | "Predict one, Name N items, Name M users" |
| Elements of a recommendation scenario | Users (with demographics); items (with features); preferences (explicit or implicit) | "Who, What, How much they liked" |
| 4 content-based phases | Feature extraction and selection; representation; user profile learning; recommendation generation | "Fresh Rice Pudding Recipe" (F, R, P, R) |
| Adaptive learners (3) | Multiple linear regression; decision tree induction; back-propagation neural networks | "Lines, Trees, Brains" |
| Extrinsic feature examples | Category, MPAA rating, Maltin rating, Academy award, length, origin, director | "Label on the packet" |
| Feature-selection methods for extrinsic features (3) | Stepwise statistical regression (forward and backward); genetic algorithm; attribute selection in decision trees | "Step, Gene, Tree" |
| Stopping conditions (3) | Same class; no attributes left (majority vote); no samples left | "Agree, Out of questions, Empty room" |
| Decision tree algorithm facts | Greedy; top-down; recursive divide-and-conquer; attributes categorical (discretize continuous first) | "Greedy, Top-down, Split, Stop" |

### Definitions and quotes from the slides

| Term | Slide wording (paraphrased closely) | Memory trick |
|---|---|---|
| Capacity planning | "The process of predicting when the future load level will saturate the system and determining the most cost-effective way of delaying system saturation as much as possible." | Predict first, then delay cheaply |
| Scalable infrastructure | "Provides adequate service level even when the work load increases above the expected level." | Works above the expected load |
| Prediction is the key | Slide 15: "Prediction is the key to capacity planning." | Predict before you buy |
| Recommender system | "Suggest items (information, products and services) that are of interest to the users." | Suggest what they will like |
| Content-based approach | "Recommends the items similar to those liked by the user in the past." | Similar to what they liked |
| CBMG states | "Each node represents a state consisting of one or more pages." | A node is a room |
| Dangling link | "Represents the connection to the Exit state." | Dangling = leaves the site |
| Trapping state | Used to delete Exit from P to form P' | One-way door |
| Information gain | "Select the attribute with the highest information gain." | Most confusion removed |

### Example companies and cases

| Name | What it illustrates | Memory trick |
|---|---|---|
| Double-click.com | Early commercial use of personalized banner ads | "Double click on your ad" |
| CDnow.com | Early commercial recommender for music albums | "CD now" for music |
| Amazon.com | Early commercial recommender for books | Books |
| GroupLens (Resnick, Konstan) | Personalized recommendations for Usenet news items | Usenet news |
| Citeseer (Rucker and Pollano) | Recommending relevant articles | Articles |
| Social information filtering (Upendra Shardanand and Pattie Maes) | Automating "word of mouth", recommending music albums | Word of mouth |
| Example-I site (five-plus states) | A CBMG with Entry, Home, Product Catalog, Shopping Cart, Select, Pay, Exit | Walk the states in order |
| Example-II (five states, six clusters) | The site has Browse product (b), Search product (s), Select product, Add to cart (a), Pay; sessions clustered into 6 groups with one CBMG each | Five states, six clusters |
| Store capacity case (slide 34) | Sells computer components, electronics, software and gift items; merchandise and banner ad revenue | "Store with two kinds of revenue" |
| Online song store (slides 72 and 73) | Assignment: classical and rock songs, Hindi, English and Telugu languages | Buy or not, by type then language |
| Digital music in MP4 format | MP4 (a standard digital media file format). A new downloadable product; plan capacity before launch | Launch needs capacity first |

### Example-II table (slide 12, as the exam reads it)

The slide text is jumbled in the text copy, so the table below is the reading the mock answers use. Mock Q13 and Q14 use the rows as shown.

| Cluster | % of sessions | Buy-to-visit ratio (the "Va" row, which the mock calls buy-to-visit) | "Vb + Vs" row (the mock calls the last number session length) |
|---|---|---|---|
| 1 | 44.28 | 5.7 | 5.6 |
| 2 | 28 | 4.5 | 15 |
| 3 | 10.6 | 3.7 | 27 |
| 4 | 9.29 | 4 | 28 |
| 5 | 6.2 | 3.5 | 50 |
| 6 | 1.5 | 2 | 81 |

Two more rows (11, 15, 21, 20, 32, 50 and 3.6, 11.4, 20, 23, 39, 70) have labels lost in the text copy. None of the mock questions use them.

What the table says, in the exam's sense: cluster 1 is the biggest group and has the highest buy-to-visit ratio. Cluster 6 is the smallest group (1.5 percent) with the lowest buy-to-visit ratio and the longest session. That combination means long browsing and searching with little buying.

### Slide 36: metrics derived from the CBMG (store case)

The text copy of this table is scrambled, so two labels are lost. The values are listed as printed. Slide 38 uses 0.046 as the buy-to-visit ratio and 8.144 as the average session length.

| Metric | Value as printed |
|---|---|
| V welcome | 2.583 |
| V browse | 2.607 |
| V search | 0.115 |
| V register | 0.046 |
| V checkout | 1.172 |
| V special offer | 0.013 |
| V add to cart | 0.304 |
| Unlabelled value | 1.608 |
| Average session length | 8.144 requests per session |
| Buy-to-visit ratio | 0.046 (4.6 percent) |

### Training data: buys_computer (slide 66, 14 customers, 9 yes and 5 no)

| age | income | student | credit_rating | buys_computer |
|---|---|---|---|---|
| <=30 | high | no | fair | no |
| <=30 | high | no | excellent | no |
| 31...40 | high | no | fair | yes |
| >40 | medium | no | fair | yes |
| >40 | low | yes | fair | yes |
| >40 | low | yes | excellent | no |
| 31...40 | low | yes | excellent | yes |
| <=30 | medium | no | fair | no |
| <=30 | low | yes | fair | yes |
| >40 | medium | yes | fair | yes |
| <=30 | medium | yes | excellent | yes |
| 31...40 | medium | no | excellent | yes |
| 31...40 | high | yes | fair | yes |
| >40 | medium | no | excellent | no |

### Training data: online song store (slide 73, the assignment)

| Category | Type | Language | Purchased |
|---|---|---|---|
| Movie | Classical | Hindi | Yes |
| Movie | Classical | Hindi | Yes |
| Album | Rock | English | No |
| Movie | Classical | English | Yes |
| Album | Classical | Hindi | Yes |
| Movie | Classical | Telugu | No |
| Album | Rock | Hindi | No |
| Movie | Rock | English | No |
| Movie | Classical | English | Yes |

## How this week gets asked

### Question patterns

- **Scenario, then name the model or the recommender type.** Example: a visitor asks for suggestions based on people with the same age, gender and city → demographics-based.
- **Which is NOT** a factor, an element, an algorithm or a benefit. Examples: which is NOT a future-workload factor (fixed budget), which is NOT an adaptive learner (Apriori), which transition is impossible (Entry straight to Exit).
- **Compute a number.** Utilization, response time, mean time in a state, probability of the next state, sessions per second, burst load, information gain.
- **Correct order.** The four content-based phases, or the six capacity-planning steps.
- **What does X represent?** Limiting state probability, the v matrix, Entry or Exit, the dangling link.
- **Which decision type?** Prediction, Top-N, or Top-M users.
- **Read a small table.** Example-II clusters (highest buy-to-visit, most exploration, lowest conversion).
- **Definitions.** Capacity planning, scalable, bottleneck, service demand, extrinsic and intrinsic features.
- **Named early systems.** Double-click, CDnow, Amazon, GroupLens, Citeseer.

### Distractor traps for this week

- **Absolute words.** "Eliminates the need", "guarantees optimal", "guarantees 100 percent accuracy", "always returns", "only one bottleneck". Real answers in this week's lecture are cautious ("more realistic", "keeps the service level", "limits performance").
- **Answers that are true but answer a different question.** Example: "Classify customers into groups" is true for clustering, but the question asked why queues are used (Bank Q8).
- **Right formula, wrong weights.** A plain average of holding times (300) instead of the probability-weighted one (275). Mock 1 Q5.
- **A count instead of a probability.** 36.0 percent instead of 36/76 = 47.4 percent. Mock 3 Q13.
- **Half the answer.** Entropy of the whole set (0.940) or weighted entropy after the split (0.694) instead of the gain (0.246). Mock 2 Q10.
- **Forgetting the multiplier or mixing up the stage.** Mock 2 Q9: 3.24 is the normal-day load, so leaving out the 20x burst is the trap (the answer is 64.82). Mock 3 Q10: 4.122 is revenue per second, not sessions per second (the answer is 0.398).
- **Units.** 20 ms used as 20 seconds (or 0.02 used as 20 ms). Mock 1 Q8.
- **Concepts from a different week or a different tool.** Apriori (association rules, not a user-profile learner), clustering (groups sessions) versus decision tree (predicts a class).
- **Exit and Entry rules.** "Exit always returns to Home" (false; Exit goes to Entry or stays). "Entry to Exit is allowed" (false, it is the rule-breaking transition).

### If the question says ___, pick the option about ___

1. "Dummy start", "beginning of a session", "gate" → **Entry**. "Dummy end", "ends the session", "dangling link" → **Exit**.
2. "Impossible transition", "rule", "Entry directly to Exit" → **p_1n = 0**, Entry cannot jump to Exit.
3. "Expected time before making a transition" with branch holding times → **weighted sum of p_ij x z_ij**. With (count, think time) pairs → **total think time / total count**.
4. "Probability of the next state" → **that branch's count / total count leaving the state**. Example: 36/76 for Product Catalog to Exit.
5. "Requests per second" and "service time" → **utilization U = λ x S**. Then "response time" → **R = S / (1 - U)**.
6. "Traffic grows by a factor" → **multiply λ, recompute U, then R**. A big jump in U makes R explode.
7. "Scalable", "bottleneck", "single point of failure" → the QoS and SLA definitions above.
8. "Items bought together" → **association-based**. "Similar taste, other users" → **collaborative filtering**. "Similar age, gender, city" → **demographics-based**. "Respected or endorsed" → **reputation-based**. "Same list for everyone, most popular" → **popularity-based**. "Features of the item" → **content-based**.
9. "Extrinsic" → **typed in by hand** (director, MPAA rating). "Intrinsic" → **pulled out of the text** (nouns, noun phrases).
10. "Highest information gain" → **root of the tree**. "Stop when everyone agrees, no questions left, or no samples" → **the three stopping conditions**.

## Practice walk-through

**Q1.** Which transition breaks the standard rules of a CBMG with Entry and Exit?
- Answer: C) A transition directly from Entry to Exit without visiting any intermediate state
- Why: Entry can never go straight to Exit (the CBMG rules in "How it flows" section 2). Exit may go back to Entry, which is allowed.
- Trap: A) Exit back to Entry is allowed, because a new session starts from Entry.

**Q2.** What is the expected time spent in the Product Page (State 3) before a transition, from the counts (50, 350), (35, 280) and (20, 160)?
- Answer: D) 7.5 seconds
- Why: Use total think time over total count (rule B). (350 + 280 + 160) / (50 + 35 + 20) = 790 / 105 = 7.52 seconds.
- Trap: C) 7.0 is only the first branch (350 / 50), ignoring the other two exits.

**Q3.** With 20,000 visitors, a 4 percent buy-to-visit ratio and an average purchase of ₹2,500, what is the expected revenue?
- Answer: B) ₹20 lakh
- Why: 20,000 x 0.04 = 800 buyers, and 800 x ₹2,500 = ₹20,00,000 = ₹20 lakh (buy-to-visit ratio and revenue formula).
- Trap: D) ₹2 crore is ten times too big (a place-value slip).

**Q4.** A segment has very high Vb and Vs values. What does it most likely indicate?
- Answer: D) Customers engage extensively in exploration before making decisions
- Why: Vb (browsing) and Vs (searching) measure exploration (Example-II and the Vb and Vs card).
- Trap: A) Immediate exit after login is the opposite of high browsing and searching.

**Q5.** Why are queuing network models preferred over single-queue models for large e-business infrastructures?
- Answer: C) They can represent multiple interacting resources and provide a more realistic performance model
- Why: The slide says queuing networks are "more realistic" and each resource is a queue (performance modeling card).
- Trap: A) "Eliminate the need to estimate service times" is wrong, because every queue still needs service times, and the word "eliminate" is a red flag.

**Q6.** After forecasting future workload and the expected arrival rate, what is the next step in capacity planning?
- Answer: D) Evaluate performance measures such as waiting time, utilization, and bottlenecks against quality-of-service requirements
- Why: Step 6 of the six steps is the performance check against QoS (Steps list and decision loop).
- Trap: A) Buying hardware immediately skips the check. You first see whether the targets are met, then decide what to change.

**Q7.** What is the primary objective of capacity planning for an online retailer expecting rapid growth?
- Answer: C) Predicting when workload may exceed available resources and planning accordingly
- Why: The definition of capacity planning: predict saturation and delay it cost-effectively.
- Trap: The other options are about colours, demographics and prices, which are not capacity planning.

**Q8.** Why are resources often represented as queues in performance models?
- Answer: D) To analyze waiting times, utilizations, and response times systematically
- Why: Each resource is modeled as a queue so that the model can produce waiting time, utilization and response time (performance modeling card).
- Trap: A) Classifying customers into groups is clustering of sessions, not queuing.

**Q9.** A recommender predicts how much a specific user will like an unseen movie, based on past ratings. What decision is this?
- Answer: D) Prediction of a user's preference for an unrated item
- Why: Prediction is the decision for one active user and one unrated item (recommendation decisions card).
- Trap: A) Top-M users finds users for a new item, not a score for one user.

**Q10.** 600 candidate features are reduced to the top 80 by TF-IDF scores. Why keep only 80?
- Answer: B) To remove less informative features and improve the efficiency of learning.
- Why: Feature selection keeps the top k scores so the learner works on fewer, more useful features (Feature selection for text card).
- Trap: C) "Guarantee that the recommendation accuracy becomes 100%" is an absolute claim that can never be guaranteed.

## 60-second recap

- CBMG = a map of visitor moves between states, with Entry (start) and Exit (end) as dummy states.
- CBMG rules: Entry is never reached except from Exit; Entry never jumps straight to Exit; Exit only stays at Exit or goes to Entry.
- Expected time in a state = sum of (probability x holding time) over all exits. For (count, think time) pairs, use total time over total count.
- Product Catalog to Exit = 36/76 = 47.4 percent. Shopping Cart mean time = 275 seconds.
- Capacity planning = predict saturation and delay it as cheaply as possible. Three forces: natural growth, new applications, changing behavior.
- Adequate capacity = service level agreement + technologies and standards + cost. The SLA covers performance, QoS, scalability and bottleneck analysis.
- Scalable = still adequate when load is above the expected level. Bottleneck = the resource that limits maximum throughput.
- Single queue: U = λ x S, R = S / (1 - U). Quadruple the load of 5 per second to 20 per second: U = 0.96, R = 1.2 seconds.
- Business chain: $130M / 31,536,000 = $4.122 per second, / (0.046 x 225) = 0.398 sessions per second, x 8.144 = 3.241 requests per second, x 20 burst = 64.82.
- Seven recommender types: popularity, content-based, collaborative, association, demographics, reputation, hybrid.
- Three recommendation decisions: prediction (one unrated item), Top-N (N items for a user), Top-M users (M users for a new item).
- Content-based phases: feature extraction and selection, representation, user profile learning, recommendation generation.
- Extrinsic features are typed in by hand; intrinsic features are pulled from content. TF*IDF = TF x IDF, keep the top k.
- Decision tree: greedy, top-down; split on highest information gain; stop when pure, no attributes (majority vote), or no samples.
- buys_computer: Info(D) = 0.940, gain(age) = 0.246, the root is age. Over 40 with fair credit buys.

---
Coverage check: 45/45 mock questions answerable from this guide.
