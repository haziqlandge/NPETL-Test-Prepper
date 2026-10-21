Week 11
Mock 1
Q1) Which recommendation approach performs most of its heavy computation offline and underlies Amazon's recommendations?
A) Item-item collaborative filtering
B) User-user collaborative filtering
C) Content-based filtering with text features
D) Popularity-based ranking
Correct: A

Q2) Which is NOT one of the three phases of user-user collaborative filtering?
A) Dimension reduction
B) Neighborhood formation
C) Recommendation generation
D) Warehouse slotting optimization
Correct: D

Q3) What is the main purpose of dimension reduction in user-user collaborative filtering?
A) To increase the number of items each user has rated
B) To replace the need for any similarity measure
C) To address sparsity and scalability problems in the preference matrix
D) To convert explicit ratings into implicit purchase counts
Correct: C

Q4) A retailer's product taxonomy leaves some categories with very few transactions and others with thousands. What does the adjusted product taxonomy method aim to produce?
A) A taxonomy with only a few top-level categories
B) A modified taxonomy in which transactions are spread more evenly across categories
C) A taxonomy that drops every category with fewer than 100 transactions
D) A taxonomy in which every product forms its own category
Correct: B

Q5) Latent semantic indexing reduces the customer-by-item preference matrix to a lower-dimensional matrix of meta-items. Which mathematical technique does it use?
A) Singular value decomposition giving a rank-d approximation
B) Breadth-first search over the item taxonomy tree
C) Linear programming over bidder valuations
D) Binary decision tree induction using information gain
Correct: A

Q6) Which of the following is NOT a similarity measure listed for neighborhood formation?
A) Constrained Pearson correlation
B) Cosine similarity
C) Spearman rank correlation
D) Gini impurity
Correct: D

Q7) A recommender keeps as neighbours every user whose similarity coefficient exceeds a fixed absolute cutoff. Which neighborhood formation method is this?
A) Center-based best-k neighbours
B) Aggregate-based best-k neighbours
C) Weight threshold method
D) Latent semantic indexing
Correct: C

Q8) An active user's average rating is 3.0. Neighbour 1 has similarity 0.5 with the active user, an average rating of 4.0, and rated item j a 5. Neighbour 2 has similarity 0.25, an average rating of 3.0, and rated item j a 2. Using the weighted average with deviations from the mean, what is the predicted rating of item j for the active user?
A) 3.25
B) 3.33
C) 3.67
D) 4.00
Correct: B

Q9) Several sellers offer the same item at different prices at the same time. Which type of price dispersion is this?
A) Spatial price dispersion
B) Temporal price dispersion
C) First-degree price differentiation
D) Second-degree price differentiation
Correct: A

Q10) A target item j is predicted for an active user who rated two items similar to j: item X with a rating of 5 (similarity 0.6 to j) and item Y with a rating of 3 (similarity 0.3 to j). Using the item-item weighted sum, what is the predicted rating for j?
A) 3.90
B) 4.00
C) 4.33
D) 4.50
Correct: C

Q11) Which similarity measure does Amazon's item-to-item algorithm use?
A) Mean-square difference between the two users' rating vectors
B) Cosine of the angle between item vectors
C) Spearman rank correlation computed over commonly rated items
D) Weight threshold applied to the neighbour list
Correct: B

Q12) Why is building a full product-to-product similarity table by comparing every pair of products inefficient at Amazon's scale?
A) Many product pairs have no common customers, wasting computation and memory
B) Similarity can only be computed for products sold in the same month
C) Cosine similarity can take only two values
D) Every customer must be contacted before any pair is compared
Correct: A

Q13) A store has 5 transactions. Item A appears in 3 of them, item D appears in 4, and A and D appear together in 3. What is the confidence of the rule A -> D?
A) 60%
B) 75%
C) 80%
D) 100%
Correct: D

Q14) A market-basket analysis uses a minimum support of 20% over 10 transactions. The itemset {milk, bread} appears in only 1 transaction. Should the analyst count the support of {milk, bread, butter}?
A) Yes, because adding an item can only raise support
B) Yes, but only if butter appears in the same transactions as bread
C) No, because any superset of an infrequent itemset cannot be frequent
D) No, because support is measured only for pairs of items
Correct: C

Q15) Amazon notes that new customers have only a few purchases while older customers have thousands of ratings. Which recommendation challenge does this illustrate?
A) Items cannot be grouped into product categories, so no similarity can be computed
B) Customer data varies greatly, so the algorithm must handle very little data for new customers
C) Recommendations must be stored indefinitely, even after customers stop buying
D) Customers never change their preferences after their first purchase
Correct: B

Mock 2
Q1) In the Apriori algorithm, which step removes candidate k-itemsets that have any (k-1)-subset that is not frequent?
A) Join
B) Prune
C) Initial database scan
D) Confidence filtering
Correct: B

Q2) In association rule mining, what is the support of a rule X -> Y?
A) The fraction of transactions containing both X and Y
B) The fraction of transactions containing X that also contain Y
C) The number of distinct items on the right-hand side
D) The lift of Y relative to the whole database
Correct: A

Q3) Which is NOT one of the three major approaches to mining association rules?
A) Apriori algorithm
B) Frequent pattern growth
C) Vertical data format approach
D) K-means clustering
Correct: D

Q4) For association-based Top-N recommendations, how are candidate items ordered?
A) By the number of customers who viewed the item in the last month, regardless of rules
B) Alphabetically by item name
C) By confidence with respect to matched rules, so items in more rules rank higher
D) By the item's list price, highest first
Correct: C

Q5) Which is a typical application of demographics-based recommender systems?
A) Target advertising in an electronic storefront
B) Scheduling warehouse shifts
C) Estimating the weight of shipped parcels
D) Detecting duplicate product photographs
Correct: A

Q6) How does demographics-based recommendation differ from most other recommendation approaches?
A) It ignores user preferences entirely
B) It makes recommendations at the category level instead of the item level
C) It can only be used for products that have detailed text descriptions available
D) It requires users to rate every item they purchase
Correct: B

Q7) Which is NOT one of the data transformation methods listed for demographics-based recommendation?
A) Counting-based (frequency threshold) method
B) Expected value method
C) Statistics-based method
D) Pearson-correlation clustering of users
Correct: D

Q8) Using the counting-based method with threshold w = 3, a user has 2 favourite items in Outerwear, 4 in Perfumes, and 3 in Bags. Which categories receive a category preference value of 1?
A) Perfumes only
B) Bags and Perfumes
C) Outerwear and Bags
D) All three categories
Correct: B

Q9) In a market, what defines the equilibrium price?
A) Producers sell at the highest price buyers are willing to pay
B) Buyers pay the lowest price offered by any seller
C) Consumers buy only at a price equal to the cost of production
D) The quantity supplied equals the quantity demanded
Correct: D

Q10) In seller-driven web personalization, who decides the personalization rules?
A) The buyer, through a configuration page that sets personal browsing rules
B) An independent regulator that approves all personalization rules
C) The seller, who uses them for cross-selling and up-selling
D) The web browser vendor, through its default privacy settings
Correct: C

Q11) In the personalization process, which step applies data-mining techniques such as clustering, classification, association rule mining and sequential pattern discovery to build user profiles?
A) Data collection
B) Preprocessing
C) User profiling
D) Personalized output
Correct: C

Q12) Which data collection approach in personalization is non-reactive (implicit)?
A) Asking users to complete a detailed preference questionnaire after each visit
B) Recording pages visited and time spent without asking the user
C) Showing a pop-up asking users to rate products
D) Asking users to choose their interests at sign-up
Correct: B

Q13) A news site changes which articles appear on each reader's homepage based on past reading, and it rearranges the navigation hierarchy for frequent readers. Which types of personalization are being used?
A) Content and structure personalization
B) Layout-only personalization
C) Media-format-only personalization
D) Buyer-driven personalization only
Correct: A

Q14) Which statement best defines dynamic pricing?
A) Buying and selling in free markets, where prices fluctuate with changing supply and demand
B) Charging one fixed price for each product for its entire life cycle, regardless of demand
C) Setting every price as a fixed markup over unit cost, with no change over time
D) Setting prices once a year by government decree for all sellers in the market
Correct: A

Q15) A telecom company charges one per-minute rate to business customers and a different per-minute rate to households, with the same rate for every minute used within each group. Which type of price differentiation is this?
A) First-degree (perfect) differentiation
B) Second-degree (non-linear) differentiation
C) Third-degree (group) differentiation
D) Spatial price dispersion
Correct: C

Mock 3
Q1) How far back does the lecture trace the history of auctions?
A) Only to the 1970s, when economists began designing bidding strategies
B) Only to 1994, when the FCC began its radio spectrum auctions
C) Only to the commercial internet boom of the late 1990s
D) At least 500 BC, to the Babylonian auctions
Correct: D

Q2) In an auction where one seller offers an item to many competing buyers, what is the auction called?
A) Reverse auction
B) Forward auction
C) Double auction
D) Multi-attribute auction
Correct: B

Q3) Which auction is an ascending-bid auction that can use a reserve price and bid increments?
A) English auction
B) Dutch auction
C) First-price sealed-bid auction
D) Second-price sealed-bid auction
Correct: A

Q4) In the 1990 New Zealand spectrum auction, which was run as a Vickrey auction, the winning bid was NZ$100,000 and the second-highest bid was NZ$6. What did the winner pay?
A) NZ$100,000
B) NZ$50,003
C) NZ$6
D) NZ$100,006
Correct: C

Q5) Which payment rule requires every bidder to pay their bid, whether or not they win?
A) First price
B) Second price
C) All pay
D) Fixed fee
Correct: C

Q6) In a multi-unit auction, what does an agent's preference structure capture?
A) The order in which bids are received during the auction session
B) That marginal utility may fall for each additional unit won
C) The total number of bidders registered for the auction
D) The exact time limit after which bidding closes for all participants
Correct: B

Q7) A buyer bids on a basket of items that is awarded only if every item in the basket is won. Which bid structure is this?
A) All-or-nothing basket bid over several items
B) Single-item, single-unit price bid
C) Volume-discount price schedule
D) Quantity-only bid with no price
Correct: A

Q8) In winner determination with single sourcing, the matching problem reduces to which kind of problem?
A) A knapsack problem
B) A set packing problem
C) A shortest path problem
D) A sorting problem
Correct: D

Q9) A first-price sealed-bid auction gives bidders no information about others' bids while bidding. Which information-feedback category does it belong to?
A) Indirect mechanism with provisional-allocation feedback
B) Indirect mechanism with price-signal feedback
C) Dynamic mechanism with continuous clearing
D) Direct mechanism with no feedback
Correct: D

Q10) A retailer's unit cost is $60. Using markup pricing with a 25% markup on sales, what unit price should it charge?
A) $75
B) $80
C) $85
D) $120
Correct: B

Q11) A firm invests $500,000 in capital and wants a 20% return on it. Its unit cost is $40 and it expects to sell 10,000 units. Using target return pricing, what unit price should it set?
A) $10
B) $40
C) $50
D) $60
Correct: C

Q12) Which is NOT a condition under which dynamic pricing is likely to succeed?
A) Customers are heterogeneous in their willingness to pay for the same product
B) The market can be segmented into groups with distinct price sensitivities
C) Reselling at a higher price is prohibited for all buyers of the product
D) The cost of segmenting prices exceeds the revenue from customization
Correct: D

Q13) In e-commerce, which capability is shared by buyers and sellers for dynamic pricing?
A) Instant negotiation of price through auctions and exchanges
B) Instant search for substitutes that fit a budget
C) Monitoring customer behaviour to tailor prices
D) Changing prices on the fly after sensing demand
Correct: A

Q14) E-commerce reduces the "menu cost" of dynamic pricing. What does menu cost refer to?
A) The cost of printing paper catalogues
B) The cost of informing customers about a changed price
C) The cost of training staff to take orders
D) The fee charged by auction intermediaries
Correct: B

Q15) Which dynamic-pricing success story negotiates with major airlines to fill vacant seats at their marginal revenue?
A) Priceline.com
B) Amazon.com's DVD pricing
C) Buy.com
D) Netflix.com
Correct: A
