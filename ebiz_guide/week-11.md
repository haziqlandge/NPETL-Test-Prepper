# Week 11 — Collaborative Filtering, Association Rules, Demographic Recommenders, Dynamic Pricing and Auctions

## In one breath

This week covers five ways that e-business decides what to show, offer or sell. Collaborative filtering (CF) finds users or items that look alike and borrows their ratings. Association-based recommenders find items that are bought together. Demographic recommenders and website personalization use who the customer is and tailor the site. Dynamic pricing changes the price as demand changes, and auctions are the formal way buyers and sellers bid for a price. The exam mostly asks you to name the method from a short scenario.

**The big analogy:** A village mandi (wholesale market). The trader remembers which buyer takes which goods and who buys alike (CF and association rules), tailors the stall to each regular (personalization), raises or lowers prices through the day as crowds come and go (dynamic pricing), and runs a bidding round for a big lot of produce (auctions).

## Mind map

```text
WEEK 11: CF, association rules, demographics, dynamic pricing, auctions
│
├── 1. COLLABORATIVE FILTERING (CF)
│   ├── Two approaches
│   │   ├── User-user: like-minded users, no offline work, slow
│   │   └── Item-item: buying patterns, heavy work offline (Amazon)
│   ├── User-user phases
│   │   ├── Dimension reduction (fixes sparsity, scalability)
│   │   │   ├── Semi-manual: product features, cluster products
│   │   │   └── Automatic: adjusted taxonomy, latent semantic indexing
│   │   ├── Neighborhood formation (similarity + neighbor method)
│   │   └── Recommendation generation (weighted average)
│   ├── Item-item (Amazon)
│   │   ├── Offline: similar-items table, cosine similarity
│   │   └── Online: aggregate similar items of the user's purchases
│   └── Amazon challenge: millions of items, answer in half a second
│
├── 2. ASSOCIATION-BASED RECOMMENDER
│   ├── Frequent pattern and association rule X -> Y
│   ├── Support (share of all transactions), confidence (share of X)
│   ├── Three mining approaches: Apriori, FP growth, vertical format
│   ├── Apriori: join, then prune (anti-monotone principle)
│   └── Top-N: rules matched to user, RHS items ranked by confidence
│
├── 3. DEMOGRAPHICS-BASED AND WEBSITE PERSONALIZATION
│   ├── Works at category level, not item level
│   ├── Transform: counting (threshold), expected value, statistics
│   ├── One preference model per category (ANN or decision tree)
│   ├── Personalization types: content, structure, layout
│   ├── Approaches: buyer-driven, seller-driven
│   └── Process: collect, preprocess, profile, output
│
├── 4. DYNAMIC PRICING
│   ├── Equilibrium: quantity supplied = quantity demanded
│   ├── E-commerce makes prices change on the fly
│   ├── Price dispersion: spatial, temporal
│   ├── Price differentiation: first, second, third degree
│   ├── Fixed pricing: markup, target return, value, going rate
│   └── Works only under 6 conditions
│
└── 5. AUCTIONS
    ├── History: Babylon to eBay; FCC spectrum; NZ Vickrey (1990)
    ├── Framework: 8 classification dimensions
    ├── Market structure: forward, reverse, double
    ├── Bidding rules: English, Dutch, first-price, second-price
    ├── Payment rules: first price, second price, all pay
    ├── Winner determination: sorting (single) vs combinatorial (multi)
    └── Feedback: direct (none) vs indirect (English)
```

## Concept cards

### 1. Collaborative filtering (CF)

**Collaborative filtering (CF)**
- What it is: a recommender that predicts your preference from the preferences of other users (user-user) or from the ratings of similar items (item-item). It is also called social information filtering.
- Think of it as: asking the friends who have the same taste, or looking at what other people bought next to the product you like.
- Spot it in a question: "like-minded users", "similar taste", "people who rated like you" → CF. Item-item and user-user are the two flavors.

**User-user based CF**
- What it is: finds like-minded users first, then recommends what they liked. Absolutely no offline processing, so it is likely to be slow.
- Think of it as: calling round your friends for their opinion every time you need a suggestion.
- Spot it in a question: "identify like-minded users", "no offline processing", "likely to be slow" → user-user.

**Item-item based CF**
- What it is: finds buying patterns between items. The major computations are done offline, and Amazon's recommender belongs to this category.
- Think of it as: a shop that has already printed the "bought together" list on the shelf tag, so the cashier only looks it up.
- Spot it in a question: "identify buying patterns", "offline processing of major computations", "Amazon" → item-item.

**Dimension reduction (phase 1 of user-user CF)**
- What it is: turning the original user-preference matrix into a lower-dimensional space to fix the sparsity and scalability problems.
- Think of it as: compressing a huge spreadsheet with mostly empty cells into a smaller set of columns that still keep the main patterns.
- Spot it in a question: "sparsity", "scalability", "lower dimensional", "meta-items" → dimension reduction.

**Sparsity problem**
- What it is: users have rated only a tiny fraction of the items, so most cells of the matrix are empty.
- Think of it as: a feedback form where most people have ticked only one box.
- Spot it in a question: "only a tiny fraction of the movies rated", "similarity computations difficult" → sparsity.

**Scalability problem**
- What it is: the matrix is so big (millions of users and items) that similarity computations take too long.
- Think of it as: comparing every shopper with every other shopper in a city.
- Spot it in a question: "millions", "tens of millions", "real time" → scalability.

**Semi-manual dimension reduction**
- What it is: uses product features written by people. You cluster products first, then cluster users. It only works if you have descriptive features.
- Think of it as: sorting the shop by aisle labels before sorting the customers.
- Spot it in a question: "product features", "cluster products first, then users", "descriptive features" → semi-manual.

**Automatic dimension reduction**
- What it is: methods that do the reduction from the data itself. The two named methods are adjusted product taxonomy and latent semantic indexing.
- Think of it as: a machine that groups things for you without asking anyone to label them.
- Spot it in a question: "without product descriptions", "automatic", "singular value decomposition" → automatic.

**Adjusted product taxonomy**
- What it is: an automatic method. Input is the product taxonomy (category tree). Output is a modified taxonomy in which transactions are spread more evenly across categories, by merging small categories.
- Think of it as: merging two nearly empty shelves into one so each shelf has a fair share of customers.
- Spot it in a question: "modified taxonomy with even distribution", "too few transactions in some categories" → adjusted taxonomy.

**Latent semantic indexing (LSI)**
- What it is: an automatic method that reduces the original n x m preference matrix (n users, m items) to a lower-dimensional n x d matrix with d meta-items, where d is less than m. It uses singular value decomposition (SVD) to get a rank-d approximation.
- Think of it as: summarising 300 movies into 3 genre-like groups (meta-items) that still predict who likes what.
- Spot it in a question: "singular value decomposition", "rank-d approximation", "meta-items" → latent semantic indexing.

**Singular value decomposition (SVD)**
- What it is: a matrix maths method that splits a matrix into simpler parts, so you can keep only the strongest d parts (a rank-d approximation).
- Think of it as: keeping only the top few notes of a song that still tell you the tune.
- Spot it in a question: "rank-d approximation" → SVD, the engine inside latent semantic indexing.

**Neighborhood formation**
- What it is: for an active user, compute the similarity between that user and every other user, then keep a group of like-minded users (a proximity-based neighborhood). For LSI, the neighbors are interested in similar meta-items.
- Think of it as: picking the 20 people in the class whose taste looks closest to yours.
- Spot it in a question: "find a list of l like-minded users", "proximity-based neighborhood" → neighborhood formation (phase 2).

**Pearson correlation coefficient (similarity)**
- What it is: a similarity measure that compares how the active user's ratings and another user's ratings move up and down together, using only the items both rated (commonly rated items). Each user's ratings are measured from that user's own mean.
- Think of it as: checking whether two people's star ratings rise and fall together, after allowing for whether one of them is a generous rater.
- Spot it in a question: "Pearson correlation", "commonly rated items", "mean preference" → Pearson.

**Constrained Pearson correlation coefficient**
- What it is: a variant of Pearson listed on the slide. The slide gives only the name. (In textbooks, the constrained version replaces each user's mean with a fixed neutral rating value.)
- Think of it as: Pearson that compares ratings against a fixed middle rating instead of each person's own average.
- Spot it in a question: "constrained Pearson" → a listed similarity measure, so it is not the answer to "which is NOT a similarity measure".

**Spearman rank correlation (similarity)**
- What it is: a similarity measure that uses the ranks of the ratings, not the raw values.
- Think of it as: comparing two people by who ranked which film first, second and third.
- Spot it in a question: "rank correlation" → Spearman.

**Cosine similarity (similarity)**
- What it is: measures the cosine of the angle between two rating vectors. Amazon's item-to-item method uses this measure.
- Think of it as: two people pointing their arrows in nearly the same direction, regardless of how long the arrows are.
- Spot it in a question: "cosine of the angle between the vectors" → cosine similarity (Amazon).

**Mean-square difference (similarity)**
- What it is: a similarity measure based on the average squared difference between two users' ratings. Smaller difference means more similar.
- Think of it as: the average size of the gap between two people's marks.
- Spot it in a question: "mean-square difference", "squared gap" → mean-square difference.

**Weight threshold method (neighbor selection)**
- What it is: set an absolute similarity cutoff. Keep every neighbor whose similarity coefficient is greater than the threshold. The number of neighbors is not fixed.
- Think of it as: admitting everyone who scores above 60 marks, however many that is.
- Spot it in a question: "every user whose similarity exceeds a predefined value", "no fixed number" → weight threshold (Bank Q3, Mock 1 Q7).

**Center-based best-k neighbors**
- What it is: picks the best k neighbors around the active user's profile (a fixed number k).
- Think of it as: choosing exactly 10 class members closest to your profile.
- Spot it in a question: "best-k", "centred on the active user" → center-based best-k.

**Aggregate-based best-k neighbors**
- What it is: picks the best k neighbors based on an aggregate of similarity, again with a fixed number k.
- Think of it as: choosing exactly 10 people by their combined score.
- Spot it in a question: "best-k", "cumulative or aggregate similarity" → aggregate-based best-k.

**Recommendation generation (weighted average, phase 3)**
- What it is: the predicted score for item j is a weighted average of the neighbors' scores, with correlation as the weight. The deviation-from-mean version is: predicted rating of j for active user a = average rating of a + (sum over neighbors of sim(a, i) x (rating of i on j minus average of i)) / (sum of sim(a, i)).
- Think of it as: start from your own average, then move up or down by how much your close friends liked the item compared with their own usual rating.
- Spot it in a question: "weighted average", "deviation from the mean", "correlation as the weight" → recommendation generation (worked in Mock 1 Q8).

**Offline and online processing (CF)**
- What it is: offline is work done before the user arrives (store transactions, build similarity tables). Online is work done while the user waits (find similar users or items and predict).
- Think of it as: the cook prepares the masala in the morning (offline) and only fries the dosa when you order (online).
- Spot it in a question: "offline phase: do nothing, just store transactions", "online phase: identify similar users, predict" → offline/online split.

**Item-item similarity (correlation method)**
- What it is: the same Pearson idea, but on item vectors. You look for users who rated both items and compute the similarity between items i and j.
- Think of it as: "people who liked this and that" checked item by item.
- Spot it in a question: "similarity between items", "users who rated both items" → item-item correlation.

**Item-item similarity is more stable**
- What it is: item-item similarity changes slowly, so it needs fewer updates than user-user similarity.
- Think of it as: the taste of a product line changes slowly, but each person's taste can change every week.
- Spot it in a question: "more stable", "no need for frequent updates" → item-item.

**First-order models and higher-order models (item-item)**
- What it is: first-order models are correlation analysis and linear regression. Higher-order models are belief networks and association rule mining.
- Think of it as: simple tools first (correlation, straight line), then more complex networks and rules.
- Spot it in a question: "correlation analysis or linear regression" → first-order; "belief network or association rule mining" → higher-order.

**Predicting rating with item-item correlation**
- What it is: offline, compute the similarity for every item pair (n(n-1) measures) and keep each item's k most similar items. Online, predict the user's rating for an item as a weighted sum over the similar items the user has rated: sum of sim(i, j) x rating of the user on i, divided by the sum of sim(i, j).
- Think of it as: a score that is the average of your ratings on look-alike items, weighted by how alike they are.
- Spot it in a question: "weighted sum over similar items the user rated" → item-item prediction (Mock 1 Q10).

**Item-to-item CF at Amazon**
- What it is: Amazon's algorithm that builds a similar-items table offline (items customers tend to buy together), then produces recommendations online from that table. It scales to massive data and gives quality results in real time.
- Think of it as: a "customers who bought this also bought" table printed in advance and looked up in a second.
- Spot it in a question: "Amazon", "similar-items table", "item-to-item" → Amazon's item-item CF.

**Amazon's challenge environment**
- What it is: tens of millions of customers, millions of catalog items, answers needed in no more than half a second, new customers with very little data, older customers with thousands of ratings, and volatile data that must be used at once.
- Think of it as: a supermarket that must answer each shopper within half a second while knowing both a newborn shopper's two purchases and a regular's ten years of history.
- Spot it in a question: "new customers have limited information", "older customers a glut of data", "real time" → Amazon challenge (Mock 1 Q15).

**Offline component and online component (Amazon)**
- What it is: offline, the algorithm finds items that customers tend to purchase together and builds the similar-items table. A full product-to-product matrix of every pair is inefficient because many pairs have no common customers. Online, it generates recommendations from the table.
- Think of it as: sorting the pairs that actually sell together, instead of comparing every product with every other one.
- Spot it in a question: "many product pairs have no common customers", "wastes time and memory" → why the full matrix is inefficient (Mock 1 Q12).

**Cosine-based similar-items algorithm (Amazon, slide 23)**
- What it is: for each item I1 in the catalog, look at each customer who bought I1, record each other item I2 that customer bought, then compute the similarity between I1 and I2.
- Think of it as: walking through each receipt that had I1 on it and noting what else was on that receipt.
- Spot it in a question: "for each item, for each customer who bought it, record items bought together" → similar-items table algorithm.

**Complexity and sampling (Amazon)**
- What it is: the offline table is extremely time intensive. Sampling customers who buy best-selling titles cuts runtime further, with little loss of quality.
- Think of it as: checking a sample of the busiest shoppers' bills to learn the pattern, instead of every bill in the city.
- Spot it in a question: "sampling best-selling customers reduces runtime" → sampling.

**Recommendation generation with the similar-items table**
- What it is: find items similar to each of the user's purchases and ratings, aggregate them, then recommend the most popular or most correlated items. The cost depends only on how many items the user has bought or rated.
- Think of it as: for each thing in your basket, look up its partner items and show the most common partners.
- Spot it in a question: "quick, depends only on the number of items the user purchased" → online step of item-item CF.

### 2. Association-based recommender

**Frequent pattern**
- What it is: a pattern (a set of items, subsequences or substructures) that occurs frequently in a data set.
- Think of it as: the same items showing up again and again on different receipts.
- Spot it in a question: "occurs frequently in a data set" → frequent pattern. Frequent pattern analysis is the basis of association rule mining.

**Association rule (X -> Y)**
- What it is: a rule saying that a transaction containing X is likely to also contain Y.
- Think of it as: "if the customer takes the printer, they also take the cartridge".
- Spot it in a question: "customers who buy X also buy Y", "X implies Y" → association rule. Rules are kept only if they pass minimum support and minimum confidence.

**Support (S)**
- What it is: the probability that a transaction contains X and Y together. Formula: number of tuples containing both X and Y, divided by the total number of tuples. The support count is the number of tuples containing both.
- Think of it as: out of all receipts, how many have both items on them.
- Spot it in a question: "fraction of transactions containing X and Y", "support count" → support.

**Confidence (C)**
- What it is: the conditional probability that a transaction having X also contains Y. Formula: number of tuples containing both X and Y, divided by the number of tuples containing X alone (equivalently, support count of XY divided by support count of X).
- Think of it as: of the receipts that already have X, how many also have Y.
- Spot it in a question: "fraction of transactions containing X that also contain Y", "conditional probability" → confidence. Watch the denominator: X only, not the whole database.

**Minimum support and minimum confidence (thresholds)**
- What it is: the cut-offs a rule must pass. The slide example uses both 50 percent.
- Think of it as: a rule must appear often enough (support) and be reliable enough (confidence) to be worth showing.
- Spot it in a question: "minimum support and confidence" → thresholds for keeping rules.

**Itemset**
- What it is: a set of items X = {x1, ..., xk}. A k-itemset has k items.
- Think of it as: a basket with k items in it.
- Spot it in a question: "itemset", "k-itemset", "frequent 2-itemset" → a set of items.

**Apriori algorithm (one of three)**
- What it is: the classic association mining algorithm. It finds frequent itemsets level by level (1-itemsets, then 2-itemsets, and so on), using the Apriori principle to cut the search.
- Think of it as: checking single items first, then only pairs made from items that passed, then triples made from pairs that passed.
- Spot it in a question: "Apriori", "join and prune", "level-wise" → Apriori.

**Frequent pattern growth (FP growth, one of three)**
- What it is: an approach that finds frequent patterns without generating all candidate sets, using a compact tree structure. The slides only name it.
- Think of it as: sorting the receipts into a tree of shared prefixes so the counting is quick.
- Spot it in a question: "frequent pattern growth" → one of the three major approaches.

**Vertical data format approach (one of three)**
- What it is: an approach that stores, for each item, the list of transactions that contain it, and finds frequent sets by intersecting those lists. The slides only name it.
- Think of it as: for each product, a list of receipt numbers, then matching the lists.
- Spot it in a question: "vertical data format" → one of the three major approaches.

**Apriori principle (anti-monotone property)**
- What it is: if an itemset is not frequent (fails minimum support), then adding any item to it cannot make it frequent. In words: if a set cannot pass a test, all its supersets also fail.
- Think of it as: if tea sells too rarely to pass the bar, then "tea and biscuits" cannot sell more often than tea does, so it fails too.
- Spot it in a question: "not frequent, so supersets cannot be frequent", "anti-monotone" → Apriori principle.

**Join step**
- What it is: create candidate k-itemsets C_k by joining frequent (k-1)-itemsets L_(k-1) with themselves.
- Think of it as: pairing up the single items that passed to make candidate pairs, then the pairs that passed to make candidate triples.
- Spot it in a question: "generate candidate k-itemsets by joining" → join.

**Prune step**
- What it is: delete a candidate if any of its (k-1)-subsets is not frequent (the Apriori principle). Then scan the database to count the rest, and delete those below minimum support.
- Think of it as: throwing out a candidate basket as soon as one of its smaller parts already failed.
- Spot it in a question: "removes candidates with a non-frequent subset", "any (k-1)-subset not in L(k-1)" → prune (Mock 2 Q1).

**Apriori algorithm steps (slide 35)**
- What it is: (1) scan the database once to get frequent 1-itemsets C1, prune it, and set L1 = C1. (2) Join, prune and count to make C2, then L2, and so on. (3) Stop when no frequent or candidate set can be generated.
- Think of it as: a sieve, with a finer mesh each time, until nothing passes.
- Spot it in a question: "scan the database once", "continue the join step till no frequent sets" → steps of Apriori.

**Association-based Top-N recommendation**
- What it is: find the rules whose left-hand side (LHS) matches the active user's transactions. Collect the unique items on their right-hand side (RHS). Sort those items by confidence (an item in more matching rules ranks higher). Choose the top N.
- Think of it as: the rules say "if you have X, try Y". Count how often each Y comes up and show the most common ones first.
- Spot it in a question: "candidate items", "RHS of rules supported by the user", "ordered by confidence" → association-based Top-N (Bank Q7, Mock 2 Q4).

**Association-based prediction**
- What it is: an item can be recommended (predicted) if it appears on the RHS of a rule that the active user supports.
- Think of it as: "this item is in the answer of a rule you already fit".
- Spot it in a question: "appears in the RHS of the rules supported by the active user" → prediction.

**Top-M users (association)**
- What it is: the lecture slide leaves this part blank. No decision rule is given.
- Think of it as: a gap in the notes, so do not expect a definition in the exam for this combination.
- Spot it in a question: rare, since the slide is blank here. If it appears, pick the option that says "M users for a new item", the general meaning of Top-M.

**Market basket analysis (application)**
- What it is: a common use of association rules, examining what is bought together in one basket.
- Think of it as: looking at what is on each shopper's bill.
- Spot it in a question: "basket data", "co-occurrence", "printers and cartridges" → basket-data analysis (Bank Q6).

**Applications of frequent-pattern analysis**
- What it is: basket data analysis, cross-marketing, catalog design, sale campaign analysis, web log (click stream) analysis and DNA sequence analysis.
- Think of it as: wherever you see items or clicks appearing together.
- Spot it in a question: "catalog design", "cross-marketing", "click stream" → an application of frequent-pattern analysis.

### 3. Demographics-based recommender and website personalization

**Demographics-based recommender**
- What it is: recommends items to a user based on the preferences of users whose demographics (age, gender, location and so on) are similar to the user's. Recommendations are made at the category level, not the item level.
- Think of it as: "people of your age and city like this category, so try it".
- Spot it in a question: "demographics similar", "category level", "target advertising in an electronic storefront" → demographics-based.

**Category level (versus item level)**
- What it is: recommending a product category (e.g., Perfumes) instead of single items. This gives more generalized information and helps with sparsity.
- Think of it as: suggesting the aisle rather than the specific brand on the shelf.
- Spot it in a question: "at the category level to provide more generalized information", "addresses sparsity" → category level.

**Typical application: target advertising**
- What it is: showing ads to the right group of shoppers in an electronic storefront.
- Think of it as: showing the sports ad to the sports fan.
- Spot it in a question: "target advertising in electronic storefront" → demographics-based application (Mock 2 Q5).

**Demographics-based steps (three)**
- What it is: (1) data transformation: create training examples whose inputs are the user's demographics and whose outputs are the user's category preference. (2) category preference model: induce a model for each category (ANN, decision tree or another induction technique). (3) recommendation generation: give the active user's demographics to the models and reason over them.
- Think of it as: build one quiz per category from the demographic answers, then run the quiz for a new customer.
- Spot it in a question: "data transformation", "category preference model", "recommendation generation" → the three steps.

**Data transformation: counting-based (frequency threshold)**
- What it is: a method that turns item-level preferences into category-level preferences by counting how many favourite items a user has in a category. The category gets value 1 if the count reaches threshold w, otherwise 0.
- Think of it as: a category becomes "a favourite" once you have bought at least w items from it.
- Spot it in a question: "frequency threshold", "count of favourite items in a category, threshold w" → counting-based (Mock 2 Q8).

**Data transformation: expected value method**
- What it is: a method that turns item-level preferences into category-level preferences using an expected value. The slide names it only, with no formula.
- Think of it as: boiling the item scores in a category down to one expected number for that category.
- Spot it in a question: "expected value method" → one of three data-transformation methods.

**Data transformation: statistics-based method**
- What it is: a method that uses statistical measures to build the category-level preference. Named on the slide only.
- Think of it as: summarising the category with a statistical measure instead of a count.
- Spot it in a question: "statistics based method" → one of three data-transformation methods.

**Preference data is mostly binary**
- What it is: the preference data is modelled as discrete values (numerically scaled on user preferences), and it is mostly binary (1 or 0).
- Think of it as: yes or no, like or not.
- Spot it in a question: "discrete values", "mostly binary" → preference representation.

**Prediction, top-N items and top-M users (demographics-based)**
- What it is: prediction = reasoning on the category preference model. Top-N items = reasoning over all category models for one user, estimating the accuracy of those predictions, and choosing the top N most accurate. Top-M users = reasoning over a single category across all users, estimating accuracy, and choosing the top M most accurate.
- Think of it as: one user across all aisles (top-N), or one aisle across all customers (top-M).
- Spot it in a question: "one user, all categories" → top-N. "one category, all users" → top-M.

**Website personalization**
- What it is: giving each user an individually tailored web page to decrease information overload. The lecture asks whether it is a kind of recommender system.
- Think of it as: a shop window that is rearranged for each visitor.
- Spot it in a question: "individually tailored web pages", "decrease information overload" → web personalization.

**Personalization of content, structure and layout (three types)**
- What it is: personalizing content (what is shown), personalizing structure (how the site's navigation is organised), and personalizing layout, presentation and media format.
- Think of it as: changing which items are on the shelf (content), how the aisles are laid out (structure), and the lighting and font (layout).
- Spot it in a question: "which articles", "navigation hierarchy", "colors and media format" → the matching type (Mock 2 Q13).

**Advantages of personalization (five)**
- What it is: increasing site usability; converting users to buyers; retaining current customers; re-engaging customers; penetrating new markets.
- Think of it as: a shop that is easier to use brings in buyers, keeps them, wins back lapsed ones and reaches new areas.
- Spot it in a question: "converting users to buyers", "re-engaging customers" → an advantage.

**Buyer-driven personalization**
- What it is: the buyer decides the rules of personalization.
- Think of it as: the customer picks the filters and sorting options.
- Spot it in a question: "buyer decides on the rules" → buyer-driven.

**Seller-driven personalization**
- What it is: the seller decides the rules. Used for cross-selling, up-selling and target advertising.
- Think of it as: the shop chooses which add-on items to push at the counter.
- Spot it in a question: "seller decides", "cross-selling", "up-selling" → seller-driven (Mock 2 Q10, the answer is "the seller").

**Data collection in personalization**
- What it is: collect user data (who the user is), usage data (what they do) and environmental data (the context). Reactive (explicit) approaches ask the user. Non-reactive (implicit) approaches watch without asking.
- Think of it as: a survey form (reactive) versus a CCTV camera at the shop door (non-reactive).
- Spot it in a question: "asking the user to rate or fill a questionnaire" → reactive or explicit. "recording pages visited without asking" → non-reactive or implicit (Mock 2 Q12).

**Reactive (explicit) data collection**
- What it is: the site asks the user directly, for example a questionnaire, a pop-up to rate products, or interest choices at sign-up.
- Think of it as: a feedback card at the till.
- Spot it in a question: "questionnaire", "pop-up asking to rate", "choose interests at sign-up" → reactive.

**Non-reactive (implicit) data collection**
- What it is: the site records behavior (pages, time spent) without asking.
- Think of it as: noting which aisle the customer lingered in.
- Spot it in a question: "recording pages visited and time spent without asking" → non-reactive.

**Preprocessing and user profiling**
- What it is: preprocessing cleans and prepares the collected data. User profiling uses data-mining algorithms (clustering, classification, association rule mining, sequential pattern discovery) to build each user's profile.
- Think of it as: sorting the raw receipts first, then writing each customer's profile card.
- Spot it in a question: "clustering, classification, association rule mining, sequential pattern discovery" → user profiling (Mock 2 Q11).

**Personalized output**
- What it is: the final personalized page, recommendation or offer shown to the user.
- Think of it as: the tailored shop window.
- Spot it in a question: "the last step" → personalized output.

### 4. Dynamic pricing

**Market**
- What it is: a mechanism through which buyers and sellers interact to determine prices and the exchange of goods and services.
- Think of it as: the mandi where buyers and sellers haggle until a price is agreed.
- Spot it in a question: "mechanism", "buyers and sellers interact to determine prices" → market.

**Prices as balance wheel**
- What it is: prices coordinate the decisions of producers and consumers. Higher prices reduce consumer purchases and encourage production. Lower prices encourage consumption and discourage production.
- Think of it as: the balance wheel of a watch that keeps supply and demand ticking together.
- Spot it in a question: "prices are the balance wheel of the market mechanism" → market mechanism.

**Market equilibrium**
- What it is: the price at which the quantity supplied equals the quantity demanded. Market demand and supply both change over time, so the price has scope to change dynamically.
- Think of it as: the price where the seller's stock and the buyers' wishes exactly meet.
- Spot it in a question: "quantity supplied equals quantity demanded" → equilibrium (Mock 2 Q9).

**Dynamic pricing (definition)**
- What it is: buying and selling goods and services in free markets, where prices fluctuate in response to changing supply and demand. Also called flexible pricing or customized pricing. It has two aspects: price dispersion and price differentiation.
- Think of it as: the vegetable seller who changes the price through the day as the crowd grows or thins.
- Spot it in a question: "prices fluctuate in response to changing supply and demand" → dynamic pricing (Mock 2 Q14).

**Dynamic pricing is old**
- What it is: dynamic pricing has a history as old as human civilization. Fixed pricing has a history of only about 100 years.
- Think of it as: bargaining in the bazaar is older than the price tag.
- Spot it in a question: "history as old as human civilization" → dynamic pricing is the natural, older form.

**Perfect competition (dynamic pricing ensures it)**
- What it is: no consumer or producer is large enough to control the market, and resources are allocated efficiently.
- Think of it as: no single shop is big enough to fix the price for the whole town.
- Spot it in a question: "no consumer or producer large enough to control the market" → perfect competition.

**Advantages of fixed pricing (three groups)**
- What it is: it is convenient (easy to model, designed to recover the cost of production at break-even, and avoids the difficulty of estimating demand). It decreases price uncertainty (keeps loyal customers). It is an instrument to control the market.
- Think of it as: a price tag is simple to print and easy to trust.
- Spot it in a question: "convenient", "break-even", "decrease price uncertainty", "loyal customers" → advantages of fixed pricing.

**Fixed pricing methods (five)**
- What it is: markup pricing (unit price = unit cost / (1 - markup on sales)); target return pricing (unit cost + desired return x invested capital / unit sales); perceived value pricing (service, warranty, reliability); value pricing (quality versus price); going rate pricing (competitor's price).
- Think of it as: five ways to set a price tag without changing it every day.
- Spot it in a question: "markup on sales", "desired return on invested capital", "competitor's price" → the matching method (Mock 3 Q10, Mock 3 Q11).

**Markup pricing**
- What it is: unit price = unit cost divided by (1 - markup on sales). Note that the markup is on the selling price, not on the cost.
- Think of it as: if 25 percent of the selling price must be kept as margin, the price is the cost divided by 0.75.
- Spot it in a question: "markup on sales" → use cost / (1 - markup).

**Target return pricing**
- What it is: unit price = unit cost + (desired return x invested capital) / unit sales.
- Think of it as: the cost per item plus the profit you need on your investment, shared across the items you expect to sell.
- Spot it in a question: "desired return", "invested capital", "expected unit sales" → target return.

**Perceived value pricing**
- What it is: pricing on the value the buyer perceives, such as service, warranty and reliability.
- Think of it as: a branded watch priced high because it looks and feels premium.
- Spot it in a question: "service, warranty, reliability" → perceived value.

**Value pricing**
- What it is: pricing based on quality compared with price.
- Think of it as: "good quality for a fair price".
- Spot it in a question: "quality versus price" → value pricing.

**Going rate pricing**
- What it is: setting your price equal to the competitor's price.
- Think of it as: charging what the shop next door charges.
- Spot it in a question: "competitor's price" → going rate.

**Traditional pricing was not really fixed**
- What it is: even fixed price systems use volume discounts, bargaining and negotiation, product-mix pricing, promotional pricing and more.
- Think of it as: the printed price is the starting point, and the cashier still gives a discount for a bulk buy.
- Spot it in a question: "volume discounts", "bargaining", "promotional pricing" → hidden dynamic pricing.

**E-commerce as a driver (buyers, sellers and both)**
- What it is: buyers get instant price comparisons and instant search for substitutes that fit the budget. Sellers monitor customer behavior, tailor prices instantly, and change prices on the fly after sensing demand. Both can negotiate instantly through auctions and exchanges.
- Think of it as: the internet is the bazaar that everybody can see at once.
- Spot it in a question: "instant price comparisons" → buyer side. "change price on the fly" → seller side. "auctions and exchanges" → both sides (Mock 3 Q13).

**Transaction cost reductions**
- What it is: the internet cut transaction costs by removing the need to be physically present in time and space, reducing search cost, and reducing menu cost (the cost of telling customers about the new price).
- Think of it as: a shop that changes its price board without printing new boards.
- Spot it in a question: "menu cost", "search cost", "physically present" → transaction cost reduction (Mock 3 Q14).

**Menu cost**
- What it is: the cost of informing customers that a price has changed.
- Think of it as: the cost of reprinting the price boards.
- Spot it in a question: "cost of informing customers about a changed price" → menu cost.

**Price uncertainty and demand volatility**
- What it is: more customers, competitors and information lead to price uncertainty and demand volatility. A single fixed price is then inefficient and ineffective.
- Think of it as: in a noisy market, one price for all times is like a single umbrella for every kind of weather.
- Spot it in a question: "price uncertainty", "demand volatility", "single fixed price is inefficient" → why dynamic pricing is needed.

**Price dispersion**
- What it is: the same item sold at different prices. Spatial dispersion is several sellers offering the same item at different prices (at the same time). Temporal dispersion is one seller changing the price of an item over time, for example seasonal discounts.
- Think of it as: different shops on one street selling the same shirt at different prices (spatial), or one shop running a summer sale (temporal).
- Spot it in a question: "several sellers at different prices" → spatial. "varies over time, seasonal discounts" → temporal (Mock 1 Q9 is spatial).

**Price differentiation**
- What it is: charging different prices to different customers or groups, based on the product or on customization. Three degrees for one product, plus a customized-product form.
- Think of it as: charging different people different prices for the same thing, by who they are, how much they buy, or what group they belong to.
- Spot it in a question: "different price for different people", "different groups" → price differentiation.

**First-degree differentiation (perfect differentiation)**
- What it is: the same product sold at a different price to different people. It extracts the maximum consumer surplus from the market. Example: auction.
- Think of it as: a seller who knows exactly how much each buyer will pay and charges each one that amount.
- Spot it in a question: "same product, different price for different people", "maximum consumer surplus", "auction" → first-degree (Bank Q10 option A is the trap).

**Second-degree differentiation (non-linear pricing)**
- What it is: different unit prices for different quantities, but the rule is the same for each individual. Examples: volume discounts, utility prices.
- Think of it as: the per-unit price falls as you buy more, and the same tariff applies to everyone.
- Spot it in a question: "different quantity for different unit price", "volume discounts", "utility prices" → second-degree.

**Third-degree differentiation (group pricing)**
- What it is: the same unit price for any quantity, but a different unit price for different groups of people. Example: telecom pricing for business and households.
- Think of it as: one price for everyone in the business group and another for everyone in the household group.
- Spot it in a question: "different groups", "business and households", "same unit price for any quantity" → third-degree (Bank Q10, Mock 2 Q15).

**Price differentiation on a customized product**
- What it is: the product can be customized by adding or deleting attributes, which decreases substitutability. Examples: Dell (computers with customized features); airlines (product differentiation based on refund policy).
- Think of it as: a refundable ticket and a non-refundable ticket on the same flight are two different products.
- Spot it in a question: "addition or deletion of attributes", "decreased substitutability", "refund policy" → differentiation on customized products.

**Yield management**
- What it is: the airline industry's method of changing seat prices to fill the plane with the most revenue.
- Think of it as: selling the last seats at the price that earns the most.
- Spot it in a question: "airline industry", "yield management" → a dynamic-pricing success story.

**Priceline.com**
- What it is: a success story in which the company negotiates with major airlines to fill the vacant seats at marginal revenue.
- Think of it as: buying empty seats cheaply from the airline and selling them at a price that still earns something.
- Spot it in a question: "negotiation with airlines to fill vacant seats at marginal revenue" → Priceline.com (Mock 3 Q15).

**Online auctions (success story)**
- What it is: auctions are listed as a dynamic-pricing success story.
- Think of it as: the price is set by the bidders at that moment.
- Spot it in a question: "online auctions" → a success story.

**Dynamic pricing failure stories**
- What it is: DVDs from Amazon.com lost customer loyalty. Buy.com faced price competition, and its profit was low or sometimes negative.
- Think of it as: customers felt cheated when they saw the same DVD at different prices, and the price war ate all profit.
- Spot it in a question: "lost customer loyalty", "price competition", "profit low or negative" → failure stories.

**Conditions for successful dynamic pricing (six)**
- What it is: customers must be heterogeneous in their willingness to pay; the market must be segmentable; reselling at a higher price must be prohibited; the cost of segmenting and price differentiation must not exceed the revenue it brings; customers must feel fairness; and pricing must be based on sophisticated mathematical models.
- Think of it as: a checklist before you try it. If any item fails, do not change prices.
- Spot it in a question: "the cost of segmenting exceeds the revenue" → NOT a success condition (Mock 3 Q12). "customers heterogeneous in willingness to pay" → a condition.

**Models for dynamic pricing (four)**
- What it is: inventory-based models (inventory type, inventory levels and customer service levels); data-driven models (statistics and machine learning on customer preferences and buying patterns); auction models (prices vary with market conditions); and simulation models.
- Think of it as: four ways to decide the price: stock-based, data-based, bidding-based and try-it-in-a-simulator.
- Spot it in a question: "inventory levels", "machine learning on buying patterns", "prices vary with market condition", "simulation" → the matching model.

### 5. Auctions

**Auction**
- What it is: a mechanism for negotiation between buyers and sellers, in which prices are set by competitive bids. It is the oldest form of market, with a history of at least 500 BC, from Babylonian auctions to eBay.
- Think of it as: the village auctioneer who calls out prices until one buyer stays.
- Spot it in a question: "mechanism for negotiation", "bids" → auction. The oldest market form (Mock 3 Q1).

**Theoretical auction studies (1970)**
- What it is: economists began studying auctions in 1970 after OPEC (Organization of the Petroleum Exporting Countries) increased the oil price, and after the US Department of the Interior decided to auction drilling rights in a coastal area. The organizations hired economists to design bidding strategies.
- Think of it as: governments calling in experts to design a fair way to sell valuable rights.
- Spot it in a question: "theoretical studies started in 1970", "drilling rights" → auction theory history.

**FCC radio spectrum auctions**
- What it is: the US Federal Communications Commission (FCC) has run 87 spectrum auctions since 1994, raising over $60 billion for the US.
- Think of it as: selling the airwaves to phone companies through bids.
- Spot it in a question: "since 1994", "87 spectrum auctions", "$60 billion" → FCC spectrum auction.

**New Zealand spectrum auction (Vickrey auction, 1990)**
- What it is: a 1990 New Zealand spectrum auction run as a Vickrey auction. The winning bid was NZ$100,000 and the second-highest bid was NZ$6. The winner pays the second-highest bid.
- Think of it as: the winner pays the price of the next-best bid, which is NZ$6 here.
- Spot it in a question: "winning bid NZ$100,000, second highest NZ$6" → the winner pays NZ$6 (Mock 3 Q4).

**Framework for classifying auctions (eight dimensions)**
- What it is: resources; market structure; preference structure; bid structure; bidding rule; matching supply to demand; information feedback; and nature of the good.
- Think of it as: eight questions to ask about any auction: what is sold, who sells, what the buyer wants, how bids are written, how the bidding goes, how winners are matched, what the bidders see, and what kind of good it is.
- Spot it in a question: "framework for classifying auctions" → the eight dimensions.

**Resources (auction classification)**
- What it is: what is being negotiated. Single item single unit; single item multiple unit (multi-unit auction); multiple items (combinatorial auction, homogeneous or heterogeneous items, sequential or simultaneous); items with multiple attributes (multi-attribute auction, using a utility function to put a price on non-priced attributes).
- Think of it as: selling one mango, a crate of mangoes, a basket of mixed fruit, or a fruit with several features (size, taste) that must be scored.
- Spot it in a question: "multi-unit", "combinatorial", "multi-attribute" → the matching resource type.

**Forward auction**
- What it is: one seller and many buyers, the usual auction (buyers compete to buy).
- Think of it as: the seller asks for bids from many buyers.
- Spot it in a question: "one seller, multiple buyers" → forward auction (Mock 3 Q2).

**Reverse auction**
- What it is: one buyer and many sellers. Sellers compete to supply, so the price usually falls.
- Think of it as: a buyer asking many suppliers to bid for the job, and the lowest bid wins.
- Spot it in a question: "one buyer, multiple sellers" → reverse auction.

**Double auction**
- What it is: many buyers and many sellers trading at the same time. Used for trading securities and financial instruments.
- Think of it as: a stock exchange floor, where buyers and sellers both post prices.
- Spot it in a question: "multiple buyers, multiple sellers", "securities" → double auction.

**Ascending bid auction: English auction**
- What it is: bids go up. Use a reserve price (the minimum price the seller will accept) and a bid increment (the smallest step up).
- Think of it as: the auctioneer calls higher and higher until one buyer is left.
- Spot it in a question: "prices go up", "reserve price", "bid increment" → English auction (Mock 3 Q3).

**Descending bid auction: Dutch auction**
- What it is: the price starts high and goes down until a buyer accepts.
- Think of it as: the flower auction where the clock ticks down until someone shouts "mine".
- Spot it in a question: "price starts high and falls" → Dutch auction.

**Sealed-bid auction: first-price and second-price (Vickrey)**
- What it is: each bidder writes one secret bid. In a first-price sealed-bid auction the winner pays their own bid. In a second-price sealed-bid auction (also called a Vickrey auction) the winner pays the second-highest bid.
- Think of it as: a sealed envelope; the highest bidder opens it, and in the Vickrey version pays the second envelope's amount.
- Spot it in a question: "secret bids", "Vickrey auction", "pays the second-highest bid" → sealed-bid (second-price for Vickrey).

**Preference structure**
- What it is: the agent's utility (satisfaction) for different outcomes. In multi-unit auctions, an agent may show decreasing marginal utility for extra units. In multi-attribute auctions, the preference structure is designed as scoring rules that signal information.
- Think of it as: the first crate of mangoes is worth a lot, the tenth is worth less.
- Spot it in a question: "decrease in marginal utility for additional units", "scoring rules" → preference structure (Mock 3 Q6).

**Bid structure**
- What it is: how flexibly an agent can express the resource requirement. Single item single unit: specify a price. Single item multi-unit: specify quantity and price. Multi-item: an all-or-nothing bid over a basket of items.
- Think of it as: the difference between "I'll pay 50 for one" and "I'll pay for 10 units at 40 each" and "the whole basket or nothing".
- Spot it in a question: "all-or-nothing over a basket of items" → bid structure (Mock 3 Q7).

**Bidding rules**
- What it is: the rules that decide how bids move. Ascending (English), descending (Dutch) and sealed-bid (first-price and second-price).
- Think of it as: the rules of the game.
- Spot it in a question: "bidding rule" → the bidding rule category.

**Payment rules (three)**
- What it is: first price (the winner pays their own bid); second price (the winner pays the second-highest bid); all pay (every bidder pays their bid, whether or not they win).
- Think of it as: the winner pays; the winner pays the runner-up's price; everybody pays.
- Spot it in a question: "every bidder pays their bid, whether or not they win" → all pay (Mock 3 Q5).

**Winner determination (market clearing)**
- What it is: deciding which bids win, so that supply matches demand. With single sourcing it is a sorting problem. With multiple sourcing it is a combinatorial problem. The problems range from simple sorting to NP-hard optimization problems (very hard to solve exactly for large cases).
- Think of it as: picking winners from a list (easy) versus choosing the best combination of bids that fit together (hard).
- Spot it in a question: "single sourcing sorting", "multiple sourcing combinatorial", "NP-hard" → winner determination (Bank Q5, Mock 3 Q8).

**Single sourcing and multiple sourcing**
- What it is: single sourcing means one supplier covers the whole demand, so the task is sorting the bids. Multiple sourcing means several suppliers together cover it, so the task is choosing the best combination (combinatorial).
- Think of it as: one vendor for the order (sort their offers) versus many vendors, each with a piece (find the cheapest combination of pieces).
- Spot it in a question: "single sourcing" → sorting. "multiple sourcing" → combinatorial.

**Information feedback: direct and indirect mechanisms**
- What it is: a direct mechanism gives no feedback during bidding (only a price signal), for example the first-price sealed-bid auction. An indirect mechanism gives feedback on the state of the auction (price signal and provisional allocation), for example the English auction.
- Think of it as: a closed envelope (no feedback) versus a live auction where everyone can see the current highest bid (feedback).
- Spot it in a question: "no feedback" → direct (Mock 3 Q9, first-price sealed bid). "feedback on the state of the auction, provisional allocation" → indirect.

**Nature of the good**
- What it is: the type of item being sold, one of the eight dimensions. The slide only names it.
- Think of it as: a fresh vegetable versus a digital licence.
- Spot it in a question: "nature of the good" → one of the eight dimensions.

**Market structure (auction classification)**
- What it is: the number of buyers and sellers, which sets the auction type: forward (one seller, many buyers), reverse (one buyer, many sellers), double (many of each).
- Think of it as: who is on each side of the table.
- Spot it in a question: "one seller", "one buyer", "many on both sides" → market structure.

**Issues in online auctions**
- What it is: strategic issues (economic issues such as auction design; business issues such as business rules). Implementation issues (modeling the decision-making process, computational issues, security).
- Think of it as: the plan (what kind of auction and why) and the build (how it runs on a computer and stays safe).
- Spot it in a question: "auction design", "business rules", "computational issues", "security" → issues in online auctions.

## How it flows

### 1. User-user CF: three phases

```text
Preference matrix (users x items, mostly empty)
        │
        ▼
1 Dimension reduction        (fix sparsity and scalability)
        │
        ▼
2 Neighborhood formation     (similarity to the active user, pick the neighbors)
        │
        ▼
3 Recommendation generation  (weighted average of neighbors' ratings)
```

Phase 1 makes the matrix smaller. Phase 2 picks the like-minded users. Phase 3 predicts the active user's rating from those neighbors. User-user CF has no offline work, so it is slow at Amazon's scale.

### 2. Dimension reduction: two families

```text
Dimension reduction
  ├── Semi-manual  ──► use product features ──► cluster products first, then users
  │                    (only works if descriptive features exist)
  └── Automatic    ──► Adjusted product taxonomy  (merge small categories)
                  └──► Latent semantic indexing   (SVD, n x m ──► n x d, d < m)
```

### 3. Movie example: grouping movies into meta-items (slide 6)

Original user-movie preferences (a "y" means the user liked the movie):

```text
Lyle   : Andre, Star Wars
Ellen  : Andre, Star Wars, Hiver
Fred   : Star Wars, Batman
Dean   : Star Wars, Batman, Rambo
Jason  : Hiver, Whispers
```

The slide groups the six movies into three meta-items, and reorders the columns into blocks:

```text
Action   = Batman, Rambo          (block 1)
Foreign  = Andre, Hiver, Whispers (block 2)
Classic  = Star Wars              (block 3)
```

The six movie columns become three meta-item columns, so the matrix is less sparse. The slide shows the reordered matrix as the picture of this idea, not as numbers to memorize.

### 4. Adjusted product taxonomy (slide 9)

```text
Original taxonomy                      Adjusted taxonomy (small categories merged)
All                                    All
├── Clothes (3493)                     ├── Clothes
│   ├── Outerwear 2340                 │   ├── Outerwear 2340
│   ├── Pants 531                      │   └── Pants + Shirts 1153
│   └── Shirts 622                     ├── Footwear
├── Footwear (2657)                    │   └── Shoes 1853
│   ├── Shoes 1853                     ├── Socks + Skincare 1579
│   └── Socks 804                      ├── Cosmetics: Perfumes 1796
├── Cosmetics (2571)                   └── Accessories
│   ├── Skincare 775                       └── Bags + Belts + Wallets 1034
│   └── Perfumes 1796
└── Accessories (1034)
    ├── Bags 227
    ├── Belts 318
    └── Wallets 489
```

Merging the small categories spreads the transactions more evenly across the categories. Read the numbers as transactions having that category.

### 5. Latent semantic indexing (slide 10)

```text
Original preference matrix     n users x m items    (m large, sparse)
        │   singular value decomposition, keep rank d
        ▼
Reduced preference matrix      n users x d meta-items    (d < m)
```

### 6. Neighborhood formation: measures and methods

```text
Similarity measures (choose one)          Neighbor-selection methods (choose one)
 - Pearson correlation coefficient          - Weight threshold (keep all above a cutoff)
 - Constrained Pearson correlation          - Center-based best-k (fixed k, near the profile)
 - Spearman rank correlation                - Aggregate-based best-k (fixed k, by aggregate)
 - Cosine similarity
 - Mean-square difference
```

Measures say how alike two users are. Methods say how many neighbors to keep.

### 7. Prediction by weighted average with deviations (slide 14, worked in Mock 1 Q8)

```text
predicted p(a, j) = average(a) + [ sum over neighbors i of sim(a,i) x (p(i,j) - average(i)) ]
                                 / [ sum over neighbors i of sim(a,i) ]

Worked: average(a) = 3.0
        neighbor 1: sim 0.5, average 4.0, rating on j = 5 ──► 0.5 x (5 - 4) = 0.50
        neighbor 2: sim 0.25, average 3.0, rating on j = 2 ──► 0.25 x (2 - 3) = -0.25
        numerator = 0.25, denominator = 0.5 + 0.25 = 0.75
        predicted = 3.0 + 0.25 / 0.75 = 3.0 + 0.33 = 3.33
```

### 8. Offline and online phases

```text
User-user CF:  offline = nothing (store transactions)
               online  = find like-minded users, predict   (slow)

Item-item CF:  offline = compute similar-items table (heavy, one-off, regular)
               online  = look up similar items of the user's purchases   (quick)
```

### 9. Item-item algorithm at Amazon (slides 22 to 26)

```text
OFFLINE
  for each item I1 in the catalog
      for each customer C who bought I1
          for each item I2 that C bought
              record that a customer bought I1 and I2
      for each item I2
          compute similarity(I1, I2)     (cosine of the angle between vectors)
          store in the similar-items table

ONLINE
  for each item the user bought or rated
      read its similar items from the table
  aggregate them, rank by popularity or correlation
  recommend the top items
```

### 10. Item-item prediction (slide 18, worked in Mock 1 Q10)

```text
predicted rating(user, j) = sum over similar items i of [sim(i,j) x rating(user, i)]
                            / sum over similar items i of sim(i,j)

Worked: item X rating 5, sim 0.6;  item Y rating 3, sim 0.3
        numerator   = 0.6 x 5 + 0.3 x 3 = 3.0 + 0.9 = 3.9
        denominator = 0.6 + 0.3 = 0.9
        predicted   = 3.9 / 0.9 = 4.33
```

### 11. Apriori: from transactions to frequent itemsets (slides 35 to 37)

```text
Transactions  ──► scan once ──► C1 (candidate 1-itemsets) ──► prune ──► L1
                                                                        │
            ┌───────────────────────────────────────────────────────────┘
            ▼
   JOIN L(k-1) with itself ──► Ck (candidate k-itemsets)
            │
            ▼
   PRUNE: drop any candidate with a non-frequent (k-1)-subset
            │
            ▼
   SCAN the database to count each candidate ──► drop below minimum support ──► Lk
            │
            ▼
   repeat with k+1 until no frequent or candidate set is left
```

### 12. Apriori worked example (slides 36 to 38, support count >= 2)

```text
Transactions:  10: A, C, D    20: B, C, E    30: A, B, C, E    40: B, E

1-itemsets     A=2  B=3  C=3  D=1  E=3         ──► L1 = {A}, {B}, {C}, {E}   (D drops)
2-itemsets     AB=1 AC=2 AE=1 BC=2 BE=3 CE=2   ──► L2 = {AC}, {BC}, {BE}, {CE}
3-itemsets     join gives ABC, ACE, BCE
               prune ABC (AB not frequent) and ACE (AE not frequent)
               BCE = 2                          ──► L3 = {BCE}
```

Rules from {B, C, E} (slide 38): B to C 2/3; C to B 2/3; B to E 3/3; E to B 3/3; B to CE 2/3; CE to B 2/2; C to BE 2/3; BE to C 2/3; E to BC 2/3; BC to E 2/2. Four rules have 100 percent confidence: B to E, E to B, CE to B, BC to E.

### 13. Association-based Top-N recommendation (slide 39)

```text
Active user's transactions
        │
        ▼
Find rules whose LHS (left-hand side) is in the user's transactions
        │
        ▼
Collect the unique items on the RHS (right-hand side) of those rules = Ip
        │
        ▼
Sort Ip by confidence (an item in more rules ranks higher)
        │
        ▼
Choose the top N   ──►   Recommend
```

### 14. Demographics-based recommender: three steps (slides 43 and 46)

```text
User demographics (age, gender, city ...)  ──► input attributes
User's category preference (yes or no)      ──► decision outcome
        │  1 Data transformation: item-level preferences ──► category-level
        ▼
  one training set per category
        │  2 Category preference model: ANN, decision tree or another learner, one per category
        ▼
  category preference models
        │  3 Recommendation generation: give the active user's demographics to the models
        ▼
  prediction, top-N items (one user, many categories), top-M users (one category, many users)
```

### 15. Counting-based transformation (slide 45, threshold w)

```text
For one user, count the favourite items in each category:
  Outerwear  2 items  ──► 2 >= w(3)? no  ──► 0
  Perfumes   4 items  ──► 4 >= w(3)? yes ──► 1
  Bags       3 items  ──► 3 >= w(3)? yes ──► 1
Result: Perfumes and Bags get 1 (Mock 2 Q8 answer: Bags and Perfumes)
```

### 16. Personalization process (slide 50)

```text
Data collection     user data, usage data, environment data
  (reactive = explicit, non-reactive = implicit)
        │
        ▼
Preprocessing       clean and prepare the collected data
        │
        ▼
User profiling      clustering, classification, association rule mining,
                    sequential pattern discovery
        │
        ▼
Personalized output  tailored content, structure or layout
```

### 17. Market equilibrium and why prices must move (slides 55 and 56)

```text
Demand D1 (old) meets fixed supply S at price P1.
Demand D2 (shifted outward, more buyers at each price) meets S at the higher price P2.

   Price
     │   D1
     │      ╲    D2
  P2 ┤─ ─ ─ ─ ─ ─ ●     (D2 meets S here)
  P1 ┤─────────●         (D1 meets S here)
     │         │ S (fixed supply)
     └─────────┴───────── Quantity
```

When demand shifts from D1 to D2 and supply stays put, the equilibrium price moves from P1 to P2. That is the scope for dynamic pricing.

### 18. Price dispersion and price differentiation

```text
Dynamic pricing
  ├── Price dispersion
  │      ├── Spatial : several sellers, same item, different prices (at one time)
  │      └── Temporal: one seller, price changes over time (seasonal discounts)
  └── Price differentiation
         ├── First degree  : same product, different price per person (perfect); auction
         ├── Second degree : price depends on quantity (non-linear); volume discounts
         └── Third degree  : price depends on group (same unit price within group); telecom
```

### 19. Fixed pricing: five ways to set a price (slide 59)

```text
Markup pricing           unit price = unit cost / (1 - markup on sales)
Target return pricing    unit price = unit cost + (desired return x invested capital) / unit sales
Perceived value pricing  price follows service, warranty, reliability
Value pricing            price follows quality compared with price
Going rate pricing       price follows the competitor's price
```

### 20. Dynamic pricing: conditions for success (slide 69)

```text
Successful dynamic pricing needs ALL of:
  1 customers differ in willingness to pay
  2 market can be segmented
  3 resale at a higher price is prohibited
  4 cost of segmenting and differentiating < revenue it brings
  5 customers feel the pricing is fair
  6 pricing based on sophisticated mathematical models
```

### 21. Auction classification framework (slide 74)

```text
Auction
  ├── Resources                 single item, multi-unit, combinatorial, multi-attribute
  ├── Market structure          forward (1 seller), reverse (1 buyer), double (many)
  ├── Preference structure      utility, decreasing marginal utility, scoring rules
  ├── Bid structure             price, quantity and price, all-or-nothing basket
  ├── Bidding rule              ascending (English), descending (Dutch), sealed bid
  ├── Matching supply/demand    winner determination: sorting vs combinatorial
  ├── Information feedback      direct (no feedback) vs indirect (feedback)
  └── Nature of the good        what is being sold
```

### 22. Bidding rules tree (slide 77)

```text
Bidding rule
  ├── Ascending bid auction ──► English auction (reserve price, bid increment)
  ├── Descending bid auction ──► Dutch auction
  └── Sealed-bid auction
         ├── First-price   : winner pays own bid
         └── Second-price  : winner pays second-highest bid (Vickrey)
```

### 23. Information feedback: direct versus indirect (slide 82)

```text
Information feedback
  ├── Direct mechanism    ──► no feedback (price signal only)   e.g. first-price sealed bid
  └── Indirect mechanism  ──► feedback on the auction state:     e.g. English auction
                               price signal + provisional allocation
```

### 24. Winner determination: sorting versus combinatorial (slide 81)

```text
Single sourcing   ──► one supplier covers all demand ──► a SORTING problem
Multiple sourcing ──► several suppliers cover the demand ──► a COMBINATORIAL problem
Range of difficulty: simple sorting  ...  NP-hard optimization
```

## Don't mix these up

| These look alike | How to tell them apart | Tie-breaker word |
|---|---|---|
| User-user CF vs item-item CF | User-user finds like-minded users at run time (slow, no offline work). Item-item builds a similar-items table offline and looks it up online (Amazon). | "like-minded users" vs "buying patterns, offline" |
| Dimension reduction vs neighborhood formation vs recommendation generation | Reduction makes the matrix smaller. Neighborhood picks the like-minded group. Generation predicts the rating from the neighbors. | "smaller", "group", "predict" |
| Semi-manual vs automatic dimension reduction | Semi-manual uses product features written by people. Automatic works from the data (adjusted taxonomy, LSI). | "descriptive features" vs "automatic" |
| Adjusted product taxonomy vs latent semantic indexing | Adjusted taxonomy merges small categories to spread transactions evenly. LSI uses SVD to reduce the matrix to d meta-items. | "merge categories" vs "SVD, rank-d" |
| Singular value decomposition vs cosine similarity | SVD reduces the matrix (dimension reduction). Cosine measures the angle between two vectors (similarity). | "reduce" vs "angle" |
| Pearson vs Spearman vs cosine vs mean-square | Pearson: correlation of ratings on commonly rated items. Spearman: correlation of ranks. Cosine: angle between vectors (Amazon). Mean-square: average squared gap. | "ranks" / "angle" / "squared gap" / "correlation" |
| Gini impurity (NOT a similarity) vs the similarity measures | Gini impurity is a split measure used in decision trees, not a user similarity. | "tree split" vs "two users" |
| Weight threshold vs center-based best-k vs aggregate-based best-k | Threshold: keep all above a cutoff (no fixed count). Best-k: keep exactly k, chosen by closeness to the profile (center) or by aggregate score. | "cut-off value" vs "exactly k" |
| Weighted average vs deviation from the mean | Weighted average uses the neighbors' raw scores. Deviation from mean uses each neighbor's score minus their own average, then adds the active user's average. | "raw" vs "minus their average" |
| Offline vs online processing | Offline = done before the user arrives (store, build tables). Online = done at request time (find neighbors, predict). | "before" vs "while the user waits" |
| Item-item similarity vs user-user similarity | Item-item is more stable and needs fewer updates. User-user changes as people's tastes change. | "stable" vs "changes often" |
| First-order vs higher-order models (item-item) | First-order: correlation analysis, linear regression. Higher-order: belief networks, association rule mining. | "simple" vs "network or rules" |
| Association-based vs item-item CF | Association uses rules (LHS to RHS, support and confidence). Item-item uses a similarity number (cosine or Pearson). | "rules with confidence" vs "similarity number" |
| Support vs confidence | Support = share of ALL transactions with X and Y. Confidence = share of transactions with X that also have Y (denominator is X alone). | "all" vs "those with X" |
| Support count vs support | Support count is the number of transactions. Support is that number divided by total transactions. | "how many" vs "what share" |
| Frequent pattern vs association rule | A frequent pattern is a set of items that often appears. An association rule is an if-then statement built from such sets. | "set" vs "if then" |
| Join vs prune | Join creates candidate k-itemsets from frequent (k-1)-itemsets. Prune removes candidates with a non-frequent subset and those below minimum support. | "makes candidates" vs "removes candidates" |
| Apriori vs K-means | Apriori mines frequent itemsets (association). K-means is a clustering algorithm (not one of the three mining approaches). | "itemsets" vs "clusters" |
| Apriori principle vs anti-monotone | They are the same idea: a non-frequent set makes all its supersets non-frequent. | "same property" |
| Demographics-based vs collaborative filtering | Demographics uses user profile (age, gender, city) at category level. Collaborative uses rating similarity at item level. | "profile, category" vs "ratings, item" |
| Personalization content vs structure vs layout | Content = which items or articles appear. Structure = navigation hierarchy. Layout = presentation and media format. | "what" / "how it is organised" / "how it looks" |
| Buyer-driven vs seller-driven personalization | Buyer-driven: the buyer sets the rules. Seller-driven: the seller sets the rules (cross-selling, up-selling, target advertising). | "buyer decides" vs "seller decides" |
| Reactive (explicit) vs non-reactive (implicit) data | Reactive asks the user (questionnaire, rating pop-up). Non-reactive records behavior without asking. | "asks" vs "records" |
| Data collection vs preprocessing vs user profiling vs personalized output | Collection gathers data. Preprocessing cleans it. Profiling mines it. Output shows the tailored page. | "gather", "clean", "mine", "show" |
| Market equilibrium vs dynamic pricing | Equilibrium: quantity supplied = quantity demanded at one price. Dynamic pricing: prices change as supply and demand change. | "one point" vs "changes over time" |
| Spatial vs temporal price dispersion | Spatial: different sellers, different prices, same time. Temporal: same seller, price changes over time (seasonal). | "which seller?" vs "which day?" |
| Price dispersion vs price differentiation | Dispersion: same item, different prices across sellers or time. Differentiation: the seller charges different customers or groups different prices. | "item across sellers/time" vs "customer or group" |
| First-degree vs second-degree vs third-degree | First: each person pays their own price (perfect; auction). Second: price depends on quantity (volume discount). Third: price depends on group (business vs household). | "person" / "quantity" / "group" |
| Second-degree vs third-degree | Second-degree rule is the same for every individual but varies with quantity. Third-degree gives each group a different unit price, the same for any quantity. | "quantity" vs "group" |
| Markup pricing vs target return pricing | Markup: cost / (1 - markup on sales). Target return: cost + (desired return x capital) / unit sales. | "markup %" vs "return on capital" |
| Perceived value vs value pricing | Perceived value: price follows service, warranty and reliability the buyer sees. Value pricing: quality compared with price. | "service/warranty" vs "quality for price" |
| Going rate vs value pricing | Going rate copies the competitor's price. Value pricing compares your quality with your price. | "competitor" vs "quality" |
| Menu cost vs search cost vs transaction cost | Menu cost = cost of announcing a new price. Search cost = cost of finding a seller. Transaction cost = all costs of doing a deal (includes both). | "announce" vs "find" vs "all of it" |
| Price uncertainty vs demand volatility | Uncertainty = not knowing the price others will accept. Volatility = demand going up and down quickly. | "not knowing" vs "swinging" |
| Dynamic pricing success vs failure stories | Success: airline yield management, Priceline (vacant seats), online auctions. Failure: Amazon DVDs (lost loyalty), Buy.com (price war, low or negative profit). | "gain" vs "lost loyalty or price war" |
| Condition "heterogeneous customers" vs "cost exceeds revenue" | First is a success condition (customers differ). Second is NOT a condition (it must not happen). | "must" vs "must not" |
| Forward vs reverse vs double auction | Forward: one seller, many buyers. Reverse: one buyer, many sellers. Double: many buyers and many sellers (securities). | "one seller" / "one buyer" / "many both sides" |
| English vs Dutch auction | English: price goes up. Dutch: price starts high and goes down. | "up" vs "down" |
| First-price vs second-price sealed bid (Vickrey) | First-price: winner pays own bid. Second-price (Vickrey): winner pays the second-highest bid. | "own bid" vs "second bid" |
| Second-price sealed bid vs all pay | Second-price: only the winner pays, at the second bid. All pay: every bidder pays their bid, win or lose. | "only winner" vs "everybody" |
| Single sourcing vs multiple sourcing | Single: one supplier, sorting problem. Multiple: several suppliers, combinatorial problem. | "one" vs "several" |
| Multi-unit vs combinatorial vs multi-attribute auction | Multi-unit: many copies of one item. Combinatorial: several different items sold together. Multi-attribute: items scored on several attributes. | "copies" / "bundle" / "features" |
| Direct vs indirect mechanism | Direct: no feedback during bidding (first-price sealed bid). Indirect: feedback on the state of the auction, such as provisional allocation (English). | "no feedback" vs "feedback" |
| Preference structure vs bid structure | Preference: the agent's utility for outcomes (decreasing marginal utility). Bid structure: how flexibly the agent writes a bid (price, quantity, basket). | "satisfaction" vs "how you write the bid" |
| Auction issues: strategic vs implementation | Strategic: auction design and business rules. Implementation: decision-model, computation and security. | "plan" vs "build and protect" |

## Must-remember facts

### Numbers and formulas

| Fact | Detail | Memory trick |
|---|---|---|
| Support | Share of ALL transactions that contain X and Y together | "Support = all" |
| Confidence | Share of transactions with X that also contain Y. Denominator is X alone | "Confidence = those with X" |
| Slide example (support 50%, confidence 50%) | Five transactions: 10 {A,B,D}, 20 {A,C,D}, 30 {A,D,E}, 40 {B,E,F}, 50 {B,C,D,E,F}. Frequent: A 3, B 3, D 4, E 3, AD 3. Rules: A to D (60%, 100%), D to A (60%, 75%) | 3 of 5 = 60%; 3 of 4 = 75% |
| Mock 1 Q13 (confidence) | 5 transactions. A in 3, D in 4, A and D together in 3. Confidence A to D = 3/3 = 100% | Divide by count of A alone |
| Apriori (support count 2 of 4) | L1: A2, B3, C3, E3 (D dropped). L2: AC2, BC2, BE3, CE2. L3: BCE2 | Count the receipts |
| Rules with 100% confidence (slide 38) | B to E, E to B, CE to B, BC to E (four rules) | "Four rules at 100 percent" |
| Pearson-based prediction (Mock 1 Q8) | Active average 3.0. Neighbors: (sim 0.5, avg 4.0, rating 5) and (sim 0.25, avg 3.0, rating 2). Prediction = 3.0 + (0.5 x 1 - 0.25 x 1) / 0.75 = 3.33 | Add deviations, divide by total similarity |
| Item-item prediction (Mock 1 Q10) | X: rating 5, sim 0.6. Y: rating 3, sim 0.3. (3.0 + 0.9) / 0.9 = 4.33 | Weighted average |
| Amazon response time | Many applications need results in no more than half a second | "Half a second" |
| Amazon scale | Tens of millions of customers, millions of catalog items | "Tens of millions, millions" |
| FCC spectrum auctions | 87 since 1994, raised over $60 billion for the US | "87 since 94, $60 billion" |
| New Zealand spectrum auction (1990) | Vickrey (second-price): winning bid NZ$100,000, second-highest NZ$6. Winner pays NZ$6 | "Winner pays the runner-up" |
| Auction history | At least 500 BC; from Babylonian auction to eBay | "500 BC to eBay" |
| Economists began 1970 | After OPEC raised prices; US Department of the Interior auctioned coastal drilling rights | "1970: oil and drilling" |
| Mock 3 Q10 (markup) | Unit cost $60, markup on sales 25%. Price = 60 / (1 - 0.25) = $80 | Divide by (1 - markup) |
| Mock 3 Q11 (target return) | Unit cost $40, invested capital $500,000, desired return 20%, units 10,000. Price = 40 + (0.20 x 500,000)/10,000 = $50 | Cost + return per unit |
| Fixed pricing history | Fixed pricing about 100 years old; dynamic pricing as old as civilization | "Fixed is the new kid" |
| Equilibrium | Quantity supplied equals quantity demanded | "Supply meets demand" |
| Menu cost | Cost of informing customers about a changed price | "Menu = announcement" |
| Demographic counting-based threshold | Category value 1 if the user's count of favourite items in it reaches threshold w | "At least w gives 1" |
| Slide 39 Top-M users | Left blank on the slide ("?") | Not defined in the lecture |
| Slide 27 assignment | Item-item CF on a buyer-item matrix to recommend one more item for buyer a who has i4 in the cart. The matrix did not extract cleanly from the text copy, so no worked answer is given here | Use the item-item method: similarities, then weighted average |

### Lists (with memory tricks)

| List | Items | Memory trick |
|---|---|---|
| CF approaches (2) | User-user; item-item | "Users talk, items table" |
| User-user phases (3) | Dimension reduction; neighborhood formation; recommendation generation | "Shrink, Group, Guess" |
| Semi-manual and automatic dimension reduction | Semi-manual: product features, cluster products. Automatic: adjusted product taxonomy, latent semantic indexing | "Hand or machine" |
| Similarity measures (5) | Pearson correlation; constrained Pearson; Spearman rank; cosine; mean-square difference | "Please Count Silly Cows Monthly" (P, C, S, C, M) |
| Neighborhood methods (3) | Weight threshold; center-based best-k; aggregate-based best-k | "Cut, Centre, Aggregate" |
| Item-item model types (4) | First-order: correlation analysis, linear regression. Higher-order: belief network, association rule mining | "Simple two, complex two" |
| Association mining approaches (3) | Apriori algorithm; frequent pattern growth; vertical data format | "A, F, V" (Apriori, FP growth, Vertical) |
| Apriori steps | Scan once for C1, prune, L1; join; prune; count; repeat until nothing is left | "Scan, Join, Prune, Count" |
| Frequent-pattern applications (6) | Basket data analysis; cross-marketing; catalog design; sale campaign analysis; web log (click stream) analysis; DNA sequence analysis | "Baskets, Cross, Catalog, Sale, Clicks, DNA" |
| Demographics steps (3) | Data transformation; category preference model; recommendation generation | "Change, Model, Recommend" |
| Data transformation methods (3) | Counting-based (frequency threshold); expected value; statistics-based | "Count, Expect, Stats" |
| Personalization types (3) | Content; structure; layout, presentation, media format | "What, How organised, How it looks" |
| Personalization advantages (5) | Increasing site usability; converting users to buyers; retaining current customers; re-engaging customers; penetrating new markets | "Use, Convert, Retain, Re-engage, Penetrate" |
| Personalization approaches (2) | Buyer-driven (buyer decides); seller-driven (seller decides; cross-selling, up-selling, target advertising) | "Who writes the rules" |
| Personalization process (4) | Data collection; preprocessing; user profiling; personalized output | "Collect, Clean, Profile, Show" |
| Data mining tools for profiling (4) | Clustering; classification; association rule mining; sequential pattern discovery | "Clever Cats Argue Sequentially" (C, C, A, S) |
| Fixed pricing methods (5) | Markup; target return; perceived value; value pricing; going rate | "Mark, Target, Perceive, Value, Go with the rate" (M, T, P, V, G) |
| Price dispersion (2) | Spatial (several sellers); temporal (over time) | "Space = shops, Time = seasons" |
| Price differentiation degrees (3) | First (perfect; per person; auction); second (non-linear; quantity; volume discounts); third (group; telecom business vs household) | "Person, Quantity, Group" |
| Customized-product differentiation (3 points) | Addition or deletion of attributes; decreased substitutability; customized product (Dell; airline refund policy) | "Add, Less swappable, Custom" |
| Dynamic pricing success stories (3) | Airline yield management; Priceline.com; online auctions | "Yield, Priceline, Auctions" |
| Dynamic pricing failure stories (2) | Amazon.com DVDs (lost loyalty); Buy.com (price competition, low or negative profit) | "DVD lost loyalty, Buy lost money" |
| Conditions for success (6) | Heterogeneous willingness to pay; segmentable market; resale prohibited; segmenting cost below revenue; fairness; sophisticated math models | "Hetero, Segment, No resale, Cost ok, Fair, Math" |
| Models for dynamic pricing (4) | Inventory-based; data-driven; auctions; simulation | "Stock, Data, Bid, Simulate" |
| Eight auction dimensions | Resources; market structure; preference structure; bid structure; bidding rule; matching supply to demand; information feedback; nature of the good | "Really Mean People Bid Badly, Matching Information Nicely" (R, M, P, B, B, M, I, N) |
| Market structures (3) | Forward (one seller, many buyers); reverse (one buyer, many sellers); double (many buyers and sellers) | "Forward sells, Reverse buys, Double both" |
| Bidding rules (3 groups) | Ascending (English); descending (Dutch); sealed bid (first-price, second-price/Vickrey) | "Up, Down, Sealed" |
| Payment rules (3) | First price; second price; all pay | "Own, Runner-up, Everybody" |
| Information feedback (2) | Direct (no feedback; first-price sealed bid); indirect (feedback: price signal, provisional allocation; English) | "Direct = silent, Indirect = talks" |
| Winner determination (2) | Single sourcing = sorting; multiple sourcing = combinatorial (up to NP-hard) | "One vendor sorts, many combine" |
| Auction issues (2 groups) | Strategic (economic, business); implementation (decision modeling, computation, security) | "Plan and Build" |

### Definitions and quotes from the slides

| Term | Slide wording (close paraphrase) | Memory trick |
|---|---|---|
| Frequent pattern | "A pattern (a set of items, subsequences, substructures, etc.) that occurs frequently in a data set" | Often seen together |
| Association rule | Find all rules X to Y with minimum support and confidence | X then Y, with two thresholds |
| Apriori principle | "If a set cannot pass a test then all its supersets will also fail the test." (anti-monotone) | Failed parent, failed children |
| Dynamic pricing | "Buying and selling of goods and services in free markets where the prices fluctuate in response to changing supply and demand." | Prices move with supply and demand |
| Market | "A mechanism through which the buyers and sellers interact to determine the prices and exchange of goods and services." | The mandi |
| Market equilibrium | "The price at which the quantity supplied is the quantity demanded." | Equal, so the price is right |
| Personalization | "Providing each user with individually tailored Web pages to decrease information overload." | Tailored shop window |
| Demographics approach | "Recommends items to a user based on the preferences of the users whose demographics are similar to those of the user." | Same kind of people |
| Auction | "An oldest form of market." | The oldest market |
| Auction (mechanism) | "A mechanism for negotiation between buyers and seller." | Negotiation through bids |
| Item-item stability | "Item-item similarity is more stable than user-user similarity." | Items change slowly |

### Example companies and cases

| Name | What it illustrates | Memory trick |
|---|---|---|
| Amazon.com (item-item CF) | Offline similar-items table, real-time online recommendations, scale of tens of millions of customers; belongs to item-item | "Amazon is item-item" |
| Amazon.com (email and homepage) | Recommendations used as a targeted marketing tool in emails and on the homepage | "Amazon emails" |
| Amazon.com (DVDs under dynamic pricing) | Failure story: lost customer loyalty | "Amazon DVD lesson" |
| Buy.com | Failure story: price competition and low or negative profit | "Buy lost the price war" |
| Priceline.com | Success story: negotiates with airlines to fill vacant seats at marginal revenue | "Priceline fills seats" |
| Airline industry | Success story: yield management; also product differentiation by refund policy | "Airlines yield" |
| Dell | Differentiation by customizing computer features | "Dell customizes" |
| Telecom pricing (business vs household) | Third-degree price differentiation by group | "Telecom groups" |
| FCC (US) | Radio spectrum auctions since 1994, $60 billion+ | "FCC airwaves" |
| New Zealand (1990) | Vickrey auction with NZ$100,000 and NZ$6 | "NZ pays the runner-up" |
| US Department of the Interior | Auctioned coastal drilling rights, which started theory work in 1970 | "Interior, drilling" |
| OPEC | Raised oil prices, which led to auction theory studies | "OPEC prompted economists" |
| eBay | End of the history line, online auctions | "Babylon to eBay" |
| Movie example (slide 6) | Grouping of movies into Action, Foreign and Classic meta-items | "Action, Foreign, Classic" |
| Adjusted taxonomy example (slide 9) | Merges Pants + Shirts, Socks + Skincare and Bags + Belts + Wallets to spread transactions evenly | "Merge the small shelves" |
| Target advertising in an electronic storefront | Demographics-based application | "Target the storefront" |

## How this week gets asked

### Question patterns

- **Scenario, then name the method.** Example: a new customer with a few purchases needs suggestions based on people with similar profiles → demographics-based or content, depending on the wording.
- **Which is NOT.** Which is NOT a phase of user-user CF (warehouse slotting), which is NOT a similarity measure (Gini impurity), which is NOT one of the three mining approaches (K-means), which is NOT a data transformation method (Pearson clustering of users), which is NOT a condition for dynamic pricing success (cost exceeds revenue).
- **Compute a number.** Support, confidence, prediction with deviations or weighted sums, markup price, target return price, winner's price in a Vickrey auction, and the count of favourite items.
- **Name the price or auction type.** First-degree, second-degree, third-degree; spatial or temporal; forward, reverse or double; English, Dutch or sealed bid.
- **Which phase or step?** Dimension reduction vs neighborhood formation vs recommendation generation; Apriori join vs prune; personalization collect vs profile vs output.
- **What does X represent?** Equilibrium, menu cost, Apriori principle, meta-items, support count.
- **Named systems.** Amazon, Priceline, Buy.com, Dell, Double-click (week 10), CDnow (week 10), Vickrey.

### Distractor traps for this week

- **Absolute words.** "Always", "guarantees", "only", "eliminates", "completely". Example: Bank Q9 option D, "Dynamic pricing is suitable only for products sold through online channels", is false because the reason it works is changing supply and demand, not the channel.
- **Same field, wrong step.** Association rules and item-item similarity both sound like "what goes together". Association uses confidence on rules; item-item uses a similarity number.
- **Support versus confidence swap.** Support divides by all transactions. Confidence divides by transactions that already have X. Mock 1 Q13 uses confidence: the denominator is A's count (3), not all 5 transactions.
- **Look-alike measures.** Gini impurity looks like a similarity measure but is a decision-tree split measure. Do not pick it as a similarity measure (Mock 1 Q6).
- **Half a formula.** For prediction, the answer is the average plus the deviations divided by total similarity. In Mock 1 Q8, A) 3.25 is what you get by adding 0.25 and forgetting to divide by the total similarity 0.75.
- **Price concepts blurred.** Price dispersion (same item, different prices across sellers or time) vs price differentiation (different prices for different people or groups). Also second-degree (quantity) vs third-degree (group).
- **Reversed cause.** Dynamic pricing "remains constant" (false), "unchanged once equilibrium" (false). The correct one says demand and supply change, so prices adjust.
- **Wrong fixed-price formula.** Markup pricing divides by (1 - markup). A trap is multiplying the cost by (1 + markup), which gives 60 x 1.25 = $75 (Mock 3 Q10 option A).
- **Vickrey confusion.** The winner pays the second-highest bid, not their own bid. A trap is NZ$100,000 (the winning bid).

### If the question says ___, pick the option about ___

1. "Sparse ratings", "scalability", "lower-dimensional" → **dimension reduction** (not neighborhood formation, not prediction).
2. "Same product, different price for each buyer", "auction", "maximum consumer surplus" → **first-degree differentiation**.
3. "Volume discounts", "unit price falls with quantity", "utility prices" → **second-degree**.
4. "Different unit price for business and household groups" → **third-degree** (group pricing).
5. "Several sellers sell the same item at different prices at one time" → **spatial price dispersion**. "Seasonal discounts" → **temporal**.
6. "Items bought together", "co-occurrence", "basket" → **association-based** (rules). "Similar tastes" → **collaborative filtering**. "Similar demographics" → **demographics-based**.
7. "Top-N from rules" → candidates are the **RHS items of rules the user supports**, sorted by **confidence**.
8. "Winner determination": single sourcing → **sorting**; multiple sourcing → **combinatorial**.
9. "Secret bids, the winner pays the second-highest bid" → **Vickrey (second-price sealed bid)**. "Every bidder pays" → **all pay**.
10. "Price goes up with bids and a reserve price" → **English auction**. "Price starts high and falls" → **Dutch auction**.
11. "Several sellers to one buyer" → **reverse auction**. "One seller, many buyers" → **forward auction**. "Trading securities" → **double auction**.
12. "Menu cost", "search cost", "physically present in time and space" → **transaction cost reductions** (E-commerce driver of dynamic pricing).

## Practice walk-through

**Q1.** A movie platform has rated only a tiny fraction of its movies. Which technique transforms the preference matrix to help before neighborhood formation?
- Answer: B) Transforming the original preference matrix into a lower-dimensional representation
- Why: Dimension reduction fixes sparsity and scalability before neighbors are found (User-user phases, card "Dimension reduction").
- Trap: A) Pearson on highly rated items still works on the sparse matrix. It does not address sparsity.

**Q2.** A company has detailed product attributes for all items. Which semi-manual approach can use them directly?
- Answer: C) Clustering products using their features before clustering the users
- Why: Semi-manual dimension reduction uses product features, clusters products first, then users (card "Semi-manual dimension reduction").
- Trap: B) Singular value decomposition on the raw user-item matrix is an automatic method (LSI) and ignores the product features.

**Q3.** A recommender wants every user above a similarity value, with no fixed number of neighbors.
- Answer: D) Weight-threshold neighborhood selection using a similarity cutoff value
- Why: The weight threshold method keeps all neighbors above an absolute cutoff (card "Weight threshold method").
- Trap: A) Aggregate-based best-k fixes the number k, so it cannot keep "every" user above a cut-off.

**Q4.** Why can Amazon's item-item CF give recommendations within fractions of a second?
- Answer: C) Most expensive similarity calculations are completed in an offline phase
- Why: Item-item CF computes the similar-items table offline, and online only looks it up (Item-item CF and Amazon cards).
- Trap: A) Repeated similarity computation in each session is the slow way, the opposite of what Amazon does.

**Q5.** Why is winner determination harder in multiple-sourcing combinatorial auctions than in single-sourcing?
- Answer: C) Selecting winning combinations of bids becomes a combinatorial optimization problem rather than a simple sorting task
- Why: Single sourcing is sorting; multiple sourcing is combinatorial, up to NP-hard (Winner determination card).
- Trap: A) Continuous price updates are not the reason. Winner determination is about the combination, not the timing.

**Q6.** A retailer finds printers and cartridges are bought together. Which application of frequent-pattern analysis fits best?
- Answer: B) Identifying co-occurrence patterns for basket-data analysis purposes
- Why: Basket data analysis finds items that co-occur in receipts (Frequent-pattern applications).
- Trap: A) Latent dimensions in sparse preference matrices is dimension reduction (LSI), not basket co-occurrence.

**Q7.** When generating Top-N recommendations with association rules, which candidate items come first?
- Answer: D) Items appearing on the right-hand side of rules supported by the user
- Why: The RHS items of rules the user supports are the candidates; they are then sorted by confidence (Association-based Top-N).
- Trap: A) Overall most frequent items is a popularity method, not the association rule method.

**Q8.** Why does a demographics-based recommender build a separate category-preference model for each category?
- Answer: C) Predicting whether an active user is likely to prefer a product category based on demographic attributes
- Why: Each category model takes demographics as input and outputs the preference for that category (Demographics steps card).
- Trap: D) Finding nearest neighbors with similarity is collaborative filtering, not the category models.

**Q9.** Why can dynamic pricing be effective in competitive markets?
- Answer: C) Changes in demand and supply create opportunities for prices to adjust over time.
- Why: Market demand and supply change, so the equilibrium moves and prices should adjust (Market equilibrium card).
- Trap: A) "Demand and supply remain relatively constant" is the opposite of the reason dynamic pricing works.

**Q10.** A seller charges business customers one unit price and household customers another, with the price constant within each group.
- Answer: C) Third-degree price differentiation based on customer grouping
- Why: Third-degree (group) differentiation gives each group a unit price that is the same for any quantity (Price differentiation card).
- Trap: B) Second-degree depends on quantity, with the same rule for each individual, not on the group.

## 60-second recap

- CF: user-user finds like-minded users at run time (slow). Item-item builds a similar-items table offline (Amazon).
- User-user phases: dimension reduction, neighborhood formation, recommendation generation.
- Dimension reduction: semi-manual (product features) or automatic (adjusted taxonomy, latent semantic indexing with SVD).
- Similarity measures: Pearson, constrained Pearson, Spearman, cosine (Amazon), mean-square difference. Gini impurity is NOT one of them.
- Neighborhood methods: weight threshold (cut-off), center-based best-k, aggregate-based best-k.
- Prediction: average plus deviations, weighted by similarity. Item-item prediction is a weighted sum over similar items.
- Association rules: support = share of all transactions with X and Y, confidence = share of X-transactions that also have Y.
- Apriori: join, then prune (anti-monotone: a non-frequent set's supersets fail too). Three approaches: Apriori, FP growth, vertical format.
- Association Top-N: RHS items of rules the user supports, sorted by confidence.
- Demographics-based: category-level, from demographics; counting threshold w; ANN or decision tree per category.
- Personalization: content, structure, layout; buyer-driven vs seller-driven; reactive (explicit) vs non-reactive (implicit).
- Dynamic pricing: equilibrium moves when demand and supply shift. Price dispersion (spatial, temporal) vs price differentiation (first, second, third degree).
- Fixed prices: markup = cost / (1 - markup); target return = cost + return x capital / units. Menu cost = cost of announcing a new price.
- Auctions: forward (one seller), reverse (one buyer), double (many). English (up), Dutch (down), sealed bid (first-price, Vickrey second-price). Payment: first, second, all pay.
- Winner determination: single sourcing = sorting; multiple sourcing = combinatorial (NP-hard range). NZ Vickrey 1990: winner pays NZ$6.

---
Coverage check: 45/45 mock questions answerable from this guide.
