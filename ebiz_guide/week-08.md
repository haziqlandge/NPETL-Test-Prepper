# Week 8 — RFID, GPS and GIS, Vehicle Routing, Sensors and IoT, Big Data

## In one breath

This week is about knowing where things are and what condition they are in, and then making smart decisions from that data. Five lectures: (1) RFID, a tag that lets a reader identify each item without a barcode scan. (2) The bigger RFID picture: the EPC network, and the technical problems it faces. (3) GPS and GIS, which track vehicles and plan their routes. (4) Sensors and the Internet of Things (IoT), which watch the cargo itself. (5) Business analytics and big data, which turn all that data into decisions.

**The big analogy:** A dabbawala delivery service in Mumbai. Each tiffin box has a unique code (RFID tag). The collector scans it at each stop (reader), and the office matches it to a customer (middleware and database). The dabbawala's route is planned from a map of homes and delivery times (GPS, GIS, routing). A thermometer in the box warns if the food is too hot (sensor). The office looks at last year's delivery records to plan next month's staffing (big data analytics).

---

## Mind map

Short forms used in the tree, spelled out once here: RFID (Radio Frequency IDentification); AIDC (Automated Identification and Data Capture); EPC (Electronic Product Code); ONS (Object Naming Service); GPS (Global Positioning System); GIS (Geographical Information System); VRP (Vehicle Routing Problem); IoT (Internet of Things); OLTP (Online Transaction Processing); OLAP (Online Analytical Processing); RTAP (Real-Time Analytics Processing); WSN (Wireless Sensor Network); TMS (Transportation Management System).

```text
WEEK 8: Identify, locate, sense, analyse
├── 1. RFID and automatic data capture
│   ├── AIDC = identify, capture and update with no human typing
│   ├── RFID = tag + reader + middleware + backend database
│   ├── Bar codes lose: line of sight, harsh conditions, category only
│   ├── Tag classes by power: active, semi-active, passive
│   ├── Tag classes by memory: read-only, write-once read-many, read-write
│   ├── Readers: fixed vs handheld; single vs multi-frequency
│   ├── Frequency bands: 125/134 kHz, 13.56 MHz, 850-950 MHz
│   ├── EPC: 96-bit unique number (header, manufacturer, product, serial)
│   ├── EPCglobal network: ID system, middleware, discovery, EPC IS
│   ├── Savant (middleware), ONS (address lookup), PML server (details)
│   ├── RFID in supply chain: ASN, shrinkage, anti-counterfeit, traceability
│   └── Concerns: tag orientation, reader coordination, packaging, standards,
│       data formats, interference, privacy, security
├── 2. GPS, GIS and vehicle routing
│   ├── RFID stops at antenna coverage; GPS tracks beyond it
│   ├── GPS: 28 satellites, user receivers, 5 control stations
│   ├── Position fix: distance = speed of light x time, from 4 satellites
│   ├── GIS = software for spatial data (input, store, analyse, display)
│   ├── GPS-GIS integrated systems: fleet, routing, law enforcement, farming
│   ├── VRP = clustering customers + ordering each route's tour
│   ├── Variants: CVRP, VRPTW, CVRPTW, MDVRP, PVRP, SDVRP, SVRP, VRPSF
│   ├── Static VRP: all information known in advance
│   ├── Dynamic VRP: new requests arrive mid-route, real-time algorithms
│   └── TMS: vehicle unit + GPS, communication network, ERP, GIS, routing
├── 3. Sensors, IoT and traceability
│   ├── Sensor -> sensor node -> sensor network -> IoT
│   ├── IoT: connect anything, anytime, anywhere
│   ├── 4-layer model: sensing, network, information processing, applications
│   ├── IoT challenges: standards, rapid innovation, privacy/security, governance
│   ├── Tracking = now and future; tracing = the past
│   ├── Traceability needs: values, stakeholder pressure, regulation, alignment
│   ├── Food spoilage: physical, mechanical, biochemical, microbiological
│   └── Sensed targets: temp, humidity, CO2, O2, ethylene, H2S, vibration, tilt
└── 4. Business analytics and big data
    ├── Analytics = data + models -> fact-based decisions
    ├── Descriptive (what happened) -> predictive (what next) -> prescriptive (what to do)
    ├── Big data = scale, diversity, complexity needing new methods
    ├── 3 Vs: volume, variety, velocity (4th V: veracity)
    ├── OLTP (transactions) -> OLAP (warehouse analysis) -> RTAP (real time)
    ├── Big data sources: social media, instruments, mobile, sensors
    ├── Supply chain uses: tracking, manufacturing, sales and marketing
    └── Opportunities: demand forecasting, warehouse design, supplier choice, transport
```

---

## Concept cards

### 1. RFID and automatic data capture

**AIDC (Automated Identification and Data Capture)**
- What it is: technology that identifies an object, collects data about it, and updates software systems without human intervention. Examples: bar codes, RFID, smart cards, voice and facial recognition.
- Think of it as: a toll-booth gate that reads your FASTag and deducts the fee without you typing anything.
- Spot it in a question: "automatically", "without human intervention", "identify and update the system" → AIDC. A clerk typing a stock count is not AIDC.

**RFID (Radio Frequency IDentification)**
- What it is: an identification method in which a tag with a chip and antenna answers a reader's radio request with its unique code.
- Think of it as: a dog tag that can be read from a few metres away without taking it off the dog.
- Spot it in a question: "radio", "tag", "read without line of sight", "unique identifier" → RFID.

**Bar code (and its weaknesses)**
- What it is: printed stripes read by a laser scanner. The slides list its deficiencies: line of sight only, cannot take harsh conditions, little room for advancement, identifies only the product group, and tracking is poor, labour intensive and slow.
- Think of it as: a printed price tag that must face the scanner.
- Spot it in a question: "must be seen", "identifies the product type not the single item", "manual scanning" → bar code.

**RFID solution (its improvements)**
- What it is: reads from different angles and through some materials, works in dust and corrosive conditions, has room for advancement through new chips and packaging, gives unique item identification, and can track items in real time.
- Think of it as: a tag that works even when hidden inside a box.
- Spot it in a question: "unique item", "read through materials", "real-time tracking", "technology still improving" → RFID.

**RFID tag (inlay)**
- What it is: the part that holds the data uniquely identifying the object. The inlay is the chip and antenna layer inside the label.
- Think of it as: the name badge sewn inside a uniform.
- Spot it in a question: "contains the unique identifier", "attached to a product" → the tag.

**RFID reader**
- What it is: the device that, when requested, reads the unique identifier from a tag and passes it on.
- Think of it as: the scanner at a supermarket checkout, except it reads by radio.
- Spot it in a question: "reads the identifier when requested", "captures the code" → reader.

**RFID middleware**
- What it is: software that processes the data the reader gathers and then updates the backend database or the ERP system.
- Think of it as: the clerk who takes the raw scan and writes it into the office register.
- Spot it in a question: "processes the data from the reader", "updates the database or ERP" → middleware.

**Labelling and use cycle (slide 9)**
- What it is: two stages. Labelling: a code is stored in a tag, the tag is attached to a product, and the product becomes uniquely identifiable. Use: the product transmits the code, the reader gets the message, and the code is processed so the right action can be taken.
- Think of it as: putting a name sticker on a parcel (labelling), then the postman scanning it and sorting it (use).
- Spot it in a question: "attach the tag, then read and act" → labelling then use.

**Active tag (in the slide's wording)**
- What it is: a tag that has its own battery and can send a stronger signal. The slide 9 wording says the product "transmits code from the embedded tag (active tag)".
- Think of it as: a walkie-talkie with its own battery.
- Spot it in a question: "has a battery", "highest read range" → active tag. See the power classes below.

**Semi-active tag**
- What it is: a tag with a battery that still relies on the reader's magnetic field to respond. It gets a larger range than passive tags because the reader's energy can be reflected back.
- Think of it as: a mirror that has its own lamp to make the reflection brighter.
- Spot it in a question: "battery, but still relies on the reader's field", "medium read range" → semi-active tag.

**Passive tag**
- What it is: a tag with no battery. It draws all its energy from the reader's magnetic field. It has the lowest read range, and its low processing power makes it weak for cryptography.
- Think of it as: a solar calculator. No battery, it works only when the light (reader) is on it.
- Spot it in a question: "no battery", "completely rely on the reader's field", "lowest range" → passive tag.

**Read-only tag**
- What it is: a memory class in which the data is written once at manufacture and never changed.
- Think of it as: a printed book. Nobody can edit the text.
- Spot it in a question: "never changed", "written at manufacture" → read-only.

**Write-once read-many (WORM) tag**
- What it is: a memory class that can be written once and then read many times.
- Think of it as: a DVD-R. You burn it once, then play it as often as you like.
- Spot it in a question: "written only once", "read many times" → WORM. Trap: read-only is written once at manufacture and never written again.

**Read-write tag**
- What it is: a memory class that can be rewritten many times during use.
- Think of it as: a notebook you can erase and rewrite.
- Spot it in a question: "rewritten many times", "updated during use" → read-write.

**Fixed reader**
- What it is: a reader installed at a permanent location, such as a dock door or loading gate.
- Think of it as: a CCTV camera bolted to a wall.
- Spot it in a question: "installed permanently", "mounted at a dock door" → fixed reader.

**Handheld reader**
- What it is: a reader carried by a worker, used for counting stock or checking items in aisles.
- Think of it as: a mobile phone camera you point at things.
- Spot it in a question: "carried by a worker", "count stock in aisles" → handheld reader.

**Single-frequency and multi-frequency readers**
- What it is: a single-frequency reader works on one band. A multi-frequency reader can work across more than one RFID frequency band.
- Think of it as: a radio that gets only one station, versus one that tunes in several.
- Spot it in a question: "more than one frequency band" → multi-frequency reader. This is a statement that can be true even alongside "fixed readers are at permanent locations".

**RFID frequency bands**
- What it is: three bands: low frequency (125/134 kHz), high frequency (13.56 MHz), and ultra high frequency (850 to 950 MHz).
- Think of it as: three radio stations, each with its own range and reach.
- Spot it in a question: "13.56 MHz" → high frequency. "850 to 950 MHz" → ultra high frequency.

**EPC (Electronic Product Code)**
- What it is: a unique worldwide identifier for an object. It is a 96-bit number and an extension of the Universal Product Code (UPC) that a barcode carries. It can identify up to 2 to the power 96 items uniquely (the slide shows this as "296").
- Think of it as: a national ID number for every single product, not just for its type.
- Spot it in a question: "unique object identifier", "96-bit", "extension of the UPC" → EPC.

**EPC 96-bit structure**
- What it is: four segments. Header: 8 bits (version). Manufacturer: 28 bits (over 268 million companies). Product: 24 bits (over 16 million product types). Serial number: 36 bits (over 68 billion items).
- Think of it as: an address written as country, city, street, house number. Each part narrows down the item.
- Spot it in a question: "item-level number that separates one carton from another of the same product" → the serial number segment. "Identifies the company" → manufacturer segment. "Identifies the product type" → product segment.

**EPCglobal network (five pillars)**
- What it is: the supply chain system built on five pillars: the Electronic Product Code (EPC), the ID system, EPC middleware, discovery services, and EPC information services (EPC IS).
- Think of it as: a postal system with five parts: the stamp (EPC), the letter box and postman (ID system), the sorting office (middleware), the address book (discovery), and the record office (information services).
- Spot it in a question: "five main pillars" → name the pillar that matches the role in the question. Trap: an EDI gateway is not one of the five.

**ID system**
- What it is: the EPC tags and EPC readers, the physical layer that identifies the object.
- Think of it as: the stamp and the post box.
- Spot it in a question: "EPC tags and EPC readers" → ID system.

**EPC middleware and Savant**
- What it is: the middleware that manages readers, filters the data, queries the local ONS on behalf of the business, and integrates with the local information system. The slide names the middleware computer "Savant".
- Think of it as: the receptionist in an office building who takes every call, drops the duplicates, and passes the right ones on.
- Spot it in a question: "manages readers", "filters data", "queries the local ONS" → EPC middleware (Savant). Trap: the Savant does not store detailed product records.

**Discovery services and ONS (Object Naming Service)**
- What it is: discovery services resolve EPC references. The Object Naming Service (ONS) maps an EPC to the address (URL) where its information is stored.
- Think of it as: a phone book entry that turns a name into a number to call.
- Spot it in a question: "resolves EPC references", "maps the EPC to an address" → discovery services (ONS).

**EPC Information Services (EPC IS) and PML server**
- What it is: the layer that stores detailed information about the identified object. The PML (Physical Markup Language) server holds the full product details for each EPC.
- Think of it as: the file cabinet with the full dossier on each product.
- Spot it in a question: "stores detailed information", "full product details" → EPC information services (PML server).

**EPCglobal and the Auto-ID Center**
- What it is: the Auto-ID MIT project started in October 1999. The Auto-ID Center closed in October 2003 after its last meeting in Tokyo, Japan. Its technology passed to EPCglobal, which administers and develops the EPC standards.
- Think of it as: a research lab that handed its patents to the standards body that now runs the rules.
- Spot it in a question: "who administers the EPC standards" → EPCglobal.

**EPC in the supply chain (automation steps)**
- What it is: the lecture's six-step picture. (1) Each item has an RFID tag with a unique EPC. (2) Items are counted and tracked automatically. (3) An RFID reader at the dock wakes the tags as pallets leave the factory. (4) The reader sends the EPC to the Savant computer, which asks the ONS, which points to the PML server. (5) At the distribution centre, a reader checks the pallet and the Savant provides a cargo list. (6) At the retail store, the systems update and reader-enabled smart shelves reorder stock.
- Think of it as: a parcel's journey that is scanned at every hand-over, and the shop reorders the moment a shelf runs low.
- Spot it in a question: "automatic", "dock door reader", "smart shelves", "cargo list" → EPC supply chain automation.

**Why the push to RFID (drivers)**
- What it is: four drivers the lecture gives. Mandates from large buyers such as Wal-Mart and the US Department of Defense (DOD). Industry trends for supply chain and manufacturing management. Issues with process and quality control. Government regulations.
- Think of it as: a shop owner who starts using card payments because the big customers and the government demand it.
- Spot it in a question: "mandates from Wal-Mart or the DOD" → mandates. "Process and quality control" → process/quality driver.

**RFID in the supply chain (applications)**
- What it is: the list on slide 8. Advanced Shipping Notices (ASN), shrinkage (stock lost through theft or error), returned goods, anti-counterfeit, product traceability, improved stock management, and lower labour costs.
- Think of it as: a checklist of what an RFID tag fixes on the shop floor.
- Spot it in a question: "shrinkage", "fake products", "shipping notice before goods arrive" → RFID supply chain use.

**Uses of RFID outside the supply chain**
- What it is: smart keys (access to a facility), agriculture (livestock tracking), toll roads (tracking and charging), asset management, and maintenance (aircraft intelligence toolbox and equipment records).
- Think of it as: a tag in a car's windscreen that lets the toll gate charge you without a stop.
- Spot it in a question: "toll roads", "livestock tracking", "aircraft maintenance records" → RFID outside retail.

**Technical concern: tag orientation**
- What it is: a tag held perpendicular to the reader's antenna cannot communicate well. Fixes: move the reader or build antennas that are less sensitive to orientation.
- Think of it as: a key that will not turn when you hold it the wrong way round.
- Spot it in a question: "tag position against the antenna" → tag orientation.

**Technical concern: reader coordination**
- What it is: several readers close together interfere with each other.
- Think of it as: two people talking at once in the same small room.
- Spot it in a question: "two readers at one dock keep missing tags" → reader coordination.

**Technical concern: product packaging independence**
- What it is: some packaging, such as metallised (metal-coated) foil, hurts tag readability.
- Think of it as: a radio signal blocked by a metal wall.
- Spot it in a question: "tags on metallised packaging read poorly" → packaging independence.

**Technical concern: multiple standards**
- What it is: several frequencies and standards exist, partly because national frequency rules differ and because of cost trade-offs. A fix is readers that handle multiple standards. A global standard is still needed for universal traceability.
- Think of it as: power sockets that differ from country to country.
- Spot it in a question: "frequencies differ between countries" → multiple standards.

**Technical concern: data formats**
- What it is: how data is laid out in the memory of rewritable tags is not standardised. This makes sharing hard across a supply chain. XML may be used in future when tag memory is big enough.
- Think of it as: two people writing a letter in different scripts; they can each read their own but not the other's.
- Spot it in a question: "encoding differs", "rewritable tags", "companies cannot interpret the stored information" → lack of standardised data formats (bank Q5 answer).

**Technical concern: electromagnetic interference (EMI)**
- What it is: machines and electric motors create noise. Liquids and metals absorb or reflect RF (radio frequency) signals.
- Think of it as: a noisy factory floor that drowns out a whisper.
- Spot it in a question: "electric motors", "liquids or metals absorb signals" → electromagnetic interference.

**Privacy concern (RFID)**
- What it is: RFID can gather sensitive data about a person without the person knowing, because tags can be read at a distance.
- Think of it as: someone reading your name badge across the room without asking.
- Spot it in a question: "read at a distance", "without the individual being aware" → privacy concern.

**Security concern (RFID)**
- What it is: tags have low processing speed and low memory, especially passive tags, so they are computationally weak for basic cryptography.
- Think of it as: a lock made from a cheap plastic spring. Easy to break.
- Spot it in a question: "low processing speed", "low memory", "passive tags", "cryptography" → security concern.

### 2. GPS, GIS and vehicle routing

**RFID coverage limit (tracking beyond RFID)**
- What it is: an item cannot be tracked by RFID once it is outside the antenna's coverage. Once the vehicle is out of coverage, it must be tracked by GPS.
- Think of it as: a mobile signal that works only in your city. Outside it, you need another way to be found.
- Spot it in a question: "after leaving RFID coverage", "continuous visibility on the road" → GPS (bank Q6 answer).

**GPS (Global Positioning System)**
- What it is: a space-based radio navigation system owned by the United States government and operated by the US Air Force. It does not need the user to transmit any data, and works independently of phone and internet reception. It has been free for civilian users since 1996.
- Think of it as: the sky-based lighthouse signal that any boat can read. The boat does not send anything back.
- Spot it in a question: "space-based radio navigation", "owned by the US government", "no transmission needed" → GPS.

**GPS space segment**
- What it is: 28 satellites, each in its own orbit. They broadcast their location, status and precise time from on-board atomic clocks.
- Think of it as: 28 lighthouses spread around the world, each flashing its exact position and the time.
- Spot it in a question: "28 satellites", "broadcast location, status and time" → space segment.

**GPS user segment**
- What it is: the receivers that the user holds in the hand or mounts in a car.
- Think of it as: the handset in your pocket, which listens to the lighthouses.
- Spot it in a question: "receivers held in the hand or mounted in the car" → user segment.

**GPS control segment**
- What it is: five ground stations placed around the world that make sure the satellites are working properly. The master control station tracks the satellites through a global monitoring network and manages their health daily. Ground antennas send data updates and operational commands to the satellites.
- Think of it as: the air traffic control tower for the satellites.
- Spot it in a question: "five ground stations", "make sure the satellites are working" → control segment.

**GPS position fix (working principle)**
- What it is: the receiver notes the exact time a signal arrives (t2). Satellites send the time it left (t1). Distance = speed of light x (t2 minus t1). With distances from at least four satellites, the receiver works out its position on Earth in three dimensions.
- Think of it as: hearing thunder and counting the seconds to know how far away the storm is. Four storms give you a precise location.
- Spot it in a question: "how many satellites for a 3D fix" → four (at least four). "Distance equals speed times time" → the GPS distance formula.

**GIS (Geographical Information System)**
- What it is: software for input, storage, manipulation and analysis, and output and display, of geographic (spatial) information. It can be used as a database for transportation data, integrating spatial data and displaying attribute data in a chosen format.
- Think of it as: Google Maps with a spreadsheet of facts stuck onto each place on the map.
- Spot it in a question: "combine road maps, depot locations, customer positions and vehicle attributes" → GIS (bank Q7 answer).

**GPS versus GIS**
- What it is: GPS tells you where something is. GIS adds data about the place and lets you make strategic and tactical decisions.
- Think of it as: GPS is the pin on the map; GIS is the whole file about that town.
- Spot it in a question: "location alone" → GPS. "location plus stored spatial and attribute data for decisions" → GIS.

**Spatial data and attribute data**
- What it is: spatial data describes where things are (roads, boundaries). Attribute data describes what they are (names, sizes, counts). The chief sources of spatial data are digitised files such as TIGER (Topologically Integrated Geographic Encoding and Referencing) files, and GPS.
- Think of it as: the coordinates of a shop (spatial) and the shop's name and opening hours (attribute).
- Spot it in a question: "digitised map files", "TIGER files" → spatial data source.

**GPS-GIS integrated system**
- What it is: a system that uses GPS as its main source of spatial data for a GIS.
- Think of it as: a live GPS feed that keeps the map database up to date.
- Spot it in a question: "GPS as the spatial data source for a GIS" → GPS-GIS integrated system.

**Applications of GPS-GIS**
- What it is: automobiles (fleet management, dynamic vehicle routing, tracking rental cars), airline safety and aviation security, agriculture (tracking livestock, yield monitoring), sports (bicycle racing, golf), law enforcement (tracking criminals, appealing speed tickets).
- Think of it as: the same map-plus-location system used by a delivery van, a golf course and a police station.
- Spot it in a question: "fleet", "rental cars", "livestock", "speed tickets" → GPS-GIS applications.

**Vehicle routing problem (VRP)**
- What it is: the question of which set of routes a fleet of vehicles should drive to deliver to a set of customers from a depot, with the lowest total transport cost. It has two sub-problems: grouping customers into routes (clustering), and defining the best tour for each route.
- Think of it as: the milk-van round. First decide which houses go on which van, then decide the order to visit them.
- Spot it in a question: "optimal set of routes for a fleet", "depot and customers" → VRP.

**Route and tour**
- What it is: a route is the total set of deliveries made by a single vehicle. A tour is the sequence in which those deliveries are made.
- Think of it as: a route is the list of houses on your bus route; the tour is the order in which the bus stops at them.
- Spot it in a question: "sequence of deliveries" → tour. "Total deliveries by one vehicle" → route.

**Clustering (customer grouping to routes)**
- What it is: the first VRP sub-problem. Grouping customers into routes.
- Think of it as: deciding which customers share a van.
- Spot it in a question: "groups customers into routes" → clustering.

**Capacitated VRP (CVRP)**
- What it is: a VRP where all vehicles have the same capacity for one commodity. Total demand on any route must not exceed the vehicle's capacity.
- Think of it as: a van with a fixed weight limit; you cannot overload it.
- Spot it in a question: "limited carrying capacity", "demand cannot exceed vehicle capacity", "each customer visited exactly once" → CVRP.

**VRP with Time Windows (VRPTW)**
- What it is: a VRP where each customer has a fixed time interval during which the pickup or delivery must happen.
- Think of it as: a delivery slot booked for 6 to 8 pm.
- Spot it in a question: "time interval", "delivered between set hours" → VRPTW.

**CVRP with Time Windows (CVRPTW)**
- What it is: a hybrid of CVRP and VRPTW. It has both vehicle capacities and time windows.
- Think of it as: a delivery slot and a weight limit at the same time.
- Spot it in a question: "capacity and time windows together" → CVRPTW.

**Multiple Depot VRP (MDVRP)**
- What it is: a VRP with several depots and vehicle fleets. Every stop must be assigned to a single depot or fleet to minimise service costs.
- Think of it as: three branches of a courier company, and each house is served only by its nearest branch.
- Spot it in a question: "several warehouses, each with its own fleet", "each customer served from exactly one depot" → MDVRP.

**Periodic VRP (PVRP)**
- What it is: a VRP in which service is extended over M days, instead of a single day.
- Think of it as: a milkman who delivers on a 3-day cycle.
- Spot it in a question: "service over several days" → PVRP.

**Split Delivery VRP (SDVRP)**
- What it is: a VRP in which some customers may be served by more than one vehicle.
- Think of it as: a large order split across two vans because one van cannot carry it.
- Spot it in a question: "demand bigger than one truck", "customer served by more than one vehicle" → SDVRP.

**Stochastic VRP (SVRP)**
- What it is: a VRP in which one or more problem components are random or happen with some probability.
- Think of it as: planning a route when you do not know if the road will be blocked.
- Spot it in a question: "random", "with some probability" → SVRP.

**VRP with Satellite Facilities (VRPSF)**
- What it is: a VRP with remote facilities across the network. Vehicles can re-supply or unload at them during their route. Capacitated vehicles can then handle larger demands before returning to the central depot.
- Think of it as: a truck that restocks at a mini-warehouse on the way, instead of returning to the main depot.
- Spot it in a question: "remote facilities along the route", "restock before returning to the depot" → VRPSF.

**Real-time vehicle routing**
- What it is: routing that reacts to information as it changes during the day. The slides place it with VRPSF as a further variant, and it links to dynamic routing.
- Think of it as: a route that is re-planned while the van is already on the road.
- Spot it in a question: "re-planned while vehicles are on the road" → real-time routing.

**Static VRP**
- What it is: all information relevant to the plan is known before routing starts, and it does not change after the routes are built.
- Think of it as: a fixed timetable printed on Monday for the whole week.
- Spot it in a question: "all information known beforehand", "does not change after routes are built" → static VRP.

**Dynamic VRP (DVRP)**
- What it is: not all information is known when routing starts, and information can change after the initial routes are built. It is harder than the static VRP and needs real-time algorithms.
- Think of it as: a taxi dispatcher who gets new calls while the cabs are already driving.
- Spot it in a question: "new customer requests arrive after the routes are generated", "information changes after the plan" → dynamic VRP (bank Q9 answer).

**Advance request customer (static) and immediate request customer (dynamic)**
- What it is: in the dynamic VRP picture, an advance request customer is booked before planning starts (static). An immediate request customer is a new request during execution (dynamic).
- Think of it as: a pre-booked wedding caterer versus a late walk-in lunch order.
- Spot it in a question: "booked in advance" → static customer. "request at short notice" → dynamic customer.

**DVRP examples**
- What it is: dynamic fleet management (real-time dispatch of trucks); vendor-managed distribution (demand is known in principle, but some customers may run out and need urgent service); couriers (most pickups are dynamic and same-day); rescue and repair companies; dial-a-ride (advance bookings are static, short-notice bookings are dynamic); emergency services (all customers dynamic; idle vehicles are relocated); taxi cabs (almost all customers dynamic).
- Think of it as: the list of businesses where the phone can ring at any time with a new job.
- Spot it in a question: "vendor-managed distribution where a few customers run out urgently" → DVRP example.

**Real-time data for routing**
- What it is: demand data comes from EDI or web services. Location data comes from GPS or GIS.
- Think of it as: the order from the customer (demand) and the van's live position (location).
- Spot it in a question: "demand data from EDI or web services", "location data from GPS or GIS" → real-time data sources.

**Transportation management system (TMS)**
- What it is: the back-end system that combines location and demand data. The slide architecture has a vehicle-mounted front-end unit (GPS receiver, GPRS modem, mobile terminal, user interface), a communication sub-system (positioning system and terrestrial mobile network), and a back-end (enterprise integrated system with a decision support system using ERP, routing algorithms and GIS).
- Think of it as: a control room that knows where every van is, what is ordered, and which route to send each van on.
- Spot it in a question: "back-end system with routing algorithms, ERP and GIS" → TMS.

### 3. Sensors, IoT and traceability

**Sensor**
- What it is: a device that converts a physical phenomenon (heat, light, motion, vibration, sound) into electrical signals.
- Think of it as: a thermometer that turns heat into a number on a screen.
- Spot it in a question: "converts a physical phenomenon into an electrical signal" → sensor. An actuator does the reverse (signal into physical motion).

**Sensor node**
- What it is: the basic unit of a sensor network. It contains on-board sensors, a processor, memory, a transceiver (radio sender and receiver), and a power supply.
- Think of it as: a small tiny computer with a thermometer and a radio strapped to it.
- Spot it in a question: "basic unit in a sensor network", "processor, memory, transceiver, power supply" → sensor node. A central enterprise data warehouse is not a sensor node component.

**Sensor network**
- What it is: a large number of sensor nodes, deployed inside or very close to the phenomenon they sense.
- Think of it as: a swarm of little thermometers scattered through a cold store.
- Spot it in a question: "large number of sensor nodes deployed close to the phenomenon" → sensor network.

**Internet of Things (IoT)**
- What it is: the network of physical objects (devices, vehicles, buildings and other items) embedded with electronics, software, sensors and network connectivity, enabling them to collect and exchange data. The ITU (International Telecommunication Union, 2005) vision: connectivity for anything, at any time and anywhere.
- Think of it as: the internet extended from computers to everyday things, such as a fridge, a truck, or a shipping container.
- Spot it in a question: "network of physical objects with sensors and connectivity", "anything, anytime, anywhere" → IoT.

**Definitions of IoT (European Commission, 2008) and synonyms**
- What it is: the European Commission (2008) describes "things having identities and virtual personalities operating in smart spaces". Synonyms the slide lists: ambient intelligence, ubiquitous network, ubiquitous computing, pervasive computing, and cyber-physical systems.
- Think of it as: different names for the same idea of everyday things being smart and connected.
- Spot it in a question: "ambient intelligence", "pervasive computing" → synonyms for IoT.

**Key enabling technologies (of IoT)**
- What it is: radio frequency identification (RFID), wireless sensor networks (WSN), machine-to-machine communication (M2M), human machine interaction (HMI), middleware, web services and information systems.
- Think of it as: the tools in the toolbox that make IoT work.
- Spot it in a question: "which enabling technology" → name it from the list.

**Four-layer model of IoT**
- What it is: from bottom to top: (1) Sensing and identification (GPS, smart devices, RFID, sensors). (2) Network construction (WWAN, WMAN, WLAN, WPAN, Internet). (3) Information processing (data centres, search engines, smart decision-making, information security, data mining). (4) Integrated application (smart logistics, smart grid, green building, smart transport, environment monitoring).
- Think of it as: a building: the foundations sense, the pipes carry, the office computes, and the shop-front applies the result.
- Spot it in a question: "data centres, search engines, data mining" → information processing layer.

**Sensing and identification layer**
- What it is: the bottom layer, with GPS, smart devices, RFID tags and sensors that detect and identify things.
- Think of it as: the eyes and ears of the system.
- Spot it in a question: "detect and identify things" → sensing and identification layer.

**Network construction layer**
- What it is: the layer that carries data, with wide-area (WWAN), metropolitan (WMAN), local (WLAN) and personal (WPAN) wireless networks, and the Internet.
- Think of it as: the roads and wires that carry the messages.
- Spot it in a question: "WWAN, WLAN, WPAN, Internet" → network construction layer.

**Information processing layer**
- What it is: the layer that stores and processes the data: data centres, search engines, smart decision-making, information security and data mining.
- Think of it as: the brain room where data is stored and thought about.
- Spot it in a question: "data centres", "smart decision-making", "data mining" → information processing layer.

**Integrated application layer**
- What it is: the top layer, which holds the applications people use: smart logistics, smart grid, green buildings, smart transport and environment monitoring.
- Think of it as: the apps on your phone, the visible result of everything underneath.
- Spot it in a question: "smart grid", "smart transport", "smart logistics" → integrated application layer.

**IoT challenges**
- What it is: four challenges the slides name. Technology standardisation. Managing rapid innovation. Privacy and security. Governance.
- Think of it as: four questions every IoT project has to answer: which standard, how to keep up with new devices, how to protect data, and who is in charge.
- Spot it in a question: "a new sensor generation every six months, the network must accept it" → managing rapid innovation. "Who owns and runs the network" → governance.

**Tracking**
- What it is: the current status of an item and where it is going (its future path).
- Think of it as: checking the live location of a parcel on the courier app.
- Spot it in a question: "current status", "future" → tracking (bank Q10 part I).

**Tracing**
- What it is: reconstructing the past path of an item, its history.
- Think of it as: reading the full history of a bill, step by step.
- Spot it in a question: "history", "reconstruct where it came from", "the past" → tracing (bank Q10 part II).

**Traceability**
- What it is: the slide's definition: "the ability to trace and identify the history, distribution, location and application of products, parts and materials; to ensure the reliability of sustainability claims in the areas of human rights, labour (including health and safety), the environment and anti-corruption."
- Think of it as: the paper trail that proves where a product came from and how it was made.
- Spot it in a question: "history, distribution, location and application of products" → traceability.

**Traceability in food (EU General Food Law, article 18)**
- What it is: traceability means the ability to track any food, feed, food-producing animal or substance through all stages of production, processing and distribution. It is a risk-management tool that lets food businesses or authorities withdraw or recall unsafe products.
- Think of it as: the batch number on a medicine strip, which lets the company pull back one batch instead of the whole range.
- Spot it in a question: "withdraw or recall unsafe food", "risk-management tool", "through all stages" → food traceability.

**Need for traceability: values and efficiencies**
- What it is: five benefits the slide lists: reducing risk; operational efficiency and process consistency; securing supply; supplier selection and supplier relationships; reputational benefits.
- Think of it as: the business case for traceability in money terms.
- Spot it in a question: "reduce supply risk", "more efficient supplier choices", "secure supply" → values and efficiencies.

**Need for traceability: stakeholder pressure**
- What it is: meeting stakeholder demands for more product information, and making sure sustainability claims are true.
- Think of it as: customers and NGOs asking "where was this made?" and expecting proof.
- Spot it in a question: "customers or activists demand product information" → stakeholder pressure.

**Need for traceability: regulation**
- What it is: meeting legal requirements.
- Think of it as: the food safety law that makes you keep records.
- Spot it in a question: "legal requirements", "compliance" → regulation.

**Need for traceability: global alignment**
- What it is: standardising expectations, processes and systems across the world, and ensuring the security of natural resources.
- Think of it as: everyone using the same measuring unit.
- Spot it in a question: "standardisation of expectations, processes and systems" → global alignment.

**Physical changes (of produce)**
- What it is: freezing-point temperatures and ice formation stop the metabolic process, which is why temperature matters. Excessive evaporation and drying out (losing water content) are why humidity matters, and the slide recommends keeping humidity at 85 to 95 percent.
- Think of it as: a cold store that keeps the vegetables crisp, not frozen and not dried out.
- Spot it in a question: "loses water", "dries out" → control humidity at 85 to 95 percent. "Ice formation" → temperature.

**Mechanical damage (of cargo)**
- What it is: squashing, cracking and bruising produce damage that speeds microbiological infestation and biochemical changes. Forces that act on cargo for long periods cause: continuous vibrations (monitor with a vibration sensor), high-force shocks (shock sensor) and tilt of cargo and pallets (tilt sensor).
- Think of it as: a box of eggs on a bumpy truck. Vibration is the constant shaking, shock is the sudden bump, tilt is the box leaning over.
- Spot it in a question: "continuous vibration", "sudden high force", "pallets tilt" → vibration, shock or tilt (the answer for continuous shaking is vibration).

**Biochemical changes: ripening and ethylene**
- What it is: ripening (pre-climacteric, climacteric and post-climacteric fruit) releases ethylene. Ethylene starts the ripening process in other goods that share the same storage area. Enzymes in food break down nutrients, depending on temperature. Gases released by fruits affect the metabolism of other goods, depending on ripeness, temperature, water content and air composition. The slide also shows respiration: oxygen is absorbed, while CO2, water vapour and heat are released.
- Think of it as: one ripe banana in a bowl making the others go soft.
- Spot it in a question: "ripening spreads to other goods in the same storage area" → ethylene.

**Ethylene**
- What it is: a gas released during fruit ripening. It starts ripening in other goods in the same storage area.
- Think of it as: the ripening hormone that spreads through a crate.
- Spot it in a question: "ripening gas", "ripening spreads" → ethylene. Its sensing mechanism is catalytic combustion of combustible gases.

**Microbiological infestation**
- What it is: fungal molds, yeast and bacteria reproduce. Favourable environmental conditions (for example, the right temperature and humidity with low oxygen) produce hydrogen sulfide (H2S). Under non-favourable conditions, oxygen drives aerobic (mould) growth, and anaerobic conditions give rot pathogens. Spores survive, which lengthens shelf life.
- Think of it as: mould in a damp wardrobe. The damp makes the stink (hydrogen sulfide) that you smell.
- Spot it in a question: "fungal molds, yeast, bacteria", "favourable conditions produce ___" → hydrogen sulfide.

**Hydrogen sulfide (H2S)**
- What it is: a gas that favourable microbiological conditions can produce. Sensing mechanism: electrochemical (oxidation-reduction).
- Think of it as: the rotten-egg smell that tells you something is going bad.
- Spot it in a question: "gas from microbiological growth" → hydrogen sulfide.

**Carbon dioxide (CO2) sensing**
- What it is: CO2 is part of respiration and allelopathy in the cargo. The slide's sensing mechanism for CO2 is an infrared spectrum absorption detector.
- Think of it as: a light beam that gets dimmer when CO2 is present, which the device measures.
- Spot it in a question: "monitor CO2 inside a refrigerated container" → infrared spectrum absorption detector.

**Sensing mechanisms by target (slides 88 to 90)**
- What it is: the lecture's table. Location: GPS, wireless cellular (GSM/3G), short-range wireless (WiFi, RFID or WSN), ultra wide band (UWB). Temperature: on-chip temperature sensitive transistor, integrated semiconductor transducer, temperature sensitive resistor, thermocouple, resistive temperature device (RTD). Humidity: humidity sensitive capacitor, humidity sensitive resistor, integrated MEMS (micro-electromechanical systems) humidity transducer. CO2: infrared spectrum absorption detector. Oxygen: electrochemical (oxidation-reduction). Ethylene: catalytic combustion of combustible gases. H2S: electrochemical. Soil moisture: resistance measurement, capacitance, time domain reflectometer (TDR). Vibration and shock: mechanical vibration switch, micro ball switch and counter, integrated MEMS accelerometer. Tilt: earth magnetic and gravity sensor, MEMS accelerometer. Light: ambient light sensing photodiode.
- Think of it as: a shopping list matching each thing you need to measure to the gadget that measures it.
- Spot it in a question: match the target in the question to the mechanism. "Electrochemical" appears for oxygen and H2S.

**Wide area network (WAN) and sensor area network (SAN) in the real-world picture**
- What it is: the slide 91 picture shows a sensor area network (SAN) of sub-nodes and main nodes, with UI terminals, linked by a wide area network (WAN), GPRS/3G, WiFi, satellite and an IP network. The real-world stages are produce, store, transport, consume, sell.
- Think of it as: the farm-to-shelf map of every point where a sensor collects data.
- Spot it in a question: "sub-nodes and main nodes", "stages from produce to sell" → the sensor area network picture.

### 4. Business analytics and big data

**Analytics**
- What it is: the use of data, information technology, statistical analysis, quantitative methods, and mathematical or computer-based models to help managers gain insight and make better, fact-based decisions.
- Think of it as: a doctor who reads the test results before prescribing the medicine.
- Spot it in a question: "help managers gain insight and make fact-based decisions" → analytics.

**Descriptive analytics**
- What it is: analysis of what happened and what is happening. Tools: data visualisation, statistical description, ad hoc reports, dashboards, data warehousing and alerts.
- Think of it as: looking at last month's sales chart.
- Spot it in a question: "what happened", "summarise history", "dashboard", "report" → descriptive analytics.

**Predictive analytics**
- What it is: analysis that asks what will happen and why it will happen. Tools: forecasting, prediction, clustering, data mining, text mining and web or media mining.
- Think of it as: a weather forecast for next week's sales.
- Spot it in a question: "what will happen next", "forecast", "why will it happen" → predictive analytics.

**Prescriptive analytics**
- What it is: analysis that finds the best course of action. Tools: optimisation, simulation, decision modelling, randomised testing.
- Think of it as: the doctor who picks the best treatment from several options.
- Spot it in a question: "what should I do", "best possible decisions", "what if we try this", "best combination" → prescriptive analytics.

**Retail markdown example (slide 97)**
- What it is: when to cut prices for seasonal stock and by how much. Descriptive: examine historical data on similar products. Predictive: predict sales based on price. Prescriptive: find the best combination of pricing and advertising to maximise revenue.
- Think of it as: a sale-day plan built in three steps: look back, predict, then choose.
- Spot it in a question: "reduce prices and advertising to maximise revenue" → prescriptive.

**Big data**
- What it is: the slide's definition, with no single standard definition: data whose scale, diversity and complexity need new architecture, techniques, algorithms and analytics to extract value and hidden knowledge.
- Think of it as: a river that is too big for a bucket, so you need a pipeline.
- Spot it in a question: "scale, diversity and complexity require new architecture, techniques and analytics" → big data.

**Volume (scale)**
- What it is: the amount of data. The slide: a 44 times increase from 2009 to 2020, from 0.8 zettabytes to 35 zettabytes, and data volume is growing exponentially.
- Think of it as: a warehouse that keeps getting bigger every year.
- Spot it in a question: "scale", "amount of data at rest" → volume.

**Variety (complexity)**
- What it is: many formats, types and structures (text, numbers, images, audio, video, sequences, time series, social media, multi-dimensional arrays), static data versus streaming data, and one application generating many data types.
- Think of it as: a kitchen that gets ingredients in every form: raw, packed, chopped, and frozen.
- Spot it in a question: "various formats", "structured, unstructured, text, multimedia" → variety.

**Velocity (speed)**
- What it is: data is generated fast and must be processed fast. Online analytics matter because late decisions mean missed opportunities. Examples: location-based e-promotions, and healthcare sensors that need immediate reaction.
- Think of it as: a traffic signal that must change in seconds, not next week.
- Spot it in a question: "generated fast", "processed fast", "streaming sensor readings", "seconds" → velocity.

**Veracity (data in doubt)**
- What it is: the fourth V. Uncertainty from data inconsistency, incompleteness, ambiguities, latency, deception and model approximations.
- Think of it as: a rumour from three different people that does not quite match.
- Spot it in a question: "records disagree, gaps, unknown calibration", "data in doubt" → veracity.

**3 Vs and 4 Vs of big data**
- What it is: the basic three are volume, variety and velocity. Some authors add veracity, making four. The slide shows "Big Data: 3V's" and "Some make it 4V's". A teradata-sourced diagram shows Big Data as transactions plus interactions plus observations.
- Think of it as: a pizza with three toppings, and a fourth topping some chefs add.
- Spot it in a question: "which is NOT one of the 3 Vs" → veracity is the 4th, not part of the basic 3.

**OLTP (Online Transaction Processing)**
- What it is: the DBMS-based processing that records routine transactions (orders, payments, stock movements) as they happen.
- Think of it as: the cash counter at a shop: every sale is recorded right away.
- Spot it in a question: "recording routine transactions", "DBMS" → OLTP.

**OLAP (Online Analytical Processing)**
- What it is: analysis of data stored in a data warehouse. You look at it from different angles (for example category, region and month), and you can drill down from category totals to single products, or roll up to larger totals. The slides link OLAP to data warehousing.
- Think of it as: a cube of sales data that you can turn and cut to see it from any side.
- Spot it in a question: "change the level of aggregation", "drill down", "multidimensional data warehouse" → OLAP.

**Data warehouse**
- What it is: a large store of historical data, gathered from many systems, organised for analysis.
- Think of it as: the archive room where every year's sales records are filed for comparison.
- Spot it in a question: "data warehousing" → supports OLAP and descriptive analytics.

**RTAP (Real-Time Analytics Processing)**
- What it is: processing of streaming data within seconds, using big data architecture and technology. It is the layer that gives an alert immediately.
- Think of it as: a live match commentator who reacts to each ball, not a report after the match.
- Spot it in a question: "streaming data within seconds", "alerts as events happen" → RTAP.

**Big data sources (who generates it)**
- What it is: social media and networks (everyone generates data), scientific instruments (collecting all sorts of data), mobile devices (tracking all objects all the time), and sensor technology and networks (measuring all kinds of data).
- Think of it as: four kinds of data producers, from your phone to the lab instrument.
- Spot it in a question: "social media", "mobile devices", "sensors" → big data source.

**Traditional data versus big data (slide 107)**
- What it is: traditional analytics uses ad hoc querying and reporting, data mining, structured data from typical sources, and small to mid-size datasets. Big data uses optimisation and predictive analytics, complex statistical analysis, all types of data from many sources, very large datasets, and more real-time work.
- Think of it as: a small shop ledger versus a live feed from every shop in the country.
- Spot it in a question: "very large datasets", "real-time", "many sources" → big data side.

**Big data technology**
- What it is: the slide's "moving parts" in three stages. Fast data (Hadoop, MapReduce, Vertica, Esper, kdb, Greenplum, Netezza, Teradata); big analytics (Hive, SciPy, Mahout, MATLAB, R, SPSS, AMPL, SAS); deep insight (unsupervised learning, social media analytics, sentiment analysis, predictive modelling, visualisation, simulation).
- Think of it as: a factory line from raw material to finished insight.
- Spot it in a question: "Hadoop" or "MapReduce" → big data technology.

**Supply chain analytics**
- What it is: three resource groups. Data management resources (data acquisition and management from RFID, ERP and databases; data mining analysis). IT-based supply chain planning resources. Performance management resources (statistical process control, Six Sigma).
- Think of it as: the data pipes, the planning desk and the quality scoreboard.
- Spot it in a question: "statistical process control", "Six Sigma" → performance management. "RFID, ERP, database" → data management.

**Big data in supply chains**
- What it is: tracking (RFID and GPS), manufacturing (cyber physical systems), sales and marketing (customer reviews, logs).
- Think of it as: tracking the goods, running the factory, and listening to customers.
- Spot it in a question: "RFID/GPS tracking", "cyber physical systems", "customer reviews" → big data in supply chains.

**Cyber physical systems (manufacturing)**
- What it is: manufacturing systems where computing and physical processes are tightly linked. The slide 109 lists it under manufacturing.
- Think of it as: a machine that senses its own state and changes its own settings.
- Spot it in a question: "manufacturing" with sensing and control → cyber physical systems.

**Big data opportunities (slide 111)**
- What it is: demand forecasting (link real-time sensors to machine learning; Wal-Mart's RFID chips already exist; real-time response). Warehouse design and location (a classical operations research problem; network analysis). Supplier evaluation and selection (the most commonly researched supply chain function; more factors and up-to-date data). Selection of transportation nodes (real-time truck and rail assignment, already exists).
- Think of it as: four places where a bigger data pipe pays off.
- Spot it in a question: "link sensors to machine learning for forecasting", "best location for a warehouse", "choose suppliers with more factors" → the matching opportunity.

**Companies using big data (slide 112)**
- What it is: examples the slide lists. Kyruus (start-up; physician network data to track patient leakage). Recorded Future (start-up; internet data to predict). UPS (established; track packages, monitor vehicles, route them). United Healthcare (voice calls, text mining). Macys.com (personalising ads). Bank of America (understanding customers by channel). Citigroup (monitoring customer credit risk). Sears Holdings (real-time retail monitoring). Verizon Wireless (selling data on mobile phone user behaviour). Schneider International (trucking sensors for location and driver behaviour).
- Think of it as: a list of familiar firms, each using data to do one thing better.
- Spot it in a question: "track packages and route vehicles" → UPS. "Trucking sensors" → Schneider International.

**Supply chain analytics with big data (slide 113)**
- What it is: big data supports real-time decisions in grocery stores, Wal-Mart, American Airlines (yield management) and trucking (real-time breakdown response).
- Think of it as: the airline that changes fare prices minute by minute based on demand.
- Spot it in a question: "yield management", "real-time breakdown response" → real-time decision examples.

---

## How it flows

### 1. RFID

**A. The three main elements of a typical RFID setup (slide 10)**

```text
RFID TAG (inlay)  ))))  RFID READER  ──►  RFID MIDDLEWARE  ──►  BACKEND DATABASE / ERP
 unique identifier       reads it when       processes the reader's        updated with
 on the product          requested           data                          the result
```

- Tag: holds the unique identifier. Reader: reads it on request. Middleware: processes the data and updates the database or ERP.

**B. Labelling and use cycle (slide 9)**

```text
LABELLING:   code stored in tag ──► tag attached to product ──► product now uniquely identifiable
USE:         product transmits code ──► reader gets the code ──► code is processed ──► action taken
```

**C. Power classes of tags (slide 14)**

```text
ACTIVE       battery (must be recharged or replaced)   range: HIGHEST     cost: MOST EXPENSIVE
SEMI-ACTIVE  battery, but still uses the reader's field  range: MEDIUM
PASSIVE      no battery; runs on the reader's field      range: LOWEST
```

Read the table top to bottom: more power on the tag, more range, and more cost.

**D. Memory classes of tags (slide 15)**

```text
READ-ONLY         written at manufacture, never changed
WRITE-ONCE READ-MANY (WORM)   written once, read many times
READ-WRITE        rewritten many times during use
```

**E. Frequency bands (slide 13)**

```text
LOW FREQUENCY     125 / 134 kHz
HIGH FREQUENCY    13.56 MHz
ULTRA HIGH FREQ   850 MHz to 950 MHz
```

**F. The 96-bit EPC (slide 18)**

```text
| header 8 bits | manufacturer 28 bits | product 24 bits | serial no 36 bits |
  version         over 268 million     over 16 million    over 68 billion
```

Each box narrows the item down: company, then product type, then the single item.

**G. The EPCglobal network (slides 18 to 20)**

```text
ID SYSTEM            EPC tags + EPC readers
   │  reader reads the EPC
   ▼
EPC MIDDLEWARE       (Savant) manages readers, filters data, queries ONS
   │
   ▼
DISCOVERY SERVICES   Object Naming Service (ONS): EPC ──► address (URL)
   │
   ▼
EPC INFORMATION SERVICES   PML server: full product details
```

**H. EPC infrastructure in the supply chain (slide 21)**

```text
Item with EPC tag ──► Reader at location scans EPC ──► Middleware (Savant) ──► Local ONS ──► PML server
   (manufacturer, warehouse, retailer; flow of EPC data runs alongside the flow of goods)
```

The PML server holds complete product information. The ONS only points to where it is.

**I. How the EPC automates the supply chain (slides 27 to 29)**

```text
1. Each item carries an RFID tag with a unique EPC
2. Pallets leave the factory; a dock-door reader wakes the tags
3. Reader sends the EPC to the Savant computer ──► ONS ──► PML server (product details, recall source)
4. At the distribution centre, the reader reads the pallet, Savant gives a cargo list, pallet routed to truck
5. At the retail store, systems update automatically; smart shelves reorder stock when it runs low
```

### 2. GPS and GIS

**A. Tracking beyond RFID**

```text
Items inside RFID antenna coverage  ──► tracked by RFID
Vehicle outside coverage            ──► tracked by GPS
```

**B. GPS: three segments (slides 40 and 41)**

```text
SPACE SEGMENT     28 satellites in orbit; broadcast location, status and precise time
USER SEGMENT      receivers held in the hand or mounted in the car
CONTROL SEGMENT   five ground stations around the world keep satellites working
```

**C. How a GPS receiver finds its position (slides 41 to 42)**

```text
Satellite sends signal at time t1  ──► travels at the speed of light  ──► receiver gets it at t2
Distance from satellite  =  speed of light  x  (t2 minus t1)
Distances from at least FOUR satellites  ──► geometry gives position in 3 dimensions
```

**D. GIS architecture (slide 48)**

```text
QUERY INPUT ──► TRANSFORMATION AND ANALYSIS ◄── DATA INPUT
                        │
                        ▼
                 GEOGRAPHIC DATABASE
                        │
                        ▼
              OUTPUT: display and reporting
```

**E. GPS and GIS together (slides 45 and 47)**

```text
GPS  ──► supplies the location (spatial data)
GIS  ──► adds data about places; lets you analyse and display, to decide
GPS-GIS integrated system = GPS as the spatial data source for a GIS
```

**F. The vehicle routing problem's two sub-problems (slide 51)**

```text
ALL CUSTOMERS ──► (1) CLUSTERING: which customers share a route?
                     │
                     ▼
                 (2) TOUR: in what order does each route visit its customers?
Result: routes and tours that minimise total transportation cost
```

**G. Static versus dynamic VRP (slides 62 to 64)**

```text
STATIC VRP    all information known up front ──► routes built once and do not change
DYNAMIC VRP   information arrives during execution ──► routes changed in real time
  Advance request customer (static)   ─ known before planning
  Immediate request customer (dynamic) ─ arrives mid-route; new route segment added
```

**H. Real-time data into the transportation management system (slides 68 and 69)**

```text
Vehicle front-end (GPS receiver + GPRS modem + mobile terminal)
   │  location data via positioning system and mobile network
   ▼
Communication sub-system
   │
   ▼
Back-end: Decision Support System (ERP + routing algorithms + GIS)
   ▲  demand data from EDI or web services
   │
  USER
```

### 3. Sensors, IoT and traceability

**A. From sensor to IoT (slide 73)**

```text
SENSOR          converts heat, light, motion, vibration, sound ──► electrical signal
  │ many together
  ▼
SENSOR NODE     sensors + processor + memory + transceiver + power supply
  │ a large number, close to the phenomenon
  ▼
SENSOR NETWORK  nodes deployed inside or very close to what is sensed
  │ objects with electronics, software, sensors and connectivity
  ▼
INTERNET OF THINGS  physical objects collect and exchange data
```

**B. The four-layer model of IoT (slide 77)**

```text
┌──────────────────────────────────────────────────────────────┐
│ 4. INTEGRATED APPLICATION    smart logistics, smart grid,     │
│                              green building, smart transport, │
│                              environment monitoring           │
├──────────────────────────────────────────────────────────────┤
│ 3. INFORMATION PROCESSING    data centre, search engine,      │
│                              smart decision, info security,   │
│                              data mining                      │
├──────────────────────────────────────────────────────────────┤
│ 2. NETWORK CONSTRUCTION      WWAN, WMAN, WLAN, WPAN, Internet │
├──────────────────────────────────────────────────────────────┤
│ 1. SENSING AND IDENTIFICATION  GPS, smart device, RFID, sensor│
└──────────────────────────────────────────────────────────────┘
```

Data moves up the stack: sensed at the bottom, carried in the middle, processed, then used by applications at the top.

**C. Tracking versus tracing**

```text
PAST ◄─────────── TRACING ──────────┤ NOW ├──────── TRACKING ──────────► FUTURE
(history: where it has been)            (current status and where it is going)
```

**D. Traceability and the four needs (slide 81)**

```text
VALUES AND EFFICIENCIES     reduce risk, efficient operations, secure supply, supplier choice, reputation
STAKEHOLDER PRESSURE        demands for product information; prove sustainability claims are true
REGULATION                  meet legal requirements
GLOBAL ALIGNMENT            standard expectations, processes and systems worldwide; secure natural resources
```

**E. Food spoilage causes and what to sense (slides 84 to 87)**

```text
PHYSICAL CHANGES       freezing and ice ──► stop metabolism ──► TEMPERATURE
                       excess evaporation ──► drying out   ──► HUMIDITY (keep 85 to 95 percent)
MECHANICAL DAMAGE      squashing, cracking, bruising ──► speed up microbial and biochemical change
                       long-term forces on cargo:  continuous vibration ──► VIBRATION
                                                    high force shocks  ──► SHOCK
                                                    tilt of cargo      ──► TILT
BIOCHEMICAL CHANGES    ripening fruit ──► ETHYLENE, spreads to goods in the same store
                       allelopathy & respiration  ──► CO2, OXYGEN, HUMIDITY, TEMPERATURE
MICROBIOLOGICAL        fungal molds, yeast, bacteria
INFESTATION            favourable conditions ──► HYDROGEN SULFIDE
                       non-favourable conditions ──► oxygen drives aerobic molds; anaerobic rot
```

**F. Sensing mechanisms (slides 88 to 90), one line per target**

```text
Location ..... GPS; wireless cellular (GSM/3G); WiFi, RFID or WSN; ultra wide band (UWB)
Temperature .. on-chip transistor; semiconductor transducer; resistor; thermocouple; RTD
Humidity ..... humidity sensitive capacitor or resistor; MEMS humidity transducer
CO2 .......... infrared spectrum absorption detector
Oxygen ....... electrochemical (oxidation-reduction)
Ethylene ..... catalytic combustion of combustible gases
H2S .......... electrochemical (oxidation-reduction)
Soil moisture  resistance; capacitance; time domain reflectometer
Vibration .... mechanical vibration switch; micro ball switch; MEMS accelerometer
Shock ........ same as vibration
Tilt ......... earth magnetic and gravity sensor; MEMS accelerometer
Light ........ ambient light sensing photodiode
```

**G. The sensor area network in the real world (slide 91)**

```text
PRODUCE ──► STORE ──► TRANSPORT ──► CONSUME ──► SELL
  each stage has sub-nodes (sensors) reporting to main nodes, linked by GPRS/3G, WiFi,
  satellite and an IP network to a server and a customer's IT system
```

### 4. Business analytics and big data

**A. The three types of analytics (slide 96)**

```text
DESCRIPTIVE   What happened? What's happening? What exactly is the problem?   ──► reports, dashboards, alerts
     │
     ▼
PREDICTIVE    Why is this happening? What will happen next? Why will it happen?  ──► data mining, forecasting
     │
     ▼
PRESCRIPTIVE  What should I do? What's the best that can happen? What if we try this?  ──► optimisation, simulation
```

Read it as a ladder: understand, foresee, then act.

**B. Big data's 3 Vs and the 4th V (slides 99 to 104)**

```text
VOLUME     Data at rest:       terabytes to exabytes of existing data to process
VELOCITY   Data in motion:     streaming data, milliseconds to seconds to respond
VARIETY    Data in many forms: structured, unstructured, text, multimedia
VERACITY   Data in doubt:      uncertainty due to inconsistency, incompleteness, ambiguity, latency, deception
```

**C. Harnessing big data: where each kind of processing sits (slide 105)**

```text
OLTP   online transaction processing (DBMSs)            ── records each transaction as it happens
   │  transactions flow into a store
   ▼
OLAP   online analytical processing (data warehousing)  ── slices and drills into history
   │
   ▼
RTAP   real-time analytics processing (big data architecture and technology)  ── reacts within seconds
```

**D. Supply chain big data sources (slide 110)**

```text
SALES            price, quantity, time, items; daily to hourly; direct, distributor, internet and international sales
INVENTORY        stock by style, colour, size; timing; from monthly to hourly updates
LOCATION/TIME    sensor data about location; click-through to card use; what is close, who moved it, path
CONSUMER         items browsed and bought; "likes", "tweets", product reviews
```

**E. From data to opportunity (slides 109 and 111)**

```text
TRACKING (RFID/GPS)      ──► demand forecasting (real-time sensors + machine learning)
MANUFACTURING (CPS)      ──► warehouse design and location (network analysis)
SALES AND MARKETING      ──► supplier evaluation and selection (more factors, up-to-date data)
                         ──► selection of transportation nodes (real-time truck and rail assignment)
```

---

## Don't mix these up

| These look alike | How to tell them apart | Tie-breaker word |
|---|---|---|
| Bar code vs RFID | Bar code needs line of sight and identifies the product group. RFID reads through some materials at many angles and identifies the single item. | "line of sight, category" = bar code; "unique item, through materials" = RFID |
| Read-only vs WORM vs read-write tags | Read-only: written at manufacture, never changed. WORM: written once later, then read many times. Read-write: rewritten many times. | "never changed" = read-only; "once, then read many" = WORM; "rewritten" = read-write |
| Active vs semi-active vs passive tags | Active: own battery, highest range, most expensive. Semi-active: battery but uses the reader's field, medium range. Passive: no battery, lowest range. | "own battery and highest range" = active; "no battery" = passive |
| Fixed reader vs handheld reader | Fixed: permanent (dock door). Handheld: carried by a worker (stock count in aisles). | "permanent" = fixed; "carried" = handheld |
| Single-frequency vs multi-frequency readers | Single works on one band. Multi works across more than one band. | "more than one band" = multi |
| Read-only tag vs passive tag | Read-only describes memory (cannot be rewritten). Passive describes power (no battery). A tag can be passive and read-write. | "memory" = read-only class; "battery" = passive class |
| RFID reader vs RFID middleware vs RFID tag | Tag: holds the identifier. Reader: reads it on request. Middleware: processes the data and updates the database or ERP. | "holds the code" = tag; "reads on request" = reader; "processes and updates" = middleware |
| EPC middleware (Savant) vs discovery services (ONS) vs EPC information services (PML) | Middleware manages readers and filters data. ONS maps an EPC to an address. Information services hold the full product details. | "manages readers, filters" = middleware; "address, resolves" = ONS; "details" = information services |
| EPC vs UPC | EPC is 96 bits and identifies each individual item. UPC identifies a product type. EPC extends UPC. | "individual item" = EPC; "product type" = UPC |
| EPC segments | Header (8 bits, version), manufacturer (28 bits, company), product (24 bits, product type), serial (36 bits, single item). | "single item" = serial; "company" = manufacturer; "product type" = product |
| Discovery services vs EPC information services | Discovery services resolve references (where to find it). Information services store the detail. | "where" = discovery; "what detail" = information services |
| RFID vs GPS for tracking | RFID works only inside antenna coverage. GPS works anywhere the satellites are visible. | "inside coverage" = RFID; "outside coverage, on the road" = GPS |
| GPS vs GIS | GPS gives a location. GIS combines location with stored spatial and attribute data to analyse and decide. | "location alone" = GPS; "data and decisions" = GIS |
| GPS segments | Space: 28 satellites. User: receivers in hand or car. Control: five ground stations. | "28" = space; "receiver" = user; "five ground stations" = control |
| Clustering vs tour | Clustering groups customers into routes. Tour is the order of stops on one route. | "groups customers" = clustering; "order of stops" = tour |
| Route vs tour | Route: all deliveries by one vehicle. Tour: the sequence of those deliveries. | "total deliveries" = route; "sequence" = tour |
| CVRP vs VRPTW vs CVRPTW | CVRP: capacity limit. VRPTW: time window per customer. CVRPTW: both. | "capacity" = CVRP; "time slot" = VRPTW; "both" = CVRPTW |
| MDVRP vs VRPSF vs PVRP vs SDVRP | MDVRP: several depots, each stop to one depot. VRPSF: remote restocking facilities on the route. PVRP: service over M days. SDVRP: one customer served by more than one vehicle. | "several depots" = MDVRP; "remote restock" = VRPSF; "over days" = PVRP; "split demand" = SDVRP |
| SDVRP vs CVRP | CVRP forbids a route from exceeding capacity and visits each customer once. SDVRP lets one customer be shared between vehicles. | "more than one vehicle per customer" = SDVRP |
| Static VRP vs dynamic VRP | Static: all information known and unchanging. Dynamic: information arrives or changes after routes are built; needs real-time algorithms. | "known beforehand and unchanged" = static; "new requests after routes" = dynamic |
| Advance request customer vs immediate request customer | Advance: booked before planning (static). Immediate: arrives during execution (dynamic). | "booked in advance" vs "short notice" |
| Sensor vs sensor node vs sensor network vs IoT | Sensor: turns a physical phenomenon into a signal. Node: sensor plus processor, memory, transceiver, power. Network: many nodes close to the phenomenon. IoT: all connected physical objects. | "one device" = sensor; "a unit with processor and radio" = node; "many nodes" = network; "everyday objects connected" = IoT |
| Sensor vs actuator | Sensor: physical to electrical signal. Actuator: electrical signal to physical action. | "physical to signal" = sensor |
| Sensor node component vs central data warehouse | Sensor node components: sensors, processor, memory, transceiver, power supply. A central data warehouse is not part of a node. | "on the node" = component; "central store" = not a component |
| Four IoT layers | Sensing and identification (sees things); network construction (carries data); information processing (stores and computes); integrated application (uses the result). | "data centre, data mining" = processing; "WWAN, WLAN" = network; "smart grid, smart transport" = application |
| Tracking vs tracing | Tracking: current and future position. Tracing: reconstruct the past path. | "now and next" = tracking; "history" = tracing |
| Traceability vs tracking | Traceability is the wider ability to show history, distribution, location and application, with sustainability claims. Tracking is the live position. | "history and claims" = traceability; "live position" = tracking |
| Four traceability needs | Values and efficiencies (money, risk, supply). Stakeholder pressure (customer and NGO demands). Regulation (law). Global alignment (standard worldwide). | "risk, supply, efficiency" = values; "customers ask" = stakeholder; "law" = regulation; "worldwide standard" = alignment |
| Physical vs mechanical vs biochemical vs microbiological changes | Physical: temperature and humidity (freezing, evaporation). Mechanical: squashing, vibration, shock, tilt. Biochemical: ripening, enzymes, gases (ethylene, CO2, oxygen). Microbiological: molds, yeast, bacteria, H2S. | "freezing, drying" = physical; "shaking, bumping, tilting" = mechanical; "ripening gas" = biochemical; "mould, H2S" = microbiological |
| Vibration vs shock vs tilt | Vibration: continuous shaking over time. Shock: high-force sudden impact. Tilt: pallets or cargo leaning. | "continuous" = vibration; "sudden, high force" = shock; "leaning" = tilt |
| Ethylene vs hydrogen sulfide vs carbon dioxide | Ethylene: released by fruit ripening and spreads to other goods. H2S: produced by favourable microbial conditions. CO2: from respiration and allelopathy, sensed by infrared absorption. | "ripening spreads" = ethylene; "favourable microbial" = H2S; "refrigerated container CO2" = infrared absorption |
| Temperature vs humidity for produce | Temperature: stops the metabolic process (freezing point). Humidity: stops drying out (keep 85 to 95 percent). | "ice" = temperature; "water loss, drying" = humidity |
| Electrochemical vs catalytic combustion vs infrared absorption | Electrochemical: oxygen and H2S. Catalytic combustion: ethylene. Infrared absorption: CO2. | match the gas to its mechanism |
| Location sensing options | GPS: satellite. Cellular: GSM/3G. WiFi, RFID or WSN: short range. UWB: ultra wide band. | "satellites" = GPS; "short range" = WiFi/RFID/WSN |
| Descriptive vs predictive vs prescriptive | Descriptive: what happened. Predictive: what will happen and why. Prescriptive: what to do and best outcome. | "history, dashboard" = descriptive; "forecast, data mining" = predictive; "optimise, simulate" = prescriptive |
| Predictive vs prescriptive | Predictive forecasts. Prescriptive picks the best action. | "what will" = predictive; "what should I do" = prescriptive |
| OLTP vs OLAP vs RTAP | OLTP: records transactions. OLAP: analyses the data warehouse from many angles. RTAP: processes streams within seconds. | "transactions" = OLTP; "warehouse, drill down" = OLAP; "seconds, alerts" = RTAP |
| Volume vs velocity vs variety vs veracity | Volume: amount. Velocity: speed. Variety: formats. Veracity: doubt about accuracy. | "amount" = volume; "speed" = velocity; "formats" = variety; "doubt, gaps, conflicts" = veracity |
| Big data vs traditional data | Traditional: small to mid-size, structured, ad hoc queries. Big data: very large, many sources, real-time, optimisation and prediction. | "very large, many sources" = big data |
| Descriptive dashboard vs real-time alert | Dashboard summarises the past and present. An RTAP alert reacts within seconds to a stream. | "dashboard, report" = descriptive; "within seconds" = RTAP |

---

## Must-remember facts

### Definitions as the slides word them

| Term | Definition on the slide | Source named on the slide |
|---|---|---|
| AIDC | "technology to identify objects, and automatically collect data about them and update the data into software systems without human intervention" | Lecture slide 4 |
| Collection of inventory data | requires integration of automatic data capture and transfer technologies | Lecture slide 4 |
| GPS | "a space-based radio navigation system owned by the United States government and operated by the United States Air Force" | Wikipedia (slide 39) |
| GIS | "software systems with capability for input, storage, manipulation/analysis and output/display of geographic (spatial) information" | Lecture slide 46 |
| Dynamic VRP setting | "not all information relevant to the planning of the routes is known by the planner when the routing process begins" | Lecture slide 63 |
| Sensor | "converts physical phenomenon e.g. heat, light, motion, vibration, and sound into electrical signals" | Lecture slide 73 |
| IoT (lecture) | "the network of physical objects--devices, vehicles, buildings and other items embedded with electronics, software, sensors, and network connectivity" | Lecture slide 73 |
| IoT vision | "connectivity for anything, at anytime and anywhere" | ITU 2005, slide 75 |
| IoT (European Commission) | "things having identities and virtual personalities operating in smart spaces using intelligent interfaces" | European Commission Information Society, 2008 |
| Traceability | "the ability to trace and identify the history, distribution, location and application of products, parts and materials" | Lecture slide 80 |
| Food traceability | "the ability to track any food, feed, food-producing animal or substance ... through all the stages of production, processing and distribution" | EU General Food Law Regulation (178/2002, article 18), slide 83 |
| Analytics | "the use of data, information technology, statistical analysis, quantitative methods, and mathematical or computer-based models" | Lecture slide 95 |
| Big data | "data whose scale, diversity, and complexity require new architecture, techniques, algorithms, and analytics to manage it and extract value and hidden knowledge" | WPI lecture slides (slide 99) |
| Tracking vs tracing | tracking = "current status and the future"; tracing = "the past" | Lecture slide 79 |

### Numbers and lists, with memory tricks

| List or number | Items | Memory trick |
|---|---|---|
| RFID frequency bands (3) | low (125/134 kHz), high (13.56 MHz), ultra high (850 to 950 MHz) | "LHU": low is around 125, high is 13.56, ultra is 850 to 950. |
| Tag power classes (3) | active (battery, highest range, most expensive), semi-active (battery, uses reader field, medium), passive (no battery, lowest) | "A-S-P": more battery, more range. Active is A for "all-in". |
| Tag memory classes (3) | read-only, write-once read-many (WORM), read-write | "Read, once, rewrite": never changed, once then many reads, rewritten. |
| Reader types (2 pairs) | fixed vs handheld; single-frequency vs multi-frequency | "Fixed = fastened to a wall. Handheld = in your hand. Multi = many radio stations." |
| RFID technical concerns (6) | tag orientation, reader coordination, packaging independence, multiple standards, data formats, electromagnetic interference | Story it: a tag held sideways, two readers talking, metal foil, many national rules, messy memory, humming machines. |
| RFID other concerns (2) | privacy, security | Privacy: read from far away. Security: passive tags are too weak for locks. |
| EPC bits (4) | header 8, manufacturer 28, product 24, serial 36 | Read it like an address: country, product, item. 8, 28, 24, 36 add up to 96. |
| EPCglobal pillars (5) | EPC, ID system, EPC middleware, discovery services, EPC information services | "E-I-M-D-I": a postal service: stamp, post box, sorting office, address book, record office. |
| GPS segments (3) | space (28 satellites), user (receivers), control (five ground stations) | "Sky, hand, ground": satellites in the sky, receivers in the hand, stations on the ground. |
| GPS fix (4 satellites) | at least 4 satellites for a 3D position | "Four makes a fix in three dimensions." |
| VRP variants (8) | CVRP, VRPTW, CVRPTW, MDVRP, PVRP, SDVRP, SVRP, VRPSF | Capacity (C), time (T), multiple depots (M), periodic (P), split (S), stochastic (S), satellites (SF). |
| IoT four layers (4) | sensing and identification, network construction, information processing, integrated application | "See, Carry, Think, Use": bottom to top. |
| IoT challenges (4) | technology standardisation, managing rapid innovation, privacy and security, governance | "Standards, Speed, Secrets, Steering": four questions. |
| Traceability needs (4) | values and efficiencies, stakeholder pressure, regulation, global alignment | "Value, Voice, Law, World": risk and money, customers, government, whole globe. |
| Physical change controls (2) | temperature (freezing stops metabolism), humidity (85 to 95 percent) | "Cold stops the clock; damp keeps it fresh." |
| Mechanical damage forces (3) | continuous vibration, high-force shock, tilt | "Shake, Bump, Lean": vibration, shock, tilt. |
| Analytics types (3) | descriptive, predictive, prescriptive | "Look back, look ahead, look for the best action." |
| Big data characteristics (3 + 1) | volume, velocity, variety; veracity (the 4th) | "VVV and a doubt": amount, speed, mix, doubt. |
| Analytics processing (3) | OLTP, OLAP, RTAP | Transactions, analysis, real time: T, A, R. |
| Big data growth (slide 100) | 44 times from 2009 to 2020; 0.8 to 35 zettabytes | "Forty-four times, zero-point-eight to thirty-five zettabytes." |
| Supply chain analytics groups (3) | data management, IT-based planning, performance management | "Data in, Plan, Score": pipes, planning desk, scoreboard. |

### Example companies and case studies from the slides

| Name | Where on the slides | What it illustrates |
|---|---|---|
| Wal-Mart | Slide 30, 111 | RFID mandate pushing suppliers to tag; Wal-Mart RFID chips already exist |
| US Department of Defense (DOD) | Slide 30 | RFID mandate that drives adoption |
| Auto-ID MIT and Auto-ID Center | Slide 19 | EPC origins (1999 to 2003); technology passed to EPCglobal |
| EPCglobal | Slide 19 | Administers and develops EPC standards |
| Savant | Slides 21 and 26 | EPC middleware computer that manages readers and queries ONS |
| Object Naming Service (ONS) | Slides 20 and 21 | Maps an EPC to the URL of product information |
| PML (Physical Markup Language) server | Slide 21 | Stores full product details per EPC; used for recall |
| Cherry Soda and Super Cola Inc. | Slide 28 (picture) | Worked example: EPC leads to Boston shipment and maker's record |
| GPS (US Air Force operated) | Slide 39 | Space-based navigation, free for civilian users since 1996 |
| TIGER files | Slide 47 | Digitised spatial data source for GIS |
| UPS | Slide 112 | Tracks packages and monitors and routes vehicles (big data) |
| Macys.com | Slide 112 | Personalisation of ads (big data) |
| Bank of America | Slide 112 | Understanding customers by channel |
| Citigroup | Slide 112 | Monitoring customer credit risk |
| Sears Holdings | Slide 112 | Real-time retail monitoring |
| Verizon Wireless | Slide 112 | Selling data on mobile phone user behaviour |
| Schneider International | Slide 112 | Trucking sensors for location and driver behaviour |
| United Healthcare | Slide 112 | Voice calls and text mining |
| Kyruus | Slide 112 | Start-up; physician networks; patient leakage |
| Recorded Future | Slide 112 | Start-up; predicts from internet data |
| American Airlines | Slide 113 | Yield management (real-time decisions) |
| Waller and Fawcett (2013) | Slides 110, 111 | Research source for supply chain big data |
| Pang et al. (2015) | Slide 82 | Food supply chain IoT illustration |
| Giaglis, Minis, Tatarakis, Zeimpekis (2004) | Slide 44 | Generic architecture for dynamic real-time vehicle management |
| Hadoop, MapReduce | Slide 108 | Big data technology tools |
| Teradata | Slide 103 | Source of the "Big Data = transactions + interactions + observations" graphic |

---

## How this week gets asked

- **Scenario, then name the concept.** Most questions give a short story (a warehouse, a fleet, a food shipment, a data team) and ask which technology, layer, routing variant or analytics type it points to.
- **Which tag, reader or middleware?** Power and memory classes, and the reader-then-middleware order (bank Q2, Q3).
- **Which EPC part, pillar or component?** EPC bit lengths, the five pillars, Savant, ONS and the PML server (bank Q4).
- **Which GPS segment or position fix?** The three segments, the four-satellite fix, and GPS taking over once RFID coverage ends (bank Q6).
- **Which VRP variant or sub-problem?** Capacity, time windows, several depots, split demand, satellite restocking, static versus dynamic (bank Q8, Q9).
- **Which sensing mechanism, gas or damage type?** The sensing table, ethylene, hydrogen sulfide, CO2, vibration, tilt and the humidity range.
- **Which IoT layer, challenge or definition?** The four layers, the four challenges, and the IoT definitions.
- **Which traceability need?** The four needs, and the food traceability definition.
- **Which analytics type, big data characteristic or processing layer?** Descriptive, predictive and prescriptive; volume, velocity, variety and veracity; OLTP, OLAP and RTAP.
- **Which RFID concern?** Tag orientation, reader coordination, packaging, standards, data formats, interference, privacy and security.
- **Which definition?** AIDC, tracking versus tracing, big data, IoT (bank Q10).

## Practice walk-through

**Q1.** RFID improves capture by enabling ___ identification and reducing dependence on ___ during scanning.
- Answer: C) unique-item, line-of-sight conditions
- Why: RFID gives each item its own code and does not need a clear line of sight. See "Bar code (and its weaknesses)" and "RFID solution".
- Trap: A) category-level, middleware. Bar codes give category-level identity, so this option reverses the idea.

**Q2.** An RFID tag stores a unique identifier. The RFID ___ captures it, and the RFID ___ processes the data before updating enterprise systems.
- Answer: D) reader, middleware
- Why: The reader captures the code, and the middleware processes it and updates the database or ERP. See "RFID reader" and "RFID middleware".
- Trap: A) middleware, reader. The order is reversed; the middleware comes after the reader.

**Q3.** Statement I: fixed readers are generally installed at permanent locations. Statement II: multi-frequency readers can operate across more than one frequency band. Which option is correct?
- Answer: C) Both I and II are correct
- Why: Both statements match the reader classification cards. See "Fixed reader" and "Single-frequency and multi-frequency readers".
- Trap: A) Only I is correct. Statement II is also true, so picking only I misses it.

**Q4.** Within the EPCglobal Network, the ___ resolves EPC references, while the ___ stores detailed information about the identified object.
- Answer: D) Discovery Services (ONS), EPC Information Services
- Why: Discovery services (through the Object Naming Service) resolve the reference. EPC information services hold the PML details. See "Discovery services and ONS" and "EPC Information Services and PML server".
- Trap: A) EPC Middleware, EPC Reader. Middleware filters and manages readers; it does not resolve the reference.

**Q5.** A manufacturer stores product information directly on rewritable RFID tags. The receiver cannot interpret it because the encoding scheme differs. This is primarily related to:
- Answer: B) lack of standardized data formats
- Why: The data format on rewritable tags is not standardised. See "Technical concern: data formats".
- Trap: A) electromagnetic interference. That concern is about machines and metals blocking signals, not the meaning of stored data.

**Q6.** A shipment leaves an RFID-equipped warehouse and travels across the country. Managers need continuous visibility of vehicle location. Which technology becomes essential after the shipment leaves RFID coverage?
- Answer: C) GPS
- Why: Once outside antenna coverage, RFID cannot track; GPS does. See "RFID coverage limit".
- Trap: A) EPC Information Service. It stores product details; it does not track a moving vehicle.

**Q7.** A transportation planner wants software that combines road maps, depot locations, customer positions and vehicle attributes for route analysis. Which technology provides this?
- Answer: D) GIS
- Why: GIS stores and analyses spatial and attribute data. See "GIS (Geographical Information System)".
- Trap: B) GPS. GPS gives positions, but it does not hold the map layers and attributes for analysis.

**Q8.** A logistics company has vehicles with limited carrying capacity. Each customer must be visited exactly once, and route demand cannot exceed vehicle capacity. Which routing variant?
- Answer: B) Capacitated Vehicle Routing Problem (CVRP)
- Why: The capacity limit is the defining feature of CVRP. See "Capacitated VRP (CVRP)".
- Trap: A) Vehicle Routing Problem with Time Windows (VRPTW). That variant is about delivery time slots, not capacity.

**Q9.** Which situation best represents a Dynamic Vehicle Routing Problem?
- Answer: D) New customer requests arrive after routes have already been generated
- Why: Information changes after the initial routes are built. See "Dynamic VRP (DVRP)".
- Trap: A) All customer requests are known before planning begins. That describes the static VRP.

**Q10.** Statement I: tracking focuses on the current and future status of an item. Statement II: tracing focuses on reconstructing the historical path. Which option is correct?
- Answer: D) Both I and II are correct
- Why: Both statements match the tracking and tracing cards.
- Trap: C) Neither I nor II is correct. Both statements are the standard definitions on the slide.

---

## 60-second recap

- AIDC identifies and records items with no human typing. RFID is the radio version, and it identifies each unique item.
- The RFID setup has three parts: the tag holds the code, the reader reads it, and the middleware processes it into the database or ERP.
- Tags are classed by power (active, semi-active, passive) and by memory (read-only, WORM, read-write).
- The EPC is a 96-bit number: header 8, manufacturer 28, product 24, serial 36.
- The EPCglobal network has five pillars. Middleware (Savant) filters data, ONS (discovery) finds the address, and EPC information services hold the details.
- RFID's technical concerns: tag orientation, reader coordination, packaging, multiple standards, data formats, interference, privacy and security.
- GPS has three segments: 28 satellites, user receivers, and five control stations. Four satellites give a 3D fix. GIS adds spatial and attribute data to location, so it supports decisions.
- The VRP has two sub-problems: clustering customers into routes, then ordering each route's tour.
- Know the VRP variants: CVRP (capacity), VRPTW (time windows), CVRPTW (both), MDVRP (several depots), PVRP (over days), SDVRP (split demand), SVRP (random), VRPSF (satellite restocking).
- Static VRP has all information up front; dynamic VRP gets new information mid-route.
- The IoT is a network of physical objects with sensors and connectivity. Its four layers: sensing and identification, network construction, information processing, integrated application.
- Tracking covers now and next; tracing covers the past. Traceability proves history and supports recall.
- Food spoilage has four causes: physical (temperature, humidity), mechanical (vibration, shock, tilt), biochemical (ethylene, CO2), microbiological (molds, H2S).
- Analytics climbs from descriptive (what happened) to predictive (what will happen) to prescriptive (what to do).
- Big data is volume, velocity and variety, with veracity as the fourth V. OLTP records, OLAP analyses the warehouse, RTAP reacts in seconds.

---

Coverage check: 45/45 mock questions answerable from this guide.
