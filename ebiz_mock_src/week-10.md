Week 10
Mock 1
Q1) In a Customer Behavior Model Graph (CBMG), what do the Entry and Exit states represent?
A) Two dummy states marking the beginning and end of a user session
B) The two most frequently visited product pages on the site
C) Server nodes that handle login and logout requests
D) Clusters of sessions with the longest accumulated think time
Correct: A

Q2) In a CBMG, what does a dangling link leaving a state represent?
A) A transition that was never recorded in the server log
B) A return from that state to the Entry state
C) A connection from that state to the Exit state
D) A repeated visit to the same page within one session
Correct: C

Q3) Which transition is impossible according to the properties of a CBMG transition probability matrix?
A) A transition from the Exit state back to the Entry state
B) A transition from the Entry state directly to the Exit state
C) A transition from the Entry state to a browsing state
D) A transition from the Product Catalog state to the Shopping Cart state
Correct: B

Q4) The mean holding time matrix Z gives the time attached to each transition in a CBMG. Which expression gives the mean time a visitor spends in state i before making a transition?
A) The largest single holding time z_ij among the branches leaving state i
B) The sum over j of z_ij, the holding times of all branches entering state i
C) The total accumulated think time across all sessions divided by the number of states
D) The sum over j of p_ij times z_ij, the transition-probability-weighted holding times
Correct: D

Q5) In the Example-I CBMG, the Shopping Cart state sends 5 of its 20 transitions to Product Catalog (holding time 100 s), 5 to Pay (holding time 600 s), and 10 to Exit (holding time 200 s). What is the mean time a visitor spends in Shopping Cart before making a transition?
A) 275 seconds
B) 300 seconds
C) 250 seconds
D) 340 seconds
Correct: A

Q6) Which description best defines capacity planning for an e-business site?
A) Measuring the average think time of visitors on each page of the site
B) Purchasing the largest servers available before any traffic data has been collected
C) Predicting when load will saturate the system and choosing the cheapest way to delay it
D) Reducing the number of pages on the site so that every server handles less load
Correct: C

Q7) A retailer expects its future site workload to grow. Which of the following is NOT one of the factors that determine future workload?
A) Natural evolution of the existing workload
B) Deployment of new applications and services
C) Changes in customer behavior
D) Fixed budget limits set by the finance department
Correct: D

Q8) A payment server receives 30 requests per second, and each request needs 20 ms of service time on average. Treating the server as a single queue, what is its utilization?
A) 0.02
B) 0.6
C) 0.4
D) 1.5
Correct: B

Q9) A search function on a site currently receives 5 requests per second, with a mean service time of 48 ms, giving a mean response time of about 0.063 s. If the request rate quadruples, what is the approximate new mean response time?
A) 1.2 seconds
B) 0.96 seconds
C) 2.4 seconds
D) 0.25 seconds
Correct: A

Q10) Which type of recommender suggests items that are often bought together with items a user has already purchased, based on co-occurrence patterns in past transactions?
A) Content-based recommender
B) Popularity-based recommender
C) Reputation-based recommender
D) Association-based recommender
Correct: D

Q11) Which statement about popularity-based recommender systems is correct?
A) They personalize every list using each user's own rating history
B) They recommend the items most popular within a community and are non-personalized
C) They require items to be described by text features extracted from their content
D) They match each new user's demographic profile to existing customers
Correct: B

Q12) Which early commercial implementation used personalized banner ads?
A) CDnow.com
B) Amazon.com
C) Double-click.com
D) Citeseer
Correct: C

Q13) A recommender estimates how much a particular active user would like an item the user has not yet rated. Which type of recommendation decision is this?
A) Prediction
B) Top-N recommendation
C) Top-M users
D) Hybrid blending
Correct: A

Q14) A research portal recommends articles only from authors whom each reader has endorsed, using a matrix that records which users each reader respects. Which type of recommender system is this?
A) Demographics-based
B) Reputation-based
C) Collaborative filtering
D) Content-based
Correct: B

Q15) A new visitor to an online bookstore has not rated or bought anything yet, but the store knows the visitor's age group, gender, and city. The store wants suggestions based on the purchases of customers with similar profiles. Which approach fits best?
A) Association-based recommendation from the visitor's shopping cart
B) Content-based recommendation using extracted book text features
C) Popularity-based recommendation using store-wide top sellers
D) Demographics-based recommendation using similar customers' profiles
Correct: D

Mock 2
Q1) What is the correct order of the phases in content-based recommendation generation?
A) User profile learning, feature extraction and selection, recommendation generation, representation
B) Feature extraction and selection, representation, user profile learning, recommendation generation
C) Representation, recommendation generation, feature extraction and selection, user profile learning
D) Recommendation generation, user profile learning, representation, feature extraction and selection
Correct: B

Q2) For a movie recommender, which of the following is an extrinsic feature, specified directly for each film?
A) Nouns and noun phrases extracted from the plot summary
B) Word frequencies found in the film's user reviews
C) Term weights computed from the subtitles
D) Director, MPAA rating, and running length
Correct: D

Q3) Which evaluation measure combines within-document term frequency with inverse document frequency when selecting text features?
A) TF*IDF
B) Information gain
C) Cosine similarity
D) Document frequency alone
Correct: A

Q4) In content-based recommendation, which phase establishes the relationship between user preference scores and item features?
A) Feature extraction and selection
B) Representation of the training data set
C) User profile learning
D) Recommendation generation
Correct: C

Q5) Which of the following is NOT among the adaptive learning algorithms listed for building a content-based user profile?
A) Multiple linear regression
B) Apriori frequent itemset mining
C) Decision tree induction
D) Back-propagation neural networks
Correct: B

Q6) A content-based system must produce a Top-N list for an active user. Which condition must the list satisfy?
A) It contains only items the active user has not already rated or chosen
B) It contains only items the active user rated most recently
C) It contains only the items with the highest average rating across all users
D) It contains only items whose features exactly match the user's age and gender
Correct: A

Q7) In the representation phase, how should the training data set for user profile learning be prepared?
A) Item features are dependent variables, and the user's preference rating is an independent variable
B) Both item features and preference ratings are independent variables
C) The preference rating is independent, and the number of nouns in the text is dependent
D) Item features are independent variables, and the user's preference rating is the dependent variable
Correct: D

Q8) In basic decision tree induction, how is the test attribute chosen at each node?
A) A random attribute is picked to keep the tree balanced
B) The attribute with the most distinct values is always selected
C) A heuristic or statistical measure, such as information gain, selects it
D) The analyst chooses it manually before training starts
Correct: C

Q9) A site's expected system throughput on normal days is 3.241 transactions per second. During a traffic burst, load rises to 20 times the normal level. What request rate must the infrastructure be able to serve during the burst?
A) 16.21 requests per second
B) 64.82 requests per second
C) 3.24 requests per second
D) 162.05 requests per second
Correct: B

Q10) In the buys_computer training data (14 customers: 9 buy and 5 do not), splitting on age gives three partitions: age 30 or under has 5 customers (2 buy), ages 31-40 have 4 customers (all buy), and over 40 has 5 customers (3 buy). The entropy of the full set is 0.940. What is the information gain of the age attribute?
A) 0.246
B) 0.940
C) 0.694
D) 0.151
Correct: A

Q11) The buys_computer decision tree tests age at the root. For age 30 or under it tests student status (no means does not buy, yes means buys). Ages 31-40 always buy. Over 40 it tests credit rating (excellent means does not buy, fair means buys). What does the tree predict for a 45-year-old customer with fair credit rating?
A) Does not buy
B) Cannot be predicted without knowing student status
C) Buys only if the customer is also a student
D) Buys
Correct: D

Q12) Why does decision tree induction use a greedy strategy?
A) It guarantees the globally smallest tree by testing every possible tree
B) It backtracks to revise attributes chosen at higher levels
C) It picks the locally best split at each node without revisiting earlier choices
D) It tests every combination of attribute values before building the tree
Correct: C

Q13) In Example-II, six clusters of sessions were analysed. Which cluster has the highest buy-to-visit ratio?
A) Cluster 4, with a buy-to-visit ratio of 4
B) Cluster 1, with a buy-to-visit ratio of 5.7
C) Cluster 3, with a buy-to-visit ratio of 3.7
D) Cluster 6, with a buy-to-visit ratio of 2
Correct: B

Q14) Cluster 6 accounts for 1.5% of sessions, has the longest average session length (81) among the six clusters, and has the lowest buy-to-visit ratio (2). Which conclusion is best supported?
A) Long cluster 6 sessions are mostly browsing and searching, with the lowest purchase conversion
B) Cluster 6 generates the largest revenue share because its customers buy the most per session
C) Cluster 6 sessions are shorter than average, so checkout capacity should be reduced
D) Cluster 6 customers mostly move from the Entry state straight to the Exit state
Correct: A

Q15) In a CBMG, what does the limiting state probability of a state represent?
A) The total number of transitions a session makes before it ends
B) The average think time spent in that state per visit
C) The long-run probability that a customer visits that state
D) The probability that a session is assigned to a given cluster
Correct: C

Mock 3
Q1) An e-business infrastructure is described as scalable when:
A) It uses only one bottleneck resource to serve all requests
B) It has the lowest possible purchase cost for the expected workload
C) It can be operated with a single server at all times
D) It keeps the required service levels even when load rises above the expected level
Correct: D

Q2) Handling growing traffic by adding more servers in parallel, rather than upgrading one machine, is called what?
A) Scaling out
B) Scaling up
C) Vertical partitioning
D) Load shedding
Correct: A

Q3) Management sets a server-side response time below 2 seconds and a throughput above 30,000 requests per second. What are these targets examples of?
A) Workload forecasting models
B) Stochastic routing rules that the load balancer applies to incoming requests
C) Lower and upper bounds on performance parameters set by management
D) Single-point-of-failure checks
Correct: C

Q4) Analysing mean time to failure (MTTF) and mean time to repair (MTTR) belongs to which part of defining adequate capacity?
A) Specified technologies and standards
B) Quality of service requirements
C) Cost constraints
D) Customer expectations
Correct: B

Q5) In scalability and bottleneck analysis, what is a bottleneck resource?
A) The resource with the lowest average service time among all site resources
B) The most expensive server in the infrastructure, measured by purchase price
C) The server that handles the largest number of login requests per hour
D) The resource that limits the performance and maximum throughput of the site
Correct: D

Q6) In workload characterization, how is the service demand of a resource computed?
A) The sum of the resource's service times over all references in an e-business function
B) The number of visitors who reach the Exit state after using that resource
C) The average think time between two consecutive transitions in a single session
D) The arrival rate multiplied by the number of users waiting in the queue at that resource
Correct: A

Q7) In performance modelling of a site, which statement is correct?
A) Waiting time and utilization are read from the access log and fed into the model
B) Arrival and service rates come from the access log; response time is an output of the model
C) Service times must be measured by a user survey before modelling
D) The queuing network makes the access log unnecessary
Correct: B

Q8) In the CBMG statistics, what does the matrix v = [I - P']^-1 give?
A) The holding time that the Exit state contributes to each session
B) The probability that a visitor returns to the Entry state after a purchase
C) The mean number of transitions from each state to other transient states before trapping
D) The buy-to-visit ratio of the whole site, computed separately for each cluster
Correct: C

Q9) A company will launch downloadable music in MP4 format on its existing site and wants adequate capacity in place beforehand. Which approach follows the capacity planning method?
A) Forecast the expected new workload and feed it into the performance models
B) Wait for customer complaints about slow pages and then add servers
C) Replace the performance model with the CBMG transition matrix alone
D) Reduce the number of product categories so that existing servers can cope
Correct: A

Q10) A board sets a merchandise revenue goal of $130 million per year. The average sale is $225, and the buy-to-visit ratio is 0.046. Using 31,536,000 seconds per year, how many sessions per second must the site support?
A) 4.122 sessions per second
B) 0.046 sessions per second
C) 3.241 sessions per second
D) 0.398 sessions per second
Correct: D

Q11) Which recommender uses user-to-user correlation based on taste and is also called social information filtering?
A) Demographics-based recommender
B) Collaborative filtering recommender
C) Popularity-based recommender
D) Content-based recommender
Correct: B

Q12) A recommender must decide which M users should receive a newly released item. Which recommendation decision does this describe?
A) Prediction for the active user
B) Top-N recommendation
C) Top-M users
D) Association rule generation
Correct: C

Q13) In Example-I, a visitor is in the Product Catalog state. What is the probability that the next state is Exit?
A) 47.4 percent
B) 36.0 percent
C) 26.3 percent
D) 52.6 percent
Correct: A

Q14) In a CBMG, the Exit state can transition to itself or to the Entry state, and these two probabilities sum to 1. What does this property mean?
A) A session can jump directly from the Exit state to any product state in one step
B) Exit always returns to Home, so no session ever ends in the Exit state
C) Entry must have a self-loop so that visitors can re-enter the site at any time
D) Once a visitor reaches Exit, the process stays there or returns to Entry for a new session
Correct: D

Q15) Why does the CBMG analysis cluster customer sessions before building models?
A) To remove all sessions that ended in a purchase, so only browsing data remains
B) To group sessions with similar navigation so each cluster gets its own CBMG
C) To compute the average holding time for every page on the site
D) To reduce the number of states to exactly two
Correct: B
