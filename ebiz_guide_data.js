const EBIZ_GUIDE_DATA = [
 {
  "week": 1,
  "title": "Introduction to E-Business",
  "mix": {
   "head": [
    "These look alike",
    "How to tell them apart",
    "Tie-breaker word"
   ],
   "rows": [
    [
     "Business vs commerce",
     "Commerce is buying and selling. Business is wider and includes making goods and managing people.",
     "\"subset\" (commerce is the smaller circle)"
    ],
    [
     "E-commerce vs e-business",
     "E-commerce is buying, selling, marketing and servicing goods online. E-business covers every business process, including internal work and partners.",
     "\"superset\" (e-business is bigger)"
    ],
    [
     "Total customer value vs total customer cost vs customer delivered value",
     "Value = bundle of benefits. Cost = bundle of costs. Delivered value = value minus cost.",
     "\"minus\" → delivered value"
    ],
    [
     "Customer satisfaction vs customer delivered value",
     "Satisfaction is a feeling from comparing performance with expectation. Delivered value is a net amount.",
     "\"feeling\" → satisfaction"
    ],
    [
     "Value proposition vs value-delivery system",
     "Proposition is the promise to the customer. Delivery system is how the promise is kept.",
     "\"promise\" vs \"how\""
    ],
    [
     "Primary vs support activities",
     "Primary (buy, make, ship, sell, serve) touch the product flow. Support (firm infrastructure, HR development, technology development, procurement) help all of them.",
     "\"customer sees it\" → primary"
    ],
    [
     "Value chain vs value delivery network",
     "Value chain = activities inside one firm. Value delivery network = the wider chain of partners, the supply chain.",
     "\"partners\" → network"
    ],
    [
     "Procurement vs replenishment vs customer order cycle",
     "Procurement = buying inputs. Replenishment = restocking downstream. Customer order = order to delivery.",
     "\"from the customer's order\" → customer order cycle"
    ],
    [
     "Business process vs business function",
     "A business process runs across departments (order to delivery). A function is one department's job.",
     "\"across departments\""
    ],
    [
     "EDP vs MIS",
     "EDP records transactions. MIS produces pre-set management reports.",
     "\"transactions\" vs \"reports\""
    ],
    [
     "MIS vs DSS",
     "MIS = pre-specified reports. DSS = interactive, ad hoc decision support.",
     "\"pre-specified\" vs \"ad hoc\""
    ],
    [
     "DSS (1970s) vs strategic and end-user systems (1980s)",
     "1980s adds competitive advantage, expert systems and managers running their own tools.",
     "\"competitive advantage\" → 1980s"
    ],
    [
     "ERP vs e-business",
     "ERP is one integrated internal system. E-business is the wider online operation including partners and web.",
     "\"one system\" → ERP"
    ],
    [
     "B2B vs B2C",
     "B2B: company to company (Metaljunction). B2C: company to individual customer (Dell.com).",
     "\"who is the buyer, a company or a person?\""
    ],
    [
     "C2C vs C2B",
     "C2C: person to person (eBay). C2B: person offers something to a company (Amazon reviews).",
     "\"who is the receiver?\""
    ],
    [
     "B2C (transaction type) vs manufacturer (direct) model",
     "B2C is who trades with whom. Manufacturer (direct) is how the company earns, by cutting out middlemen. Dell appears in both.",
     "\"type\" (who) vs \"model\" (how it earns)"
    ],
    [
     "C2G vs G2C",
     "C2G: citizen pays or applies to government (tax, benefits). G2C: government serves citizens (queries, suggestions).",
     "first letter is the sender"
    ],
    [
     "G2B vs B2G",
     "G2B: government serves a company (licence renewal). B2G: company sells to government.",
     "\"who is selling?\""
    ],
    [
     "G2G vs G2C",
     "G2G: between two government bodies. G2C: government to citizen.",
     "both sides government?"
    ],
    [
     "Brick-and-mortar vs click-and-mortar",
     "Brick-and-mortar is physical only. Click-and-mortar is physical plus web (Barnes & Noble).",
     "\"click\" = web added"
    ],
    [
     "Vendor side vs customer side",
     "Vendor side: e-procurement (buying). Customer side: CRM, e-marketing, e-selling and distribution, and supply chain management (selling).",
     "\"buying\" vs \"selling\""
    ],
    [
     "E-marketing vs e-selling and distribution",
     "E-marketing promotes online. E-selling and distribution sells and delivers.",
     "\"promote\" vs \"deliver\""
    ],
    [
     "Brokerage vs merchant",
     "A broker never owns the goods and earns a fee. A merchant buys and owns the goods and earns a margin.",
     "\"owns the goods?\""
    ],
    [
     "Auction broker (eBay) vs reverse auction (Tata)",
     "eBay: sellers sell, bids go up, broker takes commission. Reverse auction: buyer buys, suppliers bid the price down.",
     "\"who is buying?\""
    ],
    [
     "Auction broker vs transaction broker",
     "Auction broker runs the bidding and takes a commission. Transaction broker handles the money, often holding it until delivery.",
     "\"bids\" vs \"holds money\""
    ],
    [
     "Demand collection (Priceline) vs auction broker",
     "Demand collection: customer names the price, sellers accept or reject. Auction: bidders compete.",
     "\"name your price\""
    ],
    [
     "Search agent vs virtual marketplace",
     "Search agent compares prices across many shops. Virtual marketplace hosts many sellers on one platform.",
     "\"compare\" vs \"host\""
    ],
    [
     "Virtual merchant vs virtual marketplace (Amazon)",
     "Virtual merchant owns the stock it sells. Virtual marketplace only hosts other sellers.",
     "\"owns the stock?\""
    ],
    [
     "Catalog merchant vs virtual merchant",
     "Catalog merchant sells from a printed or online catalogue (Lands' End). Virtual merchant is online only (Amazon as seller).",
     "\"catalogue\""
    ],
    [
     "Bit vendor vs virtual merchant",
     "Bit vendor sells digital downloads (iTunes). Virtual merchant sells goods online, possibly physical.",
     "\"download\""
    ],
    [
     "Advertising vs infomediary",
     "Advertising earns from ads on its own content (Yahoo!). Infomediary sells information about markets and audiences (Nielsen, DoubleClick).",
     "\"information for sale\""
    ],
    [
     "Portal vs classifieds vs query-based paid placement",
     "Portal = gateway with mixed services (Yahoo!). Classifieds = listings (Monster). Paid placement = bids on search words (Google).",
     "\"search keywords bid\" → Google"
    ],
    [
     "Banner exchange (affiliate) vs banner ads (advertising)",
     "Banner exchange: two sites swap banners. Banner ads: advertisers pay for ads on a content site.",
     "\"swap\" vs \"advertisers pay\""
    ],
    [
     "Affiliate pay-per-click vs paid placement",
     "Affiliate pay-per-click pays a partner for sending a visitor to a merchant. Paid placement is an ad shown on search results.",
     "\"partner's link\""
    ],
    [
     "Affiliate vs brokerage",
     "Affiliate: merchant pays commission for referred sales. Brokerage: broker brings two parties together and charges a fee per deal.",
     "\"merchant\" vs \"two parties\""
    ],
    [
     "Community vs subscription",
     "Community: voluntary donations, services, contextual ads. Subscription: fixed periodic fee.",
     "\"voluntary\" vs \"fee\""
    ],
    [
     "Trust services vs transaction broker",
     "Trust services: members pay for a membership seal and follow a code of conduct. Transaction broker: handles the money between buyer and seller.",
     "\"code of conduct\" vs \"money\""
    ],
    [
     "Subscription vs metered subscription vs utility",
     "Subscription = fixed periodic fee. Metered subscription = prepaid portions (e.g. pages). Utility = pay per actual use.",
     "\"fixed\" / \"portions\" / \"usage\""
    ],
    [
     "ISP as subscription vs ISP as utility",
     "Same kind of provider, two models. Monthly plan (AOL) = subscription. Per connection minute = utility.",
     "\"monthly\" vs \"per minute\""
    ],
    [
     "Metered usage vs metered subscription",
     "Metered usage bills actual usage (minutes, gigabytes). Metered subscription sells portions (pages viewed).",
     "\"actual usage\" vs \"portions\""
    ],
    [
     "Technology trigger vs innovation trigger",
     "Same first stage of the hype cycle, two names.",
     "none needed"
    ],
    [
     "Peak vs trough",
     "Peak = hype and money in. Trough = crash and failures.",
     "\"collapse\" → trough"
    ],
    [
     "Slope vs plateau",
     "Slope = survivors learn and climb. Plateau = flat, stable, mainstream.",
     "\"learning\" vs \"stable\""
    ],
    [
     "Hype cycle vs dot-com chart",
     "Hype cycle is a general graph for any technology (Gartner). Dot-com chart is one market bubble (NASDAQ, 1994–2002).",
     "\"NASDAQ\" → dot-com chart"
    ],
    [
     "Reverse auction vs e-negotiation vs Metaljunction",
     "Reverse auction: suppliers bid price down (high volume, not critical). E-negotiation: bargaining over terms (high volume, critical). Metaljunction: scan the whole market (low volume, critical).",
     "\"bid down\" / \"bargain\" / \"scan\""
    ],
    [
     "Partnership with suppliers vs business process outsourcing",
     "Partnership: long-term tie-up on critical, high-volume items. BPO: outsource routine, low-volume, not-critical work.",
     "\"critical\" → partnership"
    ],
    [
     "Mandi (traditional) vs eChoupal (new)",
     "Mandi: agents, bagging, auctions, commission. eChoupal: kiosk, web prices, electronic weighing, hub.",
     "\"agent\" vs \"kiosk\""
    ],
    [
     "Prathinidhi vs adatiya",
     "Prathinidhi: local farmer who runs the kiosk for the village. Adatiya: commission agent who lends money and takes a cut.",
     "\"helps the village\" vs \"takes a cut\""
    ],
    [
     "Kuccha vs pucca adatiya",
     "Kuccha: farm-end, linking farmers to the market yard. Pucca: market-end, linking to exporters and processors.",
     "\"temporary\" vs \"permanent\" (kuccha = unpaved, pucca = permanent)"
    ],
    [
     "Tata Steel vs ITC eChoupal",
     "Tata: steel company buying with SAP and online systems. eChoupal: ITC buying soybeans from farmers through village kiosks.",
     "\"steel and SAP\" → Tata; \"village and soy\" → eChoupal"
    ],
    [
     "Business vs business model",
     "A business is the firm. A business model is how it creates and captures value (revenues, costs, profits).",
     "\"how it makes money\" → business model"
    ]
   ]
  },
  "facts": {
   "head": [
    "Fact",
    "What the lecture says",
    "Memory trick"
   ],
   "rows": [
    [
     "Who coined \"e-business\"",
     "Lou Gerstner, CEO of IBM (slide 21)",
     "\"Gerstner named it at IBM\""
    ],
    [
     "Who said \"all companies will be Internet companies or they will be dead\"",
     "Andy Grove, Intel Chairman, at the Los Angeles Times investment conference, 22 May 1999 (slide 9)",
     "\"Grove, Intel, 1999\""
    ],
    [
     "Definition of commerce",
     "Activity of buying and selling, especially on a large scale (Oxford English Dictionary)",
     "\"Commerce = counter and cash\""
    ],
    [
     "Commerce vs business",
     "Commerce is a subset of business. All businesses involve some commercial activity.",
     "\"commerce sits inside business\""
    ],
    [
     "Aaker's definition",
     "A business is an organisational unit with a defined strategy and a manager with sales and profit responsibility",
     "\"strategy plus profit boss\""
    ],
    [
     "Purpose of a business",
     "Generate revenue by delivering value to the customer and satisfying them",
     "\"revenue through value\""
    ],
    [
     "Customer delivered value (Kotler)",
     "Total customer value minus total customer cost",
     "\"value minus cost = delivered\""
    ],
    [
     "Customer satisfaction",
     "Pleasure or disappointment from comparing perceived performance with expectation",
     "\"happy if it beats the expectation\""
    ],
    [
     "Key to customer loyalty",
     "Deliver high customer value (slide 15)",
     "\"loyalty comes from value\""
    ],
    [
     "Competitive requirement",
     "Company needs a competitively superior value proposition and a superior value-delivery system",
     "\"promise plus delivery\""
    ],
    [
     "Support activities (4)",
     "Firm infrastructure, human resource development, technology development, procurement",
     "\"FHTP: Fine Hot Tea, Please\""
    ],
    [
     "Primary activities (5)",
     "Inbound logistics, operations, outbound logistics, marketing and sales, service",
     "\"Buy, Make, Ship, Sell, Serve\""
    ],
    [
     "Value chain companies in the lecture",
     "DuPont (fibres), Milliken (fabric), Levi's (apparel), Sears (retail), then the customer",
     "\"fibre, fabric, apparel, retail\""
    ],
    [
     "Four cycles (slide 16)",
     "Procurement, manufacturing, replenishment, customer order",
     "\"Buy, Make, Restock, Order\""
    ],
    [
     "ICT eras",
     "1950s data processing (EDP), 1960s management information (MIS), 1970s decision support (DSS), 1980s strategic and end-user support, 1990s onwards e-commerce and e-business",
     "\"50 data, 60 reports, 70 decisions, 80 strategy, 90 e-business\""
    ],
    [
     "Ten advantages of integrating brick-and-mortar with e-business (slide 38)",
     "Better availability of service; cost reduction in information processing; better timeliness of service; better access to customer market; initial cost less expensive; operating costs less expensive; better purchasing prices from suppliers; improved product development; improved scheduling; better supplier quality",
     "Group them: service (availability, timeliness), cost (information, initial, operating, purchase prices), market (access, product development, scheduling, supplier quality)"
    ],
    [
     "Enterprise system",
     "The core that runs business processes across manufacturing, finance, HR and sales and marketing",
     "\"central noticeboard\""
    ],
    [
     "E-business beyond e-commerce (slide 22)",
     "Electronic purchasing and supply chain management; processing orders electronically; handling customer service; cooperating with business partners",
     "\"buy, order, serve, partner\""
    ],
    [
     "E-business beyond e-commerce (slide 21)",
     "Servicing the customer, collaborating with business partners or other stakeholders, supporting internal transactions",
     "\"serve, partner, internal\""
    ],
    [
     "Nine transaction types",
     "3 × 3 grid of Customer (consumer), Business and Government",
     "\"first letter sends, last letter receives\""
    ],
    [
     "Example companies (transaction types)",
     "eBay = C2C; Dell.com = B2C; Amazon.com = C2B (reviews); Metaljunction.com = B2B",
     "\"eBay, Dell, Amazon, Metal\""
    ],
    [
     "Government transaction examples",
     "C2G: taxes, benefits. G2C: public queries, suggestions. G2B: registration, licence renewal. B2G: selling to government. G2G: e-payments between agencies",
     "\"tax in, query out, licence for business\""
    ],
    [
     "Nine web business models (slide 44)",
     "Brokerage, advertising, infomediary, merchant, manufacturer (direct), affiliate, community, subscription, utility",
     "\"who pays whom\" groups below"
    ],
    [
     "Model groups by who pays",
     "Middlemen earn fees (brokerage, affiliate). Ads and data (advertising, infomediary). Selling goods (merchant, manufacturer). Paying for access (subscription, utility). Crowd and voluntary (community)",
     "\"Middle, Ads, Sell, Access, Crowd\""
    ],
    [
     "Brokerage variants (8)",
     "Marketplace exchange, buy/sell fulfilment, demand collection, auction broker, transaction broker, distributor (catalogue), search agent, virtual marketplace",
     "Fulfil, demand, auction, transact, search: each one has one mechanism"
    ],
    [
     "Advertising variants",
     "Portal (Yahoo!), classifieds (Monster, Craigslist, Match.com), query-based paid placement (Google), banner ads",
     "\"Portal, Classified, Paid placement\""
    ],
    [
     "Infomediary functions",
     "Target marketing, comparative purchasing, advertising networks (DoubleClick), audience measurement (Nielsen, Netratings)",
     "\"targets, compares, networks, measures\""
    ],
    [
     "Merchant variants",
     "Virtual (Amazon), catalog (Lands' End), click and mortar (Barnes & Noble), bit vendor (Apple iTunes)",
     "\"Virtual, Catalogue, Click, Bit\""
    ],
    [
     "Manufacturer (direct)",
     "Reaching buyers directly, compresses distribution channel; example Dell Computer",
     "\"cut the middleman: Dell\""
    ],
    [
     "Affiliate variants",
     "Banner exchange, pay-per-click, revenue sharing; example Barnes & Noble, Amazon.com with DoubleClick",
     "\"Banner, Click, Share\""
    ],
    [
     "Community examples",
     "Open source (Red Hat), public broadcasting (The Classical Station), social networking (LinkedIn)",
     "\"Red Hat, Classical, LinkedIn\""
    ],
    [
     "Subscription variants",
     "Content services (Listen.com, Netflix), person-to-person networking (Classmates), trust services (Truste), ISPs (America Online)",
     "\"Content, Contacts, Trust, Connection\""
    ],
    [
     "Utility variants",
     "Metered usage (ISPs charging per minute in some countries), metered subscriptions (Slashdot, pages viewed)",
     "\"Meter the usage, meter the portions\""
    ],
    [
     "Advertising model conditions",
     "Works best when viewer traffic is large or highly specialised (slide 48)",
     "\"big crowd or niche crowd\""
    ],
    [
     "Gartner hype cycle",
     "Developed and used by the Gartner group; represents maturity, adoption and social application of technologies",
     "\"Gartner = technology maturity graph\""
    ],
    [
     "Gartner five stages",
     "Trigger, peak of inflated expectations, trough of disillusionment, slope of enlightenment, plateau of productivity",
     "\"up, top, bottom, climb, flat\""
    ],
    [
     "Dot-com chart facts",
     "Dot-com technology bubble 1994–2002; NASDAQ total market value peaked near $3.7T; \"6 years up, 2 years down\"",
     "\"6 up, 2 down\""
    ],
    [
     "Chart events",
     "Emergence of WWW; founding of Amazon.com; founding of Google; sales tax moratorium on e-commerce passed by Congress",
     "\"WWW, Amazon, Google, Congress\""
    ],
    [
     "Tata Steel size",
     "Over 13% of India's steel production; FY 2002–03 turnover USD 19.6 billion; profit USD 2.2 billion",
     "\"13, 19.6, 2.2\""
    ],
    [
     "Tata e-procurement timeline",
     "1999–2000 bills and approvals; 2000–01 SAP start; 2001–02 SAP-MM, MRO e-procurement, reverse auction; 2002–03 code of conduct, supplier survey, online bidding",
     "\"Bills (99), Blueprint (00), Auction (01), Bidding (02)\""
    ],
    [
     "Tata e-procurement portfolio",
     "Reverse auction (high volume, low critical), partnership and e-negotiation (high volume, high critical), business process outsourcing (low, low), Metaljunction.com (low volume, high critical, scan the market)",
     "\"auction if cheap and big; partner if critical and big; outsource if cheap and small; Metaljunction if critical and small\""
    ],
    [
     "Metaljunction",
     "E-market for steel industry, sponsored by a consortium of SAIL and Tata Steel",
     "\"SAIL plus Tata, steel e-market\""
    ],
    [
     "Tata lead-time chart",
     "Average order lead time falls from about 88 (1997–98) to about 37 (1998–99), then about 18 by 2003–04. Steepest fall: 1997–98 to 1998–99 (Mock 3 Q14)",
     "\"biggest drop is the first step\""
    ],
    [
     "Tata savings chart",
     "Strategic sourcing savings cumulative about Rs 380 crore by 2003–04 (approximate); actual beat target in 2000–01",
     "\"savings climb to about 380\""
    ],
    [
     "Supplier adoption",
     "ePartners about 426 (Jan 2002) to about 2,500 (Dec 2002), total 2,500; vendors using the site about 665 by Oct 2002",
     "\"members grow, users follow\""
    ],
    [
     "eChoupal kiosk cost",
     "Rs 170,000 (about $3,762) per choupal, plus Rs 100,000 (about $2,213) for people, travel, communication, software, training; payback expected within three years",
     "\"1.7 lakh kit, 1 lakh people, 3 years back\""
    ],
    [
     "eChoupal connectivity",
     "Telephone (28.8 to 36 kbps) or, more commonly, VSAT; UPS and solar battery backup; dot-matrix printer",
     "\"PC, phone or satellite, power, printer\""
    ],
    [
     "Prathinidhi",
     "A progressive farmer with leadership skills; kiosk set up in his premises or under his supervision; he and 10–15 farmers trained",
     "\"Prathinidhi runs the kiosk\""
    ],
    [
     "eChoupal kiosk setup steps",
     "Map Internet-supportive telephone exchanges; select an agri-active village; identify a Prathinidhi",
     "\"map, select, identify\""
    ],
    [
     "Portal scope (7 items)",
     "Weather; farming practices; market information; agri inputs; alerts; soil and water testing; news",
     "\"Weather, Farming, Market, Inputs, Alerts, Soil, News\""
    ],
    [
     "Portal links",
     "Weather, best practices, crop information, market information, FAQs, news, feedback, information about ITC (the slide says nine but names eight)",
     "\"eight named, slide says nine\""
    ],
    [
     "Mandi problems (9)",
     "Control by agents, price dependence, tampered weights, open-air display, arbitrary inspection, bagging delay, no storage or grading, lack of competition, no price analysis",
     "\"Control, Information, Measurement, Handling\""
    ],
    [
     "eChoupal management principles",
     "Re-engineering, not reconstructing; addressing the whole, not just a part",
     "\"fix the process, fix the whole\""
    ],
    [
     "Transaction costs per MT",
     "Existing: farmer Rs 1,920, processor Rs 5,750. Proposed: farmer Rs 40, processor about Rs 3,300",
     "\"1,920 to 40; 5,750 to 3,300\""
    ],
    [
     "Farmers' price gain",
     "2.5% higher price, or $6 more per tonne",
     "\"2.5 percent, six dollars a tonne\""
    ],
    [
     "Processor's gains",
     "Fewer intermediaries; direct farmer contact; higher quality and fewer losses; can influence farming techniques",
     "\"fewer middlemen, better produce\""
    ]
   ]
  },
  "rules": [
   "If the question says \"a citizen pays or applies to a government office\" → C2G.",
   "If the question says \"government answers citizens or asks them for suggestions\" → G2C.",
   "If the question says \"companies buy from companies, scanning the market or automated orders\" → B2B (Metaljunction).",
   "If the question says \"a fee or commission for bringing two parties together\" → brokerage. Then choose the variant by the mechanism: bids → auction broker; holds money → transaction broker; customer names the price → demand collection; compares many shops → search agent.",
   "If the question says \"free content, banner ads, advertisers pay\" → advertising model. If it says \"measures audience and sells data\" → infomediary.",
   "If it says \"pay per use, metered\" → utility. If it says \"fixed periodic fee\" → subscription. If it says \"voluntary donations or community content\" → community.",
   "If it says \"sells directly to customers, cutting out distributors\" → manufacturer (direct).",
   "If it says \"commission when a visitor buys through a link\" → affiliate.",
   "If it says \"excitement and heavy funding, then many firms fail\" → peak then trough. If it asks about the crash itself → trough.",
   "If it says \"a single integrated system used by all departments\" → ERP. If it says \"reports on fixed items\" → MIS. If it says \"interactive, ad hoc decisions\" → DSS."
  ]
 },
 {
  "week": 2,
  "title": "Business Processes, Information Systems, Decision Support and ERP",
  "mix": {
   "head": [
    "These look alike",
    "How to tell them apart",
    "Tie-breaker word"
   ],
   "rows": [
    [
     "Intra- vs inter-organisational process",
     "Intra stays inside the firm (across departments). Inter crosses to a supplier or customer.",
     "\"exchanging with suppliers\" → inter"
    ],
    [
     "Functional vs cross-functional process",
     "Functional sits inside one department. Cross-functional passes through several in sequence.",
     "\"several departments\" → cross"
    ],
    [
     "Senior vs middle vs operational management",
     "Senior: strategy and long-range decisions. Middle: turns strategy into plans. Operational: daily monitoring.",
     "\"long-range\" / \"programmes\" / \"daily\""
    ],
    [
     "Knowledge workers vs data workers vs production workers",
     "Knowledge workers design and create knowledge. Data workers handle information (clerks). Production workers make or deliver.",
     "\"design or create knowledge\" vs \"clerks\""
    ],
    [
     "Internal vs external stakeholder",
     "Internal: employees, management, shareholders, owner. External: customers, creditors, suppliers (plus government and community on slide 36).",
     "\"employee\" → internal"
    ],
    [
     "Digital firm vs virtual firm",
     "Digital firm: ICT-mediated relationships with customers, suppliers and staff (lecture). Virtual firm is not in the lecture.",
     "\"digitally enabled and mediated\""
    ],
    [
     "Reengineering vs continuous improvement",
     "Reengineering: radical redesign for dramatic gains. Continuous improvement: small, steady steps.",
     "\"radical\" vs \"gradual\""
    ],
    [
     "TQM vs DMAIC",
     "TQM is a philosophy about quality in the whole firm. DMAIC is a step-by-step data cycle.",
     "\"philosophy\" vs \"Define, Measure...\""
    ],
    [
     "DMAIC order",
     "Define, Measure, Analyze, Improve, Control. Analyze comes straight after Measure.",
     "\"after Measure\" → Analyze"
    ],
    [
     "Data vs information",
     "Data is raw and meaningless. Information has meaning: who, what, where, when.",
     "\"raw\" vs \"when\""
    ],
    [
     "Information vs knowledge",
     "Information answers who, what, where, when. Knowledge answers how and needs interpretation.",
     "\"how\" → knowledge"
    ],
    [
     "Knowledge vs wisdom",
     "Knowledge is the pattern or rule. Wisdom is the understanding of why, used to act.",
     "\"why\" → wisdom"
    ],
    [
     "Expert system vs knowledge management system",
     "Expert system gives expert advice from rules. KM system stores and shares business knowledge (best practices).",
     "\"advice\" vs \"share\""
    ],
    [
     "TPS vs MIS",
     "TPS records daily transactions and serves operations. MIS summarises TPS data into reports for middle management.",
     "\"routine daily transactions\" vs \"reports\""
    ],
    [
     "TPS vs process control system",
     "TPS records business transactions. Process control monitors and steers physical industrial processes (refining, power, steel).",
     "\"transactions\" vs \"industrial process\""
    ],
    [
     "MIS vs DSS",
     "MIS: pre-specified, fixed-format reports on performance. DSS: interactive, ad hoc decisions with models.",
     "\"fixed format\" vs \"ad hoc\""
    ],
    [
     "DSS vs ESS",
     "DSS serves middle managers on specific problems. ESS serves senior managers with a company-wide view of non-routine decisions.",
     "\"middle\" vs \"senior\""
    ],
    [
     "ESS vs MIS",
     "ESS combines external events and summarised MIS/DSS data for senior managers. MIS gives routine internal reports.",
     "\"external events\" → ESS"
    ],
    [
     "Periodic vs exception vs demand reports",
     "Periodic: regular, fixed. Exception: only when something is abnormal. Demand: on request.",
     "\"regular\" / \"abnormal\" / \"asked for\""
    ],
    [
     "What-if vs sensitivity analysis",
     "What-if changes selected variables and observes effects. Sensitivity repeatedly changes a single variable by a fixed step.",
     "\"single variable repeated\" → sensitivity"
    ],
    [
     "Goal-seeking vs optimisation",
     "Goal-seeking keeps changing until a target value is reached. Optimisation finds the best value given constraints.",
     "\"target\" vs \"best given budget\""
    ],
    [
     "Model-driven vs data-driven DSS",
     "Model-driven uses analytical models. Data-driven uses data warehouses, OLAP and mining.",
     "\"model\" vs \"data warehouse\""
    ],
    [
     "OLAP vs data mining",
     "OLAP lets you slice, drill down and consolidate data you already know to ask about. Data mining discovers patterns you did not know to look for.",
     "\"drill-down\" vs \"hidden patterns\""
    ],
    [
     "Descriptive vs predictive vs prescriptive analytics",
     "Descriptive: what happened. Predictive: what will happen. Prescriptive: what to do.",
     "\"will happen\" vs \"should do\""
    ],
    [
     "Data mining vs big data analytics",
     "Data mining finds patterns (clustering, classification, association). Big data analytics is the process applied to very large, fast, varied data (five Vs).",
     "\"five Vs\" → big data"
    ],
    [
     "Case-based vs rule-based vs frame-based vs object-based knowledge",
     "Case: past examples. Rule: If-Then. Frame: fixed-field record. Object: data plus methods.",
     "\"past examples\" / \"if-then\" / \"fields\" / \"methods\""
    ],
    [
     "Inference engine vs knowledge base",
     "Inference engine applies the rules. Knowledge base stores the rules and facts.",
     "\"applies\" vs \"stores\""
    ],
    [
     "Expert system vs DSS",
     "Expert system gives expert advice from a knowledge base. DSS helps a manager analyse data with models.",
     "\"expert advice\" vs \"analysis\""
    ],
    [
     "Structured vs semi-structured vs unstructured decisions",
     "Structured: procedure known in advance. Semi: partly known. Unstructured: novel, no procedure, rests on experience.",
     "\"procedure known\" / \"part\" / \"experience\""
    ],
    [
     "Strategic vs management vs operational systems",
     "Strategic = ESS. Management = MIS and DSS. Operational = TPS.",
     "\"senior\" / \"middle\" / \"operations\""
    ],
    [
     "Timeliness vs currency",
     "Timeliness: available when needed. Currency: up to date when provided.",
     "\"when needed\" vs \"up to date\""
    ],
    [
     "Accuracy vs relevance vs conciseness",
     "Accuracy: free from errors. Relevance: related to the recipient's need. Conciseness: only what is needed.",
     "\"errors\" / \"needs\" / \"only\""
    ],
    [
     "Clarity vs order vs media",
     "Clarity: easy to understand. Order: predetermined sequence. Media: paper or screen.",
     "\"sequence\" → order"
    ],
    [
     "Five Vs: Volume, Velocity, Variety, Variability, Value",
     "\"Visibility\" is not one of them.",
     "\"Visibility\" is the trap"
    ],
    [
     "ERP vs enterprise knowledge portal",
     "ERP runs internal processes in one suite. Portal gives one point of access to corporate data and knowledge.",
     "\"processes\" vs \"access\""
    ],
    [
     "Enterprise-wide vs across-enterprise systems",
     "Enterprise-wide connects internal processes (ERP). Across-enterprise connects to stakeholders and other organisations.",
     "\"other organisations\" → across"
    ],
    [
     "ERP cost: reengineering vs software",
     "Reengineering is 43% of the cost. Software is 15%.",
     "\"largest share\" → reengineering"
    ],
    [
     "ERP benefit vs ERP failure cause",
     "Benefit: better sharing and lower processing costs. Failure: too-fast conversion, weak testing, no staff involvement.",
     "\"reported benefit\" vs \"cause of failure\""
    ],
    [
     "SAP vs Oracle vs Microsoft vs Infor",
     "All four sell ERP packages. SAP: R/3, Business One, S/4HANA. Oracle: E-Business Suite. Microsoft: Dynamics. Infor: Global Solutions.",
     "match the product name"
    ],
    [
     "Business process vs system",
     "A process is a set of tasks for a goal. A system has inputs, processing, outputs and a boundary.",
     "\"tasks\" vs \"inputs and outputs\""
    ],
    [
     "Data resources vs information products",
     "Data resources are the stored data (records, reviews). Information products are the output reports and documents.",
     "\"stored\" vs \"output\""
    ],
    [
     "Hardware vs software resources",
     "Hardware: machines and storage media. Software: programs and procedures.",
     "\"disk drives, printers\" vs \"spreadsheet programs\""
    ],
    [
     "Network resources vs hardware resources",
     "Network: communication media and control software. Hardware: computers and devices.",
     "\"communications media\""
    ]
   ]
  },
  "facts": {
   "head": [
    "Fact",
    "What the lecture says",
    "Memory trick"
   ],
   "rows": [
    [
     "Four functional areas (slide 4)",
     "Producing and delivering products and services; managing financial assets and records; attracting, developing and maintaining the labour force; selling products and services",
     "\"Make, Money, People, Sell\""
    ],
    [
     "Functional process examples (slide 7)",
     "Manufacturing: assemble, quality check, bills of materials. Sales: identify customers, make aware, sell. Finance: pay creditors, financial statements, cash. HR: hire, evaluate, enrol in benefits",
     "Each area has three tasks"
    ],
    [
     "Two types of business process",
     "Intra-organisational (functional or cross-functional); inter-organisational",
     "\"Intra = inside walls, Inter = between firms\""
    ],
    [
     "Business process definition",
     "Set of logically related tasks to realise a specific business objective",
     "\"logical tasks, one goal\""
    ],
    [
     "Digital firm",
     "Nearly all significant relationships with customers, suppliers and employees digitally enabled and mediated",
     "\"digitally mediated\""
    ],
    [
     "Automation steps",
     "Modelling → analysis → optimisation → automation; make/buy/hire, software development, integration",
     "\"Model, Analyse, Optimise, Automate\""
    ],
    [
     "Reengineering (Michael Hammer, 1990, HBR)",
     "Fundamental rethinking, radical redesign, dramatic improvements in cost, quality, service, speed",
     "\"four goals: cost, quality, service, speed\""
    ],
    [
     "Reengineering aims",
     "Eliminate repetitive, paper-intensive, bureaucratic tasks; cut costs significantly; improve quality",
     "\"Stop paper, cut cost, raise quality\""
    ],
    [
     "Improvement philosophies",
     "Continuous improvement; total quality management (TQM); DMAIC (Six Sigma)",
     "\"Continuous, Total, Six Sigma\""
    ],
    [
     "DMAIC",
     "Define, Measure, Analyze, Improve, Control",
     "\"Dogs Must Always Improve Constantly\" (D-M-A-I-C)"
    ],
    [
     "DIKW ladder",
     "Data (raw), information (who, what, where, when), knowledge (how), wisdom (why)",
     "\"What, Who-what-where-when, How, Why\""
    ],
    [
     "Example ladder (slides 26 to 30)",
     "Data: POS records; information: items purchased together; knowledge: which items are frequently purchased; wisdom: place frequent items close to raise sales",
     "\"POS → together → frequent → close\""
    ],
    [
     "System characteristics",
     "Input, processing, output, feedback",
     "\"In, Process, Out, Feed back\""
    ],
    [
     "System definition (slide 31)",
     "Interrelated components, clearly defined boundary, common objectives, inputs to outputs through transformation",
     "\"boundary, objective, in, out\""
    ],
    [
     "IS definition (slide 33)",
     "Collect or retrieve, process, store, distribute information to support decision making and control",
     "\"collect, process, store, distribute\""
    ],
    [
     "IS resources",
     "People, hardware, software, data, network; information products as output",
     "\"P-H-S-D-N, then info\""
    ],
    [
     "People resources",
     "Specialists (systems analysts, software developers, systems operators) and end users",
     "\"specialists and end users\""
    ],
    [
     "Hardware resources",
     "Machines (computers, monitors, disk drives, printers, optical scanners); storage media (tape, optical disks)",
     "\"machines and media\""
    ],
    [
     "Software resources",
     "System level (operating system, compilers); application level (spreadsheet, word processing, payroll); procedures",
     "\"system, application, procedures\""
    ],
    [
     "Data resources",
     "Structured (product descriptions, customer records, employee files, inventory databases); unstructured (customer reviews)",
     "\"neat ledger vs notes\""
    ],
    [
     "Network resources",
     "Communications media, communications processors, network access, control software",
     "\"media, processors, access, control\""
    ],
    [
     "Four stages of decision making",
     "Discover and identify the problem; identify and explore solutions; choose among alternatives; make it work and monitor",
     "\"Find, Explore, Choose, Make and Monitor\""
    ],
    [
     "Three decision types",
     "Structured (procedure known; inventory reorder); semi-structured (partly known; product lines in five years); unstructured (novel; business in 10 years)",
     "\"Known, Partly known, Unknown\""
    ],
    [
     "Decision levels (slide 82)",
     "Top: market entry and exit. Middle: marketing plan. First-level: credit and special offers",
     "\"top = market, middle = plan, first = credit\""
    ],
    [
     "Transaction processing cycle (slide 51)",
     "Data entry; transaction processing (batch, online/real-time); database maintenance; document and report generation; inquiry processing",
     "\"Enter, Process, Maintain, Report, Inquire\""
    ],
    [
     "Process control examples",
     "Petroleum refining; power generation; steel production systems",
     "\"oil, power, steel\""
    ],
    [
     "TPS examples",
     "Sales and inventory processing; accounting systems; payroll TPS",
     "\"sales, stock, accounts, pay\""
    ],
    [
     "MIS examples",
     "Sales analysis; production performance; cost trend reporting",
     "\"sales, production, cost\""
    ],
    [
     "MIS data sources (slide 54)",
     "Order processing system, materials resource planning system, general ledger system",
     "\"order, materials, ledger\""
    ],
    [
     "DSS examples",
     "Product pricing; profitability forecasting; risk analysis; voyage estimating",
     "\"price, profit, risk\""
    ],
    [
     "ESS example (slide 62)",
     "Minute-to-minute view of working capital, accounts receivable, accounts payable, cash flow, inventory",
     "\"capital, receivable, payable, cash, stock\""
    ],
    [
     "Report types (slides 56 to 58)",
     "Periodic scheduled; exception (only abnormal); demand reports and responses (on request)",
     "\"Regular, Abnormal, Asked\""
    ],
    [
     "Analytical decision support (slides 91 to 92)",
     "What-if; sensitivity (one variable, repeated); goal-seeking (until target); optimisation (best under constraints)",
     "\"What if, Sense one, Goal, Best\""
    ],
    [
     "Data-driven DSS tools (slides 93 to 96)",
     "OLAP; GIS and GPS; data mining and machine learning; big data analytics",
     "\"OLAP, GIS, Mine, Big\""
    ],
    [
     "Five Vs of big data",
     "Volume, velocity, variety, variability, value",
     "\"V five times, no Visibility\""
    ],
    [
     "Data mining operations",
     "Clustering, classification, association",
     "\"group, sort, link\""
    ],
    [
     "Data mining examples",
     "Cross selling; product placement; affinity promotion; fraud detection; customer behaviour analysis",
     "\"cross, place, affinity, fraud, behaviour\""
    ],
    [
     "Analytics types",
     "Descriptive; predictive; prescriptive",
     "\"happened, will happen, should do\""
    ],
    [
     "Knowledge representation (slides 69 to 70)",
     "Case-based reasoning; frame-based; object-based; rule-based",
     "\"Cases are stories, Frames are forms, Objects act, Rules are If-Then\""
    ],
    [
     "Expert system components (slide 68)",
     "User interface programs; inference engine program; knowledge base; knowledge acquisition program; knowledge engineering",
     "\"interface, engine, base, acquire\""
    ],
    [
     "Examples of expert systems",
     "Credit application advisor; process monitor; diagnostic maintenance systems",
     "\"credit, process, diagnosis\""
    ],
    [
     "Knowledge portal sources (slide 66)",
     "Structured: ERP, CRM, other databases. Unstructured: e-mail groupware, file system, web (internet, intranet, extranet)",
     "\"structured = ERP, CRM; unstructured = mail, files, web\""
    ],
    [
     "Quality of information: time",
     "Timeliness, currency, frequency, time period",
     "\"When, Fresh, How often, Which period\""
    ],
    [
     "Quality of information: content",
     "Accuracy, relevance, completeness, conciseness, scope, performance",
     "\"Right, Related, Enough, Only, Scope, Performance\""
    ],
    [
     "Quality of information: form",
     "Clarity, detail, order, presentation, media",
     "\"Clear, Detailed, Ordered, Presented, Medium\""
    ],
    [
     "ERP definition (slide 101)",
     "Technological backbone of e-business; enterprise-wide transaction framework; integrated suite of software modules for internal business processes",
     "\"one suite, all functions\""
    ],
    [
     "ERP modules (slides 104 to 107)",
     "Financial and accounting; manufacturing and production; human resources; sales and marketing",
     "\"Finance, Factory, People, Sales\""
    ],
    [
     "ERP reported benefits (slide 110)",
     "Better service, production and distribution quality; lower transaction and IT costs; cross-functional information for timely decisions; breaks down departmental walls",
     "\"Better, Cheaper, Connected, Flatter\""
    ],
    [
     "ERP cost components (slide 111)",
     "Reengineering 43%; software 15%; data conversions 15%; training and change management 15%; hardware 12%",
     "\"Reengineering is the biggest slice\""
    ],
    [
     "ERP failure causes (slide 112)",
     "Underestimated complexity; employees not involved; too-fast conversion; too little data conversion and testing; over-reliance on vendors or consultants",
     "\"Complex, Excluded, Rushed, Untested, Vendor-led\""
    ],
    [
     "ERP trends (slide 113)",
     "Flexible ERP; web-enabled ERP; inter-organisational ERP; e-business suites; cloud-enabled ERP",
     "\"Flexible, Web, Inter-firm, Suites, Cloud\""
    ],
    [
     "ERP providers (slide 114)",
     "SAP (R/3, Business One, S/4HANA); Oracle (E-Business Suite); Microsoft (Dynamics); Infor (Global Solutions)",
     "\"SAP, Oracle, Microsoft, Infor\""
    ]
   ]
  },
  "rules": [
   "If the question says \"daily routine transactions, operational staff\" → TPS.",
   "If it says \"fixed monthly reports for middle managers from TPS data\" → MIS.",
   "If it says \"interactive, what-if, non-routine decisions for middle managers\" → DSS.",
   "If it says \"minute-to-minute, senior managers, external events\" → ESS.",
   "If it says \"two firms exchange documents or orders electronically\" → inter-organisational process.",
   "If it says \"one order passes through sales, accounting and production\" → cross-functional process.",
   "If it says \"stores past cases\", \"If-Then rules\", \"frames\" or \"objects with methods\" → the matching knowledge representation.",
   "If it says \"single integrated system for all functions\" → ERP.",
   "If it says \"find hidden purchasing patterns in large data\" → data mining.",
   "If it says \"gradual improvements through measurement\", \"fundamental rethinking\" → continuous improvement vs reengineering."
  ]
 },
 {
  "week": 3,
  "title": "Stakeholder Portals, E-Procurement and CRM",
  "mix": {
   "head": [
    "These look alike",
    "How to tell them apart",
    "Tie-breaker word"
   ],
   "rows": [
    [
     "Corporate website vs enterprise portal",
     "Website: public, informational, interface to the public. Portal: staff and selected partners, personalised, integrates MIS, DSS and other systems.",
     "\"public\" vs \"employees\""
    ],
    [
     "Corporate website feature: splash page vs site map vs store locator",
     "Splash page = entry point to the home page. Site map = list of the site's sections. Store locator = nearby shops.",
     "\"entry point\" → splash page"
    ],
    [
     "Internal vs external enterprise portal applications",
     "Internal: e-mail, project sites, discussion groups, HR self-service, databases, DSS, KM systems. External: industry news, industry discussion groups, customer and supplier extranet links.",
     "\"project sites\" → internal; \"news\" → external"
    ],
    [
     "Hits vs page views vs visits vs click paths vs traffic sources",
     "Hits = file requests. Page views = pages seen. Visits = sessions. Click paths = route through pages. Traffic sources = where visitors came from.",
     "\"came from\" → traffic sources"
    ],
    [
     "Web analytics vs web design",
     "Analytics measures usage to improve design. Design is the look and layout itself.",
     "\"measure and report usage\" → analytics"
    ],
    [
     "Procurement vs purchasing vs sourcing",
     "Procurement = whole process, including receipt and checking quality and timing. Purchasing = buying the right item, quantity, price, source and time. Sourcing = finding and engaging suppliers.",
     "\"receive and check\" → procurement; \"find\" → sourcing; \"buy\" → purchasing"
    ],
    [
     "Sourcing vs settlement",
     "Sourcing finds and negotiates suppliers. Settlement pays: purchase ordering, invoicing, payables, receivables.",
     "\"invoice\" → settlement"
    ],
    [
     "Spend analysis vs spend management",
     "Spend analysis is the data activity. Spend management is the wider domain: spend analysis + commodity management + strategic sourcing.",
     "\"wider domain\" → spend management"
    ],
    [
     "Data cleansing vs data warehousing vs analytics",
     "Cleansing fixes names and codes (supplier normalisation). Warehousing gathers all data into one view. Analytics finds patterns and optimal choices.",
     "\"different names\" → cleansing; \"one view\" → warehousing"
    ],
    [
     "Supplier normalisation vs supplier scorecarding",
     "Normalisation: one standard name for one supplier. Scorecarding: rates performance on quality, service, delivery.",
     "\"name\" vs \"rating\""
    ],
    [
     "Traditional purchasing vs reengineered purchasing",
     "Traditional: four manual stages (define, select, contract, evaluate). Reengineered: spend analysis, sourcing, tactical procurement, settlement, automated with ICT.",
     "\"automated\" → reengineered"
    ],
    [
     "Tactical procurement vs settlement",
     "Tactical: requisitioning, approval workflow, supplier enablement, catalogue management. Settlement: purchase ordering, invoicing, payables, receivables.",
     "\"approval\" → tactical; \"invoice\" → settlement"
    ],
    [
     "Catalogue buying vs contract pricing",
     "Catalogue buying: supplier-driven, employees buy from approved catalogues. Contract pricing: buyer-driven, bidding and contract through a third party.",
     "\"approved catalogue\" vs \"reverse auction\""
    ],
    [
     "Supplier-driven vs buyer-driven sourcing",
     "Supplier-driven: the supplier fills the catalogue (catalogue buying). Buyer-driven: the buyer sets the requirement and runs a bid (contract pricing).",
     "\"who drives\""
    ],
    [
     "E-procurement software vs internet market exchange",
     "Software: used inside the company for approved buying, coupled with its IS. Exchange: a central virtual market external to the company's IS.",
     "\"approved catalogues\" vs \"central virtual market space\""
    ],
    [
     "Internet market exchange vs internet B2B auction vs internet purchasing consortia",
     "Exchange: many buyers and sellers meet in one virtual space. B2B auction: bidding with a wider supplier base from around the world. Consortium: buyers pool power to negotiate discounts.",
     "\"one space\" / \"bid\" / \"pool power\""
    ],
    [
     "Vertical vs horizontal marketplace",
     "Vertical: one industry (Metaljunction for steel). Horizontal: no industry focus (Thomas Register).",
     "\"single industry\" → vertical"
    ],
    [
     "Third-party service provider vs internet purchasing consortia",
     "Third-party provider: a service firm offering spend, sourcing, contract and payment services for buyers and sellers. Consortium: buyers pool purchasing power themselves.",
     "\"third party\" vs \"buyers pool\""
    ],
    [
     "RFI vs RFQ vs RFP",
     "RFI: open enquiry, broad market data. RFQ: competitive pricing of the chosen solution. RFP: specific solutions to the sourcing problem, based on the RFI.",
     "\"open enquiry\" / \"price\" / \"solutions\""
    ],
    [
     "Solicitation vs RFx",
     "Solicitation is the general act of asking suppliers. RFx is the family of three documents (RFI, RFQ, RFP).",
     "\"documents\" → RFx"
    ],
    [
     "Reverse auction vs auction broker (Week 1)",
     "Reverse auction: buyer posts, suppliers bid down. Auction broker: sellers sell, bids go up, broker takes a commission.",
     "\"who is buying?\""
    ],
    [
     "Single-round vs multiple-round price discovery",
     "Single round: one sealed submission, winners selected after all bids are in. Multiple round: suppliers revise bids after feedback on winning bids (reverse auction).",
     "\"after all bids are in\" vs \"repeatedly after feedback\""
    ],
    [
     "Combinatorial vs volume discount vs multi-attribute auction",
     "Combinatorial: mixes bundled and un-bundled bids. Volume discount: discounts at certain quantities. Multi-attribute: winner by a score of price and other attributes.",
     "\"mix bundled\" / \"quantity discount\" / \"score\""
    ],
    [
     "Partial quantity bids vs bundled bids",
     "Partial quantity: a supplier bids on part of the quantity. Bundled: several items in one offer.",
     "\"part of the quantity\" vs \"several items together\""
    ],
    [
     "Start price vs reserve price",
     "Start price is where the bidding opens. Reserve price is the buyer's limit (the highest price the buyer will accept).",
     "\"opens\" → start; \"limit\" → reserve"
    ],
    [
     "Contract vs purchase order",
     "A contract is the legal agreement with price and terms. A purchase order is one order placed under the contract.",
     "\"legal document\" vs \"order placed\""
    ],
    [
     "Contract alerts vs contract monitoring limits",
     "Software does send alerts (expiry, minimum volume, delivery violation). It does not extract the commitments from the legal text automatically.",
     "\"manually\" → limitation"
    ],
    [
     "Risk types: internal vs external vs technology vs process",
     "Internal: resources, integration, investment (our own firm). External: suppliers and catalogues. Technology: which tech, standards, integration. Process: unauthorised actions, trust, skills, incentives.",
     "\"our investment\" / \"suppliers\" / \"standards\" / \"control and trust\""
    ],
    [
     "Process risk vs internal business risk",
     "Process: unauthorised actions disrupting production; needs evidence of control and simplicity. Internal business: resources, infrastructure fit and money.",
     "\"unauthorised\" → process"
    ],
    [
     "Barriers: exchanges vs e-auctions vs consortia",
     "Exchanges: liquidity and brand control. E-auctions: discomfort with auctions, price pressure. Consortia: pricing not better, few vendors, legal conformance.",
     "\"liquid marketplace\" / \"price pressure\" / \"not better\""
    ],
    [
     "Corporate website vs CRM",
     "Website is a public information face. CRM is the internal system for managing each customer's relationship.",
     "\"information to public\" vs \"manage customer\""
    ],
    [
     "CRM acquire vs enhance vs retain",
     "Acquire: new customers. Enhance: support existing customers with more products or service. Retain: keep them loyal.",
     "\"new\" / \"existing\" / \"loyal\""
    ],
    [
     "Cross-selling vs up-selling",
     "Cross-selling: a related product. Up-selling: a better product.",
     "\"related\" vs \"better\""
    ],
    [
     "Direct marketing vs customer service",
     "Direct marketing: campaigns to find and reach leads. Customer service: helping existing customers with requests.",
     "\"campaign\" vs \"request\""
    ],
    [
     "Operational vs analytical vs collaborative vs portal-based CRM",
     "Operational: consistent channel interactions. Analytical: data-warehouse analysis and prediction. Collaborative: working with customers, suppliers and partners. Portal-based: role-based tools for each employee.",
     "\"channels\" / \"predict\" / \"partners\" / \"role\""
    ],
    [
     "Call-centre software vs help-desk software vs web self-service",
     "Call centre: routes calls by agent skill. Help desk: suggests fixes from service data. Web self-service: personalised online help with an option to phone.",
     "\"routing calls\" / \"suggestions\" / \"online\""
    ],
    [
     "Loyalty programme vs direct marketing",
     "Loyalty programme rewards and targets the best customers. Direct marketing reaches prospects with campaigns.",
     "\"reward\" vs \"campaign\""
    ],
    [
     "Analytical CRM vs data mining",
     "Analytical CRM is the trend (using a warehouse to predict and tailor). Data mining is a technique (clustering, classification, association) used in it.",
     "\"trend\" vs \"technique\""
    ]
   ]
  },
  "facts": {
   "head": [
    "Fact",
    "What the lecture says",
    "Memory trick"
   ],
   "rows": [
    [
     "Enterprise portal definition (slide 4)",
     "Web-based interface and integration of MIS, DSS, EIS and other technologies, giving intranet users and selected extranet users access to internal and external applications",
     "\"MIS, DSS, EIS together\""
    ],
    [
     "Corporate website definition (slide 4)",
     "Informational website that is the company's interface to the public",
     "\"public face\""
    ],
    [
     "Portal internal applications (slide 5)",
     "E-mail; project websites; discussion groups; HR web self-services; customer, inventory and corporate databases; DSS; KM systems (7 items)",
     "\"Mail, Projects, Groups, HR, Databases, DSS, KM\""
    ],
    [
     "Portal external applications (slide 6)",
     "Industry, financial and internet news services; links to industry discussion groups; links to customer and supplier extranet sites (3 items)",
     "\"News, Groups, Partners\""
    ],
    [
     "Portal benefits (slide 8)",
     "More specific information; easy access to intranet resources; direct access to industry news; company data for selected partners; less excessive surfing",
     "\"Specific, Easy, News, Partners, Less surfing\""
    ],
    [
     "Corporate website typical contents (slide 9)",
     "Homepage; about us; products and services; people; news; investors; key clients; special interest pages; employment; contact; terms of use; privacy policy",
     "\"Home, About, Products, People, News, Investors, Clients, Jobs, Contact, Terms\""
    ],
    [
     "Corporate website extra features (slide 11)",
     "Splash page; embedded search; site map; blog; community pages; store locator; downloads; calendar; links; FAQ",
     "\"Splash, Search, Map, Blog, Community, Store, Downloads, Calendar, Links, FAQ\""
    ],
    [
     "Web design features (slide 10)",
     "Navigation bar; unified look and feel; responsive design; response time; improved navigation; personalisation",
     "\"Navigate, Look, Respond, Time, Personalise\""
    ],
    [
     "Web analytics areas (slide 12)",
     "About navigation, content and users",
     "\"Navigation, Content, Users\""
    ],
    [
     "Web metrics (slide 13)",
     "Hits; page views; visits or sessions; click paths; traffic sources (5 items)",
     "\"Hits, Pages, Visits, Clicks, Traffic\""
    ],
    [
     "Web analytics tools (slide 14)",
     "Clickstream analysis; Google Analytics (page tagging)",
     "\"Click stream, Google tags\""
    ],
    [
     "Procurement definition (slide 18, Burt 1984)",
     "Systematic process of deciding what, when and how much to buy; the act of purchasing; ensuring receipt on time, quantity and quality",
     "\"Decide, Buy, Receive\""
    ],
    [
     "Purchasing definition (slide 19, Lee 1971)",
     "Buying materials and services of the right quality, quantity, price, source and time",
     "\"Five rights: quality, quantity, price, source, time\""
    ],
    [
     "Sourcing definition (slide 19, Lee 1971)",
     "Finding, evaluating and engaging suppliers of goods and services",
     "\"Find, evaluate, engage\""
    ],
    [
     "E-procurement definition (slide 20)",
     "Technology solution to facilitate corporate buying using the internet and other ICT",
     "\"Corporate buying with ICT\""
    ],
    [
     "E-procurement benefits (slide 21)",
     "Reduced administrative costs; shortened order fulfilment cycle; lowered inventory; lowered prices paid; increased collaboration and planning with partners (5 items)",
     "\"Admin, Cycle, Inventory, Price, Partners\""
    ],
    [
     "Traditional purchasing stages (slide 26)",
     "Define requirement; select supplier; contract agreement; supplier evaluation",
     "\"Define, Select, Contract, Evaluate\""
    ],
    [
     "Reengineered purchasing stages (slide 27)",
     "Spend analysis; sourcing; tactical procurement; settlement",
     "\"Spend, Source, Tactical, Settle\""
    ],
    [
     "Reengineering rules (slide 28)",
     "New activities appear; unstructured decisions not specific activities; structured decisions grouped and automated; transaction processing automated",
     "\"New, Unstructured out, Structured automated, Transactions automated\""
    ],
    [
     "E-procurement models (slide 29)",
     "E-procurement software (inside IS, approved catalogues); internet market exchanges (external, central virtual space); internet B2B auctions (wider supplier base); internet purchasing consortia (pooled power, external)",
     "\"Software, Exchange, Auction, Consortium\""
    ],
    [
     "GE TPN steps (slide 22)",
     "Buyer posts RFP for prequalified suppliers; suppliers download and bid electronically; buyer evaluates, negotiates online, orders with lowest bidder; transaction processing and contracts",
     "\"Post, Bid, Evaluate, Order lowest\""
    ],
    [
     "GE results (slide 23)",
     "Transaction cost down 30%; material cost reduced 5 to 20% (unknown supplier base and spend analysis); time saved 6 to 8 days per month",
     "\"30, 5-20, 6-8 days\""
    ],
    [
     "Spend analysis questions (slide 33)",
     "What was bought; when; with whom; how much paid",
     "\"What, When, Whom, How much\""
    ],
    [
     "Spend management (slide 34)",
     "Spend analysis + commodity management + strategic sourcing",
     "\"Spend analysis is one of three parts\""
    ],
    [
     "Spend analysis functional requirements (slide 36)",
     "Data cleansing; data warehousing; analytics (data mining, optimisation)",
     "\"Clean, Store, Analyse\""
    ],
    [
     "Example spend analysis software (slide 36)",
     "Ariba; Ketera deem",
     "\"Ariba, Ketera\""
    ],
    [
     "Supplier scorecard fields (slide 38)",
     "Financial spending; e-transactions to date; supplier performance (quality, service, logistics); payment terms",
     "\"Spend, E-trade, Performance, Pay terms\""
    ],
    [
     "Minimum scorecard evaluations (slide 39)",
     "Quality; service; delivery",
     "\"Quality, Service, Delivery\""
    ],
    [
     "Sourcing solutions (slides 40 to 41)",
     "Catalogue buying (supplier-driven, e.g., Ariba punch-out); contract pricing (buyer-driven, reverse auction, third party)",
     "\"Catalogue = supplier; Contract = buyer\""
    ],
    [
     "Contract pricing core ingredients (slide 41)",
     "Solicitation (RFx); protocol for price discovery; contracts",
     "\"Ask, Protocol, Contract\""
    ],
    [
     "Marketplace types (slide 41)",
     "Vertical = industry specific (Metaljunction); horizontal = no industry focus (Thomas Register)",
     "\"Vertical = one industry, Horizontal = any\""
    ],
    [
     "Solicitation (slide 42)",
     "Seeking information, proposals and quotations; written or electronic gives quality and consistency",
     "\"Ask in writing\""
    ],
    [
     "RFI, RFQ, RFP (slide 42)",
     "RFI: open enquiry, broad market data. RFQ: competitively cost the chosen solution. RFP: requirements-based request for specific solutions, based on the RFI",
     "\"I (information), Q (quote), P (proposal)\""
    ],
    [
     "RFx (slide 43)",
     "RFI, RFQ and RFP collectively; document and means for buyer to specify requirements across dimensions; business rules; decision-making for complex bids",
     "\"RFx = the family of three\""
    ],
    [
     "RFx process (slide 44)",
     "Submit requirements and rules; create and edit RFx; supplier submits bids; evaluate RFQs; allocation",
     "\"Requirement, Create, Bid, Evaluate, Allocate\""
    ],
    [
     "RFx system characteristics (slide 45)",
     "Easy for all parties; versatile for goods and services, direct and indirect spend; supports RFIs to RFPs",
     "\"Easy, Versatile, Full range\""
    ],
    [
     "Basic reverse auction settings (slide 46)",
     "Multiple quantities; multiple line items; start and reserve prices; partial quantity bids and award allocations; bundled bids (5 items)",
     "\"Quantity, Lines, Start and reserve, Partial, Bundled\""
    ],
    [
     "Advanced reverse auction formats (slide 47)",
     "Combinatorial (mix bundled and un-bundled); volume discount (discount at quantity); multi-attribute (score, not just price)",
     "\"Combine, Volume, Multi-score\""
    ],
    [
     "Price discovery (slide 48)",
     "Single round = sealed-bid style, online tendering, winners after all bids are in. Multiple round = reverse auction, reformulate after feedback",
     "\"Single: one shot. Multiple: many rounds\""
    ],
    [
     "Iterative auction flow (slide 49)",
     "New bids? → allocation (winner determination, quantity matching) → pricing (settlement price) → signalling for bid reformulation",
     "\"New bids, Allocate, Price, Signal\""
    ],
    [
     "Contract definition (slide 50)",
     "Legal documents with price of items and other terms and conditions",
     "\"Price and terms, legally binding\""
    ],
    [
     "Contract software does (slide 51)",
     "Expiry alert; minimum purchase volume alert; delivery violation notice",
     "\"Expire, Minimum, Violate\""
    ],
    [
     "Contract software does not do (slide 51)",
     "Commitments must be manually extracted from legal text; business and transaction data captured manually",
     "\"Manual extract, manual capture\""
    ],
    [
     "Automated tendering (slide 56)",
     "Approval request → auction setup → enquiry → tender publication → quotation request → bid response → bid opening → evaluation and selection → purchase order → shipment → invoice → verification → payment",
     "\"Approve, Set up, Publish, Bid, Open, Evaluate, Order, Ship, Invoice, Pay\""
    ],
    [
     "Internet market exchange servers (slide 57)",
     "B2B web portal; content manager server; market generator server; live market server; post-trade market history server",
     "\"Portal, Content, Generator, Live, History\""
    ],
    [
     "Third-party provider services (slide 58)",
     "Buyer: spend analysis, sourcing, contract management, supplier management, discover sellers. Seller: discover buyers, networking, sales contracts, orders, catalogue collaboration, membership. Cash: discounts, receivables, supply chain finance, invoices, payments",
     "\"Buyer services, Seller services, Cash services\""
    ],
    [
     "E-catalogue flow (slide 59)",
     "Browse suppliers; find products; order items; confirm; transmit; process; order completed",
     "\"Browse, Find, Order, Confirm, Transmit, Process, Complete\""
    ],
    [
     "Risk categories (slide 60)",
     "Internal business; external business; technology; process",
     "\"Inside, Outside, Tech, Process\""
    ],
    [
     "Internal business risks (slide 61)",
     "Resources for implementation; integration with existing infrastructure; significant investments",
     "\"Resources, Integration, Investment\""
    ],
    [
     "External business risks (slide 62)",
     "Supplier cooperation (no guaranteed return); e-catalogues in required formats, updated; buyer-supplier relationship",
     "\"Suppliers, Catalogues, Relationship\""
    ],
    [
     "Technology risks (slide 63)",
     "No clear understanding of which technology fits; no accepted integration across supply chain; no clear open standards",
     "\"Fit, Integration, Standards\""
    ],
    [
     "Process risks (slide 64)",
     "Unauthorised actions disrupting production; must not undermine control, security or privacy; not too complex; right incentives",
     "\"Control, Simple, Incentives\""
    ],
    [
     "Barriers: software and exchanges (slide 65)",
     "Integrating with existing systems; no common standard; supplier access and catalogue investment; not enough suppliers for liquidity; supplier reluctance (price focus, brand control)",
     "\"Integrate, Standard, Access, Liquidity, Control\""
    ],
    [
     "Barriers: e-auctions and consortia (slide 66)",
     "Discomfort with auctions vs partnering; downward price pressure hurts service or quality; cannot identify items for auction. Consortia: pricing not much better; not enough vendors; state law conformance",
     "\"Discomfort, Pressure, Items; Not better, Vendors, Law\""
    ],
    [
     "CRM definition (slide 70)",
     "Acquiring and retaining profitable customers via marketing, sales and service",
     "\"Acquire and retain, profitable\""
    ],
    [
     "CRM purpose (slide 71)",
     "Single complete view of every customer at every touchpoint and across channels; customer's single view of the company",
     "\"One view of the customer, one view of the company\""
    ],
    [
     "CRM application clusters (slides 73 to 77)",
     "Contact and account management; sales; marketing and fulfilment; customer service and support; retention and loyalty programmes (5)",
     "\"Contact, Sell, Market, Serve, Keep\""
    ],
    [
     "Sales cluster (slide 74)",
     "Cross-selling (related product); up-selling (better product); real-time single view",
     "\"Cross = related; Up = better\""
    ],
    [
     "Marketing cluster (slide 75)",
     "Direct marketing campaigns; lead identification; mailing scheduling; response data; campaign value; fulfilment",
     "\"Campaign, Lead, Respond, Fulfil\""
    ],
    [
     "Service cluster (slide 76)",
     "Real-time access; call-centre routing by skill; help-desk suggestions; web self-service",
     "\"Route, Suggest, Self-serve\""
    ],
    [
     "CRM three phases (slide 78)",
     "Acquire (new customers); enhance (supporting existing customers); retain (making loyal)",
     "\"Get, Grow, Keep\""
    ],
    [
     "CRM failure causes (slide 79)",
     "No senior sponsorship; improper change management; too much too fast; poor integration with core systems; no end-user incentives",
     "\"Sponsor, Change, Pace, Integrate, Incentive\""
    ],
    [
     "CRM trends (slides 80 to 83)",
     "Operational (channels, synchronised, easy to do business with); analytical (warehouse, predict, tailored offers); collaborative (customers, suppliers, partners); portal-based (role tools)",
     "\"Operate, Analyse, Collaborate, Portal\""
    ]
   ]
  },
  "rules": [
   "If the question says \"single personalised interface for employees\" → enterprise portal.",
   "If the question says \"public, informational, investors, press releases\" → corporate website.",
   "If it says \"from search engines, social media, referral sites\" → traffic sources.",
   "If it says \"finding, evaluating and engaging suppliers\" → sourcing. \"Right quality, quantity, price, source and time\" → purchasing. \"Receipt and quality check\" → procurement.",
   "If it says \"bids down the price, buyer runs the auction\" → reverse auction. \"Bid after feedback, several rounds\" → multiple-round price discovery. \"All bids in, then winner chosen\" → single round.",
   "If it says \"weights for price, delivery and service\" → multi-attribute reverse auction.",
   "If it says \"employees buy from approved catalogues\" → catalogue buying (supplier driven).",
   "If it says \"a third party runs spend, sourcing, contracts and payments\" → third-party service providers.",
   "If it says \"cleanse supplier names, one view of spend\" → data cleansing / supplier normalisation, then warehousing.",
   "If it says \"customer is offered a related product\" → cross-selling; \"better product\" → up-selling."
  ]
 },
 {
  "week": 4,
  "title": "E-Marketing and Supply Chain Management (Lectures 1 to 5)",
  "mix": {
   "head": [
    "These look alike",
    "How to tell them apart",
    "Tie-breaker word"
   ],
   "rows": [
    [
     "Online surfer vs online consumer",
     "Surfer browses aimlessly. Consumer has goal-directed, repeated contact and bookmarks the site",
     "\"bookmark\" or \"repeated\" → consumer"
    ],
    [
     "Online consumer vs online prosumer",
     "Consumer views, reads and downloads. Prosumer also tailors the product and shares personal information",
     "\"tailor\" or \"share personal information\" → prosumer"
    ],
    [
     "Online buyer vs key online customer",
     "Buyer has made a purchase online. Key customer returns for multiple purchases and gets CRM",
     "\"returning\" or \"multiple\" → key customer"
    ],
    [
     "Push vs pull",
     "Push: the provider starts it. Pull: the user starts it",
     "Who starts it"
    ],
    [
     "Spam vs customised push",
     "Both are provider-started. Spam is unwanted mass mail. Customised push is tailored to the person",
     "\"tailored\" → customised push; \"unwanted, no way out\" → spam"
    ],
    [
     "Pull principle vs context targeting",
     "Pull is about who starts the demand. Context is about where an ad shows, for someone already searching",
     "\"user requests and pays\" → pull; \"already searching now\" → context"
    ],
    [
     "Nanosite vs microsite",
     "Nanosite opens inside the current page. Microsite is a separate, specially designed site",
     "\"without leaving the current page\" → nanosite"
    ],
    [
     "Microsite vs branded content",
     "Microsite stands alone. Branded content is a section of the company's own site",
     "\"part of the website\" → branded content"
    ],
    [
     "Banner advertising vs embedded content",
     "Banner is an ad placed on a page. Embedded content sits inside the content (keyword search, promoted news)",
     "\"keyword search\" or \"promoted news\" → embedded"
    ],
    [
     "Community vs content vs context targeting",
     "Community: virtual community sites. Content: related websites of other organisations. Context: people searching the subject now",
     "\"virtual community\", \"related website\", \"currently searching\""
    ],
    [
     "Demographic/psychographic vs online behaviour",
     "Who the person is vs what they did online",
     "\"cookies\" or \"browsing\" → online behaviour"
    ],
    [
     "Explicit vs implicit data",
     "Explicit: the customer gives it. Implicit: observed from behaviour",
     "\"clicks\", \"never provided\" → implicit"
    ],
    [
     "Structured vs unstructured data",
     "Structured: fixed rows and columns. Unstructured: free text and media",
     "\"database, fields\" vs \"reviews, free text\""
    ],
    [
     "Interactive marketing vs interactive design",
     "Marketing is two-way talk. Design is the product page the customer configures",
     "\"chat, forms, questionnaires\" → marketing"
    ],
    [
     "Sales force automation vs sales management",
     "Automation captures sales data in real time. Management gives decision support to managers",
     "\"decision support\" → sales management"
    ],
    [
     "B2C vs B2B",
     "Business to consumer (individual buyers) vs business to business (company buyers)",
     "\"individual consumer\" vs \"another company\""
    ],
    [
     "Mass marketing vs mass customised marketing",
     "Same product for everyone vs personalised at mass cost",
     "\"same for everyone\" vs \"each customer, at mass cost\""
    ],
    [
     "Value chain vs supply chain",
     "Value chain: steps inside one firm. Supply chain: many firms from supplier to customer",
     "\"inside one firm\" → value chain"
    ],
    [
     "Supply chain vs SCM",
     "Supply chain is the network. SCM is managing that network",
     "\"system of organisations\" vs \"managing, coordinating\""
    ],
    [
     "Logistics vs supply chain",
     "Logistics moves and stores goods. Supply chain is the whole network of partners",
     "\"moving goods\" vs \"all partners\""
    ],
    [
     "Materials management vs distribution",
     "Materials management brings inputs in. Distribution sends finished goods out",
     "\"raw materials, components\" → materials; \"customers\" → distribution"
    ],
    [
     "Upstream vs downstream",
     "Upstream is toward suppliers. Downstream is toward customers",
     "\"supplier\" or \"customer\" side"
    ],
    [
     "Integration vs interoperability",
     "Integration is the deeper, planned tie-up. Interoperability is the ability to exchange and use data",
     "\"always\" or \"necessarily\": integrated implies interoperable, not the reverse"
    ],
    [
     "Technical vs semantic interoperability",
     "Technical: the systems can connect. Semantic: they mean the same thing",
     "\"meaning differs but data transfers\" → semantic"
    ],
    [
     "Data vs service interoperability",
     "Data: exchanging database content (EDI, XML). Service: running separately built applications (CORBA, SOA)",
     "\"databases, messages\" → data; \"applications, architecture\" → service"
    ],
    [
     "Information integration vs collaboration",
     "Information integration is technical links. Collaboration is managerial (contracts, joint decisions)",
     "\"contract\" or \"joint decision\" → collaboration"
    ],
    [
     "Planning vs inventory collaboration",
     "Planning: what, when, where and how to produce. Inventory: when to order and how much",
     "\"production\" vs \"order quantity\""
    ],
    [
     "Type 0 vs Type 1",
     "Type 1 shares forecasts and action plans. Type 0 shares nothing",
     "\"exchange demand information\" → Type 1"
    ],
    [
     "Type 1 (CPFR) vs Type 2 (VMI)",
     "Type 1: both still order on their own. Type 2: the supplier generates the order and carries the stock responsibility",
     "\"supplier generates the replenishment order\" → VMI"
    ],
    [
     "Type 2 (VMI) vs Type 3 (synchronised)",
     "VMI: inventory only. Synchronised: planning and inventory, with replenishment merged into the supplier's material planning",
     "\"merged with material planning\" → synchronised"
    ],
    [
     "Consignment stock vs ordinary stock",
     "Consignment stays the supplier's until used. Ordinary stock is bought",
     "\"pays when used\" → consignment"
    ],
    [
     "Bullwhip effect vs variability",
     "Variability is the general swing. Bullwhip is the growth of that swing as you go upstream",
     "\"travel up the chain\" → bullwhip"
    ],
    [
     "Cause vs fix (variability)",
     "Causes: forecasting, lead time, batching, price changes, inflated orders, lack of central information. Fixes: sharing information",
     "\"lack of centralised information\" is a cause; \"centralised information sharing\" is a fix"
    ],
    [
     "Bullwhip cause vs consequence",
     "Causes are the factors that create swings. Consequences are safety stock, poor service, wasted resources, transport cost",
     "\"named as a factor\" → cause; \"extra cost or stock\" → consequence"
    ],
    [
     "Order vs delivery vs production lead time",
     "Order lead time: the order travelling up. Delivery lead time: the goods travelling down. Production lead time: the factory making goods",
     "\"order placed\", \"delivered\", \"made at the factory\""
    ],
    [
     "Primary vs support activities",
     "Primary activities move value to the customer. Support activities run in the background",
     "\"procurement, HR, IT, infrastructure\" → support"
    ],
    [
     "Manufacturing cycle vs procurement cycle",
     "Manufacturing: distributor and manufacturer loop (production options). Procurement: manufacturer and supplier loop (buying raw materials)",
     "\"on-demand, just-in-time\" vs \"raw materials, sell side, buy side\""
    ],
    [
     "SCOR \"Source\" vs procurement cycle",
     "Source is a SCOR category. Procurement is a loop in the four cycles. Same idea, different framework",
     "Use the framework the question names"
    ],
    [
     "Customer buying cycle vs replenishment cycle",
     "Customer buying: customer and dealer. Replenishment: dealer and distributor",
     "\"after-sales support\" vs \"restock the shop\""
    ],
    [
     "Sell side vs buy side vs marketplace",
     "Sell side: one supplier's catalogue to many buyers. Buy side: the buyer runs the buying. Marketplace: many buyers and sellers meet",
     "\"supplier to many buyers\" → sell side; \"many sellers compete\" → marketplace"
    ],
    [
     "RFQ vs purchase order vs invoice",
     "RFQ asks for prices. PO orders goods. Invoice bills for goods supplied",
     "\"price\", \"order\", \"bill\""
    ],
    [
     "Shipping notice vs receiving notice",
     "Shipping notice: supplier says goods left. Receiving notice: buyer says goods arrived",
     "\"left\" vs \"arrived\""
    ],
    [
     "Payment advice vs remittance notice vs deposit notice",
     "Advice: buyer says payment is coming. Remittance: what the payment covers. Deposit: supplier's bank says money arrived",
     "\"coming\", \"covers\", \"credited\""
    ],
    [
     "Payment authorisation vs electronic transfer of funds",
     "Authorisation: purchaser tells its own bank to pay. Transfer: bank-to-bank money movement",
     "\"purchaser to own bank\" vs \"bank to bank\""
    ],
    [
     "Logistics vs logistics information system",
     "Logistics moves goods. The information system is the database and functions that track them",
     "\"database, planning, control\" → information system"
    ],
    [
     "ERP vs WMS vs TMS",
     "ERP: whole-company records. WMS: warehouse. TMS: transport",
     "\"company-wide\" → ERP; \"shelves, bins, pallets\" → WMS; \"trucks, routes, carriers\" → TMS"
    ],
    [
     "WMS vs equipment control system",
     "WMS decides and instructs. Equipment control moves machines and reports faults",
     "\"crane\", \"conveyor\", \"mechanical failure\" → equipment control"
    ],
    [
     "Put-away vs replenishment vs picking",
     "Put-away: new goods into storage. Replenishment: refill pick locations from bulk. Picking: take items for an order",
     "\"new arrivals\" / \"refill the front shelves\" / \"fill an order\""
    ],
    [
     "Cross-docking vs sortation",
     "Cross-docking: goods pass straight through. Sortation: groups goods by order, vehicle or area",
     "\"no storage\" → cross-docking; \"by vehicle or area\" → sortation"
    ],
    [
     "Receiving vs dispatch",
     "Receiving: goods in, checked against ASNs. Dispatch: goods out, with documents",
     "\"in\" vs \"out\"; \"dimensions and weights\" → receiving"
    ],
    [
     "Full count vs perpetual inventory",
     "Full count: everything at once. Perpetual: continuous",
     "\"always up to date\" → perpetual"
    ],
    [
     "Barcode vs RFID",
     "Barcode needs line of sight. RFID uses radio waves",
     "\"line of sight\" → barcode; \"radio, no line of sight\" → RFID"
    ],
    [
     "Pick-to-light vs barcode",
     "Pick-to-light guides a person with lights. Barcode captures data",
     "\"lights, displays, buttons\" → pick-to-light"
    ],
    [
     "AS/RS vs AGV",
     "AS/RS: cranes and fixed racking. AGV: a driverless vehicle on set routes",
     "\"crane and racking\" vs \"driverless vehicle\""
    ],
    [
     "TMS strategic vs tactical vs operational",
     "Strategic: long-term network and contracts. Tactical: medium-term capacity and rates. Operational: daily trips and execution",
     "\"network design, contracts\" → strategic; \"capacity forecast\" → tactical; \"dispatch, route\" → operational"
    ],
    [
     "Capacity management vs resource management",
     "Capacity: trucks and transport capacity. Resource: people (own and hired staff)",
     "\"vehicles, capacity\" vs \"employees\""
    ],
    [
     "Asset and fleet management vs fleet and driver planning",
     "Asset and fleet: maintenance, financing, fuel for owned assets. Fleet and driver planning: assigning vehicles and drivers to loads",
     "\"maintenance\" vs \"assign to loads\""
    ],
    [
     "Carrier selection vs fleet and driver planning",
     "Carrier selection picks the mode or an outside carrier. Fleet and driver planning uses own equipment and drivers",
     "\"own equipment, driving hours\" → fleet and driver planning"
    ],
    [
     "Transport sourcing vs carrier selection",
     "Sourcing is the strategic buying of transport services. Carrier selection is for one shipment",
     "\"contract\", \"strategic\" vs \"this load\""
    ],
    [
     "Load design vs route planning vs load/trip planning",
     "Load design: 3D arrangement inside the truck. Route: the street path. Load/trip: which goods share a trip",
     "\"three dimensions\" / \"street level\" / \"which goods together\""
    ],
    [
     "Order entry vs dispatching",
     "Order entry records and validates orders. Dispatching informs carriers or drivers",
     "\"inform the carrier\" → dispatching"
    ],
    [
     "Distribution channel vs distribution logistics",
     "Channel: who sells. Logistics: how goods are stored, moved and serviced",
     "\"broker, wholesale, franchising\" vs \"warehouse, transport, service\""
    ],
    [
     "Direct outlet vs indirect outlet",
     "Direct: the provider sells itself. Indirect: through wholesale, retail, franchise or infomediary",
     "\"intermediary\" → indirect"
    ],
    [
     "Online vs offline vs hybrid distribution",
     "Online: all digital. Offline: all physical. Hybrid: a physical product with a digital part",
     "\"digital part of a physical product\" → hybrid"
    ],
    [
     "Direct shipping vs in-transit merge",
     "Direct shipping sends from the maker to the customer. In-transit merge combines pieces into one delivery",
     "\"single delivery from different places\" → merge"
    ],
    [
     "Package carrier vs last-mile delivery",
     "Package carrier is an outside courier. Last-mile is the distributor's own delivery to the home",
     "\"package carrier\" vs \"delivers to the home itself\""
    ],
    [
     "Manufacturer/distributor pickup vs retail pickup",
     "Where the stock sits: warehouse vs local store",
     "\"local retail stores\" → retail pickup"
    ],
    [
     "On-demand production vs just-in-time",
     "On-demand starts after a customer order. JIT means supplies arrive exactly when needed",
     "\"customer order\" → on-demand; \"exactly when needed\" → JIT"
    ],
    [
     "Mass production vs on-demand production",
     "Mass: one standard product in bulk. On-demand: built per order, at near mass cost",
     "\"configured for the customer\" → on-demand"
    ]
   ]
  },
  "facts": {
   "head": [
    "List",
    "Items",
    "Memory trick"
   ],
   "rows": [
    [
     "Four Ps",
     "Product, Price, Place, Promotion",
     "\"What, how much, where, how you tell people\""
    ],
    [
     "Marketing eras (six)",
     "Undifferentiated mass, differentiated mass, segment-oriented, niche, individual, mass customised",
     "Mass → mass with variants → segments → niche → one person → mass again, but customised"
    ],
    [
     "Internet's gains (three)",
     "Reduced cost, reduced time, higher outreach",
     "\"C-T-O\": Cheaper, Time saved, Outreach"
    ],
    [
     "Characteristics of eMarketing (six)",
     "Associative acquisition, pull and customised push, customer integration, one-to-one, ubiquity, disintermediation",
     "\"Ask, Pull-push, Co-create, One-to-one, Everywhere, No middlemen\""
    ],
    [
     "Online customer stages (five)",
     "Surfer, consumer, prosumer, buyer, key online customer",
     "\"Surf, Save, Shape, Shop, Stay\""
    ],
    [
     "Marketing activities (seven)",
     "Interactive marketing, sales force automation, sales management, CRM, market research and forecast, advertising and promotion, product management",
     "\"Talk, Sell, Manage, Keep, Study, Advertise, Design\""
    ],
    [
     "Promotion types (six)",
     "Banner, buttons, nanosite, microsite, branded content, embedded content",
     "Banner and button sit on the page; nanosite stays on the page; microsite is its own site; branded is a brand corner; embedded sits inside content"
    ],
    [
     "Targeting components (five)",
     "Community, content, context, demographic/psychographic, online behaviour",
     "\"Three Cs say where the ad sits; two say who or what\""
    ],
    [
     "Product management (four)",
     "B-to-C, interactive design, store locator, online payment",
     "\"Business-to-consumer, Design, Locate, Pay\""
    ],
    [
     "Push features",
     "Provider starts it, unsolicited, subscribe and unsubscribe, can be customised",
     "\"Push: the provider pokes. Pull: the person pulls\""
    ],
    [
     "Four cycles (four)",
     "Customer buying, replenishment, manufacturing, procurement",
     "\"Buy, Restock, Make, Procure\", along customer → dealer → distributor → manufacturer → supplier"
    ],
    [
     "SCOR (four)",
     "Plan, Source, Make, Deliver",
     "\"Source, Make, Deliver are the work; Plan is the brain on top\""
    ],
    [
     "SCM functional processes (six)",
     "Strategic sourcing and procurement; forecast and demand planning; customer order fulfilment; distribution network and warehouse operations; transportation and shipment; production logistics",
     "\"Buy, Forecast, Fill, Distribute, Ship, Produce\""
    ],
    [
     "Information sharing benefits (six)",
     "Less variability, better forecasts, coordinated plans, locate items, react faster to supply problems, shorter lead times",
     "\"Wobble, Forecast, Coordinate, Locate, React, Lead times\""
    ],
    [
     "Variability causes (six)",
     "Demand forecasting, lead time, batch ordering, price fluctuation, inflated orders, lack of centralised information",
     "\"F-L-B-P-I-L\": Forecast, Lead time, Batch, Price, Inflated, Lack of info"
    ],
    [
     "Bullwhip consequences (four)",
     "Increased safety stock, reduced service level, inefficient resource allocation, increased transport cost",
     "\"Stock up, Service down, Waste resources, Transport up\""
    ],
    [
     "SCM objective levels (three)",
     "Strategic, tactical, operational execution",
     "Strategic = years (network). Tactical = months (plans). Operational = days (schedules). Memory aid, not from the slide"
    ],
    [
     "e-SCM challenges (five)",
     "Planning, selecting, implementing solutions; real-time infrastructure; frequent technology change; multiple partners' technology; new partners",
     "\"Plan, Real-time, Change, Partners' tech, New partner\""
    ],
    [
     "B2B integration challenges (five)",
     "Diverse formats, large dynamic information space, no semantic standards, fast and secure transmission, reliable transmission",
     "\"Formats, Space, Standards, Speed-and-safety, Reliability\""
    ],
    [
     "Collaboration managerial issues (six)",
     "Collaborative communication, coordinating contract, information sharing, joint decisions, joint knowledge creation, resource sharing",
     "\"Talk, Contract, Share, Decide together, Learn together, Pool resources\""
    ],
    [
     "Collaboration types (four)",
     "Type 0 traditional, Type 1 planning (CPFR), Type 2 inventory (VMI), Type 3 both (synchronised)",
     "\"0 nothing, 1 plan, 2 stock, 3 both\""
    ],
    [
     "Key collaboration factors (three)",
     "Geography, demand pattern, product characteristics",
     "\"Where, how steady, what kind (shelf life, value)\""
    ],
    [
     "VMI integration issues (four)",
     "Information integration, planning synchronisation, workflow coordination, monitoring and measurement",
     "\"Info, Plan, Workflow, Monitor\""
    ],
    [
     "VMI flows (three)",
     "Information, material, credit",
     "\"Data, goods, money\""
    ],
    [
     "Logistics information system (database plus four)",
     "Planning, co-ordination, customer service communication, control",
     "\"Plan, Coordinate, Talk to customers, Control, around one Database\""
    ],
    [
     "WMS main flow (eight)",
     "Receiving, put-away, replenishment, picking, packing, cross-docking, sortation, dispatch",
     "\"Receive, Put away, Refill, Pick, Pack, Sort, Dispatch\" (cross-docking skips storage)"
    ],
    [
     "WMS side jobs",
     "Added value (kitting, labelling, final assembly), management, stock counting (full or perpetual), batch tracking",
     "\"Kit, Manage, Count, Trace\""
    ],
    [
     "TMS strategic (five)",
     "Transport sourcing, performance management, network design, carbon footprint, contract management",
     "\"Sourcing, Performance, Network, Carbon, Contracts\""
    ],
    [
     "TMS tactical (four)",
     "Capacity, asset and fleet, resource, rate and tariff",
     "\"CARR\": Capacity, Assets, Resources, Rates"
    ],
    [
     "TMS operational planning (five)",
     "Consolidation and load/trip, load design, route, fleet and driver, carrier",
     "\"Load, Layout, Route, Driver, Carrier\""
    ],
    [
     "TMS operational execution (seven)",
     "Order entry and consolidation, dispatching, order status, customs and global execution, yard, parcel, execution monitoring",
     "\"Enter, Dispatch, Status, Customs, Yard, Parcel, Monitor\""
    ],
    [
     "Distribution network options (six)",
     "Direct shipping; direct shipping with in-transit merge; distributor with package carrier; distributor with last mile; warehouse with customer pickup; retail with customer pickup",
     "Options 1-2 stock at the maker, 3-4 at a distributor, 5-6 the customer collects"
    ],
    [
     "Online distribution advantages (five)",
     "Instant and any time, direct contact, no bottlenecks, lower cost, niche products sold economically",
     "\"Instant, Direct, No bottleneck, Cheaper, Niche\""
    ],
    [
     "Online distribution disadvantages (six)",
     "Illegal copying, network access needed, behaviour recorded, costs passed on, no social contact, quality loss",
     "\"Copied, Connected, Captured, Charged, Cold, Compressed\""
    ],
    [
     "Logistics definition",
     "Logistics = materials management + distribution",
     "\"In + Out\""
    ],
    [
     "Supply chain definition",
     "Suppliers + logistics + customers",
     "\"SC = Suppliers + Logistics + Customers\""
    ],
    [
     "Distribution logistics (three parts)",
     "Storage, transport network, service",
     "\"Store, Move, Serve\""
    ]
   ],
   "extra": [
    {
     "title": "Quotes, authors and examples",
     "head": [
      "Item",
      "What the lecture says (paraphrased)",
      "Remember"
     ],
     "rows": [
      [
       "AIDA model",
       "Four steps from attention to action. The slide does not name who devised it",
       "\"Catch the eye, hold the interest, create the want, close the sale\""
      ],
      [
       "Holweg, Disney, Holmström and Småros (2005)",
       "The collaboration strategy continuum: Types 0 to 3, in the European Management Journal",
       "\"The four Types\""
      ],
      [
       "Chopra (2003)",
       "The six distribution network design options",
       "\"Six ways to hold and ship\""
      ],
      [
       "Rushton, Croucher and Baker",
       "Handbook of logistics and distribution management. Source of the logistics definition",
       "\"Logistics = in + out\""
      ],
      [
       "Christopher (2016)",
       "Logistics and supply chain management book. Source of the logistics information system functions",
       "\"Five boxes around one database\""
      ],
      [
       "Capgemini Consulting (2011)",
       "Transportation Management Report. Source of the TMS reference model",
       "\"Three levels plus two side areas\""
      ],
      [
       "Dell",
       "The only named company on the slides. Example of manufacturer storage with direct shipping",
       "\"Dell ships from the maker, skipping the shop\""
      ],
      [
       "Online retailers that dropship",
       "Same network option as Dell. The retailer takes the order and the maker ships",
       "\"Dropship\""
      ],
      [
       "VMI motivating example",
       "Retailer and supplier with consignment stock, POS data sharing, fill-rate and planning changes",
       "\"Consignment, POS, fill rate\""
      ],
      [
       "Grocery and fast-moving items",
       "Example for last-mile delivery by the distributor or retailer",
       "\"Grocery to the doorstep\""
      ],
      [
       "Large distribution centre",
       "Example for why a WMS is needed: thousands of orders, thousands of SKUs",
       "\"Thousands of orders, thousands of SKUs\""
      ],
      [
       "AS/RS crane",
       "Example of WMS instructing an equipment control system, which reports mechanical failure",
       "\"Crane needs equipment control\""
      ],
      [
       "Pick-to-light",
       "Example of WMS instructing lights to guide an operator",
       "\"Lights guide the picker\""
      ],
      [
       "Express parcel",
       "Example of the parcel management function in TMS execution",
       "\"Express parcels have their own rules\""
      ],
      [
       "Conveyors, AGVs, in-line scales, sortation",
       "Equipment controlled by the equipment control system",
       "\"Belts, robots, scales, sorters\""
      ]
     ]
    }
   ]
  },
  "rules": [
   "\"Without leaving the current page\" → nanosite.",
   "\"Unsolicited\", \"no way to stop\", \"cannot unsubscribe\" → the push principle, with its subscribe and unsubscribe facility as the missing piece.",
   "\"Already searching for information on this subject\" → context targeting.",
   "\"Variability grows as we travel up the chain\" or \"factory orders swing far more than sales\" → bullwhip effect.",
   "\"Supplier generates the replenishment order and keeps the retailer's stock level\" → VMI (Type 2). If the supplier merges replenishment with its own material planning instead → synchronised supply chain (Type 3).",
   "\"Order independently but exchange demand information and action plans\" → collaborative planning and forecasting (Type 1).",
   "\"Crane\", \"conveyor\", \"mechanical failure\" → equipment control system. \"Best storage location for a received item\" → put-away.",
   "\"Radio waves, no line of sight\" → RFID. \"Line of sight\" → barcode.",
   "\"Applications designed separately must work together\" → service interoperability. \"Different databases exchanging information, EDI or XML\" → data interoperability.",
   "\"Physical product with an auxiliary digital part\" → hybrid distribution.",
   "\"Customers walk into the store or order online and collect there\" → retail storage with customer pickup."
  ]
 },
 {
  "week": 5,
  "title": "Internet, Web and E-Business Infrastructure (Lectures 1 to 5)",
  "mix": {
   "head": [
    "These look alike",
    "How to tell them apart",
    "Tie-breaker word"
   ],
   "rows": [
    [
     "Scale up vs scale out",
     "Scale up: one bigger server. Scale out: more servers",
     "\"larger server\" vs \"more servers\""
    ],
    [
     "Performance vs scalability vs availability",
     "Performance: speed of response. Scalability: handling waves of demand. Availability: staying up and being repaired",
     "\"response time\" / \"waves of demand\" / \"keeps running if one fails\""
    ],
    [
     "Throughput vs latency",
     "Throughput: requests served per second (or Mbps). Latency: time taken for one request",
     "\"per second\" vs \"time to complete\""
    ],
    [
     "Response time vs CPU time",
     "Response time includes disk, memory, I/O and OS overhead. CPU time counts only the processor working",
     "\"waiting, disk, I/O\" → response time; \"CPU computing\" → CPU time"
    ],
    [
     "User CPU time vs system CPU time",
     "User: the program's own work. System: the operating system's work for it",
     "\"operating system work\" → system CPU time"
    ],
    [
     "MTTF vs MTTR",
     "MTTF: average time until failure. MTTR: average time to repair",
     "\"to failure\" vs \"to repair\""
    ],
    [
     "Single point of failure vs minimum configuration",
     "A single point of failure is one part whose loss stops the site. Minimum configuration is the smallest set that keeps it working",
     "\"find and remove the one part\" → single point of failure"
    ],
    [
     "Dispatcher-based vs DNS-based vs server-based balancing",
     "Dispatcher: a TCP router picks the least-loaded server. DNS: round-robin during address translation. Server: redirects the client to another server",
     "\"TCP router\" → dispatcher; \"round-robin, address translation\" → DNS; \"redirect\" → server (slower)"
    ],
    [
     "Web server vs application server vs database server",
     "Web server returns files over HTTP. Application server handles transactions to the back end. Database server runs the DBMS and SQL",
     "\"HTTP, files\" / \"transactions between web server and database\" / \"DBMS, SQL\""
    ],
    [
     "Proxy vs cache",
     "Proxy sits between users and the internet and can filter and hide addresses. Cache stores copies to avoid refetching",
     "\"hides addresses, firewall\" → proxy; \"stores copies, traffic reduction\" → cache"
    ],
    [
     "Third-party services vs proxy",
     "Third-party services are outside services a page calls (ads, trust) and add delay. Proxies are your own gateway servers",
     "\"ad server, trust service, escrow\" → third party"
    ],
    [
     "Data warehouse vs data mart",
     "Warehouse: the whole organisation's collected data. Mart: a smaller, topic-focused slice",
     "\"whole organisation\" vs \"one department's topic\""
    ],
    [
     "Circuit switching vs packet switching",
     "Circuit switching reserves a fixed path. Packet switching sends independent packets that may take different routes",
     "\"packets discarded\" or \"packets out of sequence\" → packet switching"
    ],
    [
     "Connection-oriented (TCP) vs connectionless (UDP, IP)",
     "TCP sets up a connection and handshakes. UDP and IP just send",
     "\"handshaking, acknowledgement\" → TCP"
    ],
    [
     "Best-effort delivery vs guaranteed delivery",
     "Best-effort: the network may discard packets, and the host must recover. Guaranteed: the network promises delivery",
     "\"discarded on congestion\" → best effort"
    ],
    [
     "Hosts vs routers",
     "Hosts originate and receive data. Routers forward packets along the way",
     "\"originators and destinations\" vs \"responsible for routing\""
    ],
    [
     "Local ISP vs national or regional ISP",
     "Local ISP leases from the bigger ISP and sells dial-up access. National/regional ISP runs its own backbone and charges local ISPs",
     "\"leases connections\" → local; \"own backbone\" → national"
    ],
    [
     "DNS vs ICANN",
     "DNS converts names to IP addresses. ICANN coordinates the names and numbers system",
     "\"converting names\" → DNS; \"coordinating assignment\" → ICANN"
    ],
    [
     "Root servers vs registry servers vs nameservers",
     "Nameservers hold a domain's own records. Root and registry servers are the next place to look when the nameservers are unknown",
     "\"domain's own nameservers\" vs \"unknown, look upwards\""
    ],
    [
     "Cached (non-authoritative) answer vs authoritative answer",
     "A relay ISP's cached answer is non-authoritative. The domain's own nameserver gives the authoritative answer",
     "\"ISP is only a relay\" → non-authoritative"
    ],
    [
     "URL vs IP address vs domain name",
     "URL: full address including protocol, port and resource. Domain name: human name. IP address: numeric address",
     "\"protocol://\" → URL; \"192.0.2.1\" style → IP"
    ],
    [
     "Port number vs IP address vs socket vs MAC address",
     "Port: which application. IP: which host. Socket: IP plus port. MAC: the physical network card on the local link",
     "\"which application on the host\" → port; \"uniquely across the Internet\" → socket; \"local network card\" → MAC"
    ],
    [
     "IPv4 vs IPv6",
     "IPv4: 32-bit. IPv6: 128-bit",
     "the bit length in the question"
    ],
    [
     "HTTP request vs HTTP response",
     "Request: client to server, written in ASCII. Response: server to client, returned in MIME (HTML, JPEG, GIF)",
     "\"sent by client\" → ASCII; \"returned by server\" → MIME"
    ],
    [
     "Static vs dynamic page",
     "Static: a stored HTML file. Dynamic: built on request, often from a database",
     "\"database query\" or \"server script\" → dynamic"
    ],
    [
     "Server-side vs client-side programming",
     "Server-side: runs on the server (servlets, ASP, PHP, CGI). Client-side: runs in the browser (JavaScript)",
     "\"runs in the browser\" → client-side"
    ],
    [
     "Cookies vs URL",
     "Cookie: small data the server stores in the browser to recognise the client. URL: an address",
     "\"recognise a returning user\" → cookie"
    ],
    [
     "OSI model vs TCP/IP model",
     "OSI has seven layers and is the reference. TCP/IP has four layers and is the working suite",
     "\"seven layers, reference\" vs \"four layers, most important suite in use\""
    ],
    [
     "Transport layer vs network layer",
     "Transport: end-to-end between two hosts (TCP, UDP). Network: forwarding packets across the network (IP)",
     "\"between two hosts\" vs \"across the network\""
    ],
    [
     "Link layer vs physical layer",
     "Link: access to the network and frames. Physical: the signals and media",
     "\"frames, MAC\" vs \"signals, medium\""
    ],
    [
     "TCP vs UDP",
     "TCP: connection-oriented, acknowledgements, sliding window. UDP: connectionless, no retransmission",
     "\"acknowledgement, handshaking\" → TCP; \"no acknowledgement\" → UDP"
    ],
    [
     "Sliding window vs spanning tree",
     "Sliding window controls data in flight in TCP. Spanning tree stops loops in bridged networks",
     "\"unacknowledged data\" → sliding window; \"loops\" → spanning tree"
    ],
    [
     "Frame vs packet vs datagram vs segment",
     "Segment: transport unit. Datagram: IP unit. Frame: link unit",
     "the layer named in the question"
    ],
    [
     "Repeater vs bridge vs switch vs router",
     "Repeater: layer 1, regenerates signals. Bridge: layer 2, filters by MAC. Switch: fast bridge for shared LANs. Router: layer 3, routes by IP",
     "\"regenerates\" → repeater; \"MAC, filters, loops\" → bridge; \"higher bandwidth\" → switch; \"IP, best path\" → router"
    ],
    [
     "Gateway vs router",
     "Gateway translates protocols. Router routes by IP (older books call routers gateways)",
     "\"protocol translation\" → gateway"
    ],
    [
     "Transceiver vs network adapter card",
     "The transceiver is the function that encodes signals and converts them back. The adapter card is the example device",
     "\"encodes into electrical or light signals\" → transceiver"
    ],
    [
     "Bridge vs switch",
     "A switch is a high-speed bridge for shared LANs that need more bandwidth",
     "\"more bandwidth\" → switch"
    ],
    [
     "Spanning tree vs ARP vs BGP",
     "Spanning tree stops bridge loops. ARP maps IP to MAC. BGP is an inter-network routing protocol",
     "\"loops\" → spanning tree; \"IP to MAC\" → ARP"
    ],
    [
     "Fork vs multithread",
     "Forking starts a new process per request. Multithreading runs several threads inside one process",
     "\"new process\" vs \"threads\""
    ],
    [
     "DAS vs NAS vs SAN",
     "DAS: attached to one server. NAS: file sharing over TCP/IP. SAN: block-level over a dedicated network",
     "\"single server\" → DAS; \"NFS, CIFS, TCP/IP\" → NAS; \"block, Fibre Channel, dedicated\" → SAN"
    ],
    [
     "NAS vs SAN scalability",
     "NAS is scalable and works over long distances, but is slow. SAN is faster, but not easily scalable and limited to about 10 km",
     "\"faster, backup and integrity\" → SAN; \"scalable, shared\" → NAS"
    ],
    [
     "Magnetic vs semiconductor vs optical storage",
     "Magnetic: magnetised surface, sequential. Semiconductor: integrated circuits, DRAM and flash. Optical: pits read by laser",
     "\"magnetisation\", \"transistors\", \"laser and pits\""
    ],
    [
     "CD-ROM vs CD-R vs CD-RW",
     "CD-ROM: read-only, mass distribution. CD-R: write once. CD-RW: rewritable, slow write",
     "\"read only\" → CD-ROM; \"write once\" → CD-R; \"rewrite\" → CD-RW"
    ],
    [
     "Primary storage vs secondary vs off-line storage",
     "Primary: memory the CPU uses directly (DRAM). Secondary: disks and flash in devices. Off-line: tapes and discs kept apart",
     "\"dynamic RAM, CPU\" → primary"
    ],
    [
     "Cache vs main memory vs virtual memory",
     "Cache: small, fastest, near the CPU. Main memory: holds everything the program references. Virtual memory: uses disk pages to extend main memory",
     "\"small, fast, near CPU\" → cache; \"page fault\" → virtual memory"
    ],
    [
     "Cache hit vs cache miss vs page fault",
     "Hit: found in cache. Miss: fetched from slower memory, CPU stalls. Page fault: page not in main memory, CPU switches task",
     "\"found\" = hit; \"stall\" = miss; \"page not in memory\" = page fault"
    ],
    [
     "Temporal vs spatial locality",
     "Temporal: same item used again soon. Spatial: nearby items used soon",
     "\"same item again\" vs \"neighbouring address\""
    ],
    [
     "Operating system vs DBMS vs compiler vs DNS",
     "OS manages hardware and programs. DBMS manages data. DNS converts names. Compiler turns code into machine code",
     "\"processors, memory, devices\" → OS; \"database access\" → DBMS"
    ],
    [
     "Database vs DBMS",
     "Database: the stored data. DBMS: the software that manages and gives access to it",
     "\"stores data\" vs \"manages access\""
    ],
    [
     "Entity vs attribute vs relationship",
     "Entity: a thing (customer, order). Attribute: a detail of the thing (name, salary). Relationship: the link between entities",
     "\"object\" → entity; \"detail\" → attribute; \"link\" → relationship"
    ],
    [
     "Field vs record vs file",
     "Field: one detail. Record: one row of fields. File: a collection of records",
     "\"one detail\" / \"one row\" / \"collection\""
    ],
    [
     "Logical user view vs physical data view",
     "Logical: the subset each department sees. Physical: where and how data is stored",
     "\"department sees a subset\" vs \"storage media\""
    ],
    [
     "Schema vs subschema",
     "Schema: all the data elements and relationships for the whole organisation. Subschema: the part one application or department needs",
     "\"all services\" vs \"checking loan processing\""
    ],
    [
     "Shared field vs table",
     "A shared field (for example Deptno) links two tables. A table holds the rows of one kind of entity",
     "\"common field\" → the link between tables"
    ],
    [
     "SQL vs DBMS",
     "SQL is the language for queries. DBMS is the software that runs them",
     "\"query language\" → SQL"
    ],
    [
     "Drill-down vs consolidation",
     "Consolidation (roll-up) adds detail up into totals. Drill-down goes from totals back down to detail",
     "\"totals from sales offices\" → consolidation; \"detail behind a total\" → drill-down"
    ],
    [
     "Slicing and dicing vs drill-down",
     "Slicing and dicing looks at the cube from different sides. Drill-down goes into the detail under a total",
     "\"different viewpoints\", \"time axis\" → slicing and dicing"
    ],
    [
     "OLAP vs data mining",
     "OLAP answers questions you already framed, across dimensions. Data mining finds patterns you did not know to look for",
     "\"multidimensional cube\" → OLAP; \"patterns\" → data mining"
    ],
    [
     "Data acquisition vs data analysis vs metadata management",
     "Acquisition: capture, clean, transform, load. Analysis: query, report, mine. Metadata: describes the data",
     "verbs in the question: capture/clean/load; query/report; describe"
    ],
    [
     "Selection vs data transformation vs data mining",
     "Selection picks the relevant data. Transformation prepares it. Mining finds patterns",
     "the step the question describes"
    ],
    [
     "Classification vs clustering vs association",
     "Classification: predicts a known category. Clustering: groups without labels. Association: items bought together",
     "\"predict who will leave\" → classification; \"group similar customers\" → clustering; \"bought together\" → association"
    ],
    [
     "Cookie vs session data",
     "A cookie is stored in the browser and sent back with each request. Server-side session data stays on the server",
     "\"stored in the browser\" → cookie"
    ]
   ]
  },
  "facts": {
   "head": [
    "List",
    "Items",
    "Memory trick"
   ],
   "rows": [
    [
     "Goals of quality information services (three)",
     "Performance, scalability, availability and maintainability",
     "\"Fast, Full, Forever-up\" (speed, load, uptime)"
    ],
    [
     "Availability items",
     "Single points of failure, minimum configuration, self-repair, diagnostics and alerts, emergency procedures, MTTF, MTTR",
     "\"Find the weak spot, keep a minimum, repair itself, shout when hurt, have a plan\""
    ],
    [
     "Technology platform for e-business (nine parts)",
     "Software solutions, web languages, packaged solutions, server platforms, data infrastructure, networking infrastructure, communication protocols, network security, digital payment systems",
     "\"Software, Languages, Packages, Servers, Data, Network, Protocols, Security, Payments\""
    ],
    [
     "Web system tiers (four)",
     "Web client, web server, application server, database server",
     "\"Client asks, Web receives, App works, Database keeps\""
    ],
    [
     "Dynamic load balancing methods (three)",
     "DNS-based, dispatcher-based, server-based",
     "\"Names rotate, Router picks, Server redirects (slower)\""
    ],
    [
     "Web server performance metrics (two)",
     "Throughput (per second or Mbps), latency (time per request)",
     "\"Throughput = how many; Latency = how long\""
    ],
    [
     "Concurrency techniques (two)",
     "Forking, multithreading",
     "\"Fork = new process; Thread = new worker in the same process\""
    ],
    [
     "Proxy benefits (three)",
     "Traffic reduction, privacy and security (firewall), load balancing",
     "\"Save traffic, Guard, Share load\""
    ],
    [
     "Cache facts",
     "Traffic reduction, levels of cache, dedicated community proxy servers",
     "\"Copy close, store in levels\""
    ],
    [
     "OSI layers (seven)",
     "Application, presentation, session, transport, network, data link, physical",
     "\"All People Seem To Need Dates, Please\" (7 to 1: Application, Presentation, Session, Transport, Network, Data link, Physical)"
    ],
    [
     "TCP/IP layers (four)",
     "Application, transport, network, link",
     "\"A-T-N-L: Apps, Trips between hosts, Neighbourhood routing, Local link\""
    ],
    [
     "Encapsulation names",
     "Stream/message, segment (TCP), datagram (IP), frame (link)",
     "\"Segment, Datagram, Frame: the layer's own parcel\""
    ],
    [
     "IP address sizes",
     "IPv4 = 32 bits, IPv6 = 128 bits",
     "\"Four-byte IPv4, sixteen-byte IPv6\""
    ],
    [
     "IPv4 header fields named",
     "TTL, PID, checksum, source address, destination address, options and padding",
     "\"Time, Protocol, Check, Source, Destination, Options\""
    ],
    [
     "TCP features",
     "Connection-oriented, handshaking, source and destination port, sequence number, acknowledgement, sliding window",
     "\"Shake hands, count, confirm, slide\""
    ],
    [
     "UDP features",
     "Connectionless, no handshaking, ports only, no acknowledgement, no retransmission",
     "\"Postcard: ports only, no re-send\""
    ],
    [
     "Socket",
     "IP address plus port number",
     "\"Building plus flat number\""
    ],
    [
     "Networking devices by layer",
     "Repeater and transceiver (1), switch and bridge (2), router (3), bridge-router (3-4), gateway (5)",
     "\"Layer 1 repeats, Layer 2 filters MAC, Layer 3 routes IP, Gateway translates\""
    ],
    [
     "Bridge functions",
     "Layer 2 filtering and forwarding, MAC associations, loop prevention (spanning tree)",
     "\"Read MAC, forward, stop loops\""
    ],
    [
     "Repeater rules",
     "Extends LAN, regenerates frames, bit-budget delay limit, mostly dumb, some semi-intelligent",
     "\"Extend, Regenerate, Respect the delay budget\""
    ],
    [
     "Router rules",
     "Layer 3, forwards by IP, learns neighbours and costs, best path, scalable, skilled staff",
     "\"IP in, best path out, needs experts\""
    ],
    [
     "Server types (eight)",
     "Application, communications, database, fax, file, game, standalone, web",
     "\"A-C-D-F-F-G-S-W\" (Apps, Carriers, Data, Fax, Files, Games, Standalone emulator, Web)"
    ],
    [
     "Server selection factors (ten)",
     "Applications support (most important), cost, ease of administration, familiarity, homogeneity, interoperability, reliability (MTBF), scalability, security, vendor support (least)",
     "\"Apps first, Vendors last: Cost, Admin, Familiar, Same, Interop, Reliable, Scale, Secure\""
    ],
    [
     "Computer platforms (three)",
     "Client machines, blade servers, mainframes",
     "\"Clients carry, Blades rack, Mainframe equals thousands of blades\""
    ],
    [
     "Storage families (three)",
     "Magnetic, semiconductor, optical",
     "\"Magnet tape, Chip memory, Laser disc\""
    ],
    [
     "Optical families (three)",
     "Read-only (CD, CD-ROM, DVD), write-once (CD-R, DVD-R, DVD+R), rewritable (CD-RW, DVD-RW, DVD+RW, DVD-RAM)",
     "\"Read, Write once, Rewrite slowly\""
    ],
    [
     "Network storage models (three)",
     "DAS, NAS, SAN",
     "\"Direct to one server, Network files, Storage network blocks\""
    ],
    [
     "NAS protocols",
     "NFS, CIFS, HTTP",
     "\"Network file names\""
    ],
    [
     "Fibre Channel SAN limit",
     "About 10 km at best",
     "\"SAN: 10 km, then it stops\""
    ],
    [
     "Operating system functions (five)",
     "User interface, resource management, task management, file management, utilities and other functions",
     "\"Talk, Hardware, Tasks, Files, Extras\""
    ],
    [
     "Memory hierarchy (four levels)",
     "Registers, cache, main memory, disk",
     "\"Desk, drawer, shelf, godown\""
    ],
    [
     "Locality (two)",
     "Temporal (same item again), spatial (neighbour item)",
     "\"Time: same again. Space: next door\""
    ],
    [
     "Data hierarchy",
     "Field, record, file, database",
     "\"Field in a record, records in a file, files in a database\""
    ],
    [
     "Database types on the diagram (six)",
     "End-user, distributed (intranet), external (internet and online services), operational, data mart, data warehouse",
     "\"End, Distributed, External, Operational, Mart, Warehouse\""
    ],
    [
     "Data warehouse components (six)",
     "Data acquisition, data management, data analysis, metadata management, warehouse design, web information systems",
     "\"Acquire, Manage, Analyse, Describe, Design, Publish\""
    ],
    [
     "Data mining steps (five)",
     "Selection, data transformation, data warehouse, data mining, interpretation and evaluation",
     "\"Select, Transform, Warehouse, Mine, Interpret\""
    ],
    [
     "OLAP operations (three named)",
     "Consolidation (roll-up), drill-down, slicing and dicing",
     "\"Roll up to totals, drill into detail, slice and dice across\""
    ],
    [
     "OLAP dimensions named",
     "Customer groups, product line, service palette, sales region, time",
     "\"Who, What, Service, Where, When\""
    ],
    [
     "OLAP indicators named",
     "Customer value, turnover, profitability",
     "\"Value, Money in, Profit\""
    ]
   ],
   "extra": [
    {
     "title": "Quotes, authors and examples",
     "head": [
      "Item",
      "What the lecture says (paraphrased)",
      "Remember"
     ],
     "rows": [
      [
       "Menascé and Almeida (2000)",
       "Source of the three goals of quality information services (scaling for e-business)",
       "\"Performance, scalability, availability\""
      ],
      [
       "Kurose and Ross (2010)",
       "Standard networking textbook cited for the internet and protocol slides",
       "\"Top-down networking\""
      ],
      [
       "ARPANET",
       "The internet's ancestor, from 1960, funded by the US Department of Defense",
       "\"1960, DoD, packets\""
      ],
      [
       "ICANN",
       "Private non-profit that handles IP address allocation, protocol parameters, domain name system management and root server management",
       "\"Names and numbers, non-government\""
      ],
      [
       "ISO, IAB, IEEE",
       "International standards, internet technical advice, electrical and electronic engineering standards",
       "\"ISO = international standard, IAB = internet advice, IEEE = engineers\""
      ],
      [
       "Port 80",
       "Default port in the HTTP request-response model",
       "\"80 = web\""
      ],
      [
       "MIME",
       "Multipurpose Internet Mail Extensions: the format for responses (HTML text, JPEG or GIF images)",
       "\"Response is MIME\""
      ],
      [
       "Advisory Council study",
       "Source of the ranking of server selection factors",
       "\"Applications first\""
      ],
      [
       "I/O speedup example (slide 66)",
       "A 10 times faster CPU with a 10 per cent non-CPU share gives only about 5 times overall. A 100 times faster CPU with I/O unchanged gives about 10 times",
       "\"Slowest part sets the pace\""
      ],
      [
       "Dell, IBM, HP, Sun Microsystems, Intel, AMD",
       "Firms and chip makers named on the platforms slide",
       "\"Chips: Intel, AMD, IBM. Firms: IBM, HP, Dell, Sun\""
      ]
     ]
    }
   ]
  },
  "rules": [
   "\"Keeps working if one server fails\" or \"single points of failure\" → identify and remove single points of failure.",
   "\"Waves of demand\" → scalability (scale up with a bigger server, or scale out with more servers).",
   "\"Requests split across servers, least busy one picked by a special TCP router\" → dispatcher-based balancing.",
   "\"Handles transactions between the web server and the database\" → application server.",
   "\"Packets discarded in congestion, page still arrives\" → best-effort packet delivery.",
   "\"Domain names and IP numbers coordinated by a non-government non-profit\" → ICANN.",
   "\"Server remembers a returning user in a stateless protocol\" → cookies.",
   "\"Several applications on one host\" → port number. \"Increase LAN bandwidth while keeping bridge filtering\" → switch.",
   "\"Department sees its own subset of the same data\" → logical user views. \"Objects connected by associations\" → entities.",
   "\"Faster CPU, overall speedup far lower\" → I/O performance limits the CPU.",
   "\"Converts signals to and from electrical or light\" → transceiver. \"Regenerates frames\" → repeater.",
   "\"Predicts which current customers will leave\" → classification."
  ]
 },
 {
  "week": 6,
  "title": "Security for E-Business (Lectures 1 to 5)",
  "mix": {
   "head": [
    "These look alike",
    "How to tell them apart",
    "Tie-breaker word"
   ],
   "rows": [
    [
     "Authentication vs authorisation",
     "Authentication proves who you are. Authorisation decides what you may do",
     "\"proves who\" vs \"permission to approve\""
    ],
    [
     "Identification vs authentication",
     "Identification is the claim (username). Authentication is the proof (password, certificate)",
     "\"claims\" vs \"proves\""
    ],
    [
     "Confidentiality vs integrity",
     "Confidentiality hides content. Integrity stops changes (the content can be read but must not be altered)",
     "\"hidden from\" → confidentiality; \"modified\" or \"changed\" → integrity"
    ],
    [
     "Integrity vs non-repudiation",
     "Integrity: the data was not changed. Non-repudiation: the sender cannot deny sending",
     "\"altered in transit\" vs \"deny placing the order\""
    ],
    [
     "Availability vs integrity",
     "Availability: the system is up when needed. Integrity: the data is unchanged",
     "\"fails over, outage, still serving\" vs \"modified\""
    ],
    [
     "Auditing or traceability vs non-repudiation",
     "Auditing examines transactions after they happen. Non-repudiation stops the sender denying a message",
     "\"examining transactions\" vs \"cannot deny\""
    ],
    [
     "Active vs passive attack",
     "Active: modifies packets. Passive: only listens",
     "\"modifies in transit\" vs \"only listens\""
    ],
    [
     "Packet sniffing vs IP spoofing",
     "Sniffing reads frames passing an interface (passive). Spoofing changes the source address (forging)",
     "\"reads frames\" vs \"altered source address\""
    ],
    [
     "Denial of service vs sniffing",
     "DoS overloads the server with work. Sniffing reads traffic",
     "\"cannot handle the workload\" vs \"receives every frame\""
    ],
    [
     "Packet sniffer vs firewall",
     "A sniffer reads traffic. A firewall blocks unauthorised access",
     "\"receives every frame\" vs \"blocks\""
    ],
    [
     "SYN vs SYN-ACK vs ACK",
     "SYN starts the connection. SYN-ACK acknowledges and gives the server's number. ACK completes it",
     "the message that does two jobs at once is SYN-ACK"
    ],
    [
     "Symmetric vs asymmetric key",
     "Symmetric: one shared key, fast, key distribution problem. Asymmetric: public and private keys, slow",
     "\"same key\" vs \"public and private\""
    ],
    [
     "Symmetric key vs digital signature (for proof of sender)",
     "A shared symmetric key cannot prove who sent a message. A private-key signature can",
     "\"both parties hold the same key\" → not proof"
    ],
    [
     "Encryption vs hashing",
     "Encryption is reversible with a key. A hash is a one-way fingerprint of fixed size",
     "\"decrypt\" or \"recover the message\" → encryption; \"digest\" or \"fixed size\" → hash"
    ],
    [
     "Block vs stream cipher",
     "Block: fixed-size blocks (RC2, 8 bytes), slower. Stream: byte by byte, faster",
     "\"blocks\" vs \"each byte\""
    ],
    [
     "Hash value vs message digest vs signature",
     "Digest and hash value are the same output. A signature is the digest encrypted with a private key",
     "\"encrypted with the private key\" → signature"
    ],
    [
     "Masquerade vs content modification vs replay (timing modification)",
     "Masquerade: a message from a fraudulent source. Content modification: the content changed. Timing modification: a valid session is replayed",
     "\"fraudulent source\" / \"changed content\" / \"recorded session resent\""
    ],
    [
     "Sequence modification vs timing modification",
     "Sequence: inserting, deleting or reordering messages. Timing: replaying a valid session later",
     "\"reorder or delete\" vs \"replay later\""
    ],
    [
     "Cracker vs hacker",
     "A cracker breaks in without authorisation (black hat). A hacker is anyone who probes systems for weaknesses",
     "\"without authorisation\", \"steal\" → cracker"
    ],
    [
     "Intruder vs hacker",
     "An intruder is an unauthorised individual who tries to access the system from outside. A hacker is a general term",
     "\"tries to access from outside\" → intruder"
    ],
    [
     "Virus vs worm",
     "Virus: attaches itself to another object. Worm: independent, copies itself over the network",
     "\"attaches to another object\" → virus; \"independent program\" → worm"
    ],
    [
     "Trojan horse vs rootkit",
     "Trojan: a back door for remote control. Rootkit: hides deep in the operating system core",
     "\"back door, remote control\" → Trojan; \"hides from virus scanners in the OS core\" → rootkit"
    ],
    [
     "Adware vs spyware",
     "Adware: persistent pop-up advertising. Spyware: secret collection of personal information",
     "\"pop-ups\" → adware; \"collects personal information secretly\" → spyware"
    ],
    [
     "Malware vs virus",
     "Malware is the umbrella term for any malicious software. A virus is one kind",
     "\"any software written with malicious intent\" → malware"
    ],
    [
     "Social engineering vs phishing",
     "Social engineering is manipulation for information in general. Phishing is social engineering by fake official e-mail or messages",
     "\"fake e-mail from a bank\" → phishing"
    ],
    [
     "Vulnerability vs threat vs risk",
     "Vulnerability: a weakness. Threat: an event that may cause harm. Risk: the probability that a vulnerability causes harm",
     "\"weakness\" / \"event\" / \"probability\""
    ],
    [
     "Probe vs threat",
     "A probe gathers information about a system. A threat is any event that may cause harm",
     "\"gathers information\" → probe"
    ],
    [
     "Firewall: internal vs external",
     "Internal: on one machine. External: separate hardware protecting many machines",
     "\"on an individual machine\" vs \"protects multiple machines\""
    ],
    [
     "Symmetric algorithms vs asymmetric algorithms (examples)",
     "Symmetric: DES, TDES, IDEA, RC2, RC4, RC5. Asymmetric: RSA",
     "\"RSA\" → asymmetric"
    ],
    [
     "Ron Rivest vs Rivest-Shamir-Adleman",
     "Ron Rivest designed MD4 and MD5 (hash). RSA is the public key algorithm named after Rivest, Shamir and Adleman",
     "\"MD4, MD5\" → Rivest hash; \"RSA\" → public key"
    ],
    [
     "MD5 vs SHA-1",
     "Both are hash functions. MD5 is by Ron Rivest. SHA-1 is by the NSA",
     "developer named in the question"
    ],
    [
     "Key strength: 1024 vs 2048 vs 4096 bits",
     "1024 low, 2048 medium, 4096 high for asymmetric keys",
     "the size word: low, medium, high"
    ],
    [
     "Digital signature vs digital certificate",
     "Signature: proves the message came from the signer. Certificate: proves a public key belongs to an owner, signed by a CA",
     "\"message\" → signature; \"public key belongs to\" → certificate"
    ],
    [
     "Server certificate vs client certificate",
     "Server certificate identifies a web site. Client certificate identifies a user or client",
     "\"web site\" → server; \"user or client\" → client"
    ],
    [
     "Certificate issuance vs certificate validation vs certificate revocation",
     "Issuance binds the key to an owner. Validation checks it is still trusted and valid. Revocation cancels it",
     "\"binds\" / \"checks validity\" / \"cancels\""
    ],
    [
     "Certificate revocation list vs certificate",
     "A certificate proves identity. A revocation list shows cancelled certificates",
     "\"cancelled\" → revocation list"
    ],
    [
     "Public key cryptography (PKI function) vs asymmetric algorithm",
     "The PKI function covers generating, distributing, administering and controlling keys. The algorithm is the maths (RSA)",
     "\"generation, distribution, administration\" → PKI function"
    ],
    [
     "CA vs CCA",
     "A CA issues and signs certificates. The CCA is the root body in India that licenses CAs",
     "\"licenses the CAs\" → CCA"
    ],
    [
     "ICANN vs CCA",
     "ICANN coordinates internet names and numbers. CCA is India's root for certifying authorities",
     "\"domain names\" → ICANN; \"India's certifying authorities\" → CCA"
    ],
    [
     "SSL vs TLS",
     "SSL was developed by Netscape. TLS superseded it, with minor changes over SSL 3.0",
     "\"first developed by Netscape\" → SSL"
    ],
    [
     "TLS Handshake vs TLS Record",
     "Handshake agrees algorithms and exchanges secrets. Record encrypts, authenticates and compresses data",
     "\"negotiate\" / \"exchange secrets\" → Handshake; \"encrypt application data\" → Record"
    ],
    [
     "Client Hello vs Server Hello",
     "Client Hello: the client's options and random number. Server Hello: the server's choices and its certificate",
     "\"certificate\" in the message → Server Hello"
    ],
    [
     "Client finished vs server finished",
     "Client finished (27 bytes) follows the client key exchange. Server finished (27 bytes) confirms the server decrypted the premaster secret",
     "\"after the client key exchange\" vs \"after decrypting\""
    ],
    [
     "Premaster secret vs master secret vs session key",
     "Premaster secret: sent encrypted with the server's public key. Master (and bulk) key: derived from it and the random numbers. Session key: used during the session",
     "the stage in the question"
    ],
    [
     "Full handshake vs session reuse",
     "Full handshake exchanges the certificate and key. Reuse sends the old session ID and skips it when cached",
     "\"old session ID\" → reuse"
    ],
    [
     "Round trip time vs byte overhead vs processing overhead",
     "The three overheads of TLS. Round trips add delay, bytes add size, processing adds CPU time",
     "the kind of cost in the question"
    ],
    [
     "Client processing vs server processing (TLS)",
     "Client: verify the certificate, encrypt the master secret, derive keys. Server: decrypt the master secret with its private key, derive keys",
     "\"verify certificate\" → client; \"private key decryption\" → server"
    ],
    [
     "CSID vs UML sequence diagram",
     "A UML sequence diagram shows messages but no performance data. A CSID adds probabilities and message sizes",
     "\"probability and message size\" → CSID"
    ],
    [
     "Start/finish node vs internal node (CSID)",
     "Start and finish nodes are squares. Internal nodes are circles",
     "\"squares\" vs \"circles\""
    ],
    [
     "Throughput vs response time (server)",
     "Throughput: requests per second. Response time: time for one request",
     "\"per second\" vs \"time for one\""
    ],
    [
     "Service demand vs bottleneck",
     "Service demand is the time per request at one device. The bottleneck is the device with the highest service demand",
     "\"highest\" → bottleneck"
    ],
    [
     "Throughput with TLS on all pages vs part of site",
     "All pages: the server CPU is the bottleneck at about 19.3 requests per second. Part of site: about 31.43",
     "\"40 per cent insecure\" → part of site"
    ],
    [
     "Cryptographic accelerator vs cached session states",
     "Accelerator speeds up the handshake by 50 times for all sessions. Cached sessions skip most handshakes for 60 per cent of connections",
     "\"factor of 50\" → accelerator; \"cached\" → sessions"
    ],
    [
     "Disk bottleneck vs CPU bottleneck (example)",
     "Without TLS, or with an accelerator, the disk limits throughput to 100 requests per second. With TLS on every page, the server CPU is the limit",
     "the scenario named"
    ]
   ]
  },
  "facts": {
   "head": [
    "List",
    "Items",
    "Memory trick"
   ],
   "rows": [
    [
     "Security categories (six)",
     "Legitimate use (identification, authentication, authorisation), confidentiality, integrity, availability, non-repudiation, auditing or traceability",
     "\"Legit, Secret, Sealed, Up, Can't-deny, Trail\""
    ],
    [
     "Legitimate use (three)",
     "Identification, authentication, authorisation",
     "\"Who, Proof, Permission\""
    ],
    [
     "Attacker types (two)",
     "Active (modifies packets), passive (only listens)",
     "\"Active changes, Passive watches\""
    ],
    [
     "Attack types named (three)",
     "Sniffing, IP spoofing, denial of service",
     "\"Sniff = read, Spoof = fake address, Deny = overload\""
    ],
    [
     "TCP handshake (three steps)",
     "SYN; SYN-ACK; ACK (with data)",
     "\"Hi, Hi-got-it, Got-it-go\""
    ],
    [
     "Symmetric algorithms named",
     "DES, TDES, IDEA, RC2, RC4, RC5",
     "\"DES and his TDES IDEA of RC\""
    ],
    [
     "Asymmetric algorithm named",
     "RSA (Rivest, Shamir, Adleman), patented until 2000",
     "\"RSA = Rivest, Shamir, Adleman\""
    ],
    [
     "Key strength (asymmetric)",
     "1024 bits low, 2048 medium, 4096 high",
     "\"1024, 2048, 4096 = low, medium, high\""
    ],
    [
     "Symmetric strength",
     "256-bit keys give strong encryption",
     "\"256 is enough for one key\""
    ],
    [
     "Block cipher example",
     "RC2, 8-byte blocks",
     "\"Block = batch, slower\""
    ],
    [
     "Stream cipher",
     "Works on each byte, faster",
     "\"Stream = each byte, faster\""
    ],
    [
     "Hash function properties (three)",
     "Easy to compute, hard to reverse, very hard to find a second message with the same hash",
     "\"Easy to make, hard to reverse, hard to clone\""
    ],
    [
     "Hash misuses (four threats)",
     "Masquerade, content modification, sequence modification, timing modification",
     "\"Fake sender, Changed content, Shuffled order, Replayed session\""
    ],
    [
     "Hash applications (three groups)",
     "Public key uses (passwords, key management, signatures), integrity checking (virus scanning), authentication (secure web)",
     "\"Keys, Checks, Proves\""
    ],
    [
     "Hash algorithms named",
     "MD4, MD5 (Rivest 1990, 1994), SHA-0, SHA-1 (NSA 1993, 1995), RIPEMD-160 (1996), SHA-2 (2002), Whirlpool, Tiger, GOST-3411, SHA-3",
     "\"Rivest's MD in 90 and 94, NSA's SHA in 93 and 95\""
    ],
    [
     "SHA-2 sizes",
     "224, 256, 384, 512 (the slide prints 385)",
     "\"Two-two-four-five-twelve\""
    ],
    [
     "Malware family (six terms)",
     "Virus, worm, Trojan horse, rootkit, adware, spyware",
     "\"Virus attaches, Worm travels, Trojan opens a back door, Rootkit hides, Adware pops, Spyware spies\""
    ],
    [
     "People and access terms",
     "Cracker (black hat), hacker, intruder (attacker), probe, firewall",
     "\"Cracker breaks in, Hacker pokes, Intruder enters, Probe peeks, Firewall blocks\""
    ],
    [
     "Deception terms",
     "Social engineering, phishing",
     "\"Phishing is social engineering by fake e-mail\""
    ],
    [
     "Risk terms",
     "Vulnerability (weakness), threat (event), risk (probability), system compromise (disclosure)",
     "\"Weak, Event, Chance, Leaked\""
    ],
    [
     "Digital signature covers (three)",
     "Authentication, non-repudiation, data integrity",
     "\"A-N-I: Authentic, Not deniable, Intact\""
    ],
    [
     "Digital certificate parts",
     "Key information, owner (subject), issuer's signature; server or client type",
     "\"Key, Owner, Issuer's stamp\""
    ],
    [
     "PKI functions (four)",
     "Public key cryptography, certificate issuance, certificate validation, certificate revocation",
     "\"Keys, Issue, Validate, Revoke\""
    ],
    [
     "Server info fields (five named)",
     "Name, issuer CA, serial number, validity, server public key",
     "\"Name, Issuer, Serial, Valid, Key\""
    ],
    [
     "PKI in India",
     "CCA at the root; licensed CAs: Safescrypt, NIC, IDRBT, TCS, MtnlTrustline, iCertCA, GNFC, e-Mudhra CA",
     "\"CCA is the root; eight CAs under it\""
    ],
    [
     "TLS sub-protocols (two)",
     "Handshake protocol, record protocol",
     "\"Handshake agrees, Record protects\""
    ],
    [
     "Handshake decides (five)",
     "Public key algorithm and shared secret key; bulk cipher and session key; MAC algorithm; compression; server authenticates (client sometimes)",
     "\"Key, Cipher, MAC, Squeeze, Prove\""
    ],
    [
     "Record protocol parts (three)",
     "Encryption and decryption (DES, TDES, RC4), message authentication (MD5, SHA, SHA1), compression (LZS)",
     "\"Encrypt, Authenticate, Compress\""
    ],
    [
     "Client Hello fields (six)",
     "Random number (28 bytes), time (4 bytes), session ID (0 to 32 bytes), cipher suites (2 bytes), compression (1 byte), protocol version (1 byte)",
     "\"Random, Time, Session, Ciphers, Compress, Version\""
    ],
    [
     "Server Hello fields (five)",
     "X.509 certificate (750 bytes), random number (28 bytes), session ID (0 to 32 bytes), cipher suite (2 bytes), compression (1 byte)",
     "\"Certificate, Random, Session, Cipher, Compress\""
    ],
    [
     "Finished messages",
     "Client finished 27 bytes, server finished 27 bytes",
     "\"Both finish at 27\""
    ],
    [
     "TLS overheads (three)",
     "Round-trip times, byte overhead, processing time",
     "\"Time, Bytes, Brains\""
    ],
    [
     "Server service demand items (three)",
     "Handshake (decrypt master secret), encryption and MD generation, normal CPU time (0.002 s)",
     "\"Handshake, Crypto, Normal\""
    ],
    [
     "CSID node shapes",
     "Start and finish = squares, internal = circles",
     "\"Ends are squares, middles are circles\""
    ],
    [
     "Algorithm speeds (Mbps)",
     "RC4 140, DES 40, TDES 15; MD5 180, SHA 130, SHA1 130",
     "\"RC4 fastest, TDES slowest\""
    ],
    [
     "Throughput scenarios (five)",
     "No TLS (100), TLS on all (19.3), TLS on part (31.43), accelerator (100), cached sessions (43.67)",
     "\"Plain 100, All-secure 19, Part 31, Accelerator 100, Cached 43\""
    ]
   ],
   "extra": [
    {
     "title": "Quotes, authors and examples",
     "head": [
      "Item",
      "What the lecture says (paraphrased)",
      "Remember"
     ],
     "rows": [
      [
       "Netscape",
       "First developed SSL",
       "\"Netscape made SSL\""
      ],
      [
       "IETF",
       "Standardises TLS (the lecture cites RFC 2246)",
       "\"IETF standardises TLS\""
      ],
      [
       "Ron Rivest",
       "Designed MD4 and MD5 (and is one of the RSA authors)",
       "\"Rivest: MD4, MD5, RSA\""
      ],
      [
       "Adi Shamir and Leonard Adleman",
       "With Rivest, the RSA algorithm",
       "\"RSA trio\""
      ],
      [
       "NSA",
       "Designed SHA-0 and SHA-1",
       "\"NSA: SHA\""
      ],
      [
       "Lempel-Ziv-Stac (LZS)",
       "Compression used by the TLS record protocol, overhead negligible",
       "\"LZS compresses\""
      ],
      [
       "DES, RC4, TDES (speeds)",
       "Named in the record protocol and in the speed table",
       "\"DES, RC4, TDES\""
      ],
      [
       "Phishing example",
       "Fake official e-mail from a trusted entity asking for login details",
       "\"Fake bank e-mail\""
      ],
      [
       "Non-repudiation example",
       "Denying an order you have placed",
       "\"Deny an order\""
      ],
      [
       "Example of server authentication",
       "Buying a book from the right server, not an imposter",
       "\"Right shop, not imposter\""
      ],
      [
       "Example of client authentication",
       "Internet banking, communicating with the right client",
       "\"Right customer at the bank\""
      ],
      [
       "Example of integrity",
       "Modifying a book order or changing a delivery address",
       "\"Changed address\""
      ],
      [
       "Example of confidentiality",
       "Protecting credit card information during transmission",
       "\"Card number in transit\""
      ],
      [
       "Example of denial of service",
       "Partially opened TCP connections that overload the server",
       "\"Half-open connections\""
      ],
      [
       "Example of IP spoofing",
       "Altering source addresses in packet headers",
       "\"Fake return address\""
      ],
      [
       "Example of asymmetric slowness",
       "RSA is about 100 times slower than DES",
       "\"RSA is 100 times slower\""
      ],
      [
       "Example of hardware speed",
       "A hardware implementation of symmetric encryption is about 100 times faster than software",
       "\"Hardware 100 times faster\""
      ],
      [
       "Cryptographic accelerator",
       "A public key math processor that speeds up the handshake by a factor of 50 (lecture assumption)",
       "\"Accelerator = 50 times handshake\""
      ]
     ]
    }
   ]
  },
  "rules": [
   "\"Permission refused even though the login was correct\" → authorisation.",
   "\"Changed in transit\", \"altered address\" → integrity.",
   "\"Denies placing the order\", \"buyer signed it\" → non-repudiation.",
   "\"Keeps serving during a power failure at one site\" → availability.",
   "\"Examine transactions after they happened\" → auditing or traceability.",
   "\"Reads every frame passing the interface\" → packet sniffer. \"Forged source address\" → IP spoofing.",
   "\"Extra workload the server cannot handle\" → denial of service.",
   "\"Large volume of records securely between servers\" → RSA to exchange a session key, symmetric encryption for the records.",
   "\"Store only the hash of a password\" → the hash is hard to reverse.",
   "\"Fake e-mail from a trusted bank asking for credentials\" → phishing.",
   "\"Signed the message digest with the sender's private key\" → digital signature generation. \"Compare digests after decrypting with the public key\" → verification.",
   "\"Who signs the certificate\" → the Certifying Authority. \"Root of India's PKI\" → the CCA.",
   "\"Negotiate cipher suites and compression\" → Client Hello or Server Hello (handshake). \"Encrypt application data\" → record protocol.",
   "\"Throughput at the bottleneck\" → 1 divided by the service demand of the bottleneck device."
  ]
 },
 {
  "week": 7,
  "title": "Digital Payments, Interoperability, EDI and XML, Web Services, Cloud",
  "mix": {
   "head": [
    "These look alike",
    "How to tell them apart",
    "Tie-breaker word"
   ],
   "rows": [
    [
     "Credit card vs debit card vs charge card",
     "Credit: borrowed, limit set by credit history. Debit: money leaves your bank account now and goes to the seller's bank. Charge: no limit, full bill due at end of billing period.",
     "\"limit\" = credit; \"bank account\" = debit; \"no limit\" = charge"
    ],
    [
     "Closed loop vs open loop",
     "Closed: the issuer pays the merchant directly, two parties. Open: three or more parties, for example Visa or MasterCard.",
     "\"directly\" = closed; \"three or more\" = open"
    ],
    [
     "Authorization hold vs settlement",
     "Hold: money is checked and blocked, not moved. Settlement: the money actually moves to the merchant.",
     "\"verify, hold, reserve\" = authorization; \"transfer, final\" = settlement"
    ],
    [
     "Identifiable vs anonymous electronic money",
     "Identifiable: the bank gives the serial number, so the coin can be traced (CyberCash). Anonymous: the customer makes the serial, blinds it, and the bank signs it without seeing it (DigiCash).",
     "\"bank provides serial\" = identifiable; \"customer creates, blinded\" = anonymous"
    ],
    [
     "Online vs offline electronic money",
     "Online: validated live by the bank (CyberCash). Offline: not validated online, peer to peer (DigiCash).",
     "\"validated online\" = online; \"peer to peer, not validated\" = offline"
    ],
    [
     "The two digital-cash classifications",
     "They are independent questions. CyberCash is identifiable and online. DigiCash is anonymous and offline. Double spending risk comes from anonymous plus offline.",
     "\"who is it traced to?\" = identity; \"does the bank check it live?\" = timing"
    ],
    [
     "Server-side vs client-side e-wallet",
     "Server-side: data on a merchant's or wallet publisher's remote server. Client-side: data on the customer's own computer.",
     "\"remote server of merchant\" = server-side; \"his or her own computer\" = client-side"
    ],
    [
     "Electronic cheque vs digital cash vs e-wallet",
     "E-cheque: a paper cheque copy with checking-account data (CyberCash). Digital cash: stamped number-files held in a wallet (DigiCash). E-wallet: saved payment details for quick checkout.",
     "\"account\" = e-cheque; \"random number coins\" = digital cash; \"enter once, saved\" = e-wallet"
    ],
    [
     "Smart card vs payment card",
     "Smart card: chip on the card with money or ID loaded (Mondex, Visa Cash). Payment card: plastic card linked to a bank account or credit line.",
     "\"chip\", \"PIN\", \"loaded\" = smart card"
    ],
    [
     "Real-world system vs its internet twin",
     "Cash equivalents: DigiCash, Millicent. Cheques: CyberCash. Credit card payments: TTP and SET. Electronic funds transfer: SWIFT. Options often swap these.",
     "match the pair as listed; \"cheque\" and \"CyberCash\" go together"
    ],
    [
     "PayPal-type P2P vs bank web or mobile P2P",
     "Both move money between people. PayPal is a third party in the middle. The bank method uses the bank's own web or mobile interface.",
     "\"third party\" = PayPal; \"bank's own app\" = bank method"
    ],
    [
     "TLS vs SET vs payment gateway",
     "TLS: encrypts the link, both sides authenticate, but no guarantee after arrival. SET: a secure card protocol, not widely accepted. Payment gateway: trusted third party that the lecture recommends.",
     "\"encrypted link\" = TLS; \"not widely accepted\" = SET; \"trusted third party\" = gateway"
    ],
    [
     "Authenticity vs non-repudiation vs integrity vs confidentiality",
     "Authenticity: the sender is who they claim to be. Non-repudiation: the sender cannot deny it later. Integrity: content not changed. Confidentiality: others cannot read it.",
     "\"impersonate\" = authenticity; \"deny later\" = non-repudiation; \"altered\" = integrity; \"read, spy\" = confidentiality"
    ],
    [
     "Technological vs economic vs social vs regulatory aspects",
     "Technological: security. Economic: cost, reach, value movement, financial risk. Social: anonymity, ease of use, mobility of the person. Regulatory: government rules.",
     "\"fee, cost, risk\" = economic; \"people, privacy, easy\" = social; \"law, government\" = regulatory"
    ],
    [
     "Social mobility vs value mobility",
     "Social mobility: the user can pay on the move and across devices. Value mobility: money can be moved easily between parties.",
     "\"devices, on the move\" = social; \"money moves\" = economic"
    ],
    [
     "Data vs service vs process vs business dimensions",
     "Data: field names, formats, meaning. Service: separately built applications (ERP, CORBA, SOA). Process: order of steps. Business: policy, accounting, labour law, work methods.",
     "\"field name, format\" = data; \"applications, framework\" = service; \"order, trigger\" = process; \"policy, labour law\" = business"
    ],
    [
     "Data dimension vs content/data layer",
     "The same idea. The layer is the technical name for resolving meaning and structure.",
     "If the question says \"technical layer\", use the layer name"
    ],
    [
     "Communication layer vs content/data layer",
     "Communication: how messages travel and protocols are translated (TCP/IP, RPC, CORBA, REST). Content/data: what the document means (PO vs RFQ, price with or without tax).",
     "\"protocol, transport, messages\" = communication; \"meaning, document type\" = content/data"
    ],
    [
     "Collaboration vs interoperability",
     "Collaboration: strategic (goals, agreements). Interoperability: technical (systems exchanging data).",
     "\"strategic\" = collaboration; \"technical\" = interoperability"
    ],
    [
     "Intra-enterprise vs inter-enterprise workflow",
     "Intra: inside one company (SAP R/3, Baan, PeopleSoft). Inter: between independent companies, done with web services.",
     "\"inside one company\" = intra; \"independent organisations\" = inter"
    ],
    [
     "Dimension \"business\" vs layer \"process\"",
     "Business: culture, labour law, accounting rules, responsibilities. Process: order and timing of exchange steps.",
     "\"labour law, policy\" = business; \"sequence, triggered\" = process"
    ],
    [
     "Peer-to-peer EDI vs VAN",
     "Peer-to-peer: partners connect directly; suits large companies. VAN: third party receives, routes and keeps audit records.",
     "\"directly\" = peer-to-peer; \"third party, routes, audit\" = VAN"
    ],
    [
     "VAN vs EDIINT",
     "VAN: a network service provider in the middle. EDIINT: a set of protocols (AS1 to AS4) for EDI over the internet.",
     "\"provider, routes, audit\" = VAN; \"AS number, protocol\" = EDIINT"
    ],
    [
     "AS1 vs AS2 vs AS3 vs AS4",
     "AS1: XML over SMTP (e-mail). AS2: XML over HTTP or HTTPS (web). AS3: FTP (file transfer). AS4: web services.",
     "remember 1 = mail, 2 = HTTP, 3 = FTP, 4 = web services"
    ],
    [
     "X.12 vs EDIFACT vs AIAG vs AEB",
     "X.12: US and Canada. EDIFACT: Europe. AIAG: automotive. AEB: Asia EDIFACT Board (India is a member).",
     "region or industry word in the question"
    ],
    [
     "XML/EDIFACT vs EDIFACT vs other XML frameworks",
     "EDIFACT is an EDI standard. XML/EDIFACT lets XML systems use EDIFACT message types. eCO, cXML, BizTalk, RosettaNet and ebXML are XML frameworks of their own.",
     "\"XML systems use EDIFACT message types\" = XML/EDIFACT"
    ],
    [
     "XML wrapper vs XML parser",
     "Wrapper: sender adds the XML tags. Parser: receiver reads the XML.",
     "\"packs, wraps\" = wrapper; \"reads, receives\" = parser"
    ],
    [
     "Translation software vs software maintenance vs internal development",
     "Translation software: licence per CPU or site. Maintenance: a contract for updates and new transaction sets. Internal development: changing the company's own systems.",
     "\"per CPU\" = translation; \"updates, contract\" = maintenance; \"modify internal systems\" = internal development"
    ],
    [
     "Hardware vs specialty hardware vs networking",
     "Hardware: computers and their configuration. Specialty hardware: bar-code equipment, special printers. Networking: leased lines and VAN pricing.",
     "\"bar code, printers\" = specialty; \"phone lines, VAN fees\" = networking"
    ],
    [
     "Legal cost vs consulting cost",
     "Legal: contracts such as the EDI Trading Partner Agreement. Consulting: expert help with the plan and strategic objectives.",
     "\"agreement, lawyers\" = legal; \"expert planning, strategy\" = consulting"
    ],
    [
     "Training cost vs additional resource cost",
     "Training: courses for staff. Additional resource: hiring a specialist, for example a UNIX administrator.",
     "\"course, vendor training\" = training; \"hire a specialist\" = additional resource"
    ],
    [
     "SOAP vs REST",
     "SOAP: XML envelope, WSDL, RPC, heavier and slower, not readable. REST: URL path, HTTP, readable results, easy from JavaScript, much faster.",
     "\"envelope, WSDL, RPC\" = SOAP; \"URL path, JavaScript, fast\" = REST"
    ],
    [
     "WSDL vs UDDI vs SOAP vs REST",
     "WSDL: interface description. UDDI: directory of services. SOAP: message envelope. REST: architectural style.",
     "\"describes interface\" = WSDL; \"yellow pages\" = UDDI; \"envelope\" = SOAP; \"URL style\" = REST"
    ],
    [
     "Human-readable output vs machine-to-machine interoperability",
     "A web service is about software calling software. Readable output is a side effect for humans and is not the point of the definition.",
     "\"machine-to-machine\" = web service; \"human-readable only\" = a trap"
    ],
    [
     "Orchestration vs choreography",
     "Orchestration: one central composite service invokes and collects replies. Choreography: no centre; services send and receive with each other.",
     "\"central, conductor, invokes\" = orchestration; \"no central, peers\" = choreography"
    ],
    [
     "Five cycles vs two processes",
     "CSInformation handles pre-consignment (before the stock arrives). InvoiceInformation handles post-consignment (after the stock is used).",
     "\"before delivery\" = CSInformation; \"invoice, after\" = InvoiceInformation"
    ],
    [
     "IaaS vs PaaS vs SaaS",
     "IaaS: rent servers, storage and network; you run your own OS and apps. PaaS: build, test and host your own apps on a ready platform. SaaS: use finished software through a browser.",
     "\"rent servers\" = IaaS; \"develop and test apps\" = PaaS; \"ready software, browser, subscription\" = SaaS"
    ],
    [
     "Private vs community vs public vs hybrid cloud",
     "Private: one organisation. Community: several organisations with shared concerns. Public: anyone, mega-scale. Hybrid: two or more clouds combined.",
     "\"single organisation\" = private; \"shared concerns\" = community; \"general public\" = public; \"two or more clouds\" = hybrid"
    ],
    [
     "Service model vs deployment model",
     "Service model answers \"what do I get?\" (IaaS, PaaS, SaaS). Deployment model answers \"who shares it and where?\" (private, community, public, hybrid). Some options mix the two; that is a trap.",
     "check if the option names a service model or a deployment model"
    ],
    [
     "Resource pooling vs rapid elasticity vs measured service",
     "Pooling: many clients share the resources; location independence. Elasticity: scale up or down quickly. Measured: metering to control and optimise.",
     "\"shared, location\" = pooling; \"scale quickly\" = elasticity; \"metered, optimise\" = measured"
    ],
    [
     "Remotely hosted vs ubiquitous vs commodified",
     "Remotely hosted: data or services on remote infrastructure. Ubiquitous: available from anywhere. Commodified: pay for use, like a utility.",
     "\"off-site\" = remotely hosted; \"anywhere\" = ubiquitous; \"utility, pay what you use\" = commodified"
    ],
    [
     "Cloud dependence vs security vs policy concerns",
     "Dependence: monopoly and loss of flexibility. Security: how safe outsourced data is, who owns it. Policy: which country's law, server down, locked out.",
     "\"monopolise, mainframe\" = dependence; \"safe, owner\" = security; \"abroad, server down, locked out\" = policy"
    ],
    [
     "Cloud advantages vs disadvantages",
     "Advantages: cheap PCs, cheaper software, updates, storage, access from anywhere. Disadvantages: needs internet, slow on low speed, limited features, data loss, HPC limits.",
     "the question's wording tells which side you are on"
    ],
    [
     "XML vs traditional EDI: readability and storage",
     "XML is intuitive and easy to read, but verbose, and its storage needs grow. EDI is cryptic, but once understood it is quick to implement and needs minimal storage.",
     "\"readable, verbose, storage grows\" = XML; \"cryptic, minimal storage\" = EDI"
    ],
    [
     "XML vs traditional EDI: age and reach",
     "XML is new technology, internet based and easy to implement, but has many complex standards. EDI is time-tested, established, with a large existing user base and low business risk.",
     "\"new, internet\" = XML; \"time-tested, established, larger user base\" = EDI"
    ],
    [
     "XML vs traditional EDI: cost",
     "XML is cheap to deploy over the internet, but tools and developers still cost money and bandwidth can be costly. EDI is traditionally expensive, though tool costs are falling and it uses less bandwidth.",
     "\"cheap over the internet\" = XML; \"traditionally expensive\" = EDI"
    ],
    [
     "XML vs traditional EDI: who uses it",
     "XML: new economy companies, high business risk. EDI: established companies (Fortune 500) and governments, status quo, low business risk.",
     "\"new economy\" = XML; \"Fortune 500, governments\" = EDI"
    ],
    [
     "Peer-to-peer payment vs peer-to-peer EDI",
     "Payment: one person pays another person's account (PayPal or a bank app). EDI: two trading companies connect directly to swap business documents.",
     "\"people, money\" = payment; \"companies, documents, modem\" = EDI"
    ]
   ]
  },
  "facts": {
   "head": [
    "Term",
    "Definition on the slide",
    "Source named on the slide"
   ],
   "rows": [
    [
     "Payment system",
     "\"a mechanism that facilitates transfer of value between a payer and a beneficiary by which the payer discharges the payment obligations to the beneficiary\"",
     "RBI FAQ"
    ],
    [
     "Electronic payment assessment",
     "four aspects: technological, economic, social, regulatory",
     "IEEE (Institute of Electrical and Electronics Engineers) paper (ieeexplore)"
    ],
    [
     "Web service (Wikipedia)",
     "\"a method of communication between two electronic devices over the Web\"",
     "Wikipedia"
    ],
    [
     "Web service (W3C)",
     "\"a software system designed to support interoperable machine-to-machine interaction over a network\"",
     "W3C"
    ],
    [
     "EDI",
     "\"exchange of electronic data between companies using precisely defined transactions\"",
     "Lecture slide 56"
    ],
    [
     "XML",
     "\"a meta-markup language that provides a format for describing structured data\"",
     "Lecture slide 71"
    ],
    [
     "Cloud computing",
     "\"the delivery of computing as a service rather than a product, whereby shared computing resources, software, and information are provided to computers and other devices over a network\"",
     "Lecture slide 103"
    ],
    [
     "IaaS",
     "\"users access to computing resources such as servers, storage, and networking\"",
     "Lecture slide 107"
    ],
    [
     "SaaS",
     "\"provides users with access to a vendor's cloud-based software\"",
     "Lecture slide 112"
    ],
    [
     "Interoperability of service",
     "\"identifying, composing and operating together various applications that are designed and implemented independently\"",
     "Lecture slide 33"
    ],
    [
     "Business interoperability",
     "\"identifies the fundamental artifacts related to business issues\"",
     "Lecture slide 35"
    ],
    [
     "Process interoperability",
     "\"linking different process descriptions to form collaborative processes\"",
     "Lecture slide 34"
    ],
    [
     "Semantic difference",
     "\"different interpretations of the same concept\" (example: \"price\" with or without tax)",
     "Lecture slide 54"
    ],
    [
     "SWIFT",
     "Society for Worldwide Interbank Financial Telecommunication",
     "Lecture slide 26 (FFIEC e-banking book)"
    ]
   ],
   "extra": [
    {
     "title": "Numbers and lists, with memory tricks",
     "head": [
      "List or number",
      "Items",
      "Memory trick"
     ],
     "rows": [
      [
       "Parts of a payment system (4)",
       "instruments, rules/regulations/procedures, institutions, legal systems",
       "Cricket: the bat and ball, the laws of the game, the board and umpires, the courts."
      ],
      [
       "Assessment aspects (4)",
       "technological, economic, social, regulatory",
       "\"Tiny Elephants Sleep Rough\" = T, E, S, R"
      ],
      [
       "Technological factors (4)",
       "authenticity, non-repudiation, integrity, confidentiality",
       "A signed, sealed letter: signed (authentic), cannot be denied, not opened or changed, private."
      ],
      [
       "Economic factors (4)",
       "cost of transactions, user reach, value mobility, financial risk",
       "\"COST, REACH, VALUE, RISK\": the four things a shop owner counts."
      ],
      [
       "Social factors (3)",
       "anonymity, user friendliness, mobility",
       "\"A, U, M\": Anonymous, Usable, Mobile."
      ],
      [
       "Payment cards (3)",
       "credit, debit, charge",
       "Credit = borrowed, limit. Debit = straight from the bank now. Charge = clear at month end."
      ],
      [
       "Payment card pros and cons (2 and 1)",
       "Pros: worldwide acceptance; built-in security for merchants. Con: merchants pay per-transaction fees and monthly processing fees.",
       "Two pros (world, security), one cost (fees to the merchant)."
      ],
      [
       "Card loop types (2)",
       "closed (two parties), open (three or more)",
       "Closed = two. Open = three or more."
      ],
      [
       "Card processing steps (3)",
       "authenticate, check and hold, settle",
       "Hotel check-in: ID check, room block, checkout bill."
      ],
      [
       "E-payment methods (6)",
       "payment cards, peer-to-peer, e-wallets, digital cash, smart cards, B2B",
       "\"Cards, Peer, Wallet, Digital cash, Smart card, B2B\": first letters C, P, W, D, S, B."
      ],
      [
       "Digital cash labels (2 pairs)",
       "identifiable or anonymous; online or offline",
       "Who is it traced to? Does the bank check it live?"
      ],
      [
       "Wallet locations (2)",
       "server-side, client-side",
       "Server = the shop's locker. Client = your own pocket."
      ],
      [
       "Real-world and internet pairs (4)",
       "cash to DigiCash and Millicent; cheque to CyberCash; credit card to TTP and SET; transfer to SWIFT",
       "\"Cyber cheque\" (cheque to CyberCash). \"Swift transfer\" (transfer to SWIFT). \"Secure card\" (SET)."
      ],
      [
       "Interoperability dimensions (4)",
       "data, service, process, business",
       "\"Don't Stop Pushing Buttons\" = D, S, P, B"
      ],
      [
       "B2B technical layers (3)",
       "communication, content/data, process",
       "The 3 Cs: Carrier (communication), Contents (content/data), Calendar (process)."
      ],
      [
       "Communication sub-levels (2)",
       "network-protocol, object and component middleware",
       "Network = the road. Middleware = the translator at the door."
      ],
      [
       "Middleware technologies (4)",
       "RPC, RMI, EJB, CORBA",
       "RPC = call a function. RMI = Java to Java. EJB = Java business parts on a server. CORBA = any language, through a broker."
      ],
      [
       "Basic EDI steps (5)",
       "prepare, outbound translation, communication, inbound translation, processing",
       "P-O-C-I-P: \"Pizza Outlet Calls In Person.\""
      ],
      [
       "EDI benefits (6)",
       "cost saving, speed, accuracy, security, system integration, just-in-time support",
       "A shop that is cheap, fast, accurate, safe, well connected, and stocks just in time."
      ],
      [
       "EDI standards (4)",
       "AIAG (automotive), X.12 (US and Canada), EDIFACT (Europe), AEB (Asia)",
       "A = automotive. X = North America (the X of X.12). E = Europe. A-E-B = Asia's board."
      ],
      [
       "EDIINT protocols (4)",
       "AS1, AS2, AS3, AS4",
       "Number = transport: 1 = mail, 2 = HTTP, 3 = FTP (file), 4 = web services."
      ],
      [
       "EDI implementation costs (10)",
       "translation software, software maintenance, internal software development, hardware, specialty hardware, training, additional resources, networking, legal, consulting",
       "A new office: software (3), machines (2), people (3), phones and lawyers (2)."
      ],
      [
       "XML-based frameworks (6)",
       "eCO, cXML, BizTalk, RosettaNet, ebXML, XML/EDIFACT",
       "Six names: five XML business frameworks plus XML/EDIFACT (EDIFACT inside XML)."
      ],
      [
       "Web service terms (4)",
       "SOAP, WSDL, UDDI, REST",
       "S-W-U-R: Send a letter (SOAP), Win the menu (WSDL), Use the directory (UDDI), Reach by URL (REST)."
      ],
      [
       "VMI processes (2)",
       "CSInformation (pre-consignment), InvoiceInformation (post-consignment)",
       "CS = consignment stock before delivery. Invoice = the bill after use."
      ],
      [
       "Cloud characteristics (6)",
       "remotely hosted, ubiquitous, commodified; resource pooling, rapid elasticity, measured service",
       "Three \"where and what\" (remote, everywhere, utility) and three \"how it runs\" (pooled, elastic, metered)."
      ],
      [
       "Cloud service models (3)",
       "IaaS, PaaS, SaaS",
       "Rent an empty flat (IaaS). Rent a furnished co-working desk (PaaS). Stay in a hotel (SaaS)."
      ],
      [
       "Cloud deployment models (4)",
       "private, community, public, hybrid",
       "Private = my house. Community = housing society. Public = public bus or hotel. Hybrid = home kitchen plus restaurant kitchen."
      ],
      [
       "Cloud advantages (11)",
       "lower computer costs, improved performance, reduced software costs, instant updates, document format compatibility, unlimited storage, data reliability, universal document access, latest version, group collaboration, device independence",
       "Cheap PC, cheap software, always up to date, huge storage, safe data, any device."
      ],
      [
       "Cloud disadvantages (8 headings)",
       "constant internet needed, low-speed connections, limited features, can be slow, not secure, data can be lost, HPC problems, protocols and APIs differ",
       "\"Net, speed, features, slow, secure, lost, HPC, APIs.\""
      ],
      [
       "Cloud concerns (3 groups)",
       "dependence and monopoly; security and ownership; policy and access",
       "Who controls me? Is it safe and mine? Which law and what if it goes down?"
      ]
     ]
    },
    {
     "title": "Example companies and case studies from the slides",
     "head": [
      "Name",
      "Where on the slides",
      "What it illustrates"
     ],
     "rows": [
      [
       "DigiCash",
       "Slides 7, 20, 21, 22",
       "Anonymous, offline electronic money. The double-spending case."
      ],
      [
       "CyberCash",
       "Slides 7, 19, 21, 22",
       "Electronic cheque. Identifiable, online electronic money."
      ],
      [
       "Millicent",
       "Slide 7",
       "Internet cash-equivalent payment system."
      ],
      [
       "Mondex and Visa Cash",
       "Slides 20, 25",
       "Smart-card digital cash."
      ],
      [
       "GemPlus and MasterCard",
       "Slide 25",
       "Leading smart-card suppliers."
      ],
      [
       "PayPal",
       "Slide 18",
       "Trusted-third-party peer-to-peer payment."
      ],
      [
       "SWIFT network",
       "Slides 7, 26",
       "Electronic funds transfer and B2B payments."
      ],
      [
       "Visa and MasterCard",
       "Slides 12, 15",
       "Open loop systems; card networks in the settlement example."
      ],
      [
       "SET protocol",
       "Slides 7, 16",
       "Secure card protocol, \"not widely accepted\"."
      ],
      [
       "Payment gateway",
       "Slide 16",
       "The trusted-third-party answer to the TLS gap."
      ],
      [
       "American Express and Discover",
       "Slides 14, 15",
       "Card networks in the authorisation and settlement example."
      ],
      [
       "State-government card payment example",
       "Slides 14, 15",
       "Shows the authorisation process and the settlement process step by step."
      ],
      [
       "Automotive modem pool",
       "Slide 61",
       "An automotive manufacturer with hundreds of suppliers dialling in (peer-to-peer)."
      ],
      [
       "ANSI X12 850 and EDIFACT ORDERS",
       "Slide 59",
       "The same paper purchase order written in X12 and in EDIFACT."
      ],
      [
       "AIAG, X.12, EDIFACT, AEB",
       "Slide 60",
       "The EDI standards by region and industry."
      ],
      [
       "SAP R/3, Oracle E-Business Suite",
       "Slide 42",
       "Two ERP packages that clash in a VMI integration."
      ],
      [
       "Baan, PeopleSoft",
       "Slide 83",
       "ERP systems used for intra-enterprise workflow."
      ],
      [
       "VMI supplier and retailer",
       "Slides 36 to 44, 90 to 99",
       "The worked example for all four interoperability dimensions and for composite web services."
      ],
      [
       "IRCTC ticket service",
       "Slide 85",
       "Web service with bookTicket() and cancelTicket(), used by travel sites."
      ],
      [
       "makemytrip.com and cleartrip.com",
       "Slide 85",
       "Two dealer sites that call the same web service."
      ],
      [
       "Struts and .NET/Ruby",
       "Slide 85",
       "Platforms the dealer sites run on. The pairing is not clear from the slide text."
      ],
      [
       "MySQL and Java EE; MS SQL and .NET",
       "Slides 95, 96",
       "Cross-platform data flow between two firms, with XML in the middle."
      ],
      [
       "Oracle and DB2",
       "Slide 72",
       "The databases on each side of the XML wrapper example."
      ],
      [
       "Salesforce CRM and LotusLive",
       "Slide 114",
       "SaaS examples."
      ],
      [
       "Google App Engine and Windows Azure",
       "Slide 114",
       "PaaS examples."
      ],
      [
       "Amazon Web Services and Rackspace Hosting",
       "Slide 114",
       "IaaS examples."
      ],
      [
       "Google Docs",
       "Slide 120",
       "Reduced software cost example."
      ],
      [
       "Google and IBM",
       "Slide 117",
       "Named as possible monopolies in the cloud concern."
      ],
      [
       "Amazon's own database and workflow system",
       "Slide 129",
       "Cloud example where normal applications must be adapted (not SQL-92)."
      ]
     ]
    }
   ]
  },
  "rules": [
   "\"Verify funds, place a hold, reserve the credit line\" → authorization hold (not settlement, not statement).",
   "\"Money validated online, double spending, token verified by the issuing bank\" → online electronic money and double spending.",
   "\"Field name differs, database format, stock_level vs currentStockLevel\" → data interoperability.",
   "\"Order of exchange steps, triggered at the right point, sequence\" → process interoperability.",
   "\"Work methods, accounting rules, labour law, responsibilities, policies\" → business interoperability.",
   "\"Messages between partners, protocols, CORBA replaced by REST, TCP/IP\" → communication level.",
   "\"Price with or without tax, document is a purchase order or an RFQ\" → content/data level.",
   "\"One central composite service calls each service and collects replies\" → orchestration. \"No central controller, services exchange messages\" → choreography.",
   "\"Third-party network routes and keeps audit records\" → VAN. \"Large companies connect directly\" → peer-to-peer.",
   "\"EDI over e-mail\" → AS1. \"EDI over HTTP\" → AS2. \"EDI files by FTP\" → AS3. \"EDI through web services\" → AS4.",
   "\"Readable results, URL path, easy from JavaScript\" → REST. \"Envelope, WSDL, RPC\" → SOAP.",
   "\"Develop and test apps without managing servers\" → PaaS. \"Ready software in a browser, subscription\" → SaaS. \"Rent servers, storage and networks\" → IaaS.",
   "\"Shared by organisations with shared concerns\" → community. \"Mix of two or more clouds\" → hybrid. \"Single organisation\" → private. \"General public, mega-scale\" → public.",
   "\"Anonymous, customer-created serial, blinded, signed by bank\" → anonymous e-money (DigiCash). \"Bank-issued serial, traceable\" → identifiable (CyberCash). ---"
  ]
 },
 {
  "week": 8,
  "title": "RFID, GPS and GIS, Vehicle Routing, Sensors and IoT, Big Data",
  "mix": {
   "head": [
    "These look alike",
    "How to tell them apart",
    "Tie-breaker word"
   ],
   "rows": [
    [
     "Bar code vs RFID",
     "Bar code needs line of sight and identifies the product group. RFID reads through some materials at many angles and identifies the single item.",
     "\"line of sight, category\" = bar code; \"unique item, through materials\" = RFID"
    ],
    [
     "Read-only vs WORM vs read-write tags",
     "Read-only: written at manufacture, never changed. WORM: written once later, then read many times. Read-write: rewritten many times.",
     "\"never changed\" = read-only; \"once, then read many\" = WORM; \"rewritten\" = read-write"
    ],
    [
     "Active vs semi-active vs passive tags",
     "Active: own battery, highest range, most expensive. Semi-active: battery but uses the reader's field, medium range. Passive: no battery, lowest range.",
     "\"own battery and highest range\" = active; \"no battery\" = passive"
    ],
    [
     "Fixed reader vs handheld reader",
     "Fixed: permanent (dock door). Handheld: carried by a worker (stock count in aisles).",
     "\"permanent\" = fixed; \"carried\" = handheld"
    ],
    [
     "Single-frequency vs multi-frequency readers",
     "Single works on one band. Multi works across more than one band.",
     "\"more than one band\" = multi"
    ],
    [
     "Read-only tag vs passive tag",
     "Read-only describes memory (cannot be rewritten). Passive describes power (no battery). A tag can be passive and read-write.",
     "\"memory\" = read-only class; \"battery\" = passive class"
    ],
    [
     "RFID reader vs RFID middleware vs RFID tag",
     "Tag: holds the identifier. Reader: reads it on request. Middleware: processes the data and updates the database or ERP.",
     "\"holds the code\" = tag; \"reads on request\" = reader; \"processes and updates\" = middleware"
    ],
    [
     "EPC middleware (Savant) vs discovery services (ONS) vs EPC information services (PML)",
     "Middleware manages readers and filters data. ONS maps an EPC to an address. Information services hold the full product details.",
     "\"manages readers, filters\" = middleware; \"address, resolves\" = ONS; \"details\" = information services"
    ],
    [
     "EPC vs UPC",
     "EPC is 96 bits and identifies each individual item. UPC identifies a product type. EPC extends UPC.",
     "\"individual item\" = EPC; \"product type\" = UPC"
    ],
    [
     "EPC segments",
     "Header (8 bits, version), manufacturer (28 bits, company), product (24 bits, product type), serial (36 bits, single item).",
     "\"single item\" = serial; \"company\" = manufacturer; \"product type\" = product"
    ],
    [
     "Discovery services vs EPC information services",
     "Discovery services resolve references (where to find it). Information services store the detail.",
     "\"where\" = discovery; \"what detail\" = information services"
    ],
    [
     "RFID vs GPS for tracking",
     "RFID works only inside antenna coverage. GPS works anywhere the satellites are visible.",
     "\"inside coverage\" = RFID; \"outside coverage, on the road\" = GPS"
    ],
    [
     "GPS vs GIS",
     "GPS gives a location. GIS combines location with stored spatial and attribute data to analyse and decide.",
     "\"location alone\" = GPS; \"data and decisions\" = GIS"
    ],
    [
     "GPS segments",
     "Space: 28 satellites. User: receivers in hand or car. Control: five ground stations.",
     "\"28\" = space; \"receiver\" = user; \"five ground stations\" = control"
    ],
    [
     "Clustering vs tour",
     "Clustering groups customers into routes. Tour is the order of stops on one route.",
     "\"groups customers\" = clustering; \"order of stops\" = tour"
    ],
    [
     "Route vs tour",
     "Route: all deliveries by one vehicle. Tour: the sequence of those deliveries.",
     "\"total deliveries\" = route; \"sequence\" = tour"
    ],
    [
     "CVRP vs VRPTW vs CVRPTW",
     "CVRP: capacity limit. VRPTW: time window per customer. CVRPTW: both.",
     "\"capacity\" = CVRP; \"time slot\" = VRPTW; \"both\" = CVRPTW"
    ],
    [
     "MDVRP vs VRPSF vs PVRP vs SDVRP",
     "MDVRP: several depots, each stop to one depot. VRPSF: remote restocking facilities on the route. PVRP: service over M days. SDVRP: one customer served by more than one vehicle.",
     "\"several depots\" = MDVRP; \"remote restock\" = VRPSF; \"over days\" = PVRP; \"split demand\" = SDVRP"
    ],
    [
     "SDVRP vs CVRP",
     "CVRP forbids a route from exceeding capacity and visits each customer once. SDVRP lets one customer be shared between vehicles.",
     "\"more than one vehicle per customer\" = SDVRP"
    ],
    [
     "Static VRP vs dynamic VRP",
     "Static: all information known and unchanging. Dynamic: information arrives or changes after routes are built; needs real-time algorithms.",
     "\"known beforehand and unchanged\" = static; \"new requests after routes\" = dynamic"
    ],
    [
     "Advance request customer vs immediate request customer",
     "Advance: booked before planning (static). Immediate: arrives during execution (dynamic).",
     "\"booked in advance\" vs \"short notice\""
    ],
    [
     "Sensor vs sensor node vs sensor network vs IoT",
     "Sensor: turns a physical phenomenon into a signal. Node: sensor plus processor, memory, transceiver, power. Network: many nodes close to the phenomenon. IoT: all connected physical objects.",
     "\"one device\" = sensor; \"a unit with processor and radio\" = node; \"many nodes\" = network; \"everyday objects connected\" = IoT"
    ],
    [
     "Sensor vs actuator",
     "Sensor: physical to electrical signal. Actuator: electrical signal to physical action.",
     "\"physical to signal\" = sensor"
    ],
    [
     "Sensor node component vs central data warehouse",
     "Sensor node components: sensors, processor, memory, transceiver, power supply. A central data warehouse is not part of a node.",
     "\"on the node\" = component; \"central store\" = not a component"
    ],
    [
     "Four IoT layers",
     "Sensing and identification (sees things); network construction (carries data); information processing (stores and computes); integrated application (uses the result).",
     "\"data centre, data mining\" = processing; \"WWAN, WLAN\" = network; \"smart grid, smart transport\" = application"
    ],
    [
     "Tracking vs tracing",
     "Tracking: current and future position. Tracing: reconstruct the past path.",
     "\"now and next\" = tracking; \"history\" = tracing"
    ],
    [
     "Traceability vs tracking",
     "Traceability is the wider ability to show history, distribution, location and application, with sustainability claims. Tracking is the live position.",
     "\"history and claims\" = traceability; \"live position\" = tracking"
    ],
    [
     "Four traceability needs",
     "Values and efficiencies (money, risk, supply). Stakeholder pressure (customer and NGO demands). Regulation (law). Global alignment (standard worldwide).",
     "\"risk, supply, efficiency\" = values; \"customers ask\" = stakeholder; \"law\" = regulation; \"worldwide standard\" = alignment"
    ],
    [
     "Physical vs mechanical vs biochemical vs microbiological changes",
     "Physical: temperature and humidity (freezing, evaporation). Mechanical: squashing, vibration, shock, tilt. Biochemical: ripening, enzymes, gases (ethylene, CO2, oxygen). Microbiological: molds, yeast, bacteria, H2S.",
     "\"freezing, drying\" = physical; \"shaking, bumping, tilting\" = mechanical; \"ripening gas\" = biochemical; \"mould, H2S\" = microbiological"
    ],
    [
     "Vibration vs shock vs tilt",
     "Vibration: continuous shaking over time. Shock: high-force sudden impact. Tilt: pallets or cargo leaning.",
     "\"continuous\" = vibration; \"sudden, high force\" = shock; \"leaning\" = tilt"
    ],
    [
     "Ethylene vs hydrogen sulfide vs carbon dioxide",
     "Ethylene: released by fruit ripening and spreads to other goods. H2S: produced by favourable microbial conditions. CO2: from respiration and allelopathy, sensed by infrared absorption.",
     "\"ripening spreads\" = ethylene; \"favourable microbial\" = H2S; \"refrigerated container CO2\" = infrared absorption"
    ],
    [
     "Temperature vs humidity for produce",
     "Temperature: stops the metabolic process (freezing point). Humidity: stops drying out (keep 85 to 95 percent).",
     "\"ice\" = temperature; \"water loss, drying\" = humidity"
    ],
    [
     "Electrochemical vs catalytic combustion vs infrared absorption",
     "Electrochemical: oxygen and H2S. Catalytic combustion: ethylene. Infrared absorption: CO2.",
     "match the gas to its mechanism"
    ],
    [
     "Location sensing options",
     "GPS: satellite. Cellular: GSM/3G. WiFi, RFID or WSN: short range. UWB: ultra wide band.",
     "\"satellites\" = GPS; \"short range\" = WiFi/RFID/WSN"
    ],
    [
     "Descriptive vs predictive vs prescriptive",
     "Descriptive: what happened. Predictive: what will happen and why. Prescriptive: what to do and best outcome.",
     "\"history, dashboard\" = descriptive; \"forecast, data mining\" = predictive; \"optimise, simulate\" = prescriptive"
    ],
    [
     "Predictive vs prescriptive",
     "Predictive forecasts. Prescriptive picks the best action.",
     "\"what will\" = predictive; \"what should I do\" = prescriptive"
    ],
    [
     "OLTP vs OLAP vs RTAP",
     "OLTP: records transactions. OLAP: analyses the data warehouse from many angles. RTAP: processes streams within seconds.",
     "\"transactions\" = OLTP; \"warehouse, drill down\" = OLAP; \"seconds, alerts\" = RTAP"
    ],
    [
     "Volume vs velocity vs variety vs veracity",
     "Volume: amount. Velocity: speed. Variety: formats. Veracity: doubt about accuracy.",
     "\"amount\" = volume; \"speed\" = velocity; \"formats\" = variety; \"doubt, gaps, conflicts\" = veracity"
    ],
    [
     "Big data vs traditional data",
     "Traditional: small to mid-size, structured, ad hoc queries. Big data: very large, many sources, real-time, optimisation and prediction.",
     "\"very large, many sources\" = big data"
    ],
    [
     "Descriptive dashboard vs real-time alert",
     "Dashboard summarises the past and present. An RTAP alert reacts within seconds to a stream.",
     "\"dashboard, report\" = descriptive; \"within seconds\" = RTAP"
    ]
   ]
  },
  "facts": {
   "head": [
    "Term",
    "Definition on the slide",
    "Source named on the slide"
   ],
   "rows": [
    [
     "AIDC",
     "\"technology to identify objects, and automatically collect data about them and update the data into software systems without human intervention\"",
     "Lecture slide 4"
    ],
    [
     "Collection of inventory data",
     "requires integration of automatic data capture and transfer technologies",
     "Lecture slide 4"
    ],
    [
     "GPS",
     "\"a space-based radio navigation system owned by the United States government and operated by the United States Air Force\"",
     "Wikipedia (slide 39)"
    ],
    [
     "GIS",
     "\"software systems with capability for input, storage, manipulation/analysis and output/display of geographic (spatial) information\"",
     "Lecture slide 46"
    ],
    [
     "Dynamic VRP setting",
     "\"not all information relevant to the planning of the routes is known by the planner when the routing process begins\"",
     "Lecture slide 63"
    ],
    [
     "Sensor",
     "\"converts physical phenomenon e.g. heat, light, motion, vibration, and sound into electrical signals\"",
     "Lecture slide 73"
    ],
    [
     "IoT (lecture)",
     "\"the network of physical objects--devices, vehicles, buildings and other items embedded with electronics, software, sensors, and network connectivity\"",
     "Lecture slide 73"
    ],
    [
     "IoT vision",
     "\"connectivity for anything, at anytime and anywhere\"",
     "ITU 2005, slide 75"
    ],
    [
     "IoT (European Commission)",
     "\"things having identities and virtual personalities operating in smart spaces using intelligent interfaces\"",
     "European Commission Information Society, 2008"
    ],
    [
     "Traceability",
     "\"the ability to trace and identify the history, distribution, location and application of products, parts and materials\"",
     "Lecture slide 80"
    ],
    [
     "Food traceability",
     "\"the ability to track any food, feed, food-producing animal or substance ... through all the stages of production, processing and distribution\"",
     "EU General Food Law Regulation (178/2002, article 18), slide 83"
    ],
    [
     "Analytics",
     "\"the use of data, information technology, statistical analysis, quantitative methods, and mathematical or computer-based models\"",
     "Lecture slide 95"
    ],
    [
     "Big data",
     "\"data whose scale, diversity, and complexity require new architecture, techniques, algorithms, and analytics to manage it and extract value and hidden knowledge\"",
     "WPI lecture slides (slide 99)"
    ],
    [
     "Tracking vs tracing",
     "tracking = \"current status and the future\"; tracing = \"the past\"",
     "Lecture slide 79"
    ]
   ],
   "extra": [
    {
     "title": "Numbers and lists, with memory tricks",
     "head": [
      "List or number",
      "Items",
      "Memory trick"
     ],
     "rows": [
      [
       "RFID frequency bands (3)",
       "low (125/134 kHz), high (13.56 MHz), ultra high (850 to 950 MHz)",
       "\"LHU\": low is around 125, high is 13.56, ultra is 850 to 950."
      ],
      [
       "Tag power classes (3)",
       "active (battery, highest range, most expensive), semi-active (battery, uses reader field, medium), passive (no battery, lowest)",
       "\"A-S-P\": more battery, more range. Active is A for \"all-in\"."
      ],
      [
       "Tag memory classes (3)",
       "read-only, write-once read-many (WORM), read-write",
       "\"Read, once, rewrite\": never changed, once then many reads, rewritten."
      ],
      [
       "Reader types (2 pairs)",
       "fixed vs handheld; single-frequency vs multi-frequency",
       "\"Fixed = fastened to a wall. Handheld = in your hand. Multi = many radio stations.\""
      ],
      [
       "RFID technical concerns (6)",
       "tag orientation, reader coordination, packaging independence, multiple standards, data formats, electromagnetic interference",
       "Story it: a tag held sideways, two readers talking, metal foil, many national rules, messy memory, humming machines."
      ],
      [
       "RFID other concerns (2)",
       "privacy, security",
       "Privacy: read from far away. Security: passive tags are too weak for locks."
      ],
      [
       "EPC bits (4)",
       "header 8, manufacturer 28, product 24, serial 36",
       "Read it like an address: country, product, item. 8, 28, 24, 36 add up to 96."
      ],
      [
       "EPCglobal pillars (5)",
       "EPC, ID system, EPC middleware, discovery services, EPC information services",
       "\"E-I-M-D-I\": a postal service: stamp, post box, sorting office, address book, record office."
      ],
      [
       "GPS segments (3)",
       "space (28 satellites), user (receivers), control (five ground stations)",
       "\"Sky, hand, ground\": satellites in the sky, receivers in the hand, stations on the ground."
      ],
      [
       "GPS fix (4 satellites)",
       "at least 4 satellites for a 3D position",
       "\"Four makes a fix in three dimensions.\""
      ],
      [
       "VRP variants (8)",
       "CVRP, VRPTW, CVRPTW, MDVRP, PVRP, SDVRP, SVRP, VRPSF",
       "Capacity (C), time (T), multiple depots (M), periodic (P), split (S), stochastic (S), satellites (SF)."
      ],
      [
       "IoT four layers (4)",
       "sensing and identification, network construction, information processing, integrated application",
       "\"See, Carry, Think, Use\": bottom to top."
      ],
      [
       "IoT challenges (4)",
       "technology standardisation, managing rapid innovation, privacy and security, governance",
       "\"Standards, Speed, Secrets, Steering\": four questions."
      ],
      [
       "Traceability needs (4)",
       "values and efficiencies, stakeholder pressure, regulation, global alignment",
       "\"Value, Voice, Law, World\": risk and money, customers, government, whole globe."
      ],
      [
       "Physical change controls (2)",
       "temperature (freezing stops metabolism), humidity (85 to 95 percent)",
       "\"Cold stops the clock; damp keeps it fresh.\""
      ],
      [
       "Mechanical damage forces (3)",
       "continuous vibration, high-force shock, tilt",
       "\"Shake, Bump, Lean\": vibration, shock, tilt."
      ],
      [
       "Analytics types (3)",
       "descriptive, predictive, prescriptive",
       "\"Look back, look ahead, look for the best action.\""
      ],
      [
       "Big data characteristics (3 + 1)",
       "volume, velocity, variety; veracity (the 4th)",
       "\"VVV and a doubt\": amount, speed, mix, doubt."
      ],
      [
       "Analytics processing (3)",
       "OLTP, OLAP, RTAP",
       "Transactions, analysis, real time: T, A, R."
      ],
      [
       "Big data growth (slide 100)",
       "44 times from 2009 to 2020; 0.8 to 35 zettabytes",
       "\"Forty-four times, zero-point-eight to thirty-five zettabytes.\""
      ],
      [
       "Supply chain analytics groups (3)",
       "data management, IT-based planning, performance management",
       "\"Data in, Plan, Score\": pipes, planning desk, scoreboard."
      ]
     ]
    },
    {
     "title": "Example companies and case studies from the slides",
     "head": [
      "Name",
      "Where on the slides",
      "What it illustrates"
     ],
     "rows": [
      [
       "Wal-Mart",
       "Slide 30, 111",
       "RFID mandate pushing suppliers to tag; Wal-Mart RFID chips already exist"
      ],
      [
       "US Department of Defense (DOD)",
       "Slide 30",
       "RFID mandate that drives adoption"
      ],
      [
       "Auto-ID MIT and Auto-ID Center",
       "Slide 19",
       "EPC origins (1999 to 2003); technology passed to EPCglobal"
      ],
      [
       "EPCglobal",
       "Slide 19",
       "Administers and develops EPC standards"
      ],
      [
       "Savant",
       "Slides 21 and 26",
       "EPC middleware computer that manages readers and queries ONS"
      ],
      [
       "Object Naming Service (ONS)",
       "Slides 20 and 21",
       "Maps an EPC to the URL of product information"
      ],
      [
       "PML (Physical Markup Language) server",
       "Slide 21",
       "Stores full product details per EPC; used for recall"
      ],
      [
       "Cherry Soda and Super Cola Inc.",
       "Slide 28 (picture)",
       "Worked example: EPC leads to Boston shipment and maker's record"
      ],
      [
       "GPS (US Air Force operated)",
       "Slide 39",
       "Space-based navigation, free for civilian users since 1996"
      ],
      [
       "TIGER files",
       "Slide 47",
       "Digitised spatial data source for GIS"
      ],
      [
       "UPS",
       "Slide 112",
       "Tracks packages and monitors and routes vehicles (big data)"
      ],
      [
       "Macys.com",
       "Slide 112",
       "Personalisation of ads (big data)"
      ],
      [
       "Bank of America",
       "Slide 112",
       "Understanding customers by channel"
      ],
      [
       "Citigroup",
       "Slide 112",
       "Monitoring customer credit risk"
      ],
      [
       "Sears Holdings",
       "Slide 112",
       "Real-time retail monitoring"
      ],
      [
       "Verizon Wireless",
       "Slide 112",
       "Selling data on mobile phone user behaviour"
      ],
      [
       "Schneider International",
       "Slide 112",
       "Trucking sensors for location and driver behaviour"
      ],
      [
       "United Healthcare",
       "Slide 112",
       "Voice calls and text mining"
      ],
      [
       "Kyruus",
       "Slide 112",
       "Start-up; physician networks; patient leakage"
      ],
      [
       "Recorded Future",
       "Slide 112",
       "Start-up; predicts from internet data"
      ],
      [
       "American Airlines",
       "Slide 113",
       "Yield management (real-time decisions)"
      ],
      [
       "Waller and Fawcett (2013)",
       "Slides 110, 111",
       "Research source for supply chain big data"
      ],
      [
       "Pang et al. (2015)",
       "Slide 82",
       "Food supply chain IoT illustration"
      ],
      [
       "Giaglis, Minis, Tatarakis, Zeimpekis (2004)",
       "Slide 44",
       "Generic architecture for dynamic real-time vehicle management"
      ],
      [
       "Hadoop, MapReduce",
       "Slide 108",
       "Big data technology tools"
      ],
      [
       "Teradata",
       "Slide 103",
       "Source of the \"Big Data = transactions + interactions + observations\" graphic"
      ]
     ]
    }
   ]
  },
  "patterns": [
   "**Scenario, then name the concept.** Most questions give a short story (a warehouse, a fleet, a food shipment, a data team) and ask which technology, layer, routing variant or analytics type it points to.",
   "**Which tag, reader or middleware?** Power and memory classes, and the reader-then-middleware order (bank Q2, Q3).",
   "**Which EPC part, pillar or component?** EPC bit lengths, the five pillars, Savant, ONS and the PML server (bank Q4).",
   "**Which GPS segment or position fix?** The three segments, the four-satellite fix, and GPS taking over once RFID coverage ends (bank Q6).",
   "**Which VRP variant or sub-problem?** Capacity, time windows, several depots, split demand, satellite restocking, static versus dynamic (bank Q8, Q9).",
   "**Which sensing mechanism, gas or damage type?** The sensing table, ethylene, hydrogen sulfide, CO2, vibration, tilt and the humidity range.",
   "**Which IoT layer, challenge or definition?** The four layers, the four challenges, and the IoT definitions.",
   "**Which traceability need?** The four needs, and the food traceability definition.",
   "**Which analytics type, big data characteristic or processing layer?** Descriptive, predictive and prescriptive; volume, velocity, variety and veracity; OLTP, OLAP and RTAP.",
   "**Which RFID concern?** Tag orientation, reader coordination, packaging, standards, data formats, interference, privacy and security.",
   "**Which definition?** AIDC, tracking versus tracing, big data, IoT (bank Q10)."
  ]
 },
 {
  "week": 9,
  "title": "Decision Support, Web Logs, Web Usage Mining and User Behaviour Models",
  "mix": {
   "head": [
    "These look alike",
    "How to tell them apart",
    "Tie-breaker word"
   ],
   "rows": [
    [
     "Access log vs error log",
     "Access log: one line for each request served (status and bytes). Error log: failed requests and server faults, kept separately.",
     "\"served, every request\" = access; \"failed, faults\" = error"
    ],
    [
     "Common log format vs extended (combined) log format",
     "Common: the basic fields. Extended (combined): adds the referrer and the user agent.",
     "\"referrer and browser\" = extended"
    ],
    [
     "Hits vs page views",
     "Hit: a request for any file, including images and scripts. Page view: a request for a file of page type plus the files that make one display.",
     "\"any file\" = hit; \"one browser display\" = page view"
    ],
    [
     "Page view vs visit (session)",
     "Page view: one page display. Visit: a series of requests from one client with a timeout, often 30 minutes.",
     "\"one display\" = page view; \"timeout\" = visit"
    ],
    [
     "Click path vs trail",
     "Click path: the sequence of hyperlinks followed on a site. Trail: the page sequence in one session, used as a mining input.",
     "\"hyperlinks followed\" = click path; \"per session, mined\" = trail"
    ],
    [
     "Static aggregation vs session analysis vs OLAP vs data mining",
     "Static: fixed summaries by day or session, cannot dig. Session analysis: looks at individual sessions. OLAP: change aggregation across dimensions (needs data warehouse). Data mining: hidden patterns.",
     "\"fixed summary\" = static; \"individual sessions\" = session analysis; \"change the level\" = OLAP; \"hidden patterns\" = data mining"
    ],
    [
     "Predictive vs descriptive data mining",
     "Predictive: regression, classification, collaborative filtering (predict something). Descriptive: clustering and association rules (describe groups or co-occurrence).",
     "\"predict a value or class\" = predictive; \"group or co-occur\" = descriptive"
    ],
    [
     "Clustering vs classification",
     "Clustering: groups found from the data, with no predefined classes. Classification: assigns records to predefined classes.",
     "\"predefined classes\" = classification; \"groups with common properties\" = clustering"
    ],
    [
     "Association rules vs clustering",
     "Association: which items occur together. Clustering: which records are alike.",
     "\"occur together\" = association; \"alike\" = clustering"
    ],
    [
     "Session clustering vs demographic clustering",
     "Session clustering groups visitors by how they navigate. Demographic clustering groups by who they are.",
     "\"navigate similarly\" = session clustering; \"demographics, interests\" = demographic"
    ],
    [
     "Association rule vs causation",
     "A rule (diaper implies beer) shows co-occurrence only. It does not prove one causes the other.",
     "\"co-occur\" = rule; \"causes\" = wrong"
    ],
    [
     "Deterministic vs stochastic models",
     "Deterministic: fixed outcome once inputs are set. Stochastic: includes random variation and uncertainty.",
     "\"fixed once inputs\" = deterministic; \"random fluctuations, uncertainty\" = stochastic"
    ],
    [
     "Static vs dynamic models",
     "Static: unchanged over time. Dynamic: changes over time.",
     "\"unchanged\" = static; \"over time\" = dynamic"
    ],
    [
     "Analytical, statistical and data mining models (levels)",
     "Analytical: optimisation, simulation, decision analysis. Statistical: descriptive stats, outliers, predictive models. Data mining: regression, clustering, association and others.",
     "\"best choice under constraints\" = analytical; \"outliers, averages\" = statistical"
    ],
    [
     "Optimisation vs simulation",
     "Optimisation finds the best solution. Simulation tests how the system behaves under a set of conditions.",
     "\"best schedule\" = optimisation; \"what happens if\" = simulation"
    ],
    [
     "Descriptive vs predictive vs prescriptive analytics",
     "Descriptive: what happened. Predictive: what will happen. Prescriptive: what to do. (The lecture's analytics terms are used in other weeks too.)",
     "\"history\" = descriptive; \"forecast\" = predictive; \"best action\" = prescriptive"
    ],
    [
     "Data cleaning vs data integration vs data transformation vs data reduction",
     "Cleaning: remove irrelevant and erroneous entries. Integration: combine logs and data sources. Transformation: identify users, sessions and page views. Reduction: sample, keep user transactions.",
     "\"remove errors\" = cleaning; \"combine logs\" = integration; \"identify sessions\" = transformation; \"sample\" = reduction"
    ],
    [
     "Sessionization vs path completion",
     "Sessionization groups requests into visits. Path completion infers missing page references caused by caching.",
     "\"group into visits\" = sessionization; \"missing because of caching\" = path completion"
    ],
    [
     "Time-oriented vs navigation-oriented heuristics",
     "Time-oriented: session duration and page stay limits. Navigation-oriented (href): a page must follow a previous page in the session, with the undefined referrer exception.",
     "\"duration or stay\" = time-oriented; \"previous page, referrer\" = navigation-oriented"
    ],
    [
     "Cookies vs URL rewriting vs hidden form fields",
     "Cookie: small file kept by the browser. URL rewriting: ID added to each link. Hidden form field: ID carried inside forms.",
     "\"kept by browser\" = cookie; \"in the link\" = URL rewriting; \"in the form\" = hidden field"
    ],
    [
     "Semantic integration vs path completion",
     "Semantic integration maps URLs to concepts. Path completion infers the missing steps.",
     "\"URLs to concepts\" = semantic; \"missing steps\" = path completion"
    ],
    [
     "Robot entries vs embedded entries",
     "Robot entries: spiders and crawlers (use robots.txt, user agent, link patterns). Embedded entries: images, video, audio, and HTML frames inside a page.",
     "\"spider, crawler\" = robot; \"image, video, frame\" = embedded"
    ],
    [
     "Hits vs visits (bank Q9 trap)",
     "4,000 hits and 800 page views mean many hits were embedded files, not separate page views.",
     "\"embedded\" = the reason for the gap"
    ],
    [
     "Pre-fetching vs personalisation",
     "Pre-fetching loads the next page early. Personalisation tailors what each reader sees.",
     "\"load in the background\" = pre-fetch; \"tailored for each reader\" = personalisation"
    ],
    [
     "Time-taken vs think time",
     "Time-taken (log field): how long the server action took, in milliseconds. Think time: time the customer spends reading between pages.",
     "\"server action, milliseconds\" = time-taken; \"customer reading\" = think time"
    ],
    [
     "Bytes sent vs bytes received",
     "Bytes sent (sc-bytes): from server to client. Bytes received (cs-bytes): from client to server.",
     "\"server to client\" = sent; \"client to server\" = received"
    ],
    [
     "sc- vs cs- prefix",
     "sc- is server-to-client. cs- is client-to-server.",
     "\"status returned to the browser\" = sc-; \"request sent from the browser\" = cs-"
    ],
    [
     "sc-status vs sc-win32-status",
     "sc-status: HTTP or FTP terms. sc-win32-status: Windows terms.",
     "\"HTTP or FTP\" = sc-status; \"Windows\" = win32"
    ],
    [
     "Username \"-\" vs missing user",
     "A dash in cs-username means an anonymous visitor (no authenticated name). It is not a failed write.",
     "\"dash\" = anonymous"
    ],
    [
     "GET vs POST",
     "GET requests a resource. POST sends data to the server, such as a form.",
     "\"retrieve a page\" = GET; \"send form data\" = POST"
    ],
    [
     "Browser (user agent) vs referrer",
     "User agent: the browser name and version. Referrer: the previous page's URL.",
     "\"browser and version\" = agent; \"where they came from\" = referrer"
    ],
    [
     "Markov chain vs CBMG",
     "Markov chain: the mathematical process. CBMG: the website model built on that chain, with static and dynamic parts.",
     "\"website model, static and dynamic parts\" = CBMG"
    ],
    [
     "Static part vs dynamic part of a CBMG",
     "Static: states and allowed transitions from the site layout. Dynamic: probability and time matrices from data.",
     "\"site layout\" = static; \"matrix from counts\" = dynamic"
    ],
    [
     "Transition probability matrix vs average transition time matrix",
     "Probability matrix: how likely each move is. Time matrix: how long each move takes on average.",
     "\"how likely\" = probability; \"how long\" = time"
    ],
    [
     "Entry state vs exit state",
     "Entry: the customer waits before entering the site. Exit: the customer waits after leaving. Neither is a real page.",
     "\"before entering\" = entry; \"after leaving\" = exit"
    ],
    [
     "Self-transition vs time-independence",
     "Self-transition: the state moves to itself (stays on the same page). Time-independence: the Markov model ignores time.",
     "\"same page again\" = self-transition; \"ignores time\" = time-independence"
    ],
    [
     "Average think time vs total think time",
     "Total: the sum of all think times for one transition. Average: total divided by how many times it happened.",
     "\"divided by count\" = average"
    ],
    [
     "Markov chain next step vs full history",
     "The Markov model uses only the current state to predict the next, not the whole path.",
     "\"only the current state\" = Markov"
    ]
   ]
  },
  "facts": {
   "head": [
    "Term",
    "Definition on the slide",
    "Source named on the slide"
   ],
   "rows": [
    [
     "Decision support systems",
     "\"Provide interactive ad hoc support for the decision-making processes of managers and other business professionals\"",
     "Lecture slide 4"
    ],
    [
     "Web usage mining",
     "\"The measurement, collection, analysis and reporting of internet data for purposes of understanding and optimizing web usage\"",
     "Lecture slide 50 (UCSF School of Medicine)"
    ],
    [
     "Hit",
     "\"A request for a file from the web server. Available only in log analysis\"",
     "Lecture slide 51 (UCSF)"
    ],
    [
     "Page view",
     "\"A request for a file whose type is defined as a page\"",
     "Lecture slide 51 (UCSF)"
    ],
    [
     "Visits or sessions",
     "\"A series of requests from the same uniquely identified client with a set timeout, often 30 minutes\"",
     "Lecture slide 51 (UCSF)"
    ],
    [
     "Click path",
     "\"the sequence of hyperlinks one or more website visitors follows on a given site\"",
     "Lecture slide 51 (UCSF)"
    ],
    [
     "Pageview",
     "\"a set of page files and associated objects that contribute to a single display in a Web Browser\"",
     "Lecture slide 32"
    ],
    [
     "Why sessionize",
     "\"Quality of the patterns discovered depends on the quality of the data on which mining is applied\"",
     "Lecture slide 33"
    ],
    [
     "Association rules",
     "\"Implication means co-occurrence, not causality!\"",
     "Lecture slide 58"
    ],
    [
     "Analytics (timeline)",
     "\"Focus on statistical and mathematical analysis for decisions\" (2005 to 2010)",
     "Lecture slide 10"
    ],
    [
     "Big data (timeline)",
     "\"Focus on very large, unstructured, fast-moving data\" (2010 to present)",
     "Lecture slide 10"
    ]
   ],
   "extra": [
    {
     "title": "Numbers, lists and memory tricks",
     "head": [
      "List or number",
      "Items",
      "Memory trick"
     ],
     "rows": [
      [
       "DSS components (3 layers)",
       "user interface, model management, data management",
       "Top to bottom: \"Show, Think, Store\": what the user sees, what the model does, where the data is cleaned and kept."
      ],
      [
       "Analytical models (3)",
       "optimisation, simulation, decision analysis",
       "\"Best, What if, Choose\": the best solution, test a scenario, compare options."
      ],
      [
       "Model pairs (2 pairs)",
       "static vs dynamic; deterministic vs stochastic",
       "\"Still or moving?\" and \"Fixed or random?\""
      ],
      [
       "Statistical model types (4)",
       "descriptive statistics, outlier analysis, univariate predictive, multivariate predictive",
       "\"Describe, Spot the odd one, Predict with one input, Predict with many.\""
      ],
      [
       "Predictive data mining (3)",
       "regression, classification, collaborative filtering",
       "\"Number, Class, Similar people\": regression gives a number, classification a class, collaborative filtering uses similar users."
      ],
      [
       "Descriptive data mining (2)",
       "clustering and similarity matching, association rules",
       "\"Group together, Go together.\""
      ],
      [
       "Decision-support timeline (6)",
       "decision support, executive support, OLAP, BI, analytics, big data",
       "\"Decide, Executive, OLAP, BI, Analyse, Big\": one word per decade."
      ],
      [
       "Server log types (2)",
       "access log, error log",
       "\"Access = all served. Error = all failed.\""
      ],
      [
       "Log formats (2)",
       "common, extended (combined)",
       "\"Common has the basics; Extended adds referrer and agent.\""
      ],
      [
       "Extended log prefixes (4)",
       "s-, cs-, c-, sc-",
       "\"s = server does it; cs = client sends to server; c = client only; sc = server sends to client.\""
      ],
      [
       "Extended fields (about 20)",
       "date, time, c-ip, cs-username, s-sitename, s-computername, s-ip, s-port, cs-method, cs-uri-stem, cs-uri-query, sc-status, sc-win32-status, sc-bytes, cs-bytes, time-taken, cs-version, cs-host, cs(User Agent), cs(Cookie), cs(Referrer)",
       "Group by role: who (IP, user), what (method, URI), result (status, bytes, time), context (agent, cookie, referrer)."
      ],
      [
       "Access log problems (5)",
       "caching, dynamic address allocation, stateless HTTP, crawler activity, tedious preprocessing",
       "\"Cache, Dynamic, Stateless, Crawlers, Tedious\": five things that spoil the raw log."
      ],
      [
       "Session tracking alternatives (3)",
       "cookies, URL rewriting, hidden form fields",
       "\"Cookie in the browser, ID in the link, ID in the form.\""
      ],
      [
       "Preprocessing stages (4)",
       "cleaning, integration, transformation, reduction",
       "\"Clean, Combine, Change, Cut down.\""
      ],
      [
       "Transformation tasks (3)",
       "user identification, sessionization, pageview identification",
       "\"Who, When (session), Which page.\""
      ],
      [
       "Reduction tasks (2)",
       "sampling and dimensionality reduction, identifying user transactions",
       "\"Sample it, Keep the transactions.\""
      ],
      [
       "Heuristics (time-oriented: 2; navigation: 1)",
       "h1 total session duration (30 min), h2 page stay (10 min), href (referrer rule, 10 seconds)",
       "\"Two clocks and one link\": two time limits, one link rule."
      ],
      [
       "Analysis levels (4)",
       "static aggregation, session analysis, OLAP, data mining",
       "\"Summary, Single trip, Slice, Search.\""
      ],
      [
       "Web log tools (7)",
       "Webalizer, Sawmill, WebTrends, AWStats, WWWStat, Apache Logs Viewer, Google Analytics",
       "Any analytics dashboard for the logs."
      ],
      [
       "Data mining menu (6)",
       "sequence mining (Markov), association rules, clustering, session clustering, classification, card fraud detection",
       "\"Next, Go-together, Alike, Same behaviour, Class, Fraud.\""
      ],
      [
       "Applications (6)",
       "pre-fetching and caching, site reorganisation, personalisation, recommendation, calibration of server, cross-selling",
       "\"Fetch early, Re-layout, Personalise, Recommend, Calibrate, Cross-sell.\""
      ],
      [
       "CBMG parts (4)",
       "states, entry state, exit state, static part, dynamic part",
       "\"Entry and exit wait outside; the static part is the map, the dynamic part is the counts.\""
      ],
      [
       "CBMG matrix properties (4)",
       "no transition into entry except from exit; no entry to exit directly; no exit except to entry; exit goes to exit or entry",
       "\"One-way doors: come in only at the entry, leave only at the exit.\""
      ]
     ]
    },
    {
     "title": "Example companies and case studies from the slides",
     "head": [
      "Name",
      "Where on the slides",
      "What it illustrates"
     ],
     "rows": [
      [
       "Lycos (search engine referral)",
       "Slide 21 (sample log)",
       "The referrer field shows the visitor came from a search results page"
      ],
      [
       "acr-news.org",
       "Slide 21 (sample log)",
       "Example site in a sample log; visitors arrive from its own pages"
      ],
      [
       "Cisco (Internet Protocol Journal)",
       "Slide 18 (HTTP review source)",
       "Source of an HTTP review"
      ],
      [
       "Apache HTTP Server documentation",
       "Slide 20",
       "Source of the access and error log format description"
      ],
      [
       "Search engine web crawlers",
       "Slide 19",
       "Crawlers that create non-human log entries"
      ],
      [
       "Example shopping site",
       "Slides 38 and 41",
       "Worked example: search, refine and choose item; mapping URLs to concepts"
      ],
      [
       "Home page, catalog ordering, shopping cart",
       "Slide 47",
       "Static aggregation example: sessions and views per page"
      ],
      [
       "Kid's Stuff products, electronics, educational, radio-controlled",
       "Slide 49",
       "OLAP drill-down example across product categories"
      ],
      [
       "Diaper and beer baskets",
       "Slide 58",
       "Classic association rule example (co-occurrence, not cause)"
      ],
      [
       "Browsing graph with states A1 to A6, S and F",
       "Slide 74",
       "Markov chain example of a CBMG"
      ],
      [
       "Session at a website with states Browse, Select, Add to cart",
       "Slides 71 and 73",
       "Worked probability and think-time example"
      ]
     ]
    }
   ]
  },
  "rules": [
   "\"Interactive, ad hoc, nonroutine decision, evaluate scenarios\" → a DSS with analytical models, not routine reporting.",
   "\"Explicit uncertainty or random fluctuations\" → stochastic model.",
   "\"Frequently occurring phrases and themes in text\" → text mining with NLP.",
   "\"Arrived from a search engine or another site\" → referrer field.",
   "\"Merge logs from several servers\" → data integration (synchronise and integrate).",
   "\"Image files and scripts counted with a page\" → embedded requests, filtered out before analysis.",
   "\"Requests missing from the log because of caching\" → path completion.",
   "\"Map URLs to a concept such as Mobile Phones\" → semantic integration, so the analysis is at concept level.",
   "\"Session closes after a total duration or page-stay limit\" → time-oriented heuristic.",
   "\"Undefined referrer but a few seconds after the last request\" → keep it in the same session (navigation-oriented exception).",
   "\"Items that occur together\" → association rule mining, which shows co-occurrence and not causation.",
   "\"Probability from a state to another from counts\" → count that move and divide by all moves out of the state.",
   "\"Time between a page arriving and the next request\" → think time.",
   "\"Next state depends only on the current state\" → Markov chain. ---"
  ]
 },
 {
  "week": 10,
  "title": "Customer Behavior Models, Capacity Planning and Recommender Systems",
  "mix": {
   "head": [
    "These look alike",
    "How to tell them apart",
    "Tie-breaker word"
   ],
   "rows": [
    [
     "CBMG vs CSID",
     "CBMG = the visitor's path through the site's states. CSID = the chain of servers one request passes through.",
     "\"visitor path, pages, clicks\" → CBMG. \"request, server, chain\" → CSID"
    ],
    [
     "CBMG vs queuing network",
     "CBMG describes customers. Queuing network describes servers and their queues.",
     "\"customers / sessions\" → CBMG. \"servers / waiting time / utilization\" → queuing network"
    ],
    [
     "Entry vs Exit",
     "Entry is only a start and nothing goes into it except from Exit. Exit is the end and can go back to Entry or stay. Entry can never jump to Exit.",
     "\"Exit can return; Entry never jumps to Exit\""
    ],
    [
     "Transition probability p_ij vs holding time z_ij",
     "p_ij is the chance of the next move. z_ij is the seconds spent for that move.",
     "\"chance\" vs \"seconds\""
    ],
    [
     "Mean time in a state t_i vs one holding time z_ij",
     "t_i is the weighted average over all exits from state i. z_ij is one branch only.",
     "\"all exits\" vs \"one branch\""
    ],
    [
     "Two kinds of time data: holding times vs (count, think time) pairs",
     "Example-I gives holding times, so weight them by p. Bank-style pairs give total seconds, so divide total seconds by total count.",
     "\"given a time per branch\" vs \"given (count, seconds)\""
    ],
    [
     "Transition probability P vs mean number of transitions v",
     "P is the chance of one next step. v adds up the expected visits over the whole session until Exit.",
     "\"one step\" vs \"whole session\""
    ],
    [
     "Average session length vs average time per session vs average throughput",
     "Length = how many states or requests. Time = seconds. Throughput = requests served per second.",
     "\"how many\" / \"how long\" / \"per second\""
    ],
    [
     "Limiting state probability vs transition probability",
     "Limiting = long-run share of visits to a state. Transition = odds of the very next move.",
     "\"long run\" vs \"next move\""
    ],
    [
     "Buy-to-visit ratio vs revenue",
     "BV is a fraction of visits that buy (0.046 = 4.6 percent). Revenue is dollars = sessions x BV x average sale.",
     "\"fraction\" vs \"dollars\""
    ],
    [
     "Store's 95 percent no-purchase figure vs BV 0.046",
     "The store case says 95 percent make no purchase, so about 5 percent buy. The planning uses BV 0.046 from the CBMG table.",
     "Use 0.046 in the calculation"
    ],
    [
     "Arrival rate λ vs service rate μ",
     "λ = requests coming in per second. μ = requests the server can finish per second.",
     "\"coming in\" vs \"can finish\""
    ],
    [
     "Utilization U vs response time R vs throughput X vs waiting time",
     "U = busy share (λ/μ). R = total time at the server, waiting plus service. X = completed per second. Waiting = R minus S.",
     "\"busy share?\", \"total time?\", \"per second?\", \"queue only?\""
    ],
    [
     "Service time S vs response time R",
     "S = time for one request with no queue. R = S/(1 - U), which grows fast as U approaches 1.",
     "\"alone\" vs \"with the queue\""
    ],
    [
     "Scalable vs performance targets vs QoS vs bottleneck",
     "Scalable = still good above the expected load. Performance = response time and throughput targets. QoS = uptime and failure items. Bottleneck = the one resource that limits the site.",
     "\"above expected load\" / \"numbers\" / \"failure, repair\" / \"limits\""
    ],
    [
     "Scaling up vs scaling out",
     "Up = one bigger machine. Out = more machines in parallel.",
     "\"bigger\" vs \"more in parallel\""
    ],
    [
     "MTTF vs MTTR",
     "MTTF = working time before failure. MTTR = time to repair.",
     "\"fails\" vs \"fixes\""
    ],
    [
     "Single point of failure vs minimum configuration",
     "Single point of failure = one part whose failure stops the site. Minimum configuration = the smallest setup that still works.",
     "\"one weak link\" vs \"smallest working set\""
    ],
    [
     "Analytical model vs simulation model",
     "Analytical = maths formulas. Simulation = run the system as a model with random events.",
     "\"formula\" vs \"run\""
    ],
    [
     "Service demand vs service time",
     "Service time = one request's time at one resource. Service demand = sum of service times of all requests of a function at that resource.",
     "\"all references in a function\""
    ],
    [
     "Workload forecasting vs capacity planning",
     "Forecasting predicts the future load. Capacity planning uses the forecast to decide the infrastructure.",
     "\"predict the load\" vs \"decide the infrastructure\""
    ],
    [
     "Model inputs vs model outputs",
     "Inputs (arrival rate, service rate) come from the access log. Outputs (waiting time, response time, utilization) come from the model.",
     "\"from the log\" vs \"from the model\""
    ],
    [
     "Extrinsic vs intrinsic features",
     "Extrinsic = typed in by hand (director, MPAA rating). Intrinsic = pulled out of the content (nouns, words).",
     "\"specified\" vs \"extracted from the text\""
    ],
    [
     "TF vs TF*IDF",
     "TF counts a term inside one document. TF*IDF also reduces the score for a term that appears in every document.",
     "\"common everywhere\" → TF*IDF lowers it"
    ],
    [
     "Dependent vs independent variable",
     "Dependent = the preference rating (what you predict). Independent = the item features (what you use).",
     "\"predicted\" vs \"used to predict\""
    ],
    [
     "Info(D) vs Info_A(D) vs Gain(A)",
     "Info(D) = mess before the split (0.940). Info_A(D) = mess after the split (0.694 for age). Gain = before minus after (0.246 for age).",
     "\"before\", \"after\", \"difference\""
    ],
    [
     "Greedy vs exhaustive search",
     "Greedy = the best split right now, never revisited. Exhaustive = try every tree.",
     "\"never goes back\""
    ],
    [
     "Root vs leaf",
     "Root = the first test (highest gain). Leaf = the final answer (majority vote).",
     "\"first question\" vs \"final verdict\""
    ],
    [
     "Stopping on one class vs stopping on no attributes",
     "One class = every sample agrees, so the leaf is pure. No attributes = all questions used, so label by majority vote.",
     "\"all agree\" vs \"out of questions\""
    ],
    [
     "Prediction vs Top-N vs Top-M users",
     "Prediction = one score for one unrated item. Top-N = N items for one user, not yet rated. Top-M = M users for one new item.",
     "\"a score\" / \"N items\" / \"M users\""
    ],
    [
     "Popularity-based vs collaborative filtering",
     "Popularity = same list for everyone. Collaborative = users with a similar taste.",
     "\"everyone\" vs \"similar users\""
    ],
    [
     "Collaborative filtering vs demographics-based",
     "Collaborative = similar taste (ratings). Demographics = similar profile (age, gender, city).",
     "\"taste\" vs \"profile\""
    ],
    [
     "Content-based vs collaborative filtering",
     "Content-based uses the item's features and this user's history. Collaborative uses other users' preferences.",
     "\"item features\" vs \"other users\""
    ],
    [
     "Association-based vs collaborative filtering",
     "Association = items bought together (co-occurrence). Collaborative = people with similar taste.",
     "\"bought together\" vs \"people like you\""
    ],
    [
     "Reputation-based vs collaborative filtering",
     "Reputation = whose opinion you respect or endorse. Collaborative = whoever has a similar taste.",
     "\"respects / endorses\" vs \"similar taste\""
    ],
    [
     "Association-based vs content-based",
     "Association = co-purchase patterns across customers. Content-based = features of the item the user liked.",
     "\"bought together\" vs \"what the item is about\""
    ],
    [
     "Clustering vs decision tree",
     "Clustering groups sessions with no labels (K-means). Decision tree induction predicts a class from labelled examples.",
     "\"group the sessions\" vs \"build a tree of questions\""
    ],
    [
     "Early research names vs commercial names",
     "Early research: Shardanand and Maes (music albums), GroupLens (Usenet news), Citeseer (articles). Commercial: Double-click (banner ads), CDnow (music albums), Amazon (books).",
     "Ask: \"research system\" or \"shop\""
    ]
   ]
  },
  "facts": {
   "head": [
    "Fact",
    "Detail",
    "Memory trick"
   ],
   "rows": [
    [
     "Example-I branch counts",
     "Entry: 75 to Home, 25 to Product Catalog. Home: 45 to Product Catalog, 30 to Shopping Cart. Product Catalog: 20 to Shopping Cart, 20 to Select, 36 to Exit (total 76). Shopping Cart: 5 to Product Catalog, 5 to Pay, 10 to Exit (total 20). Select: 5 to Pay, 15 to Exit (total 20). Pay: 1 to Shopping Cart, 9 to Exit (total 10).",
     "Count the \"exit\" total first, then divide"
    ],
    [
     "Product Catalog to Exit",
     "36 / 76 = 47.4 percent",
     "Common trap: 36.0 percent (divided by 100), 26.3 percent (20/76)"
    ],
    [
     "Shopping Cart mean time",
     "275 seconds: (5/20)x100 + (5/20)x600 + (10/20)x200",
     "Weighted, not a plain average (plain average of 100, 600 and 200 is 300)"
    ],
    [
     "Home mean time",
     "340 seconds",
     "Weights 45/75 and 30/75"
    ],
    [
     "Bank Q2 expected time",
     "790 / 105 = 7.52 seconds (take total think time over total count)",
     "Trap: 7.0 is only 350 / 50, the first branch"
    ],
    [
     "Utilization",
     "U = λ x S, for example 30 req/s x 0.020 s = 0.6",
     "Put ms into seconds first"
    ],
    [
     "Response time",
     "R = S / (1 - U). Example: S = 0.048 s, U = 0.24, R = 0.063 s",
     "Response grows quickly as U approaches 1"
    ],
    [
     "Quadrupled search load",
     "λ = 20, U = 0.96, R = 1.2 s",
     "Slide prints \"1900 percent\" increase, the numbers give about 1800 percent (about 19 times)"
    ],
    [
     "Business goal",
     "$130 million merchandise, $3 million ad sales (board goal for next year)",
     "Revenue goal, not traffic goal"
    ],
    [
     "Store facts (slide 34)",
     "Sells computer components, other electronic products, software and gift items. Last year: merchandise revenue $94,378,000; ad revenue $900,000. 95 percent of customers do not buy. Special events: traffic up to 400 percent of ordinary days.",
     "\"95 no, 400 peak\""
    ],
    [
     "Revenue per second",
     "$130,000,000 / 31,536,000 = $4.122 per second. (The slide prints 13,000,000 by mistake; 4.122 needs 130,000,000.)",
     "Use 130 million"
    ],
    [
     "Sessions per second",
     "4.122 / (0.046 x 225) = 0.398 sessions per second",
     "Divide by BV x average sale"
    ],
    [
     "Requests per second",
     "0.398 x 8.144 = 3.241 requests per second on a normal day",
     "Sessions x requests per session"
    ],
    [
     "Burst load",
     "20 x 3.241 = 64.82 requests per second to serve",
     "Burst is 20 times normal"
    ],
    [
     "Buy-to-visit ratio",
     "0.046 (4.6 percent) in the store case",
     "Buyers per visitor"
    ],
    [
     "Average sale",
     "$225 in the store case",
     "Sale per buyer"
    ],
    [
     "Information gain (buys_computer)",
     "Info(D) = 0.940 (9 yes, 5 no). Info_age = 0.694. Gain: age 0.246, student 0.151, credit rating 0.048, income 0.029.",
     "Highest gain goes to the root (age)"
    ],
    [
     "Age partitions",
     "30 or under: 5 customers, 2 buy. 31 to 40: 4 customers, all buy. Over 40: 5 customers, 3 buy.",
     "2, 4, 3 buyers"
    ],
    [
     "Assignment gains (slide 73)",
     "Type 0.558, Language 0.186, Category 0.073.",
     "Type is the root"
    ]
   ],
   "extra": [
    {
     "title": "Lists (with memory tricks)",
     "head": [
      "List",
      "Items",
      "Memory trick"
     ],
     "rows": [
      [
       "3 factors of future workload",
       "Natural evolution of existing workload; deployment of new applications and services; changes in customer behavior",
       "\"Grow, Launch, Behave\""
      ],
      [
       "3 elements of adequate capacity",
       "Service level agreement; specified technologies and standards; cost constraints",
       "\"Service, Tech, Cash\""
      ],
      [
       "4 parts of the SLA",
       "Performance; quality of service; scalability; bottleneck analysis",
       "\"Perform, Quality, Scale, Bottleneck\" (a restaurant review)"
      ],
      [
       "QoS items (6)",
       "Site availability; cost of unavailability; single points of failure; minimum configuration; MTTF; MTTR",
       "\"Is it up? What does down cost? One weak link? Smallest setup? How long until it breaks? How long to fix?\""
      ],
      [
       "6 capacity-planning steps",
       "Characterize customer behavior; characterize site workload; workload forecasting; develop performance models; obtain performance parameters; predict performance and check QoS",
       "\"Can Some Folks Make Perfect Pancakes\" (C, S, F, M, P, P)"
      ],
      [
       "Workload characterization steps (5)",
       "Draw the CSID; find service demand per resource; rank the most demanding functions; find bottleneck and site throughput; find average throughput",
       "\"Draw, Sum, Rank, Bottleneck, Average\""
      ],
      [
       "Workload forecasting steps (5)",
       "Visual inspection of data; choose forecasting models; forecast each business function; feed forecasts into performance and workload models; plan for future waves",
       "\"Look, Choose, Split by function, Feed, Plan waves\""
      ],
      [
       "Queuing network use cases",
       "More realistic; depends on how much detail you need; depends on the data you have",
       "\"Real but needs data\""
      ],
      [
       "7 recommender types",
       "Popularity; content-based; collaborative filtering; association-based; demographics-based; reputation-based; hybrid",
       "\"Pete Can Cook After Dinner, Really Hungry\" (P, C, C, A, D, R, H)"
      ],
      [
       "3 recommendation decisions",
       "Prediction; Top-N; Top-M users",
       "\"Predict one, Name N items, Name M users\""
      ],
      [
       "Elements of a recommendation scenario",
       "Users (with demographics); items (with features); preferences (explicit or implicit)",
       "\"Who, What, How much they liked\""
      ],
      [
       "4 content-based phases",
       "Feature extraction and selection; representation; user profile learning; recommendation generation",
       "\"Fresh Rice Pudding Recipe\" (F, R, P, R)"
      ],
      [
       "Adaptive learners (3)",
       "Multiple linear regression; decision tree induction; back-propagation neural networks",
       "\"Lines, Trees, Brains\""
      ],
      [
       "Extrinsic feature examples",
       "Category, MPAA rating, Maltin rating, Academy award, length, origin, director",
       "\"Label on the packet\""
      ],
      [
       "Feature-selection methods for extrinsic features (3)",
       "Stepwise statistical regression (forward and backward); genetic algorithm; attribute selection in decision trees",
       "\"Step, Gene, Tree\""
      ],
      [
       "Stopping conditions (3)",
       "Same class; no attributes left (majority vote); no samples left",
       "\"Agree, Out of questions, Empty room\""
      ],
      [
       "Decision tree algorithm facts",
       "Greedy; top-down; recursive divide-and-conquer; attributes categorical (discretize continuous first)",
       "\"Greedy, Top-down, Split, Stop\""
      ]
     ]
    },
    {
     "title": "Definitions and quotes from the slides",
     "head": [
      "Term",
      "Slide wording (paraphrased closely)",
      "Memory trick"
     ],
     "rows": [
      [
       "Capacity planning",
       "\"The process of predicting when the future load level will saturate the system and determining the most cost-effective way of delaying system saturation as much as possible.\"",
       "Predict first, then delay cheaply"
      ],
      [
       "Scalable infrastructure",
       "\"Provides adequate service level even when the work load increases above the expected level.\"",
       "Works above the expected load"
      ],
      [
       "Prediction is the key",
       "Slide 15: \"Prediction is the key to capacity planning.\"",
       "Predict before you buy"
      ],
      [
       "Recommender system",
       "\"Suggest items (information, products and services) that are of interest to the users.\"",
       "Suggest what they will like"
      ],
      [
       "Content-based approach",
       "\"Recommends the items similar to those liked by the user in the past.\"",
       "Similar to what they liked"
      ],
      [
       "CBMG states",
       "\"Each node represents a state consisting of one or more pages.\"",
       "A node is a room"
      ],
      [
       "Dangling link",
       "\"Represents the connection to the Exit state.\"",
       "Dangling = leaves the site"
      ],
      [
       "Trapping state",
       "Used to delete Exit from P to form P'",
       "One-way door"
      ],
      [
       "Information gain",
       "\"Select the attribute with the highest information gain.\"",
       "Most confusion removed"
      ]
     ]
    },
    {
     "title": "Example companies and cases",
     "head": [
      "Name",
      "What it illustrates",
      "Memory trick"
     ],
     "rows": [
      [
       "Double-click.com",
       "Early commercial use of personalized banner ads",
       "\"Double click on your ad\""
      ],
      [
       "CDnow.com",
       "Early commercial recommender for music albums",
       "\"CD now\" for music"
      ],
      [
       "Amazon.com",
       "Early commercial recommender for books",
       "Books"
      ],
      [
       "GroupLens (Resnick, Konstan)",
       "Personalized recommendations for Usenet news items",
       "Usenet news"
      ],
      [
       "Citeseer (Rucker and Pollano)",
       "Recommending relevant articles",
       "Articles"
      ],
      [
       "Social information filtering (Upendra Shardanand and Pattie Maes)",
       "Automating \"word of mouth\", recommending music albums",
       "Word of mouth"
      ],
      [
       "Example-I site (five-plus states)",
       "A CBMG with Entry, Home, Product Catalog, Shopping Cart, Select, Pay, Exit",
       "Walk the states in order"
      ],
      [
       "Example-II (five states, six clusters)",
       "The site has Browse product (b), Search product (s), Select product, Add to cart (a), Pay; sessions clustered into 6 groups with one CBMG each",
       "Five states, six clusters"
      ],
      [
       "Store capacity case (slide 34)",
       "Sells computer components, electronics, software and gift items; merchandise and banner ad revenue",
       "\"Store with two kinds of revenue\""
      ],
      [
       "Online song store (slides 72 and 73)",
       "Assignment: classical and rock songs, Hindi, English and Telugu languages",
       "Buy or not, by type then language"
      ],
      [
       "Digital music in MP4 format",
       "MP4 (a standard digital media file format). A new downloadable product; plan capacity before launch",
       "Launch needs capacity first"
      ]
     ]
    },
    {
     "title": "Example-II table (slide 12, as the exam reads it)",
     "head": [
      "Cluster",
      "% of sessions",
      "Buy-to-visit ratio (the \"Va\" row, which the mock calls buy-to-visit)",
      "\"Vb + Vs\" row (the mock calls the last number session length)"
     ],
     "rows": [
      [
       "1",
       "44.28",
       "5.7",
       "5.6"
      ],
      [
       "2",
       "28",
       "4.5",
       "15"
      ],
      [
       "3",
       "10.6",
       "3.7",
       "27"
      ],
      [
       "4",
       "9.29",
       "4",
       "28"
      ],
      [
       "5",
       "6.2",
       "3.5",
       "50"
      ],
      [
       "6",
       "1.5",
       "2",
       "81"
      ]
     ]
    },
    {
     "title": "Slide 36: metrics derived from the CBMG (store case)",
     "head": [
      "Metric",
      "Value as printed"
     ],
     "rows": [
      [
       "V welcome",
       "2.583"
      ],
      [
       "V browse",
       "2.607"
      ],
      [
       "V search",
       "0.115"
      ],
      [
       "V register",
       "0.046"
      ],
      [
       "V checkout",
       "1.172"
      ],
      [
       "V special offer",
       "0.013"
      ],
      [
       "V add to cart",
       "0.304"
      ],
      [
       "Unlabelled value",
       "1.608"
      ],
      [
       "Average session length",
       "8.144 requests per session"
      ],
      [
       "Buy-to-visit ratio",
       "0.046 (4.6 percent)"
      ]
     ]
    },
    {
     "title": "Training data: buys_computer (slide 66, 14 customers, 9 yes and 5 no)",
     "head": [
      "age",
      "income",
      "student",
      "credit_rating",
      "buys_computer"
     ],
     "rows": [
      [
       "<=30",
       "high",
       "no",
       "fair",
       "no"
      ],
      [
       "<=30",
       "high",
       "no",
       "excellent",
       "no"
      ],
      [
       "31...40",
       "high",
       "no",
       "fair",
       "yes"
      ],
      [
       ">40",
       "medium",
       "no",
       "fair",
       "yes"
      ],
      [
       ">40",
       "low",
       "yes",
       "fair",
       "yes"
      ],
      [
       ">40",
       "low",
       "yes",
       "excellent",
       "no"
      ],
      [
       "31...40",
       "low",
       "yes",
       "excellent",
       "yes"
      ],
      [
       "<=30",
       "medium",
       "no",
       "fair",
       "no"
      ],
      [
       "<=30",
       "low",
       "yes",
       "fair",
       "yes"
      ],
      [
       ">40",
       "medium",
       "yes",
       "fair",
       "yes"
      ],
      [
       "<=30",
       "medium",
       "yes",
       "excellent",
       "yes"
      ],
      [
       "31...40",
       "medium",
       "no",
       "excellent",
       "yes"
      ],
      [
       "31...40",
       "high",
       "yes",
       "fair",
       "yes"
      ],
      [
       ">40",
       "medium",
       "no",
       "excellent",
       "no"
      ]
     ]
    },
    {
     "title": "Training data: online song store (slide 73, the assignment)",
     "head": [
      "Category",
      "Type",
      "Language",
      "Purchased"
     ],
     "rows": [
      [
       "Movie",
       "Classical",
       "Hindi",
       "Yes"
      ],
      [
       "Movie",
       "Classical",
       "Hindi",
       "Yes"
      ],
      [
       "Album",
       "Rock",
       "English",
       "No"
      ],
      [
       "Movie",
       "Classical",
       "English",
       "Yes"
      ],
      [
       "Album",
       "Classical",
       "Hindi",
       "Yes"
      ],
      [
       "Movie",
       "Classical",
       "Telugu",
       "No"
      ],
      [
       "Album",
       "Rock",
       "Hindi",
       "No"
      ],
      [
       "Movie",
       "Rock",
       "English",
       "No"
      ],
      [
       "Movie",
       "Classical",
       "English",
       "Yes"
      ]
     ]
    }
   ]
  },
  "rules": [
   "\"Dummy start\", \"beginning of a session\", \"gate\" → **Entry**. \"Dummy end\", \"ends the session\", \"dangling link\" → **Exit**.",
   "\"Impossible transition\", \"rule\", \"Entry directly to Exit\" → **p_1n = 0**, Entry cannot jump to Exit.",
   "\"Expected time before making a transition\" with branch holding times → **weighted sum of p_ij x z_ij**. With (count, think time) pairs → **total think time / total count**.",
   "\"Probability of the next state\" → **that branch's count / total count leaving the state**. Example: 36/76 for Product Catalog to Exit.",
   "\"Requests per second\" and \"service time\" → **utilization U = λ x S**. Then \"response time\" → **R = S / (1 - U)**.",
   "\"Traffic grows by a factor\" → **multiply λ, recompute U, then R**. A big jump in U makes R explode.",
   "\"Scalable\", \"bottleneck\", \"single point of failure\" → the QoS and SLA definitions above.",
   "\"Items bought together\" → **association-based**. \"Similar taste, other users\" → **collaborative filtering**. \"Similar age, gender, city\" → **demographics-based**. \"Respected or endorsed\" → **reputation-based**. \"Same list for everyone, most popular\" → **popularity-based**. \"Features of the item\" → **content-based**.",
   "\"Extrinsic\" → **typed in by hand** (director, MPAA rating). \"Intrinsic\" → **pulled out of the text** (nouns, noun phrases).",
   "\"Highest information gain\" → **root of the tree**. \"Stop when everyone agrees, no questions left, or no samples\" → **the three stopping conditions**."
  ]
 },
 {
  "week": 11,
  "title": "Collaborative Filtering, Association Rules, Demographic Recommenders, Dynamic Pricing and Auctions",
  "mix": {
   "head": [
    "These look alike",
    "How to tell them apart",
    "Tie-breaker word"
   ],
   "rows": [
    [
     "User-user CF vs item-item CF",
     "User-user finds like-minded users at run time (slow, no offline work). Item-item builds a similar-items table offline and looks it up online (Amazon).",
     "\"like-minded users\" vs \"buying patterns, offline\""
    ],
    [
     "Dimension reduction vs neighborhood formation vs recommendation generation",
     "Reduction makes the matrix smaller. Neighborhood picks the like-minded group. Generation predicts the rating from the neighbors.",
     "\"smaller\", \"group\", \"predict\""
    ],
    [
     "Semi-manual vs automatic dimension reduction",
     "Semi-manual uses product features written by people. Automatic works from the data (adjusted taxonomy, LSI).",
     "\"descriptive features\" vs \"automatic\""
    ],
    [
     "Adjusted product taxonomy vs latent semantic indexing",
     "Adjusted taxonomy merges small categories to spread transactions evenly. LSI uses SVD to reduce the matrix to d meta-items.",
     "\"merge categories\" vs \"SVD, rank-d\""
    ],
    [
     "Singular value decomposition vs cosine similarity",
     "SVD reduces the matrix (dimension reduction). Cosine measures the angle between two vectors (similarity).",
     "\"reduce\" vs \"angle\""
    ],
    [
     "Pearson vs Spearman vs cosine vs mean-square",
     "Pearson: correlation of ratings on commonly rated items. Spearman: correlation of ranks. Cosine: angle between vectors (Amazon). Mean-square: average squared gap.",
     "\"ranks\" / \"angle\" / \"squared gap\" / \"correlation\""
    ],
    [
     "Gini impurity (NOT a similarity) vs the similarity measures",
     "Gini impurity is a split measure used in decision trees, not a user similarity.",
     "\"tree split\" vs \"two users\""
    ],
    [
     "Weight threshold vs center-based best-k vs aggregate-based best-k",
     "Threshold: keep all above a cutoff (no fixed count). Best-k: keep exactly k, chosen by closeness to the profile (center) or by aggregate score.",
     "\"cut-off value\" vs \"exactly k\""
    ],
    [
     "Weighted average vs deviation from the mean",
     "Weighted average uses the neighbors' raw scores. Deviation from mean uses each neighbor's score minus their own average, then adds the active user's average.",
     "\"raw\" vs \"minus their average\""
    ],
    [
     "Offline vs online processing",
     "Offline = done before the user arrives (store, build tables). Online = done at request time (find neighbors, predict).",
     "\"before\" vs \"while the user waits\""
    ],
    [
     "Item-item similarity vs user-user similarity",
     "Item-item is more stable and needs fewer updates. User-user changes as people's tastes change.",
     "\"stable\" vs \"changes often\""
    ],
    [
     "First-order vs higher-order models (item-item)",
     "First-order: correlation analysis, linear regression. Higher-order: belief networks, association rule mining.",
     "\"simple\" vs \"network or rules\""
    ],
    [
     "Association-based vs item-item CF",
     "Association uses rules (LHS to RHS, support and confidence). Item-item uses a similarity number (cosine or Pearson).",
     "\"rules with confidence\" vs \"similarity number\""
    ],
    [
     "Support vs confidence",
     "Support = share of ALL transactions with X and Y. Confidence = share of transactions with X that also have Y (denominator is X alone).",
     "\"all\" vs \"those with X\""
    ],
    [
     "Support count vs support",
     "Support count is the number of transactions. Support is that number divided by total transactions.",
     "\"how many\" vs \"what share\""
    ],
    [
     "Frequent pattern vs association rule",
     "A frequent pattern is a set of items that often appears. An association rule is an if-then statement built from such sets.",
     "\"set\" vs \"if then\""
    ],
    [
     "Join vs prune",
     "Join creates candidate k-itemsets from frequent (k-1)-itemsets. Prune removes candidates with a non-frequent subset and those below minimum support.",
     "\"makes candidates\" vs \"removes candidates\""
    ],
    [
     "Apriori vs K-means",
     "Apriori mines frequent itemsets (association). K-means is a clustering algorithm (not one of the three mining approaches).",
     "\"itemsets\" vs \"clusters\""
    ],
    [
     "Apriori principle vs anti-monotone",
     "They are the same idea: a non-frequent set makes all its supersets non-frequent.",
     "\"same property\""
    ],
    [
     "Demographics-based vs collaborative filtering",
     "Demographics uses user profile (age, gender, city) at category level. Collaborative uses rating similarity at item level.",
     "\"profile, category\" vs \"ratings, item\""
    ],
    [
     "Personalization content vs structure vs layout",
     "Content = which items or articles appear. Structure = navigation hierarchy. Layout = presentation and media format.",
     "\"what\" / \"how it is organised\" / \"how it looks\""
    ],
    [
     "Buyer-driven vs seller-driven personalization",
     "Buyer-driven: the buyer sets the rules. Seller-driven: the seller sets the rules (cross-selling, up-selling, target advertising).",
     "\"buyer decides\" vs \"seller decides\""
    ],
    [
     "Reactive (explicit) vs non-reactive (implicit) data",
     "Reactive asks the user (questionnaire, rating pop-up). Non-reactive records behavior without asking.",
     "\"asks\" vs \"records\""
    ],
    [
     "Data collection vs preprocessing vs user profiling vs personalized output",
     "Collection gathers data. Preprocessing cleans it. Profiling mines it. Output shows the tailored page.",
     "\"gather\", \"clean\", \"mine\", \"show\""
    ],
    [
     "Market equilibrium vs dynamic pricing",
     "Equilibrium: quantity supplied = quantity demanded at one price. Dynamic pricing: prices change as supply and demand change.",
     "\"one point\" vs \"changes over time\""
    ],
    [
     "Spatial vs temporal price dispersion",
     "Spatial: different sellers, different prices, same time. Temporal: same seller, price changes over time (seasonal).",
     "\"which seller?\" vs \"which day?\""
    ],
    [
     "Price dispersion vs price differentiation",
     "Dispersion: same item, different prices across sellers or time. Differentiation: the seller charges different customers or groups different prices.",
     "\"item across sellers/time\" vs \"customer or group\""
    ],
    [
     "First-degree vs second-degree vs third-degree",
     "First: each person pays their own price (perfect; auction). Second: price depends on quantity (volume discount). Third: price depends on group (business vs household).",
     "\"person\" / \"quantity\" / \"group\""
    ],
    [
     "Second-degree vs third-degree",
     "Second-degree rule is the same for every individual but varies with quantity. Third-degree gives each group a different unit price, the same for any quantity.",
     "\"quantity\" vs \"group\""
    ],
    [
     "Markup pricing vs target return pricing",
     "Markup: cost / (1 - markup on sales). Target return: cost + (desired return x capital) / unit sales.",
     "\"markup %\" vs \"return on capital\""
    ],
    [
     "Perceived value vs value pricing",
     "Perceived value: price follows service, warranty and reliability the buyer sees. Value pricing: quality compared with price.",
     "\"service/warranty\" vs \"quality for price\""
    ],
    [
     "Going rate vs value pricing",
     "Going rate copies the competitor's price. Value pricing compares your quality with your price.",
     "\"competitor\" vs \"quality\""
    ],
    [
     "Menu cost vs search cost vs transaction cost",
     "Menu cost = cost of announcing a new price. Search cost = cost of finding a seller. Transaction cost = all costs of doing a deal (includes both).",
     "\"announce\" vs \"find\" vs \"all of it\""
    ],
    [
     "Price uncertainty vs demand volatility",
     "Uncertainty = not knowing the price others will accept. Volatility = demand going up and down quickly.",
     "\"not knowing\" vs \"swinging\""
    ],
    [
     "Dynamic pricing success vs failure stories",
     "Success: airline yield management, Priceline (vacant seats), online auctions. Failure: Amazon DVDs (lost loyalty), Buy.com (price war, low or negative profit).",
     "\"gain\" vs \"lost loyalty or price war\""
    ],
    [
     "Condition \"heterogeneous customers\" vs \"cost exceeds revenue\"",
     "First is a success condition (customers differ). Second is NOT a condition (it must not happen).",
     "\"must\" vs \"must not\""
    ],
    [
     "Forward vs reverse vs double auction",
     "Forward: one seller, many buyers. Reverse: one buyer, many sellers. Double: many buyers and many sellers (securities).",
     "\"one seller\" / \"one buyer\" / \"many both sides\""
    ],
    [
     "English vs Dutch auction",
     "English: price goes up. Dutch: price starts high and goes down.",
     "\"up\" vs \"down\""
    ],
    [
     "First-price vs second-price sealed bid (Vickrey)",
     "First-price: winner pays own bid. Second-price (Vickrey): winner pays the second-highest bid.",
     "\"own bid\" vs \"second bid\""
    ],
    [
     "Second-price sealed bid vs all pay",
     "Second-price: only the winner pays, at the second bid. All pay: every bidder pays their bid, win or lose.",
     "\"only winner\" vs \"everybody\""
    ],
    [
     "Single sourcing vs multiple sourcing",
     "Single: one supplier, sorting problem. Multiple: several suppliers, combinatorial problem.",
     "\"one\" vs \"several\""
    ],
    [
     "Multi-unit vs combinatorial vs multi-attribute auction",
     "Multi-unit: many copies of one item. Combinatorial: several different items sold together. Multi-attribute: items scored on several attributes.",
     "\"copies\" / \"bundle\" / \"features\""
    ],
    [
     "Direct vs indirect mechanism",
     "Direct: no feedback during bidding (first-price sealed bid). Indirect: feedback on the state of the auction, such as provisional allocation (English).",
     "\"no feedback\" vs \"feedback\""
    ],
    [
     "Preference structure vs bid structure",
     "Preference: the agent's utility for outcomes (decreasing marginal utility). Bid structure: how flexibly the agent writes a bid (price, quantity, basket).",
     "\"satisfaction\" vs \"how you write the bid\""
    ],
    [
     "Auction issues: strategic vs implementation",
     "Strategic: auction design and business rules. Implementation: decision-model, computation and security.",
     "\"plan\" vs \"build and protect\""
    ]
   ]
  },
  "facts": {
   "head": [
    "Fact",
    "Detail",
    "Memory trick"
   ],
   "rows": [
    [
     "Support",
     "Share of ALL transactions that contain X and Y together",
     "\"Support = all\""
    ],
    [
     "Confidence",
     "Share of transactions with X that also contain Y. Denominator is X alone",
     "\"Confidence = those with X\""
    ],
    [
     "Slide example (support 50%, confidence 50%)",
     "Five transactions: 10 {A,B,D}, 20 {A,C,D}, 30 {A,D,E}, 40 {B,E,F}, 50 {B,C,D,E,F}. Frequent: A 3, B 3, D 4, E 3, AD 3. Rules: A to D (60%, 100%), D to A (60%, 75%)",
     "3 of 5 = 60%; 3 of 4 = 75%"
    ],
    [
     "Mock 1 Q13 (confidence)",
     "5 transactions. A in 3, D in 4, A and D together in 3. Confidence A to D = 3/3 = 100%",
     "Divide by count of A alone"
    ],
    [
     "Apriori (support count 2 of 4)",
     "L1: A2, B3, C3, E3 (D dropped). L2: AC2, BC2, BE3, CE2. L3: BCE2",
     "Count the receipts"
    ],
    [
     "Rules with 100% confidence (slide 38)",
     "B to E, E to B, CE to B, BC to E (four rules)",
     "\"Four rules at 100 percent\""
    ],
    [
     "Pearson-based prediction (Mock 1 Q8)",
     "Active average 3.0. Neighbors: (sim 0.5, avg 4.0, rating 5) and (sim 0.25, avg 3.0, rating 2). Prediction = 3.0 + (0.5 x 1 - 0.25 x 1) / 0.75 = 3.33",
     "Add deviations, divide by total similarity"
    ],
    [
     "Item-item prediction (Mock 1 Q10)",
     "X: rating 5, sim 0.6. Y: rating 3, sim 0.3. (3.0 + 0.9) / 0.9 = 4.33",
     "Weighted average"
    ],
    [
     "Amazon response time",
     "Many applications need results in no more than half a second",
     "\"Half a second\""
    ],
    [
     "Amazon scale",
     "Tens of millions of customers, millions of catalog items",
     "\"Tens of millions, millions\""
    ],
    [
     "FCC spectrum auctions",
     "87 since 1994, raised over $60 billion for the US",
     "\"87 since 94, $60 billion\""
    ],
    [
     "New Zealand spectrum auction (1990)",
     "Vickrey (second-price): winning bid NZ$100,000, second-highest NZ$6. Winner pays NZ$6",
     "\"Winner pays the runner-up\""
    ],
    [
     "Auction history",
     "At least 500 BC; from Babylonian auction to eBay",
     "\"500 BC to eBay\""
    ],
    [
     "Economists began 1970",
     "After OPEC raised prices; US Department of the Interior auctioned coastal drilling rights",
     "\"1970: oil and drilling\""
    ],
    [
     "Mock 3 Q10 (markup)",
     "Unit cost $60, markup on sales 25%. Price = 60 / (1 - 0.25) = $80",
     "Divide by (1 - markup)"
    ],
    [
     "Mock 3 Q11 (target return)",
     "Unit cost $40, invested capital $500,000, desired return 20%, units 10,000. Price = 40 + (0.20 x 500,000)/10,000 = $50",
     "Cost + return per unit"
    ],
    [
     "Fixed pricing history",
     "Fixed pricing about 100 years old; dynamic pricing as old as civilization",
     "\"Fixed is the new kid\""
    ],
    [
     "Equilibrium",
     "Quantity supplied equals quantity demanded",
     "\"Supply meets demand\""
    ],
    [
     "Menu cost",
     "Cost of informing customers about a changed price",
     "\"Menu = announcement\""
    ],
    [
     "Demographic counting-based threshold",
     "Category value 1 if the user's count of favourite items in it reaches threshold w",
     "\"At least w gives 1\""
    ],
    [
     "Slide 39 Top-M users",
     "Left blank on the slide (\"?\")",
     "Not defined in the lecture"
    ],
    [
     "Slide 27 assignment",
     "Item-item CF on a buyer-item matrix to recommend one more item for buyer a who has i4 in the cart. The matrix did not extract cleanly from the text copy, so no worked answer is given here",
     "Use the item-item method: similarities, then weighted average"
    ]
   ],
   "extra": [
    {
     "title": "Lists (with memory tricks)",
     "head": [
      "List",
      "Items",
      "Memory trick"
     ],
     "rows": [
      [
       "CF approaches (2)",
       "User-user; item-item",
       "\"Users talk, items table\""
      ],
      [
       "User-user phases (3)",
       "Dimension reduction; neighborhood formation; recommendation generation",
       "\"Shrink, Group, Guess\""
      ],
      [
       "Semi-manual and automatic dimension reduction",
       "Semi-manual: product features, cluster products. Automatic: adjusted product taxonomy, latent semantic indexing",
       "\"Hand or machine\""
      ],
      [
       "Similarity measures (5)",
       "Pearson correlation; constrained Pearson; Spearman rank; cosine; mean-square difference",
       "\"Please Count Silly Cows Monthly\" (P, C, S, C, M)"
      ],
      [
       "Neighborhood methods (3)",
       "Weight threshold; center-based best-k; aggregate-based best-k",
       "\"Cut, Centre, Aggregate\""
      ],
      [
       "Item-item model types (4)",
       "First-order: correlation analysis, linear regression. Higher-order: belief network, association rule mining",
       "\"Simple two, complex two\""
      ],
      [
       "Association mining approaches (3)",
       "Apriori algorithm; frequent pattern growth; vertical data format",
       "\"A, F, V\" (Apriori, FP growth, Vertical)"
      ],
      [
       "Apriori steps",
       "Scan once for C1, prune, L1; join; prune; count; repeat until nothing is left",
       "\"Scan, Join, Prune, Count\""
      ],
      [
       "Frequent-pattern applications (6)",
       "Basket data analysis; cross-marketing; catalog design; sale campaign analysis; web log (click stream) analysis; DNA sequence analysis",
       "\"Baskets, Cross, Catalog, Sale, Clicks, DNA\""
      ],
      [
       "Demographics steps (3)",
       "Data transformation; category preference model; recommendation generation",
       "\"Change, Model, Recommend\""
      ],
      [
       "Data transformation methods (3)",
       "Counting-based (frequency threshold); expected value; statistics-based",
       "\"Count, Expect, Stats\""
      ],
      [
       "Personalization types (3)",
       "Content; structure; layout, presentation, media format",
       "\"What, How organised, How it looks\""
      ],
      [
       "Personalization advantages (5)",
       "Increasing site usability; converting users to buyers; retaining current customers; re-engaging customers; penetrating new markets",
       "\"Use, Convert, Retain, Re-engage, Penetrate\""
      ],
      [
       "Personalization approaches (2)",
       "Buyer-driven (buyer decides); seller-driven (seller decides; cross-selling, up-selling, target advertising)",
       "\"Who writes the rules\""
      ],
      [
       "Personalization process (4)",
       "Data collection; preprocessing; user profiling; personalized output",
       "\"Collect, Clean, Profile, Show\""
      ],
      [
       "Data mining tools for profiling (4)",
       "Clustering; classification; association rule mining; sequential pattern discovery",
       "\"Clever Cats Argue Sequentially\" (C, C, A, S)"
      ],
      [
       "Fixed pricing methods (5)",
       "Markup; target return; perceived value; value pricing; going rate",
       "\"Mark, Target, Perceive, Value, Go with the rate\" (M, T, P, V, G)"
      ],
      [
       "Price dispersion (2)",
       "Spatial (several sellers); temporal (over time)",
       "\"Space = shops, Time = seasons\""
      ],
      [
       "Price differentiation degrees (3)",
       "First (perfect; per person; auction); second (non-linear; quantity; volume discounts); third (group; telecom business vs household)",
       "\"Person, Quantity, Group\""
      ],
      [
       "Customized-product differentiation (3 points)",
       "Addition or deletion of attributes; decreased substitutability; customized product (Dell; airline refund policy)",
       "\"Add, Less swappable, Custom\""
      ],
      [
       "Dynamic pricing success stories (3)",
       "Airline yield management; Priceline.com; online auctions",
       "\"Yield, Priceline, Auctions\""
      ],
      [
       "Dynamic pricing failure stories (2)",
       "Amazon.com DVDs (lost loyalty); Buy.com (price competition, low or negative profit)",
       "\"DVD lost loyalty, Buy lost money\""
      ],
      [
       "Conditions for success (6)",
       "Heterogeneous willingness to pay; segmentable market; resale prohibited; segmenting cost below revenue; fairness; sophisticated math models",
       "\"Hetero, Segment, No resale, Cost ok, Fair, Math\""
      ],
      [
       "Models for dynamic pricing (4)",
       "Inventory-based; data-driven; auctions; simulation",
       "\"Stock, Data, Bid, Simulate\""
      ],
      [
       "Eight auction dimensions",
       "Resources; market structure; preference structure; bid structure; bidding rule; matching supply to demand; information feedback; nature of the good",
       "\"Really Mean People Bid Badly, Matching Information Nicely\" (R, M, P, B, B, M, I, N)"
      ],
      [
       "Market structures (3)",
       "Forward (one seller, many buyers); reverse (one buyer, many sellers); double (many buyers and sellers)",
       "\"Forward sells, Reverse buys, Double both\""
      ],
      [
       "Bidding rules (3 groups)",
       "Ascending (English); descending (Dutch); sealed bid (first-price, second-price/Vickrey)",
       "\"Up, Down, Sealed\""
      ],
      [
       "Payment rules (3)",
       "First price; second price; all pay",
       "\"Own, Runner-up, Everybody\""
      ],
      [
       "Information feedback (2)",
       "Direct (no feedback; first-price sealed bid); indirect (feedback: price signal, provisional allocation; English)",
       "\"Direct = silent, Indirect = talks\""
      ],
      [
       "Winner determination (2)",
       "Single sourcing = sorting; multiple sourcing = combinatorial (up to NP-hard)",
       "\"One vendor sorts, many combine\""
      ],
      [
       "Auction issues (2 groups)",
       "Strategic (economic, business); implementation (decision modeling, computation, security)",
       "\"Plan and Build\""
      ]
     ]
    },
    {
     "title": "Definitions and quotes from the slides",
     "head": [
      "Term",
      "Slide wording (close paraphrase)",
      "Memory trick"
     ],
     "rows": [
      [
       "Frequent pattern",
       "\"A pattern (a set of items, subsequences, substructures, etc.) that occurs frequently in a data set\"",
       "Often seen together"
      ],
      [
       "Association rule",
       "Find all rules X to Y with minimum support and confidence",
       "X then Y, with two thresholds"
      ],
      [
       "Apriori principle",
       "\"If a set cannot pass a test then all its supersets will also fail the test.\" (anti-monotone)",
       "Failed parent, failed children"
      ],
      [
       "Dynamic pricing",
       "\"Buying and selling of goods and services in free markets where the prices fluctuate in response to changing supply and demand.\"",
       "Prices move with supply and demand"
      ],
      [
       "Market",
       "\"A mechanism through which the buyers and sellers interact to determine the prices and exchange of goods and services.\"",
       "The mandi"
      ],
      [
       "Market equilibrium",
       "\"The price at which the quantity supplied is the quantity demanded.\"",
       "Equal, so the price is right"
      ],
      [
       "Personalization",
       "\"Providing each user with individually tailored Web pages to decrease information overload.\"",
       "Tailored shop window"
      ],
      [
       "Demographics approach",
       "\"Recommends items to a user based on the preferences of the users whose demographics are similar to those of the user.\"",
       "Same kind of people"
      ],
      [
       "Auction",
       "\"An oldest form of market.\"",
       "The oldest market"
      ],
      [
       "Auction (mechanism)",
       "\"A mechanism for negotiation between buyers and seller.\"",
       "Negotiation through bids"
      ],
      [
       "Item-item stability",
       "\"Item-item similarity is more stable than user-user similarity.\"",
       "Items change slowly"
      ]
     ]
    },
    {
     "title": "Example companies and cases",
     "head": [
      "Name",
      "What it illustrates",
      "Memory trick"
     ],
     "rows": [
      [
       "Amazon.com (item-item CF)",
       "Offline similar-items table, real-time online recommendations, scale of tens of millions of customers; belongs to item-item",
       "\"Amazon is item-item\""
      ],
      [
       "Amazon.com (email and homepage)",
       "Recommendations used as a targeted marketing tool in emails and on the homepage",
       "\"Amazon emails\""
      ],
      [
       "Amazon.com (DVDs under dynamic pricing)",
       "Failure story: lost customer loyalty",
       "\"Amazon DVD lesson\""
      ],
      [
       "Buy.com",
       "Failure story: price competition and low or negative profit",
       "\"Buy lost the price war\""
      ],
      [
       "Priceline.com",
       "Success story: negotiates with airlines to fill vacant seats at marginal revenue",
       "\"Priceline fills seats\""
      ],
      [
       "Airline industry",
       "Success story: yield management; also product differentiation by refund policy",
       "\"Airlines yield\""
      ],
      [
       "Dell",
       "Differentiation by customizing computer features",
       "\"Dell customizes\""
      ],
      [
       "Telecom pricing (business vs household)",
       "Third-degree price differentiation by group",
       "\"Telecom groups\""
      ],
      [
       "FCC (US)",
       "Radio spectrum auctions since 1994, $60 billion+",
       "\"FCC airwaves\""
      ],
      [
       "New Zealand (1990)",
       "Vickrey auction with NZ$100,000 and NZ$6",
       "\"NZ pays the runner-up\""
      ],
      [
       "US Department of the Interior",
       "Auctioned coastal drilling rights, which started theory work in 1970",
       "\"Interior, drilling\""
      ],
      [
       "OPEC",
       "Raised oil prices, which led to auction theory studies",
       "\"OPEC prompted economists\""
      ],
      [
       "eBay",
       "End of the history line, online auctions",
       "\"Babylon to eBay\""
      ],
      [
       "Movie example (slide 6)",
       "Grouping of movies into Action, Foreign and Classic meta-items",
       "\"Action, Foreign, Classic\""
      ],
      [
       "Adjusted taxonomy example (slide 9)",
       "Merges Pants + Shirts, Socks + Skincare and Bags + Belts + Wallets to spread transactions evenly",
       "\"Merge the small shelves\""
      ],
      [
       "Target advertising in an electronic storefront",
       "Demographics-based application",
       "\"Target the storefront\""
      ]
     ]
    }
   ]
  },
  "rules": [
   "\"Sparse ratings\", \"scalability\", \"lower-dimensional\" → **dimension reduction** (not neighborhood formation, not prediction).",
   "\"Same product, different price for each buyer\", \"auction\", \"maximum consumer surplus\" → **first-degree differentiation**.",
   "\"Volume discounts\", \"unit price falls with quantity\", \"utility prices\" → **second-degree**.",
   "\"Different unit price for business and household groups\" → **third-degree** (group pricing).",
   "\"Several sellers sell the same item at different prices at one time\" → **spatial price dispersion**. \"Seasonal discounts\" → **temporal**.",
   "\"Items bought together\", \"co-occurrence\", \"basket\" → **association-based** (rules). \"Similar tastes\" → **collaborative filtering**. \"Similar demographics\" → **demographics-based**.",
   "\"Top-N from rules\" → candidates are the **RHS items of rules the user supports**, sorted by **confidence**.",
   "\"Winner determination\": single sourcing → **sorting**; multiple sourcing → **combinatorial**.",
   "\"Secret bids, the winner pays the second-highest bid\" → **Vickrey (second-price sealed bid)**. \"Every bidder pays\" → **all pay**.",
   "\"Price goes up with bids and a reserve price\" → **English auction**. \"Price starts high and falls\" → **Dutch auction**.",
   "\"Several sellers to one buyer\" → **reverse auction**. \"One seller, many buyers\" → **forward auction**. \"Trading securities\" → **double auction**.",
   "\"Menu cost\", \"search cost\", \"physically present in time and space\" → **transaction cost reductions** (E-commerce driver of dynamic pricing)."
  ]
 },
 {
  "week": 12,
  "title": "Economics of Auctions, Winner Determination and Online Auction Issues",
  "mix": {
   "head": [
    "These look alike",
    "How to tell them apart",
    "Tie-breaker word"
   ],
   "rows": [
    [
     "Efficient vs optimal auction",
     "Efficient maximizes social welfare (sum of surplus). Optimal maximizes the seller's expected revenue (uses reserve price or entry fee).",
     "\"social welfare\" vs \"seller revenue\""
    ],
    [
     "Pareto efficiency vs profit maximization",
     "Pareto: the item goes to whoever needs it most, even if they do not pay the most. Profit: the item goes to the highest payer.",
     "\"needs it most\" vs \"pays most\""
    ],
    [
     "Private value vs common value vs interdependent value",
     "Private: each has its own value. Common: one true value. Interdependent: each has an estimate that others' bids can change.",
     "\"own\" / \"one true\" / \"estimate that moves\""
    ],
    [
     "Symmetric vs asymmetric private value",
     "Symmetric: all bidders draw from the same distribution. Asymmetric: they do not.",
     "\"same distribution\""
    ],
    [
     "Common value vs private value (Bank Q5 trap)",
     "Common: same value for all. Private: values differ.",
     "\"same for all\" vs \"differ\""
    ],
    [
     "Reserve price vs minimum bid increment",
     "Reserve: secret minimum price for the seller to sell. Increment: the step size each new bid must rise by.",
     "\"floor\" vs \"step\""
    ],
    [
     "Reserve price vs buy-now price",
     "Reserve: the seller's secret floor. Buy-now: a fixed price that ends the auction immediately.",
     "\"floor\" vs \"instant buy\""
    ],
    [
     "Maximum bid vs proxy bid",
     "Maximum bid: the limit a bidder enters. Proxy bid: the bid eBay places automatically for the bidder.",
     "\"limit\" vs \"placed for you\""
    ],
    [
     "Revenue equivalence vs interdependence results",
     "Revenue equivalence holds under the basic assumptions (all formats give the same revenue). Under interdependence, English usually gives more.",
     "\"same assumptions\" vs \"information\""
    ],
    [
     "Winner's curse vs shill bidding",
     "Winner's curse: honest winner overpays because the estimate was too high. Shill bidding: a fake bidder raises the price on purpose.",
     "\"honest mistake\" vs \"planted bidder\""
    ],
    [
     "Truthful bidding vs shading",
     "In a second-price auction bid the true value (dominant). In a first-price auction you usually shade below it.",
     "\"second price: true value\""
    ],
    [
     "First-price vs second-price vs English",
     "First-price: winner pays own bid (no info during bidding). Second-price: winner pays second-highest. English: price rises, bidders see the state.",
     "\"own\" / \"second\" / \"rising\""
    ],
    [
     "Divisible vs indivisible bids",
     "Divisible: partial quantity allowed (sorting; last bid partly filled). Indivisible: all or nothing (knapsack).",
     "\"partial\" vs \"whole or nothing\""
    ],
    [
     "Price schedule vs fixed price bid",
     "Price schedule: the unit price depends on the quantity band (volume discounts). Fixed price: one price per unit.",
     "\"bands\" vs \"one price\""
    ],
    [
     "Simple sorting vs knapsack vs set packing vs multiple-choice knapsack",
     "Sorting: one item, highest price. Knapsack: indivisible, limited quantity. Set packing: bundles, each item once. Multiple-choice knapsack: one band per supplier.",
     "\"one item\" / \"whole limit\" / \"disjoint bundles\" / \"one band per supplier\""
    ],
    [
     "Forward vs reverse multi-unit",
     "Forward: maximize selling price. Reverse: minimize procurement cost.",
     "\"sell high\" vs \"buy low\""
    ],
    [
     "Single sourcing vs multiple sourcing",
     "Single: one supplier covers all, a sorting problem. Multiple: several suppliers, a combinatorial problem.",
     "\"one vendor\" vs \"several vendors\""
    ],
    [
     "Set packing vs set covering",
     "Packing: pick disjoint bundles to maximize (each item once). Covering: cover all items with the fewest bundles.",
     "\"disjoint\" vs \"cover all\""
    ],
    [
     "Continuous vs clearinghouse (call) double auction",
     "Continuous: clears as orders arrive. Clearinghouse: clears at set times.",
     "\"as it comes\" vs \"at set times\""
    ],
    [
     "Double auction vs forward auction",
     "Double: many buyers and many sellers. Forward: one seller, many buyers.",
     "\"both sides many\" vs \"one seller\""
    ],
    [
     "Bilateral negotiation vs web-based sales auction",
     "Bilateral: one buyer and one seller. Sales auction: one seller, many buyers.",
     "\"one buyer\" vs \"many buyers\""
    ],
    [
     "Web-based sales vs web-based procurement",
     "Sales: one seller sells to many buyers (highest price wins). Procurement (reverse): one buyer buys from many sellers (lowest price wins).",
     "\"highest wins\" vs \"lowest wins\""
    ],
    [
     "C2C / B2C vs C2B / B2B",
     "C2C and B2C sit in the sales auction box (one seller). C2B and B2B sit in the procurement box (one buyer).",
     "\"seller-side\" vs \"buyer-side\""
    ],
    [
     "Multiple bidding vs shill bidding",
     "Multiple bidding: one bidder uses many identities (bidder-induced). Shill bidding: a fake bidder raises the price (auctioneer-induced).",
     "\"bidder\" vs \"auctioneer\""
    ],
    [
     "Triangulation vs fee stacking",
     "Triangulation: stolen credit card buys goods that are resold. Fee stacking: hidden charges keep being added.",
     "\"stolen card\" vs \"hidden charges\""
    ],
    [
     "Non-delivery vs misrepresentation",
     "Non-delivery: nothing arrives. Misrepresentation: the item arrives but is not as described.",
     "\"nothing arrives\" vs \"wrong item\""
    ],
    [
     "Black-market goods vs misrepresentation",
     "Black-market: illegal copies, no warranty. Misrepresentation: genuine but misdescribed item.",
     "\"illegal\" vs \"misdescribed\""
    ],
    [
     "Dutch auction (traditional) vs eBay Dutch-type",
     "Traditional Dutch: price falls until accepted. eBay's Dutch-type: a multi-unit auction with volume discounts (not the same thing).",
     "\"falling price\" vs \"volume discount\""
    ],
    [
     "English vs eBay format",
     "eBay is a hybrid of English and second-price, with a fixed seller-set end time. Pure English has no hybrid rule.",
     "\"hybrid\" vs \"pure\""
    ],
    [
     "Sniper vs late bidder",
     "Sniper: single bid in the final moments. Late bidder: single bid late, not in the final moments.",
     "\"final moments\" vs \"late in the auction\""
    ],
    [
     "Skeptic vs unmasking",
     "Both are multiple bid strategies. Skeptic tests the market with bids. Unmasking bids to reveal others' values.",
     "\"test\" vs \"reveal\""
    ],
    [
     "Evaluator vs sniper",
     "Evaluator: single bid after evaluating the item. Sniper: single bid at the very end.",
     "\"evaluate\" vs \"final seconds\""
    ],
    [
     "Market maker vs auctioneer",
     "Market maker: disassembles and reassembles bundles in a double auction. Auctioneer: runs the auction and sets rules.",
     "\"bundles\" vs \"rules\""
    ],
    [
     "Divisibility vs homogeneous goods",
     "Divisibility: a fraction of a bid can be filled. Homogeneous: all traded units are identical.",
     "\"fraction\" vs \"identical\""
    ]
   ]
  },
  "facts": {
   "head": [
    "Fact",
    "Detail",
    "Memory trick"
   ],
   "rows": [
    [
     "Auction fraud share",
     "60 percent of all internet fraud complaints (IFCC)",
     "\"Six in ten\""
    ],
    [
     "Efficiency measure",
     "Social welfare = sum of players' surplus",
     "\"Welfare = all players added\""
    ],
    [
     "Seller's optimal tools",
     "Reserve price or entry fee",
     "\"Floor or fee\""
    ],
    [
     "Expected payoff (two bidders, second price)",
     "prob[b1 ≥ b2] x (v1 − b2)",
     "\"Win chance times gain\""
    ],
    [
     "Truthful bid",
     "Bid = true value v1 is dominant in second-price",
     "\"Bid what it is worth\""
    ],
    [
     "Two-bidder rule",
     "If v1 > b2 bid high (b1 = v1). If v1 < b2 bid low, to avoid winning (still b1 = v1)",
     "\"Truth wins both ways\""
    ],
    [
     "Expected second-highest value (uniform 50 to 100)",
     "50 + 50 x (n − 1)/(n + 1): 66.7 (n = 2), 75 (n = 3), 80 (n = 4)",
     "\"More bidders, smaller gains\""
    ],
    [
     "Divisible example (slide 26)",
     "Sorted: 30(30), 25(20), 20(30), 15(20 of 60). 100 units sold. Revenue 2,300",
     "Last bid partly filled"
    ],
    [
     "Indivisible example (slide 27)",
     "Best set (30,30), (20,30), (25,20) = 80 units. Revenue 2,000",
     "\"Whole or nothing: knapsack\""
    ],
    [
     "Two-supplier tonnes (Mock 2 Q6)",
     "60 tonnes: S1 30 to 40 band at $40 x 30 = $1,200. S2 30 to 40 band at $50 x 30 = $1,500. Total $2,700",
     "One band per supplier"
    ],
    [
     "Bundle example (Mock 2 Q10)",
     "Best disjoint choice {A,B} 50 + {C,E} 200 = 250",
     "Disjoint bundles, each item once"
    ],
    [
     "Double auction surplus (Mock 2 Q12)",
     "Asks 3, 5, 6, 9; bids 10, 8, 4, 2. Surplus 7 + 3 = 10 (other pairs lose money)",
     "Match high bid with low ask"
    ],
    [
     "Vickrey / second-price with reserve",
     "A reserve price lets second-price become optimal",
     "\"Second price needs a reserve\""
    ],
    [
     "Revenue equivalence",
     "Holds only under basic assumptions",
     "\"Same rules, same money\""
    ],
    [
     "eBay current ask (Mock 3 Q11)",
     "Second-highest maximum ($70) + increment ($1) = $71",
     "\"Second plus a step\""
    ],
    [
     "Second-price online",
     "\"Has become an important option\" online",
     "\"Second price is back online\""
    ],
    [
     "Double auction history",
     "Used in financial institutions for over a hundred years (NYSE)",
     "\"Over a century\""
    ],
    [
     "Trade decision",
     "A trade is worth making only if bid ≥ ask",
     "\"Bid beats ask\""
    ],
    [
     "Divisible bid partial fill",
     "Last chosen bid gets a partial allocation",
     "\"Last one gets leftovers\""
    ]
   ],
   "extra": [
    {
     "title": "Lists (with memory tricks)",
     "head": [
      "List",
      "Items",
      "Memory trick"
     ],
     "rows": [
      [
       "Valuation models (3)",
       "Private value; common value; interdependent value",
       "\"Own, One, Estimate\""
      ],
      [
       "Design goals (2)",
       "Pareto efficiency; profit maximization",
       "\"Need it most vs pay most\""
      ],
      [
       "Three popular mechanisms",
       "First price; second price; English",
       "\"First, Second, English\""
      ],
      [
       "Basic model assumptions (4)",
       "n bidders; independent identical values; risk neutral; no collusion",
       "\"Nobody Is Really Naughty\" (N, I, R, N)"
      ],
      [
       "Relaxed assumptions (3)",
       "Risk aversion; asymmetric valuations; reputation effect",
       "\"Worried, Unequal, Famous\""
      ],
      [
       "Ways to raise revenue (2)",
       "More bidders; reserve price",
       "\"Crowd and Cut-off\""
      ],
      [
       "Winner determination by format (6)",
       "One item (sort); divisible (sort, partial); indivisible (knapsack); price schedule (multiple-choice knapsack); bundles (set packing); double (surplus)",
       "\"Sort, Sort, Knap, Band, Pack, Match\""
      ],
      [
       "Side constraints (4 on slide 30)",
       "Number of winning suppliers; budget limit on trades; market share; reservation prices",
       "\"Number, Budget, Market, Reserve\""
      ],
      [
       "Slide 24 extra constraints",
       "Representation constraints; volume discounts",
       "\"Represent, Discount\""
      ],
      [
       "Double auction formulation (3)",
       "Aggregation; divisibility; homogeneous or heterogeneous goods",
       "\"Add, Divide, Same?\""
      ],
      [
       "Online auction types (4)",
       "Bilateral negotiation; web-based sales (1 to many); web-based procurement reverse (many to 1); web-based exchange (many to many)",
       "\"One-One talk; One-Many sells; Many-One buys; Many-Many trades\""
      ],
      [
       "Online design issues (4)",
       "Mechanism choice; bid constraints; auction duration; complex formats and quick response",
       "\"Mechanism, Bid limits, Duration, Speed\""
      ],
      [
       "Bid constraints (4)",
       "Minimum bid (reserve); maximum bid; buy-now price; ending rules",
       "\"Min, Max, Buy, End\""
      ],
      [
       "Business integration (5)",
       "B2C surplus; B2C regular channel; B2B surplus; B2B procurement; auction intermediaries",
       "\"Surplus, Channel, Surplus-B2B, Procure, Middle\""
      ],
      [
       "Auction fraud categories (6)",
       "Non-delivery; misrepresentation; triangulation; fee stacking; black-market goods; multiple bidding and shill bidding",
       "\"Never Mess Triangles, Fine Black Shirts\" (N, M, T, F, B, S)"
      ],
      [
       "Reasons cheating thrives (4)",
       "Cheap pseudonyms; greater information asymmetry; lack of personal contact; tolerance of bidders",
       "\"Cheap, Asymmetric, Lonely, Tolerant\""
      ],
      [
       "Cheating by induced party",
       "Bidder: multiple bidding, rings. Auctioneer: shill bidding",
       "\"Bidder: many and rings; Auctioneer: shill\""
      ],
      [
       "eBay models (4)",
       "Standard; reserve price; buy it now; Dutch (multi-unit, volume discount)",
       "\"Standard, Reserve, Buy-now, Dutch\""
      ],
      [
       "Data available to an eBay bidder (7)",
       "Item description; number of bids; bidder IDs; time and amount of each bid; time remaining; reserve met or not; current ask price",
       "\"Item, Count, IDs, Times, Clock, Reserve, Ask\""
      ],
      [
       "Bidding strategies (5)",
       "Single bid: evaluator, late bidder, sniper. Multiple bids: skeptic, unmasking",
       "\"Eva Loves Sniping; Skeptics Unmask\" (E, L, S; S, U)"
      ]
     ]
    },
    {
     "title": "Definitions and quotes from the slides",
     "head": [
      "Term",
      "Slide wording (close paraphrase)",
      "Memory trick"
     ],
     "rows": [
      [
       "Auction design problem",
       "\"Designing auctions rules with some desirable property to satisfy the auctioneers need\"",
       "Rules with a purpose"
      ],
      [
       "Pareto efficiency",
       "\"The item under consideration goes to the person who needs it most (he may not pay the highest amount)\"",
       "Need beats money"
      ],
      [
       "Efficient design",
       "\"Aims to maximize the system welfare, whereas the optimal design aims to maximize the seller's individual revenue\"",
       "Welfare vs wallet"
      ],
      [
       "Bayesian game",
       "\"Bidders are the players. The problem is to find the equilibrium.\"",
       "Players and equilibrium"
      ],
      [
       "Revenue equivalence theorem",
       "\"Under this assumption all the basic auction formats are efficient and generate same revenue\"",
       "Same rules, same money"
      ],
      [
       "Winner's curse",
       "\"The winner curse takes place when winner pays too much, due to their failure to anticipate and correct their bidding strategy\"",
       "Too much, too late"
      ],
      [
       "Shaving",
       "\"To correct winner's curse bidders have to shave their bids further\"",
       "Shave the bid"
      ],
      [
       "Set packing",
       "\"Given a set of subsets S = S1, ..., Sm of the universal set U, what is the largest number of mutually disjoint subsets from S?\"",
       "Disjoint boxes"
      ],
      [
       "Double auction",
       "\"A multiple buyer and multiple seller auction\"",
       "Both sides many"
      ],
      [
       "Market surplus",
       "\"The difference between the bids and asks\"",
       "Bid minus ask"
      ],
      [
       "Online auction issue",
       "\"Currently the English auction is the dominant mechanism on the Internet\"",
       "English rules online"
      ],
      [
       "eBay format",
       "\"An ascending-bid format which is a hybrid of English and second price auction\"",
       "Hybrid with a fixed end"
      ],
      [
       "eBay proxy",
       "\"The proxy mechanism allows a bidder to submit a maximum bid with a guarantee that eBay will raise the bidder's active offer automatically\"",
       "Auto raise to your max"
      ],
      [
       "Auction fraud share",
       "\"Auction frauds constitute the largest part of all Internet frauds (60%)\"",
       "60 percent"
      ],
      [
       "Triangulation",
       "\"The perpetrator buys items from an online merchant using stolen credit card number and then sells them to unsuspecting buyers\"",
       "Stolen card, resold"
      ],
      [
       "Fee stacking",
       "\"Fee stacking occurs when a seller keeps adding hidden charges\"",
       "Hidden charges"
      ]
     ]
    },
    {
     "title": "Example companies and cases",
     "head": [
      "Name",
      "What it illustrates",
      "Memory trick"
     ],
     "rows": [
      [
       "New York Stock Exchange",
       "Double auction used for over a hundred years",
       "\"NYSE = double auction\""
      ],
      [
       "eBay",
       "All auctions use ascending bids, a hybrid of English and second-price; proxy bidding; buy-now; reserve; Dutch-type multi-unit",
       "\"eBay is the hybrid\""
      ],
      [
       "Internet Fraud Complaint Center (IFCC)",
       "Source of the 60 percent auction-fraud figure",
       "\"60 percent IFCC\""
      ],
      [
       "Oil drilling rights (common value example)",
       "Each firm has an estimate of one true value; winner's curse risk",
       "\"Drilling = common value\""
      ],
      [
       "Offshore drilling rights (Mock 1 Q14)",
       "Winner's curse example in a common-value setting",
       "\"Offshore = winner's curse\""
      ],
      [
       "Rare painting auction (Mock 3 Q1)",
       "Web-based sales auction (one seller, many buyers)",
       "\"Painting = one seller\""
      ],
      [
       "Lowest price wins (Mock 3 Q2)",
       "Web-based procurement (reverse) auction",
       "\"Lowest wins = reverse\""
      ],
      [
       "Stolen credit card (triangulation)",
       "Fraud: buy with a stolen card, resell to victims",
       "\"Stolen card, sold again\""
      ],
      [
       "Pirated software, audio and movie CDs, games",
       "Black-market goods fraud",
       "\"Pirates\""
      ],
      [
       "Surplus inventory disposal (B2C surplus auctions)",
       "A firm clears extra stock through auctions",
       "\"Clear the stock\""
      ]
     ]
    },
    {
     "title": "Double auction equilibrium (slide 32) and the sample data",
     "head": [
      "Sellers' asks (low to high)",
      "Buyers' bids (high to low)",
      "Trade?"
     ],
     "rows": [
      [
       "3",
       "10",
       "Yes, surplus 7"
      ],
      [
       "5",
       "8",
       "Yes, surplus 3"
      ],
      [
       "6",
       "4",
       "No (bid below ask)"
      ],
      [
       "9",
       "2",
       "No (bid below ask)"
      ]
     ]
    }
   ]
  },
  "rules": [
   "\"Needs it most, even if they do not pay the most\" → **Pareto efficiency**. \"Highest expected profit to the seller\" → **profit maximization**.",
   "\"Maximize social welfare\" → **efficient**. \"Maximize seller's expected revenue with a reserve or entry fee\" → **optimal**.",
   "\"Same value for all, only estimates\" → **common value**. \"Each participant has a potentially different value\" → **private value**.",
   "\"Risk-neutral, independent identical values, no collusion\" → **basic assumptions**, which give **revenue equivalence**.",
   "\"Second-price auction with independent private values\" → **bid your true value** (dominant strategy).",
   "\"Reserve price\" → excludes bidders below the reserve, and raises revenue.",
   "\"Estimate, win, pay too much\" → **winner's curse**; correction is **shave the bid further**.",
   "\"English auction likely earns more under interdependence\" → English beats first and second price.",
   "\"Single item, price-only bids\" → **simple sorting** (Mock 2 Q1). \"Indivisible multi-unit\" → **knapsack**. \"Bundles each item once\" → **set packing**. \"One band per supplier\" → **multiple-choice knapsack**.",
   "\"Double auction, maximize surplus\" → **match highest bids with lowest asks** while bid ≥ ask.",
   "\"One seller, many buyers\" → **web-based sales auction**. \"One buyer, many sellers, lowest wins\" → **web-based procurement**.",
   "\"Stolen card, resold\" → **triangulation**. \"Hidden charges\" → **fee stacking**. \"Fake bidder raises price\" → **shill bidding**.",
   "\"Maximum bid, eBay raises automatically\" → **proxy bidding**. \"Current ask after two proxies\" → **second-highest max + increment**.",
   "\"Waits to bid in the final moments\" → **sniper**."
  ]
 }
];
