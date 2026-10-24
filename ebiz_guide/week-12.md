# Week 12 — Economics of Auctions, Winner Determination and Online Auction Issues

## In one breath

Auctions are rules for turning bids into a sale. This week has three parts. First, the economics: how an auction designer chooses rules that are either efficient (the item goes to whoever values it most) or optimal (the seller earns the most), and why bidders bid what they do. Second, winner determination: after the bids arrive, the computer must pick the winning bids, which is easy (sorting) for one item and much harder (knapsack, set packing) for many items or bundles. Third, online auctions: the formats used on the internet (English auctions, eBay's proxy bidding), the cheating that happens there, and how firms use auctions in their business.

**The big analogy:** A village mela (fair) that auctions the right to run a mango orchard. The panchayat (village council) writes the rules, so the orchard goes to the best farmer (efficient) or brings in the most money (optimal). A clerk then sorts the bids and decides who wins (winner determination). Later, the same village moves the auction online, where a few people use fake bids to push prices up (online fraud).

## Mind map

```text
WEEK 12: Auction economics, winner determination, online auctions
│
├── 1. AUCTION DESIGN ECONOMICS
│   ├── Design problem: rules with desirable properties
│   ├── Valuation models
│   │   ├── Private value (own value, symmetric or not)
│   │   ├── Common value (one true value, only estimates)
│   │   └── Interdependent value (estimate moves with price signals)
│   ├── Goals
│   │   ├── Pareto efficiency (item goes to who needs it most)
│   │   └── Profit maximization (item goes to highest payer)
│   ├── Efficiency = social welfare; optimality = seller revenue
│   ├── Optimal tools: reserve price, entry fee
│   ├── Bayesian game: bidders are players, find equilibrium
│   ├── Revenue equivalence (same assumptions, same revenue)
│   ├── Second price: truthful bidding is dominant
│   ├── More bidders and reserve prices raise revenue
│   ├── Relax assumptions: risk aversion, asymmetry, reputation
│   └── Interdependence: English beats 1st and 2nd; winner's curse
│
├── 2. WINNER DETERMINATION PROBLEM
│   ├── One item: simple sorting
│   ├── Multi-unit divisible: sorting, last bid partly filled
│   ├── Multi-unit indivisible: knapsack
│   ├── Price schedules: multiple-choice knapsack
│   ├── Bundles of items: set packing (each item once)
│   ├── Side constraints: supplier count, budget, market share, reserve
│   ├── Multi-attribute: single vs multiple sourcing
│   └── Double auction: maximize market surplus, market maker
│
└── 3. ONLINE AUCTION ISSUES
    ├── Types: bilateral, sales, procurement, exchanges
    ├── Design: English dominant, second price rising, bid limits
    ├── Business use: surplus disposal, regular channel, B2B buying
    ├── Fraud: 60 percent of internet fraud, six categories
    ├── Cheating: bidder-induced (multiple bids, rings), shill bidding
    └── eBay
        ├── English + second-price hybrid, fixed end time
        ├── Proxy bidding and bid increments
        ├── Models: standard, reserve, buy-it-now, Dutch-type
        └── Bidder strategies: sniper, evaluator, skeptic, unmasking
```

## Concept cards

### 1. Auction design economics

**Auction design problem**
- What it is: designing auction rules that have desirable properties to satisfy the auctioneer's needs. It means modeling the preferences, behavior and information the bidders have, and designing mechanisms whose strategies lead to good outcomes.
- Think of it as: writing the rules of a game so that the players, playing their best, produce the result the organiser wants.
- Spot it in a question: "designing auction rules with desirable properties", "economic considerations" → auction design problem (Mock 1 Q1).

**Valuation: private value model**
- What it is: each participant may have a different value for the item. Symmetric private values: all bidders draw their values from a common distribution (asymmetric: they do not).
- Think of it as: a mango that is worth different amounts to different people, depending on what they need it for.
- Spot it in a question: "each participant has a potentially different value" → private value (Mock 1 Q2, Bank Q2 for symmetric).

**Valuation: common value model**
- What it is: the good has the same value for everyone. Bidders may not know that value exactly.
- Think of it as: an oil field whose true worth is the same for every company, even though each company's geologists guess differently.
- Spot it in a question: "the same value for all the participants" → common value (Bank Q5, the drilling-rights example).

**Valuation: interdependent value model**
- What it is: each bidder has only an estimate (a signal) of the value. The estimate may change after the bidder sees the price signal from others.
- Think of it as: a house that you judge by the offers already made by other buyers. Their offers change your guess.
- Spot it in a question: "each bidder has only an estimate", "may change after the price signal from others" → interdependent value.

**Symmetric and independent bidders**
- What it is: all bidders draw values from the same distribution, and their values are independent of each other (no one knows another's value).
- Think of it as: everyone draws a ticket from the same box, and the tickets do not know each other.
- Spot it in a question: "each bidder independently draws a valuation from the same probability distribution" → symmetric independent private value (Bank Q2).

**Pareto efficiency (design goal)**
- What it is: an auction outcome that cannot be improved by any further trade. The item goes to the person who needs it most, even if that person does not pay the highest amount.
- Think of it as: the mango goes to the farmer who really needs it for the festival stall, not to the richest bidder.
- Spot it in a question: "the item goes to the person who needs it most (he may not pay the highest)", "after trade should not be possible" → Pareto efficiency (Mock 1 Q3, Bank Q1).

**Profit maximization (design goal)**
- What it is: the design that gives the seller the highest expected profit. The item should go to the person who pays the most.
- Think of it as: selling the mango to the highest bidder, whatever their need.
- Spot it in a question: "highest expected profit to the seller", "highest amount" → profit maximization.

**Efficient auction**
- What it is: an auction designed to maximize social welfare, which is the sum of all players' surplus (value gained by the players).
- Think of it as: maximizing the total happiness in the village, not just the panchayat's cash.
- Spot it in a question: "maximize social welfare", "sum of the players' surplus" → efficient (Mock 1 Q4).

**Optimal auction**
- What it is: an auction designed to maximize the seller's expected revenue. It uses tools such as a reserve price or an entry fee.
- Think of it as: the panchayat's cash box is the goal.
- Spot it in a question: "maximize expected revenue of the seller", "reserve price or entry fee" → optimal (Mock 1 Q6).

**Efficiency versus optimality (trade-off)**
- What it is: optimality and efficiency usually cannot be achieved at the same time, so the designer chooses before writing the rules. A financially self-interested seller prefers optimal auctions. A public agent such as the government prefers efficient auctions. All agents need some balance to make an auction practical.
- Think of it as: a shopkeeper wants the highest price, while a government wants the best use for the resource. The rules must choose one as the main aim.
- Spot it in a question: "a self-interested seller and a government" → seller prefers optimal, government prefers efficient (Mock 1 Q5).

**Three popular mechanisms**
- What it is: first-price auction, second-price auction and English auction.
- Think of it as: the three standard ways to run a live or sealed auction.
- Spot it in a question: "three popular mechanisms" → first price, second price, English (Mock 1 Q7).

**Efficiency and optimality of the three mechanisms**
- What it is: all the major formats are efficient if bidders are truthful. The first-price and English auctions are optimal. The second-price auction becomes optimal if an appropriate reserve price is set.
- Think of it as: all three give the right person the item, but only the first-price and English auctions automatically squeeze the most money out of the bidders.
- Spot it in a question: "which is optimal" → first-price and English. "second-price optimal with a reserve" → second-price, with a suitable reserve.

**Bayesian game (modeling an auction)**
- What it is: the auction is treated as a game in which the bidders are the players, and the problem is to find the equilibrium (the strategies that no one wants to change).
- Think of it as: a card game where each player guesses what the others hold, and you look for the stable way to play.
- Spot it in a question: "modeling an auction as a Bayesian game" → bidders are the players, the problem is to find the equilibrium (Mock 1 Q15).

**Basic model assumptions (four)**
- What it is: n bidders; bidders' values are independent and identically distributed random variables (symmetric, independent bidders); bidders are risk neutral; no collusion or predatory behavior.
- Think of it as: a level, fair game where nobody is afraid of losing, nobody teams up with a rival, and everybody draws values from the same box.
- Spot it in a question: "risk-neutral, independent identical value draws, no collusion" → basic model assumptions (Mock 1 Q8).

**Revenue equivalence theorem**
- What it is: under the basic assumptions, all the basic auction formats are efficient and generate the same expected revenue.
- Think of it as: several different ways of cooking the same dish, and each one ends up with the same bill.
- Spot it in a question: "all basic formats generate the same revenue" → revenue equivalence. Breaks when assumptions are relaxed.

**Truthful bidding in a second-price auction (dominant strategy)**
- What it is: under independent private values with risk-neutral bidders, bidding your true value is the dominant strategy (the best move whatever others do). The item goes to the highest valuation.
- Think of it as: you pay the second price, so bidding your true value can never cost you more than what you think it is worth.
- Spot it in a question: "a bidder with valuation ₹500 should bid" → bid exactly the value (Bank Q3). "Bidder 1 values the item at $80" → bid $80 (Mock 1 Q9).

**Incentive-compatible direct mechanism**
- What it is: a mechanism in which telling the truth is the best strategy for each bidder.
- Think of it as: a rule that makes honesty the most profitable choice.
- Spot it in a question: "incentive compatible" → truthful bidding is best (second-price example on the slide).

**Two-bidder example (expected payoff)**
- What it is: bidder 1's expected payoff is the probability that b1 ≥ b2, times (v1 − b2). If v1 > b2, bidder 1 should bid as high as possible, namely b1 = v1, to win. If v1 < b2, bidder 1 should bid as low as possible to avoid winning, which is again b1 = v1.
- Think of it as: bid your true value. Higher wins only when you want to win, and lower avoids winning only when you do not want to.
- Spot it in a question: "two bidders with valuations v1, v2 and bids b1, b2" → the optimal bid is the true value.

**Optimal mechanism: two ways to raise revenue**
- What it is: increase the number of bidders, or set a reserve price.
- Think of it as: a crowd of bidders raises the price, and a floor price stops it from falling too low.
- Spot it in a question: "increasing expected revenue, two ways" → more bidders and reserve price (Mock 1 Q6, Bank Q4).

**More bidders, higher expected payoff**
- What it is: with n bidders and independent private values, and values uniform between 50 and 100, expected revenue rises as n grows. The rise gets smaller as n grows. Standard result (the slide's chart is not in the text copy): the expected second-highest value is 50 + 50 x (n − 1)/(n + 1), which gives 66.7 for n = 2, 75 for n = 3, 80 for n = 4.
- Think of it as: the first few extra bidders add a lot, the next few add a little.
- Spot it in a question: "how does expected revenue change as the number of bidders increases" → rises, with smaller and smaller gains (Mock 1 Q11).

**Reserve price**
- What it is: a minimum price r below which the seller does not sell the item. It excludes bidders whose valuation is below r. A proper reserve price increases revenue.
- Think of it as: a floor price in a sale. The seller would rather keep the item than sell it cheaply.
- Spot it in a question: "minimum price below which the seller does not sell" → reserve price. "Which bidders are excluded" → bidders with valuations below the reserve (Mock 1 Q10).

**Relaxing the basic assumptions (three)**
- What it is: risk aversion (bidders worried about not winning bid higher and prefer English auctions); asymmetric valuations (strong versus weak bidders); reputation effect (a bidder with reputation can be aggressive).
- Think of it as: real people are not identical, not fearless, and not anonymous.
- Spot it in a question: "worried about not winning", "strong versus weak bidder", "reputation" → relaxed assumptions. The risk-averse bidder bids higher and prefers English auctions (Mock 1 Q12).

**Interdependent values**
- What it is: a bidder's valuation is affected by knowing other bidders' valuations. Each bidder has only partial information about the item, in the form of a signal (a random variable).
- Think of it as: buying a second-hand car where the other buyers' offers change how you value it.
- Spot it in a question: "valuation affected by knowing others' valuations", "partial information in the form of a signal" → interdependent values.

**Pure common value**
- What it is: the item has the same value for all bidders, and each bidder has an unbiased estimate (signal) of that value before the auction.
- Think of it as: an oil field worth the same to everybody, with each company's geologist giving a slightly different guess.
- Spot it in a question: "same value for all bidders; each has an estimate" → pure common value (Bank Q5, Mock 1 Q14 situation).

**Revenue under interdependencies**
- What it is: English and second-price auctions are no longer equivalent. English auctions are likely to yield more revenue than both the first-price and second-price auctions.
- Think of it as: when you can hear the bids go up, you learn more about the item's value, so you bid more.
- Spot it in a question: "English likely yields more revenue than both first-price and second-price" → Mock 1 Q13, Bank Q6.

**Information flow and releasing information**
- What it is: more information flow is likely to increase the value of the object. So releasing all information about the item may give the auctioneer more profit.
- Think of it as: showing the buyers the full inspection report makes them confident and willing to pay more.
- Spot it in a question: "releasing all the information about the item may yield more profit" → information release increases revenue.

**Winner's curse**
- What it is: the winner pays too much, because the winner failed to anticipate and correct the bidding strategy. The winner is the bidder with the highest price signal, and winning means everyone else had a lower estimate.
- Think of it as: you bid the most for a house that everyone else valued lower. Winning means you were the most optimistic, so you probably overpaid.
- Spot it in a question: "winner pays too much due to failing to anticipate", "every rival's estimate was lower" → winner's curse (Mock 1 Q14).

**Shaving bids**
- What it is: the correction for the winner's curse. Bidders bid below their own estimate by more, to protect themselves.
- Think of it as: cutting a bit off the price you were going to offer, to cover the chance that you are the one who overestimated.
- Spot it in a question: "shave bids further", "correction to winner's curse" → shave further (Mock 1 Q14).

**Sniping (sniper strategy)**
- What it is: waiting until the final moments of an auction to place a single bid. It is an eBay bidding strategy (see the eBay strategy cards). In the winner's curse question (Mock 1 Q14) sniping is a wrong option.
- Think of it as: waiting until the last second to shout your bid.
- Spot it in a question: "wait until the final moments" → sniper strategy.

### 2. Winner determination problem

**Winner determination problem (WDP)**
- What it is: after the bids are in, choose which bids win, so that the seller's objective is met (maximum revenue, or minimum procurement cost) and supply matches demand. Also called market clearing.
- Think of it as: the clerk who picks the winning bids from the list.
- Spot it in a question: "winner determination", "market clearing" → WDP. Its difficulty depends on the auction format.

**Simple WDP (one item, one unit, one winner, forward, price-only bids)**
- What it is: the simplest case. The formula is maximize the sum of p_i x_i, subject to the sum of x_i being at most 1, where x_i is 0 or 1. The solution is a simple sorting problem: take the highest price.
- Think of it as: the highest bid on the table wins.
- Spot it in a question: "single item, single unit, single winner, forward, price only" → simple sorting problem (Mock 2 Q1, Bank Q7).

**Forward and reverse in multi-unit auctions**
- What it is: in a forward multi-unit auction the aim is to maximize the selling price (revenue). In a reverse multi-unit auction the aim is to minimize procurement cost.
- Think of it as: the seller wants the highest total; the buyer wants the lowest total.
- Spot it in a question: "a reverse auction, which quantity to minimize" → procurement cost (Mock 2 Q2).

**Divisible bid**
- What it is: a bid whose quantity can be partly satisfied. A bidder who asks for 60 units may get 20.
- Think of it as: a bucket that can be filled partly.
- Spot it in a question: "partial allocation" or "fraction of a bid" → divisible bid (Bank Q8).

**Indivisible bid**
- What it is: a bid that must be filled all or nothing.
- Think of it as: a whole crate or nothing.
- Spot it in a question: "all or nothing for the quantity" → indivisible.

**Price schedule bid**
- What it is: a bid that offers a per-unit price that depends on the quantity bought (for example, cheaper for more units). Volume discounts are price schedules.
- Think of it as: a price list where big orders get lower prices per unit.
- Spot it in a question: "volume discounts", "per-unit price for each quantity interval" → price schedule.

**Partial allocation of the last bid (divisible case)**
- What it is: when bids are divisible, sort bids by price, fill them in order until supply runs out, and give the last chosen bid only part of its quantity.
- Think of it as: the last shopper in the queue gets the leftover stock.
- Spot it in a question: "which bid receives a partial allocation when supply runs out" → the last chosen bid in the sorted order (Mock 2 Q3).

**Multi-unit divisible example (slide 26, sold 100 units)**
- What it is: five bidders with (price per unit, quantity): (20, 30), (30, 30), (15, 60), (10, 30), (25, 20). Sort by price: 30 (30 units), 25 (20 units), 20 (30 units), 15 (20 of the 60 units, the partial bid), 10 (nothing). Total sold = 100. Revenue = 30×30 + 25×20 + 20×30 + 15×20 = 2,300.
- Think of it as: fill from the top price downward until the stock is gone.
- Spot it in a question: "five bidders divisible bids, 100 units, maximum revenue" → 2,300 (Mock 2 Q4).

**Indivisible multi-unit example (slide 27)**
- What it is: the same five bids, but each bid must be taken whole or not at all. The best set is bids (20,30), (30,30) and (25,20), with total 80 units and revenue 30×30 + 25×20 + 20×30 = 2,000. The slide notes it is a knapsack problem.
- Think of it as: packing a bag of limited weight with the most valuable items, where each item must go in whole.
- Spot it in a question: "indivisible multi-unit, 100 units" → knapsack problem (Mock 2 Q5).

**Knapsack problem**
- What it is: choose items with limited total weight (here quantity) to maximise total value (here price times quantity). The slide asks whether branch and bound solves it, and notes that a greedy algorithm does exist.
- Think of it as: a suitcase with a weight limit. You pack the best value items first, but the last item may not fit.
- Spot it in a question: "indivisible bids", "limited total quantity", "maximize value under a limit" → knapsack.

**Greedy algorithm (for the knapsack)**
- What it is: a method that picks the best-value-per-unit items in order until the limit is reached. The slide says a greedy algorithm does exist for this problem.
- Think of it as: taking the best bang-for-buck item first, then the next, and so on.
- Spot it in a question: "a greedy algorithm does exist" → the knapsack can be approximated or solved by greedy steps.

**Multiple-choice knapsack (reverse auction with volume discounts)**
- What it is: in a multi-unit reverse auction with price schedules, each seller can be awarded only one quantity interval (one band of its price schedule). The problem becomes choosing one band per seller while meeting the total demand at minimum cost.
- Think of it as: each supplier has several price tiers, and you can take only one tier per supplier.
- Spot it in a question: "each supplier can be awarded only one quantity interval" → multiple-choice knapsack (slide 28, Mock 2 Q6).

**Worked example: tonnes from two suppliers (Mock 2 Q6, answer $2,700)**
- What it is: the buyer needs 60 tonnes. Supplier 1's bands: 0 to 10 at $100, 10 to 20 at $80, 20 to 30 at $60, 30 to 40 at $40. Supplier 2's bands: 0 to 30 at $100, 30 to 40 at $50. Each supplier can be awarded only one band.
- Think of it as: choose one band for each supplier, then buy 60 tonnes from the two bands at the lowest total cost.
- Working: take supplier 1's 30 to 40 band at $40, and buy 30 tonnes for $1,200. Take supplier 2's 30 to 40 band at $50, and buy 30 tonnes for $1,500. Total = $2,700. This is the minimum under the key.
- Spot it in a question: "minimum total cost, two suppliers, one band each" → $2,700.

**Multi-item auctions (forward and reverse)**
- What it is: auctions for several different items at once. Forward multi-item auctions sell bundles of items. Reverse multi-item procurement buys several items, with side constraints.
- Think of it as: a sale of a whole basket of different goods rather than one item.
- Spot it in a question: "several items at once" → multi-item auction.

**Set packing (bundled forward auction)**
- What it is: the problem of choosing the largest number of mutually disjoint subsets (bundles) from a given family, where each item is sold only once. Winner determination in a bundled multi-item forward auction is a set-packing problem.
- Think of it as: packing non-overlapping gift boxes, where each product can go in only one box.
- Spot it in a question: "each item can be sold only once across the winning bundles", "mutually disjoint" → set packing (Mock 2 Q9, Bank Q9).

**Bundles and the one-bundle-per-bidder rule**
- What it is: in the slide's example each bidder submits bundles, and only one bundle can be chosen from each buyer. Each item is considered only once.
- Think of it as: one parcel per customer and no item sent twice.
- Spot it in a question: "only one bundle from each buyer", "each item considered once" → set packing rules.

**Worked example: bundles (Mock 2 Q10, answer 250)**
- What it is: bidder 1 bids {A,C,D} for 100, {A,B,C} for 150, {A,B} for 50, and {B,C} for 75. Bidder 2 bids {E} for 50, {C,E} for 200, and {D,E} for 75.
- Working: the candidate pairs are {A,B,C} 150 with {D,E} 75 = 225; {A,C,D} 100 with {E} 50 = 150; {A,B} 50 with {C,E} 200 = 250; {B,C} 75 with {D,E} 75 = 150. The best is {A,B} with {C,E} at 250, since A, B, C, E are disjoint across the two.
- Spot it in a question: "maximum total revenue with bundles, each item once" → 250.

**Side constraints in multi-item procurement (four named on slide 30)**
- What it is: number of winning suppliers (multi-sourcing); budget limits on trades (how much the buyer can spend); market share constraints (how much business to give each winner); reservation prices (the minimum price the seller will accept, the minimum bid price). Slide 24 adds representation constraints and volume discounts.
- Think of it as: extra rules that make the winner choice harder, like a budget and a rule that one supplier cannot take more than 50 percent.
- Spot it in a question: "side constraint" → one of these. "Alphabetical ranking of supplier names" is NOT one (Mock 2 Q11).

**Reservation price (procurement side)**
- What it is: in a reverse auction, the minimum price below which the seller will not sell the product (the minimum bid price).
- Think of it as: the floor price a supplier will not go below.
- Spot it in a question: "minimum bid price", "the seller will not sell below" → reservation price (also called reserve price in sales auctions).

**Multi-attribute auctions**
- What it is: items judged on several attributes (for example price, quality, delivery). They are usually reverse auctions with constraint types. The winner can be found by single sourcing or multiple sourcing.
- Think of it as: choosing a supplier on a score card that counts quality and speed as well as price.
- Spot it in a question: "several attributes", "scoring", "reverse auction with constraints" → multi-attribute (Week 11 slide 81 covers the sorting versus combinatorial split).

**Single sourcing and multiple sourcing (winner determination)**
- What it is: single sourcing means one supplier covers all demand, which is a sorting problem. Multiple sourcing means several suppliers together cover the demand, which is a combinatorial problem.
- Think of it as: one vendor for the whole order (sort the offers) versus several vendors each with a part (find the best combination).
- Spot it in a question: "single sourcing" → sorting. "multiple sourcing" → combinatorial (the same split is in week 11, slide 81).

**Double auction**
- What it is: an auction with multiple buyers and multiple sellers, both sides submitting bids and asks. Used in financial institutions for over a hundred years, for example the New York Stock Exchange.
- Think of it as: a stock exchange floor where buyers and sellers post prices, and the exchange matches them.
- Spot it in a question: "multiple buyer and multiple seller auction", "New York Stock Exchange", "securities" → double auction (Mock 2 Q7).

**Continuous double auction**
- What it is: a double auction that clears (matches trades) continuously, as orders arrive.
- Think of it as: a live market where trades happen at every moment.
- Spot it in a question: "clears continuously" → continuous double auction (Mock 2 Q8).

**Clearinghouse or call auction**
- What it is: a double auction that clears periodically, at set times, instead of continuously.
- Think of it as: a market that opens for matching at fixed times, like a daily call auction.
- Spot it in a question: "clears periodically" → clearinghouse or call auction (Mock 2 Q8).

**Asks, bids and market surplus**
- What it is: sellers post asks (the price they want) and buyers post bids (the price they will pay). Market surplus is the difference between the bid and the ask, summed over matched pairs. A trade is worth making only if bid is at least ask.
- Think of it as: the gain each matched buyer and seller share between them.
- Spot it in a question: "maximize market surplus", "difference between bids and asks" → double auction objective (Bank Q10, Mock 2 Q12).

**Equilibrium point in a double auction**
- What it is: the point where the supply curve (sellers' asks sorted from low to high) and the demand curve (buyers' bids sorted from high to low) cross. Trades happen up to that quantity.
- Think of it as: where the cheapest sellers and the most eager buyers meet.
- Spot it in a question: "supply and demand cross" → equilibrium (slide 32). The example uses the same numbers as Mock 2 Q12 (asks 6, 9, 5, 3 and bids 4, 2, 8, 10), sorted.

**Winner determination in a double auction (slide 33)**
- What it is: choose which buyer-seller pairs trade so that total market surplus is maximized. Each seller trades at most once, and each buyer trades at most once.
- Think of it as: pairing the highest buyers with the lowest sellers, as long as the buyer pays more than the seller asks.
- Spot it in a question: "maximize the market surplus" → matching highest bids with lowest asks.

**Worked example: double auction surplus (Mock 2 Q12, answer 10)**
- What it is: sellers' asks 6, 9, 5 and 3. Buyers' bids 4, 2, 8 and 10. Each unit trades at most once.
- Working: sort asks low to high (3, 5, 6, 9) and bids high to low (10, 8, 4, 2). Match 10 with 3 gives surplus 7. Match 8 with 5 gives surplus 3. Matching 4 with 6 would be a loss (bid below ask), so do not trade. Total surplus = 7 + 3 = 10.
- Spot it in a question: "maximum total market surplus" → 10.

**Market maker**
- What it is: a party that disassembles and reassembles bundles of items to make trades possible. This is one of the formulation considerations for double auctions.
- Think of it as: a middle person who splits a bulk lot into parts and packs small lots into a deal.
- Spot it in a question: "role of a market maker" → disassembling and reassembling bundles (Mock 2 Q13).

**Divisibility (double auction)**
- What it is: the ability to satisfy a fraction of an agent's bids and asks.
- Think of it as: filling half of your order.
- Spot it in a question: "satisfy only a fraction of an agent's bids" → divisibility (Mock 2 Q14).

**Homogeneous and heterogeneous goods**
- What it is: whether all traded units are identical (homogeneous) or different (heterogeneous).
- Think of it as: identical packets of milk versus different houses.
- Spot it in a question: "whether all traded units are identical" → homogeneous or heterogeneous (Mock 2 Q15).

**Aggregation (double auction)**
- What it is: combining items into bundles and considering whether to include buy side, sell side or both sides in the formulation.
- Think of it as: packing small lots into bigger lots for the market.
- Spot it in a question: "combined bundles of buy-side and sell-side items" → aggregation.

### 3. Online auction issues

**Online auction types (2 by 2 grid)**
- What it is: classification by number of sellers and buyers. One seller and one buyer: bilateral negotiation. One seller and many buyers: web-based sales auction (C2C and B2C). Many sellers and one buyer: web-based procurement (reverse) auction (C2B and B2B). Many sellers and many buyers: web-based exchange.
- Think of it as: the number of people on each side of the table decides the auction type.
- Spot it in a question: "one seller, many buyers" → web-based sales (Mock 3 Q1). "one buyer invites many sellers" → web-based procurement (Mock 3 Q2).

**Bilateral negotiation**
- What it is: one buyer and one seller bargaining directly.
- Think of it as: two people haggling face to face.
- Spot it in a question: "one buyer and one seller" → bilateral negotiation.

**Web-based sales auction (C2C and B2C)**
- What it is: one seller sells to many buyers online. C2C means consumer to consumer, and B2C means business to consumer.
- Think of it as: a rare painting listed for anyone around the world to bid on (Mock 3 Q1).
- Spot it in a question: "one seller and many buyers" → web-based sales auction.

**Web-based procurement (reverse) auction (C2B and B2B)**
- What it is: one buyer invites many sellers, and the lowest price wins. C2B means consumer to business, and B2B means business to business.
- Think of it as: a company asking several printers for quotes for a large print job, and the cheapest wins.
- Spot it in a question: "one buyer invites many sellers and the lowest price wins" → web-based procurement (Mock 3 Q2).

**Web-based exchange**
- What it is: many sellers and many buyers trading online, like a double auction.
- Think of it as: an online stock market or commodity exchange.
- Spot it in a question: "many buyers and many sellers online" → web-based exchange.

**English auction (dominant online)**
- What it is: an ascending-bid auction. Bids rise until no one bids more. The lecture says the English auction is currently the dominant mechanism on the internet.
- Think of it as: calling out higher prices until one bidder remains.
- Spot it in a question: "currently the dominant mechanism on the internet" → English auction (Mock 3 Q3).

**Second-price auction online**
- What it is: a second-price auction, which was not well adopted in traditional auctions, has become an important option online.
- Think of it as: the winner pays the second-highest bid, which online systems can handle.
- Spot it in a question: "second price has become an important option" → second-price online (slide 38).

**Bid constraints: minimum bid and reserve price**
- What it is: a minimum bid is the lowest bid the seller will take, and a reserve price is the secret minimum price below which the item will not be sold.
- Think of it as: the lowest price the shopkeeper will accept, kept hidden from buyers.
- Spot it in a question: "seller's secret minimum price, below which the item will not be sold" → reserve price (Mock 3 Q4).

**Bid constraints: maximum bid and buy-now price**
- What it is: a maximum bid is the highest bid a bidder can place (in eBay's proxy system, the maximum willingness to pay). A buy-now price lets a buyer take the item immediately at a fixed price.
- Think of it as: a "buy it now" tag on the item that ends the bidding.
- Spot it in a question: "take the item immediately at a fixed price" → buy-now price.

**Auction duration and ending rules**
- What it is: the rules that decide when an auction ends (for example, a fixed end time).
- Think of it as: the clock on the wall of the mela.
- Spot it in a question: "ending rules" → auction duration.

**Multi-unit and complex formats (online)**
- What it is: handling multi-unit auctions and complex formats needs quick response times and appropriate algorithms.
- Think of it as: the server must solve the knapsack or set packing fast enough that bidders do not wait.
- Spot it in a question: "quick response time", "appropriate algorithms" → handling complex formats online.

**Business use: B2C surplus auctions**
- What it is: a firm uses auctions to dispose of surplus inventory (extra stock).
- Think of it as: a shop clearing old stock through a bidding sale.
- Spot it in a question: "dispose of excess inventory" → B2C surplus auction (Mock 3 Q15).

**Business use: B2C auctions as a regular sales channel**
- What it is: the firm runs auctions continuously as a normal way to sell to consumers.
- Think of it as: an auction shop that sells every day.
- Spot it in a question: "a regular sales channel" → B2C regular channel.

**Business use: B2B surplus and procurement auctions**
- What it is: B2B surplus auctions dispose of extra stock to other businesses. B2B procurement auctions let a firm buy from several suppliers through bids.
- Think of it as: a factory selling leftover steel to other factories, or buying cement by reverse auction.
- Spot it in a question: "business to business" + "procurement" → B2B procurement; + "surplus" → B2B surplus.

**Auction intermediaries**
- What it is: third parties that run auctions for sellers and buyers.
- Think of it as: an auction house that charges a commission.
- Spot it in a question: "use of auction intermediaries" → a business integration point.

**Auction fraud (internet fraud share)**
- What it is: auction frauds make up the largest part of all internet frauds, at 60 percent, according to the Internet Fraud Complaint Center (IFCC).
- Think of it as: most of the complaints in the internet crime office are about auctions.
- Spot it in a question: "share of internet fraud complaints" → 60 percent (Mock 3 Q5).

**Six categories of auction fraud**
- What it is: non-delivery of goods; misrepresentation of the items; triangulation; fee stacking; selling of black-market goods; multiple bidding and shill bidding (cheating).
- Think of it as: six different tricks, one for each stage of the deal.
- Spot it in a question: the scenario names one of these six (see the individual cards).

**Non-delivery of goods**
- What it is: the buyer pays but the seller never ships the goods.
- Think of it as: paying for a parcel that never arrives.
- Spot it in a question: "accepts payment but never ships" → non-delivery (Mock 3 Q6 trap).

**Misrepresentation of the item**
- What it is: the seller describes the item falsely (a different quality, condition or origin).
- Think of it as: the photo shows a brand-new phone, but you get a refurbished one.
- Spot it in a question: "item described falsely" → misrepresentation.

**Triangulation**
- What it is: the perpetrator buys items from an online merchant using a stolen credit card number, then sells them to unsuspecting buyers.
- Think of it as: a middle person who uses someone else's card to buy goods and resells them to you.
- Spot it in a question: "stolen credit card", "buys items and sells to unsuspecting buyers" → triangulation (Mock 3 Q6).

**Fee stacking**
- What it is: the seller keeps adding hidden charges (after the winning bid, or at checkout).
- Think of it as: a restaurant bill that keeps growing with service charges you did not agree to.
- Spot it in a question: "keeps adding hidden charges" → fee stacking (Mock 3 Q7).

**Selling black-market goods**
- What it is: selling illegally copied software packages, audio CDs, movie CDs and games, or goods with improper packaging, no warranty and no instruction manual.
- Think of it as: pirated DVDs sold as originals.
- Spot it in a question: "illegally copied", "no warranty or instruction manual" → black-market goods.

**Multiple bidding and shill bidding**
- What it is: multiple bidding means one bidder places many bids under different identities. Shill bidding means a fake bidder, often placed by the seller or auctioneer, raises the price with no intention of buying.
- Think of it as: a planted person in the crowd who keeps raising the price.
- Spot it in a question: "fake bidder raises the price" → shill bidding. "One bidder uses several identities" → multiple bidding.

**Cheating (why it happens online)**
- What it is: cheating leaves no direct evidence. It is encouraged by cheap pseudonyms (fake identities that cost nothing), greater information asymmetry (the seller knows more than the buyer), lack of personal contact, and the tolerance of bidders.
- Think of it as: a village where nobody knows anyone, so nobody is embarrassed to lie.
- Spot it in a question: "cheap pseudonyms", "information asymmetry", "lack of personal contact", "tolerance of bidders" → reasons for online cheating (Mock 3 Q9).

**Types of cheating (by who induces it)**
- What it is: induced by bidder: multiple bidding and rings. Induced by auctioneer: shill bidding.
- Think of it as: the cheat comes from the crowd (bidders) or from the stage (auctioneer).
- Spot it in a question: "shill bidding is induced by which party" → the auctioneer (Mock 3 Q8).

**Rings**
- What it is: a group of bidders who collude, so that one of them wins at a low price and the others do not bid against each other.
- Think of it as: a group of friends agreeing that only one of them will bid.
- Spot it in a question: "bidders working together to fix the price" → rings (bidder-induced cheating).

**eBay's format (hybrid)**
- What it is: all eBay auctions use an ascending-bid format, which is a hybrid of English and second-price auctions. The important difference is a fixed end time set by the seller.
- Think of it as: an English auction where the winner pays the price of the second-highest bidder's proxy, and the clock ends at a time set by the seller.
- Spot it in a question: "English and second-price hybrid, with a fixed seller-set end time" → eBay (Mock 3 Q10).

**eBay auction models (four)**
- What it is: standard auction, reserve price auction, buy-it-now price, and Dutch auction. The eBay Dutch auction is not the same as the traditional Dutch auction. It is a multi-unit auction with volume discounts.
- Think of it as: four ways to sell on eBay, from a plain auction to a multi-unit lot with discounts.
- Spot it in a question: "multi-unit with volume discount" → eBay's Dutch-type model (not traditional).

**Proxy bidding**
- What it is: a bidder submits a maximum bid (the maximum willingness to pay). eBay raises the bidder's active offer automatically, up to the maximum, whenever other bids come in. The bid placed by the proxy is the proxy bid.
- Think of it as: a helper who bids for you, step by step, up to your limit, while you are away.
- Spot it in a question: "maximum bid", "eBay raises the offer automatically", "proxy bid" → proxy bidding (Mock 3 Q11).

**eBay reserve price (secret reserve)**
- What it is: the seller's reserve price is treated like any other bid. If the buyer's offer meets or exceeds the secret reserve, the buyer's bid is raised to that price immediately.
- Think of it as: the hidden floor price is treated as an automatic bid.
- Spot it in a question: "reserve price treated like any other bid" → eBay reserve handling.

**Minimum bid increment and bid increment table**
- What it is: eBay enforces a minimum bid increment that, together with the current ask price, sets the lowest bid the server accepts. The bid increment table is a schedule in which the minimum increment grows as the current ask price rises.
- Think of it as: bids must go up by at least a set step, and the step gets bigger as the price gets bigger.
- Spot it in a question: "increments increase as the current ask price rises" → bid increment table (Mock 3 Q12).

**Current ask price (list price)**
- What it is: the price shown to bidders. It equals the second-highest maximum bid plus a small increment from the bid increment table.
- Think of it as: the price the next bidder must beat, which is just above the second proxy's limit.
- Spot it in a question: "current ask price once both proxies are active" → second-highest maximum + increment (Mock 3 Q11: $70 + $1 = $71).

**Data available to an eBay bidder (seven items)**
- What it is: the item description; the number of bids; the ID of all bidders; the time and amount of each bid; the time remaining until the end; whether the reserve price has been met; and the current ask price.
- Think of it as: the information board in the auction hall.
- Spot it in a question: "which is NOT available to a bidder" → the seller's bank account number (Mock 3 Q13).

**Single bid engagement strategies (eBay)**
- What it is: bidding once. Types: evaluator (bids after checking the value), late bidder (bids late but not in the final seconds), and sniper (waits until the final moments and bids once).
- Think of it as: different timings for a single bid.
- Spot it in a question: "waits until the final moments and places a single bid" → sniper (Mock 3 Q14).

**Multiple bid engagement strategies (eBay)**
- What it is: bidding more than once. Types: skeptic (tests the market with bids) and unmasking (bids to reveal other bidders' values).
- Think of it as: poking the market several times to learn what others will pay.
- Spot it in a question: "multiple bids to test or reveal" → skeptic or unmasking.

## How it flows

### 1. The efficiency versus optimality choice (slides 6 to 9)

```text
Auction designer's choice (made BEFORE the rules are written)
  ├── EFFICIENT  ──► maximize social welfare (sum of players' surplus)
  │                  goal: the item goes to whoever values it most
  │                  favoured by: public agents such as government
  └── OPTIMAL    ──► maximize the seller's expected revenue
                     tools: reserve price, entry fee
                     favoured by: a self-interested seller

Note: all major formats are efficient if bidders are truthful.
      First-price and English are optimal. Second-price is optimal with a suitable reserve.
```

### 2. Valuation models (slide 5)

```text
Bidder's value of the good
  ├── Private value      ──► each bidder has its own value (symmetric: drawn from the same distribution)
  ├── Common value       ──► one true value for all; bidders only estimate it
  └── Interdependent     ──► each bidder has an estimate that changes after seeing others' bids
```

### 3. Basic model: assumptions and result (slide 10)

```text
ASSUMPTIONS (basic model)
  n bidders
  values are independent and identically distributed (symmetric, independent)
  risk neutral
  no collusion, no predatory behavior
        │
        ▼
RESULT: all basic formats are efficient and give the SAME expected revenue (revenue equivalence)

Relax an assumption ──► results change:
  risk aversion  ──► bids higher, prefers English
  asymmetry      ──► strong and weak bidders
  reputation     ──► aggressive bidding
  interdependence──► English is likely to earn more than 1st and 2nd price
```

### 4. Truthful bidding in a second-price auction (slides 11 and 12)

```text
Bidder 1 has value v1, rival's bid is b2
  if v1 > b2  ──► bid as high as possible so you win: b1 = v1
  if v1 < b2  ──► bid as low as possible so you do NOT win: b1 = v1 (still possible)
  Result: bidding your true value (b1 = v1) is the dominant strategy
```

### 5. Two ways to raise expected revenue (slides 13 to 15)

```text
Seller wants more expected revenue
  ├── More bidders      ──► more competition, higher expected payoff (gains shrink as n grows)
  └── Reserve price r   ──► a floor; bidders with value below r are excluded
                            a proper reserve increases revenue
```

### 6. Winner's curse (slide 19)

```text
Common value: each bidder has a noisy estimate (price signal)
     │
     ▼
Bidder with the HIGHEST signal wins (everyone else estimated lower)
     │
     ▼
The winner may have overestimated ──► pays too much  = WINNER'S CURSE
     │
     ▼
Correction: shave the bid further below your own estimate
```

### 7. Winner determination: which problem for which format (slides 23 to 33)

```text
Format                                           Winner determination problem
One item, one unit, one winner, price-only bids  ──► simple sorting (highest price wins)
Multi-unit, divisible bids                       ──► sorting; last chosen bid partly filled
Multi-unit, indivisible bids                     ──► knapsack problem
Multi-unit, price schedule (volume discounts)    ──► multiple-choice knapsack
Multi-item bundles (each item once)              ──► set packing
Double auction (buyers and sellers both bid)     ──► maximize market surplus (matching)
```

### 8. Divisible multi-unit example (slide 26, answer 2,300)

```text
Sort bids by price (highest first). Fill until 100 units are sold:

Bid (price, qty)   Units taken   Revenue
(30, 30)           30            30 x 30 = 900
(25, 20)           20            25 x 20 = 500
(20, 30)           30            20 x 30 = 600
(15, 60)           20  (partial) 15 x 20 = 300     <- last chosen bid, partial
(10, 30)           0             not sold
                   Total units = 100              Total revenue = 2,300
```

### 9. Indivisible multi-unit example (slide 27, answer 2,000 with 80 units)

```text
Each bid must be taken whole. Choose the best set that fits 100 units:
  (30, 30) + (20, 30) + (25, 20) = 80 units, revenue 900 + 600 + 500 = 2,000
  (value = price x quantity; weight = quantity)  ──► a knapsack problem
```

### 10. Bundles: set packing (slide 29, Mock 2 Q10 answer 250)

```text
Bidder 1 bundles: {A,C,D} 100   {A,B,C} 150   {A,B} 50   {B,C} 75
Bidder 2 bundles: {E} 50        {C,E} 200     {D,E} 75

Pick at most one bundle per bidder, and each item at most once:
  {A,B,C} 150 + {D,E} 75 = 225
  {A,C,D} 100 + {E} 50   = 150
  {A,B} 50    + {C,E} 200 = 250   <- best (A, B, C, E each used once)
  {B,C} 75    + {D,E} 75 = 150
```

### 11. Double auction: asks, bids and matching (slides 32 and 33, Mock 2 Q12 answer 10)

```text
Sellers' asks, low to high:   3    5    6    9
Buyers' bids, high to low:   10    8    4    2

Match in order while bid >= ask:
  bid 10 with ask 3  ──► surplus 7
  bid 8  with ask 5  ──► surplus 3
  bid 4  with ask 6  ──► bid below ask, NO trade
  bid 2  with ask 9  ──► NO trade
  Total market surplus = 7 + 3 = 10
```

### 12. Online auction classification (slide 37)

```text
                  BUYERS
                 ONE                          MANY
SELLERS  ONE   Bilateral negotiation        Web-based SALES auction
                                             (C2C and B2C)
         MANY  Web-based PROCUREMENT         Web-based EXCHANGE
               (reverse) auction
               (C2B and B2B)
```

### 13. eBay proxy bidding (slides 44 and 45, Mock 3 Q11 answer $71)

```text
Bidder X sets a maximum of $100 ──► proxy raises X's bid automatically
Bidder Y sets a maximum of $70  ──► proxy raises Y's bid automatically, up to $70
                                    ──► the lead is held by X at the second price plus increment

Current ask price = second-highest maximum bid + bid increment
                  = $70 + $1 = $71
```

### 14. Fraud and cheating map (slides 40 to 42)

```text
Auction fraud (60 percent of internet fraud, IFCC)
  ├── Non-delivery of goods          (paid, nothing arrives)
  ├── Misrepresentation of the item  (item not as described)
  ├── Triangulation                  (stolen card buys, resold to victims)
  ├── Fee stacking                   (hidden charges keep being added)
  ├── Black-market goods             (pirated software, CDs, games; no warranty)
  └── Multiple bidding and shill bidding (cheating)
           ├── Induced by bidder    ──► multiple bidding, rings
           └── Induced by auctioneer──► shill bidding
```

### 15. Business model integration (slide 39)

```text
Firm uses auctions as:
  ├── B2C surplus auctions       ──► sell surplus inventory to consumers
  ├── B2C regular sales channel  ──► auctions as a normal way of selling
  ├── B2B surplus auctions       ──► sell extra stock to other businesses
  ├── B2B procurement auctions   ──► buy from several suppliers through bids
  └── Auction intermediaries     ──► third parties that run the auctions
```

## Don't mix these up

| These look alike | How to tell them apart | Tie-breaker word |
|---|---|---|
| Efficient vs optimal auction | Efficient maximizes social welfare (sum of surplus). Optimal maximizes the seller's expected revenue (uses reserve price or entry fee). | "social welfare" vs "seller revenue" |
| Pareto efficiency vs profit maximization | Pareto: the item goes to whoever needs it most, even if they do not pay the most. Profit: the item goes to the highest payer. | "needs it most" vs "pays most" |
| Private value vs common value vs interdependent value | Private: each has its own value. Common: one true value. Interdependent: each has an estimate that others' bids can change. | "own" / "one true" / "estimate that moves" |
| Symmetric vs asymmetric private value | Symmetric: all bidders draw from the same distribution. Asymmetric: they do not. | "same distribution" |
| Common value vs private value (Bank Q5 trap) | Common: same value for all. Private: values differ. | "same for all" vs "differ" |
| Reserve price vs minimum bid increment | Reserve: secret minimum price for the seller to sell. Increment: the step size each new bid must rise by. | "floor" vs "step" |
| Reserve price vs buy-now price | Reserve: the seller's secret floor. Buy-now: a fixed price that ends the auction immediately. | "floor" vs "instant buy" |
| Maximum bid vs proxy bid | Maximum bid: the limit a bidder enters. Proxy bid: the bid eBay places automatically for the bidder. | "limit" vs "placed for you" |
| Revenue equivalence vs interdependence results | Revenue equivalence holds under the basic assumptions (all formats give the same revenue). Under interdependence, English usually gives more. | "same assumptions" vs "information" |
| Winner's curse vs shill bidding | Winner's curse: honest winner overpays because the estimate was too high. Shill bidding: a fake bidder raises the price on purpose. | "honest mistake" vs "planted bidder" |
| Truthful bidding vs shading | In a second-price auction bid the true value (dominant). In a first-price auction you usually shade below it. | "second price: true value" |
| First-price vs second-price vs English | First-price: winner pays own bid (no info during bidding). Second-price: winner pays second-highest. English: price rises, bidders see the state. | "own" / "second" / "rising" |
| Divisible vs indivisible bids | Divisible: partial quantity allowed (sorting; last bid partly filled). Indivisible: all or nothing (knapsack). | "partial" vs "whole or nothing" |
| Price schedule vs fixed price bid | Price schedule: the unit price depends on the quantity band (volume discounts). Fixed price: one price per unit. | "bands" vs "one price" |
| Simple sorting vs knapsack vs set packing vs multiple-choice knapsack | Sorting: one item, highest price. Knapsack: indivisible, limited quantity. Set packing: bundles, each item once. Multiple-choice knapsack: one band per supplier. | "one item" / "whole limit" / "disjoint bundles" / "one band per supplier" |
| Forward vs reverse multi-unit | Forward: maximize selling price. Reverse: minimize procurement cost. | "sell high" vs "buy low" |
| Single sourcing vs multiple sourcing | Single: one supplier covers all, a sorting problem. Multiple: several suppliers, a combinatorial problem. | "one vendor" vs "several vendors" |
| Set packing vs set covering | Packing: pick disjoint bundles to maximize (each item once). Covering: cover all items with the fewest bundles. | "disjoint" vs "cover all" |
| Continuous vs clearinghouse (call) double auction | Continuous: clears as orders arrive. Clearinghouse: clears at set times. | "as it comes" vs "at set times" |
| Double auction vs forward auction | Double: many buyers and many sellers. Forward: one seller, many buyers. | "both sides many" vs "one seller" |
| Bilateral negotiation vs web-based sales auction | Bilateral: one buyer and one seller. Sales auction: one seller, many buyers. | "one buyer" vs "many buyers" |
| Web-based sales vs web-based procurement | Sales: one seller sells to many buyers (highest price wins). Procurement (reverse): one buyer buys from many sellers (lowest price wins). | "highest wins" vs "lowest wins" |
| C2C / B2C vs C2B / B2B | C2C and B2C sit in the sales auction box (one seller). C2B and B2B sit in the procurement box (one buyer). | "seller-side" vs "buyer-side" |
| Multiple bidding vs shill bidding | Multiple bidding: one bidder uses many identities (bidder-induced). Shill bidding: a fake bidder raises the price (auctioneer-induced). | "bidder" vs "auctioneer" |
| Triangulation vs fee stacking | Triangulation: stolen credit card buys goods that are resold. Fee stacking: hidden charges keep being added. | "stolen card" vs "hidden charges" |
| Non-delivery vs misrepresentation | Non-delivery: nothing arrives. Misrepresentation: the item arrives but is not as described. | "nothing arrives" vs "wrong item" |
| Black-market goods vs misrepresentation | Black-market: illegal copies, no warranty. Misrepresentation: genuine but misdescribed item. | "illegal" vs "misdescribed" |
| Dutch auction (traditional) vs eBay Dutch-type | Traditional Dutch: price falls until accepted. eBay's Dutch-type: a multi-unit auction with volume discounts (not the same thing). | "falling price" vs "volume discount" |
| English vs eBay format | eBay is a hybrid of English and second-price, with a fixed seller-set end time. Pure English has no hybrid rule. | "hybrid" vs "pure" |
| Sniper vs late bidder | Sniper: single bid in the final moments. Late bidder: single bid late, not in the final moments. | "final moments" vs "late in the auction" |
| Skeptic vs unmasking | Both are multiple bid strategies. Skeptic tests the market with bids. Unmasking bids to reveal others' values. | "test" vs "reveal" |
| Evaluator vs sniper | Evaluator: single bid after evaluating the item. Sniper: single bid at the very end. | "evaluate" vs "final seconds" |
| Market maker vs auctioneer | Market maker: disassembles and reassembles bundles in a double auction. Auctioneer: runs the auction and sets rules. | "bundles" vs "rules" |
| Divisibility vs homogeneous goods | Divisibility: a fraction of a bid can be filled. Homogeneous: all traded units are identical. | "fraction" vs "identical" |

## Must-remember facts

### Numbers and formulas

| Fact | Detail | Memory trick |
|---|---|---|
| Auction fraud share | 60 percent of all internet fraud complaints (IFCC) | "Six in ten" |
| Efficiency measure | Social welfare = sum of players' surplus | "Welfare = all players added" |
| Seller's optimal tools | Reserve price or entry fee | "Floor or fee" |
| Expected payoff (two bidders, second price) | prob[b1 ≥ b2] x (v1 − b2) | "Win chance times gain" |
| Truthful bid | Bid = true value v1 is dominant in second-price | "Bid what it is worth" |
| Two-bidder rule | If v1 > b2 bid high (b1 = v1). If v1 < b2 bid low, to avoid winning (still b1 = v1) | "Truth wins both ways" |
| Expected second-highest value (uniform 50 to 100) | 50 + 50 x (n − 1)/(n + 1): 66.7 (n = 2), 75 (n = 3), 80 (n = 4) | "More bidders, smaller gains" |
| Divisible example (slide 26) | Sorted: 30(30), 25(20), 20(30), 15(20 of 60). 100 units sold. Revenue 2,300 | Last bid partly filled |
| Indivisible example (slide 27) | Best set (30,30), (20,30), (25,20) = 80 units. Revenue 2,000 | "Whole or nothing: knapsack" |
| Two-supplier tonnes (Mock 2 Q6) | 60 tonnes: S1 30 to 40 band at $40 x 30 = $1,200. S2 30 to 40 band at $50 x 30 = $1,500. Total $2,700 | One band per supplier |
| Bundle example (Mock 2 Q10) | Best disjoint choice {A,B} 50 + {C,E} 200 = 250 | Disjoint bundles, each item once |
| Double auction surplus (Mock 2 Q12) | Asks 3, 5, 6, 9; bids 10, 8, 4, 2. Surplus 7 + 3 = 10 (other pairs lose money) | Match high bid with low ask |
| Vickrey / second-price with reserve | A reserve price lets second-price become optimal | "Second price needs a reserve" |
| Revenue equivalence | Holds only under basic assumptions | "Same rules, same money" |
| eBay current ask (Mock 3 Q11) | Second-highest maximum ($70) + increment ($1) = $71 | "Second plus a step" |
| Second-price online | "Has become an important option" online | "Second price is back online" |
| Double auction history | Used in financial institutions for over a hundred years (NYSE) | "Over a century" |
| Trade decision | A trade is worth making only if bid ≥ ask | "Bid beats ask" |
| Divisible bid partial fill | Last chosen bid gets a partial allocation | "Last one gets leftovers" |

### Lists (with memory tricks)

| List | Items | Memory trick |
|---|---|---|
| Valuation models (3) | Private value; common value; interdependent value | "Own, One, Estimate" |
| Design goals (2) | Pareto efficiency; profit maximization | "Need it most vs pay most" |
| Three popular mechanisms | First price; second price; English | "First, Second, English" |
| Basic model assumptions (4) | n bidders; independent identical values; risk neutral; no collusion | "Nobody Is Really Naughty" (N, I, R, N) |
| Relaxed assumptions (3) | Risk aversion; asymmetric valuations; reputation effect | "Worried, Unequal, Famous" |
| Ways to raise revenue (2) | More bidders; reserve price | "Crowd and Cut-off" |
| Winner determination by format (6) | One item (sort); divisible (sort, partial); indivisible (knapsack); price schedule (multiple-choice knapsack); bundles (set packing); double (surplus) | "Sort, Sort, Knap, Band, Pack, Match" |
| Side constraints (4 on slide 30) | Number of winning suppliers; budget limit on trades; market share; reservation prices | "Number, Budget, Market, Reserve" |
| Slide 24 extra constraints | Representation constraints; volume discounts | "Represent, Discount" |
| Double auction formulation (3) | Aggregation; divisibility; homogeneous or heterogeneous goods | "Add, Divide, Same?" |
| Online auction types (4) | Bilateral negotiation; web-based sales (1 to many); web-based procurement reverse (many to 1); web-based exchange (many to many) | "One-One talk; One-Many sells; Many-One buys; Many-Many trades" |
| Online design issues (4) | Mechanism choice; bid constraints; auction duration; complex formats and quick response | "Mechanism, Bid limits, Duration, Speed" |
| Bid constraints (4) | Minimum bid (reserve); maximum bid; buy-now price; ending rules | "Min, Max, Buy, End" |
| Business integration (5) | B2C surplus; B2C regular channel; B2B surplus; B2B procurement; auction intermediaries | "Surplus, Channel, Surplus-B2B, Procure, Middle" |
| Auction fraud categories (6) | Non-delivery; misrepresentation; triangulation; fee stacking; black-market goods; multiple bidding and shill bidding | "Never Mess Triangles, Fine Black Shirts" (N, M, T, F, B, S) |
| Reasons cheating thrives (4) | Cheap pseudonyms; greater information asymmetry; lack of personal contact; tolerance of bidders | "Cheap, Asymmetric, Lonely, Tolerant" |
| Cheating by induced party | Bidder: multiple bidding, rings. Auctioneer: shill bidding | "Bidder: many and rings; Auctioneer: shill" |
| eBay models (4) | Standard; reserve price; buy it now; Dutch (multi-unit, volume discount) | "Standard, Reserve, Buy-now, Dutch" |
| Data available to an eBay bidder (7) | Item description; number of bids; bidder IDs; time and amount of each bid; time remaining; reserve met or not; current ask price | "Item, Count, IDs, Times, Clock, Reserve, Ask" |
| Bidding strategies (5) | Single bid: evaluator, late bidder, sniper. Multiple bids: skeptic, unmasking | "Eva Loves Sniping; Skeptics Unmask" (E, L, S; S, U) |

### Definitions and quotes from the slides

| Term | Slide wording (close paraphrase) | Memory trick |
|---|---|---|
| Auction design problem | "Designing auctions rules with some desirable property to satisfy the auctioneers need" | Rules with a purpose |
| Pareto efficiency | "The item under consideration goes to the person who needs it most (he may not pay the highest amount)" | Need beats money |
| Efficient design | "Aims to maximize the system welfare, whereas the optimal design aims to maximize the seller's individual revenue" | Welfare vs wallet |
| Bayesian game | "Bidders are the players. The problem is to find the equilibrium." | Players and equilibrium |
| Revenue equivalence theorem | "Under this assumption all the basic auction formats are efficient and generate same revenue" | Same rules, same money |
| Winner's curse | "The winner curse takes place when winner pays too much, due to their failure to anticipate and correct their bidding strategy" | Too much, too late |
| Shaving | "To correct winner's curse bidders have to shave their bids further" | Shave the bid |
| Set packing | "Given a set of subsets S = S1, ..., Sm of the universal set U, what is the largest number of mutually disjoint subsets from S?" | Disjoint boxes |
| Double auction | "A multiple buyer and multiple seller auction" | Both sides many |
| Market surplus | "The difference between the bids and asks" | Bid minus ask |
| Online auction issue | "Currently the English auction is the dominant mechanism on the Internet" | English rules online |
| eBay format | "An ascending-bid format which is a hybrid of English and second price auction" | Hybrid with a fixed end |
| eBay proxy | "The proxy mechanism allows a bidder to submit a maximum bid with a guarantee that eBay will raise the bidder's active offer automatically" | Auto raise to your max |
| Auction fraud share | "Auction frauds constitute the largest part of all Internet frauds (60%)" | 60 percent |
| Triangulation | "The perpetrator buys items from an online merchant using stolen credit card number and then sells them to unsuspecting buyers" | Stolen card, resold |
| Fee stacking | "Fee stacking occurs when a seller keeps adding hidden charges" | Hidden charges |

### Example companies and cases

| Name | What it illustrates | Memory trick |
|---|---|---|
| New York Stock Exchange | Double auction used for over a hundred years | "NYSE = double auction" |
| eBay | All auctions use ascending bids, a hybrid of English and second-price; proxy bidding; buy-now; reserve; Dutch-type multi-unit | "eBay is the hybrid" |
| Internet Fraud Complaint Center (IFCC) | Source of the 60 percent auction-fraud figure | "60 percent IFCC" |
| Oil drilling rights (common value example) | Each firm has an estimate of one true value; winner's curse risk | "Drilling = common value" |
| Offshore drilling rights (Mock 1 Q14) | Winner's curse example in a common-value setting | "Offshore = winner's curse" |
| Rare painting auction (Mock 3 Q1) | Web-based sales auction (one seller, many buyers) | "Painting = one seller" |
| Lowest price wins (Mock 3 Q2) | Web-based procurement (reverse) auction | "Lowest wins = reverse" |
| Stolen credit card (triangulation) | Fraud: buy with a stolen card, resell to victims | "Stolen card, sold again" |
| Pirated software, audio and movie CDs, games | Black-market goods fraud | "Pirates" |
| Surplus inventory disposal (B2C surplus auctions) | A firm clears extra stock through auctions | "Clear the stock" |

### Double auction equilibrium (slide 32) and the sample data

| Sellers' asks (low to high) | Buyers' bids (high to low) | Trade? |
|---|---|---|
| 3 | 10 | Yes, surplus 7 |
| 5 | 8 | Yes, surplus 3 |
| 6 | 4 | No (bid below ask) |
| 9 | 2 | No (bid below ask) |

The market clears at quantity 2, where the supply and demand lines cross.

## How this week gets asked

### Question patterns

- **Design goal in words.** "Gets the item to the person who needs it most" → Pareto efficiency. "Highest expected profit" → profit maximization.
- **Valuation model from a scenario.** Same value for all → common value. Each has a different value → private value. Estimates that change after price signals → interdependent value.
- **Which mechanism or formula.** Revenue equivalence, English vs second-price with interdependence, truthful bidding.
- **Winner determination problem name.** Single item → sorting. Indivisible → knapsack. Bundles → set packing. Price band per supplier → multiple-choice knapsack. Double auction → surplus.
- **Compute a number.** Divisible revenue (2,300), indivisible revenue (2,000), tonnes cost ($2,700), bundle revenue (250), surplus (10), eBay current ask ($71), market surplus, expected second-highest value.
- **Online auction classification.** One seller many buyers; one buyer many sellers; many and many; one and one.
- **Fraud name from a scenario.** Stolen card (triangulation); hidden charges (fee stacking); no delivery; not as described (misrepresentation); pirated items (black-market); fake bidder (shill).
- **eBay mechanics.** Proxy bidding, bid increments, current ask price, data for bidders, and bidding strategies (sniper, skeptic, unmasking).
- **Business use.** B2C surplus, B2C regular channel, B2B surplus, B2B procurement, intermediaries.

### Distractor traps for this week

- **Absolute words.** "Always", "guarantees", "eliminates", "only", "every bidder". Bank Q6 option D "guarantees truthful bidding under every condition" is wrong. Mock 1 Q7 option C "all three are optimal, even without any reserve price" is wrong (second-price needs a reserve to be optimal).
- **Efficiency and optimality swapped.** "Maximize expected revenue" is optimal, not efficient. "Maximize social welfare" is efficient, not optimal.
- **Winner's curse vs revenue equivalence.** Both mention "bids". Winner's curse is about a common-value winner overpaying. Revenue equivalence is about the basic assumptions giving equal revenue.
- **Ask versus bid.** Asks are seller prices; bids are buyer prices. Surplus is bid minus ask. A trap is ask minus bid.
- **Knapsack vs sorting.** One item is sorting; indivisible multi-unit is knapsack. Mock 2 Q1 is single-item sorting, not knapsack.
- **Set packing vs set covering.** Packing picks disjoint bundles to maximize revenue. The trap is "cover all items" wording.
- **Pay own bid vs pay second bid.** In second-price auctions, the winner pays the second-highest bid. In first-price, the winner pays their own bid. Under second price the winner pays the runner-up's bid (the NZ$6 example in week 11, not the NZ$100,000 winning bid).
- **Fraud names.** Triangulation means a stolen card buys and resells. Fee stacking means hidden charges. Non-delivery means nothing arrives. Misrepresentation means the item is not as described. Do not swap them.
- **Who induces cheating.** Shill bidding is auctioneer-induced (Mock 3 Q8). Multiple bidding and rings are bidder-induced.
- **Sniper vs skeptic.** Sniper is a single bid at the end. Skeptic is multiple bids to test the market.
- **Current ask.** It is the second-highest maximum plus one increment, not the highest maximum ($100) or the lower maximum ($70).

### If the question says ___, pick the option about ___

1. "Needs it most, even if they do not pay the most" → **Pareto efficiency**. "Highest expected profit to the seller" → **profit maximization**.
2. "Maximize social welfare" → **efficient**. "Maximize seller's expected revenue with a reserve or entry fee" → **optimal**.
3. "Same value for all, only estimates" → **common value**. "Each participant has a potentially different value" → **private value**.
4. "Risk-neutral, independent identical values, no collusion" → **basic assumptions**, which give **revenue equivalence**.
5. "Second-price auction with independent private values" → **bid your true value** (dominant strategy).
6. "Reserve price" → excludes bidders below the reserve, and raises revenue.
7. "Estimate, win, pay too much" → **winner's curse**; correction is **shave the bid further**.
8. "English auction likely earns more under interdependence" → English beats first and second price.
9. "Single item, price-only bids" → **simple sorting** (Mock 2 Q1). "Indivisible multi-unit" → **knapsack**. "Bundles each item once" → **set packing**. "One band per supplier" → **multiple-choice knapsack**.
10. "Double auction, maximize surplus" → **match highest bids with lowest asks** while bid ≥ ask.
11. "One seller, many buyers" → **web-based sales auction**. "One buyer, many sellers, lowest wins" → **web-based procurement**.
12. "Stolen card, resold" → **triangulation**. "Hidden charges" → **fee stacking**. "Fake bidder raises price" → **shill bidding**.
13. "Maximum bid, eBay raises automatically" → **proxy bidding**. "Current ask after two proxies" → **second-highest max + increment**.
14. "Waits to bid in the final moments" → **sniper**.

## Practice walk-through

**Q1.** Which design goal gives the item to the bidder who gets the greatest benefit, even if that bidder does not pay the highest amount?
- Answer: C) Achievement of a Pareto-efficient allocation outcome
- Why: Pareto efficiency gives the item to the person who needs it most, not the highest payer (Pareto efficiency card, slide 6).
- Trap: B) Maximization of seller profit in expectation is profit maximization, which gives the item to the highest payer.

**Q2.** Each bidder independently draws a valuation from the same distribution and has no private information about others. Which setting is this?
- Answer: B) Symmetric independent private-value environment
- Why: Private values drawn from a common distribution, with independent bidders (symmetric private value card, slide 5 and slide 10).
- Trap: A) Pure common-value means one true value for all, which is not the setting here.

**Q3.** In a second-price auction with independent private values and risk-neutral bidders, a bidder valuing an item at ₹500 should bid:
- Answer: D) Exactly ₹500 regardless of competitors’ actions
- Why: In a second-price auction, truthful bidding is the dominant strategy (truthful bidding card, slide 11).
- Trap: A) Slightly below ₹500 is the shading that works in first-price auctions, not the dominant move in a second-price auction.

**Q4.** Which action directly supports a seller who wants to improve expected revenue without changing the format?
- Answer: C) Increasing competition by attracting more bidders
- Why: More bidders raise the expected payoff, one of the two ways to increase revenue (More bidders card, slide 13).
- Trap: B) Eliminating reserve prices removes a revenue tool, so it does not help.

**Q5.** The true value of the resource is identical for all firms, but each firm has only an estimate. This is closest to:
- Answer: C) Pure common-value model
- Why: One true value for all, with estimates only (Pure common value card, slide 17).
- Trap: A) Symmetric private-value means each bidder's value differs.

**Q6.** Why may an English auction generate higher revenue than a sealed-bid auction under interdependent valuations?
- Answer: C) It allows additional information to be revealed during bidding
- Why: Information flows during an English auction, which tends to raise value and revenue (Revenue under interdependencies card, slide 18).
- Trap: D) "Guarantees truthful bidding under every condition" is an absolute claim, and it is wrong.

**Q7.** A forward auction sells a single item to one winner. The winner determination problem can be solved primarily by:
- Answer: C) Sorting bids and selecting the highest offer
- Why: One item, one unit, one winner, price-only bids is a simple sorting problem (Simple WDP card, slide 23).
- Trap: D) Set packing is for bundles of several items, not a single item.

**Q8.** A seller must allocate 100 units among bidders whose bids can be partially accepted. Which bid characteristic enables this?
- Answer: C) Divisibility of bid quantities
- Why: A divisible bid can be partly filled, which is why the last bid can get a partial allocation (Divisible bid card, slide 26).
- Trap: D) Reserve-price constraints set a minimum price and do not allow partial fills.

**Q9.** In a bundled multi-item forward auction, a feasible set of winning bids must satisfy which requirement?
- Answer: C) Each item can be allocated at most once across winning bundles
- Why: Set packing requires mutually disjoint bundles, so each item is sold once (Set packing card, slide 29).
- Trap: A) Every item in multiple winning bundles is the opposite of the rule.

**Q10.** The primary objective of winner determination in a double auction is to maximize:
- Answer: D) Market surplus generated by matched bids and asks
- Why: The double-auction objective is the difference between bids and asks, summed over matches (Asks, bids and market surplus card, slide 33).
- Trap: C) Number of successful trades is a count, not the objective. Surplus is the value gained.

## 60-second recap

- Auction design: choose efficient (social welfare) or optimal (seller revenue) before writing the rules. The government prefers efficient, a self-interested seller prefers optimal.
- Pareto efficiency: the item goes to whoever needs it most. Profit maximization: the item goes to the highest payer.
- Valuation models: private (own value), common (one true value), interdependent (estimates that move with price signals).
- Basic assumptions: n bidders, identical independent values, risk neutral, no collusion. Under them every basic format gives the same revenue.
- Second-price auction: bid your true value (dominant). First-price and English are optimal; second-price needs a reserve to be optimal.
- Two ways to raise revenue: more bidders (gains shrink) and a reserve price (excludes low bidders).
- Winner's curse: the winner pays too much. Correction: shave the bid further.
- Winner determination: one item = sort; indivisible = knapsack; price bands = multiple-choice knapsack; bundles = set packing; double auction = maximize surplus.
- Worked numbers: divisible revenue 2,300; indivisible 2,000; tonnes $2,700; bundles 250; surplus 10.
- Online auction types: one seller many buyers (sales); one buyer many sellers (procurement, lowest wins); many and many (exchange).
- Online design: English auction is dominant; second price is an important option; minimum bid (reserve), maximum bid, buy-now.
- Fraud: 60 percent of internet fraud; six categories (non-delivery, misrepresentation, triangulation, fee stacking, black-market goods, multiple bidding and shill bidding).
- eBay: English and second-price hybrid, fixed seller-set end time, proxy bidding, bid increment table, current ask = second-highest max + increment ($71 in the example).
- Bidder strategies: sniper, evaluator, late bidder (single bid); skeptic, unmasking (multiple bids).

---
Coverage check: 45/45 mock questions answerable from this guide.
