---
# You can also start simply with 'default'
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
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

With Debezium

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
transition: fade-out
layout: center
---

<Excalidraw
drawFilePath="./application.excalidraw"
:darkMode="true"
:background="false"
/>

---
transition: fade-out
layout: center
---

<img src="./bug-report.png" alt="Angry Users" width="600" />

---
transition: fade-out
layout: center
---

<img src="./challenger.png" alt="Challenger approaching"/>

---
transition: fade-out
---
# Issues with Dual Writes

<v-clicks>

- database transaction successful - write to ES failed
- database transaction rolled back - write to ES succeeded

</v-clicks>

---
layout: image
image: /race-conditions.png
backgroundSize: 20em 70%
---
### Race conditions 😱

<div class="absolute bottom-4 left-6 text-xs text-white opacity-80">
  Source: <a href="https://martin.kleppmann.com/2015/05/27/logs-for-data-infrastructure.html">Martin Kleppmann</a>
</div>

---
transition: fade-out
layout: center
---

<Excalidraw
drawFilePath="./cdc-dual-write-crossed.excalidraw"
:darkMode="true"
:background="false"
/>

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





