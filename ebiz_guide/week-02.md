# Week 2 — Business Processes, Information Systems, Decision Support and ERP

## In one breath

A business runs on processes: chains of linked tasks that move materials, information and money from one step to the next. Some processes stay inside one firm (across departments); others cross the boundary to suppliers and customers. Information systems (IS) are the tools that record, process and report on those processes, and they come in types that match the level of the manager who uses them. Decision support systems help managers make choices, and ERP (Enterprise Resource Planning) puts every function on one shared system.

**The big analogy:** a busy restaurant. The order slips and the billing counter are the transaction system (TPS). The owner's end-of-day summary is the MIS. "What if we raise the paneer price by Rs 20?" is a DSS. The head chef's rulebook for handling a complaint is an expert system. The owner's yearly plan for opening a second branch is an ESS. One shared order board that the kitchen, the billing counter and the stores all read from is ERP.

## Mind map

```text
WEEK 2: BUSINESS PROCESSES, IS, DECISION SUPPORT, ERP
│
├── Business processes
│   ├── Set of related tasks for one objective
│   ├── Flows of material, information, money
│   ├── Intra-organisational (functional or cross-functional)
│   └── Inter-organisational (procurement across firm and supplier)
│
├── Stakeholders and management levels
│   ├── Internal: employees, management, shareholders
│   ├── External: customers, creditors, suppliers
│   ├── Senior (top), middle, operational (first-level) management
│   └── Knowledge workers, data workers, production or service workers
│
├── Digital firm, reengineering, improvement
│   ├── Digital firm (ICT-enabled relationships)
│   ├── Business process automation cycle
│   ├── Reengineering (Michael Hammer, 1990)
│   └── Continuous improvement, TQM, DMAIC (six sigma)
│
├── Data, information, knowledge, wisdom
│   ├── Data: raw symbols and facts
│   ├── Information: data with meaning (who, what, where, when)
│   ├── Knowledge: patterns and rules (how)
│   └── Wisdom: evaluated understanding (why)
│
├── Systems and information systems
│   ├── System: inputs, processing, outputs, feedback
│   └── Information system: collect, process, store, distribute
│
├── IS resources
│   ├── People, hardware, software, data, network
│   └── Information products (the output)
│
├── Types of IS
│   ├── Operations support: TPS, process control
│   └── Management support: MIS, DSS, ESS
│
├── Reports and decision support
│   ├── Periodic, exception, demand reports
│   ├── MIS versus DSS
│   └── What-if, sensitivity, goal-seeking, optimisation
│
├── Analytics and data-driven support
│   ├── OLAP, GIS (geographic information system), data mining
│   ├── Big data analytics (five Vs)
│   └── Descriptive, predictive, prescriptive analytics
│
├── Expert systems and knowledge management
│   ├── Expert system components
│   ├── Case, frame, object, rule representation
│   └── Enterprise knowledge portal, knowledge management systems
│
├── Decision making and information quality
│   ├── Four stages of decision making
│   ├── Structured, semi-structured, unstructured decisions
│   └── Quality: time, content and form dimensions
│
└── ERP
    ├── Single integrated suite across functions
    ├── Modules: finance, manufacturing, HR, sales and marketing
    ├── Reported benefits, cost components, causes of failure
    └── Trends and leading vendors (SAP, Oracle, Microsoft, Infor)
```

## Concept cards

### Business processes (intra and inter organisational)

**Business process**
- What it is: a set of logically related tasks that realise a specific business objective. It moves workflows of material, information and money (slide 6).
- Think of it as: a dosa order in a restaurant. Waiter, kitchen and billing must act in sequence for one order to be served and paid.
- Spot it in a question: "logically related tasks", "workflow of material, information, money", "specific objective" → business process. Wrong options are usually a single department's budget, a software program, or a list of contacts.

**Intra-organisational business process**
- What it is: a process that stays inside one firm. It is either functional (inside one department) or cross-functional (crosses departments).
- Think of it as: the restaurant's internal workflow. The kitchen and billing never leave the building.
- Spot it in a question: "inside the firm", "sales coordinating with production" (Bank Week 2 Q1, option B).

**Functional business process**
- What it is: a process run by one functional area. Examples on slide 7:
  - Manufacturing and production: assembling the product, checking for quality, producing bills of materials.
  - Sales and marketing: identifying customers, making customers aware of the product, selling the product.
  - Finance and accounting: paying creditors, creating financial statements, managing cash accounts.
  - Human resources: hiring employees, evaluating job performance, enrolling employees in benefit plans.
- Think of it as: one team's own to-do list.
- Spot it in a question: name a task and ask which department owns it. "Enrolling employees in benefit plans" is HR (Mock 1 Q8).

**Cross-functional business process**
- What it is: a process that passes through several functions in sequence, for example an order from sales, through credit checking and invoicing, to manufacturing and shipping (slide 8).
- Think of it as: a wedding: caterer, decorator and photographer each do their part on the same booking.
- Spot it in a question: "passes from sales through credit approval and invoicing, then manufacturing and shipping" (Mock 3 Q6).

**Inter-organisational business process**
- What it is: a process that crosses the firm's boundary, linking the firm with suppliers or customers. The lecture's example is the procurement process: the technical division, the purchasing department and the supplier (slides 9 and 10). Another is a supplier-registration process (slide 9).
- Think of it as: a wholesale order between two shops. Each side must do its part for the goods to move.
- Spot it in a question: "exchanging purchase orders and invoices electronically with suppliers" (Bank Week 2 Q1, answer D). Two different firms must act together.

**Money, material and information flow (slide 11)**
- What it is: a picture of one enterprise. Materials move forward from suppliers through purchasing, production, inventory and sales to the market. Money (green dashed) flows back. Information (pink) flows between management, research and development, marketing, the board, shareholders and auditors.
- Think of it as: a grocery shop. Stock comes in, goes on the shelf, goes to the customer; money comes back the other way; the owner's notes travel to the accountant.
- Spot it in a question: "which flow runs backwards from the market" → money.

### Stakeholders and management levels

**Stakeholders of a company (slides 5 and 12)**
- What it is: anyone with an interest in the firm. Internal stakeholders: employees, management, shareholders (and the business owner). External stakeholders: customers, creditors, suppliers. The wider list on slide 36 also includes government agencies, the community, competitors, financial institutions, labour unions, and stock holders.
- Think of it as: the people around a cricket club: players and coaches (internal), fans, sponsors, the ground's owner (external).
- Spot it in a question: "internal stakeholder" → employees (Mock 2 Q1). Customers, creditors and government are external.

**Senior (top) management**
- What it is: makes long-range strategic decisions about products and services and ensures the financial performance of the firm (slide 14). Slide 82 says: formulate strategy, policies, long-term plans and objectives.
- Think of it as: the board of a cricket team deciding the five-year plan.
- Spot it in a question: "long-range strategic decisions", "financial performance of the firm" (Mock 2 Q2).

**Middle management**
- What it is: carries out the programmes and plans of senior management. Slide 14 also groups knowledge workers here: engineers, scientists and architects who design products and create new knowledge.
- Think of it as: the captain who turns the board's plan into the match plan.
- Spot it in a question: "carries out the programs and plans of senior management".

**Operational (first-level) management**
- What it is: monitors the daily activities of the business (slide 15). Data workers (secretaries, clerks) assist with scheduling and communications. Production or service workers actually produce and deliver.
- Think of it as: the shift supervisor at the factory gate.
- Spot it in a question: "responsible for monitoring the daily activities" → operational management (Mock 1 Q5).

**Knowledge workers, data workers, production or service workers**
- What they are: three kinds of people in the firm. Knowledge workers create knowledge (designers, engineers). Data workers handle information (clerks, secretaries). Production or service workers make or deliver the product.
- Think of it as: the architect (knowledge), the office clerk (data), the bricklayer (production).
- Spot it in a question: "scientists or architects who design products" → knowledge workers.

**Information flow in levels of management (slide 82)**
- What it is: intelligence information comes in from the external environment; top managers decide strategy; middle managers turn it into operational plans; first-level managers implement and make short-term decisions. Public information goes out to the environment. Information flows up, down and sideways.
- Think of it as: a news desk. Reporters bring in events, editors plan the next edition, the printing team runs the press.
- Spot it in a question: "intelligence information gathered from the external environment" → top of the pyramid.

### Digital firm, reengineering and improvement

**Digital firm**
- What it is: a firm in which nearly all significant business relationships with customers, suppliers and employees are digitally enabled and mediated (slide 16). It uses ICT for strategic advantage, automates internal and external processes, and reengineers them if necessary.
- Think of it as: a shop whose orders, stock and staff rosters all run on an app.
- Spot it in a question: "nearly all relationships digitally enabled and mediated" → digital firm (Mock 1 Q3). Wrong options: virtual firm, learning organisation, lean enterprise.

**Business process automation**
- What it is: using ICT to transform a business process to make it cost-effective and time-efficient (slide 17). It runs as a cycle: business process modelling → business process analysis → business process optimisation → business process automation. Make, buy or hire decisions, software development and integration are part of it.
- Think of it as: a home renovation. Plan the rooms, look at what needs changing, fix the layout, then build.
- Spot it in a question: "make, buy or hire" → automation (Mock 3 Q7).

**Business process reengineering (Michael Hammer, 1990, HBR)**
- What it is: fundamental rethinking and radical redesign of business processes to get dramatic improvements in cost, quality, service and speed (slide 18). Aims: eliminate repetitive, paper-intensive, bureaucratic tasks; reduce costs significantly; improve product or service quality.
- Think of it as: throwing out the old paper-based file system and designing a new one, not just tidying the cabinet.
- Spot it in a question: "fundamental rethinking", "radical redesign" → reengineering (Mock 1 Q6). Wrong options describe small steps (continuous improvement) or simply automating forms.

**Business process improvement**
- What it is: incremental improvement over time, under a continuous improvement philosophy, total quality management (TQM), and the DMAIC model of Six Sigma (slide 19).
- Think of it as: a bowler who checks every ball and makes one small change at a time.
- Spot it in a question: "gradual improvements through repeated measurement and refinement" → continuous improvement (Bank Week 2 Q3).

**Continuous improvement**
- What it is: a philosophy of small, ongoing improvements to a process.
- Think of it as: a restaurant that tweaks one recipe each week.
- Spot it in a question: "gradual", "repeated measurement", "refinement". Contrast with reengineering, which is radical.

**TQM (Total Quality Management)**
- What it is: a quality-focused improvement philosophy in which everyone in the firm works on quality.
- Think of it as: every staff member checking the food before it goes out.
- Spot it in a question: listed with continuous improvement on slide 19.

**DMAIC (Define, Measure, Analyze, Improve, Control)**
- What it is: a data-driven improvement cycle used in Six Sigma to improve, optimise and stabilise processes (slide 19). Slide 20 shows its links to IS: it provides data, supports business processes and supports decisions. The slide 20 diagram adds the stages from practical problem to statistical problem, statistical solution, practical solution, control plan and results.
- Think of it as: a doctor's routine: define the illness, measure the symptoms, analyse the cause, treat, then monitor the patient.
- Spot it in a question: "which step comes after Measure" → Analyze (Mock 1 Q7). Order: Define, Measure, Analyze, Improve, Control.

**Six Sigma**
- What it is: a quality method built on data and the DMAIC cycle. The lecture uses Six Sigma as the name for the DMAIC model.
- Think of it as: a very strict quality checklist that works from measured facts.
- Spot it in a question: "DMAIC (Six Sigma)".

### Data, information, knowledge and wisdom (DIKW)

**Data**
- What it is: symbols, facts and signals with no meaning on their own (slide 25). Raw, exists in any form.
- Think of it as: a list of numbers on a receipt with no context.
- Spot it in a question: "raw", "no significance beyond its existence". Example: temperature, humidity and rainfall observations. Coffee-and-cookie example: a single transaction line from the point-of-sale record.

**Information**
- What it is: data that has been processed to be useful. It answers "who", "what", "where" and "when" (slide 26). Example: when the temperature drops to 15 degrees, rain happens.
- Think of it as: a receipt with a name, a date and a total. The data now means something.
- Spot it in a question: "items are purchased together" (slide 30) → information (Bank Week 2 Q4; Mock 1 Q9). Also "who, what, where, when".

**Knowledge**
- What it is: an appropriate collection of information with logical interpretation. It answers "how" questions and needs analytical ability (slide 27). Example: high humidity and a substantial temperature drop means the air cannot hold the moisture, so it rains.
- Think of it as: a rule of thumb you learned at school: "if it is humid and cools down, it rains".
- Spot it in a question: "answers how", "which items are frequently purchased" (slide 30 knowledge level). Mock 1 Q4 → knowledge.

**Wisdom**
- What it is: evaluated understanding. It answers "why" and lets you use understanding to do a higher-level task (slide 28). Example: it is likely to rain, so I carry an umbrella.
- Think of it as: the grandmother who tells you to take an umbrella before you ask why.
- Spot it in a question: "based on previous knowledge and understanding, carries an umbrella" → wisdom (Mock 3 Q8). Slide 30's top level: frequently purchased items must be placed close together to increase sales.

**Understanding (the diagram's axis)**
- What it is: slide 29 shows data rising to information (understanding relations), then knowledge (understanding patterns), then wisdom (understanding principles), with connectedness on the vertical axis.
- Think of it as: a ladder. Each rung needs more thinking than the rung below.
- Spot it in a question: "understanding relations" → information; "understanding patterns" → knowledge; "understanding principles" → wisdom.

### Systems and information systems

**System**
- What it is: a set of interrelated components, with a clearly defined boundary, working together for common objectives. It accepts inputs and produces outputs through an organised transformation process (slide 31). Examples: manufacturing system, business organisation, academic institution (slide 32).
- Think of it as: a cricket team. Players (components), the ground boundary, the aim of winning, the match (transformation), and the result (output).
- Spot it in a question: "clearly defined boundary", "accepting inputs and producing outputs" → system (Mock 3 Q1).

**Inputs, processing, outputs and feedback**
- What they are (slides 32 and 35):
  - Input: capturing and assembling elements that enter the system.
  - Processing: transformation that converts input into output.
  - Output: transferring what is produced to its ultimate destination.
  - Feedback: output returned to the right members to help them evaluate or correct the input.
- Think of it as: a kitchen. Ingredients in, cooking, plates out, and the customer's comment back to the chef.
- Spot it in a question: "converts inputs into outputs" → processing (Mock 1 Q10). "Returned to correct the input" → feedback (Mock 2 Q4).

**Information system (IS)**
- What it is: a set of interrelated components that collect (or retrieve), process, store and distribute information to support decision making and control in an organisation (slide 33). It also helps managers analyse problems, visualise complex subjects and create new products.
- Think of it as: the restaurant's ordering, billing and reporting system all together.
- Spot it in a question: "collect, process, store, and distribute information" → IS (Mock 2 Q3). Wrong options: a robotic assembly line, replacing all workers, storing only structured data.

**Activities performed by an IS (slides 34 and 35)**
- What it is: an IS takes input from the environment (suppliers, customers, regulatory agencies, competitors, stockholders), processes it (classify, arrange, calculate), stores data resources, outputs information products and gets feedback.
- Think of it as: a traffic signal system: sensors in, decisions in the middle, signal out, and results checked.
- Spot it in a question: "which activity" → input, processing, output, storage or feedback.

**Information system connects processes with stakeholders (slide 36)**
- What it is: the IS links economic resources (people, money, material, land, facilities, energy, information) with business processes (market, develop, produce, deliver, support) and goods and services (products, services, payments, contributions, information). It also connects with stakeholders: suppliers, customers, competitors, government agencies, the community, financial institutions, labour unions, and stock holders. A control and feedback loop runs through management.
- Think of it as: a school. Teachers, fees and materials go in; students and certificates come out; parents and the board give feedback.
- Spot it in a question: "connects business processes with stakeholders" → slide 36 framework.

### IS resources

The lecture's pentagon (slide 37) lists five resource types. Remember them as P-H-S-D-N, plus information products as the output.

**People resources**
- What it is: specialists (systems analysts, software developers, systems operators) and end users (anyone who uses the system).
- Think of it as: the cooks (specialists) and the diners (end users) of the restaurant's ordering app.
- Spot it in a question: "systems analysts, software developers, systems operators, and end users" → people resources (Mock 2 Q5).

**Hardware resources**
- What it is: machines (computers, monitors, magnetic disk drives, printers, optical scanners) and storage media (magnetic tape, optical disks).
- Think of it as: the till, the printer and the hard disk.
- Spot it in a question: "magnetic disk drives, printers and optical scanners" → hardware (Mock 3 Q11). Payroll programs are software, not hardware.

**Software resources**
- What it is: programs (system level such as operating systems and compilers; application level such as spreadsheets, word processing and payroll programs) and procedures (data entry, error correction, paycheck distribution, manual procedures).
- Think of it as: the app on the phone plus the written instructions for using it.
- Spot it in a question: "spreadsheet programs, payroll programs, and data entry procedures" → software resources (Mock 1 Q11).

**Data resources**
- What it is: structured data (product descriptions, customer records, employee files, inventory databases) and unstructured data (customer reviews).
- Think of it as: a neat ledger (structured) versus a pile of handwritten notes (unstructured).
- Spot it in a question: "product catalogs, customer and inventory records" → data resources (Bank Week 2 Q5). "Customer reviews" → unstructured (Mock 1 Q12).

**Network resources**
- What it is: communication media, communication processors, network access and control software.
- Think of it as: the roads, traffic police and toll booths between the shops.
- Spot it in a question: "communications media, network access, control software" → network resources.

**Information products**
- What it is: the output: management reports and business documents with text and graphics displays, audio responses and paper forms (slide 43).
- Think of it as: the printed bill and the monthly report.
- Spot it in a question: "management reports and business documents" → information products.

### Types of information system

**Transaction processing system (TPS)**
- What it is: records daily routine transactions, processes data from them, updates operational databases and produces business documents. It lets managers monitor operations and relations with the outside, serves operational levels, and serves predefined, structured decisions (slide 49). Examples: sales and inventory processing, accounting systems. Payroll TPS (slide 50): captures time-card data and outputs paychecks and reports.
- Think of it as: the till and the bill book of a shop: every sale recorded the moment it happens.
- Spot it in a question: "predefined, structured", "operational level", "daily routine transactions" → TPS (Bank Week 2 Q6; Mock 3 Q5).

**Transaction processing cycle (five stages, slide 51)**
- What it is: 1 data entry → 2 transaction processing (batch or online/real-time) → 3 database maintenance (keeps the database up to date) → 4 document and report generation → 5 inquiry processing.
- Think of it as: a bank counter: fill the slip, post the entry, update the account, print the receipt, answer the balance question.
- Spot it in a question: "keeps the underlying database up to date" → database maintenance (Mock 2 Q6).

**Process control system**
- What it is: monitors and controls industrial processes. Examples: petroleum refining, power generation, steel production systems (slide 52).
- Think of it as: the thermostat on a boiler that keeps the temperature in range without a person watching.
- Spot it in a question: "monitor and control industrial processes" → process control (Mock 2 Q7 answer: petroleum refining).

**Management information system (MIS)**
- What it is: serves middle management. It reports on the firm's current performance using TPS data, answers routine questions with predefined procedures and has little analytic capability (slide 53). Examples: sales analysis, production performance, cost trend reporting. Data comes from several TPS (order processing, materials resource planning, general ledger) summarised at the end of each period (slide 54). A sample MIS report shows consolidated sales by product and sales region (slide 55).
- Think of it as: the owner's end-of-day summary, built from the till receipts.
- Spot it in a question: "routine reports from TPS data, predefined answers" → MIS (Mock 2 Q8 answer).

**Decision support system (DSS)**
- What it is: interactive, ad hoc support for managers' decisions. It supports non-routine decisions, for example "What is the impact on production schedule if December sales doubled?" (slide 59). It may be model-driven or data-driven. It serves middle management. Examples: product pricing, profitability forecasting, risk analysis. The lecture's voyage-estimating DSS (slide 60) picks the vessel, the speed and the loading pattern that maximise profit.
- Think of it as: a what-if calculator the manager can keep changing.
- Spot it in a question: "interactive, ad hoc", "non-routine", "model", "best option for a shipping schedule" → DSS (Bank Week 2 Q2, Q7).

**Executive support system (ESS)**
- What it is: supports senior management with non-routine decisions that need judgement and insight, and where no agreed procedure exists. It combines external events (new tax laws, competitors) with summarised internal MIS and DSS data (slide 62). Example: a minute-to-minute view of working capital, accounts receivable, accounts payable, cash flow and inventory. It answers questions like "In what business should we be?" (slide 63).
- Think of it as: the dashboard in the owner's car: fuel, speed, warnings, and the traffic outside.
- Spot it in a question: "minute-to-minute view of financial performance" → ESS (Mock 1 Q14). Slide 88 calls the same layer EIS (executive information system).

**Enterprise collaboration system**
- What it is: supports team, workgroup and enterprise communications and collaboration (slide 64).
- Think of it as: a company WhatsApp group with shared files.
- Spot it in a question: "team, workgroup, communications".

**Knowledge management system**
- What it is: supports the creation, organisation and spread of business knowledge across the firm (slide 65). Examples: intranet access to best business practices, sales proposal strategies, customer problem resolution systems.
- Think of it as: a shared recipe book in the kitchen.
- Spot it in a question: "creation, organisation and dissemination of business knowledge" → knowledge management system (Mock 3 Q2).

**Expert system**
- What it is: a knowledge-based system that gives expert advice and acts as an expert consultant to users (slide 67). Examples: credit application advisor, process monitor, diagnostic maintenance systems. Components are covered under the expert systems branch below.
- Think of it as: a senior doctor's rulebook packed into software.
- Spot it in a question: "expert advice", "consultant", "diagnosis" → expert system (Mock 3 Q5 distractor, Mock 3 Q10).

**Business intelligence (BI)**
- What it is: data-driven decision support using data mining, machine learning, soft computing and big data analytics (slide 71). BI infrastructure (slide 88) gathers data from the business environment into databases, data warehouses and data marts.
- Think of it as: a market research team that reads all the sales, reviews and sensor data for you.
- Spot it in a question: "data mining, machine learning, big data analytics" → business intelligence.

**Summary of who uses which system (slide 89 and the pyramid on slide 87)**
- Strategic level (senior managers): ESS.
- Management level (middle managers): MIS and DSS.
- Operational level (operations personnel, supervisors): TPS.
- The pyramid spans four functional areas: sales and marketing, manufacturing and production, finance and accounting, human resources.
- Spot it in a question: "senior managers" → ESS; "operations personnel, supervisors" → TPS.

### Reports and decision support

**Periodic scheduled reports**
- What it is: the traditional form of information. Pre-specified format, provided on a regular basis, for example daily or weekly sales analysis or monthly financial statements (slide 56).
- Think of it as: the weekly school result card.
- Spot it in a question: "regular basis", "pre-specified format" → periodic (Mock 2 Q9).

**Exception reports**
- What it is: produced only when exceptional conditions occur, or contain only information about exceptions. They reduce information overload. Example: a credit manager sees only customers over their credit limit (slide 57).
- Think of it as: a smoke alarm. Silent until something is wrong.
- Spot it in a question: "only when exceptional conditions occur" → exception report (Mock 1 Q13).

**Demand reports and responses**
- What it is: reports made available on request, using DBMS query languages and report generators, often web-based and customised (slide 58).
- Think of it as: ordering a custom report from a counter when you need it.
- Spot it in a question: "on demand", "customised as per request".

**MIS versus DSS (slide 90)**
- What it is: MIS gives information about the organisation's performance, in periodic, exception or demand form, in a fixed format, made by extracting and manipulating business data. DSS gives decision support techniques to analyse specific problems, interactive inquiries, an ad hoc flexible format, and information produced by analytical modelling of business data.
- Think of it as: MIS is the monthly newspaper; DSS is the analyst you can ask any question.
- Spot it in a question: "fixed format" → MIS; "ad hoc, flexible", "analytical modelling" → DSS.

**Analytical decision support (slides 91 and 92)**
- What it is: four ways of playing with a model:
  - What-if analysis: change selected variables and observe how others change ("What if we cut advertising by 10 percent?").
  - Sensitivity analysis: change one variable repeatedly by a fixed step ("cut advertising by $100 repeatedly").
  - Goal-seeking analysis: keep changing selected variables until one reaches a target ("increase advertising until sales reach $1 million").
  - Optimisation analysis: find the best value given constraints ("best amount of advertising given our budget and media").
- Think of it as: four ways of testing a recipe: change one ingredient to see what happens; keep adding until it tastes right; add until a target is met; find the best mix within the budget.
- Spot it in a question: "repeated change to one variable" → sensitivity (Mock 2 Q10); "target value" → goal-seeking; "best value given constraints" → optimisation (Mock 2 Q14).

**Model-driven versus data-driven DSS (slide 59)**
- What it is: model-driven DSS uses analytical models to answer questions; data-driven DSS uses large amounts of data and tools such as OLAP and data mining.
- Think of it as: a calculator (model) versus a filing cabinet with a search engine (data).
- Spot it in a question: "analytical models" → model-driven; "data warehouse, mining" → data-driven.

**DSS components (slide 61)**
- What it is: three layers:
  - User interface functions: hyperlinked multimedia, 3-D visualisation.
  - Model management functions: analytical modelling, statistical analysis.
  - Data management functions: data extraction, validation, sanitation, integration, replication. These draw on operational, market, sales and customer account data in data marts and other databases.
- Think of it as: a restaurant: the menu (interface), the recipes (models), the pantry (data).
- Spot it in a question: "analytical modelling and statistical analysis" → model management functions (Mock 3 Q9).

### Analytics and data-driven decision support

**OLAP (online analytical processing)**
- What it is: data warehousing plus consolidation, drill-down, and slicing and dicing of data. Applications: marketing and sales analysis, clickstream data, database marketing, budgeting (slide 93).
- Think of it as: a multi-layered cake you cut from different sides: by region, by month, by product.
- Spot it in a question: "drill-down, slicing and dicing", "data warehouse" → OLAP.

**Clickstream data**
- What it is: the trail of pages and clicks a visitor leaves on a website (slide 93).
- Think of it as: the footprints a shopper leaves through the aisles.
- Spot it in a question: "clickstream" in the bank Q9 stem (an analytics example, pointing to data mining).

**GIS (geographic information system) and GPS**
- What it is: maps linked to business data, showing locations and routes. Examples: supply chain and logistics, facility planning (slide 94).
- Think of it as: Google Maps for the warehouse and the delivery van.
- Spot it in a question: "map with business data", "facility planning", "logistics" → GIS.

**Data mining and machine learning**
- What it is: finding patterns in numeric and text data: clustering, classification and association. Examples: cross-selling, product placement, affinity promotion, fraud detection, customer behaviour analysis (slide 95).
- Think of it as: a shopkeeper noticing that milk and bread sell together and moving them next to each other.
- Spot it in a question: "hidden purchasing patterns", "fraud", "cross-selling", "affinity promotion" → data mining (Bank Week 2 Q9; Mock 2 Q11).

**Big data analytics and the five Vs**
- What it is: examining huge data to find hidden patterns, correlations, market trends and customer preferences. The five Vs: Volume, Velocity, Variety, Variability, Value (slide 96). Examples: customer reviews, stock market data, sensor data.
- Think of it as: sorting a flood of cricket match data, from ball-by-ball scores to crowd sensors, to find the strategy that wins.
- Spot it in a question: "five Vs" → Volume, Velocity, Variety, Variability, Value. "Visibility" is a trap (Mock 3 Q3).

**Analytics types: descriptive, predictive, prescriptive (slide 71)**
- What it is: descriptive says what happened; predictive says what will happen; prescriptive says what to do about it.
- Think of it as: a doctor's report (what the illness is), a forecast (how it will progress), a prescription (what medicine to take).
- Spot it in a question: "what should we do" → prescriptive; "what will happen" → predictive.

**Soft computing**
- What it is: part of business intelligence, listed alongside data mining and machine learning on slide 71.
- Think of it as: a flexible problem solver that accepts vague or approximate rules.
- Spot it in a question: listed under business intelligence.

### Expert systems and knowledge management

**Expert system components (slide 68)**
- What it is: the user consults the expert advice screen (workstation). The expert system software has user interface programs and an inference engine program that applies rules to the knowledge base. A development side has a knowledge acquisition program, knowledge engineering and an expert or knowledge engineer who builds the knowledge base.
- Think of it as: a quiz machine. The user asks, the engine reasons with the rulebook, the rulebook was written by a human expert.
- Spot it in a question: "applies stored rules and facts to reach conclusions" → inference engine (Mock 3 Q10). "Stores the expert knowledge" → knowledge base.

**Knowledge representation: case-based reasoning**
- What it is: stores past cases (examples of past performance, occurrences and experiences) and reuses them for new but similar problems (slide 69).
- Think of it as: a doctor who remembers similar patients from last year.
- Spot it in a question: "stores prior experiences and uses them to solve new but similar problems" → case-based reasoning (Bank Week 2 Q8).

**Knowledge representation: frame-based knowledge**
- What it is: knowledge in a hierarchy or network of frames. A frame is a package of data values that describes an entity's attributes (slide 69).
- Think of it as: a student's record card with fixed fields (name, class, marks).
- Spot it in a question: "frame", "hierarchy of frames", "attributes of an entity".

**Knowledge representation: object-based knowledge**
- What it is: knowledge as a network of objects. An object holds data and the methods or processes that act on that data (slide 70).
- Think of it as: a car that carries its own data (fuel, speed) and its own actions (start, brake).
- Spot it in a question: "objects that include data and methods" → object-based.

**Knowledge representation: rule-based knowledge**
- What it is: knowledge as rules and statements of fact in the form "If (condition), Then (conclusion)" (slide 70).
- Think of it as: a traffic rule: if the light is red, then stop.
- Spot it in a question: "if the temperature exceeds 90, then stop the line" → rule-based (Mock 2 Q13).

**Memory trick for the four representations:** Cases are stories, Frames are forms, Objects act, Rules are If-Then.

**Enterprise knowledge portal (slide 66)**
- What it is: a single point of access to corporate data for web users (employees and customers). It has a portal server with a knowledge management engine. It pulls structured sources (ERP, CRM, other databases) and unstructured sources (e-mail groupware, file system documents and presentations, internet, intranet and extranet web pages), plus an enterprise knowledge base. It also offers personalised views of news, collaboration tools and community work areas.
- Think of it as: a company's home screen that shows you the right files for your job.
- Spot it in a question: "single point of access to corporate data" → enterprise knowledge portal.

### Decision making and information quality

**Stages in decision making (slide 75)**
- What it is: four stages: (1) discover, identify and understand the problem (why it exists, where, and what effects it has); (2) identify and explore solutions; (3) choose among the alternatives; (4) make the chosen alternative work and keep monitoring it.
- Think of it as: a patient's treatment: diagnose, list options, pick the medicine, check the recovery.
- Spot it in a question: "after choosing alternatives" → making it work and monitoring it (Mock 3 Q4).

**Decision-making situations (slide 76)**
- What it is: examples of decisions in a firm: decide entrance and exit from a market; design a marketing plan; offer credit to customers and decide special offers.
- Think of it as: the big shop decisions: opening a new branch, planning the festival sale, deciding who gets credit.
- Spot it in a question: "entrance and exit from a market" → top-level decision.

**Structured decision**
- What it is: the procedure can be specified in advance. It is repetitive and routine, and does not need treatment as new each time. Example: inventory reorder decisions (slide 78).
- Think of it as: a canteen that restocks the rice when the bag falls below a set level.
- Spot it in a question: "procedures can be specified in advance", "routine", "reorder" → structured.

**Semi-structured decision**
- What it is: most procedures cannot be specified in advance; only part of the problem has a clear answer from an accepted procedure. Example: which product lines to develop over the next five years (slide 79).
- Think of it as: planning a wedding. Some steps are standard (booking a hall); others need judgement.
- Spot it in a question: "only part of the problem has a clear-cut answer" → semi-structured (Mock 1 Q15).

**Unstructured decision**
- What it is: novel, important and non-routine. No well-understood procedure exists. Many sources of information must be accessed, and the decision often rests on experience. Example: what business should a company be in 10 years from now (slide 80).
- Think of it as: deciding whether to start a completely new kind of shop, using your gut and experience.
- Spot it in a question: "novel, important", "rests on experience" → unstructured (Mock 3 Q13).

**Decision levels and types (slide 82)**
- What it is: top managers face mostly unstructured decisions (market entry and exit). Middle managers face semi-structured ones (a marketing plan). First-level managers face structured ones (credit and special offers).
- Think of it as: the higher the level, the less the rulebook covers.
- Spot it in a question: "decision at senior level" → unstructured or semi-structured; "credit to customers" → structured.

**Quality of information (slides 83 to 85)**
- What it is: three families of quality dimensions.
  - Time: timeliness (when needed), currency (up to date), frequency (as often as needed), time period (past, present, future).
  - Content: accuracy (free from errors), relevance (related to the recipient's needs), completeness (all that is needed), conciseness (only what is needed), scope (broad or narrow, internal or external), performance (measures activities, progress, resources).
  - Form: clarity (easy to understand), detail (detail or summary), order (predetermined sequence), presentation (narrative, numeric, graphic), media (paper, video displays).
- Think of it as: a good weather report: on time, correct, only the needed numbers, shown as a clear chart.
- Spot it in a question: "arrives exactly when needed and reflects the position as of now" → timeliness and currency (Mock 2 Q12). "Predetermined sequence" → order (Mock 3 Q12). "Free from errors" → accuracy. "Only what is needed" → conciseness.

### ERP

**ERP (Enterprise Resource Planning)**
- What it is: a cross-functional enterprise system with an integrated suite of software modules that supports the basic internal business processes of a company (slide 101). It is the technological backbone of e-business. Lecture description: one single software system through which information flows across the organisation (slide 103). It focuses on internal processes but may include transactions with customers and vendors.
- Think of it as: a school with one register that every teacher, the office and the accountant write to, instead of separate notebooks.
- Spot it in a question: "single software system", "integrated suite of modules", "internal business processes" → ERP.

**Enterprise-wide versus across-enterprise information systems (slide 100)**
- What it is: enterprise-wide systems connect all the business processes inside the organisation (ERP is the example). Across-enterprise systems connect to stakeholders and to other organisations' processes.
- Think of it as: a shop's internal till system versus the link to its wholesaler's system.
- Spot it in a question: "connecting to stakeholders or other organisations" → across-enterprise.

**ERP modules and processes (slides 104 to 107)**
- Financial and accounting: general ledger, accounts payable, accounts receivable, fixed assets, cash management and forecasting, product-cost accounting, cost-centre accounting, asset accounting, tax accounting, credit management, financial reporting.
- Manufacturing and production: procurement, inventory management, purchasing, shipping, production planning and scheduling, material requirements planning (MRP), quality control, distribution, transportation execution, plant and equipment maintenance.
- Human resources: personnel administration, time accounting, payroll, personnel planning and development, benefits accounting, applicant tracking, compensation, workforce planning, performance management, travel expense reporting.
- Sales and marketing: order processing, quotations, contracts, product configuration, pricing, billing, credit checking, incentive and commission management, sales planning.
- Think of it as: four departments sharing one set of records.
- Spot it in a question: "payroll" → HR; "credit checking" and "billing" → sales and marketing; "general ledger" → finance.

**Integration of cross-functional processes through ERP (slide 108)**
- What it is: an order captured by sales triggers planning, procurement and manufacturing in one linked chain. Forecasts, purchase requirements, production, order fulfilment and delivered orders all flow through the same system.
- Think of it as: a restaurant where one order slip goes to the kitchen, the stores and the billing in one go.
- Spot it in a question: "one order triggers planning, purchasing and manufacturing" → ERP integration (Bank Week 2 Q10 mentions ERP benefits).

**How enterprise systems work (slide 109)**
- What it is: a centralised database sits at the centre. Each function (finance and accounting, sales and marketing, human resources, manufacturing and production) writes to it and reads from it. Examples on the slide: sales and marketing records orders, sales forecasts, returns and price changes; HR records hours worked, labour cost and job skills; manufacturing records materials, schedules, shipment dates and capacity; finance records cash on hand, receivables, customer credit and revenue.
- Think of it as: one central ledger that every department writes to.
- Spot it in a question: "centralised database" → enterprise systems.

**Reported benefits of ERP (slide 110)**
- What it is: better quality and efficiency of customer service, production and distribution; reduced transaction processing costs and hardware, software and IT support staff; cross-functional information for better and timely decisions; breaking down departmental walls and enabling agile structures and work roles.
- Think of it as: the restaurant that stops making the waiter walk to the kitchen twice.
- Spot it in a question: "improved information sharing across functions" → ERP benefit (Bank Week 2 Q10).

**ERP implementation cost components (slide 111, pie chart)**
- What it is: reengineering 43%; software 15%; training and change management 15%; data conversions 15%; hardware 12%.
- Think of it as: the biggest slice of the bill is rethinking the processes, not buying the software.
- Spot it in a question: "which component accounts for the largest share" → reengineering (Mock 2 Q15).

**Causes of ERP failure (slide 112)**
- What it is: underestimated complexity of planning, development and training; failure to involve affected employees in planning and development; too-fast conversion; insufficient data conversion and testing; over-reliance on ERP software vendors or consulting firms.
- Think of it as: a wedding planned in one week, with no input from the family and no tasting.
- Spot it in a question: "rushed conversion", "weak data testing", "staff not involved" (Mock 3 Q15).

**Trends in ERP (slide 113)**
- What it is: flexible ERP, web-enabled ERP, inter-organisational ERP, e-business suites, cloud-enabled ERP.
- Think of it as: the ERP moving from a fixed office computer to a phone-and-browser service.
- Spot it in a question: "cloud" or "web" trend.

**Leading ERP providers (slide 114)**
- What it is: SAP (R/3, Business One, S/4HANA); Oracle (E-Business Suite); Microsoft (Dynamics); Infor (Global Solutions).
- Think of it as: the big software shops that sell the ERP package.
- Spot it in a question: "Tata Steel's SAP-MM" (Week 1 link) → SAP.

## How it flows

### 1. Cross-functional process (slide 8)
```text
  SALES:              Generate order ──► Submit order
                                              │
  ACCOUNTING:                        Check credit ──► Approve credit ──► Generate invoice
                                                              │
  MANUFACTURING AND PRODUCTION:                       Assemble product ──► Ship product
```
One order passes through three functional areas. Each handoff is a point where delays and errors happen, which is why ERP links them.

### 2. Inter-organisational procurement process (slides 9 and 10)
```text
  TECHNICAL DIVISION          PURCHASING & CONTRACTING          SUPPLIER
  Request for procurement ─► Select suppliers to invite ─► Request for tender ─► Submit financial and technical proposal
                                                                                              │
  Evaluation of technical ◄────── Receipt of financial and technical proposal ◄──────────────┘
  proposal                        │
                                  ▼
                          Examine financial proposal ─► Negotiation ─► Conclude contract ─► Production and delivery
                                                                                              │
  Inspection ◄──────────────────────────────────────────────────────────────────────────────────┘
                                  ▼
                              Payment
```
Two firms are involved (the buyer's departments and the supplier), so this is inter-organisational.

### 3. Supplier registration (slide 9)
```text
  Application for registration ─► Supplier evaluation (technical) ◄─► Supplier evaluation (financial)
  Application for new business ──────────────────────────────────────────────┘
                                                              ▼
                                                  Registration of supplier
                                          (information management records the outcome)
```

### 4. Money, material and information flow (slide 11)
```text
  Suppliers ──► Purchasing ──► Production ──► Inventory ──► Sales ──► The market
  (material, forward)

  The market ──── money ────► back through sales, inventory, production, purchasing ──► suppliers (paid)
  Management, R&D, marketing, board, shareholders, auditors ──── information (pink arrows)
```
Materials go forward; money comes back; information goes everywhere.

### 5. Levels of management pyramid (slide 82)
```text
              TOP MANAGERS           strategy, policies, long-term plans
          (decide market entry/exit)         ▲
        ─────────────────────────────────────┼──────────────
              MIDDLE MANAGERS        operational plans, objectives
          (design a marketing plan)          │  (information flows up,
        ─────────────────────────────────────┼─── down and across)
           FIRST-LEVEL MANAGERS    short-term decisions, day-to-day
          (offer credit, special offers)     ▼
```
Intelligence information comes in at the top from outside; public information goes out.

### 6. DIKW ladder (slide 29)
```text
  WISDOM       understanding principles    "carry an umbrella"        (why)
     ▲
  KNOWLEDGE    understanding patterns      "humid + cooling = rain"    (how)
     ▲
  INFORMATION  understanding relations     "temperature 15 = rain"    (who, what, where, when)
     ▲
  DATA         raw facts                   "temperature, humidity"     (what is it)
```
Each level adds meaning and understanding. Use the question words to place a statement on the ladder.

### 7. System with feedback (slides 32 and 35)
```text
  INPUT ──► PROCESSING ──► OUTPUT ──► destination
    ▲                                    │
    └────────────── FEEDBACK ◄───────────┘
  (feedback returns output to correct the input)
```

### 8. Activities of an information system (slide 34)
```text
  ENVIRONMENT: suppliers, customers, regulatory agencies, competitors, stockholders
        │ input                                   ▲ output
  ORGANISATION
  [ INFORMATION SYSTEM:  input ──► processing (classify, arrange, calculate) ──► output ]
                  │ storage of data resources
                  └──── feedback loop back to input
```

### 9. Information systems connect processes with stakeholders (slide 36, simplified)
```text
  Suppliers  ──► ECONOMIC RESOURCES ──► BUSINESS PROCESSES ──► GOODS AND SERVICES ──► Customers, stockholders
  (people, money, material,      (market, develop,         (products, services,
   facilities, energy, info)      produce, deliver,         payments, contributions,
                                  support)                  information)
        ▲                                                         
  Control and feedback through management
  Surrounding stakeholders: government agencies, community, competitors, financial institutions, labour unions
```

### 10. IS resources (slide 37)
```text
                         SYSTEM ACTIVITIES
              control of system performance (feedback arrows)
   Input of data resources ──► Processing data into information ──► Output of information products
                                        ▲
                             storage of data resources

   Surrounding resources:  People  |  Software  |  Data  |  Network  |  Hardware
```
Five resource types surround the central activities. Information products are the output.

### 11. Transaction processing cycle (slide 51)
```text
  [1] Data entry ──► [2] Transaction processing (batch or online/real-time)
                              │                    ▲
                              ▼                    │
                   [3] Database maintenance ◄──► Database
                              │
          ┌───────────────────┴───────────────────┐
  [4] Document and report generation     [5] Inquiry processing
```

### 12. TPS feeding the MIS (slide 54)
```text
  Order processing system ─┐
  Materials resource       ├──► summarised data at end of period ──► MIS files ──► MIS ──► Reports ──► Managers
  planning system ─────────┤        (sales data, unit product cost,
  General ledger system ───┘         product change, expense data)
```

### 13. DSS components (slide 61)
```text
  USER INTERFACE FUNCTIONS          hyperlinked multimedia, 3-D visualisation
  MODEL MANAGEMENT FUNCTIONS        analytical modelling, statistical analysis
  DATA MANAGEMENT FUNCTIONS         extraction, validation, sanitation, integration, replication
  DATA SOURCES                      operational data, market data, sales data, customer account data
```

### 14. Expert system (slide 68)
```text
  USER ──► expert advice ◄──► user interface programs ◄──► INFERENCE ENGINE ◄──► KNOWLEDGE BASE
                                                             (applies rules)     (stored rules and facts)
  DEVELOPMENT:  knowledge acquisition program ──► knowledge engineering ◄── expert / knowledge engineer
```

### 15. Management pyramid of systems (slide 87)
```text
  STRATEGIC LEVEL     ESS: 5-year sales trend, 5-year operating plan, profit planning, personnel planning
        ▲
  MANAGEMENT LEVEL    MIS and DSS: sales analysis, inventory control, production scheduling, budgeting,
        ▲             profitability analysis, contract cost analysis
  OPERATIONAL LEVEL   TPS: order processing, material movement control, payroll and accounts payable,
                      employee recordkeeping
  Across: sales and marketing | manufacturing and production | finance and accounting | human resources
```

### 16. Business intelligence framework (slide 88, simplified)
```text
  DATA FROM BUSINESS ENVIRONMENT       BI INFRASTRUCTURE          ANALYTICS TOOLSET
  (call centres, web site,        ──►  databases, data     ──►   statistical models, data mining,
   mobile devices, blogs, stores,      warehouses, data marts     OLAP, production reports
   suppliers, government)                                              │
                                                                       ▼
                                  USER INTERFACE  ◄──  PLATFORM (MIS, DSS, EIS)  ◄──  MANAGERIAL USERS AND METHODS
                                  reports, dashboards,                              business strategy, performance
                                  scorecards, desktop, mobile,                       management, balanced scorecard,
                                  web portal, social media                           forecasts
```

### 17. Four stages of decision making (slide 75)
```text
  1. Discover and identify the problem      (why it exists, where, what effects)
        │
  2. Identify and explore solutions
        │
  3. Choose among the alternatives
        │
  4. Make the chosen alternative work and monitor it   ──► back to 1 if the problem returns
```

### 18. Structured, semi-structured, unstructured (slides 78 to 80)
```text
  STRUCTURED ───────────── SEMI-STRUCTURED ───────────── UNSTRUCTURED
  procedures known         part known, part judgement    novel, rests on experience
  e.g. inventory reorder   e.g. product lines, 5 years   e.g. what business in 10 years
  (first-level managers)   (middle managers)             (top managers)
```

### 19. The DMAIC cycle (slides 19 and 20)
```text
  DEFINE ──► MEASURE ──► ANALYZE ──► IMPROVE ──► CONTROL ──► (sustain, then repeat)
  (problem)  (data)      (cause)     (fix)       (monitor)
```

### 20. ERP: one central database (slide 109)
```text
              FINANCE AND ACCOUNTING
              (cash, receivables, credit, revenue)
                       ▲
  SALES AND    ◄──► ┌──────────────┐ ◄──► HUMAN RESOURCES
  MARKETING         │  CENTRALISED │      (hours worked, labour cost, job skills)
  (orders,          │  DATABASE    │
   forecasts)       └──────────────┘
                       ▼
              MANUFACTURING AND PRODUCTION
              (materials, schedules, shipment dates, capacity)
```

## Don't mix these up

| These look alike | How to tell them apart | Tie-breaker word |
|---|---|---|
| Intra- vs inter-organisational process | Intra stays inside the firm (across departments). Inter crosses to a supplier or customer. | "exchanging with suppliers" → inter |
| Functional vs cross-functional process | Functional sits inside one department. Cross-functional passes through several in sequence. | "several departments" → cross |
| Senior vs middle vs operational management | Senior: strategy and long-range decisions. Middle: turns strategy into plans. Operational: daily monitoring. | "long-range" / "programmes" / "daily" |
| Knowledge workers vs data workers vs production workers | Knowledge workers design and create knowledge. Data workers handle information (clerks). Production workers make or deliver. | "design or create knowledge" vs "clerks" |
| Internal vs external stakeholder | Internal: employees, management, shareholders, owner. External: customers, creditors, suppliers (plus government and community on slide 36). | "employee" → internal |
| Digital firm vs virtual firm | Digital firm: ICT-mediated relationships with customers, suppliers and staff (lecture). Virtual firm is not in the lecture. | "digitally enabled and mediated" |
| Reengineering vs continuous improvement | Reengineering: radical redesign for dramatic gains. Continuous improvement: small, steady steps. | "radical" vs "gradual" |
| TQM vs DMAIC | TQM is a philosophy about quality in the whole firm. DMAIC is a step-by-step data cycle. | "philosophy" vs "Define, Measure..." |
| DMAIC order | Define, Measure, Analyze, Improve, Control. Analyze comes straight after Measure. | "after Measure" → Analyze |
| Data vs information | Data is raw and meaningless. Information has meaning: who, what, where, when. | "raw" vs "when" |
| Information vs knowledge | Information answers who, what, where, when. Knowledge answers how and needs interpretation. | "how" → knowledge |
| Knowledge vs wisdom | Knowledge is the pattern or rule. Wisdom is the understanding of why, used to act. | "why" → wisdom |
| Expert system vs knowledge management system | Expert system gives expert advice from rules. KM system stores and shares business knowledge (best practices). | "advice" vs "share" |
| TPS vs MIS | TPS records daily transactions and serves operations. MIS summarises TPS data into reports for middle management. | "routine daily transactions" vs "reports" |
| TPS vs process control system | TPS records business transactions. Process control monitors and steers physical industrial processes (refining, power, steel). | "transactions" vs "industrial process" |
| MIS vs DSS | MIS: pre-specified, fixed-format reports on performance. DSS: interactive, ad hoc decisions with models. | "fixed format" vs "ad hoc" |
| DSS vs ESS | DSS serves middle managers on specific problems. ESS serves senior managers with a company-wide view of non-routine decisions. | "middle" vs "senior" |
| ESS vs MIS | ESS combines external events and summarised MIS/DSS data for senior managers. MIS gives routine internal reports. | "external events" → ESS |
| Periodic vs exception vs demand reports | Periodic: regular, fixed. Exception: only when something is abnormal. Demand: on request. | "regular" / "abnormal" / "asked for" |
| What-if vs sensitivity analysis | What-if changes selected variables and observes effects. Sensitivity repeatedly changes a single variable by a fixed step. | "single variable repeated" → sensitivity |
| Goal-seeking vs optimisation | Goal-seeking keeps changing until a target value is reached. Optimisation finds the best value given constraints. | "target" vs "best given budget" |
| Model-driven vs data-driven DSS | Model-driven uses analytical models. Data-driven uses data warehouses, OLAP and mining. | "model" vs "data warehouse" |
| OLAP vs data mining | OLAP lets you slice, drill down and consolidate data you already know to ask about. Data mining discovers patterns you did not know to look for. | "drill-down" vs "hidden patterns" |
| Descriptive vs predictive vs prescriptive analytics | Descriptive: what happened. Predictive: what will happen. Prescriptive: what to do. | "will happen" vs "should do" |
| Data mining vs big data analytics | Data mining finds patterns (clustering, classification, association). Big data analytics is the process applied to very large, fast, varied data (five Vs). | "five Vs" → big data |
| Case-based vs rule-based vs frame-based vs object-based knowledge | Case: past examples. Rule: If-Then. Frame: fixed-field record. Object: data plus methods. | "past examples" / "if-then" / "fields" / "methods" |
| Inference engine vs knowledge base | Inference engine applies the rules. Knowledge base stores the rules and facts. | "applies" vs "stores" |
| Expert system vs DSS | Expert system gives expert advice from a knowledge base. DSS helps a manager analyse data with models. | "expert advice" vs "analysis" |
| Structured vs semi-structured vs unstructured decisions | Structured: procedure known in advance. Semi: partly known. Unstructured: novel, no procedure, rests on experience. | "procedure known" / "part" / "experience" |
| Strategic vs management vs operational systems | Strategic = ESS. Management = MIS and DSS. Operational = TPS. | "senior" / "middle" / "operations" |
| Timeliness vs currency | Timeliness: available when needed. Currency: up to date when provided. | "when needed" vs "up to date" |
| Accuracy vs relevance vs conciseness | Accuracy: free from errors. Relevance: related to the recipient's need. Conciseness: only what is needed. | "errors" / "needs" / "only" |
| Clarity vs order vs media | Clarity: easy to understand. Order: predetermined sequence. Media: paper or screen. | "sequence" → order |
| Five Vs: Volume, Velocity, Variety, Variability, Value | "Visibility" is not one of them. | "Visibility" is the trap |
| ERP vs enterprise knowledge portal | ERP runs internal processes in one suite. Portal gives one point of access to corporate data and knowledge. | "processes" vs "access" |
| Enterprise-wide vs across-enterprise systems | Enterprise-wide connects internal processes (ERP). Across-enterprise connects to stakeholders and other organisations. | "other organisations" → across |
| ERP cost: reengineering vs software | Reengineering is 43% of the cost. Software is 15%. | "largest share" → reengineering |
| ERP benefit vs ERP failure cause | Benefit: better sharing and lower processing costs. Failure: too-fast conversion, weak testing, no staff involvement. | "reported benefit" vs "cause of failure" |
| SAP vs Oracle vs Microsoft vs Infor | All four sell ERP packages. SAP: R/3, Business One, S/4HANA. Oracle: E-Business Suite. Microsoft: Dynamics. Infor: Global Solutions. | match the product name |
| Business process vs system | A process is a set of tasks for a goal. A system has inputs, processing, outputs and a boundary. | "tasks" vs "inputs and outputs" |
| Data resources vs information products | Data resources are the stored data (records, reviews). Information products are the output reports and documents. | "stored" vs "output" |
| Hardware vs software resources | Hardware: machines and storage media. Software: programs and procedures. | "disk drives, printers" vs "spreadsheet programs" |
| Network resources vs hardware resources | Network: communication media and control software. Hardware: computers and devices. | "communications media" |

## Must-remember facts

| Fact | What the lecture says | Memory trick |
|---|---|---|
| Four functional areas (slide 4) | Producing and delivering products and services; managing financial assets and records; attracting, developing and maintaining the labour force; selling products and services | "Make, Money, People, Sell" |
| Functional process examples (slide 7) | Manufacturing: assemble, quality check, bills of materials. Sales: identify customers, make aware, sell. Finance: pay creditors, financial statements, cash. HR: hire, evaluate, enrol in benefits | Each area has three tasks |
| Two types of business process | Intra-organisational (functional or cross-functional); inter-organisational | "Intra = inside walls, Inter = between firms" |
| Business process definition | Set of logically related tasks to realise a specific business objective | "logical tasks, one goal" |
| Digital firm | Nearly all significant relationships with customers, suppliers and employees digitally enabled and mediated | "digitally mediated" |
| Automation steps | Modelling → analysis → optimisation → automation; make/buy/hire, software development, integration | "Model, Analyse, Optimise, Automate" |
| Reengineering (Michael Hammer, 1990, HBR) | Fundamental rethinking, radical redesign, dramatic improvements in cost, quality, service, speed | "four goals: cost, quality, service, speed" |
| Reengineering aims | Eliminate repetitive, paper-intensive, bureaucratic tasks; cut costs significantly; improve quality | "Stop paper, cut cost, raise quality" |
| Improvement philosophies | Continuous improvement; total quality management (TQM); DMAIC (Six Sigma) | "Continuous, Total, Six Sigma" |
| DMAIC | Define, Measure, Analyze, Improve, Control | "Dogs Must Always Improve Constantly" (D-M-A-I-C) |
| DIKW ladder | Data (raw), information (who, what, where, when), knowledge (how), wisdom (why) | "What, Who-what-where-when, How, Why" |
| Example ladder (slides 26 to 30) | Data: POS records; information: items purchased together; knowledge: which items are frequently purchased; wisdom: place frequent items close to raise sales | "POS → together → frequent → close" |
| System characteristics | Input, processing, output, feedback | "In, Process, Out, Feed back" |
| System definition (slide 31) | Interrelated components, clearly defined boundary, common objectives, inputs to outputs through transformation | "boundary, objective, in, out" |
| IS definition (slide 33) | Collect or retrieve, process, store, distribute information to support decision making and control | "collect, process, store, distribute" |
| IS resources | People, hardware, software, data, network; information products as output | "P-H-S-D-N, then info" |
| People resources | Specialists (systems analysts, software developers, systems operators) and end users | "specialists and end users" |
| Hardware resources | Machines (computers, monitors, disk drives, printers, optical scanners); storage media (tape, optical disks) | "machines and media" |
| Software resources | System level (operating system, compilers); application level (spreadsheet, word processing, payroll); procedures | "system, application, procedures" |
| Data resources | Structured (product descriptions, customer records, employee files, inventory databases); unstructured (customer reviews) | "neat ledger vs notes" |
| Network resources | Communications media, communications processors, network access, control software | "media, processors, access, control" |
| Four stages of decision making | Discover and identify the problem; identify and explore solutions; choose among alternatives; make it work and monitor | "Find, Explore, Choose, Make and Monitor" |
| Three decision types | Structured (procedure known; inventory reorder); semi-structured (partly known; product lines in five years); unstructured (novel; business in 10 years) | "Known, Partly known, Unknown" |
| Decision levels (slide 82) | Top: market entry and exit. Middle: marketing plan. First-level: credit and special offers | "top = market, middle = plan, first = credit" |
| Transaction processing cycle (slide 51) | Data entry; transaction processing (batch, online/real-time); database maintenance; document and report generation; inquiry processing | "Enter, Process, Maintain, Report, Inquire" |
| Process control examples | Petroleum refining; power generation; steel production systems | "oil, power, steel" |
| TPS examples | Sales and inventory processing; accounting systems; payroll TPS | "sales, stock, accounts, pay" |
| MIS examples | Sales analysis; production performance; cost trend reporting | "sales, production, cost" |
| MIS data sources (slide 54) | Order processing system, materials resource planning system, general ledger system | "order, materials, ledger" |
| DSS examples | Product pricing; profitability forecasting; risk analysis; voyage estimating | "price, profit, risk" |
| ESS example (slide 62) | Minute-to-minute view of working capital, accounts receivable, accounts payable, cash flow, inventory | "capital, receivable, payable, cash, stock" |
| Report types (slides 56 to 58) | Periodic scheduled; exception (only abnormal); demand reports and responses (on request) | "Regular, Abnormal, Asked" |
| Analytical decision support (slides 91 to 92) | What-if; sensitivity (one variable, repeated); goal-seeking (until target); optimisation (best under constraints) | "What if, Sense one, Goal, Best" |
| Data-driven DSS tools (slides 93 to 96) | OLAP; GIS and GPS; data mining and machine learning; big data analytics | "OLAP, GIS, Mine, Big" |
| Five Vs of big data | Volume, velocity, variety, variability, value | "V five times, no Visibility" |
| Data mining operations | Clustering, classification, association | "group, sort, link" |
| Data mining examples | Cross selling; product placement; affinity promotion; fraud detection; customer behaviour analysis | "cross, place, affinity, fraud, behaviour" |
| Analytics types | Descriptive; predictive; prescriptive | "happened, will happen, should do" |
| Knowledge representation (slides 69 to 70) | Case-based reasoning; frame-based; object-based; rule-based | "Cases are stories, Frames are forms, Objects act, Rules are If-Then" |
| Expert system components (slide 68) | User interface programs; inference engine program; knowledge base; knowledge acquisition program; knowledge engineering | "interface, engine, base, acquire" |
| Examples of expert systems | Credit application advisor; process monitor; diagnostic maintenance systems | "credit, process, diagnosis" |
| Knowledge portal sources (slide 66) | Structured: ERP, CRM, other databases. Unstructured: e-mail groupware, file system, web (internet, intranet, extranet) | "structured = ERP, CRM; unstructured = mail, files, web" |
| Quality of information: time | Timeliness, currency, frequency, time period | "When, Fresh, How often, Which period" |
| Quality of information: content | Accuracy, relevance, completeness, conciseness, scope, performance | "Right, Related, Enough, Only, Scope, Performance" |
| Quality of information: form | Clarity, detail, order, presentation, media | "Clear, Detailed, Ordered, Presented, Medium" |
| ERP definition (slide 101) | Technological backbone of e-business; enterprise-wide transaction framework; integrated suite of software modules for internal business processes | "one suite, all functions" |
| ERP modules (slides 104 to 107) | Financial and accounting; manufacturing and production; human resources; sales and marketing | "Finance, Factory, People, Sales" |
| ERP reported benefits (slide 110) | Better service, production and distribution quality; lower transaction and IT costs; cross-functional information for timely decisions; breaks down departmental walls | "Better, Cheaper, Connected, Flatter" |
| ERP cost components (slide 111) | Reengineering 43%; software 15%; data conversions 15%; training and change management 15%; hardware 12% | "Reengineering is the biggest slice" |
| ERP failure causes (slide 112) | Underestimated complexity; employees not involved; too-fast conversion; too little data conversion and testing; over-reliance on vendors or consultants | "Complex, Excluded, Rushed, Untested, Vendor-led" |
| ERP trends (slide 113) | Flexible ERP; web-enabled ERP; inter-organisational ERP; e-business suites; cloud-enabled ERP | "Flexible, Web, Inter-firm, Suites, Cloud" |
| ERP providers (slide 114) | SAP (R/3, Business One, S/4HANA); Oracle (E-Business Suite); Microsoft (Dynamics); Infor (Global Solutions) | "SAP, Oracle, Microsoft, Infor" |

## How this week gets asked

**Question patterns you will see**
- "Which system fits this manager": a manager's question (routine, ad hoc, senior overview) → TPS, MIS, DSS or ESS. Most common.
- "Name the level or type": DIKW level, decision type, management level, process type, transaction type.
- "Which step comes next": DMAIC order, decision stages, transaction processing cycle.
- "Which is NOT": five Vs (Visibility), an IS characteristic, a benefit of ERP.
- "Which technique": what-if, sensitivity, goal-seeking, optimisation; data mining, OLAP, GIS; case, frame, object, rule.
- "Scenario → name the process or system": procurement, cross-functional order flow, supplier registration.
- "ERP detail": which module handles a task (payroll, credit checking, general ledger), causes of failure, cost components, providers.

**Distractor traps for this week**
- Near-synonyms: TPS vs process control, MIS vs DSS, ESS vs DSS, data mining vs OLAP, sensitivity vs goal-seeking. Read the question's exact verb: "repeatedly change one variable" (sensitivity) vs "until the sales reach a target" (goal-seeking).
- Level mix-ups: "middle managers" vs "senior management" vs "first-level". The strategic question is senior; the credit question is first-level.
- DIKW ladder: a wrong option may give the right fact at the wrong level. "Items purchased together" is information, not knowledge. "How" is knowledge, "why" is wisdom.
- Absolute words: "all", "only", "complete", "replace". Mock 2 Q3's wrong option "Replace all human workers" and Mock 1 Q6's "without changing the workflow" are the kind of wrong option to look for.
- Concepts from other weeks: EDI, SCM, RFID, auctions, web analytics are later weeks. If the question is about lecture-2 IS types, don't switch to those.
- Non-lecture names: "virtual firm", "learning organisation", "lean enterprise" are not in this lecture. "Visibility" is not one of the five Vs.
- Reversed direction: "money flows back" (slide 11). "Feedback is output returned to correct the input" (slide 35), not input to output.

**Rules to use in the exam**
1. If the question says "daily routine transactions, operational staff" → TPS.
2. If it says "fixed monthly reports for middle managers from TPS data" → MIS.
3. If it says "interactive, what-if, non-routine decisions for middle managers" → DSS.
4. If it says "minute-to-minute, senior managers, external events" → ESS.
5. If it says "two firms exchange documents or orders electronically" → inter-organisational process.
6. If it says "one order passes through sales, accounting and production" → cross-functional process.
7. If it says "stores past cases", "If-Then rules", "frames" or "objects with methods" → the matching knowledge representation.
8. If it says "single integrated system for all functions" → ERP.
9. If it says "find hidden purchasing patterns in large data" → data mining.
10. If it says "gradual improvements through measurement", "fundamental rethinking" → continuous improvement vs reengineering.

## Practice walk-through

**Q1.** Which situation is most likely an inter-organisational business process?
- Answer: D) A manufacturer exchanging purchase orders and invoices electronically with suppliers
- Why: Two firms act together across the boundary, the procurement process (Inter-organisational card; slides 9 and 10).
- Trap: B) Sales coordinating with production. That is inside one firm, a cross-functional process.

**Q2.** A manager wants to know how cutting inventory might affect production schedules and customer service. Which IS is most useful?
- Answer: C) DSS
- Why: It is a what-if question for a non-routine decision, which is what decision support systems do (DSS card; slide 59).
- Trap: A) TPS. TPS records routine transactions. It does not model what-if effects.

**Q3.** An organisation seeks gradual improvements in quality and efficiency through repeated measurement and refinement. Which philosophy?
- Answer: C) Continuous improvement
- Why: Small, repeated steps (Business process improvement card; slide 19).
- Trap: A) Business process reengineering. That is radical redesign, not gradual change.

**Q4.** Customers who buy coffee often buy cookies. Which DIKW stage is identifying this pattern?
- Answer: B) Information
- Why: A relationship between items in the data (items purchased together), which is information (DIKW card; slide 30).
- Trap: C) Knowledge. Knowledge would be the rule for what to do about it (frequently purchased items must be placed close together).

**Q5.** A company keeps product catalogues, customer records and inventory records. These are examples of:
- Answer: C) Data resources
- Why: Stored records are data resources, structured in this case (IS resources cards; slide 41).
- Trap: D) Information products. Those are the reports and documents that come out of the system.

**Q6.** Which IS primarily supports predefined, highly structured operational decisions?
- Answer: D) TPS
- Why: TPS serves operational levels with predefined, structured goals (TPS card; slide 49).
- Trap: C) MIS. MIS serves middle management with routine reports, but it sits on top of TPS data.

**Q7.** A shipping company uses a model to pick the most profitable vessel assignment that meets deadlines. This is an example of:
- Answer: B) Decision support application
- Why: A model used to choose among options, a voyage-estimating DSS (DSS card; slide 60).
- Trap: A) Expert system reasoning. An expert system applies stored rules and expert advice, not a profit model.

**Q8.** Which knowledge representation stores prior experiences and uses them to solve new but similar problems?
- Answer: D) Case-based reasoning
- Why: It stores past cases (Expert systems and knowledge management, slide 69).
- Trap: A) Rule-based knowledge. Rules are If-Then statements, not stored cases.

**Q9.** A retailer examines large volumes of clickstream data to find hidden purchasing patterns. This activity is most associated with:
- Answer: C) Data mining
- Why: Finding hidden patterns in large data is data mining and machine learning (Analytics card; slide 95).
- Trap: D) Exception reporting. Exception reports flag abnormal conditions, they do not search for hidden patterns.

**Q10.** Which best illustrates a reported benefit of ERP implementation?
- Answer: C) Improved information sharing across functions
- Why: One shared system gives cross-functional information for better decisions (ERP reported benefits; slide 110).
- Trap: A) Elimination of all organisational hierarchy. ERP breaks down walls but the lecture does not say it removes all hierarchy; "all" is an absolute claim.

## 60-second recap

- Business process = linked tasks for one objective, moving material, information and money.
- Intra-organisational = inside the firm (functional or cross-functional). Inter-organisational = across firms (procurement).
- Levels: senior (strategy), middle (plans, knowledge workers), operational (daily work, data workers, production workers).
- Digital firm = nearly all key relationships digitally enabled and mediated.
- Reengineering (Michael Hammer, 1990) = radical redesign. Continuous improvement = gradual. DMAIC = Define, Measure, Analyze, Improve, Control.
- DIKW: data (raw), information (who, what, where, when), knowledge (how), wisdom (why).
- IS resources: people, hardware, software, data, network. Output = information products.
- Systems: input, processing, output, feedback.
- TPS (routine, operations), MIS (routine reports, middle), DSS (what-if, non-routine), ESS (senior, external view).
- Reports: periodic (regular), exception (abnormal only), demand (on request).
- Analysis: what-if, sensitivity (one variable, repeated), goal-seeking (to a target), optimisation (best under constraints).
- Data-driven tools: OLAP, GIS, data mining (clustering, classification, association), big data (five Vs: volume, velocity, variety, variability, value).
- Expert systems: case, frame, object, rule; inference engine applies rules; knowledge base stores them.
- Decisions: structured (routine), semi-structured (partly known), unstructured (novel, experience); four stages: find, explore, choose, make it work and monitor.
- Information quality: time (timeliness, currency, frequency, period), content (accuracy, relevance, completeness, conciseness, scope, performance), form (clarity, detail, order, presentation, media).
- ERP = one integrated suite, central database; reengineering is 43% of implementation cost; top causes of failure: rushed conversion, weak testing, staff not involved.

---

Coverage check: 45/45 mock questions answerable from this guide.
