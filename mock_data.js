const MOCK_DATA = [
 {
  "week": 1,
  "mocks": [
   {
    "mock": 1,
    "questions": [
     {
      "n": 1,
      "text": "What does a transducer do?",
      "options": [
       {
        "letter": "A",
        "text": "Measures only electrical signals"
       },
       {
        "letter": "B",
        "text": "Converts a signal from one physical form to another"
       },
       {
        "letter": "C",
        "text": "Converts digital data into a human-readable display"
       },
       {
        "letter": "D",
        "text": "Stores a signal without changing it"
       }
      ],
      "correct": "B"
     },
     {
      "n": 2,
      "text": "Which example illustrates a microphone acting as a transducer?",
      "options": [
       {
        "letter": "A",
        "text": "Converting sound into an electrical signal"
       },
       {
        "letter": "B",
        "text": "Converting electrical energy into light"
       },
       {
        "letter": "C",
        "text": "Converting strain into mechanical motion"
       },
       {
        "letter": "D",
        "text": "Converting heat into sound"
       }
      ],
      "correct": "A"
     },
     {
      "n": 3,
      "text": "What is the output of a sensor, before it is presented in human-readable form?",
      "options": [
       {
        "letter": "A",
        "text": "A signal"
       },
       {
        "letter": "B",
        "text": "A control policy"
       },
       {
        "letter": "C",
        "text": "A mechanical actuator"
       },
       {
        "letter": "D",
        "text": "A physical stimulus"
       }
      ],
      "correct": "A"
     },
     {
      "n": 4,
      "text": "Which characteristic describes the smallest input change a sensor can detect?",
      "options": [
       {
        "letter": "A",
        "text": "Range"
       },
       {
        "letter": "B",
        "text": "Linearity"
       },
       {
        "letter": "C",
        "text": "Resolution"
       },
       {
        "letter": "D",
        "text": "Accuracy"
       }
      ],
      "correct": "C"
     },
     {
      "n": 5,
      "text": "A sensor is held at a specific reading for a long time and its measurements gradually differ. Which characteristic is being observed?",
      "options": [
       {
        "letter": "A",
        "text": "Repeatability"
       },
       {
        "letter": "B",
        "text": "Drift"
       },
       {
        "letter": "C",
        "text": "Sensitivity"
       },
       {
        "letter": "D",
        "text": "Range"
       }
      ],
      "correct": "B"
     },
     {
      "n": 6,
      "text": "Which sensor category responds to the magnitude, direction, and orientation of an input?",
      "options": [
       {
        "letter": "A",
        "text": "Vector sensor"
       },
       {
        "letter": "B",
        "text": "Passive sensor"
       },
       {
        "letter": "C",
        "text": "Scalar sensor"
       },
       {
        "letter": "D",
        "text": "Analog sensor"
       }
      ],
      "correct": "A"
     },
     {
      "n": 7,
      "text": "A light-dependent resistor changes its resistance continuously with incident light intensity. How is it classified in the lecture?",
      "options": [
       {
        "letter": "A",
        "text": "Analog sensor"
       },
       {
        "letter": "B",
        "text": "Active sensor"
       },
       {
        "letter": "C",
        "text": "Digital sensor"
       },
       {
        "letter": "D",
        "text": "Vector sensor"
       }
      ],
      "correct": "A"
     },
     {
      "n": 8,
      "text": "Which statement describes a first-order sensor response?",
      "options": [
       {
        "letter": "A",
        "text": "Its response is independent of the input"
       },
       {
        "letter": "B",
        "text": "Its output oscillates before reaching steady state"
       },
       {
        "letter": "C",
        "text": "It responds with no delay and has no energy-storing element"
       },
       {
        "letter": "D",
        "text": "Its output approaches its final value gradually"
       }
      ],
      "correct": "D"
     },
     {
      "n": 9,
      "text": "Which device is an example of an active sensor in the lecture?",
      "options": [
       {
        "letter": "A",
        "text": "Temperature sensor"
       },
       {
        "letter": "B",
        "text": "Radar"
       },
       {
        "letter": "C",
        "text": "Water-level sensor"
       },
       {
        "letter": "D",
        "text": "Soil-moisture sensor"
       }
      ],
      "correct": "B"
     },
     {
      "n": 10,
      "text": "What is the primary role of an actuator in a system?",
      "options": [
       {
        "letter": "A",
        "text": "To convert a physical quantity into a measurement signal"
       },
       {
        "letter": "B",
        "text": "To classify input signals by direction"
       },
       {
        "letter": "C",
        "text": "To perform a required control action, typically mechanical"
       },
       {
        "letter": "D",
        "text": "To store sensor readings for later analysis"
       }
      ],
      "correct": "C"
     },
     {
      "n": 11,
      "text": "Which actuator type uses hydraulic fluid, gas, or differential air pressure to produce linear displacement?",
      "options": [
       {
        "letter": "A",
        "text": "Electric rotary actuator"
       },
       {
        "letter": "B",
        "text": "Linear chain actuator"
       },
       {
        "letter": "C",
        "text": "Manual rotary actuator"
       },
       {
        "letter": "D",
        "text": "Fluid-power linear actuator"
       }
      ],
      "correct": "D"
     },
     {
      "n": 12,
      "text": "Which actuator uses sprockets and specially designed chain sections to provide linear motion?",
      "options": [
       {
        "letter": "A",
        "text": "Electric linear actuator"
       },
       {
        "letter": "B",
        "text": "Manual linear actuator"
       },
       {
        "letter": "C",
        "text": "Linear chain actuator"
       },
       {
        "letter": "D",
        "text": "Fluid-power rotary actuator"
       }
      ],
      "correct": "C"
     },
     {
      "n": 13,
      "text": "What does the PHY layer of IEEE 802.15.4 specify?",
      "options": [
       {
        "letter": "A",
        "text": "Network-level IPv6 address assignment"
       },
       {
        "letter": "B",
        "text": "Message persistence and lifespan"
       },
       {
        "letter": "C",
        "text": "Application service discovery"
       },
       {
        "letter": "D",
        "text": "Frequency band, transmission power, and modulation scheme"
       }
      ],
      "correct": "D"
     },
     {
      "n": 14,
      "text": "Which modulation and data rate pair is associated with IEEE 802.15.4 at 2.4 GHz in the lecture?",
      "options": [
       {
        "letter": "A",
        "text": "GFSK at 100 kbps"
       },
       {
        "letter": "B",
        "text": "CSS at 40 kbps"
       },
       {
        "letter": "C",
        "text": "OQPSK at 250 kbps"
       },
       {
        "letter": "D",
        "text": "BPSK at 20 kbps"
       }
      ],
      "correct": "C"
     },
     {
      "n": 15,
      "text": "What access method does IEEE 802.15.4 use to reduce collisions?",
      "options": [
       {
        "letter": "A",
        "text": "Circuit switching"
       },
       {
        "letter": "B",
        "text": "CSMA-CA"
       },
       {
        "letter": "C",
        "text": "Token passing"
       },
       {
        "letter": "D",
        "text": "TDMA"
       }
      ],
      "correct": "B"
     }
    ]
   },
   {
    "mock": 2,
    "questions": [
     {
      "n": 1,
      "text": "In a sequence of measurements made under the same conditions, what does repeatability describe?",
      "options": [
       {
        "letter": "A",
        "text": "The highest and lowest measurable input"
       },
       {
        "letter": "B",
        "text": "The deviation of the response curve from a straight line"
       },
       {
        "letter": "C",
        "text": "The output change per unit input change"
       },
       {
        "letter": "D",
        "text": "The deviation among measurements in the sequence"
       }
      ],
      "correct": "D"
     },
     {
      "n": 2,
      "text": "A sensor's response curve is compared with a particular straight line. Which characteristic describes the deviation?",
      "options": [
       {
        "letter": "A",
        "text": "Sensitivity"
       },
       {
        "letter": "B",
        "text": "Linearity"
       },
       {
        "letter": "C",
        "text": "Drift"
       },
       {
        "letter": "D",
        "text": "Accuracy"
       }
      ],
      "correct": "B"
     },
     {
      "n": 3,
      "text": "Which sensor type cannot independently sense its input, according to the lecture classification?",
      "options": [
       {
        "letter": "A",
        "text": "Passive sensor"
       },
       {
        "letter": "B",
        "text": "Digital sensor"
       },
       {
        "letter": "C",
        "text": "Vector sensor"
       },
       {
        "letter": "D",
        "text": "Active sensor"
       }
      ],
      "correct": "A"
     },
     {
      "n": 4,
      "text": "Which is an example of a scalar sensor in the lecture?",
      "options": [
       {
        "letter": "A",
        "text": "Motion detector"
       },
       {
        "letter": "B",
        "text": "Accelerometer"
       },
       {
        "letter": "C",
        "text": "Gyroscope"
       },
       {
        "letter": "D",
        "text": "Gas sensor"
       }
      ],
      "correct": "D"
     },
     {
      "n": 5,
      "text": "Which description fits a zero-order sensor system?",
      "options": [
       {
        "letter": "A",
        "text": "It contains energy-storage and dissipation elements"
       },
       {
        "letter": "B",
        "text": "The output approaches its final value gradually"
       },
       {
        "letter": "C",
        "text": "The output responds to the input with no delay"
       },
       {
        "letter": "D",
        "text": "The output oscillates before settling"
       }
      ],
      "correct": "C"
     },
     {
      "n": 6,
      "text": "What is required for an actuator to operate, in addition to its control signal?",
      "options": [
       {
        "letter": "A",
        "text": "A reference standard"
       },
       {
        "letter": "B",
        "text": "An IPv6 address"
       },
       {
        "letter": "C",
        "text": "An energy source"
       },
       {
        "letter": "D",
        "text": "A visual marker"
       }
      ],
      "correct": "C"
     },
     {
      "n": 7,
      "text": "Which actuator converts electrical energy into rotational motion?",
      "options": [
       {
        "letter": "A",
        "text": "Electric rotary actuator"
       },
       {
        "letter": "B",
        "text": "Fluid-power linear actuator"
       },
       {
        "letter": "C",
        "text": "Linear chain actuator"
       },
       {
        "letter": "D",
        "text": "Manual linear actuator"
       }
      ],
      "correct": "A"
     },
     {
      "n": 8,
      "text": "What is the purpose of the IEEE 802.15.4 MAC layer as described in the lecture?",
      "options": [
       {
        "letter": "A",
        "text": "To define the radio frequency band and modulation"
       },
       {
        "letter": "B",
        "text": "To address medium access and flow control"
       },
       {
        "letter": "C",
        "text": "To translate IPv6 addresses into URLs"
       },
       {
        "letter": "D",
        "text": "To perform application-level data analytics"
       }
      ],
      "correct": "B"
     },
     {
      "n": 9,
      "text": "What is a typical IEEE 802.15.4 transmission pattern that helps reduce power consumption?",
      "options": [
       {
        "letter": "A",
        "text": "Infrequent short packets with a duty cycle below 1%"
       },
       {
        "letter": "B",
        "text": "Long packets sent at fixed intervals"
       },
       {
        "letter": "C",
        "text": "Continuous high-rate transmission"
       },
       {
        "letter": "D",
        "text": "Frequent retransmission of every packet"
       }
      ],
      "correct": "A"
     },
     {
      "n": 10,
      "text": "Which topology is included by IEEE 802.15.4?",
      "options": [
       {
        "letter": "A",
        "text": "Fully connected cellular topology"
       },
       {
        "letter": "B",
        "text": "Bus only"
       },
       {
        "letter": "C",
        "text": "Star"
       },
       {
        "letter": "D",
        "text": "Ring only"
       }
      ],
      "correct": "C"
     },
     {
      "n": 11,
      "text": "In a Zigbee network, which node initializes, maintains, and controls the network?",
      "options": [
       {
        "letter": "A",
        "text": "End device"
       },
       {
        "letter": "B",
        "text": "Coordinator"
       },
       {
        "letter": "C",
        "text": "Application processor"
       },
       {
        "letter": "D",
        "text": "Leaf node"
       }
      ],
      "correct": "B"
     },
     {
      "n": 12,
      "text": "What is a defining property of Zigbee end devices?",
      "options": [
       {
        "letter": "A",
        "text": "There must be exactly one in every network"
       },
       {
        "letter": "B",
        "text": "They maintain the entire network's schedule"
       },
       {
        "letter": "C",
        "text": "They are the only nodes allowed to route packets"
       },
       {
        "letter": "D",
        "text": "They do not contribute to routing"
       }
      ],
      "correct": "D"
     },
     {
      "n": 13,
      "text": "What does 6LoWPAN stand for?",
      "options": [
       {
        "letter": "A",
        "text": "Low-power wireless protocol for application networking"
       },
       {
        "letter": "B",
        "text": "IPv6 over Low-Power Wireless Personal Area Networks"
       },
       {
        "letter": "C",
        "text": "Low-power IPv4 over local optical networks"
       },
       {
        "letter": "D",
        "text": "Layer 6 routing over personal wide-area networks"
       }
      ],
      "correct": "B"
     },
     {
      "n": 14,
      "text": "Why does 6LoWPAN use an adaptation layer between MAC and network layers?",
      "options": [
       {
        "letter": "A",
        "text": "To replace the IEEE 802.15.4 physical layer with Ethernet"
       },
       {
        "letter": "B",
        "text": "To convert IPv6 into an analog signal"
       },
       {
        "letter": "C",
        "text": "To fragment and reassemble packets and compress headers for constrained links"
       },
       {
        "letter": "D",
        "text": "To eliminate the need for link-layer security"
       }
      ],
      "correct": "C"
     },
     {
      "n": 15,
      "text": "Which security mechanism is identified for 6LoWPAN through IEEE 802.15.4?",
      "options": [
       {
        "letter": "A",
        "text": "AES-128 link-layer authentication and encryption"
       },
       {
        "letter": "B",
        "text": "No link-layer security support"
       },
       {
        "letter": "C",
        "text": "RSA-2048 authentication"
       },
       {
        "letter": "D",
        "text": "TLS certificates stored in the sensor"
       }
      ],
      "correct": "A"
     }
    ]
   },
   {
    "mock": 3,
    "questions": [
     {
      "n": 1,
      "text": "In an IoT network, what does a deadline policy do for data timeliness?",
      "options": [
       {
        "letter": "A",
        "text": "Drops stale data and notifies the application when a deadline is missed"
       },
       {
        "letter": "B",
        "text": "Sets the maximum number of buffered messages"
       },
       {
        "letter": "C",
        "text": "Sets the IPv6 packet size"
       },
       {
        "letter": "D",
        "text": "Controls how many old data instances are stored"
       }
      ],
      "correct": "A"
     },
     {
      "n": 2,
      "text": "What is a latency budget in IoT network QoS?",
      "options": [
       {
        "letter": "A",
        "text": "Time a message remains valid after delivery"
       },
       {
        "letter": "B",
        "text": "Maximum size of the message buffer"
       },
       {
        "letter": "C",
        "text": "Maximum number of retransmissions allowed"
       },
       {
        "letter": "D",
        "text": "Maximum time difference between transmission and reception"
       }
      ],
      "correct": "D"
     },
     {
      "n": 3,
      "text": "What does a durability policy support?",
      "options": [
       {
        "letter": "A",
        "text": "Selection of a radio modulation scheme"
       },
       {
        "letter": "B",
        "text": "Limiting the sensor's sampling frequency"
       },
       {
        "letter": "C",
        "text": "Persistence of transmitted data so the receiver can access it if the sender is unavailable"
       },
       {
        "letter": "D",
        "text": "Compression of the IPv6 header"
       }
      ],
      "correct": "C"
     },
     {
      "n": 4,
      "text": "Which policy controls how many previous data instances remain available to a receiver?",
      "options": [
       {
        "letter": "A",
        "text": "Resource limit policy"
       },
       {
        "letter": "B",
        "text": "Reliability policy"
       },
       {
        "letter": "C",
        "text": "History policy"
       },
       {
        "letter": "D",
        "text": "Deadline policy"
       }
      ],
      "correct": "C"
     },
     {
      "n": 5,
      "text": "Which MQTT QoS level is described as “at least once” delivery?",
      "options": [
       {
        "letter": "A",
        "text": "QoS 2"
       },
       {
        "letter": "B",
        "text": "QoS 3"
       },
       {
        "letter": "C",
        "text": "QoS 0"
       },
       {
        "letter": "D",
        "text": "QoS 1"
       }
      ],
      "correct": "D"
     },
     {
      "n": 6,
      "text": "What does MQTT QoS 0 provide?",
      "options": [
       {
        "letter": "A",
        "text": "At-least-once delivery with retry"
       },
       {
        "letter": "B",
        "text": "At-most-once, unacknowledged delivery without retry"
       },
       {
        "letter": "C",
        "text": "Exactly-once delivery with acknowledgement"
       },
       {
        "letter": "D",
        "text": "Guaranteed delivery in a fixed time slot"
       }
      ],
      "correct": "B"
     },
     {
      "n": 7,
      "text": "Which transport protocol does CoAP use in the lecture's request/response description?",
      "options": [
       {
        "letter": "A",
        "text": "UDP"
       },
       {
        "letter": "B",
        "text": "Bluetooth"
       },
       {
        "letter": "C",
        "text": "FTP"
       },
       {
        "letter": "D",
        "text": "TCP"
       }
      ],
      "correct": "A"
     },
     {
      "n": 8,
      "text": "What must happen to a CoAP confirmable message?",
      "options": [
       {
        "letter": "A",
        "text": "It must be retransmitted only by a subscriber"
       },
       {
        "letter": "B",
        "text": "It must be stored indefinitely by a resource directory"
       },
       {
        "letter": "C",
        "text": "The recipient must explicitly acknowledge or reject it"
       },
       {
        "letter": "D",
        "text": "It must be broadcast to every device"
       }
      ],
      "correct": "C"
     },
     {
      "n": 9,
      "text": "Which CoAP request method is used to retrieve a resource?",
      "options": [
       {
        "letter": "A",
        "text": "PUSH"
       },
       {
        "letter": "B",
        "text": "GET"
       },
       {
        "letter": "C",
        "text": "DELETE"
       },
       {
        "letter": "D",
        "text": "OBSERVE"
       }
      ],
      "correct": "B"
     },
     {
      "n": 10,
      "text": "Which protocol uses XML-based messaging and supports publish/subscribe over TCP?",
      "options": [
       {
        "letter": "A",
        "text": "XMPP"
       },
       {
        "letter": "B",
        "text": "CoAP"
       },
       {
        "letter": "C",
        "text": "DDS RTPS"
       },
       {
        "letter": "D",
        "text": "IEEE 1888"
       }
      ],
      "correct": "A"
     },
     {
      "n": 11,
      "text": "Which statement describes the DDS RTPS data model?",
      "options": [
       {
        "letter": "A",
        "text": "Data is sent only as HTTP resources over TCP"
       },
       {
        "letter": "B",
        "text": "Data is transmitted using a single central server"
       },
       {
        "letter": "C",
        "text": "Data must be stored in RFID tags"
       },
       {
        "letter": "D",
        "text": "Data is organized as topics that users may subscribe to"
       }
      ],
      "correct": "D"
     },
     {
      "n": 12,
      "text": "In Z-Wave, what does the controller do?",
      "options": [
       {
        "letter": "A",
        "text": "Relays every message through a resource directory"
       },
       {
        "letter": "B",
        "text": "Sets up the network and manages slave devices"
       },
       {
        "letter": "C",
        "text": "Converts analog sensor readings to digital data"
       },
       {
        "letter": "D",
        "text": "Acts as a passive tag powered by a reader"
       }
      ],
      "correct": "B"
     },
     {
      "n": 13,
      "text": "Which statement about RFID tags is correct?",
      "options": [
       {
        "letter": "A",
        "text": "They operate only at NFC's 13.56 MHz frequency"
       },
       {
        "letter": "B",
        "text": "They require line-of-sight scanning like traditional barcodes"
       },
       {
        "letter": "C",
        "text": "Their data can be read without line of sight"
       },
       {
        "letter": "D",
        "text": "They cannot store digitally encoded data"
       }
      ],
      "correct": "C"
     },
     {
      "n": 14,
      "text": "How is a passive RFID tag powered for data transmission?",
      "options": [
       {
        "letter": "A",
        "text": "Inductively by the reader"
       },
       {
        "letter": "B",
        "text": "By an onboard battery in all cases"
       },
       {
        "letter": "C",
        "text": "By a solar cell"
       },
       {
        "letter": "D",
        "text": "By a Bluetooth controller"
       }
      ],
      "correct": "A"
     },
     {
      "n": 15,
      "text": "Which CoRE component stores information about registered IoT devices for client lookup?",
      "options": [
       {
        "letter": "A",
        "text": "Application processor"
       },
       {
        "letter": "B",
        "text": "Resource Directory"
       },
       {
        "letter": "C",
        "text": "Network ID"
       },
       {
        "letter": "D",
        "text": "Super frame"
       }
      ],
      "correct": "B"
     }
    ]
   }
  ]
 },
 {
  "week": 2,
  "mocks": [
   {
    "mock": 1,
    "questions": [
     {
      "n": 1,
      "text": "What event and technologies are associated with the First Industrial Revolution in the lecture?",
      "options": [
       {
        "letter": "A",
        "text": "Electricity and the assembly line"
       },
       {
        "letter": "B",
        "text": "Semiconductor production and the internet"
       },
       {
        "letter": "C",
        "text": "Steam engine and railway construction"
       },
       {
        "letter": "D",
        "text": "Mobile internet and artificial intelligence"
       }
      ],
      "correct": "C"
     },
     {
      "n": 2,
      "text": "What was a key result of the Second Industrial Revolution?",
      "options": [
       {
        "letter": "A",
        "text": "Smart factories"
       },
       {
        "letter": "B",
        "text": "Mainframes and personal computers"
       },
       {
        "letter": "C",
        "text": "Mass production"
       },
       {
        "letter": "D",
        "text": "Machine use in production"
       }
      ],
      "correct": "C"
     },
     {
      "n": 3,
      "text": "Which development drove the Third Industrial Revolution?",
      "options": [
       {
        "letter": "A",
        "text": "The invention of the steam engine"
       },
       {
        "letter": "B",
        "text": "The assembly line"
       },
       {
        "letter": "C",
        "text": "Production of semiconductors"
       },
       {
        "letter": "D",
        "text": "Ubiquitous mobile internet"
       }
      ],
      "correct": "C"
     },
     {
      "n": 4,
      "text": "At which event was “Industry 4.0” coined as another name for the Fourth Industrial Revolution in 2011?",
      "options": [
       {
        "letter": "A",
        "text": "Hannover Fair"
       },
       {
        "letter": "B",
        "text": "NIST"
       },
       {
        "letter": "C",
        "text": "Dartmouth Conference"
       },
       {
        "letter": "D",
        "text": "International Society of Automation"
       }
      ],
      "correct": "A"
     },
     {
      "n": 5,
      "text": "Which technologies are highlighted as extensively used in the Fourth Industrial Revolution?",
      "options": [
       {
        "letter": "A",
        "text": "Steam engines and railways"
       },
       {
        "letter": "B",
        "text": "Mainframes without network connectivity"
       },
       {
        "letter": "C",
        "text": "Assembly lines and electrification only"
       },
       {
        "letter": "D",
        "text": "AI, machine learning, and cyber-physical systems"
       }
      ],
      "correct": "D"
     },
     {
      "n": 6,
      "text": "Which item is included in the lecture's scope of the Fourth Industrial Revolution?",
      "options": [
       {
        "letter": "A",
        "text": "Hand-operated assembly"
       },
       {
        "letter": "B",
        "text": "Quantum computing"
       },
       {
        "letter": "C",
        "text": "Telegraph networks"
       },
       {
        "letter": "D",
        "text": "Steam-powered looms"
       }
      ],
      "correct": "B"
     },
     {
      "n": 7,
      "text": "What set of design approaches is combined with digital fabrication in the lecture?",
      "options": [
       {
        "letter": "A",
        "text": "Manual drafting, inspection, and packaging"
       },
       {
        "letter": "B",
        "text": "Fixed tooling, batch production, and paper records"
       },
       {
        "letter": "C",
        "text": "Computational design, additive manufacturing, material engineering, and synthetic biology"
       },
       {
        "letter": "D",
        "text": "Fossil-fuel processing and assembly lines"
       }
      ],
      "correct": "C"
     },
     {
      "n": 8,
      "text": "Which example illustrates the lecture's description of digital information goods?",
      "options": [
       {
        "letter": "A",
        "text": "Near-zero transportation and replication costs"
       },
       {
        "letter": "B",
        "text": "Dependence on large physical inventories"
       },
       {
        "letter": "C",
        "text": "Production only through assembly lines"
       },
       {
        "letter": "D",
        "text": "High per-unit transportation costs"
       }
      ],
      "correct": "A"
     },
     {
      "n": 9,
      "text": "Which category is one of the three megatrends identified in the lecture?",
      "options": [
       {
        "letter": "A",
        "text": "Economic"
       },
       {
        "letter": "B",
        "text": "Political"
       },
       {
        "letter": "C",
        "text": "Regulatory"
       },
       {
        "letter": "D",
        "text": "Biological"
       }
      ],
      "correct": "D"
     },
     {
      "n": 10,
      "text": "What is the lecture's definition of sustainability for industry?",
      "options": [
       {
        "letter": "A",
        "text": "Relying on a single non-renewable resource"
       },
       {
        "letter": "B",
        "text": "Continuing at a fixed rate while supporting efficient resource use"
       },
       {
        "letter": "C",
        "text": "Increasing production without limits"
       },
       {
        "letter": "D",
        "text": "Maximizing inventory levels"
       }
      ],
      "correct": "B"
     },
     {
      "n": 11,
      "text": "Which is a stated feature of sustainable industry?",
      "options": [
       {
        "letter": "A",
        "text": "High-waste production"
       },
       {
        "letter": "B",
        "text": "Increasing use of non-renewables"
       },
       {
        "letter": "C",
        "text": "Avoiding resource conservation"
       },
       {
        "letter": "D",
        "text": "Low-waste production"
       }
      ],
      "correct": "D"
     },
     {
      "n": 12,
      "text": "Why is ICT described as the main nervous system of a manufacturing industry?",
      "options": [
       {
        "letter": "A",
        "text": "It enables communication and information sharing within the enterprise and with customers, producers, and suppliers"
       },
       {
        "letter": "B",
        "text": "It directly manufactures every product"
       },
       {
        "letter": "C",
        "text": "It controls only employee hiring"
       },
       {
        "letter": "D",
        "text": "It replaces supply chain management"
       }
      ],
      "correct": "A"
     },
     {
      "n": 13,
      "text": "Which is an example of ICT listed in the lecture?",
      "options": [
       {
        "letter": "A",
        "text": "Assembly-line belt"
       },
       {
        "letter": "B",
        "text": "Enterprise Resource Planning"
       },
       {
        "letter": "C",
        "text": "Additive manufacturing"
       },
       {
        "letter": "D",
        "text": "Thermoset plastic"
       }
      ],
      "correct": "B"
     },
     {
      "n": 14,
      "text": "Which issue is a central environmental concern for supply chain management?",
      "options": [
       {
        "letter": "A",
        "text": "Advertising and product branding"
       },
       {
        "letter": "B",
        "text": "Smartphone adoption"
       },
       {
        "letter": "C",
        "text": "Market capitalization"
       },
       {
        "letter": "D",
        "text": "Climate change, contamination, and resource consumption"
       }
      ],
      "correct": "D"
     },
     {
      "n": 15,
      "text": "In the lecture's business-model discussion, what does mass customization incorporate?",
      "options": [
       {
        "letter": "A",
        "text": "Only international standards"
       },
       {
        "letter": "B",
        "text": "Knowledge of international and local cultures"
       },
       {
        "letter": "C",
        "text": "A fixed product with no customer knowledge"
       },
       {
        "letter": "D",
        "text": "Outsourcing every manufacturing stage"
       }
      ],
      "correct": "B"
     }
    ]
   },
   {
    "mock": 2,
    "questions": [
     {
      "n": 1,
      "text": "Which statement best describes the lecture's distinction between a crisis and a recession?",
      "options": [
       {
        "letter": "A",
        "text": "A crisis is measured only by currency volatility; a recession only by inflation"
       },
       {
        "letter": "B",
        "text": "A crisis lasts over two years; a recession lasts a few weeks"
       },
       {
        "letter": "C",
        "text": "A crisis and recession are defined as identical periods"
       },
       {
        "letter": "D",
        "text": "A crisis lasts no more than a few months; a recession is a longer decline that runs from an activity peak to a trough"
       }
      ],
      "correct": "D"
     },
     {
      "n": 2,
      "text": "How does the lecture characterize a depression relative to a recession?",
      "options": [
       {
        "letter": "A",
        "text": "A brief rise in industrial production"
       },
       {
        "letter": "B",
        "text": "A short-term change in energy prices"
       },
       {
        "letter": "C",
        "text": "A period with no unemployment"
       },
       {
        "letter": "D",
        "text": "An extreme recession lasting more than two years"
       }
      ],
      "correct": "D"
     },
     {
      "n": 3,
      "text": "Which is a renewable resource example from the lecture?",
      "options": [
       {
        "letter": "A",
        "text": "Natural gas"
       },
       {
        "letter": "B",
        "text": "Coal"
       },
       {
        "letter": "C",
        "text": "Oil"
       },
       {
        "letter": "D",
        "text": "Wind"
       }
      ],
      "correct": "D"
     },
     {
      "n": 4,
      "text": "What does the lecture identify as a pessimistic view of population growth?",
      "options": [
       {
        "letter": "A",
        "text": "It guarantees increased manufacturing productivity"
       },
       {
        "letter": "B",
        "text": "It eliminates the need for public services"
       },
       {
        "letter": "C",
        "text": "It can hinder economic growth as investment is consumed by needs such as schools and hospitals"
       },
       {
        "letter": "D",
        "text": "It automatically creates a skilled workforce"
       }
      ],
      "correct": "C"
     },
     {
      "n": 5,
      "text": "Which emerging-issue dimension includes laws on employment, advertising, environmental protection, privacy, and safety and health?",
      "options": [
       {
        "letter": "A",
        "text": "Government regulation"
       },
       {
        "letter": "B",
        "text": "Technology advancement"
       },
       {
        "letter": "C",
        "text": "Consumption of natural resources"
       },
       {
        "letter": "D",
        "text": "Growth of population"
       }
      ],
      "correct": "A"
     },
     {
      "n": 6,
      "text": "In the lean production system, what is the role of Jidoka?",
      "options": [
       {
        "letter": "A",
        "text": "Produce each item only after the customer receives it"
       },
       {
        "letter": "B",
        "text": "Stop production when a problem occurs to avoid making defective products"
       },
       {
        "letter": "C",
        "text": "Increase inventory to avoid waiting"
       },
       {
        "letter": "D",
        "text": "Maximize processing regardless of customer value"
       }
      ],
      "correct": "B"
     },
     {
      "n": 7,
      "text": "What is a value stream in Lean?",
      "options": [
       {
        "letter": "A",
        "text": "A list of employee performance measures"
       },
       {
        "letter": "B",
        "text": "All actions required for a product from order to delivery"
       },
       {
        "letter": "C",
        "text": "A set of inventory storage locations"
       },
       {
        "letter": "D",
        "text": "A production schedule for one machine only"
       }
      ],
      "correct": "B"
     },
     {
      "n": 8,
      "text": "Which of these is one of the seven wastes in Lean?",
      "options": [
       {
        "letter": "A",
        "text": "Customer satisfaction"
       },
       {
        "letter": "B",
        "text": "Continuous improvement"
       },
       {
        "letter": "C",
        "text": "Over-processing"
       },
       {
        "letter": "D",
        "text": "Product value"
       }
      ],
      "correct": "C"
     },
     {
      "n": 9,
      "text": "In the five-step value-stream walk, what happens after building a leadership team?",
      "options": [
       {
        "letter": "A",
        "text": "Eliminate all measurements"
       },
       {
        "letter": "B",
        "text": "Begin production immediately"
       },
       {
        "letter": "C",
        "text": "Schedule the date and time"
       },
       {
        "letter": "D",
        "text": "Disband the team"
       }
      ],
      "correct": "C"
     },
     {
      "n": 10,
      "text": "Which set captures the stated impacts of Lean production?",
      "options": [
       {
        "letter": "A",
        "text": "More over-processing, fewer customer choices"
       },
       {
        "letter": "B",
        "text": "More inventory, higher cost, longer lead time"
       },
       {
        "letter": "C",
        "text": "Best quality, lowest cost, shortest lead time"
       },
       {
        "letter": "D",
        "text": "Lower quality, higher cost, faster production only"
       }
      ],
      "correct": "C"
     },
     {
      "n": 11,
      "text": "What does “Learn, Do, Teach” describe in Lean implementation?",
      "options": [
       {
        "letter": "A",
        "text": "A sequence for developing people’s capabilities"
       },
       {
        "letter": "B",
        "text": "A system for calculating energy prices"
       },
       {
        "letter": "C",
        "text": "Three types of waste"
       },
       {
        "letter": "D",
        "text": "Three value-stream categories"
       }
      ],
      "correct": "A"
     },
     {
      "n": 12,
      "text": "Which four areas are included in implementing the full Lean manufacturing system?",
      "options": [
       {
        "letter": "A",
        "text": "Sensing, actuation, routing, and storage"
       },
       {
        "letter": "B",
        "text": "Business requirements, performance management, operation improvement, and people engagement"
       },
       {
        "letter": "C",
        "text": "Strategy, advertising, accounting, and procurement"
       },
       {
        "letter": "D",
        "text": "Marketing, sales, finance, and logistics"
       }
      ],
      "correct": "B"
     },
     {
      "n": 13,
      "text": "Which categorization level for smart and connected products uses optimization algorithms?",
      "options": [
       {
        "letter": "A",
        "text": "Optimization"
       },
       {
        "letter": "B",
        "text": "Automation"
       },
       {
        "letter": "C",
        "text": "Control"
       },
       {
        "letter": "D",
        "text": "Monitoring"
       }
      ],
      "correct": "A"
     },
     {
      "n": 14,
      "text": "What is the effect of the monitoring capability in a smart connected product?",
      "options": [
       {
        "letter": "A",
        "text": "It autonomously runs the entire production process"
       },
       {
        "letter": "B",
        "text": "It creates only a revenue stream"
       },
       {
        "letter": "C",
        "text": "It sets switching costs for a customer"
       },
       {
        "letter": "D",
        "text": "It can monitor product health and generate alerts"
       }
      ],
      "correct": "D"
     },
     {
      "n": 15,
      "text": "What does a lock-in-centric business model aim to do?",
      "options": [
       {
        "letter": "A",
        "text": "Eliminate all service offerings"
       },
       {
        "letter": "B",
        "text": "Discourage customer migration through switching costs and trust"
       },
       {
        "letter": "C",
        "text": "Move product data to the physical layer"
       },
       {
        "letter": "D",
        "text": "Make every transaction slower"
       }
      ],
      "correct": "B"
     }
    ]
   },
   {
    "mock": 3,
    "questions": [
     {
      "n": 1,
      "text": "What is the physical layer responsible for in a smart connected product architecture?",
      "options": [
       {
        "letter": "A",
        "text": "Creating revenue streams and pricing plans"
       },
       {
        "letter": "B",
        "text": "Connecting servers through IP networks"
       },
       {
        "letter": "C",
        "text": "Storing and analyzing all product data"
       },
       {
        "letter": "D",
        "text": "Collecting and acquiring data using sensors and microcontrollers"
       }
      ],
      "correct": "D"
     },
     {
      "n": 2,
      "text": "Which smart-factory characteristic refers to real-time monitoring and alerts?",
      "options": [
       {
        "letter": "A",
        "text": "Agility"
       },
       {
        "letter": "B",
        "text": "Connection"
       },
       {
        "letter": "C",
        "text": "Transparency"
       },
       {
        "letter": "D",
        "text": "Optimization"
       }
      ],
      "correct": "C"
     },
     {
      "n": 3,
      "text": "Which feature of a smart factory supports flexibility, adaptation, and self-configuration?",
      "options": [
       {
        "letter": "A",
        "text": "Connection"
       },
       {
        "letter": "B",
        "text": "Proactivity"
       },
       {
        "letter": "C",
        "text": "Transparency"
       },
       {
        "letter": "D",
        "text": "Agility"
       }
      ],
      "correct": "D"
     },
     {
      "n": 4,
      "text": "Which technology gives smart factories access to scalable computing and storage resources?",
      "options": [
       {
        "letter": "A",
        "text": "Cloud computing"
       },
       {
        "letter": "B",
        "text": "RFID tags"
       },
       {
        "letter": "C",
        "text": "Augmented reality"
       },
       {
        "letter": "D",
        "text": "Lean value streams"
       }
      ],
      "correct": "A"
     },
     {
      "n": 5,
      "text": "What is one use of big-data analytics in smart factories?",
      "options": [
       {
        "letter": "A",
        "text": "Replacing product design with manual inspection"
       },
       {
        "letter": "B",
        "text": "Generating knowledge and predicting future outcomes"
       },
       {
        "letter": "C",
        "text": "Removing all performance measures"
       },
       {
        "letter": "D",
        "text": "Preventing machine-to-machine communication"
       }
      ],
      "correct": "B"
     },
     {
      "n": 6,
      "text": "In the smart-factory automation pyramid, which layer is shown at the top?",
      "options": [
       {
        "letter": "A",
        "text": "ERP level"
       },
       {
        "letter": "B",
        "text": "Manufacturing execution system level"
       },
       {
        "letter": "C",
        "text": "Control level"
       },
       {
        "letter": "D",
        "text": "Device level"
       }
      ],
      "correct": "A"
     },
     {
      "n": 7,
      "text": "How can augmented reality support smart-factory work according to the lecture?",
      "options": [
       {
        "letter": "A",
        "text": "By preventing workers from interacting with equipment"
       },
       {
        "letter": "B",
        "text": "By making all sensing unnecessary"
       },
       {
        "letter": "C",
        "text": "By enabling remote instrument operation and improving precision and safety"
       },
       {
        "letter": "D",
        "text": "By replacing all factory communications with paper"
       }
      ],
      "correct": "C"
     },
     {
      "n": 8,
      "text": "Which statement describes the role of smart machines in a smart factory?",
      "options": [
       {
        "letter": "A",
        "text": "They provide only product storage"
       },
       {
        "letter": "B",
        "text": "They are limited to communicating with humans"
       },
       {
        "letter": "C",
        "text": "They operate only as isolated devices"
       },
       {
        "letter": "D",
        "text": "They communicate with other machines, smart devices, and humans"
       }
      ],
      "correct": "D"
     },
     {
      "n": 9,
      "text": "What does a smart manufacturing process emphasize?",
      "options": [
       {
        "letter": "A",
        "text": "Fixed processes without automation"
       },
       {
        "letter": "B",
        "text": "Dynamic, automated, real-time, and efficient operation"
       },
       {
        "letter": "C",
        "text": "Static, manual, and offline work"
       },
       {
        "letter": "D",
        "text": "Long delays before taking action"
       }
      ],
      "correct": "B"
     },
     {
      "n": 10,
      "text": "State True or False. In Lean, overproduction means producing more product sooner than customers are ready for it.",
      "options": [
       {
        "letter": "A",
        "text": "True"
       },
       {
        "letter": "B",
        "text": "False"
       }
      ],
      "correct": "A"
     },
     {
      "n": 11,
      "text": "What does an efficiency-centric smart business model aim to do to transactions?",
      "options": [
       {
        "letter": "A",
        "text": "Replace product services with physical inventory"
       },
       {
        "letter": "B",
        "text": "Increase switching costs to prevent customer migration"
       },
       {
        "letter": "C",
        "text": "Make them faster, simpler, and more transparent while eliminating errors"
       },
       {
        "letter": "D",
        "text": "Restrict transactions to offline assets"
       }
      ],
      "correct": "C"
     },
     {
      "n": 12,
      "text": "State True or False. In a smart connected product, automation combines monitoring, control, and optimization capabilities with software algorithms.",
      "options": [
       {
        "letter": "A",
        "text": "True"
       },
       {
        "letter": "B",
        "text": "False"
       }
      ],
      "correct": "A"
     },
     {
      "n": 13,
      "text": "Which megatrend category includes genetic sequencing and cell modification?",
      "options": [
       {
        "letter": "A",
        "text": "Biological"
       },
       {
        "letter": "B",
        "text": "Industrial"
       },
       {
        "letter": "C",
        "text": "Digital"
       },
       {
        "letter": "D",
        "text": "Physical"
       }
      ],
      "correct": "A"
     },
     {
      "n": 14,
      "text": "Which example is listed as a possible 2025 tipping point in the lecture?",
      "options": [
       {
        "letter": "A",
        "text": "Every factory operating without sensors"
       },
       {
        "letter": "B",
        "text": "One trillion sensors connected to the internet"
       },
       {
        "letter": "C",
        "text": "Elimination of internet-connected clothes"
       },
       {
        "letter": "D",
        "text": "A return to paper-only communication"
       }
      ],
      "correct": "B"
     },
     {
      "n": 15,
      "text": "What does a smart-factory proactivity capability support?",
      "options": [
       {
        "letter": "A",
        "text": "Predicting quality issues and future challenges"
       },
       {
        "letter": "B",
        "text": "Storing only completed products"
       },
       {
        "letter": "C",
        "text": "Limiting the factory to fixed configurations"
       },
       {
        "letter": "D",
        "text": "Removing real-time process data"
       }
      ],
      "correct": "A"
     }
    ]
   }
  ]
 },
 {
  "week": 3,
  "mocks": [
   {
    "mock": 1,
    "questions": [
     {
      "n": 1,
      "text": "How does the lecture define a cyber-physical system (CPS)?",
      "options": [
       {
        "letter": "A",
        "text": "A single computer with no physical inputs"
       },
       {
        "letter": "B",
        "text": "A collection of unrelated sensors"
       },
       {
        "letter": "C",
        "text": "A database used only for manufacturing records"
       },
       {
        "letter": "D",
        "text": "An interacting network of physical and computational components"
       }
      ],
      "correct": "D"
     },
     {
      "n": 2,
      "text": "How do CPS interact with the physical world?",
      "options": [
       {
        "letter": "A",
        "text": "Through displays without input devices"
       },
       {
        "letter": "B",
        "text": "Through RFID tags alone"
       },
       {
        "letter": "C",
        "text": "Through sensors and actuators"
       },
       {
        "letter": "D",
        "text": "Through spreadsheets and paper forms"
       }
      ],
      "correct": "C"
     },
     {
      "n": 3,
      "text": "Which issue is emphasized for embedded systems, while CPS concerns include timing and concurrency?",
      "options": [
       {
        "letter": "A",
        "text": "Real-time response and reliability"
       },
       {
        "letter": "B",
        "text": "Market share"
       },
       {
        "letter": "C",
        "text": "Global supply chains"
       },
       {
        "letter": "D",
        "text": "Product lifecycle cost"
       }
      ],
      "correct": "A"
     },
     {
      "n": 4,
      "text": "What does reactive computation in CPS involve?",
      "options": [
       {
        "letter": "A",
        "text": "A one-time calculation followed by isolation"
       },
       {
        "letter": "B",
        "text": "Computation that ignores sensor inputs"
       },
       {
        "letter": "C",
        "text": "A system with no response to changes"
       },
       {
        "letter": "D",
        "text": "Ongoing interaction with the environment through sequences of inputs and outputs"
       }
      ],
      "correct": "D"
     },
     {
      "n": 5,
      "text": "What does concurrency mean in the CPS features described in the lecture?",
      "options": [
       {
        "letter": "A",
        "text": "All processes must use the same sensor"
       },
       {
        "letter": "B",
        "text": "One process runs at a time without communication"
       },
       {
        "letter": "C",
        "text": "Multiple processes run and exchange information"
       },
       {
        "letter": "D",
        "text": "The system runs only after production ends"
       }
      ],
      "correct": "C"
     },
     {
      "n": 6,
      "text": "In a CPS feedback loop, what roles do sensors and actuators play?",
      "options": [
       {
        "letter": "A",
        "text": "Both only store process history"
       },
       {
        "letter": "B",
        "text": "Sensors sense the environment and actuators influence it"
       },
       {
        "letter": "C",
        "text": "Both convert digital data into IPv6 packets"
       },
       {
        "letter": "D",
        "text": "Sensors actuate machinery and actuators measure it"
       }
      ],
      "correct": "B"
     },
     {
      "n": 7,
      "text": "Why are CPS safety-critical applications carefully modeled and validated before development?",
      "options": [
       {
        "letter": "A",
        "text": "To support safety in systems where precise behavior matters"
       },
       {
        "letter": "B",
        "text": "To reduce the number of sensors in every system"
       },
       {
        "letter": "C",
        "text": "To eliminate all real-time computation"
       },
       {
        "letter": "D",
        "text": "To avoid networking physical components"
       }
      ],
      "correct": "A"
     },
     {
      "n": 8,
      "text": "Which transportation CPS example coordinates vehicles with infrastructure?",
      "options": [
       {
        "letter": "A",
        "text": "A cloud storage service"
       },
       {
        "letter": "B",
        "text": "Transit signal priority and queue warning"
       },
       {
        "letter": "C",
        "text": "Product lifecycle management"
       },
       {
        "letter": "D",
        "text": "A resource directory lookup"
       }
      ],
      "correct": "B"
     },
     {
      "n": 9,
      "text": "Which item is part of the 5C architecture for Industry 4.0 CPS?",
      "options": [
       {
        "letter": "A",
        "text": "Calibration"
       },
       {
        "letter": "B",
        "text": "Compression"
       },
       {
        "letter": "C",
        "text": "Certification"
       },
       {
        "letter": "D",
        "text": "Cognition"
       }
      ],
      "correct": "D"
     },
     {
      "n": 10,
      "text": "Which 5C level gathers system information from a fleet and assesses individual machine status?",
      "options": [
       {
        "letter": "A",
        "text": "Conversion"
       },
       {
        "letter": "B",
        "text": "Cyber"
       },
       {
        "letter": "C",
        "text": "Configuration"
       },
       {
        "letter": "D",
        "text": "Connection"
       }
      ],
      "correct": "B"
     },
     {
      "n": 11,
      "text": "What is the main purpose of the Conversion level in the 5C architecture?",
      "options": [
       {
        "letter": "A",
        "text": "To gather raw data from devices"
       },
       {
        "letter": "B",
        "text": "To set user priorities for interventions"
       },
       {
        "letter": "C",
        "text": "To turn machine data into meaningful information"
       },
       {
        "letter": "D",
        "text": "To adjust machine behavior to disturbances"
       }
      ],
      "correct": "C"
     },
     {
      "n": 12,
      "text": "Which 5C level presents information to users to help them understand the system and make decisions?",
      "options": [
       {
        "letter": "A",
        "text": "Cognition"
       },
       {
        "letter": "B",
        "text": "Cyber"
       },
       {
        "letter": "C",
        "text": "Connection"
       },
       {
        "letter": "D",
        "text": "Conversion"
       }
      ],
      "correct": "A"
     },
     {
      "n": 13,
      "text": "What is the role of Configuration in the 5C architecture?",
      "options": [
       {
        "letter": "A",
        "text": "Registering sensors in a resource directory"
       },
       {
        "letter": "B",
        "text": "Assigning a unique product identifier"
       },
       {
        "letter": "C",
        "text": "Supervisory control that enables machine self-adjustment and self-optimization"
       },
       {
        "letter": "D",
        "text": "Compressing data for transmission"
       }
      ],
      "correct": "C"
     },
     {
      "n": 14,
      "text": "What is one stated limitation of smart sensors that motivates intelligent sensors?",
      "options": [
       {
        "letter": "A",
        "text": "They require no processor"
       },
       {
        "letter": "B",
        "text": "They may not support sensor data aggregation"
       },
       {
        "letter": "C",
        "text": "They always have too much application flexibility"
       },
       {
        "letter": "D",
        "text": "They can control any external device"
       }
      ],
      "correct": "B"
     },
     {
      "n": 15,
      "text": "Which capability distinguishes an intelligent sensor in the lecture?",
      "options": [
       {
        "letter": "A",
        "text": "It can customize embedded algorithms on the fly"
       },
       {
        "letter": "B",
        "text": "It cannot be customized after deployment"
       },
       {
        "letter": "C",
        "text": "It only produces an analog output"
       },
       {
        "letter": "D",
        "text": "It has no memory or application platform"
       }
      ],
      "correct": "A"
     }
    ]
   },
   {
    "mock": 2,
    "questions": [
     {
      "n": 1,
      "text": "What does the IEEE 1451 definition of a smart sensor highlight?",
      "options": [
       {
        "letter": "A",
        "text": "Small memory and a standardized physical connection for communication with processors and data networks"
       },
       {
        "letter": "B",
        "text": "A sensor with no digital interface"
       },
       {
        "letter": "C",
        "text": "A mechanical actuator with a fixed schedule"
       },
       {
        "letter": "D",
        "text": "A sensor that can operate only as a passive RFID tag"
       }
      ],
      "correct": "A"
     },
     {
      "n": 2,
      "text": "Which is an advantage of intelligent sensors listed in the lecture?",
      "options": [
       {
        "letter": "A",
        "text": "Inability to adapt sampling rate"
       },
       {
        "letter": "B",
        "text": "Longer software development time"
       },
       {
        "letter": "C",
        "text": "Reduced data communication and power consumption"
       },
       {
        "letter": "D",
        "text": "Increased communication overhead"
       }
      ],
      "correct": "C"
     },
     {
      "n": 3,
      "text": "Which is listed as a hardware design challenge for next-generation sensors?",
      "options": [
       {
        "letter": "A",
        "text": "Unlimited power supply"
       },
       {
        "letter": "B",
        "text": "Limited power"
       },
       {
        "letter": "C",
        "text": "Lack of sensor applications"
       },
       {
        "letter": "D",
        "text": "Too much available bandwidth"
       }
      ],
      "correct": "B"
     },
     {
      "n": 4,
      "text": "What does a collaboration platform combine with business operations?",
      "options": [
       {
        "letter": "A",
        "text": "Only social networking for customers"
       },
       {
        "letter": "B",
        "text": "A product database and no communication"
       },
       {
        "letter": "C",
        "text": "Organizational networking capacities"
       },
       {
        "letter": "D",
        "text": "A hardware control loop and an actuator"
       }
      ],
      "correct": "C"
     },
     {
      "n": 5,
      "text": "What is meant by “Single Source of Truth” in collaboration productivity?",
      "options": [
       {
        "letter": "A",
        "text": "Create a separate copy of every product record for each team"
       },
       {
        "letter": "B",
        "text": "Store each data element exactly once in information models"
       },
       {
        "letter": "C",
        "text": "Use only unstructured data"
       },
       {
        "letter": "D",
        "text": "Restrict information to one lifecycle phase"
       }
      ],
      "correct": "B"
     },
     {
      "n": 6,
      "text": "In the lecture, what bridges the virtual world and the physical environment in collaboration productivity?",
      "options": [
       {
        "letter": "A",
        "text": "A marketing campaign"
       },
       {
        "letter": "B",
        "text": "A manual inventory count"
       },
       {
        "letter": "C",
        "text": "Product retirement"
       },
       {
        "letter": "D",
        "text": "Industrialization using CPS"
       }
      ],
      "correct": "D"
     },
     {
      "n": 7,
      "text": "What is the main purpose of Product Lifecycle Management (PLM)?",
      "options": [
       {
        "letter": "A",
        "text": "To manage only product advertising"
       },
       {
        "letter": "B",
        "text": "To manage a product throughout its lifecycle"
       },
       {
        "letter": "C",
        "text": "To replace all business objectives with hardware metrics"
       },
       {
        "letter": "D",
        "text": "To monitor one production shift"
       }
      ],
      "correct": "B"
     },
     {
      "n": 8,
      "text": "Which phase comes after “Use/Support” in the five product lifecycle phases listed?",
      "options": [
       {
        "letter": "A",
        "text": "Visualize"
       },
       {
        "letter": "B",
        "text": "Dispose/Retire"
       },
       {
        "letter": "C",
        "text": "Explain"
       },
       {
        "letter": "D",
        "text": "Perceive"
       }
      ],
      "correct": "B"
     },
     {
      "n": 9,
      "text": "Which is a stated goal of PLM?",
      "options": [
       {
        "letter": "A",
        "text": "Eliminate product data"
       },
       {
        "letter": "B",
        "text": "Restrict management to the design phase"
       },
       {
        "letter": "C",
        "text": "Increase development delays"
       },
       {
        "letter": "D",
        "text": "Increase product value while reducing associated costs"
       }
      ],
      "correct": "D"
     },
     {
      "n": 10,
      "text": "Which PLM scope component manages generated product data and provides correct information at the right time?",
      "options": [
       {
        "letter": "A",
        "text": "Organization and management"
       },
       {
        "letter": "B",
        "text": "Equipment and facilities"
       },
       {
        "letter": "C",
        "text": "Product Data Management System"
       },
       {
        "letter": "D",
        "text": "Activities"
       }
      ],
      "correct": "C"
     },
     {
      "n": 11,
      "text": "What is the central difference between AR and VR in the lecture's comparison?",
      "options": [
       {
        "letter": "A",
        "text": "AR and VR are both limited to non-immersive screens"
       },
       {
        "letter": "B",
        "text": "AR replaces all physical surroundings; VR adds small overlays"
       },
       {
        "letter": "C",
        "text": "AR requires no sensors; VR uses only cameras"
       },
       {
        "letter": "D",
        "text": "AR adds digital elements to the actual environment; VR offers a digital recreation"
       }
      ],
      "correct": "D"
     },
     {
      "n": 12,
      "text": "Which type of AR uses GPS, a digital compass, or an accelerometer to determine location without a visual marker?",
      "options": [
       {
        "letter": "A",
        "text": "Marker-based"
       },
       {
        "letter": "B",
        "text": "Projection-based"
       },
       {
        "letter": "C",
        "text": "Superimposition-based"
       },
       {
        "letter": "D",
        "text": "Markerless"
       }
      ],
      "correct": "D"
     },
     {
      "n": 13,
      "text": "What happens in projection-based AR?",
      "options": [
       {
        "letter": "A",
        "text": "A camera searches for a printed marker only"
       },
       {
        "letter": "B",
        "text": "Product data is stored in a relational database"
       },
       {
        "letter": "C",
        "text": "Light is projected onto real-world surfaces to create an outcome"
       },
       {
        "letter": "D",
        "text": "The physical environment is entirely replaced by a virtual scene"
       }
      ],
      "correct": "C"
     },
     {
      "n": 14,
      "text": "Which VR type uses head-mounted displays and motion-detecting devices to provide a realistic experience?",
      "options": [
       {
        "letter": "A",
        "text": "Fully immersive"
       },
       {
        "letter": "B",
        "text": "Markerless"
       },
       {
        "letter": "C",
        "text": "Non-immersive"
       },
       {
        "letter": "D",
        "text": "Semi-structured"
       }
      ],
      "correct": "A"
     },
     {
      "n": 15,
      "text": "What is a key function of the sensors in a VR headset?",
      "options": [
       {
        "letter": "A",
        "text": "They estimate user motion and direction in space"
       },
       {
        "letter": "B",
        "text": "They create AR visual markers"
       },
       {
        "letter": "C",
        "text": "They replace the display screens"
       },
       {
        "letter": "D",
        "text": "They generate the virtual world's audio content"
       }
      ],
      "correct": "A"
     }
    ]
   },
   {
    "mock": 3,
    "questions": [
     {
      "n": 1,
      "text": "Which statement distinguishes an AI program from a program without AI in the lecture?",
      "options": [
       {
        "letter": "A",
        "text": "AI avoids using knowledge"
       },
       {
        "letter": "B",
        "text": "AI uses a large database and algorithmic search"
       },
       {
        "letter": "C",
        "text": "AI uses a large knowledge base and heuristic search"
       },
       {
        "letter": "D",
        "text": "AI uses a smaller database and exhaustive search"
       }
      ],
      "correct": "C"
     },
     {
      "n": 2,
      "text": "What is machine learning according to the lecture?",
      "options": [
       {
        "letter": "A",
        "text": "A method for encoding physical sensors"
       },
       {
        "letter": "B",
        "text": "A technique limited to relational databases"
       },
       {
        "letter": "C",
        "text": "A subset of robotics that requires no data"
       },
       {
        "letter": "D",
        "text": "A part of AI that lets machines make decisions based on experience rather than explicit programming"
       }
      ],
      "correct": "D"
     },
     {
      "n": 3,
      "text": "How does the lecture describe deep learning?",
      "options": [
       {
        "letter": "A",
        "text": "A field separate from machine learning and AI"
       },
       {
        "letter": "B",
        "text": "A database query language"
       },
       {
        "letter": "C",
        "text": "A subset of machine learning that can learn features automatically"
       },
       {
        "letter": "D",
        "text": "A method for manually specifying every feature"
       }
      ],
      "correct": "C"
     },
     {
      "n": 4,
      "text": "Who proposed the first use of the phrase “Artificial Intelligence” in 1956?",
      "options": [
       {
        "letter": "A",
        "text": "Eugene Charniak"
       },
       {
        "letter": "B",
        "text": "Alan Turing"
       },
       {
        "letter": "C",
        "text": "David Poole"
       },
       {
        "letter": "D",
        "text": "John McCarthy"
       }
      ],
      "correct": "D"
     },
     {
      "n": 5,
      "text": "Which example shows AI being used in manufacturing according to the lecture?",
      "options": [
       {
        "letter": "A",
        "text": "Predicting yield and yield quality from machine-generated data"
       },
       {
        "letter": "B",
        "text": "Disabling production forecasts"
       },
       {
        "letter": "C",
        "text": "Replacing all machine data with paper forms"
       },
       {
        "letter": "D",
        "text": "Eliminating machine fault reporting"
       }
      ],
      "correct": "A"
     },
     {
      "n": 6,
      "text": "Which is one of the listed AI challenges in IIoT?",
      "options": [
       {
        "letter": "A",
        "text": "Removing the need for training"
       },
       {
        "letter": "B",
        "text": "Connecting devices"
       },
       {
        "letter": "C",
        "text": "Eliminating actionable decisions"
       },
       {
        "letter": "D",
        "text": "Reducing the number of sensors to zero"
       }
      ],
      "correct": "B"
     },
     {
      "n": 7,
      "text": "What is big data in the lecture's introductory definition?",
      "options": [
       {
        "letter": "A",
        "text": "Data that is always generated by social media"
       },
       {
        "letter": "B",
        "text": "Data too large for conventional processing tools and databases to handle"
       },
       {
        "letter": "C",
        "text": "Only tabular information that fits a relational database"
       },
       {
        "letter": "D",
        "text": "Information that contains no unstructured content"
       }
      ],
      "correct": "B"
     },
     {
      "n": 8,
      "text": "What proportion of available data does the lecture attribute to unstructured data?",
      "options": [
       {
        "letter": "A",
        "text": "80%"
       },
       {
        "letter": "B",
        "text": "20%"
       },
       {
        "letter": "C",
        "text": "100%"
       },
       {
        "letter": "D",
        "text": "50%"
       }
      ],
      "correct": "A"
     },
     {
      "n": 9,
      "text": "Which “V” of big data refers to the speed at which data is generated?",
      "options": [
       {
        "letter": "A",
        "text": "Veracity"
       },
       {
        "letter": "B",
        "text": "Volume"
       },
       {
        "letter": "C",
        "text": "Velocity"
       },
       {
        "letter": "D",
        "text": "Variety"
       }
      ],
      "correct": "C"
     },
     {
      "n": 10,
      "text": "Which characteristic describes bias, unusualness, and noise in data?",
      "options": [
       {
        "letter": "A",
        "text": "Value"
       },
       {
        "letter": "B",
        "text": "Veracity"
       },
       {
        "letter": "C",
        "text": "Visualization"
       },
       {
        "letter": "D",
        "text": "Volume"
       }
      ],
      "correct": "B"
     },
     {
      "n": 11,
      "text": "What is the purpose of data integration during preprocessing?",
      "options": [
       {
        "letter": "A",
        "text": "Combine data from various sources into a consistent view"
       },
       {
        "letter": "B",
        "text": "Convert every data type into an image"
       },
       {
        "letter": "C",
        "text": "Delete all information from multiple sources"
       },
       {
        "letter": "D",
        "text": "Increase data duplication"
       }
      ],
      "correct": "A"
     },
     {
      "n": 12,
      "text": "What does redundancy mitigation do?",
      "options": [
       {
        "letter": "A",
        "text": "Combines records from separate sources"
       },
       {
        "letter": "B",
        "text": "Identifies and corrects inaccurate values only"
       },
       {
        "letter": "C",
        "text": "Predicts future business outcomes"
       },
       {
        "letter": "D",
        "text": "Removes repeated data to avoid unnecessary transmission"
       }
      ],
      "correct": "D"
     },
     {
      "n": 13,
      "text": "Which distributed file system does the lecture identify as a notable system for large-scale storage in Hadoop?",
      "options": [
       {
        "letter": "A",
        "text": "CoAP"
       },
       {
        "letter": "B",
        "text": "HDFS"
       },
       {
        "letter": "C",
        "text": "SQL"
       },
       {
        "letter": "D",
        "text": "NoSQL"
       }
      ],
      "correct": "B"
     },
     {
      "n": 14,
      "text": "Which analytics type answers questions such as “What next?” and “What pattern?”",
      "options": [
       {
        "letter": "A",
        "text": "Prescriptive analytics"
       },
       {
        "letter": "B",
        "text": "Descriptive analytics"
       },
       {
        "letter": "C",
        "text": "Visual analytics"
       },
       {
        "letter": "D",
        "text": "Predictive analytics"
       }
      ],
      "correct": "D"
     },
     {
      "n": 15,
      "text": "Which NIST cloud feature means users can access computing capabilities over a network?",
      "options": [
       {
        "letter": "A",
        "text": "Wide network access"
       },
       {
        "letter": "B",
        "text": "On-demand self-service"
       },
       {
        "letter": "C",
        "text": "Measured service"
       },
       {
        "letter": "D",
        "text": "Resource durability"
       }
      ],
      "correct": "A"
     }
    ]
   }
  ]
 },
 {
  "week": 4,
  "mocks": [
   {
    "mock": 1,
    "questions": [
     {
      "n": 1,
      "text": "Which element of cybersecurity is a subset that uses a set of strategies, tools and policies to keep business data available, unaltered and confidential?",
      "options": [
       {
        "letter": "A",
        "text": "Operational Security"
       },
       {
        "letter": "B",
        "text": "Information Security"
       },
       {
        "letter": "C",
        "text": "End-user Education"
       },
       {
        "letter": "D",
        "text": "Network Security"
       }
      ],
      "correct": "B"
     },
     {
      "n": 2,
      "text": "An attacker sends deceitful emails that look like they come from a recognizable service and asks recipients to enter their login details. Which type of threat does this describe?",
      "options": [
       {
        "letter": "A",
        "text": "Denial-of-service flooding"
       },
       {
        "letter": "B",
        "text": "Trojan horse malware"
       },
       {
        "letter": "C",
        "text": "Watering hole attack"
       },
       {
        "letter": "D",
        "text": "Phishing"
       }
      ],
      "correct": "D"
     },
     {
      "n": 3,
      "text": "Which element of the CIA triad requires that information be accessible only to authorized users when they need it?",
      "options": [
       {
        "letter": "A",
        "text": "Availability"
       },
       {
        "letter": "B",
        "text": "Reliability"
       },
       {
        "letter": "C",
        "text": "Integrity"
       },
       {
        "letter": "D",
        "text": "Confidentiality"
       }
      ],
      "correct": "A"
     },
     {
      "n": 4,
      "text": "Which of the following is one of the three key differences between IIoT and traditional automation?",
      "options": [
       {
        "letter": "A",
        "text": "Mechanical actuation"
       },
       {
        "letter": "B",
        "text": "Manual data logging"
       },
       {
        "letter": "C",
        "text": "Ubiquitous sensing"
       },
       {
        "letter": "D",
        "text": "Fixed-function controllers"
       }
      ],
      "correct": "C"
     },
     {
      "n": 5,
      "text": "Which of the following is one of the three key elements of the Industrial Internet described by General Electric?",
      "options": [
       {
        "letter": "A",
        "text": "Intelligent machines"
       },
       {
        "letter": "B",
        "text": "Cloud storage"
       },
       {
        "letter": "C",
        "text": "Wireless mesh networks"
       },
       {
        "letter": "D",
        "text": "Robotic process automation"
       }
      ],
      "correct": "A"
     },
     {
      "n": 6,
      "text": "In the second stage of the Industrial Revolution, which two inventions marked its start?",
      "options": [
       {
        "letter": "A",
        "text": "Steam engines and mechanized looms"
       },
       {
        "letter": "B",
        "text": "Transistors and integrated circuits"
       },
       {
        "letter": "C",
        "text": "Personal computers and the Internet"
       },
       {
        "letter": "D",
        "text": "Internal combustion engines and electricity"
       }
      ],
      "correct": "D"
     },
     {
      "n": 7,
      "text": "The Industrial Internet is described as the association of the global industrial system with which three ingredients?",
      "options": [
       {
        "letter": "A",
        "text": "Costly hardware sensing, offline data storage, batch-only processing"
       },
       {
        "letter": "B",
        "text": "Low-cost sensing, interconnectivity through the internet, high-level computing and analytics"
       },
       {
        "letter": "C",
        "text": "Manual inspection, paper records, human-only supervision"
       },
       {
        "letter": "D",
        "text": "Satellite-only links, fixed schedules, mechanical controls"
       }
      ],
      "correct": "B"
     },
     {
      "n": 8,
      "text": "Which IEEE standard defines a smart sensor as a sensor with small memory and a standardized physical connection that lets it communicate with a processor and a data network?",
      "options": [
       {
        "letter": "A",
        "text": "IEEE 802.3"
       },
       {
        "letter": "B",
        "text": "IEEE 802.15.4"
       },
       {
        "letter": "C",
        "text": "IEEE 1451"
       },
       {
        "letter": "D",
        "text": "IEEE 802.1Q"
       }
      ],
      "correct": "C"
     },
     {
      "n": 9,
      "text": "Which smart sensor function allows a single sensor node to measure several parameters such as temperature, pressure, light and humidity?",
      "options": [
       {
        "letter": "A",
        "text": "Self-decision making"
       },
       {
        "letter": "B",
        "text": "Reduced cost"
       },
       {
        "letter": "C",
        "text": "Communicating data"
       },
       {
        "letter": "D",
        "text": "Multisensing"
       }
      ],
      "correct": "D"
     },
     {
      "n": 10,
      "text": "What is the main purpose of industrial sensor calibration?",
      "options": [
       {
        "letter": "A",
        "text": "Removing the error between the measured response and the actual response"
       },
       {
        "letter": "B",
        "text": "Increasing the physical size of the sensor"
       },
       {
        "letter": "C",
        "text": "Converting analog data into wireless signals"
       },
       {
        "letter": "D",
        "text": "Storing sensor readings in on-board memory"
       }
      ],
      "correct": "A"
     },
     {
      "n": 11,
      "text": "Which combination forms a Wireless Sensing and Actuation Network (WSAN)?",
      "options": [
       {
        "letter": "A",
        "text": "Sensors wired to a central PLC with manually operated actuators"
       },
       {
        "letter": "B",
        "text": "Wireless sensors only, feeding a cloud dashboard"
       },
       {
        "letter": "C",
        "text": "Sensors and actuators with a wireless network protocol, real-time task scheduling and a control law"
       },
       {
        "letter": "D",
        "text": "Actuators run by fixed timers with no feedback"
       }
      ],
      "correct": "C"
     },
     {
      "n": 12,
      "text": "Which of the following is an advantage of wireless sensing and actuation networks in industrial deployments?",
      "options": [
       {
        "letter": "A",
        "text": "Mandatory fixed cabling for every node"
       },
       {
        "letter": "B",
        "text": "Network self-organisation"
       },
       {
        "letter": "C",
        "text": "Costly pre-deployed infrastructure"
       },
       {
        "letter": "D",
        "text": "Difficult sensor and actuator deployment"
       }
      ],
      "correct": "B"
     },
     {
      "n": 13,
      "text": "Electro-hydrostatic actuation systems are proposed as a substitute for traditional hydraulic and electromechanical actuators. Which set of advantages do they combine?",
      "options": [
       {
        "letter": "A",
        "text": "High force capability, high energy efficiency and decentralized actuation"
       },
       {
        "letter": "B",
        "text": "Ultra-high resolution with pneumatic-level speed"
       },
       {
        "letter": "C",
        "text": "Manual valve control with low force output"
       },
       {
        "letter": "D",
        "text": "Battery-free wireless control"
       }
      ],
      "correct": "A"
     },
     {
      "n": 14,
      "text": "Which actuation approach offers precise flow control and ultra-high resolution by combining the advantages of electric and pneumatic actuators?",
      "options": [
       {
        "letter": "A",
        "text": "Electro-hydrostatic actuation"
       },
       {
        "letter": "B",
        "text": "Hydraulic cylinders"
       },
       {
        "letter": "C",
        "text": "Mechanical linkages"
       },
       {
        "letter": "D",
        "text": "Electro-pneumatic systems"
       }
      ],
      "correct": "D"
     },
     {
      "n": 15,
      "text": "In a programmable logic controller (PLC), which module connects the sensors and actuators to the controller?",
      "options": [
       {
        "letter": "A",
        "text": "CPU module"
       },
       {
        "letter": "B",
        "text": "Power supply module"
       },
       {
        "letter": "C",
        "text": "I/O module"
       },
       {
        "letter": "D",
        "text": "Memory module"
       }
      ],
      "correct": "C"
     }
    ]
   },
   {
    "mock": 2,
    "questions": [
     {
      "n": 1,
      "text": "Which category of cyber threat involves human interaction that misleads users into breaking a security policy to obtain critical information?",
      "options": [
       {
        "letter": "A",
        "text": "Malware"
       },
       {
        "letter": "B",
        "text": "Ransomware"
       },
       {
        "letter": "C",
        "text": "Social engineering"
       },
       {
        "letter": "D",
        "text": "Denial-of-service"
       }
      ],
      "correct": "C"
     },
     {
      "n": 2,
      "text": "Which of the following is given as an example of ransomware?",
      "options": [
       {
        "letter": "A",
        "text": "Locky"
       },
       {
        "letter": "B",
        "text": "Trojan horse"
       },
       {
        "letter": "C",
        "text": "Watering hole"
       },
       {
        "letter": "D",
        "text": "Pretexting"
       }
      ],
      "correct": "A"
     },
     {
      "n": 3,
      "text": "Which of the following is given as an example of malware?",
      "options": [
       {
        "letter": "A",
        "text": "Google Docs phishing"
       },
       {
        "letter": "B",
        "text": "Dropbox phishing"
       },
       {
        "letter": "C",
        "text": "Pretexting"
       },
       {
        "letter": "D",
        "text": "Trojan horse"
       }
      ],
      "correct": "D"
     },
     {
      "n": 4,
      "text": "In the SDCMA architecture, what role do control elements (CE) play?",
      "options": [
       {
        "letter": "A",
        "text": "They physically actuate machines on the shop floor"
       },
       {
        "letter": "B",
        "text": "They act as data tap points with deep observation into communications and activities"
       },
       {
        "letter": "C",
        "text": "They replace the cloud analytics layer"
       },
       {
        "letter": "D",
        "text": "They store calibration reference values"
       }
      ],
      "correct": "B"
     },
     {
      "n": 5,
      "text": "In the SDCMA architecture, which component is responsible for detecting abnormality in the sensed data?",
      "options": [
       {
        "letter": "A",
        "text": "Hardware plane"
       },
       {
        "letter": "B",
        "text": "Control elements"
       },
       {
        "letter": "C",
        "text": "Ensemble Intelligence Framework (EIF)"
       },
       {
        "letter": "D",
        "text": "Software plane"
       }
      ],
      "correct": "C"
     },
     {
      "n": 6,
      "text": "Why are computational intelligence systems considered a reasonable choice for cyber-attack detection?",
      "options": [
       {
        "letter": "A",
        "text": "They process large volumes of high-dimensional data and help build new categorisation algorithms"
       },
       {
        "letter": "B",
        "text": "They avoid any form of data filtering"
       },
       {
        "letter": "C",
        "text": "They replace the need for firewalls"
       },
       {
        "letter": "D",
        "text": "They require manual labelling of every event"
       }
      ],
      "correct": "A"
     },
     {
      "n": 7,
      "text": "Which of the following is a problem that a lack of standardization in IIoT leads to?",
      "options": [
       {
        "letter": "A",
        "text": "Shorter data-frame delays"
       },
       {
        "letter": "B",
        "text": "Reduced sensor power draw"
       },
       {
        "letter": "C",
        "text": "Lower installation cost of cabling"
       },
       {
        "letter": "D",
        "text": "Semantic interoperability (data semantics) problems"
       }
      ],
      "correct": "D"
     },
     {
      "n": 8,
      "text": "In which sector is data integrity described as highly essential in IIoT deployments?",
      "options": [
       {
        "letter": "A",
        "text": "Food industry"
       },
       {
        "letter": "B",
        "text": "Healthcare industry"
       },
       {
        "letter": "C",
        "text": "Power grid"
       },
       {
        "letter": "D",
        "text": "Mining industry"
       }
      ],
      "correct": "B"
     },
     {
      "n": 9,
      "text": "In the food industry, which security property matters most for information that could harm a company's reputation?",
      "options": [
       {
        "letter": "A",
        "text": "Confidentiality"
       },
       {
        "letter": "B",
        "text": "Availability"
       },
       {
        "letter": "C",
        "text": "Integrity"
       },
       {
        "letter": "D",
        "text": "Reliability"
       }
      ],
      "correct": "A"
     },
     {
      "n": 10,
      "text": "Which sector is described as being like the veins of a nation, so that making it secure is very crucial?",
      "options": [
       {
        "letter": "A",
        "text": "Healthcare industry"
       },
       {
        "letter": "B",
        "text": "Power grid"
       },
       {
        "letter": "C",
        "text": "National transportation"
       },
       {
        "letter": "D",
        "text": "Mining industry"
       }
      ],
      "correct": "C"
     },
     {
      "n": 11,
      "text": "In firefighting, what does deploying sensor networks with RFID tags mainly provide?",
      "options": [
       {
        "letter": "A",
        "text": "Elimination of the need for trained rescue staff"
       },
       {
        "letter": "B",
        "text": "Real-time monitoring and early warning of disasters"
       },
       {
        "letter": "C",
        "text": "Replacement of water supply systems"
       },
       {
        "letter": "D",
        "text": "Permanent offline records of fire incidents"
       }
      ],
      "correct": "B"
     },
     {
      "n": 12,
      "text": "Proper maintenance of transport equipment, supported by connected devices and sensors, is linked to which outcome?",
      "options": [
       {
        "letter": "A",
        "text": "Higher fuel consumption"
       },
       {
        "letter": "B",
        "text": "Longer cancellation rates"
       },
       {
        "letter": "C",
        "text": "Increased maintenance expenses"
       },
       {
        "letter": "D",
        "text": "Reduced fuel consumption"
       }
      ],
      "correct": "D"
     },
     {
      "n": 13,
      "text": "What is the projected value of one percent fuel savings in commercial aviation over 15 years?",
      "options": [
       {
        "letter": "A",
        "text": "$30 billion"
       },
       {
        "letter": "B",
        "text": "$63 billion"
       },
       {
        "letter": "C",
        "text": "$66 billion"
       },
       {
        "letter": "D",
        "text": "$90 billion"
       }
      ],
      "correct": "A"
     },
     {
      "n": 14,
      "text": "In rail transportation, what does real-time analysis combined with predictive algorithms help reduce?",
      "options": [
       {
        "letter": "A",
        "text": "Track gauge width"
       },
       {
        "letter": "B",
        "text": "Ticket sales volume"
       },
       {
        "letter": "C",
        "text": "Maintenance cost"
       },
       {
        "letter": "D",
        "text": "Passenger seating capacity"
       }
      ],
      "correct": "C"
     },
     {
      "n": 15,
      "text": "Which platform does the factory maintenance example of GE use, offering Cloud-as-a-Service with a pay-per-use pricing model?",
      "options": [
       {
        "letter": "A",
        "text": "Lumada"
       },
       {
        "letter": "B",
        "text": "MindSphere"
       },
       {
        "letter": "C",
        "text": "Connext"
       },
       {
        "letter": "D",
        "text": "Predix"
       }
      ],
      "correct": "D"
     }
    ]
   },
   {
    "mock": 3,
    "questions": [
     {
      "n": 1,
      "text": "Which stage of the industrial timeline is labelled \"Computer & Automation\" and spans roughly 1950 to 2000?",
      "options": [
       {
        "letter": "A",
        "text": "Industry 2.0: Mass Production"
       },
       {
        "letter": "B",
        "text": "Industry 1.0: Mechanization"
       },
       {
        "letter": "C",
        "text": "Industry 4.0: Intelligent Things"
       },
       {
        "letter": "D",
        "text": "Industry 3.0: Computer & Automation"
       }
      ],
      "correct": "D"
     },
     {
      "n": 2,
      "text": "Which of the following is one of the listed components of the Industrial Internet of Things (IIoT)?",
      "options": [
       {
        "letter": "A",
        "text": "People-in-loop"
       },
       {
        "letter": "B",
        "text": "Manual ledger keeping"
       },
       {
        "letter": "C",
        "text": "Analog telegraph links"
       },
       {
        "letter": "D",
        "text": "Paper-based planning"
       }
      ],
      "correct": "A"
     },
     {
      "n": 3,
      "text": "The Industrial Revolution is described as lasting around 150 years and beginning in 1750. In which year did it end?",
      "options": [
       {
        "letter": "A",
        "text": "1850"
       },
       {
        "letter": "B",
        "text": "1870"
       },
       {
        "letter": "C",
        "text": "1900"
       },
       {
        "letter": "D",
        "text": "1950"
       }
      ],
      "correct": "C"
     },
     {
      "n": 4,
      "text": "What event marked the start of the Internet Revolution, which began around 1950?",
      "options": [
       {
        "letter": "A",
        "text": "Invention of the steam engine"
       },
       {
        "letter": "B",
        "text": "Government-sponsored experimentation on computer networks"
       },
       {
        "letter": "C",
        "text": "Commercial launch of satellite television"
       },
       {
        "letter": "D",
        "text": "Invention of the telephone"
       }
      ],
      "correct": "B"
     },
     {
      "n": 5,
      "text": "Which organisation, of which General Electric is a founding member, is a major contributor to shaping the IIoT?",
      "options": [
       {
        "letter": "A",
        "text": "Industrial Internet Consortium (IIC)"
       },
       {
        "letter": "B",
        "text": "IEEE Standards Association"
       },
       {
        "letter": "C",
        "text": "3GPP"
       },
       {
        "letter": "D",
        "text": "Cisco Systems"
       }
      ],
      "correct": "A"
     },
     {
      "n": 6,
      "text": "Which of the following is listed as a design philosophy of Industry 4.0 industrial processes?",
      "options": [
       {
        "letter": "A",
        "text": "Maximising manual intervention"
       },
       {
        "letter": "B",
        "text": "Isolating machines from data sources"
       },
       {
        "letter": "C",
        "text": "Vendor lock-in with proprietary protocols"
       },
       {
        "letter": "D",
        "text": "Facilitating communication between heterogeneous objects"
       }
      ],
      "correct": "D"
     },
     {
      "n": 7,
      "text": "Which smart factory application area tracks items by monitoring events across the supply chain?",
      "options": [
       {
        "letter": "A",
        "text": "Packaging management"
       },
       {
        "letter": "B",
        "text": "Facility management"
       },
       {
        "letter": "C",
        "text": "Inventory management"
       },
       {
        "letter": "D",
        "text": "Process safety and security"
       }
      ],
      "correct": "C"
     },
     {
      "n": 8,
      "text": "Which smart factory application area uses multi-point trace to monitor the condition of packages?",
      "options": [
       {
        "letter": "A",
        "text": "Inventory management"
       },
       {
        "letter": "B",
        "text": "Packaging management"
       },
       {
        "letter": "C",
        "text": "Connected factory"
       },
       {
        "letter": "D",
        "text": "Service quality control"
       }
      ],
      "correct": "B"
     },
     {
      "n": 9,
      "text": "Which of the following is listed as an enabler of industrial processes in Industry 4.0?",
      "options": [
       {
        "letter": "A",
        "text": "Manual paper ledgers"
       },
       {
        "letter": "B",
        "text": "Analog telephone lines"
       },
       {
        "letter": "C",
        "text": "Standalone spreadsheets"
       },
       {
        "letter": "D",
        "text": "Big-data analytics"
       }
      ],
      "correct": "D"
     },
     {
      "n": 10,
      "text": "Which Industry 4.0 example uses an augmented reality app to give a visual interpretation of on-board vehicle problems?",
      "options": [
       {
        "letter": "A",
        "text": "Volkswagen augmented maintenance"
       },
       {
        "letter": "B",
        "text": "Apache pipeline leak detection"
       },
       {
        "letter": "C",
        "text": "Rolls-Royce TotalCare"
       },
       {
        "letter": "D",
        "text": "GE Predix factory maintenance"
       }
      ],
      "correct": "A"
     },
     {
      "n": 11,
      "text": "Which program is cited for improving the reliability of aircraft engines through predictive maintenance?",
      "options": [
       {
        "letter": "A",
        "text": "Predix platform"
       },
       {
        "letter": "B",
        "text": "TotalCare program"
       },
       {
        "letter": "C",
        "text": "Smart water management"
       },
       {
        "letter": "D",
        "text": "Digital oil field"
       }
      ],
      "correct": "B"
     },
     {
      "n": 12,
      "text": "In industrial sensor calibration, what should be used as the reference when adjusting a sensor?",
      "options": [
       {
        "letter": "A",
        "text": "Unverified estimates"
       },
       {
        "letter": "B",
        "text": "Consumer-grade gadgets"
       },
       {
        "letter": "C",
        "text": "Standard references"
       },
       {
        "letter": "D",
        "text": "Averages taken from random samples"
       }
      ],
      "correct": "C"
     },
     {
      "n": 13,
      "text": "What does a SCADA system do with the data it collects?",
      "options": [
       {
        "letter": "A",
        "text": "Only stores it locally"
       },
       {
        "letter": "B",
        "text": "Only transmits it to users"
       },
       {
        "letter": "C",
        "text": "Only displays it on screens"
       },
       {
        "letter": "D",
        "text": "Processes, monitors and analyzes it at the same time"
       }
      ],
      "correct": "D"
     },
     {
      "n": 14,
      "text": "In healthcare IIoT, which device sends an alert message to other members when it is swallowed?",
      "options": [
       {
        "letter": "A",
        "text": "Smart pill"
       },
       {
        "letter": "B",
        "text": "Smart bed"
       },
       {
        "letter": "C",
        "text": "Biosensor patch"
       },
       {
        "letter": "D",
        "text": "Nano sensor"
       }
      ],
      "correct": "A"
     },
     {
      "n": 15,
      "text": "In an HVAC control system built on a wireless sensing and actuation network, what can the actuator be?",
      "options": [
       {
        "letter": "A",
        "text": "A wall-mounted thermostat dial"
       },
       {
        "letter": "B",
        "text": "A wired thermocouple"
       },
       {
        "letter": "C",
        "text": "A wireless air conditioner"
       },
       {
        "letter": "D",
        "text": "A paper log"
       }
      ],
      "correct": "C"
     }
    ]
   }
  ]
 },
 {
  "week": 5,
  "mocks": [
   {
    "mock": 1,
    "questions": [
     {
      "n": 1,
      "text": "Caterpillar's IoT and AR example gives novice machine operators what?",
      "options": [
       {
        "letter": "A",
        "text": "App-based instructions"
       },
       {
        "letter": "B",
        "text": "Geo-tagged yields"
       },
       {
        "letter": "C",
        "text": "Automated picking"
       },
       {
        "letter": "D",
        "text": "Smart glasses"
       }
      ],
      "correct": "A"
     },
     {
      "n": 2,
      "text": "Which technology supports storage and pickup of goods in Amazon's smart warehouse?",
      "options": [
       {
        "letter": "A",
        "text": "Sensor-equipped assembler tools"
       },
       {
        "letter": "B",
        "text": "Warehouse robots"
       },
       {
        "letter": "C",
        "text": "Autonomous tractors"
       },
       {
        "letter": "D",
        "text": "Wearable safety devices"
       }
      ],
      "correct": "B"
     },
     {
      "n": 3,
      "text": "Which combination supports Boeing's efficient manufacturing example?",
      "options": [
       {
        "letter": "A",
        "text": "GPS and bale mapping"
       },
       {
        "letter": "B",
        "text": "Cloud analytics and compressors"
       },
       {
        "letter": "C",
        "text": "Remote drilling and autonomous trains"
       },
       {
        "letter": "D",
        "text": "Smart glasses and sensor-equipped assembler tools"
       }
      ],
      "correct": "D"
     },
     {
      "n": 4,
      "text": "Fanuc's ZDT system with Cisco aims to achieve what?",
      "options": [
       {
        "letter": "A",
        "text": "Predictive maintenance and reduced downtime"
       },
       {
        "letter": "B",
        "text": "Air sold by volume"
       },
       {
        "letter": "C",
        "text": "Tool tracking"
       },
       {
        "letter": "D",
        "text": "Yield mapping"
       }
      ],
      "correct": "A"
     },
     {
      "n": 5,
      "text": "What does John Deere's Bale mobile app support?",
      "options": [
       {
        "letter": "A",
        "text": "Monitoring ship containers"
       },
       {
        "letter": "B",
        "text": "Cloud robotics"
       },
       {
        "letter": "C",
        "text": "Geo-tagged yield mapping and bale monitoring"
       },
       {
        "letter": "D",
        "text": "Autonomous mining"
       }
      ],
      "correct": "C"
     },
     {
      "n": 6,
      "text": "Bosch Track & Trace helps factories do what?",
      "options": [
       {
        "letter": "A",
        "text": "Monitor hydraulic pressure"
       },
       {
        "letter": "B",
        "text": "Monetize data"
       },
       {
        "letter": "C",
        "text": "Find tools and parts, reducing search time"
       },
       {
        "letter": "D",
        "text": "Develop cloud apps"
       }
      ],
      "correct": "C"
     },
     {
      "n": 7,
      "text": "A business model explains how an organization does what?",
      "options": [
       {
        "letter": "A",
        "text": "Creates, delivers, and captures value"
       },
       {
        "letter": "B",
        "text": "Sets all industry standards"
       },
       {
        "letter": "C",
        "text": "Replaces suppliers"
       },
       {
        "letter": "D",
        "text": "Eliminates customer segments"
       }
      ],
      "correct": "A"
     },
     {
      "n": 8,
      "text": "Which is a qualitative value proposition?",
      "options": [
       {
        "letter": "A",
        "text": "Price"
       },
       {
        "letter": "B",
        "text": "Quantified performance"
       },
       {
        "letter": "C",
        "text": "Post-purchase cost reduction"
       },
       {
        "letter": "D",
        "text": "Customer experience"
       }
      ],
      "correct": "D"
     },
     {
      "n": 9,
      "text": "A company identifies distinct groups of customers it intends to serve. Which building block is it defining?",
      "options": [
       {
        "letter": "A",
        "text": "Cost structure"
       },
       {
        "letter": "B",
        "text": "Market segment"
       },
       {
        "letter": "C",
        "text": "Value chain"
       },
       {
        "letter": "D",
        "text": "Revenue stream"
       }
      ],
      "correct": "B"
     },
     {
      "n": 10,
      "text": "Which is a resource type in the value-chain structure?",
      "options": [
       {
        "letter": "A",
        "text": "Seasonal"
       },
       {
        "letter": "B",
        "text": "Regional"
       },
       {
        "letter": "C",
        "text": "Regulatory"
       },
       {
        "letter": "D",
        "text": "Intellectual"
       }
      ],
      "correct": "D"
     },
     {
      "n": 11,
      "text": "Revenue received repeatedly for ongoing access is what type?",
      "options": [
       {
        "letter": "A",
        "text": "Asset-sale"
       },
       {
        "letter": "B",
        "text": "Transaction"
       },
       {
        "letter": "C",
        "text": "Recurring"
       },
       {
        "letter": "D",
        "text": "Brokerage"
       }
      ],
      "correct": "C"
     },
     {
      "n": 12,
      "text": "Pricing that changes with market conditions is called what?",
      "options": [
       {
        "letter": "A",
        "text": "Dynamic"
       },
       {
        "letter": "B",
        "text": "Subscription"
       },
       {
        "letter": "C",
        "text": "Licensing"
       },
       {
        "letter": "D",
        "text": "Fixed"
       }
      ],
      "correct": "A"
     },
     {
      "n": 13,
      "text": "A firm competes by offering something unique to customers. Which strategy is this?",
      "options": [
       {
        "letter": "A",
        "text": "Cost leadership"
       },
       {
        "letter": "B",
        "text": "Differentiation"
       },
       {
        "letter": "C",
        "text": "Focus"
       },
       {
        "letter": "D",
        "text": "Asset sharing"
       }
      ],
      "correct": "B"
     },
     {
      "n": 14,
      "text": "A provider charges a regular fee for periodic access to IoT services. Which model is this?",
      "options": [
       {
        "letter": "A",
        "text": "Outcome-based"
       },
       {
        "letter": "B",
        "text": "Subscription"
       },
       {
        "letter": "C",
        "text": "Asset-sharing"
       },
       {
        "letter": "D",
        "text": "Proxy-to-sell"
       }
      ],
      "correct": "B"
     },
     {
      "n": 15,
      "text": "In an outcome-based model, customers are relieved from which responsibilities?",
      "options": [
       {
        "letter": "A",
        "text": "Selecting market segments"
       },
       {
        "letter": "B",
        "text": "Setting the vendor's costs"
       },
       {
        "letter": "C",
        "text": "Ownership and maintenance"
       },
       {
        "letter": "D",
        "text": "Defining business vision"
       }
      ],
      "correct": "C"
     }
    ]
   },
   {
    "mock": 2,
    "questions": [
     {
      "n": 1,
      "text": "A firm shares connected assets among customers and charges based on time or nature of use. Which model is this?",
      "options": [
       {
        "letter": "A",
        "text": "Subscription"
       },
       {
        "letter": "B",
        "text": "Outcome-based"
       },
       {
        "letter": "C",
        "text": "IoT-as-a-Service"
       },
       {
        "letter": "D",
        "text": "Asset-sharing"
       }
      ],
      "correct": "D"
     },
     {
      "n": 2,
      "text": "A vendor leases sensors and data services, earning revenue based on volume and quality. Which model fits?",
      "options": [
       {
        "letter": "A",
        "text": "Asset sale"
       },
       {
        "letter": "B",
        "text": "Cost leadership"
       },
       {
        "letter": "C",
        "text": "Data monetization only"
       },
       {
        "letter": "D",
        "text": "IoT-as-a-Service"
       }
      ],
      "correct": "D"
     },
     {
      "n": 3,
      "text": "A connected product is sold cheaply to encourage purchases of compatible refills. Which model is illustrated?",
      "options": [
       {
        "letter": "A",
        "text": "Subscription"
       },
       {
        "letter": "B",
        "text": "IoT product as proxy to sell another product"
       },
       {
        "letter": "C",
        "text": "Process-oriented"
       },
       {
        "letter": "D",
        "text": "Outcome-based"
       }
      ],
      "correct": "B"
     },
     {
      "n": 4,
      "text": "A company aggregates device data and sells it to third parties. What must customers be told beforehand?",
      "options": [
       {
        "letter": "A",
        "text": "Cloud vendor prices"
       },
       {
        "letter": "B",
        "text": "Internal production schedules"
       },
       {
        "letter": "C",
        "text": "Partner counts"
       },
       {
        "letter": "D",
        "text": "Data use and privacy policies"
       }
      ],
      "correct": "D"
     },
     {
      "n": 5,
      "text": "Which cloud model provides online infrastructure resources such as processing power, data storage, and operating-system virtualization?",
      "options": [
       {
        "letter": "A",
        "text": "IaaS"
       },
       {
        "letter": "B",
        "text": "SaaS"
       },
       {
        "letter": "C",
        "text": "PaaS"
       },
       {
        "letter": "D",
        "text": "NaaS"
       }
      ],
      "correct": "A"
     },
     {
      "n": 6,
      "text": "Which cloud service provides development-oriented platforms to help build and integrate applications?",
      "options": [
       {
        "letter": "A",
        "text": "IaaS"
       },
       {
        "letter": "B",
        "text": "SaaS"
       },
       {
        "letter": "C",
        "text": "PaaS"
       },
       {
        "letter": "D",
        "text": "RTU"
       }
      ],
      "correct": "C"
     },
     {
      "n": 7,
      "text": "Customers use customized online applications without purchasing underlying software. Which model?",
      "options": [
       {
        "letter": "A",
        "text": "IaaS"
       },
       {
        "letter": "B",
        "text": "PaaS"
       },
       {
        "letter": "C",
        "text": "SaaS"
       },
       {
        "letter": "D",
        "text": "FMS"
       }
      ],
      "correct": "C"
     },
     {
      "n": 8,
      "text": "Which IIoT business model gathers and analyzes data using cloud-based models, then sells it as a service?",
      "options": [
       {
        "letter": "A",
        "text": "Service-oriented"
       },
       {
        "letter": "B",
        "text": "Process-oriented"
       },
       {
        "letter": "C",
        "text": "Asset-sharing"
       },
       {
        "letter": "D",
        "text": "Outcome-based"
       }
      ],
      "correct": "A"
     },
     {
      "n": 9,
      "text": "Which is the central goal of a process-oriented IIoT business model?",
      "options": [
       {
        "letter": "A",
        "text": "Increase ownership burden"
       },
       {
        "letter": "B",
        "text": "Sell unprocessed data only"
       },
       {
        "letter": "C",
        "text": "Replace cloud with manual work"
       },
       {
        "letter": "D",
        "text": "Reduce downtime and increase machine availability"
       }
      ],
      "correct": "D"
     },
     {
      "n": 10,
      "text": "In a cloud-based business model, what benefit can arise from a partner network?",
      "options": [
       {
        "letter": "A",
        "text": "Eliminating shared resource use"
       },
       {
        "letter": "B",
        "text": "Risk reduction and synergies from economies of scale"
       },
       {
        "letter": "C",
        "text": "Replacing all customer segments with one"
       },
       {
        "letter": "D",
        "text": "Avoiding development of cloud services"
       }
      ],
      "correct": "B"
     },
     {
      "n": 11,
      "text": "Seamless data sharing among machines from different manufacturers is hindered by which challenge?",
      "options": [
       {
        "letter": "A",
        "text": "Too many customer experiences"
       },
       {
        "letter": "B",
        "text": "Fixed pricing"
       },
       {
        "letter": "C",
        "text": "Physical resource overuse"
       },
       {
        "letter": "D",
        "text": "Lack of interoperability"
       }
      ],
      "correct": "D"
     },
     {
      "n": 12,
      "text": "What makes it difficult to estimate benefits of new IIoT technologies?",
      "options": [
       {
        "letter": "A",
        "text": "Excess interoperability"
       },
       {
        "letter": "B",
        "text": "Mature technologies"
       },
       {
        "letter": "C",
        "text": "Uncertain return on investment"
       },
       {
        "letter": "D",
        "text": "Digital talent surplus"
       }
      ],
      "correct": "C"
     },
     {
      "n": 13,
      "text": "Which opportunity is named under transaction cost theory?",
      "options": [
       {
        "letter": "A",
        "text": "Non-ownership contracts"
       },
       {
        "letter": "B",
        "text": "Mass-market advertising"
       },
       {
        "letter": "C",
        "text": "Asset-driven opportunities"
       },
       {
        "letter": "D",
        "text": "Infrastructure ownership"
       }
      ],
      "correct": "A"
     },
     {
      "n": 14,
      "text": "Which set lists the components of IIoT business models?",
      "options": [
       {
        "letter": "A",
        "text": "Sensors, actuators, gateways, servers"
       },
       {
        "letter": "B",
        "text": "Value proposition, capturing mechanism, network, communication"
       },
       {
        "letter": "C",
        "text": "Vision, objectives, activities, tasks"
       },
       {
        "letter": "D",
        "text": "Production, logistics, quality, inventory"
       }
      ],
      "correct": "B"
     },
     {
      "n": 15,
      "text": "What must IoT business models consider beyond the company itself?",
      "options": [
       {
        "letter": "A",
        "text": "Exclude partners"
       },
       {
        "letter": "B",
        "text": "Ecosystem scope and value for key stakeholders"
       },
       {
        "letter": "C",
        "text": "Treat data as valueless"
       },
       {
        "letter": "D",
        "text": "Avoid complex value streams"
       }
      ],
      "correct": "B"
     }
    ]
   },
   {
    "mock": 3,
    "questions": [
     {
      "n": 1,
      "text": "Which organization proposed IIRA through its Technology Working Group?",
      "options": [
       {
        "letter": "A",
        "text": "3GPP"
       },
       {
        "letter": "B",
        "text": "IEEE"
       },
       {
        "letter": "C",
        "text": "Industrial Internet Consortium"
       },
       {
        "letter": "D",
        "text": "IEC"
       }
      ],
      "correct": "C"
     },
     {
      "n": 2,
      "text": "IIRA identifies which as the major infrastructure concern, followed by security?",
      "options": [
       {
        "letter": "A",
        "text": "Cost"
       },
       {
        "letter": "B",
        "text": "Monetization"
       },
       {
        "letter": "C",
        "text": "Safety"
       },
       {
        "letter": "D",
        "text": "Interoperability"
       }
      ],
      "correct": "C"
     },
     {
      "n": 3,
      "text": "Which is a leading OSH KPI example?",
      "options": [
       {
        "letter": "A",
        "text": "Fatalities"
       },
       {
        "letter": "B",
        "text": "Lost-time incident rate"
       },
       {
        "letter": "C",
        "text": "Days lost to sickness absence"
       },
       {
        "letter": "D",
        "text": "Number of OSH audits"
       }
      ],
      "correct": "D"
     },
     {
      "n": 4,
      "text": "What is a primary purpose of IIC testbeds?",
      "options": [
       {
        "letter": "A",
        "text": "Document only sold equipment"
       },
       {
        "letter": "B",
        "text": "Rigorously test innovations before market launch"
       },
       {
        "letter": "C",
        "text": "Eliminate interoperability standards"
       },
       {
        "letter": "D",
        "text": "Provide cloud billing"
       }
      ],
      "correct": "B"
     },
     {
      "n": 5,
      "text": "In IIRA, a viewpoint is what?",
      "options": [
       {
        "letter": "A",
        "text": "A physical actuator"
       },
       {
        "letter": "B",
        "text": "A software revenue model"
       },
       {
        "letter": "C",
        "text": "A supplier list"
       },
       {
        "letter": "D",
        "text": "Ideas for describing, analyzing, and solving specific concerns"
       }
      ],
      "correct": "D"
     },
     {
      "n": 6,
      "text": "What does architecture representation express?",
      "options": [
       {
        "letter": "A",
        "text": "A view containing architecture-frame outcomes"
       },
       {
        "letter": "B",
        "text": "Market segments"
       },
       {
        "letter": "C",
        "text": "Partner networks"
       },
       {
        "letter": "D",
        "text": "Operating procedures"
       }
      ],
      "correct": "A"
     },
     {
      "n": 7,
      "text": "In the three-tier IIRA pattern, which layer is characterized by the breadth of distribution, governance, and location of the edge system?",
      "options": [
       {
        "letter": "A",
        "text": "Platform"
       },
       {
        "letter": "B",
        "text": "Enterprise"
       },
       {
        "letter": "C",
        "text": "Edge"
       },
       {
        "letter": "D",
        "text": "Usage"
       }
      ],
      "correct": "C"
     },
     {
      "n": 8,
      "text": "Which three-tier layer processes and forwards enterprise control commands to the edge?",
      "options": [
       {
        "letter": "A",
        "text": "Enterprise"
       },
       {
        "letter": "B",
        "text": "Edge"
       },
       {
        "letter": "C",
        "text": "Platform"
       },
       {
        "letter": "D",
        "text": "Usage"
       }
      ],
      "correct": "C"
     },
     {
      "n": 9,
      "text": "What can a gateway do in gateway-mediated edge architecture?",
      "options": [
       {
        "letter": "A",
        "text": "Manage edge devices and process data locally"
       },
       {
        "letter": "B",
        "text": "Set organizational business objectives"
       },
       {
        "letter": "C",
        "text": "Replace all local devices"
       },
       {
        "letter": "D",
        "text": "Serve only as an end-user interface"
       }
      ],
      "correct": "A"
     },
     {
      "n": 10,
      "text": "Which IIRA pattern places smart machines at the lowest level for local control and automation?",
      "options": [
       {
        "letter": "A",
        "text": "Three-tier"
       },
       {
        "letter": "B",
        "text": "Gateway-mediated"
       },
       {
        "letter": "C",
        "text": "Cloud-based"
       },
       {
        "letter": "D",
        "text": "Layered databus"
       }
      ],
      "correct": "D"
     },
     {
      "n": 11,
      "text": "Which viewpoints are named by IIRA?",
      "options": [
       {
        "letter": "A",
        "text": "Cloud, service, process, edge"
       },
       {
        "letter": "B",
        "text": "Business, usage, functional, implementation"
       },
       {
        "letter": "C",
        "text": "Control, operations, data, application"
       },
       {
        "letter": "D",
        "text": "Safety, security, reliability, privacy"
       }
      ],
      "correct": "B"
     },
     {
      "n": 12,
      "text": "What is expected of key objectives in the business viewpoint?",
      "options": [
       {
        "letter": "A",
        "text": "Informal and unmeasurable"
       },
       {
        "letter": "B",
        "text": "Limited to interface protocols"
       },
       {
        "letter": "C",
        "text": "Identical to components"
       },
       {
        "letter": "D",
        "text": "Measurable and time-bound"
       }
      ],
      "correct": "D"
     },
     {
      "n": 13,
      "text": "In the usage viewpoint, what is a task?",
      "options": [
       {
        "letter": "A",
        "text": "Future organizational state"
       },
       {
        "letter": "B",
        "text": "Workflow trigger"
       },
       {
        "letter": "C",
        "text": "Basic unit of work performed by a party assuming a role"
       },
       {
        "letter": "D",
        "text": "Network topology"
       }
      ],
      "correct": "C"
     },
     {
      "n": 14,
      "text": "Which functional domain covers sensing, actuation, and communication?",
      "options": [
       {
        "letter": "A",
        "text": "Control"
       },
       {
        "letter": "B",
        "text": "Information"
       },
       {
        "letter": "C",
        "text": "Application"
       },
       {
        "letter": "D",
        "text": "Operations"
       }
      ],
      "correct": "A"
     },
     {
      "n": 15,
      "text": "Which viewpoint maps usage activities to functional and then implementation components?",
      "options": [
       {
        "letter": "A",
        "text": "Business"
       },
       {
        "letter": "B",
        "text": "Implementation"
       },
       {
        "letter": "C",
        "text": "Usage"
       },
       {
        "letter": "D",
        "text": "Functional"
       }
      ],
      "correct": "B"
     }
    ]
   }
  ]
 },
 {
  "week": 6,
  "mocks": [
   {
    "mock": 1,
    "questions": [
     {
      "n": 1,
      "text": "Which sensor benefit supports prompt observation of changing industrial conditions?",
      "options": [
       {
        "letter": "A",
        "text": "Real-time monitoring"
       },
       {
        "letter": "B",
        "text": "Manual record keeping"
       },
       {
        "letter": "C",
        "text": "Higher network jitter"
       },
       {
        "letter": "D",
        "text": "Reduced visibility"
       }
      ],
      "correct": "A"
     },
     {
      "n": 2,
      "text": "What does the remote switch in the manufacturing-process example allow?",
      "options": [
       {
        "letter": "A",
        "text": "Measure tank gas"
       },
       {
        "letter": "B",
        "text": "Test product color"
       },
       {
        "letter": "C",
        "text": "Turn production on or off remotely"
       },
       {
        "letter": "D",
        "text": "Count shipped goods"
       }
      ],
      "correct": "C"
     },
     {
      "n": 3,
      "text": "What output does the LM35 temperature sensor produce?",
      "options": [
       {
        "letter": "A",
        "text": "Analog voltage proportional to Celsius temperature"
       },
       {
        "letter": "B",
        "text": "Nine-bit digital data"
       },
       {
        "letter": "C",
        "text": "Frequency-modulated signal"
       },
       {
        "letter": "D",
        "text": "Ethernet packets"
       }
      ],
      "correct": "A"
     },
     {
      "n": 4,
      "text": "Which statement describes the DS1621 temperature sensor?",
      "options": [
       {
        "letter": "A",
        "text": "Three-axis analog accelerometer"
       },
       {
        "letter": "B",
        "text": "Analog-only thermometer"
       },
       {
        "letter": "C",
        "text": "Requires more than 24 volts"
       },
       {
        "letter": "D",
        "text": "Digital sensor generating 9-bit temperature data"
       }
      ],
      "correct": "D"
     },
     {
      "n": 5,
      "text": "What does the ADXL335 provide?",
      "options": [
       {
        "letter": "A",
        "text": "LPG concentration only"
       },
       {
        "letter": "B",
        "text": "Analog values for X, Y, and Z acceleration"
       },
       {
        "letter": "C",
        "text": "Nine-bit temperature readings"
       },
       {
        "letter": "D",
        "text": "Rotational torque over fieldbus"
       }
      ],
      "correct": "B"
     },
     {
      "n": 6,
      "text": "Which gases can the MQ-2 provide concentration readings for as analog voltage?",
      "options": [
       {
        "letter": "A",
        "text": "LPG, propane, hydrogen"
       },
       {
        "letter": "B",
        "text": "Oxygen, nitrogen, carbon dioxide"
       },
       {
        "letter": "C",
        "text": "Helium, neon, argon"
       },
       {
        "letter": "D",
        "text": "Water vapor and ozone"
       }
      ],
      "correct": "A"
     },
     {
      "n": 7,
      "text": "Which sensor measures time-varying stress or strain in ferromagnetic materials?",
      "options": [
       {
        "letter": "A",
        "text": "Torque"
       },
       {
        "letter": "B",
        "text": "Pressure"
       },
       {
        "letter": "C",
        "text": "Magnetostrictive"
       },
       {
        "letter": "D",
        "text": "PIR"
       }
      ],
      "correct": "C"
     },
     {
      "n": 8,
      "text": "Which sensor measures rotating torque and can measure rotational speed?",
      "options": [
       {
        "letter": "A",
        "text": "Vacuum"
       },
       {
        "letter": "B",
        "text": "Torque"
       },
       {
        "letter": "C",
        "text": "Optical"
       },
       {
        "letter": "D",
        "text": "Level"
       }
      ],
      "correct": "B"
     },
     {
      "n": 9,
      "text": "A plant needs to measure pressure below atmospheric pressure. Which sensor should it use?",
      "options": [
       {
        "letter": "A",
        "text": "Speed"
       },
       {
        "letter": "B",
        "text": "Image"
       },
       {
        "letter": "C",
        "text": "Touch"
       },
       {
        "letter": "D",
        "text": "Vacuum"
       }
      ],
      "correct": "D"
     },
     {
      "n": 10,
      "text": "Which sensor detects infrared radiation from people nearby?",
      "options": [
       {
        "letter": "A",
        "text": "Ultrasonic"
       },
       {
        "letter": "B",
        "text": "Flow"
       },
       {
        "letter": "C",
        "text": "Radiation"
       },
       {
        "letter": "D",
        "text": "PIR"
       }
      ],
      "correct": "D"
     },
     {
      "n": 11,
      "text": "Which sensor is associated with object detection and monitoring liquid levels in tanks?",
      "options": [
       {
        "letter": "A",
        "text": "Ultrasonic"
       },
       {
        "letter": "B",
        "text": "Magnetostrictive"
       },
       {
        "letter": "C",
        "text": "Torque"
       },
       {
        "letter": "D",
        "text": "Vacuum"
       }
      ],
      "correct": "A"
     },
     {
      "n": 12,
      "text": "What does gas-sensor sensitivity measure?",
      "options": [
       {
        "letter": "A",
        "text": "Recovery to baseline"
       },
       {
        "letter": "B",
        "text": "Ability to distinguish one gas in a mixture"
       },
       {
        "letter": "C",
        "text": "Output change per unit change in target-gas concentration"
       },
       {
        "letter": "D",
        "text": "Long-term robustness"
       }
      ],
      "correct": "C"
     },
     {
      "n": 13,
      "text": "The time for a gas sensor response to reach a specified proportion, such as 80% or 90%, of its final value is called what?",
      "options": [
       {
        "letter": "A",
        "text": "Baseline resistance"
       },
       {
        "letter": "B",
        "text": "Response time"
       },
       {
        "letter": "C",
        "text": "Selectivity"
       },
       {
        "letter": "D",
        "text": "Optimum temperature"
       }
      ],
      "correct": "B"
     },
     {
      "n": 14,
      "text": "What does reversibility describe in a gas sensor?",
      "options": [
       {
        "letter": "A",
        "text": "Returning to baseline resistance after exposure stops"
       },
       {
        "letter": "B",
        "text": "Detecting several gases simultaneously"
       },
       {
        "letter": "C",
        "text": "Reaching 90% of final reading"
       },
       {
        "letter": "D",
        "text": "Heater power use"
       }
      ],
      "correct": "A"
     },
     {
      "n": 15,
      "text": "State true or false. In the VOC demo, a change from baseline resistance triggers an alert.",
      "options": [
       {
        "letter": "A",
        "text": "True"
       },
       {
        "letter": "B",
        "text": "False"
       }
      ],
      "correct": "A"
     }
    ]
   },
   {
    "mock": 2,
    "questions": [
     {
      "n": 1,
      "text": "Metal oxide semiconductor gas sensors are also known by what name?",
      "options": [
       {
        "letter": "A",
        "text": "Gas chromatographs"
       },
       {
        "letter": "B",
        "text": "Optical gas sensors"
       },
       {
        "letter": "C",
        "text": "Chemi-resistive gas sensors"
       },
       {
        "letter": "D",
        "text": "Acoustic gas sensors"
       }
      ],
      "correct": "C"
     },
     {
      "n": 2,
      "text": "What is the baseline resistance of a MOS gas sensor?",
      "options": [
       {
        "letter": "A",
        "text": "Resistance when exposed to target gas"
       },
       {
        "letter": "B",
        "text": "Its minimum resistance at any temperature"
       },
       {
        "letter": "C",
        "text": "Resistance of the heater wire"
       },
       {
        "letter": "D",
        "text": "Sensor-material resistance in air without target gas"
       }
      ],
      "correct": "D"
     },
     {
      "n": 3,
      "text": "What supplies thermal energy for a chemi-resistive MOS gas sensor?",
      "options": [
       {
        "letter": "A",
        "text": "A gateway"
       },
       {
        "letter": "B",
        "text": "A heater"
       },
       {
        "letter": "C",
        "text": "Optical fiber"
       },
       {
        "letter": "D",
        "text": "Piezoelectric actuator"
       }
      ],
      "correct": "B"
     },
     {
      "n": 4,
      "text": "For a MOS sensor, what is its optimum temperature?",
      "options": [
       {
        "letter": "A",
        "text": "Ambient temperature without gas"
       },
       {
        "letter": "B",
        "text": "Temperature that melts the casing"
       },
       {
        "letter": "C",
        "text": "Temperature at which the sensor gives its best response"
       },
       {
        "letter": "D",
        "text": "Temperature where baseline resistance is zero"
       }
      ],
      "correct": "C"
     },
     {
      "n": 5,
      "text": "When exposed to a reducing gas, what happens to resistance in an n-type MOS sensor?",
      "options": [
       {
        "letter": "A",
        "text": "It decreases"
       },
       {
        "letter": "B",
        "text": "It becomes infinite"
       },
       {
        "letter": "C",
        "text": "It remains fixed"
       },
       {
        "letter": "D",
        "text": "It increases"
       }
      ],
      "correct": "A"
     },
     {
      "n": 6,
      "text": "Which characteristic is the ability to detect a particular gas in a mixture?",
      "options": [
       {
        "letter": "A",
        "text": "Sensitivity"
       },
       {
        "letter": "B",
        "text": "Stability"
       },
       {
        "letter": "C",
        "text": "Reversibility"
       },
       {
        "letter": "D",
        "text": "Selectivity"
       }
      ],
      "correct": "D"
     },
     {
      "n": 7,
      "text": "A gas sensor keeps its sensing property over a long period in a hostile environment. Which characteristic is this?",
      "options": [
       {
        "letter": "A",
        "text": "Response percent"
       },
       {
        "letter": "B",
        "text": "Stability"
       },
       {
        "letter": "C",
        "text": "Sensitivity"
       },
       {
        "letter": "D",
        "text": "Reversibility"
       }
      ],
      "correct": "B"
     },
     {
      "n": 8,
      "text": "Which component generates the audible alert in the gas-sensing demonstration setup?",
      "options": [
       {
        "letter": "A",
        "text": "Buzzer"
       },
       {
        "letter": "B",
        "text": "Sensor module"
       },
       {
        "letter": "C",
        "text": "Gas flow line"
       },
       {
        "letter": "D",
        "text": "Temperature controller"
       }
      ],
      "correct": "A"
     },
     {
      "n": 9,
      "text": "Which is a listed application of gas sensors?",
      "options": [
       {
        "letter": "A",
        "text": "Geo-tagging crops"
       },
       {
        "letter": "B",
        "text": "Measuring rotational speed only"
       },
       {
        "letter": "C",
        "text": "Detecting toxic-gas leakage"
       },
       {
        "letter": "D",
        "text": "Warehouse inventory tracking"
       }
      ],
      "correct": "C"
     },
     {
      "n": 10,
      "text": "What is a typical purpose of fieldbus technology?",
      "options": [
       {
        "letter": "A",
        "text": "Global satellite coverage"
       },
       {
        "letter": "B",
        "text": "Connect field devices on a LAN for industrial automation"
       },
       {
        "letter": "C",
        "text": "Consumer video over cellular networks"
       },
       {
        "letter": "D",
        "text": "Public telephone switching"
       }
      ],
      "correct": "B"
     },
     {
      "n": 11,
      "text": "What technologies does Modbus-TCP use to transmit data between compatible devices?",
      "options": [
       {
        "letter": "A",
        "text": "RS-232 only"
       },
       {
        "letter": "B",
        "text": "CAN and power wiring"
       },
       {
        "letter": "C",
        "text": "Adaptive frequency hopping"
       },
       {
        "letter": "D",
        "text": "TCP/IP and Ethernet"
       }
      ],
      "correct": "D"
     },
     {
      "n": 12,
      "text": "In a Modbus-TCP frame, what does MBAP identify?",
      "options": [
       {
        "letter": "A",
        "text": "PDU payload"
       },
       {
        "letter": "B",
        "text": "Socket limit"
       },
       {
        "letter": "C",
        "text": "Serial error field"
       },
       {
        "letter": "D",
        "text": "ADU header"
       }
      ],
      "correct": "D"
     },
     {
      "n": 13,
      "text": "In Modbus-TCP's client-server architecture, which devices are the masters?",
      "options": [
       {
        "letter": "A",
        "text": "Clients"
       },
       {
        "letter": "B",
        "text": "Gateways"
       },
       {
        "letter": "C",
        "text": "Servers"
       },
       {
        "letter": "D",
        "text": "Slaves"
       }
      ],
      "correct": "A"
     },
     {
      "n": 14,
      "text": "EtherCAT is based on which international standards named in the lecture?",
      "options": [
       {
        "letter": "A",
        "text": "IEC 61508 and ISO 15693"
       },
       {
        "letter": "B",
        "text": "IEEE 802.15 and IEC/PAS 62601"
       },
       {
        "letter": "C",
        "text": "IEC 61158 and IEC 61784"
       },
       {
        "letter": "D",
        "text": "EN 954 and IEC 61158 only"
       }
      ],
      "correct": "C"
     },
     {
      "n": 15,
      "text": "What is the data object exchanged between EtherCAT masters and slaves?",
      "options": [
       {
        "letter": "A",
        "text": "Common industrial object"
       },
       {
        "letter": "B",
        "text": "Process data object (PDO)"
       },
       {
        "letter": "C",
        "text": "Modbus application header"
       },
       {
        "letter": "D",
        "text": "Remote terminal unit"
       }
      ],
      "correct": "B"
     }
    ]
   },
   {
    "mock": 3,
    "questions": [
     {
      "n": 1,
      "text": "Which EtherNet/IP communication type provides continuous transfer for real-time I/O data?",
      "options": [
       {
        "letter": "A",
        "text": "Implicit"
       },
       {
        "letter": "B",
        "text": "Explicit"
       },
       {
        "letter": "C",
        "text": "Acyclic"
       },
       {
        "letter": "D",
        "text": "Non-real-time"
       }
      ],
      "correct": "A"
     },
     {
      "n": 2,
      "text": "PROFINET's isochronous real-time channel is suited to which application?",
      "options": [
       {
        "letter": "A",
        "text": "Clock-synchronized motion control"
       },
       {
        "letter": "B",
        "text": "Non-critical file transfer"
       },
       {
        "letter": "C",
        "text": "Public telephone switching"
       },
       {
        "letter": "D",
        "text": "DSL sensor reporting"
       }
      ],
      "correct": "A"
     },
     {
      "n": 3,
      "text": "What does TSN use to minimize jitter in real-time communication?",
      "options": [
       {
        "letter": "A",
        "text": "Random backoff"
       },
       {
        "letter": "B",
        "text": "Serial request/response"
       },
       {
        "letter": "C",
        "text": "Satellite retransmission"
       },
       {
        "letter": "D",
        "text": "Centralized time scheduling"
       }
      ],
      "correct": "D"
     },
     {
      "n": 4,
      "text": "Which statement describes Modbus-RTU?",
      "options": [
       {
        "letter": "A",
        "text": "Wireless protocol using frequency hopping"
       },
       {
        "letter": "B",
        "text": "Serial RS-232/485 protocol using master-slave request/response"
       },
       {
        "letter": "C",
        "text": "Ethernet protocol with cloud servers"
       },
       {
        "letter": "D",
        "text": "Optical-only fieldbus"
       }
      ],
      "correct": "B"
     },
     {
      "n": 5,
      "text": "Which Profibus variant is designed for process automation and uses Manchester Bus Power?",
      "options": [
       {
        "letter": "A",
        "text": "Profibus DP"
       },
       {
        "letter": "B",
        "text": "Profibus FMS"
       },
       {
        "letter": "C",
        "text": "Profibus PA"
       },
       {
        "letter": "D",
        "text": "Profibus TCP"
       }
      ],
      "correct": "C"
     },
     {
      "n": 6,
      "text": "What is a defining Interbus topology feature?",
      "options": [
       {
        "letter": "A",
        "text": "Active ring closed by the last subscriber"
       },
       {
        "letter": "B",
        "text": "Active star"
       },
       {
        "letter": "C",
        "text": "Satellite mesh"
       },
       {
        "letter": "D",
        "text": "Passive bus with no master"
       }
      ],
      "correct": "A"
     },
     {
      "n": 7,
      "text": "Which CC-Link variant provides Industrial Ethernet at 1 Gbps?",
      "options": [
       {
        "letter": "A",
        "text": "CC-Link/LT"
       },
       {
        "letter": "B",
        "text": "Standard CC-Link"
       },
       {
        "letter": "C",
        "text": "CC-Link Safety"
       },
       {
        "letter": "D",
        "text": "CC-Link IE"
       }
      ],
      "correct": "D"
     },
     {
      "n": 8,
      "text": "DeviceNet is based on which standard?",
      "options": [
       {
        "letter": "A",
        "text": "TCP/IP"
       },
       {
        "letter": "B",
        "text": "CAN"
       },
       {
        "letter": "C",
        "text": "IEC 61158"
       },
       {
        "letter": "D",
        "text": "IEEE 802.3"
       }
      ],
      "correct": "B"
     },
     {
      "n": 9,
      "text": "Which DSL type supports equal upload and download speeds?",
      "options": [
       {
        "letter": "A",
        "text": "SDSL"
       },
       {
        "letter": "B",
        "text": "ADSL"
       },
       {
        "letter": "C",
        "text": "PSTN"
       },
       {
        "letter": "D",
        "text": "DSL-TCP"
       }
      ],
      "correct": "A"
     },
     {
      "n": 10,
      "text": "What does a modem do to digital data at the transmitting side?",
      "options": [
       {
        "letter": "A",
        "text": "Demodulates received analog data"
       },
       {
        "letter": "B",
        "text": "Routes packets between networks"
       },
       {
        "letter": "C",
        "text": "Modulates data onto an analog carrier signal"
       },
       {
        "letter": "D",
        "text": "Aggregates sensor data in a fieldbus frame"
       }
      ],
      "correct": "C"
     },
     {
      "n": 11,
      "text": "Which satellite-communication limitation is noted in the lecture?",
      "options": [
       {
        "letter": "A",
        "text": "It cannot provide global coverage"
       },
       {
        "letter": "B",
        "text": "Greater propagation delay than terrestrial methods"
       },
       {
        "letter": "C",
        "text": "Cost always rises with regional distance"
       },
       {
        "letter": "D",
        "text": "It supports only short-range links"
       }
      ],
      "correct": "B"
     },
     {
      "n": 12,
      "text": "Which 3GPP release includes the “Factories of the Future” 5G use case?",
      "options": [
       {
        "letter": "A",
        "text": "Release 12"
       },
       {
        "letter": "B",
        "text": "Release 14"
       },
       {
        "letter": "C",
        "text": "Release 15"
       },
       {
        "letter": "D",
        "text": "Release 16"
       }
      ],
      "correct": "D"
     },
     {
      "n": 13,
      "text": "Which 5G-NR service category targets ultra-reliable low-latency communication?",
      "options": [
       {
        "letter": "A",
        "text": "eMBB"
       },
       {
        "letter": "B",
        "text": "mMTC"
       },
       {
        "letter": "C",
        "text": "NRT"
       },
       {
        "letter": "D",
        "text": "uRLLC"
       }
      ],
      "correct": "D"
     },
     {
      "n": 14,
      "text": "What does the Tactile Internet transmit to enable haptic communication?",
      "options": [
       {
        "letter": "A",
        "text": "Touch/sensing information and actuation in real time"
       },
       {
        "letter": "B",
        "text": "High-resolution video only"
       },
       {
        "letter": "C",
        "text": "Non-real-time logs only"
       },
       {
        "letter": "D",
        "text": "Voice and fax signals"
       }
      ],
      "correct": "A"
     },
     {
      "n": 15,
      "text": "State true or false. Millimeter-wave communication can suffer from high penetration loss and shadowing.",
      "options": [
       {
        "letter": "A",
        "text": "True"
       },
       {
        "letter": "B",
        "text": "False"
       }
      ],
      "correct": "A"
     }
    ]
   }
  ]
 },
 {
  "week": 7,
  "mocks": [
   {
    "mock": 1,
    "questions": [
     {
      "n": 1,
      "text": "What does the acronym LPWAN stand for?",
      "options": [
       {
        "letter": "A",
        "text": "Low Power Wide Area Network"
       },
       {
        "letter": "B",
        "text": "Long Packet Wireless Access Network"
       },
       {
        "letter": "C",
        "text": "Low Power Wireless Area Node"
       },
       {
        "letter": "D",
        "text": "Limited Power Wide Access Network"
       }
      ],
      "correct": "A"
     },
     {
      "n": 2,
      "text": "Which license-free sub-gigahertz frequency does LoRa use in North America?",
      "options": [
       {
        "letter": "A",
        "text": "169 MHz"
       },
       {
        "letter": "B",
        "text": "433 MHz"
       },
       {
        "letter": "C",
        "text": "868 MHz"
       },
       {
        "letter": "D",
        "text": "915 MHz"
       }
      ],
      "correct": "D"
     },
     {
      "n": 3,
      "text": "Which statement correctly distinguishes LoRa from LoRaWAN?",
      "options": [
       {
        "letter": "A",
        "text": "LoRa is the cloud platform, while LoRaWAN is the radio chip"
       },
       {
        "letter": "B",
        "text": "LoRa is the radio technology, while LoRaWAN is the network in which LoRa operates"
       },
       {
        "letter": "C",
        "text": "LoRa and LoRaWAN are two names for the same standard"
       },
       {
        "letter": "D",
        "text": "LoRaWAN runs only on licensed cellular spectrum"
       }
      ],
      "correct": "B"
     },
     {
      "n": 4,
      "text": "What is the maximum number of messages per day that the SIGFOX network provides when each message carries a 12-byte payload?",
      "options": [
       {
        "letter": "A",
        "text": "14"
       },
       {
        "letter": "B",
        "text": "1,400"
       },
       {
        "letter": "C",
        "text": "140"
       },
       {
        "letter": "D",
        "text": "14,000"
       }
      ],
      "correct": "C"
     },
     {
      "n": 5,
      "text": "Zigbee's physical and MAC layers are based on which IEEE standard?",
      "options": [
       {
        "letter": "A",
        "text": "IEEE 802.15.4"
       },
       {
        "letter": "B",
        "text": "IEEE 802.11"
       },
       {
        "letter": "C",
        "text": "IEEE 802.3"
       },
       {
        "letter": "D",
        "text": "IEEE 802.16"
       }
      ],
      "correct": "A"
     },
     {
      "n": 6,
      "text": "Which three network topologies does Zigbee support?",
      "options": [
       {
        "letter": "A",
        "text": "Bus, Ring, Star"
       },
       {
        "letter": "B",
        "text": "Point-to-point, Tree, Ring"
       },
       {
        "letter": "C",
        "text": "Mesh, Bus, Hybrid"
       },
       {
        "letter": "D",
        "text": "Star, Tree, Mesh"
       }
      ],
      "correct": "D"
     },
     {
      "n": 7,
      "text": "Which Zigbee device type is the root of the network and acts as a bridge between different networks?",
      "options": [
       {
        "letter": "A",
        "text": "End device"
       },
       {
        "letter": "B",
        "text": "Router"
       },
       {
        "letter": "C",
        "text": "Coordinator"
       },
       {
        "letter": "D",
        "text": "Repeater"
       }
      ],
      "correct": "C"
     },
     {
      "n": 8,
      "text": "Which Zigbee device type connects only to its parent node and does not relay information for other nodes?",
      "options": [
       {
        "letter": "A",
        "text": "Router"
       },
       {
        "letter": "B",
        "text": "End device"
       },
       {
        "letter": "C",
        "text": "Coordinator"
       },
       {
        "letter": "D",
        "text": "Gateway"
       }
      ],
      "correct": "B"
     },
     {
      "n": 9,
      "text": "Which company produces the XBee radio modules?",
      "options": [
       {
        "letter": "A",
        "text": "Digi"
       },
       {
        "letter": "B",
        "text": "Cisco"
       },
       {
        "letter": "C",
        "text": "Espressif"
       },
       {
        "letter": "D",
        "text": "Siemens"
       }
      ],
      "correct": "A"
     },
     {
      "n": 10,
      "text": "How many connected devices did Cisco predict would exist by 2020?",
      "options": [
       {
        "letter": "A",
        "text": "5 billion"
       },
       {
        "letter": "B",
        "text": "500 million"
       },
       {
        "letter": "C",
        "text": "15 billion"
       },
       {
        "letter": "D",
        "text": "50 billion"
       }
      ],
      "correct": "D"
     },
     {
      "n": 11,
      "text": "An operations team wants to decide the best action to take, using optimization and simulation models. Which analytics type fits this goal?",
      "options": [
       {
        "letter": "A",
        "text": "Descriptive"
       },
       {
        "letter": "B",
        "text": "Prescriptive"
       },
       {
        "letter": "C",
        "text": "Predictive"
       },
       {
        "letter": "D",
        "text": "Reactive"
       }
      ],
      "correct": "B"
     },
     {
      "n": 12,
      "text": "A utility uses data mining to forecast next month's electricity demand. Which analytics category does this represent?",
      "options": [
       {
        "letter": "A",
        "text": "Descriptive"
       },
       {
        "letter": "B",
        "text": "Prescriptive"
       },
       {
        "letter": "C",
        "text": "Predictive"
       },
       {
        "letter": "D",
        "text": "Real-time"
       }
      ],
      "correct": "C"
     },
     {
      "n": 13,
      "text": "Complex event processing commonly relies on which mechanism to correlate event streams against predefined conditions?",
      "options": [
       {
        "letter": "A",
        "text": "Rule-based engine"
       },
       {
        "letter": "B",
        "text": "Batch scheduler"
       },
       {
        "letter": "C",
        "text": "Relational join planner"
       },
       {
        "letter": "D",
        "text": "Neural network trainer"
       }
      ],
      "correct": "A"
     },
     {
      "n": 14,
      "text": "In an end-to-end IIoT pipeline, which component aggregates and filters sensor data, applies deployed rules and generates alerts close to the data source?",
      "options": [
       {
        "letter": "A",
        "text": "Cloud analytics service"
       },
       {
        "letter": "B",
        "text": "MQTT broker"
       },
       {
        "letter": "C",
        "text": "Edge agent"
       },
       {
        "letter": "D",
        "text": "Sensor node"
       }
      ],
      "correct": "C"
     },
     {
      "n": 15,
      "text": "Where does IIoT middleware sit in the software stack?",
      "options": [
       {
        "letter": "A",
        "text": "Between the physical and network layers"
       },
       {
        "letter": "B",
        "text": "Between the infrastructure layer and the application layer"
       },
       {
        "letter": "C",
        "text": "Between the application and presentation layers"
       },
       {
        "letter": "D",
        "text": "Between the sensors and the actuators"
       }
      ],
      "correct": "B"
     }
    ]
   },
   {
    "mock": 2,
    "questions": [
     {
      "n": 1,
      "text": "Which board is an ESP-12 module programmed through the Arduino IDE and used as the processor in the environment-monitoring hands-on?",
      "options": [
       {
        "letter": "A",
        "text": "Arduino Uno"
       },
       {
        "letter": "B",
        "text": "NodeMCU"
       },
       {
        "letter": "C",
        "text": "Raspberry Pi"
       },
       {
        "letter": "D",
        "text": "Beaglebone Black"
       }
      ],
      "correct": "B"
     },
     {
      "n": 2,
      "text": "Which sensor in the LoRa-based monitoring setup reports both temperature and humidity through a single data pin?",
      "options": [
       {
        "letter": "A",
        "text": "MQ-5"
       },
       {
        "letter": "B",
        "text": "HC-SR04"
       },
       {
        "letter": "C",
        "text": "PIR motion sensor"
       },
       {
        "letter": "D",
        "text": "DHT22"
       }
      ],
      "correct": "D"
     },
     {
      "n": 3,
      "text": "After the receiver node successfully receives a LoRa packet, what does it do?",
      "options": [
       {
        "letter": "A",
        "text": "Sends an acknowledgement back and sets its LED pin HIGH"
       },
       {
        "letter": "B",
        "text": "Resets the transmitter's RST pin"
       },
       {
        "letter": "C",
        "text": "Re-sends the last sensor reading"
       },
       {
        "letter": "D",
        "text": "Stops the serial monitor"
       }
      ],
      "correct": "A"
     },
     {
      "n": 4,
      "text": "Which library is used to drive the LoRa radio module in the hands-on program?",
      "options": [
       {
        "letter": "A",
        "text": "Adafruit DHT library"
       },
       {
        "letter": "B",
        "text": "ESP8266WiFi library"
       },
       {
        "letter": "C",
        "text": "Radiohead library"
       },
       {
        "letter": "D",
        "text": "PubSubClient library"
       }
      ],
      "correct": "C"
     },
     {
      "n": 5,
      "text": "In the XBee transmitter program, where is a message delivered by default when no specific destination is set?",
      "options": [
       {
        "letter": "A",
        "text": "Only to the coordinator"
       },
       {
        "letter": "B",
        "text": "Broadcast to all nodes"
       },
       {
        "letter": "C",
        "text": "Back to the sender's own address"
       },
       {
        "letter": "D",
        "text": "To the first router discovered"
       }
      ],
      "correct": "B"
     },
     {
      "n": 6,
      "text": "How does DigiMesh relate to Zigbee?",
      "options": [
       {
        "letter": "A",
        "text": "It is a hardware vendor name"
       },
       {
        "letter": "B",
        "text": "It uses IEEE 802.11 radio"
       },
       {
        "letter": "C",
        "text": "It is unrelated to mesh networking"
       },
       {
        "letter": "D",
        "text": "It works similarly to Zigbee and adds extra features"
       }
      ],
      "correct": "D"
     },
     {
      "n": 7,
      "text": "Autonomous cars can generate data at roughly what rate?",
      "options": [
       {
        "letter": "A",
        "text": "About 100 MB per second"
       },
       {
        "letter": "B",
        "text": "About 100 KB per second"
       },
       {
        "letter": "C",
        "text": "About 10 GB per second"
       },
       {
        "letter": "D",
        "text": "About 1 MB per second"
       }
      ],
      "correct": "A"
     },
     {
      "n": 8,
      "text": "Which IIoT data characteristic refers to heterogeneous sensors such as pressure, vibration and sound that differ in metrics, precision and formats?",
      "options": [
       {
        "letter": "A",
        "text": "Temporal causality"
       },
       {
        "letter": "B",
        "text": "Relevance"
       },
       {
        "letter": "C",
        "text": "Polymorphism"
       },
       {
        "letter": "D",
        "text": "Real-time streaming"
       }
      ],
      "correct": "C"
     },
     {
      "n": 9,
      "text": "Why is IIoT data processed before it is stored?",
      "options": [
       {
        "letter": "A",
        "text": "To eliminate the need for sensors"
       },
       {
        "letter": "B",
        "text": "To make accurate decisions with minimal latency"
       },
       {
        "letter": "C",
        "text": "To remove all network cabling"
       },
       {
        "letter": "D",
        "text": "To avoid using any analytics"
       }
      ],
      "correct": "B"
     },
     {
      "n": 10,
      "text": "According to the content-aware processing study, when is distributed computing applicable to IIoT data?",
      "options": [
       {
        "letter": "A",
        "text": "When the sources are uncorrelated"
       },
       {
        "letter": "B",
        "text": "When there is only one sensor"
       },
       {
        "letter": "C",
        "text": "When the data is stored in a single database"
       },
       {
        "letter": "D",
        "text": "When the data sources are highly correlated"
       }
      ],
      "correct": "D"
     },
     {
      "n": 11,
      "text": "Which limitation of conventional complex event processing does the proposed uCEP engine target?",
      "options": [
       {
        "letter": "A",
        "text": "Manual threshold specification with no run-time update"
       },
       {
        "letter": "B",
        "text": "Lack of a message broker"
       },
       {
        "letter": "C",
        "text": "Inability to store logs"
       },
       {
        "letter": "D",
        "text": "High cost of cloud storage"
       }
      ],
      "correct": "A"
     },
     {
      "n": 12,
      "text": "In a real-time IoT pipeline that uses one message queue for all sensors, what happens as the number of sensors increases?",
      "options": [
       {
        "letter": "A",
        "text": "Queue latency decreases"
       },
       {
        "letter": "B",
        "text": "Queue size stays fixed"
       },
       {
        "letter": "C",
        "text": "Queue size grows"
       },
       {
        "letter": "D",
        "text": "The queue is removed automatically"
       }
      ],
      "correct": "C"
     },
     {
      "n": 13,
      "text": "In the self-organized multi-agent smart factory, what drives the self-organization?",
      "options": [
       {
        "letter": "A",
        "text": "Static schedules set by an operator"
       },
       {
        "letter": "B",
        "text": "Intelligent negotiations between agents"
       },
       {
        "letter": "C",
        "text": "Central PLC polling"
       },
       {
        "letter": "D",
        "text": "Fixed routing tables"
       }
      ],
      "correct": "B"
     },
     {
      "n": 14,
      "text": "What does the HealthIIoT framework embed in health data to strengthen security?",
      "options": [
       {
        "letter": "A",
        "text": "Public IP addresses"
       },
       {
        "letter": "B",
        "text": "Plain-text patient labels"
       },
       {
        "letter": "C",
        "text": "Unencrypted timestamps"
       },
       {
        "letter": "D",
        "text": "Watermarking and user identification"
       }
      ],
      "correct": "D"
     },
     {
      "n": 15,
      "text": "In the two-layer maritime big-data framework, where does on-board, real-time processing under limited resources take place?",
      "options": [
       {
        "letter": "A",
        "text": "Vessel BDA"
       },
       {
        "letter": "B",
        "text": "Land BDA"
       },
       {
        "letter": "C",
        "text": "Remote high-power cloud"
       },
       {
        "letter": "D",
        "text": "Shore data center"
       }
      ],
      "correct": "A"
     }
    ]
   },
   {
    "mock": 3,
    "questions": [
     {
      "n": 1,
      "text": "Which set of units makes up a Programmable Logic Controller (PLC)?",
      "options": [
       {
        "letter": "A",
        "text": "Processor unit and memory unit only"
       },
       {
        "letter": "B",
        "text": "Sensors, actuators and relays"
       },
       {
        "letter": "C",
        "text": "Processor unit, memory unit, power supply and communication modules"
       },
       {
        "letter": "D",
        "text": "Keyboard, mouse, monitor and printer"
       }
      ],
      "correct": "C"
     },
     {
      "n": 2,
      "text": "Why are Distributed Control Systems considered more reliable than a single centralized controller for large plants?",
      "options": [
       {
        "letter": "A",
        "text": "Control functions are spread across multiple distributed controllers"
       },
       {
        "letter": "B",
        "text": "All control is handled by one supervisor"
       },
       {
        "letter": "C",
        "text": "They avoid the use of field devices"
       },
       {
        "letter": "D",
        "text": "They operate without any communication network"
       }
      ],
      "correct": "A"
     },
     {
      "n": 3,
      "text": "Which kind of industrial system is SCADA typically used for?",
      "options": [
       {
        "letter": "A",
        "text": "Assembly-line robotics only"
       },
       {
        "letter": "B",
        "text": "Single-machine motor control"
       },
       {
        "letter": "C",
        "text": "Temperature control inside one reactor vessel"
       },
       {
        "letter": "D",
        "text": "Automatic traffic management, water distribution and electric power grids"
       }
      ],
      "correct": "D"
     },
     {
      "n": 4,
      "text": "In an industrial control system, which element is changed by the controller's decision in order to steer the process?",
      "options": [
       {
        "letter": "A",
        "text": "Set point"
       },
       {
        "letter": "B",
        "text": "Manipulating variable"
       },
       {
        "letter": "C",
        "text": "Process variable"
       },
       {
        "letter": "D",
        "text": "Sensor reading"
       }
      ],
      "correct": "B"
     },
     {
      "n": 5,
      "text": "Which design consideration of the SmartSantander smart-city platform concerns supporting many different types of devices?",
      "options": [
       {
        "letter": "A",
        "text": "Mobility"
       },
       {
        "letter": "B",
        "text": "Scale"
       },
       {
        "letter": "C",
        "text": "Heterogeneity"
       },
       {
        "letter": "D",
        "text": "User involvement"
       }
      ],
      "correct": "C"
     },
     {
      "n": 6,
      "text": "In SmartSantander's layered architecture, which subsystem handles authentication, authorization and accounting?",
      "options": [
       {
        "letter": "A",
        "text": "AAA subsystem"
       },
       {
        "letter": "B",
        "text": "Testbed management subsystem"
       },
       {
        "letter": "C",
        "text": "Experimental support subsystem"
       },
       {
        "letter": "D",
        "text": "Application support subsystem"
       }
      ],
      "correct": "A"
     },
     {
      "n": 7,
      "text": "In the REST-based smart warehousing framework, which module collects data from uniquely identifiable objects tagged with RFID and from sensors?",
      "options": [
       {
        "letter": "A",
        "text": "Administrative module"
       },
       {
        "letter": "B",
        "text": "Web server"
       },
       {
        "letter": "C",
        "text": "Smart gateway"
       },
       {
        "letter": "D",
        "text": "Data collection module"
       }
      ],
      "correct": "D"
     },
     {
      "n": 8,
      "text": "In the cloud-based industrial manufacturing service model, which user entity acts as the middle-man that provisions services?",
      "options": [
       {
        "letter": "A",
        "text": "Provider"
       },
       {
        "letter": "B",
        "text": "Operator"
       },
       {
        "letter": "C",
        "text": "Consumer"
       },
       {
        "letter": "D",
        "text": "Infrastructure vendor"
       }
      ],
      "correct": "B"
     },
     {
      "n": 9,
      "text": "In the industrial rechargeable sensor network, how are charging points coordinated?",
      "options": [
       {
        "letter": "A",
        "text": "All charging points share a single time slot"
       },
       {
        "letter": "B",
        "text": "Charging points are switched off during routing"
       },
       {
        "letter": "C",
        "text": "Different charging points are allocated different slots"
       },
       {
        "letter": "D",
        "text": "Charging is performed only by the sensor nodes"
       }
      ],
      "correct": "C"
     },
     {
      "n": 10,
      "text": "Which phase of big-data-driven smart manufacturing uses accumulated knowledge and intelligence to find new insight for future innovation?",
      "options": [
       {
        "letter": "A",
        "text": "Innovation in process and production"
       },
       {
        "letter": "B",
        "text": "Integration of data and contextual information"
       },
       {
        "letter": "C",
        "text": "Synthesis and analysis for decision making"
       },
       {
        "letter": "D",
        "text": "Real-time sensor sampling"
       }
      ],
      "correct": "A"
     },
     {
      "n": 11,
      "text": "In the iRobot-Factory architecture, which component senses a user's emotion and requests computing resources accordingly?",
      "options": [
       {
        "letter": "A",
        "text": "Cognitive engine"
       },
       {
        "letter": "B",
        "text": "Edge computing node"
       },
       {
        "letter": "C",
        "text": "Intelligent device unit"
       },
       {
        "letter": "D",
        "text": "Intelligent terminal"
       }
      ],
      "correct": "D"
     },
     {
      "n": 12,
      "text": "Which iRobot-Factory component provides low-latency response and decisions close to the production floor?",
      "options": [
       {
        "letter": "A",
        "text": "Cognitive engine"
       },
       {
        "letter": "B",
        "text": "Edge computing node"
       },
       {
        "letter": "C",
        "text": "Intelligent device unit"
       },
       {
        "letter": "D",
        "text": "Production line layer"
       }
      ],
      "correct": "B"
     },
     {
      "n": 13,
      "text": "FarmBeats is described as suitable for which kind of deployment?",
      "options": [
       {
        "letter": "A",
        "text": "Short-term single-field trials"
       },
       {
        "letter": "B",
        "text": "Indoor warehouse monitoring"
       },
       {
        "letter": "C",
        "text": "Large-scale long-term deployment"
       },
       {
        "letter": "D",
        "text": "One-time sensor calibration"
       }
      ],
      "correct": "C"
     },
     {
      "n": 14,
      "text": "In the SWAMP platform, what does the smart management layer sit between?",
      "options": [
       {
        "letter": "A",
        "text": "The water distribution network and the farm-based irrigation system"
       },
       {
        "letter": "B",
        "text": "The UAV fleet and the tractor"
       },
       {
        "letter": "C",
        "text": "The cloud and the sensors"
       },
       {
        "letter": "D",
        "text": "The IoT gateway and the RFID tags"
       }
      ],
      "correct": "A"
     },
     {
      "n": 15,
      "text": "In the AR drone-based precision agriculture system, what determines where the tractor-mounted sprayer applies fertilizer?",
      "options": [
       {
        "letter": "A",
        "text": "Manual driver judgement"
       },
       {
        "letter": "B",
        "text": "A fixed grid schedule"
       },
       {
        "letter": "C",
        "text": "The weather forecast"
       },
       {
        "letter": "D",
        "text": "Weed locations from the video processing module"
       }
      ],
      "correct": "D"
     }
    ]
   }
  ]
 },
 {
  "week": 8,
  "mocks": [
   {
    "mock": 1,
    "questions": [
     {
      "n": 1,
      "text": "Which IIoT analytics stage detects irregular asset behaviour quickly, on a timescale of milliseconds?",
      "options": [
       {
        "letter": "A",
        "text": "Diagnostic analytics"
       },
       {
        "letter": "B",
        "text": "Baseline analytics"
       },
       {
        "letter": "C",
        "text": "Prognostic analytics"
       },
       {
        "letter": "D",
        "text": "Descriptive reporting"
       }
      ],
      "correct": "B"
     },
     {
      "n": 2,
      "text": "Which analytics stage identifies the root cause of an anomaly, typically within minutes?",
      "options": [
       {
        "letter": "A",
        "text": "Baseline analytics"
       },
       {
        "letter": "B",
        "text": "Prognostic analytics"
       },
       {
        "letter": "C",
        "text": "Streaming ingestion"
       },
       {
        "letter": "D",
        "text": "Diagnostic analytics"
       }
      ],
      "correct": "D"
     },
     {
      "n": 3,
      "text": "Once a predictive model has been trained, what must happen before it is deployed to real streaming data?",
      "options": [
       {
        "letter": "A",
        "text": "It is tested and validated on previously unseen data"
       },
       {
        "letter": "B",
        "text": "It is retrained on the streaming data alone"
       },
       {
        "letter": "C",
        "text": "Its labels are deleted"
       },
       {
        "letter": "D",
        "text": "It is converted into a rule table"
       }
      ],
      "correct": "A"
     },
     {
      "n": 4,
      "text": "Which analytics mode is most often used for IoT processing because it acts on events as they occur?",
      "options": [
       {
        "letter": "A",
        "text": "Batch analytics"
       },
       {
        "letter": "B",
        "text": "Long-term archival analytics"
       },
       {
        "letter": "C",
        "text": "Streaming real-time analytics"
       },
       {
        "letter": "D",
        "text": "Manual reporting"
       }
      ],
      "correct": "C"
     },
     {
      "n": 5,
      "text": "Which pair of software tools is cited for batch processing of IIoT data?",
      "options": [
       {
        "letter": "A",
        "text": "Apache Storm and Esper"
       },
       {
        "letter": "B",
        "text": "Apache Hadoop and Apache Spark"
       },
       {
        "letter": "C",
        "text": "Jupyter and Julia"
       },
       {
        "letter": "D",
        "text": "MQTT and Kafka"
       }
      ],
      "correct": "B"
     },
     {
      "n": 6,
      "text": "Which task is best suited to batch analytics rather than streaming analytics?",
      "options": [
       {
        "letter": "A",
        "text": "Sending an alert when a temperature sensor crosses a threshold"
       },
       {
        "letter": "B",
        "text": "Shutting a valve immediately after a leak is detected"
       },
       {
        "letter": "C",
        "text": "Warning the driver about low tire pressure"
       },
       {
        "letter": "D",
        "text": "Computing the average room temperature over the last month"
       }
      ],
      "correct": "D"
     },
     {
      "n": 7,
      "text": "Which technique is named for anomaly detection in IIoT model building?",
      "options": [
       {
        "letter": "A",
        "text": "Gaussian Mixture Model"
       },
       {
        "letter": "B",
        "text": "Support Vector Machine"
       },
       {
        "letter": "C",
        "text": "Bayes regression"
       },
       {
        "letter": "D",
        "text": "Decision tree"
       }
      ],
      "correct": "A"
     },
     {
      "n": 8,
      "text": "Which IIoT value driver is about lowering operating expenses?",
      "options": [
       {
        "letter": "A",
        "text": "New revenue streams"
       },
       {
        "letter": "B",
        "text": "Upgrading existing products"
       },
       {
        "letter": "C",
        "text": "Reduce costs"
       },
       {
        "letter": "D",
        "text": "Changing the business model"
       }
      ],
      "correct": "C"
     },
     {
      "n": 9,
      "text": "Which of the following is NOT listed among the big data characteristics for IIoT analytics?",
      "options": [
       {
        "letter": "A",
        "text": "Volume"
       },
       {
        "letter": "B",
        "text": "Vulnerability"
       },
       {
        "letter": "C",
        "text": "Velocity"
       },
       {
        "letter": "D",
        "text": "Variety"
       }
      ],
      "correct": "B"
     },
     {
      "n": 10,
      "text": "In IIoT machine learning, what does feature extraction do?",
      "options": [
       {
        "letter": "A",
        "text": "Stores raw sensor data in the cloud"
       },
       {
        "letter": "B",
        "text": "Labels every training example by hand"
       },
       {
        "letter": "C",
        "text": "Deploys the model to the edge"
       },
       {
        "letter": "D",
        "text": "Converts raw data into information that relates to the physical state of an asset"
       }
      ],
      "correct": "D"
     },
     {
      "n": 11,
      "text": "When is a supervised learning algorithm most useful in IIoT?",
      "options": [
       {
        "letter": "A",
        "text": "When training data can be acquired for each state or class to be modelled"
       },
       {
        "letter": "B",
        "text": "When no labelled data exists and structure must be discovered"
       },
       {
        "letter": "C",
        "text": "When the system must learn only from rewards"
       },
       {
        "letter": "D",
        "text": "When all data is stored in a relational table"
       }
      ],
      "correct": "A"
     },
     {
      "n": 12,
      "text": "In a decision tree classifier, what does a leaf node represent?",
      "options": [
       {
        "letter": "A",
        "text": "A test on some attribute value"
       },
       {
        "letter": "B",
        "text": "A reward given to an agent"
       },
       {
        "letter": "C",
        "text": "The classification of an example"
       },
       {
        "letter": "D",
        "text": "A hidden-layer weight"
       }
      ],
      "correct": "C"
     },
     {
      "n": 13,
      "text": "Which supervised technique learns a linear function that predicts a dependent value Y from an independent variable X?",
      "options": [
       {
        "letter": "A",
        "text": "Decision tree"
       },
       {
        "letter": "B",
        "text": "Linear regression"
       },
       {
        "letter": "C",
        "text": "K-Means"
       },
       {
        "letter": "D",
        "text": "Q-learning"
       }
      ],
      "correct": "B"
     },
     {
      "n": 14,
      "text": "Which technique is listed for classification in IIoT model building?",
      "options": [
       {
        "letter": "A",
        "text": "Gaussian Mixture Model"
       },
       {
        "letter": "B",
        "text": "Bayes regression"
       },
       {
        "letter": "C",
        "text": "Linear regression"
       },
       {
        "letter": "D",
        "text": "Support Vector Machine"
       }
      ],
      "correct": "D"
     },
     {
      "n": 15,
      "text": "Which field is a subset of machine learning that learns the features of an object on its own?",
      "options": [
       {
        "letter": "A",
        "text": "Deep learning"
       },
       {
        "letter": "B",
        "text": "Artificial intelligence"
       },
       {
        "letter": "C",
        "text": "Data science"
       },
       {
        "letter": "D",
        "text": "Cloud computing"
       }
      ],
      "correct": "A"
     }
    ]
   },
   {
    "mock": 2,
    "questions": [
     {
      "n": 1,
      "text": "In deep learning, what does the word \"deep\" refer to?",
      "options": [
       {
        "letter": "A",
        "text": "The depth of the training dataset"
       },
       {
        "letter": "B",
        "text": "The length of the cables to the sensors"
       },
       {
        "letter": "C",
        "text": "The number of hidden layers in the network"
       },
       {
        "letter": "D",
        "text": "The number of GPUs in the server"
       }
      ],
      "correct": "C"
     },
     {
      "n": 2,
      "text": "As the volume of training data grows, how does deep learning typically compare with traditional machine learning?",
      "options": [
       {
        "letter": "A",
        "text": "Deep learning performance often keeps improving while shallow learning converges"
       },
       {
        "letter": "B",
        "text": "Both methods converge at the same level"
       },
       {
        "letter": "C",
        "text": "Deep learning degrades as more data is added"
       },
       {
        "letter": "D",
        "text": "Traditional machine learning improves without limit"
       }
      ],
      "correct": "A"
     },
     {
      "n": 3,
      "text": "Which two needs are the main reasons deep learning has become useful recently?",
      "options": [
       {
        "letter": "A",
        "text": "Hand-crafted features and low-end hardware"
       },
       {
        "letter": "B",
        "text": "Small datasets and manually written rules"
       },
       {
        "letter": "C",
        "text": "Unlabelled text and slow CPUs"
       },
       {
        "letter": "D",
        "text": "Large amounts of labelled data and high-end computational power"
       }
      ],
      "correct": "D"
     },
     {
      "n": 4,
      "text": "Which value does deep learning provide when cameras and sensors are used for recognition?",
      "options": [
       {
        "letter": "A",
        "text": "Autonomous decision control"
       },
       {
        "letter": "B",
        "text": "Identification or recognition"
       },
       {
        "letter": "C",
        "text": "Battery recycling"
       },
       {
        "letter": "D",
        "text": "Payroll processing"
       }
      ],
      "correct": "B"
     },
     {
      "n": 5,
      "text": "Which application is listed for deep learning in industrial settings?",
      "options": [
       {
        "letter": "A",
        "text": "Replacing all sensors with paper logs"
       },
       {
        "letter": "B",
        "text": "Eliminating network monitoring"
       },
       {
        "letter": "C",
        "text": "Optimizing manufacturing lines in factories"
       },
       {
        "letter": "D",
        "text": "Manual shift scheduling"
       }
      ],
      "correct": "C"
     },
     {
      "n": 6,
      "text": "In the TOSHIBA deep learning examples, what is the drone navigation control system used to find?",
      "options": [
       {
        "letter": "A",
        "text": "Damage in power transmission lines"
       },
       {
        "letter": "B",
        "text": "Parcels for customers"
       },
       {
        "letter": "C",
        "text": "Mapping retail foot traffic"
       },
       {
        "letter": "D",
        "text": "Soil moisture levels"
       }
      ],
      "correct": "A"
     },
     {
      "n": 7,
      "text": "Which company's deep learning processor is named Nervana?",
      "options": [
       {
        "letter": "A",
        "text": "H2O"
       },
       {
        "letter": "B",
        "text": "Zebra Medical Vision"
       },
       {
        "letter": "C",
        "text": "TOSHIBA"
       },
       {
        "letter": "D",
        "text": "Intel"
       }
      ],
      "correct": "D"
     },
     {
      "n": 8,
      "text": "Pfizer is cited as using IBM Watson for which purpose?",
      "options": [
       {
        "letter": "A",
        "text": "Ride pricing"
       },
       {
        "letter": "B",
        "text": "Drug discovery"
       },
       {
        "letter": "C",
        "text": "Fraud detection"
       },
       {
        "letter": "D",
        "text": "Product recommendation"
       }
      ],
      "correct": "B"
     },
     {
      "n": 9,
      "text": "Facebook is cited as using an artificial neural network for which task?",
      "options": [
       {
        "letter": "A",
        "text": "Ranking job postings"
       },
       {
        "letter": "B",
        "text": "Detecting card fraud"
       },
       {
        "letter": "C",
        "text": "Tagging faces"
       },
       {
        "letter": "D",
        "text": "Pricing hotel rooms"
       }
      ],
      "correct": "C"
     },
     {
      "n": 10,
      "text": "In which cloud service model does the provider manage everything, while clients subscribe to and use a finished application?",
      "options": [
       {
        "letter": "A",
        "text": "Software-as-a-Service"
       },
       {
        "letter": "B",
        "text": "Platform-as-a-Service"
       },
       {
        "letter": "C",
        "text": "Infrastructure-as-a-Service"
       },
       {
        "letter": "D",
        "text": "Data-as-a-Service"
       }
      ],
      "correct": "A"
     },
     {
      "n": 11,
      "text": "Which cloud service model lets an industry build its own applications while keeping control of the application and its configuration environment?",
      "options": [
       {
        "letter": "A",
        "text": "Software-as-a-Service"
       },
       {
        "letter": "B",
        "text": "Infrastructure-as-a-Service"
       },
       {
        "letter": "C",
        "text": "Public cloud"
       },
       {
        "letter": "D",
        "text": "Platform-as-a-Service"
       }
      ],
      "correct": "D"
     },
     {
      "n": 12,
      "text": "Which model gives clients access to servers, network and storage so they can run a virtual data center, and is used to deploy PaaS and SaaS?",
      "options": [
       {
        "letter": "A",
        "text": "Software-as-a-Service"
       },
       {
        "letter": "B",
        "text": "Infrastructure-as-a-Service"
       },
       {
        "letter": "C",
        "text": "Platform-as-a-Service"
       },
       {
        "letter": "D",
        "text": "Community cloud"
       }
      ],
      "correct": "B"
     },
     {
      "n": 13,
      "text": "Which cloud deployment model is set up for a single organization, shares its resources only with that client, and is described as highly secure?",
      "options": [
       {
        "letter": "A",
        "text": "Public cloud"
       },
       {
        "letter": "B",
        "text": "Community cloud"
       },
       {
        "letter": "C",
        "text": "Private cloud"
       },
       {
        "letter": "D",
        "text": "Edge cloud"
       }
      ],
      "correct": "C"
     },
     {
      "n": 14,
      "text": "Which requirement is characteristic of an industrial IoT cloud platform rather than a consumer one?",
      "options": [
       {
        "letter": "A",
        "text": "Robust security and quality of service"
       },
       {
        "letter": "B",
        "text": "Modest security"
       },
       {
        "letter": "C",
        "text": "Cost-sensitive design"
       },
       {
        "letter": "D",
        "text": "Very specific single-user applications"
       }
      ],
      "correct": "A"
     },
     {
      "n": 15,
      "text": "In the cloud-based IIoT architecture, which element sits between the sensors and devices and the cloud?",
      "options": [
       {
        "letter": "A",
        "text": "Industrial applications"
       },
       {
        "letter": "B",
        "text": "Data visualization dashboards"
       },
       {
        "letter": "C",
        "text": "Hardware firewalls"
       },
       {
        "letter": "D",
        "text": "Gateway devices"
       }
      ],
      "correct": "D"
     }
    ]
   },
   {
    "mock": 3,
    "questions": [
     {
      "n": 1,
      "text": "Which limitation of a purely cloud-based IIoT design directly hurts time-sensitive control?",
      "options": [
       {
        "letter": "A",
        "text": "The need for scalable security"
       },
       {
        "letter": "B",
        "text": "Higher latency"
       },
       {
        "letter": "C",
        "text": "The bandwidth requirement for huge data volumes"
       },
       {
        "letter": "D",
        "text": "Reliability of large networks"
       }
      ],
      "correct": "B"
     },
     {
      "n": 2,
      "text": "What does a decentralized approach achieve relative to a purely centralized cloud design?",
      "options": [
       {
        "letter": "A",
        "text": "It increases the load at the cloud"
       },
       {
        "letter": "B",
        "text": "It removes the feasibility of real-time operations"
       },
       {
        "letter": "C",
        "text": "It eliminates mobility support"
       },
       {
        "letter": "D",
        "text": "It decreases the load at the cloud"
       }
      ],
      "correct": "D"
     },
     {
      "n": 3,
      "text": "What solution does the lecture propose for time-sensitive IIoT data that needs an immediate response?",
      "options": [
       {
        "letter": "A",
        "text": "A decentralized or distributed approach combined with the cloud"
       },
       {
        "letter": "B",
        "text": "A single central cloud with overnight batch processing"
       },
       {
        "letter": "C",
        "text": "Manual inspection schedules"
       },
       {
        "letter": "D",
        "text": "Removing all edge devices"
       }
      ],
      "correct": "A"
     },
     {
      "n": 4,
      "text": "Which services are listed as typical functions of intelligent fog nodes?",
      "options": [
       {
        "letter": "A",
        "text": "Power generation and storage"
       },
       {
        "letter": "B",
        "text": "Flight planning and spraying"
       },
       {
        "letter": "C",
        "text": "Filtering, aggregation and translation"
       },
       {
        "letter": "D",
        "text": "Billing and invoicing"
       }
      ],
      "correct": "C"
     },
     {
      "n": 5,
      "text": "How does the lecture describe the structure of fog computing?",
      "options": [
       {
        "letter": "A",
        "text": "Fully centralized at every level"
       },
       {
        "letter": "B",
        "text": "Distributed at one level and centralized at the other"
       },
       {
        "letter": "C",
        "text": "Fully distributed at every level with no cloud"
       },
       {
        "letter": "D",
        "text": "Peer-to-peer with no hierarchy"
       }
      ],
      "correct": "B"
     },
     {
      "n": 6,
      "text": "Which IIoT cloud platform is produced by a software development firm rather than an industrial company?",
      "options": [
       {
        "letter": "A",
        "text": "GE Predix"
       },
       {
        "letter": "B",
        "text": "Honeywell"
       },
       {
        "letter": "C",
        "text": "Siemens MindSphere"
       },
       {
        "letter": "D",
        "text": "Uptake"
       }
      ],
      "correct": "D"
     },
     {
      "n": 7,
      "text": "How is Siemens MindSphere described?",
      "options": [
       {
        "letter": "A",
        "text": "A cloud-based, open IoT operating system platform"
       },
       {
        "letter": "B",
        "text": "A closed on-premise PLC"
       },
       {
        "letter": "C",
        "text": "A consumer video streaming app"
       },
       {
        "letter": "D",
        "text": "A hardware sensor line"
       }
      ],
      "correct": "A"
     },
     {
      "n": 8,
      "text": "For which industry is Honeywell's cloud software service described as an efficient solution for performance optimization?",
      "options": [
       {
        "letter": "A",
        "text": "Retail banking"
       },
       {
        "letter": "B",
        "text": "Education"
       },
       {
        "letter": "C",
        "text": "Oil and gas"
       },
       {
        "letter": "D",
        "text": "Hospitality"
       }
      ],
      "correct": "C"
     },
     {
      "n": 9,
      "text": "Which feature should a cloud platform provider offer to keep deployed IIoT devices secure over time?",
      "options": [
       {
        "letter": "A",
        "text": "Unmanaged direct access for all users"
       },
       {
        "letter": "B",
        "text": "Updates, security patches and maintenance"
       },
       {
        "letter": "C",
        "text": "Removal of device authentication"
       },
       {
        "letter": "D",
        "text": "Manual reconfiguration of each device"
       }
      ],
      "correct": "B"
     },
     {
      "n": 10,
      "text": "Why is IIoT device management not a \"deploy and forget\" task?",
      "options": [
       {
        "letter": "A",
        "text": "Devices never fail in the field"
       },
       {
        "letter": "B",
        "text": "Devices cannot be connected to a cloud"
       },
       {
        "letter": "C",
        "text": "Devices never change their configuration"
       },
       {
        "letter": "D",
        "text": "Standards and services change, and faulty devices need replacing"
       }
      ],
      "correct": "D"
     },
     {
      "n": 11,
      "text": "Which of these is listed as a cloud platform device management facility?",
      "options": [
       {
        "letter": "A",
        "text": "Bosch IoT Remote Manager"
       },
       {
        "letter": "B",
        "text": "Arduino IDE"
       },
       {
        "letter": "C",
        "text": "XCTU"
       },
       {
        "letter": "D",
        "text": "Apache Hadoop"
       }
      ],
      "correct": "A"
     },
     {
      "n": 12,
      "text": "Why do real-time IIoT applications with safety measures need a Service Level Agreement?",
      "options": [
       {
        "letter": "A",
        "text": "So the provider can avoid all deliverables"
       },
       {
        "letter": "B",
        "text": "So sensors need no calibration"
       },
       {
        "letter": "C",
        "text": "So the client can check what, and how well, the provider delivers"
       },
       {
        "letter": "D",
        "text": "So fog nodes become unnecessary"
       }
      ],
      "correct": "C"
     },
     {
      "n": 13,
      "text": "What is the main reason SLA support for IIoT is described as being at an infant stage?",
      "options": [
       {
        "letter": "A",
        "text": "Excessive standardization of SLA management"
       },
       {
        "letter": "B",
        "text": "Lack of SLA enforcement policies for both provider and consumer"
       },
       {
        "letter": "C",
        "text": "Too many fog nodes in deployments"
       },
       {
        "letter": "D",
        "text": "An abundance of enforcement tools"
       }
      ],
      "correct": "B"
     },
     {
      "n": 14,
      "text": "When choosing an IIoT cloud vendor, which factor concerns how well a platform works with other systems?",
      "options": [
       {
        "letter": "A",
        "text": "The vendor's office location"
       },
       {
        "letter": "B",
        "text": "Brochure design"
       },
       {
        "letter": "C",
        "text": "Marketing budget"
       },
       {
        "letter": "D",
        "text": "Interoperability"
       }
      ],
      "correct": "D"
     },
     {
      "n": 15,
      "text": "Which vendor-selection point concerns processing data on or near the devices?",
      "options": [
       {
        "letter": "A",
        "text": "Edge intelligence feature"
       },
       {
        "letter": "B",
        "text": "Customer testimonials"
       },
       {
        "letter": "C",
        "text": "Vendor headcount"
       },
       {
        "letter": "D",
        "text": "Printing quality"
       }
      ],
      "correct": "A"
     }
    ]
   }
  ]
 },
 {
  "week": 9,
  "mocks": [
   {
    "mock": 1,
    "questions": [
     {
      "n": 1,
      "text": "What major challenge must fog computing handle in IIoT deployments?",
      "options": [
       {
        "letter": "A",
        "text": "Excessive storage capacity"
       },
       {
        "letter": "B",
        "text": "A shortage of network cabling"
       },
       {
        "letter": "C",
        "text": "The diversity of protocols, data syntax and data sources"
       },
       {
        "letter": "D",
        "text": "A lack of cloud data centers"
       }
      ],
      "correct": "C"
     },
     {
      "n": 2,
      "text": "Which of the following is listed as an advantage of fog-enabled IIoT?",
      "options": [
       {
        "letter": "A",
        "text": "Reduced overall cost"
       },
       {
        "letter": "B",
        "text": "Increased manual inspection"
       },
       {
        "letter": "C",
        "text": "Higher round-trip delay"
       },
       {
        "letter": "D",
        "text": "Fewer dashboards"
       }
      ],
      "correct": "A"
     },
     {
      "n": 3,
      "text": "In the mining use case, what does processing at fog nodes improve?",
      "options": [
       {
        "letter": "A",
        "text": "Fuel consumption of trucks"
       },
       {
        "letter": "B",
        "text": "Ore export volume"
       },
       {
        "letter": "C",
        "text": "Mine tourism revenue"
       },
       {
        "letter": "D",
        "text": "Accuracy of analysis"
       }
      ],
      "correct": "D"
     },
     {
      "n": 4,
      "text": "Which infrastructure enables bi-directional communication between consumers and suppliers in the smart grid use case?",
      "options": [
       {
        "letter": "A",
        "text": "Bluetooth beacons"
       },
       {
        "letter": "B",
        "text": "Advanced metering infrastructure"
       },
       {
        "letter": "C",
        "text": "Satellite telephony"
       },
       {
        "letter": "D",
        "text": "Paper billing"
       }
      ],
      "correct": "B"
     },
     {
      "n": 5,
      "text": "Which of these is a transportation use case for fog computing?",
      "options": [
       {
        "letter": "A",
        "text": "Offshore drilling control"
       },
       {
        "letter": "B",
        "text": "Mineral assaying"
       },
       {
        "letter": "C",
        "text": "Smart traffic light system"
       },
       {
        "letter": "D",
        "text": "Crop irrigation"
       }
      ],
      "correct": "C"
     },
     {
      "n": 6,
      "text": "In the oil and gas use case, what does fog computing support for event monitoring?",
      "options": [
       {
        "letter": "A",
        "text": "Detection of unusual events"
       },
       {
        "letter": "B",
        "text": "Replacing all valves"
       },
       {
        "letter": "C",
        "text": "Eliminating alarms"
       },
       {
        "letter": "D",
        "text": "Manual sampling only"
       }
      ],
      "correct": "A"
     },
     {
      "n": 7,
      "text": "Which fog platform provider describes itself as an edge network solution for quicker processing, analysing and responding?",
      "options": [
       {
        "letter": "A",
        "text": "Sonm"
       },
       {
        "letter": "B",
        "text": "Crosser"
       },
       {
        "letter": "C",
        "text": "Nebbiolo Technologies"
       },
       {
        "letter": "D",
        "text": "FogHorn"
       }
      ],
      "correct": "D"
     },
     {
      "n": 8,
      "text": "Which product names are associated with Nebbiolo Technologies?",
      "options": [
       {
        "letter": "A",
        "text": "Predix and MindSphere"
       },
       {
        "letter": "B",
        "text": "fogOS, fogNode and fogSM"
       },
       {
        "letter": "C",
        "text": "Esper and Storm"
       },
       {
        "letter": "D",
        "text": "Meshify and Tracker"
       }
      ],
      "correct": "B"
     },
     {
      "n": 9,
      "text": "Which application area is listed among the current solutions of Sonm?",
      "options": [
       {
        "letter": "A",
        "text": "Smart meter reading"
       },
       {
        "letter": "B",
        "text": "Warehouse RFID tracking"
       },
       {
        "letter": "C",
        "text": "Video rendering"
       },
       {
        "letter": "D",
        "text": "Sensor calibration"
       }
      ],
      "correct": "C"
     },
     {
      "n": 10,
      "text": "What does Hadoop provide as a software framework?",
      "options": [
       {
        "letter": "A",
        "text": "Distributed processing of large datasets across clusters of computers"
       },
       {
        "letter": "B",
        "text": "Single-machine spreadsheet editing"
       },
       {
        "letter": "C",
        "text": "Hardware routing between networks"
       },
       {
        "letter": "D",
        "text": "Real-time video encoding"
       }
      ],
      "correct": "A"
     },
     {
      "n": 11,
      "text": "Which Hadoop building block contains the utilities that support the other Hadoop components?",
      "options": [
       {
        "letter": "A",
        "text": "MapReduce"
       },
       {
        "letter": "B",
        "text": "HDFS"
       },
       {
        "letter": "C",
        "text": "YARN"
       },
       {
        "letter": "D",
        "text": "Hadoop Common"
       }
      ],
      "correct": "D"
     },
     {
      "n": 12,
      "text": "In HDFS, which component stores the actual data blocks?",
      "options": [
       {
        "letter": "A",
        "text": "NameNode"
       },
       {
        "letter": "B",
        "text": "DataNode"
       },
       {
        "letter": "C",
        "text": "JobTracker"
       },
       {
        "letter": "D",
        "text": "TaskTracker"
       }
      ],
      "correct": "B"
     },
     {
      "n": 13,
      "text": "Before updating the NameNode with block information, what does a DataNode verify?",
      "options": [
       {
        "letter": "A",
        "text": "Job priorities"
       },
       {
        "letter": "B",
        "text": "Mapper counts"
       },
       {
        "letter": "C",
        "text": "Checksums"
       },
       {
        "letter": "D",
        "text": "User passwords"
       }
      ],
      "correct": "C"
     },
     {
      "n": 14,
      "text": "Which Hadoop component decides how many mappers a job uses and where each mapper runs?",
      "options": [
       {
        "letter": "A",
        "text": "JobTracker"
       },
       {
        "letter": "B",
        "text": "TaskTracker"
       },
       {
        "letter": "C",
        "text": "DataNode"
       },
       {
        "letter": "D",
        "text": "Hadoop Common"
       }
      ],
      "correct": "A"
     },
     {
      "n": 15,
      "text": "Which pre-processing step gives users a uniform view by combining data from various sources?",
      "options": [
       {
        "letter": "A",
        "text": "Cleaning"
       },
       {
        "letter": "B",
        "text": "Integration"
       },
       {
        "letter": "C",
        "text": "Visualization"
       },
       {
        "letter": "D",
        "text": "Labelling"
       }
      ],
      "correct": "B"
     }
    ]
   },
   {
    "mock": 2,
    "questions": [
     {
      "n": 1,
      "text": "Which two activities is R commonly used for?",
      "options": [
       {
        "letter": "A",
        "text": "Hardware routing and firewalls"
       },
       {
        "letter": "B",
        "text": "Circuit board design"
       },
       {
        "letter": "C",
        "text": "Video compression"
       },
       {
        "letter": "D",
        "text": "Data analysis and visualization"
       }
      ],
      "correct": "D"
     },
     {
      "n": 2,
      "text": "What kind of word in R has a special meaning and cannot be used as a variable or function name?",
      "options": [
       {
        "letter": "A",
        "text": "Comment"
       },
       {
        "letter": "B",
        "text": "Reserved word"
       },
       {
        "letter": "C",
        "text": "Factor"
       },
       {
        "letter": "D",
        "text": "Data frame"
       }
      ],
      "correct": "B"
     },
     {
      "n": 3,
      "text": "In R, how is the data type of a variable determined?",
      "options": [
       {
        "letter": "A",
        "text": "By the R object assigned to it"
       },
       {
        "letter": "B",
        "text": "By a type keyword declared before the variable"
       },
       {
        "letter": "C",
        "text": "By the operator applied to it"
       },
       {
        "letter": "D",
        "text": "By the file the variable is loaded from"
       }
      ],
      "correct": "A"
     },
     {
      "n": 4,
      "text": "Which R operator returns the remainder of a division?",
      "options": [
       {
        "letter": "A",
        "text": "^"
       },
       {
        "letter": "B",
        "text": "%/%"
       },
       {
        "letter": "C",
        "text": "%%"
       },
       {
        "letter": "D",
        "text": "%in%"
       }
      ],
      "correct": "C"
     },
     {
      "n": 5,
      "text": "Which R operator, as in TRUE->Y, assigns the left operand to the variable on its right?",
      "options": [
       {
        "letter": "A",
        "text": "="
       },
       {
        "letter": "B",
        "text": "<-"
       },
       {
        "letter": "C",
        "text": "<<-"
       },
       {
        "letter": "D",
        "text": "->"
       }
      ],
      "correct": "D"
     },
     {
      "n": 6,
      "text": "Which R operator tests whether two values are equal?",
      "options": [
       {
        "letter": "A",
        "text": "="
       },
       {
        "letter": "B",
        "text": "=="
       },
       {
        "letter": "C",
        "text": "<-"
       },
       {
        "letter": "D",
        "text": "!="
       }
      ],
      "correct": "B"
     },
     {
      "n": 7,
      "text": "Which R operator is used for logical NOT?",
      "options": [
       {
        "letter": "A",
        "text": "!"
       },
       {
        "letter": "B",
        "text": "&"
       },
       {
        "letter": "C",
        "text": "|"
       },
       {
        "letter": "D",
        "text": "%in%"
       }
      ],
      "correct": "A"
     },
     {
      "n": 8,
      "text": "Which of the following is NOT a basic R data type listed in the lecture?",
      "options": [
       {
        "letter": "A",
        "text": "Logical"
       },
       {
        "letter": "B",
        "text": "Complex"
       },
       {
        "letter": "C",
        "text": "Decimal"
       },
       {
        "letter": "D",
        "text": "Raw"
       }
      ],
      "correct": "C"
     },
     {
      "n": 9,
      "text": "Which R object can hold elements of different types, such as a numeric vector, a plain number and a function?",
      "options": [
       {
        "letter": "A",
        "text": "Matrix"
       },
       {
        "letter": "B",
        "text": "Array"
       },
       {
        "letter": "C",
        "text": "Factor"
       },
       {
        "letter": "D",
        "text": "List"
       }
      ],
      "correct": "D"
     },
     {
      "n": 10,
      "text": "Which R package provides support vector machines and naive Bayes classifiers?",
      "options": [
       {
        "letter": "A",
        "text": "rpart"
       },
       {
        "letter": "B",
        "text": "e1071"
       },
       {
        "letter": "C",
        "text": "igraph"
       },
       {
        "letter": "D",
        "text": "nnet"
       }
      ],
      "correct": "B"
     },
     {
      "n": 11,
      "text": "Julia is described as merging the benefits of which two languages?",
      "options": [
       {
        "letter": "A",
        "text": "Python and C"
       },
       {
        "letter": "B",
        "text": "Java and Fortran"
       },
       {
        "letter": "C",
        "text": "R and MATLAB"
       },
       {
        "letter": "D",
        "text": "Ruby and Go"
       }
      ],
      "correct": "A"
     },
     {
      "n": 12,
      "text": "Which Julia syntax inserts the value of a variable into a string?",
      "options": [
       {
        "letter": "A",
        "text": "Curly braces only"
       },
       {
        "letter": "B",
        "text": "An @ prefix"
       },
       {
        "letter": "C",
        "text": "A $ sign"
       },
       {
        "letter": "D",
        "text": "A # comment"
       }
      ],
      "correct": "C"
     },
     {
      "n": 13,
      "text": "Where does the lecture say the Julia tutorial code is run?",
      "options": [
       {
        "letter": "A",
        "text": "A local JupyterLab installation only"
       },
       {
        "letter": "B",
        "text": "Google Colab"
       },
       {
        "letter": "C",
        "text": "Kaggle kernels"
       },
       {
        "letter": "D",
        "text": "JuliaBox.com"
       }
      ],
      "correct": "D"
     },
     {
      "n": 14,
      "text": "Which property of the Hadoop Distributed File System keeps data available when a node fails?",
      "options": [
       {
        "letter": "A",
        "text": "Files are stored only once"
       },
       {
        "letter": "B",
        "text": "Each block is replicated"
       },
       {
        "letter": "C",
        "text": "Blocks are kept only on the NameNode"
       },
       {
        "letter": "D",
        "text": "Data is never split into blocks"
       }
      ],
      "correct": "B"
     },
     {
      "n": 15,
      "text": "Which three main types of NoSQL databases are listed?",
      "options": [
       {
        "letter": "A",
        "text": "Key-value, column-oriented and document-oriented"
       },
       {
        "letter": "B",
        "text": "Relational, graph and object"
       },
       {
        "letter": "C",
        "text": "Hierarchical, network and flat"
       },
       {
        "letter": "D",
        "text": "Stream, batch and hybrid"
       }
      ],
      "correct": "A"
     }
    ]
   },
   {
    "mock": 3,
    "questions": [
     {
      "n": 1,
      "text": "Which data center network property is described as \"any service on any server at any time\"?",
      "options": [
       {
        "letter": "A",
        "text": "Agility"
       },
       {
        "letter": "B",
        "text": "Stability"
       },
       {
        "letter": "C",
        "text": "Locality"
       },
       {
        "letter": "D",
        "text": "Elasticity"
       }
      ],
      "correct": "A"
     },
     {
      "n": 2,
      "text": "Which data center network requirement lets a virtual machine move to another host without changing its IP address?",
      "options": [
       {
        "letter": "A",
        "text": "Static resource assignment"
       },
       {
        "letter": "B",
        "text": "Permanent server pinning"
       },
       {
        "letter": "C",
        "text": "VM migration without changing the IP address"
       },
       {
        "letter": "D",
        "text": "Manual switch configuration"
       }
      ],
      "correct": "C"
     },
     {
      "n": 3,
      "text": "Which two data center network requirements concern handling faults?",
      "options": [
       {
        "letter": "A",
        "text": "Static assignment and fragmentation"
       },
       {
        "letter": "B",
        "text": "Fast failure detection and efficient repair"
       },
       {
        "letter": "C",
        "text": "IPv4 and IPv6"
       },
       {
        "letter": "D",
        "text": "Routers and modems"
       }
      ],
      "correct": "B"
     },
     {
      "n": 4,
      "text": "Which data center application type includes MapReduce for web indexing?",
      "options": [
       {
        "letter": "A",
        "text": "Outward-facing applications"
       },
       {
        "letter": "B",
        "text": "Physical security applications"
       },
       {
        "letter": "C",
        "text": "Billing applications"
       },
       {
        "letter": "D",
        "text": "Internal computational applications"
       }
      ],
      "correct": "D"
     },
     {
      "n": 5,
      "text": "Which three tiers make up a three-tier data center network?",
      "options": [
       {
        "letter": "A",
        "text": "Edge, aggregate and core"
       },
       {
        "letter": "B",
        "text": "Access, aggregate and cloud"
       },
       {
        "letter": "C",
        "text": "Ingress, egress and transit"
       },
       {
        "letter": "D",
        "text": "Front, middle and back"
       }
      ],
      "correct": "A"
     },
     {
      "n": 6,
      "text": "In a k-ary fat-tree data center network, how many core switches are there?",
      "options": [
       {
        "letter": "A",
        "text": "k"
       },
       {
        "letter": "B",
        "text": "k squared"
       },
       {
        "letter": "C",
        "text": "(k/2) squared"
       },
       {
        "letter": "D",
        "text": "2k"
       }
      ],
      "correct": "C"
     },
     {
      "n": 7,
      "text": "Which data center topology has a recursively defined structure and no single point of failure?",
      "options": [
       {
        "letter": "A",
        "text": "Three-tier DCN"
       },
       {
        "letter": "B",
        "text": "DCell"
       },
       {
        "letter": "C",
        "text": "Spanning tree"
       },
       {
        "letter": "D",
        "text": "Fat tree"
       }
      ],
      "correct": "B"
     },
     {
      "n": 8,
      "text": "Which topology is server-centric, placing intelligence on modular data center servers rather than on switches?",
      "options": [
       {
        "letter": "A",
        "text": "Fat tree"
       },
       {
        "letter": "B",
        "text": "Three-tier DCN"
       },
       {
        "letter": "C",
        "text": "Software-defined WAN"
       },
       {
        "letter": "D",
        "text": "BCube"
       }
      ],
      "correct": "D"
     },
     {
      "n": 9,
      "text": "Which of the following is NOT one of the three virtualization components of a software-defined data center?",
      "options": [
       {
        "letter": "A",
        "text": "Battery virtualization"
       },
       {
        "letter": "B",
        "text": "Network virtualization"
       },
       {
        "letter": "C",
        "text": "Storage virtualization"
       },
       {
        "letter": "D",
        "text": "Server virtualization"
       }
      ],
      "correct": "A"
     },
     {
      "n": 10,
      "text": "Which software-defined data center advantage separates the control panel from the data panel?",
      "options": [
       {
        "letter": "A",
        "text": "Permanent coupling of software with hardware"
       },
       {
        "letter": "B",
        "text": "Static workload pinning"
       },
       {
        "letter": "C",
        "text": "Separation of control and data panel"
       },
       {
        "letter": "D",
        "text": "Elimination of virtualization"
       }
      ],
      "correct": "C"
     },
     {
      "n": 11,
      "text": "In SDN, which elements are decoupled from the traditional forwarding devices?",
      "options": [
       {
        "letter": "A",
        "text": "Power supplies and fans"
       },
       {
        "letter": "B",
        "text": "Control and data planes"
       },
       {
        "letter": "C",
        "text": "Physical cabling"
       },
       {
        "letter": "D",
        "text": "IP addressing"
       }
      ],
      "correct": "B"
     },
     {
      "n": 12,
      "text": "In an SDN forwarding device, which memory is used to place flow rules?",
      "options": [
       {
        "letter": "A",
        "text": "RAM"
       },
       {
        "letter": "B",
        "text": "Flash storage"
       },
       {
        "letter": "C",
        "text": "EEPROM"
       },
       {
        "letter": "D",
        "text": "TCAM"
       }
      ],
      "correct": "D"
     },
     {
      "n": 13,
      "text": "Which protocol combination is currently used for communication between an SDN controller and its forwarding devices?",
      "options": [
       {
        "letter": "A",
        "text": "TCP with TLS"
       },
       {
        "letter": "B",
        "text": "UDP only"
       },
       {
        "letter": "C",
        "text": "Plain Telnet"
       },
       {
        "letter": "D",
        "text": "HTTP without encryption"
       }
      ],
      "correct": "A"
     },
     {
      "n": 14,
      "text": "Which transport service do IIoT systems typically use for their sensor data?",
      "options": [
       {
        "letter": "A",
        "text": "TCP"
       },
       {
        "letter": "B",
        "text": "ICMP"
       },
       {
        "letter": "C",
        "text": "UDP"
       },
       {
        "letter": "D",
        "text": "SMTP"
       }
      ],
      "correct": "C"
     },
     {
      "n": 15,
      "text": "In the current automation practice described in the lecture, which level provides supervisory control?",
      "options": [
       {
        "letter": "A",
        "text": "Level 0 (sensors)"
       },
       {
        "letter": "B",
        "text": "Level 2 (supervisory control)"
       },
       {
        "letter": "C",
        "text": "Level 1 (digital controllers)"
       },
       {
        "letter": "D",
        "text": "Level 3 (enterprise systems)"
       }
      ],
      "correct": "B"
     }
    ]
   }
  ]
 },
 {
  "week": 10,
  "mocks": [
   {
    "mock": 1,
    "questions": [
     {
      "n": 1,
      "text": "In the software-defined IIoT architecture, which part handles network monitoring, management and optimization through its control plane?",
      "options": [
       {
        "letter": "A",
        "text": "Industrial cloud"
       },
       {
        "letter": "B",
        "text": "Public network"
       },
       {
        "letter": "C",
        "text": "Industrial bus and network"
       },
       {
        "letter": "D",
        "text": "Wireless sensor network"
       }
      ],
      "correct": "B"
     },
     {
      "n": 2,
      "text": "Which challenge of running SDN over 6TiSCH networks is caused by message exchange between the SDN controller and the field devices?",
      "options": [
       {
        "letter": "A",
        "text": "Unreliable link quality"
       },
       {
        "letter": "B",
        "text": "Increased jitter"
       },
       {
        "letter": "C",
        "text": "Limited number of sensor types"
       },
       {
        "letter": "D",
        "text": "Control overhead"
       }
      ],
      "correct": "D"
     },
     {
      "n": 3,
      "text": "Time Scheduled Channel Hopping (TSCH), the basis of IETF 6TiSCH, is adopted mainly to provide which property?",
      "options": [
       {
        "letter": "A",
        "text": "Deterministic communication"
       },
       {
        "letter": "B",
        "text": "Unlimited bandwidth"
       },
       {
        "letter": "C",
        "text": "Connectionless broadcasting"
       },
       {
        "letter": "D",
        "text": "Mobility-based routing"
       }
      ],
      "correct": "A"
     },
     {
      "n": 4,
      "text": "In the software-defined control plane for smart grids, which system is responsible for managing distributed energy resources?",
      "options": [
       {
        "letter": "A",
        "text": "Distribution management system (DMS)"
       },
       {
        "letter": "B",
        "text": "Supervisory control and data acquisition (SCADA)"
       },
       {
        "letter": "C",
        "text": "Distributed energy resource management system (DERMS)"
       },
       {
        "letter": "D",
        "text": "Advanced metering infrastructure (AMI)"
       }
      ],
      "correct": "C"
     },
     {
      "n": 5,
      "text": "For which type of network has an OpenFlow-like SDN protocol been noted as absent?",
      "options": [
       {
        "letter": "A",
        "text": "Wired data-centre networks"
       },
       {
        "letter": "B",
        "text": "Low-power and lossy networks"
       },
       {
        "letter": "C",
        "text": "Satellite backhaul networks"
       },
       {
        "letter": "D",
        "text": "Public switched telephone networks"
       }
      ],
      "correct": "B"
     },
     {
      "n": 6,
      "text": "Which security goal requires that authorized users can access data when they need it, despite threats and failures?",
      "options": [
       {
        "letter": "A",
        "text": "Availability"
       },
       {
        "letter": "B",
        "text": "Accountability"
       },
       {
        "letter": "C",
        "text": "Authentication"
       },
       {
        "letter": "D",
        "text": "Confidentiality"
       }
      ],
      "correct": "A"
     },
     {
      "n": 7,
      "text": "Which trustworthiness property restricts who can access data and by whom it may be disclosed?",
      "options": [
       {
        "letter": "A",
        "text": "Safety"
       },
       {
        "letter": "B",
        "text": "Reliability"
       },
       {
        "letter": "C",
        "text": "Resilience"
       },
       {
        "letter": "D",
        "text": "Privacy"
       }
      ],
      "correct": "D"
     },
     {
      "n": 8,
      "text": "Which risk-management option means deliberately taking no further action on a risk because its impact is tolerable?",
      "options": [
       {
        "letter": "A",
        "text": "Avoiding risks"
       },
       {
        "letter": "B",
        "text": "Mitigating risks"
       },
       {
        "letter": "C",
        "text": "Accepting risks"
       },
       {
        "letter": "D",
        "text": "Outsourcing risks"
       }
      ],
      "correct": "C"
     },
     {
      "n": 9,
      "text": "Which class of attacker comes from inside the organisation itself?",
      "options": [
       {
        "letter": "A",
        "text": "Organized crime syndicates"
       },
       {
        "letter": "B",
        "text": "Internal unethical employees"
       },
       {
        "letter": "C",
        "text": "Hardware component vendors"
       },
       {
        "letter": "D",
        "text": "Outsourced service firms"
       }
      ],
      "correct": "B"
     },
     {
      "n": 10,
      "text": "Which element belongs to the physical layer of the IIoT attack surface?",
      "options": [
       {
        "letter": "A",
        "text": "Sensors and actuators"
       },
       {
        "letter": "B",
        "text": "Application software"
       },
       {
        "letter": "C",
        "text": "Routers and switches"
       },
       {
        "letter": "D",
        "text": "Interfaces and APIs"
       }
      ],
      "correct": "A"
     },
     {
      "n": 11,
      "text": "Which application-layer attack re-sends previously captured valid messages so that the system accepts them as genuine?",
      "options": [
       {
        "letter": "A",
        "text": "SQL injection"
       },
       {
        "letter": "B",
        "text": "Jamming attack"
       },
       {
        "letter": "C",
        "text": "Replay attack"
       },
       {
        "letter": "D",
        "text": "Device tampering"
       }
      ],
      "correct": "C"
     },
     {
      "n": 12,
      "text": "Which physical-layer attack floods a wireless channel with interference so that legitimate radio communication is disrupted?",
      "options": [
       {
        "letter": "A",
        "text": "Impersonation attack"
       },
       {
        "letter": "B",
        "text": "Jamming attack"
       },
       {
        "letter": "C",
        "text": "Misrouting"
       },
       {
        "letter": "D",
        "text": "Packet sniffing"
       }
      ],
      "correct": "B"
     },
     {
      "n": 13,
      "text": "Which network-layer attack sends traffic along incorrect paths so that it reaches unintended destinations?",
      "options": [
       {
        "letter": "A",
        "text": "Packet sniffing"
       },
       {
        "letter": "B",
        "text": "Traffic flooding"
       },
       {
        "letter": "C",
        "text": "Man-in-the-middle attack"
       },
       {
        "letter": "D",
        "text": "Misrouting"
       }
      ],
      "correct": "D"
     },
     {
      "n": 14,
      "text": "Which STRIDE threat category covers an attacker denying that they performed an action, so that the activity cannot be proven?",
      "options": [
       {
        "letter": "A",
        "text": "Repudiation"
       },
       {
        "letter": "B",
        "text": "Tampering"
       },
       {
        "letter": "C",
        "text": "Spoofing"
       },
       {
        "letter": "D",
        "text": "Denial of service"
       }
      ],
      "correct": "A"
     },
     {
      "n": 15,
      "text": "Which of the following falls under the software category of component-builder trust functionalities?",
      "options": [
       {
        "letter": "A",
        "text": "Controllers"
       },
       {
        "letter": "B",
        "text": "Software as a Service"
       },
       {
        "letter": "C",
        "text": "Development tools"
       },
       {
        "letter": "D",
        "text": "End devices"
       }
      ],
      "correct": "C"
     }
    ]
   },
   {
    "mock": 2,
    "questions": [
     {
      "n": 1,
      "text": "In the adaptive transmission architecture that combines SDN with edge computing for industrial IoT, which algorithm is used to serve emergent data streams?",
      "options": [
       {
        "letter": "A",
        "text": "Coarse-grained transmission path algorithm"
       },
       {
        "letter": "B",
        "text": "Dynamic congestion-aware path algorithm"
       },
       {
        "letter": "C",
        "text": "Static spanning-tree forwarding algorithm"
       },
       {
        "letter": "D",
        "text": "Periodic beacon synchronisation algorithm"
       }
      ],
      "correct": "A"
     },
     {
      "n": 2,
      "text": "Which building block of an IIoT security framework is responsible for security monitoring, policy management and updates over the life of the system?",
      "options": [
       {
        "letter": "A",
        "text": "Cloud security"
       },
       {
        "letter": "B",
        "text": "Communications protection"
       },
       {
        "letter": "C",
        "text": "Security management"
       },
       {
        "letter": "D",
        "text": "Data protection"
       }
      ],
      "correct": "C"
     },
     {
      "n": 3,
      "text": "Which challenge for end-device protection describes devices that are frequently carried or moved from place to place?",
      "options": [
       {
        "letter": "A",
        "text": "Devices are heterogeneous"
       },
       {
        "letter": "B",
        "text": "Devices are resource constrained"
       },
       {
        "letter": "C",
        "text": "No support for standard cryptographic protocols"
       },
       {
        "letter": "D",
        "text": "Many devices are mobile"
       }
      ],
      "correct": "D"
     },
     {
      "n": 4,
      "text": "In the healthcare IoT security design, which kind of cryptography protects communication between healthcare devices and fog devices?",
      "options": [
       {
        "letter": "A",
        "text": "Full-length RSA certificates on every packet"
       },
       {
        "letter": "B",
        "text": "Lightweight cryptography"
       },
       {
        "letter": "C",
        "text": "Physical isolation only"
       },
       {
        "letter": "D",
        "text": "Hash-only integrity checks"
       }
      ],
      "correct": "B"
     },
     {
      "n": 5,
      "text": "Which cloud security control covers managing the identities of users and devices that access cloud resources?",
      "options": [
       {
        "letter": "A",
        "text": "Identity management"
       },
       {
        "letter": "B",
        "text": "Traffic shaping policies"
       },
       {
        "letter": "C",
        "text": "Edge data caching"
       },
       {
        "letter": "D",
        "text": "Server load balancing"
       }
      ],
      "correct": "A"
     },
     {
      "n": 6,
      "text": "Which standard covers the security of industrial automation and control systems?",
      "options": [
       {
        "letter": "A",
        "text": "ISO 27017"
       },
       {
        "letter": "B",
        "text": "IEC 62443"
       },
       {
        "letter": "C",
        "text": "NISTIR 7628"
       },
       {
        "letter": "D",
        "text": "IEEE 1686"
       }
      ],
      "correct": "B"
     },
     {
      "n": 7,
      "text": "Which smart-factory feature means the system predicts future outcomes so that preventive actions can be taken?",
      "options": [
       {
        "letter": "A",
        "text": "Connected"
       },
       {
        "letter": "B",
        "text": "Agile"
       },
       {
        "letter": "C",
        "text": "Proactive"
       },
       {
        "letter": "D",
        "text": "Transparent"
       }
      ],
      "correct": "C"
     },
     {
      "n": 8,
      "text": "The IoT-enabled Kuka factory connects its hundreds of robots to which type of cloud?",
      "options": [
       {
        "letter": "A",
        "text": "Public cloud"
       },
       {
        "letter": "B",
        "text": "Community cloud"
       },
       {
        "letter": "C",
        "text": "Hybrid cloud"
       },
       {
        "letter": "D",
        "text": "Private cloud"
       }
      ],
      "correct": "D"
     },
     {
      "n": 9,
      "text": "Caterpillar's IoT-driven ship maintenance programme optimises the hull-cleaning schedule and saves up to what amount per ship?",
      "options": [
       {
        "letter": "A",
        "text": "$400,000"
       },
       {
        "letter": "B",
        "text": "$40,000"
       },
       {
        "letter": "C",
        "text": "$4,000,000"
       },
       {
        "letter": "D",
        "text": "$4,000"
       }
      ],
      "correct": "A"
     },
     {
      "n": 10,
      "text": "Which award did Fanuc's Zero Downtime system win?",
      "options": [
       {
        "letter": "A",
        "text": "Smart Factory Excellence Innovation Award 2016"
       },
       {
        "letter": "B",
        "text": "Deloitte Industry 4.0 Excellence Award 2016"
       },
       {
        "letter": "C",
        "text": "GM Supplier of the Year Innovation Award 2016"
       },
       {
        "letter": "D",
        "text": "IEEE IoT Innovation Excellence Award 2016"
       }
      ],
      "correct": "C"
     },
     {
      "n": 11,
      "text": "In the Magna Steyr driverless transport system, what do the vehicles follow to move parts along the assembly line?",
      "options": [
       {
        "letter": "A",
        "text": "Magnetic tape laid on the floor"
       },
       {
        "letter": "B",
        "text": "A 3D map of the digital factory"
       },
       {
        "letter": "C",
        "text": "Overhead RFID gantries"
       },
       {
        "letter": "D",
        "text": "Infrared beacons on the ceiling"
       }
      ],
      "correct": "B"
     },
     {
      "n": 12,
      "text": "In the food-industry IoT architecture, which layer provides applications for farmers, retailers, government, analysts and consumers?",
      "options": [
       {
        "letter": "A",
        "text": "Sensing layer"
       },
       {
        "letter": "B",
        "text": "Communication layer"
       },
       {
        "letter": "C",
        "text": "Cloud layer"
       },
       {
        "letter": "D",
        "text": "Application layer"
       }
      ],
      "correct": "D"
     },
     {
      "n": 13,
      "text": "Which handheld device from the food-industry examples instantly detects pathogens in food?",
      "options": [
       {
        "letter": "A",
        "text": "BioRanger"
       },
       {
        "letter": "B",
        "text": "Eskesso"
       },
       {
        "letter": "C",
        "text": "CityCrop"
       },
       {
        "letter": "D",
        "text": "Flavor Matrix"
       }
      ],
      "correct": "A"
     },
     {
      "n": 14,
      "text": "In livestock barns and hatcheries, what does IoT automate in brooding barns?",
      "options": [
       {
        "letter": "A",
        "text": "Lighting schedules"
       },
       {
        "letter": "B",
        "text": "Temperature control"
       },
       {
        "letter": "C",
        "text": "Water recycling"
       },
       {
        "letter": "D",
        "text": "Egg counting"
       }
      ],
      "correct": "B"
     },
     {
      "n": 15,
      "text": "Which food-industry product offers a \"plant doctor\" feature as part of an intelligent indoor garden?",
      "options": [
       {
        "letter": "A",
        "text": "BioRanger"
       },
       {
        "letter": "B",
        "text": "Eskesso"
       },
       {
        "letter": "C",
        "text": "CityCrop"
       },
       {
        "letter": "D",
        "text": "FarmShelf"
       }
      ],
      "correct": "C"
     }
    ]
   },
   {
    "mock": 3,
    "questions": [
     {
      "n": 1,
      "text": "Current security architectures for industrial systems are described as mostly centred on which domain, assuming well-known protocols such as IP, TCP and HTTP?",
      "options": [
       {
        "letter": "A",
        "text": "Operational technology (OT)"
       },
       {
        "letter": "B",
        "text": "Information technology (IT)"
       },
       {
        "letter": "C",
        "text": "Physical access control systems"
       },
       {
        "letter": "D",
        "text": "Cloud computing platforms"
       }
      ],
      "correct": "B"
     },
     {
      "n": 2,
      "text": "When an IIoT system is controlled from an external cloud, what must be safeguarded to protect the control systems?",
      "options": [
       {
        "letter": "A",
        "text": "Outgoing sensor readings sent to the operator"
       },
       {
        "letter": "B",
        "text": "Cloud billing and invoice records"
       },
       {
        "letter": "C",
        "text": "Local operator panel displays and alarms"
       },
       {
        "letter": "D",
        "text": "Incoming information flow from the cloud"
       }
      ],
      "correct": "D"
     },
     {
      "n": 3,
      "text": "Which term describes establishing trust in every component of an IIoT system across its entire life cycle?",
      "options": [
       {
        "letter": "A",
        "text": "Trust permeation"
       },
       {
        "letter": "B",
        "text": "Trust delegation"
       },
       {
        "letter": "C",
        "text": "Trust escalation"
       },
       {
        "letter": "D",
        "text": "Trust revocation"
       }
      ],
      "correct": "A"
     },
     {
      "n": 4,
      "text": "Which responsibility belongs to the system owner in the trust flow?",
      "options": [
       {
        "letter": "A",
        "text": "Designing a cost-efficient trustworthy system"
       },
       {
        "letter": "B",
        "text": "Certifying component builder products"
       },
       {
        "letter": "C",
        "text": "Implementing security patches and updates on time"
       },
       {
        "letter": "D",
        "text": "Writing device firmware drivers"
       }
      ],
      "correct": "C"
     },
     {
      "n": 5,
      "text": "Which standard is the basis of the Common Criteria for Information Technology Security Evaluation?",
      "options": [
       {
        "letter": "A",
        "text": "ISO/IEC 15408"
       },
       {
        "letter": "B",
        "text": "IEC 62443"
       },
       {
        "letter": "C",
        "text": "NIST SP 800-82"
       },
       {
        "letter": "D",
        "text": "NERC-CIP"
       }
      ],
      "correct": "A"
     },
     {
      "n": 6,
      "text": "Which communication-protection technique makes intercepted IIoT traffic unreadable to anyone without the key?",
      "options": [
       {
        "letter": "A",
        "text": "Network firewalls"
       },
       {
        "letter": "B",
        "text": "Security gateways"
       },
       {
        "letter": "C",
        "text": "Network access control"
       },
       {
        "letter": "D",
        "text": "Data ciphering"
       }
      ],
      "correct": "D"
     },
     {
      "n": 7,
      "text": "Which three stages make up the security monitoring cycle used in IIoT security management?",
      "options": [
       {
        "letter": "A",
        "text": "Detect, quarantine, recover"
       },
       {
        "letter": "B",
        "text": "Monitor, analyze, respond"
       },
       {
        "letter": "C",
        "text": "Encrypt, sign, verify"
       },
       {
        "letter": "D",
        "text": "Plan, build, deploy"
       }
      ],
      "correct": "B"
     },
     {
      "n": 8,
      "text": "Which security requirement is considered the primary one for industrial IoT systems?",
      "options": [
       {
        "letter": "A",
        "text": "Perimeter-only security"
       },
       {
        "letter": "B",
        "text": "Password-based login alone"
       },
       {
        "letter": "C",
        "text": "End-to-end security"
       },
       {
        "letter": "D",
        "text": "Air-gapped networks"
       }
      ],
      "correct": "C"
     },
     {
      "n": 9,
      "text": "What is the purpose of ABB's YuMi model in its smart-factory applications?",
      "options": [
       {
        "letter": "A",
        "text": "Fully automated warehouse shelving"
       },
       {
        "letter": "B",
        "text": "Autonomous drill technology for mines"
       },
       {
        "letter": "C",
        "text": "Driverless freight trains on rail lines"
       },
       {
        "letter": "D",
        "text": "Collaboration between robots and humans"
       }
      ],
      "correct": "D"
     },
     {
      "n": 10,
      "text": "Which technology did Caterpillar combine with IoT to give machine operators an end-to-end view of the factory floor?",
      "options": [
       {
        "letter": "A",
        "text": "Augmented reality"
       },
       {
        "letter": "B",
        "text": "Blockchain ledgers"
       },
       {
        "letter": "C",
        "text": "Satellite positioning"
       },
       {
        "letter": "D",
        "text": "Robotic process automation"
       }
      ],
      "correct": "A"
     },
     {
      "n": 11,
      "text": "By how much did Amazon's operating cost reportedly fall in 2014 after it adopted robotic shelves?",
      "options": [
       {
        "letter": "A",
        "text": "5%"
       },
       {
        "letter": "B",
        "text": "20%"
       },
       {
        "letter": "C",
        "text": "50%"
       },
       {
        "letter": "D",
        "text": "75%"
       }
      ],
      "correct": "B"
     },
     {
      "n": 12,
      "text": "How does Gehring use the real-time data it sends from new machines to customers?",
      "options": [
       {
        "letter": "A",
        "text": "To schedule billing cycles for each customer"
       },
       {
        "letter": "B",
        "text": "To track the delivery trucks on each route"
       },
       {
        "letter": "C",
        "text": "To confirm requirements before order placement"
       },
       {
        "letter": "D",
        "text": "To schedule maintenance crews on each site"
       }
      ],
      "correct": "C"
     },
     {
      "n": 13,
      "text": "Which wearable technology did Airbus use on its assembly lines to show a 3D real-time visualisation of production?",
      "options": [
       {
        "letter": "A",
        "text": "Industrial smart glasses"
       },
       {
        "letter": "B",
        "text": "Handheld barcode scanners"
       },
       {
        "letter": "C",
        "text": "Wall-mounted touch screens"
       },
       {
        "letter": "D",
        "text": "Overhead surveillance cameras"
       }
      ],
      "correct": "A"
     },
     {
      "n": 14,
      "text": "Which technology did Maersk adopt to optimise its supply chain?",
      "options": [
       {
        "letter": "A",
        "text": "Quantum computing hardware"
       },
       {
        "letter": "B",
        "text": "Edge caching servers"
       },
       {
        "letter": "C",
        "text": "Satellite imaging systems"
       },
       {
        "letter": "D",
        "text": "Blockchain technology"
       }
      ],
      "correct": "D"
     },
     {
      "n": 15,
      "text": "Which food-industry product uses machine learning and data analysis to enhance the flavour of dishes and recommend food and beverage pairings?",
      "options": [
       {
        "letter": "A",
        "text": "Intellicup smart cups"
       },
       {
        "letter": "B",
        "text": "Eskesso cooking device"
       },
       {
        "letter": "C",
        "text": "Flavor Matrix system"
       },
       {
        "letter": "D",
        "text": "FarmShelf indoor farming"
       }
      ],
      "correct": "C"
     }
    ]
   }
  ]
 },
 {
  "week": 11,
  "mocks": [
   {
    "mock": 1,
    "questions": [
     {
      "n": 1,
      "text": "Roughly how many people aged 60 years or over were there worldwide in 1980?",
      "options": [
       {
        "letter": "A",
        "text": "38 million"
       },
       {
        "letter": "B",
        "text": "382 million"
       },
       {
        "letter": "C",
        "text": "2.1 billion"
       },
       {
        "letter": "D",
        "text": "3.82 billion"
       }
      ],
      "correct": "B"
     },
     {
      "n": 2,
      "text": "Which network connects a wearable body-temperature sensor to a gateway in an IIoT healthcare setup?",
      "options": [
       {
        "letter": "A",
        "text": "Wireless body area network (WBAN)"
       },
       {
        "letter": "B",
        "text": "Near-field communication (NFC)"
       },
       {
        "letter": "C",
        "text": "Wired Ethernet local area network"
       },
       {
        "letter": "D",
        "text": "Satellite broadband link"
       }
      ],
      "correct": "A"
     },
     {
      "n": 3,
      "text": "How is oxygen saturation defined in pulse oximetry?",
      "options": [
       {
        "letter": "A",
        "text": "Carbon dioxide to oxygen ratio in arterial blood"
       },
       {
        "letter": "B",
        "text": "Red blood cells to white blood cells ratio"
       },
       {
        "letter": "C",
        "text": "Oxyhemoglobin to total hemoglobin ratio"
       },
       {
        "letter": "D",
        "text": "Glucose to insulin level ratio"
       }
      ],
      "correct": "C"
     },
     {
      "n": 4,
      "text": "Which driver of IIoT adoption in power plants concerns standardised addressing for connected devices?",
      "options": [
       {
        "letter": "A",
        "text": "Low-cost powerful chips"
       },
       {
        "letter": "B",
        "text": "WiFi chips and cameras"
       },
       {
        "letter": "C",
        "text": "Accelerometer-based sensing"
       },
       {
        "letter": "D",
        "text": "Standardization with IPv6"
       }
      ],
      "correct": "D"
     },
     {
      "n": 5,
      "text": "Which three elements make up the intrusion triangle used to explain plant security risks?",
      "options": [
       {
        "letter": "A",
        "text": "Motive, means and opportunity"
       },
       {
        "letter": "B",
        "text": "Confidentiality, integrity and availability"
       },
       {
        "letter": "C",
        "text": "Prevention, detection and response"
       },
       {
        "letter": "D",
        "text": "Identity, access and auditing"
       }
      ],
      "correct": "A"
     },
     {
      "n": 6,
      "text": "Which software-security goal covers verifying the credentials entered locally or remotely and then granting access based on them?",
      "options": [
       {
        "letter": "A",
        "text": "Integrity"
       },
       {
        "letter": "B",
        "text": "Authentication"
       },
       {
        "letter": "C",
        "text": "Availability"
       },
       {
        "letter": "D",
        "text": "Confidentiality"
       }
      ],
      "correct": "B"
     },
     {
      "n": 7,
      "text": "Which network-security tool gathers information so that security staff can identify and respond to threats?",
      "options": [
       {
        "letter": "A",
        "text": "Virtual private network for remote access"
       },
       {
        "letter": "B",
        "text": "Intrusion prevention system at the perimeter"
       },
       {
        "letter": "C",
        "text": "Security information and event management"
       },
       {
        "letter": "D",
        "text": "Cloud access security broker for SaaS apps"
       }
      ],
      "correct": "C"
     },
     {
      "n": 8,
      "text": "Which network-security measure is aimed at preventing sensitive information from being shared without authorisation?",
      "options": [
       {
        "letter": "A",
        "text": "Behavioral analytics"
       },
       {
        "letter": "B",
        "text": "Application security"
       },
       {
        "letter": "C",
        "text": "Antivirus and antimalware software"
       },
       {
        "letter": "D",
        "text": "Data loss prevention"
       }
      ],
      "correct": "D"
     },
     {
      "n": 9,
      "text": "Which mobile-device security component monitors the files and processes of devices that access a network?",
      "options": [
       {
        "letter": "A",
        "text": "Secure web gateway"
       },
       {
        "letter": "B",
        "text": "Endpoint security"
       },
       {
        "letter": "C",
        "text": "Email security"
       },
       {
        "letter": "D",
        "text": "Antivirus software"
       }
      ],
      "correct": "B"
     },
     {
      "n": 10,
      "text": "What is the defining feature of virtual reality compared with augmented reality?",
      "options": [
       {
        "letter": "A",
        "text": "It isolates the user from the current world"
       },
       {
        "letter": "B",
        "text": "It adds a digital layer over the real world"
       },
       {
        "letter": "C",
        "text": "It needs a barcode scanner to operate"
       },
       {
        "letter": "D",
        "text": "It requires no display hardware at all"
       }
      ],
      "correct": "A"
     },
     {
      "n": 11,
      "text": "Which of the following is an example of augmented reality rather than virtual reality?",
      "options": [
       {
        "letter": "A",
        "text": "Oculus Rift"
       },
       {
        "letter": "B",
        "text": "Google Cardboard"
       },
       {
        "letter": "C",
        "text": "Pokémon Go"
       },
       {
        "letter": "D",
        "text": "Samsung Gear VR"
       }
      ],
      "correct": "C"
     },
     {
      "n": 12,
      "text": "Which risk of AR and VR concerns the physical well-being of the user?",
      "options": [
       {
        "letter": "A",
        "text": "Intellectual property rights"
       },
       {
        "letter": "B",
        "text": "Compromised content on the screen"
       },
       {
        "letter": "C",
        "text": "Prone to attacks by hackers"
       },
       {
        "letter": "D",
        "text": "Risks pertaining to the user's health"
       }
      ],
      "correct": "D"
     },
     {
      "n": 13,
      "text": "Facility management is defined as guiding and managing the operations and maintenance of buildings and infrastructure on behalf of whom?",
      "options": [
       {
        "letter": "A",
        "text": "Tenants"
       },
       {
        "letter": "B",
        "text": "Property owners"
       },
       {
        "letter": "C",
        "text": "Government regulators"
       },
       {
        "letter": "D",
        "text": "Equipment vendors"
       }
      ],
      "correct": "B"
     },
     {
      "n": 14,
      "text": "Which facility-management support service is responsible for planning and reviewing budgets?",
      "options": [
       {
        "letter": "A",
        "text": "Finance"
       },
       {
        "letter": "B",
        "text": "Information technology"
       },
       {
        "letter": "C",
        "text": "Marketing"
       },
       {
        "letter": "D",
        "text": "Business development"
       }
      ],
      "correct": "A"
     },
     {
      "n": 15,
      "text": "Which IoT application in facility management checks the real-time status of meeting rooms to avoid double-booking?",
      "options": [
       {
        "letter": "A",
        "text": "Refrigeration unit monitoring"
       },
       {
        "letter": "B",
        "text": "Fire suppression system control"
       },
       {
        "letter": "C",
        "text": "Room reservation and scheduling"
       },
       {
        "letter": "D",
        "text": "Smart electricity meter reading"
       }
      ],
      "correct": "C"
     }
    ]
   },
   {
    "mock": 2,
    "questions": [
     {
      "n": 1,
      "text": "Which smartphone healthcare app measures heart rate using the phone's camera?",
      "options": [
       {
        "letter": "A",
        "text": "Google Fit"
       },
       {
        "letter": "B",
        "text": "Health Assistant"
       },
       {
        "letter": "C",
        "text": "ECG Self Monitoring"
       },
       {
        "letter": "D",
        "text": "Instant Heart Rate"
       }
      ],
      "correct": "D"
     },
     {
      "n": 2,
      "text": "Which wearable is proposed for monitoring blood sugar through tear fluid?",
      "options": [
       {
        "letter": "A",
        "text": "Smart asthma inhaler"
       },
       {
        "letter": "B",
        "text": "Smart contact lens"
       },
       {
        "letter": "C",
        "text": "Pulse oximeter probe"
       },
       {
        "letter": "D",
        "text": "Smart hospital bed"
       }
      ],
      "correct": "B"
     },
     {
      "n": 3,
      "text": "Which healthcare security requirement ensures that medical data is not accessible to unauthorised users?",
      "options": [
       {
        "letter": "A",
        "text": "Confidentiality"
       },
       {
        "letter": "B",
        "text": "Integrity"
       },
       {
        "letter": "C",
        "text": "Authentication"
       },
       {
        "letter": "D",
        "text": "Availability"
       }
      ],
      "correct": "A"
     },
     {
      "n": 4,
      "text": "Which IIoT healthcare technology involves continuous learning and analysis based on that learning?",
      "options": [
       {
        "letter": "A",
        "text": "Cloud computing"
       },
       {
        "letter": "B",
        "text": "Big data"
       },
       {
        "letter": "C",
        "text": "Ambient intelligence"
       },
       {
        "letter": "D",
        "text": "Wireless body area networks"
       }
      ],
      "correct": "C"
     },
     {
      "n": 5,
      "text": "In a SCADA setup, what role do programmable logic controllers or remote terminal units play?",
      "options": [
       {
        "letter": "A",
        "text": "Analysing the data and making decisions for users"
       },
       {
        "letter": "B",
        "text": "Communicating with field devices and routing data to SCADA"
       },
       {
        "letter": "C",
        "text": "Storing all of the data in a remote cloud archive"
       },
       {
        "letter": "D",
        "text": "Generating electricity for the whole plant"
       }
      ],
      "correct": "B"
     },
     {
      "n": 6,
      "text": "A smart water monitoring device detects which two properties of water in a pipe over a period of time?",
      "options": [
       {
        "letter": "A",
        "text": "Temperature and pH"
       },
       {
        "letter": "B",
        "text": "Pressure and turbidity"
       },
       {
        "letter": "C",
        "text": "Chlorine level and colour"
       },
       {
        "letter": "D",
        "text": "Flow and volume"
       }
      ],
      "correct": "D"
     },
     {
      "n": 7,
      "text": "Which benefit does smart metering bring to the smart grid?",
      "options": [
       {
        "letter": "A",
        "text": "Reduces the chance of energy loss"
       },
       {
        "letter": "B",
        "text": "Increases the number of manual meter readings"
       },
       {
        "letter": "C",
        "text": "Eliminates the need for transmission lines"
       },
       {
        "letter": "D",
        "text": "Doubles the length of the billing cycle"
       }
      ],
      "correct": "A"
     },
     {
      "n": 8,
      "text": "Which phrase is used to define inventory?",
      "options": [
       {
        "letter": "A",
        "text": "A permanently stored asset with no economic value"
       },
       {
        "letter": "B",
        "text": "A resource consumed immediately after purchase"
       },
       {
        "letter": "C",
        "text": "A usable but idle resource having some economic value"
       },
       {
        "letter": "D",
        "text": "A fixed asset used in daily production"
       }
      ],
      "correct": "C"
     },
     {
      "n": 9,
      "text": "Which quality-control objective covers documenting and archiving inventory material and recording all quality-control activities?",
      "options": [
       {
        "letter": "A",
        "text": "Routine and consistent quality checks"
       },
       {
        "letter": "B",
        "text": "Document and archive inventory material"
       },
       {
        "letter": "C",
        "text": "Estimate holding and ordering costs"
       },
       {
        "letter": "D",
        "text": "Classification of inventory items"
       }
      ],
      "correct": "B"
     },
     {
      "n": 10,
      "text": "Which three components make up an RFID tagging system?",
      "options": [
       {
        "letter": "A",
        "text": "Barcode scanner, label printer and paper labels"
       },
       {
        "letter": "B",
        "text": "Gateway, sensor node and actuator unit"
       },
       {
        "letter": "C",
        "text": "Antenna, modem and wireless router"
       },
       {
        "letter": "D",
        "text": "RFID tag, read/write device and host system"
       }
      ],
      "correct": "D"
     },
     {
      "n": 11,
      "text": "What powers a passive RFID tag?",
      "options": [
       {
        "letter": "A",
        "text": "Electromagnetic energy from the reader's signal"
       },
       {
        "letter": "B",
        "text": "An internal lithium battery pack in the tag"
       },
       {
        "letter": "C",
        "text": "Solar cells mounted on the tag surface"
       },
       {
        "letter": "D",
        "text": "Mains electricity through the host system"
       }
      ],
      "correct": "A"
     },
     {
      "n": 12,
      "text": "Which limitation of barcodes means that the reader must have a direct view of each label?",
      "options": [
       {
        "letter": "A",
        "text": "Barcodes cannot be printed on plastic"
       },
       {
        "letter": "B",
        "text": "Barcodes can hold too much information"
       },
       {
        "letter": "C",
        "text": "Barcodes need line of sight with the reader"
       },
       {
        "letter": "D",
        "text": "Barcodes depend on radio waves"
       }
      ],
      "correct": "C"
     },
     {
      "n": 13,
      "text": "Which definition of safety is quoted in the context of plant security and safety?",
      "options": [
       {
        "letter": "A",
        "text": "Protection against a variety of threats"
       },
       {
        "letter": "B",
        "text": "Assurance that data is not altered by unauthorised people"
       },
       {
        "letter": "C",
        "text": "Ratio of time of functioning to total time"
       },
       {
        "letter": "D",
        "text": "Freedom from risk or danger"
       }
      ],
      "correct": "D"
     },
     {
      "n": 14,
      "text": "Which network-security component encrypts the connection from an endpoint to a network?",
      "options": [
       {
        "letter": "A",
        "text": "Email security gateway"
       },
       {
        "letter": "B",
        "text": "Virtual private network (VPN)"
       },
       {
        "letter": "C",
        "text": "Antivirus software suite"
       },
       {
        "letter": "D",
        "text": "Behavioral analytics engine"
       }
      ],
      "correct": "B"
     },
     {
      "n": 15,
      "text": "What does the key idea of IoT-enabled facility management require for each machine?",
      "options": [
       {
        "letter": "A",
        "text": "Only its purchase date and vendor"
       },
       {
        "letter": "B",
        "text": "Its colour and physical dimensions"
       },
       {
        "letter": "C",
        "text": "Faults, history, usage and modifications"
       },
       {
        "letter": "D",
        "text": "Its nearest power outlet location"
       }
      ],
      "correct": "C"
     }
    ]
   },
   {
    "mock": 3,
    "questions": [
     {
      "n": 1,
      "text": "In a glucose monitoring example, what does monitoring glucose levels help patients plan?",
      "options": [
       {
        "letter": "A",
        "text": "Only the monthly cost of insulin"
       },
       {
        "letter": "B",
        "text": "Meal planning, physical activity and medication"
       },
       {
        "letter": "C",
        "text": "Sleep schedules and hospital admission dates"
       },
       {
        "letter": "D",
        "text": "Vaccination timetables for the household"
       }
      ],
      "correct": "B"
     },
     {
      "n": 2,
      "text": "Which company is named as developing continuous glucose monitoring devices?",
      "options": [
       {
        "letter": "A",
        "text": "QardioCore"
       },
       {
        "letter": "B",
        "text": "iHealth"
       },
       {
        "letter": "C",
        "text": "Kinsa"
       },
       {
        "letter": "D",
        "text": "Dexcom"
       }
      ],
      "correct": "D"
     },
     {
      "n": 3,
      "text": "Which asthma-related device can keep track of its location using GPS?",
      "options": [
       {
        "letter": "A",
        "text": "Smart inhaler"
       },
       {
        "letter": "B",
        "text": "Smart contact lens"
       },
       {
        "letter": "C",
        "text": "Smart thermometer"
       },
       {
        "letter": "D",
        "text": "Smart bed"
       }
      ],
      "correct": "A"
     },
     {
      "n": 4,
      "text": "Which healthcare device can send notifications about a patient's activity to hospital staff?",
      "options": [
       {
        "letter": "A",
        "text": "Smart thermometer"
       },
       {
        "letter": "B",
        "text": "Pulse oximeter"
       },
       {
        "letter": "C",
        "text": "Smart bed"
       },
       {
        "letter": "D",
        "text": "Hygiene sensor"
       }
      ],
      "correct": "C"
     },
     {
      "n": 5,
      "text": "Which power-plant network connects smart devices in the distribution domain by collecting their data and passing it to gateways?",
      "options": [
       {
        "letter": "A",
        "text": "Home area network (HAN)"
       },
       {
        "letter": "B",
        "text": "Neighborhood area network (NAN)"
       },
       {
        "letter": "C",
        "text": "Wide area network (WAN)"
       },
       {
        "letter": "D",
        "text": "Storage area network (SAN)"
       }
      ],
      "correct": "B"
     },
     {
      "n": 6,
      "text": "Which power-plant application is treated as a virtual power plant that reduces fuel and energy consumption?",
      "options": [
       {
        "letter": "A",
        "text": "Digital twins"
       },
       {
        "letter": "B",
        "text": "Smart pumping"
       },
       {
        "letter": "C",
        "text": "Smart metering"
       },
       {
        "letter": "D",
        "text": "Building automation"
       }
      ],
      "correct": "A"
     },
     {
      "n": 7,
      "text": "Which power-plant application uses sensors to monitor product condition and optimise delivery time?",
      "options": [
       {
        "letter": "A",
        "text": "Digital twin modelling"
       },
       {
        "letter": "B",
        "text": "Smart boiler monitoring"
       },
       {
        "letter": "C",
        "text": "Smart water monitoring"
       },
       {
        "letter": "D",
        "text": "Supply chain management"
       }
      ],
      "correct": "D"
     },
     {
      "n": 8,
      "text": "Why is maintenance of wind turbines described as difficult?",
      "options": [
       {
        "letter": "A",
        "text": "Turbines do not produce enough power"
       },
       {
        "letter": "B",
        "text": "Turbines need daily repainting"
       },
       {
        "letter": "C",
        "text": "Turbines are located at remote locations"
       },
       {
        "letter": "D",
        "text": "Turbines are too small to inspect"
       }
      ],
      "correct": "C"
     },
     {
      "n": 9,
      "text": "Using cloud processing in IIoT power-plant systems can add what approximate delay?",
      "options": [
       {
        "letter": "A",
        "text": "2 msec or less"
       },
       {
        "letter": "B",
        "text": "200 msec or more"
       },
       {
        "letter": "C",
        "text": "2 seconds or more"
       },
       {
        "letter": "D",
        "text": "20 minutes or more"
       }
      ],
      "correct": "B"
     },
     {
      "n": 10,
      "text": "Which RFID tag type is described as bulky and expensive compared with passive tags?",
      "options": [
       {
        "letter": "A",
        "text": "Semi-passive tags"
       },
       {
        "letter": "B",
        "text": "Passive RFID tags"
       },
       {
        "letter": "C",
        "text": "Barcode labels"
       },
       {
        "letter": "D",
        "text": "Active RFID tags"
       }
      ],
      "correct": "D"
     },
     {
      "n": 11,
      "text": "Which inventory-management problem is listed as one that can be eliminated, and concerns records that do not agree with each other?",
      "options": [
       {
        "letter": "A",
        "text": "Data inconsistency"
       },
       {
        "letter": "B",
        "text": "Shipping labels"
       },
       {
        "letter": "C",
        "text": "Warehouse lighting"
       },
       {
        "letter": "D",
        "text": "Forecast demand"
       }
      ],
      "correct": "A"
     },
     {
      "n": 12,
      "text": "Which warehouse problems can item-level tracking of commodities help address?",
      "options": [
       {
        "letter": "A",
        "text": "Lead time variability and forecast accuracy"
       },
       {
        "letter": "B",
        "text": "Packaging design and label colour"
       },
       {
        "letter": "C",
        "text": "Shrink, shortage and overstock of commodities"
       },
       {
        "letter": "D",
        "text": "Staff rostering and shift planning"
       }
      ],
      "correct": "C"
     },
     {
      "n": 13,
      "text": "Which network-security component detects attacks and blocks them?",
      "options": [
       {
        "letter": "A",
        "text": "Behavioral analytics engines"
       },
       {
        "letter": "B",
        "text": "Intrusion prevention systems"
       },
       {
        "letter": "C",
        "text": "Email security gateways"
       },
       {
        "letter": "D",
        "text": "Mobile device security tools"
       }
      ],
      "correct": "B"
     },
     {
      "n": 14,
      "text": "Which device-security component secures the tasks performed on the cloud?",
      "options": [
       {
        "letter": "A",
        "text": "Endpoint security monitoring"
       },
       {
        "letter": "B",
        "text": "Secure web gateway service"
       },
       {
        "letter": "C",
        "text": "Email security filtering"
       },
       {
        "letter": "D",
        "text": "Cloud access security broker"
       }
      ],
      "correct": "D"
     },
     {
      "n": 15,
      "text": "Which facility-management benefit means achieving more output with fewer resources?",
      "options": [
       {
        "letter": "A",
        "text": "The ability to do more with less"
       },
       {
        "letter": "B",
        "text": "Improving customer experience"
       },
       {
        "letter": "C",
        "text": "Preventing unauthorised access"
       },
       {
        "letter": "D",
        "text": "Real-time tracking"
       }
      ],
      "correct": "A"
     }
    ]
   }
  ]
 },
 {
  "week": 12,
  "mocks": [
   {
    "mock": 1,
    "questions": [
     {
      "n": 1,
      "text": "Which of the following is a capability listed under improving operational excellence in the oil and gas industry?",
      "options": [
       {
        "letter": "A",
        "text": "Location intelligence"
       },
       {
        "letter": "B",
        "text": "Customer loyalty programmes"
       },
       {
        "letter": "C",
        "text": "Brand licensing"
       },
       {
        "letter": "D",
        "text": "Retail merchandising"
       }
      ],
      "correct": "A"
     },
     {
      "n": 2,
      "text": "Which chemical-industry approach predicts product quality through continuous monitoring of water, nutrients and pesticides?",
      "options": [
       {
        "letter": "A",
        "text": "Predictive maintenance"
       },
       {
        "letter": "B",
        "text": "Condition-based monitoring"
       },
       {
        "letter": "C",
        "text": "Supply chain risk minimisation"
       },
       {
        "letter": "D",
        "text": "Energy usage control"
       }
      ],
      "correct": "B"
     },
     {
      "n": 3,
      "text": "Which property of UAVs connected to IoT means their software can be changed to support new missions?",
      "options": [
       {
        "letter": "A",
        "text": "Deployable to various locations"
       },
       {
        "letter": "B",
        "text": "Capable of conveying adaptable payloads"
       },
       {
        "letter": "C",
        "text": "Re-programmable"
       },
       {
        "letter": "D",
        "text": "Fixed to a single site"
       }
      ],
      "correct": "C"
     },
     {
      "n": 4,
      "text": "In pharmaceutical IoT deployments, which four activities are connected together?",
      "options": [
       {
        "letter": "A",
        "text": "Manufacturing, monitoring, controlling and distribution"
       },
       {
        "letter": "B",
        "text": "Sourcing, pricing, marketing and retail sales"
       },
       {
        "letter": "C",
        "text": "Research, testing, branding and licensing deals"
       },
       {
        "letter": "D",
        "text": "Hiring, training, payroll and internal auditing"
       }
      ],
      "correct": "A"
     },
     {
      "n": 5,
      "text": "Which agricultural UAV practice helps the drone take effective images of a field?",
      "options": [
       {
        "letter": "A",
        "text": "Planning the flight path"
       },
       {
        "letter": "B",
        "text": "Flying at a fixed random altitude"
       },
       {
        "letter": "C",
        "text": "Recording only thermal imagery"
       },
       {
        "letter": "D",
        "text": "Skipping geo-referencing of images"
       }
      ],
      "correct": "A"
     },
     {
      "n": 6,
      "text": "Which telecom-related UAV activity is used to evaluate network performance?",
      "options": [
       {
        "letter": "A",
        "text": "Tower paint colour and coating choice"
       },
       {
        "letter": "B",
        "text": "Coverage and stability testing of networks"
       },
       {
        "letter": "C",
        "text": "Server rack cooling and airflow design"
       },
       {
        "letter": "D",
        "text": "Packet header formatting and encoding"
       }
      ],
      "correct": "B"
     },
     {
      "n": 7,
      "text": "Which UAV generation is described as having a static design with a fixed camera mount, still photography, video recording and manual steering control?",
      "options": [
       {
        "letter": "A",
        "text": "First generation"
       },
       {
        "letter": "B",
        "text": "Third generation"
       },
       {
        "letter": "C",
        "text": "Second generation"
       },
       {
        "letter": "D",
        "text": "Fourth generation"
       }
      ],
      "correct": "C"
     },
     {
      "n": 8,
      "text": "Which mining UAV task identifies misfires and damage to walls?",
      "options": [
       {
        "letter": "A",
        "text": "Site exploration of new mining areas"
       },
       {
        "letter": "B",
        "text": "Grading control of extracted ore"
       },
       {
        "letter": "C",
        "text": "Stockpile management and tracking"
       },
       {
        "letter": "D",
        "text": "Identifying misfire and wall damage"
       }
      ],
      "correct": "D"
     },
     {
      "n": 9,
      "text": "Which entertainment use of UAVs is presented as cheaper and more exciting than traditional firework displays?",
      "options": [
       {
        "letter": "A",
        "text": "Drone racing leagues"
       },
       {
        "letter": "B",
        "text": "UAV-based light displays"
       },
       {
        "letter": "C",
        "text": "Pyrotechnic drones with smoke effects"
       },
       {
        "letter": "D",
        "text": "Underwater drone sightseeing"
       }
      ],
      "correct": "B"
     },
     {
      "n": 10,
      "text": "What does a case study enable a researcher to do?",
      "options": [
       {
        "letter": "A",
        "text": "Examine data closely within a specific context"
       },
       {
        "letter": "B",
        "text": "Collect data from millions of random respondents"
       },
       {
        "letter": "C",
        "text": "Avoid analysing the collected data"
       },
       {
        "letter": "D",
        "text": "Generalise results to the whole world"
       }
      ],
      "correct": "A"
     },
     {
      "n": 11,
      "text": "Which forestry UAV application covers canopy height, density and volume estimation?",
      "options": [
       {
        "letter": "A",
        "text": "Wildland fire tracking and alerts"
       },
       {
        "letter": "B",
        "text": "Endangered species protection and monitoring"
       },
       {
        "letter": "C",
        "text": "Precision forestry and canopy mapping"
       },
       {
        "letter": "D",
        "text": "Seedling distribution across plantations"
       }
      ],
      "correct": "C"
     },
     {
      "n": 12,
      "text": "Which oil and gas UAV function is described as detecting leakage in pipelines?",
      "options": [
       {
        "letter": "A",
        "text": "Elevation mapping of terrain"
       },
       {
        "letter": "B",
        "text": "Oil spill detection at sea"
       },
       {
        "letter": "C",
        "text": "Watershed analysis of catchments"
       },
       {
        "letter": "D",
        "text": "Pipeline leakage detection"
       }
      ],
      "correct": "D"
     },
     {
      "n": 13,
      "text": "How many case studies are listed under the overview of different case studies?",
      "options": [
       {
        "letter": "A",
        "text": "Five"
       },
       {
        "letter": "B",
        "text": "Six"
       },
       {
        "letter": "C",
        "text": "Nine"
       },
       {
        "letter": "D",
        "text": "Seven"
       }
      ],
      "correct": "D"
     },
     {
      "n": 14,
      "text": "How often can UAVs in warehousing monitor the full inventory?",
      "options": [
       {
        "letter": "A",
        "text": "Once every month"
       },
       {
        "letter": "B",
        "text": "In a day"
       },
       {
        "letter": "C",
        "text": "Within an hour"
       },
       {
        "letter": "D",
        "text": "Once a week"
       }
      ],
      "correct": "B"
     },
     {
      "n": 15,
      "text": "Which benefit of drone-based shipping and delivery is listed?",
      "options": [
       {
        "letter": "A",
        "text": "Increasing road congestion"
       },
       {
        "letter": "B",
        "text": "Requiring more delivery staff"
       },
       {
        "letter": "C",
        "text": "Avoiding unnecessary road traffic"
       },
       {
        "letter": "D",
        "text": "Lowering drone reusability"
       }
      ],
      "correct": "C"
     }
    ]
   },
   {
    "mock": 2,
    "questions": [
     {
      "n": 1,
      "text": "Which benefit of IoT in the oil and gas industry relates to planning across the supply chain?",
      "options": [
       {
        "letter": "A",
        "text": "Work safety"
       },
       {
        "letter": "B",
        "text": "Improve asset maintenance"
       },
       {
        "letter": "C",
        "text": "Save cost and time"
       },
       {
        "letter": "D",
        "text": "Supply chain planning"
       }
      ],
      "correct": "D"
     },
     {
      "n": 2,
      "text": "To reduce energy expenses, which kind of data do IoT systems in chemical plants analyse?",
      "options": [
       {
        "letter": "A",
        "text": "Real-time data"
       },
       {
        "letter": "B",
        "text": "Historical sales records"
       },
       {
        "letter": "C",
        "text": "Employee attendance logs"
       },
       {
        "letter": "D",
        "text": "Marketing survey results"
       }
      ],
      "correct": "A"
     },
     {
      "n": 3,
      "text": "Which pharmaceutical IoT capability lets production areas be controlled from a distance?",
      "options": [
       {
        "letter": "A",
        "text": "Manual logbook recording of readings"
       },
       {
        "letter": "B",
        "text": "Remote control of production areas"
       },
       {
        "letter": "C",
        "text": "Paper-based batch records on site"
       },
       {
        "letter": "D",
        "text": "On-site inspection rounds by staff"
       }
      ],
      "correct": "B"
     },
     {
      "n": 4,
      "text": "Which UAV generation introduced two-axis gimbals, essential safety modes and assisted guiding?",
      "options": [
       {
        "letter": "A",
        "text": "Second generation"
       },
       {
        "letter": "B",
        "text": "Fourth generation"
       },
       {
        "letter": "C",
        "text": "Third generation"
       },
       {
        "letter": "D",
        "text": "Fifth generation"
       }
      ],
      "correct": "C"
     },
     {
      "n": 5,
      "text": "Which crop stress factors can UAV-based monitoring detect in agriculture?",
      "options": [
       {
        "letter": "A",
        "text": "Over-fertilization or drought"
       },
       {
        "letter": "B",
        "text": "Traffic jams near the farm"
       },
       {
        "letter": "C",
        "text": "Battery ageing of sensors"
       },
       {
        "letter": "D",
        "text": "Market prices of seed"
       }
      ],
      "correct": "A"
     },
     {
      "n": 6,
      "text": "Which construction-related UAV task is described as monitoring shoreline erosion?",
      "options": [
       {
        "letter": "A",
        "text": "Quick survey of job areas"
       },
       {
        "letter": "B",
        "text": "Building maps of job sites"
       },
       {
        "letter": "C",
        "text": "Inspecting forest roads for damage"
       },
       {
        "letter": "D",
        "text": "Monitoring shoreline erosion"
       }
      ],
      "correct": "D"
     },
     {
      "n": 7,
      "text": "Which energy-sector UAV task is described as monitoring solar panels on farms?",
      "options": [
       {
        "letter": "A",
        "text": "Inspecting wind turbines on open land"
       },
       {
        "letter": "B",
        "text": "Monitoring solar panels of the farms"
       },
       {
        "letter": "C",
        "text": "Surveying deep mining shafts for ore"
       },
       {
        "letter": "D",
        "text": "Delivering blood samples to labs"
       }
      ],
      "correct": "B"
     },
     {
      "n": 8,
      "text": "Which telecommunications use of UAVs supplies internet access to people in remote areas?",
      "options": [
       {
        "letter": "A",
        "text": "Urban high-rise districts"
       },
       {
        "letter": "B",
        "text": "Underground metro stations"
       },
       {
        "letter": "C",
        "text": "Rural areas"
       },
       {
        "letter": "D",
        "text": "Offshore oil rigs"
       }
      ],
      "correct": "C"
     },
     {
      "n": 9,
      "text": "Which oil and gas UAV function is described as detecting oil spills and assessing the resulting damage?",
      "options": [
       {
        "letter": "A",
        "text": "Oil spill detection and damage assessment"
       },
       {
        "letter": "B",
        "text": "Watershed analysis of river basins"
       },
       {
        "letter": "C",
        "text": "Elevation mapping of pipeline routes"
       },
       {
        "letter": "D",
        "text": "Canopy height measurement in forests"
       }
      ],
      "correct": "A"
     },
     {
      "n": 10,
      "text": "Which forestry activity is described as tracking wildland fires?",
      "options": [
       {
        "letter": "A",
        "text": "Seedling distribution"
       },
       {
        "letter": "B",
        "text": "Canopy density control"
       },
       {
        "letter": "C",
        "text": "Carbon storage mapping"
       },
       {
        "letter": "D",
        "text": "Wildland fire tracking"
       }
      ],
      "correct": "D"
     },
     {
      "n": 11,
      "text": "How are UAV-based entertainment light displays typically controlled?",
      "options": [
       {
        "letter": "A",
        "text": "A team of manual pilots for each drone"
       },
       {
        "letter": "B",
        "text": "A single computer"
       },
       {
        "letter": "C",
        "text": "Handheld radios for each drone"
       },
       {
        "letter": "D",
        "text": "Satellite television broadcast"
       }
      ],
      "correct": "B"
     },
     {
      "n": 12,
      "text": "What kind of analysis does a case study provide?",
      "options": [
       {
        "letter": "A",
        "text": "Only quantitative numerical analysis"
       },
       {
        "letter": "B",
        "text": "Only anecdotal opinions and impressions"
       },
       {
        "letter": "C",
        "text": "Quantitative and qualitative analysis"
       },
       {
        "letter": "D",
        "text": "Only sensor reading summaries"
       }
      ],
      "correct": "C"
     },
     {
      "n": 13,
      "text": "Which subjects are typically selected for a case study?",
      "options": [
       {
        "letter": "A",
        "text": "Large national populations across the country"
       },
       {
        "letter": "B",
        "text": "Millions of anonymous records from many sources"
       },
       {
        "letter": "C",
        "text": "Random global samples from many countries"
       },
       {
        "letter": "D",
        "text": "A small area or a limited number of individuals"
       }
      ],
      "correct": "D"
     },
     {
      "n": 14,
      "text": "What does transformation project management for an Industry 4.0 case study involve setting?",
      "options": [
       {
        "letter": "A",
        "text": "Objectives, schedule and budget"
       },
       {
        "letter": "B",
        "text": "Hardware brand names and models"
       },
       {
        "letter": "C",
        "text": "Employee holiday plans for the year"
       },
       {
        "letter": "D",
        "text": "Marketing slogans for the campaign"
       }
      ],
      "correct": "A"
     },
     {
      "n": 15,
      "text": "Which outcome is listed as an aim for workers in Industry 4.0 case-study analysis?",
      "options": [
       {
        "letter": "A",
        "text": "Increase in health hazards for workers"
       },
       {
        "letter": "B",
        "text": "Reduction of health hazards of workers"
       },
       {
        "letter": "C",
        "text": "Removal of safety training for staff"
       },
       {
        "letter": "D",
        "text": "Longer shift lengths for all workers"
       }
      ],
      "correct": "B"
     }
    ]
   },
   {
    "mock": 3,
    "questions": [
     {
      "n": 1,
      "text": "Which outcome is linked in the oil and gas section to connecting the business with the car and offering a smart application?",
      "options": [
       {
        "letter": "A",
        "text": "Improved operational excellence"
       },
       {
        "letter": "B",
        "text": "Increased customer loyalty"
       },
       {
        "letter": "C",
        "text": "Pipeline integrity"
       },
       {
        "letter": "D",
        "text": "Drill automation"
       }
      ],
      "correct": "B"
     },
     {
      "n": 2,
      "text": "Which logistics capability in chemical-industry IoT notifies people when something needs attention?",
      "options": [
       {
        "letter": "A",
        "text": "Thermal imaging"
       },
       {
        "letter": "B",
        "text": "Manual sign-off"
       },
       {
        "letter": "C",
        "text": "Predictive scheduling"
       },
       {
        "letter": "D",
        "text": "Alert notification"
       }
      ],
      "correct": "D"
     },
     {
      "n": 3,
      "text": "Which pharmaceutical logistics activity focuses on choosing the best paths for shipments?",
      "options": [
       {
        "letter": "A",
        "text": "Optimizing routing"
       },
       {
        "letter": "B",
        "text": "Reducing production cost"
       },
       {
        "letter": "C",
        "text": "Remote control of areas"
       },
       {
        "letter": "D",
        "text": "Wastage tracking"
       }
      ],
      "correct": "A"
     },
     {
      "n": 4,
      "text": "Which UAV generation is distinguished by auto actions such as takeoff, landing and mission execution?",
      "options": [
       {
        "letter": "A",
        "text": "Fifth generation"
       },
       {
        "letter": "B",
        "text": "Sixth generation"
       },
       {
        "letter": "C",
        "text": "Seventh generation"
       },
       {
        "letter": "D",
        "text": "Fourth generation"
       }
      ],
      "correct": "C"
     },
     {
      "n": 5,
      "text": "Which information from UAV surveys helps define the flight pattern for a field?",
      "options": [
       {
        "letter": "A",
        "text": "Field borders"
       },
       {
        "letter": "B",
        "text": "Tractor fuel prices"
       },
       {
        "letter": "C",
        "text": "Seed packaging design"
       },
       {
        "letter": "D",
        "text": "Farm worker payroll"
       }
      ],
      "correct": "A"
     },
     {
      "n": 6,
      "text": "What do UAVs save for clients when they show construction progress from far away?",
      "options": [
       {
        "letter": "A",
        "text": "Paperwork and printing costs only"
       },
       {
        "letter": "B",
        "text": "Less time, energy and money spent"
       },
       {
        "letter": "C",
        "text": "Insurance premiums for site staff"
       },
       {
        "letter": "D",
        "text": "Office rent for the site team"
       }
      ],
      "correct": "B"
     },
     {
      "n": 7,
      "text": "What can UAVs do for telecom towers?",
      "options": [
       {
        "letter": "A",
        "text": "Photograph towers only from ground level"
       },
       {
        "letter": "B",
        "text": "Inspect towers from one fixed angle"
       },
       {
        "letter": "C",
        "text": "Inspect only the lower third of towers"
       },
       {
        "letter": "D",
        "text": "Monitor towers from any angle and height"
       }
      ],
      "correct": "D"
     },
     {
      "n": 8,
      "text": "Which UAV feature is mentioned as helping the senior population in healthcare delivery?",
      "options": [
       {
        "letter": "A",
        "text": "Thermal cameras"
       },
       {
        "letter": "B",
        "text": "Extended battery packs"
       },
       {
        "letter": "C",
        "text": "Manipulator arms"
       },
       {
        "letter": "D",
        "text": "Loudspeakers"
       }
      ],
      "correct": "C"
     },
     {
      "n": 9,
      "text": "What can UAVs do in a warehouse with their scanning capability?",
      "options": [
       {
        "letter": "A",
        "text": "Count staff attendance"
       },
       {
        "letter": "B",
        "text": "Check the missing items"
       },
       {
        "letter": "C",
        "text": "Repaint shelving"
       },
       {
        "letter": "D",
        "text": "Schedule lunch breaks"
       }
      ],
      "correct": "B"
     },
     {
      "n": 10,
      "text": "Which mining UAV task manages the piles of extracted material?",
      "options": [
       {
        "letter": "A",
        "text": "Managing stockpiles"
       },
       {
        "letter": "B",
        "text": "Pumping groundwater"
       },
       {
        "letter": "C",
        "text": "Drilling blast holes"
       },
       {
        "letter": "D",
        "text": "Dispatching trucks"
       }
      ],
      "correct": "A"
     },
     {
      "n": 11,
      "text": "Which film-related use of UAVs is listed?",
      "options": [
       {
        "letter": "A",
        "text": "Live news reporting from remote events"
       },
       {
        "letter": "B",
        "text": "Customs inspections at border crossings"
       },
       {
        "letter": "C",
        "text": "Parcel sorting in logistics hubs"
       },
       {
        "letter": "D",
        "text": "Capturing film frames cost-effectively"
       }
      ],
      "correct": "D"
     },
     {
      "n": 12,
      "text": "Which kind of study explores real-life phenomena through detailed analysis of related events?",
      "options": [
       {
        "letter": "A",
        "text": "Survey study"
       },
       {
        "letter": "B",
        "text": "Laboratory experiment"
       },
       {
        "letter": "C",
        "text": "Case study"
       },
       {
        "letter": "D",
        "text": "Literature review"
       }
      ],
      "correct": "C"
     },
     {
      "n": 13,
      "text": "Which step is part of how a case study is conducted?",
      "options": [
       {
        "letter": "A",
        "text": "Following certain procedures"
       },
       {
        "letter": "B",
        "text": "Ignoring the specific context"
       },
       {
        "letter": "C",
        "text": "Using only random sampling"
       },
       {
        "letter": "D",
        "text": "Avoiding analysis of data"
       }
      ],
      "correct": "A"
     },
     {
      "n": 14,
      "text": "Which activity should come first before transforming a process for Industry 4.0 adoption?",
      "options": [
       {
        "letter": "A",
        "text": "Buying every available sensor"
       },
       {
        "letter": "B",
        "text": "Assessment of existing processes"
       },
       {
        "letter": "C",
        "text": "Hiring new managers for the project"
       },
       {
        "letter": "D",
        "text": "Removing all workers from the line"
       }
      ],
      "correct": "B"
     },
     {
      "n": 15,
      "text": "Which outcome is listed as an aim of Industry 4.0 case-study analysis?",
      "options": [
       {
        "letter": "A",
        "text": "Increased manual auditing of records"
       },
       {
        "letter": "B",
        "text": "Higher worker overtime during shifts"
       },
       {
        "letter": "C",
        "text": "Reduced data logging on the floor"
       },
       {
        "letter": "D",
        "text": "Improvement in overall efficiency"
       }
      ],
      "correct": "D"
     }
    ]
   }
  ]
 }
];
