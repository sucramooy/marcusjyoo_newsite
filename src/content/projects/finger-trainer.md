---
title: "Digital Climbing Finger Strength Trainer"
description: "An ESP32-based finger strength trainer that measures isometric loading in real time and spoofs the Tindeq BLE protocol for compatibility with existing climbing apps."
status: "active"
type: "Embedded Systems"
tags: ["ESP32", "BLE", "Load Cell", "Embedded", "Firmware", "Product Design"]
featured: false
order: 4
locale: "en"
draft: false
heroImage: "/images/finger-trainer/hero.jpg"
heroPosition: "center 75%"

timeline:
  - phase: "Hardware Testing"
    status: "completed"
    description: "Validated the load cell and LilyGo T-Display S2 AMOLED for real-time force measurement and stable BLE throughput."
    tags: ["Load Cell", "ESP32", "Signal Processing"]
  - phase: "MVP: Tindeq Compatibility"
    status: "completed"
    description: "Reverse-engineered the Tindeq BLE protocol and implemented a compatible signal from the ESP32, letting the device pair with any existing Tindeq-compatible app including frez/climbharder 2.0."
    tags: ["BLE", "Protocol Reverse Engineering", "Firmware"]
  - phase: "Future Iterations"
    status: "future"
    description: "Build a standalone training UI on the S2 AMOLED for phone-free use, and consolidate the electronics into a single-block enclosure with a professional product form factor."
    tags: ["UI/UX", "Industrial Design", "Hardware Integration"]
---

## Overview

A digital finger strength trainer for climbers, built on the ESP32 platform with a load cell and a LilyGo T-Display S2 AMOLED. The device measures isometric finger loading in real time and spoofs the Bluetooth protocol used by the Tindeq (commercial equivalent) so it pairs with any app already compatible with that device, including frez/climbharder 2.0.

## Why it matters

Traditional no-hang training uses a loading pin and a stack of weights. That setup works, but it locks you into whatever discrete weight increments you own. This device measures force continuously, so you can program precise isometric interval training and target loads within a few percent of your actual limit.

That precision is the difference between progressive overload and injury. Climbing finger injuries almost always come from overreaching. Going too heavy too fast, or loading in a position the tissue isn't prepared for. Training close to your limit with accurate feedback lets you maximize progression while staying under the threshold where tendons and pulleys begin to tear.

## Demo

<div class="video-embed vertical">
  <iframe
    src="https://www.youtube.com/embed/V_C5S-b14wM?si=UQ4RQJ2Sf1knRrKe"
    title="Finger Trainer Demo"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>

## Current status

Hardware is validated and the BLE spoof is working. The device pairs with any Tindeq-compatible app and supports programmable isometric interval training with real-time force feedback. Next steps: standalone UI on the S2 AMOLED, and a consolidated single-block enclosure.