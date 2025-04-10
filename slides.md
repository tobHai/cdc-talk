---
# You can also start simply with 'default'
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: /cover.jpg
title: Change Data Capture
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# take snapshot for each slide in the overview
overviewSnapshots: true
---

# Change Data Capture

---
transition: fade-out
layout: center
---

<Excalidraw
drawFilePath="application.excalidraw"
:darkMode="true"
:background="false"
/>

<!--
Application stores documents  
Customer picky  
Unhappy with search experience  
We decide to add Elasticsearch  
Sidenote: DB more powerful  
Love to tinker - go forward with ES  
-->

---
transition: fade-out
layout: center
---

<Excalidraw
drawFilePath="cdc-dual-write.excalidraw"
:darkMode="true"
:background="false"
/>

<!--
User adds document  
Write to both datastore
Data engineering: Dual write  
Proud & deploy to Prod  
Users happy  
Superb experience  
Bug reports  
-->

---
layout: image
image: /bug-report.png
backgroundSize: 30em 80%
---
<!--
Document cannot be found  
Although they exist in the database  
Document can be found  
Which do not exist in the database  
What went wrong?!
-->
---
layout: image
image: /challenger.png
backgroundSize: 45em 80%
---

<!--
 Data engineering: setup called DUAL WRITES  
 DB & message broker, DB & cache,...
-->

---
transition: fade-out
---
# Issues with Dual Writes

<v-clicks>

- Database transaction successful - write to ES failed
- Database transaction rolled back - write to ES succeeded
- Ordering issues

</v-clicks>

<!--
 Could add commit listener, retry etc  
 Not ideal - hard to solve all cases properly  
 Writes might arrive in different order at different data stores
-->

---
transition: fade-out
layout: center
---

<Excalidraw
drawFilePath="cdc-dual-write-crossed.excalidraw"
:darkMode="true"
:background="false"
/>

<!--
  Simple solution not working properly  
  Agree with Gunnar  
-->

---
transition: fade-out
layout: center
---

<div class="text-[2rem] text-white-800">
    Friends Don’t Let Friends Do Dual-Writes
</div>

<div class="italic mt-2">
  Gunnar Morling - 97 Things Every Data Engineer Should Know
</div>

---
transition: fade-out
---
# Alternatives

<v-clicks depth="2">

- Distributed transaction
  - Slow
  - Lack of support (Elasticsearch, Kafka,...)
- Patterns
  - Outbox
  - Saga
- CDC tools

</v-clicks>


<!--
  Synchronization between participants: performance overhead  
  Not supported by data stores  
  Support for Kafka will be added (currently in development)  
  But they offer strong consistency guarantees  
  
  Patterns might help avoid dual-writes as well but deserve an extra talk.  
  Saga (undo/compensating actions), Outbox (write to additional table in same transaction)
-->

---
transition: fade-out
---
# Basic idea

<v-clicks>

- Parse transaction log
- Transform into usable event
- Publish events to a message broker (Kafka)
- Consume event from message broker

</v-clicks>

<!--
  Listen to changes in a datastore -> propagate changes to another store  

  Transaction log: foundation of modern database system  
  Each action executed recorded in log  
  Turning the database inside out  
  Low level construct (log) -> API for consuming it

  Provides the D in ACID  
  ARIES for recovery algorithm
-->

---
transition: fade-out
---
# Debezium

<v-clicks>

- Open source change data capture platform
- Uses Kafka for event storage/distribution
- Supports most modern data stores

</v-clicks>

<!--
  Sponsored by Redhat  
  Supports most modern data stores  
  No need for reinventing the wheel  
  Great ecosystem  
-->

---
layout: image
image: /architecture.png
backgroundSize: 30em 30%
---
# Architecture

<div class="absolute bottom-4 left-6 text-xs text-white opacity-80">
  Source: <a href="https://debezium.io/documentation/reference/3.1/architecture.html">Debezium.io</a>
</div>

<!--
  Kafka Connect: data integration framework 
  Debezium: written in Java  
  Embedded mode (replaces Kafka Connect)  
  Guarantees: At least once delivery  
  Ordering of events  
-->

---
transition: fade-out
---
# Use cases

<v-clicks>

- Data replication/synchronization
  - Cache, search index, DWH
- Software modernization
- Analytics
  - How many orders have been created in the last 5 hours
- Audit log

</v-clicks>

<!--
  Keep caches in sync, keep search index in sync, replicate to DWH, standby db.  
  Zero-downtime migrations (populate DB in parallel)  
  Analyze data on the fly (number of inserts, updates, etc.)  
  All data manipulation events captured with timestamp etc.  (before/after) values  
-->

---
transition: fade-out
layout: center
---

<div class="text-[4rem] text-white-800">
    💻 Demo 💻
</div>


---
transition: fade-out
---
# Summary

### Advantages

<br/>
<v-clicks>

- Robustness
- Scalability
- No modification of application code needed
- Additional data stores can be added easily

</v-clicks>

<!--
  More robust than hand crafted solution  
  Tested by the community/used in big systems 
  Application does not need to know anything about it (legacy modernization)  
  Add more data stores easily - simply consume events somewhere else
-->

---
transition: fade-out
---
# Summary

### Disadvantages 

<br/>
<v-clicks>

- Complexity
- More components to maintain
- Another tool to learn

</v-clicks>


<!--
  No silver bullet either  
  More components to maintain (infrastructure)/cost  
  Another tool to learn etc.  
  Great tool if you have infrastructure in place already  
-->

---
transition: fade-out
layout: center
---

<div class="text-[2rem] text-white-800">
    Thanks for listening!
</div>

---
layout: image
image: /race-conditions.png
backgroundSize: 20em 70%
---
### Race conditions 😱

<div class="absolute bottom-4 left-6 text-xs text-white opacity-80">
  Source: <a href="https://martin.kleppmann.com/2015/05/27/logs-for-data-infrastructure.html">Martin Kleppmann</a>
</div>

<!--
Order issues  
Out of sync due to race conditions  
-->
