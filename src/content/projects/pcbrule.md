---
title: "PCBrule"
description: "A pocket slide rule made from printed circuit board, combining vintage calculation methods with modern PCB manufacturing."
status: "active"
type: "Product Design"
tags: ["KiCad", "PCB Design", "Mechanical Engineering", "Product Design", "GD&T", "Prototyping"]
featured: true
order: 1
locale: "en"
draft: false
heroImage: "/images/pcbrule/hero.jpg"

timeline:
  - phase: "Ideation"
    status: "completed"
    description: "Initial concept sparked by the desire to combine vintage calculation methods with modern manufacturing techniques."
    tags: ["Concept", "Inspiration"]
  - phase: "Research and Concept"
    status: "completed"
    description: "Deep dive into slide rule mechanics, scale calculations, and PCB manufacturing constraints. Studied historical designs and identified key features to implement."
    tags: ["Research", "Mathematical Analysis", "Design Planning"]
    image: "/images/pcbrule/sketches.jpg"
  - phase: "Mechanical Design"
    status: "completed"
    description: "Designing the mechanical aspects including sliding mechanisms, tolerances, and structural integrity within PCB manufacturing constraints."
    tags: ["CAD Design", "Mechanical Engineering", "GD&T"]
    image: "/images/pcbrule/mechanical-design.jpg"
  - phase: "Design Validation"
    status: "completed"
    description: "Modeling a crude physical 'zeroth' prototype to validate stacked layer design and physical dimensions."
    tags: ["3D Printing", "Prototype"]
    image: "/images/pcbrule/zeroth-prototype.jpg"
  - phase: "Panel Layout"
    status: "completed"
    description: "Finalizing the physical dimensions and component placement to optimize both functionality and manufacturing efficiency."
    tags: ["Layout Design", "Optimization"]
    image: "/images/pcbrule/panel-layout.jpg"
  - phase: "Graphic Design"
    status: "completed"
    description: "Creating the visual scale markings, numbering systems, and aesthetic elements to be silk-screened and etched to reveal the gold beneath the soldermask."
    tags: ["Graphics", "Typography", "Visual Design"]
    image: "/images/pcbrule/graphic-design.jpg"
  - phase: "PCB Design"
    status: "completed"
    description: "Translating the mechanical and graphic designs into manufacturable PCB files using KiCad, ensuring all tolerances and manufacturer specifications are met."
    tags: ["KiCad", "PCB Layout", "Manufacturing Files"]
    image: "/images/pcbrule/pcb-design.jpg"
  - phase: "Prototyping"
    status: "in-progress"
    description: "First prototype PCB manufacturing and assembly. Testing mechanical fit, scale accuracy, and overall usability. Currently working through cursor window challenges."
    tags: ["Prototype", "Testing", "Iteration"]
    image: "/images/pcbrule/prototyping.jpg"
  - phase: "Development of Mass Manufacture Techniques"
    status: "future"
    description: "Optimizing the design and manufacturing process for larger scale production while maintaining quality and cost effectiveness."
    tags: ["Manufacturing", "Process Optimization", "Quality Control"]
  - phase: "Shipping and Logistics"
    status: "future"
    description: "Setting up supply chain, packaging design, and distribution channels for getting PCBrules to customers worldwide."
    tags: ["Logistics", "Supply Chain", "Distribution"]
  - phase: "Manufacture and Selling"
    status: "future"
    description: "Full production launch with online sales platform, customer support, and ongoing product improvements based on user feedback."
    tags: ["Production", "Sales", "Customer Support"]

specs:
  "Length": "6.5 inches"
  "Surface Finish": "ENIG (Gold)"
  "Soldermask": "Matte Black"
  "Legend Printing": "White Silkscreen"
  "Fabrication (PCBway, 40 units)": "$15.57 / board"
  "Hardware (est.)": "$2.25 / unit"
  "Shipping + Packaging (est.)": "$6.75 / unit"
  "Total Unit Cost (est.)": "$24.50"

challenges:
  - title: "Cursor Window Positioning & Friction"
    problem: "The cursor windows sit directly on the faces of the scales, which creates increased friction when sliding, catching that moves the cursor unintentionally during calculations, and contact that risks scratching the scale surfaces over time."
    solution: "Redesigning the cursor to ride on the top and bottom edges of the stator, lifting it off the scale faces entirely. Requires careful engineering of the cursor geometry and potentially adding guide rails or tracks."
  - title: "Acrylic Window Durability"
    problem: "Acrylic is prone to scratching with repeated use. The windows are currently the most fragile component of the assembly, and scratches on the viewing windows would significantly impact usability and scale readability long-term."
    solution: "Experimenting with milled polycarbonate cursor windows. Polycarbonate offers superior impact and scratch resistance compared to acrylic, potentially making the PCBrule nearly indestructible while maintaining optical clarity."
  - title: "Shim Manufacturing"
    problem: "Stainless steel shims provide clearance for the slide and cursor movement, but they are currently cut from shim strips using scissors. Extremely crude, painstaking, unrepeatable, and prone to shifting or falling out."
    solution: "Purchased a 2mm hole punch to use in conjunction with a 3D-printed jig to quickly, accurately, and repeatably produce the small stainless steel shims."

support:
  title: "About Purchasing & Development Support"
  paragraphs:
    - "Lots of people have already contacted me asking how they could purchase one or if there's any way they could preorder one. I really appreciate your enthusiasm for this project. It's motivating me to continue to refine and improve the product and process."
    - "However, I'm still a student and school is my first priority. I'm not even sure I will have the time to bring this product to market. At this point there are still a bunch of issues that need to be hammered out before I even think about selling them. I am not comfortable selling a product that doesn't exist yet, and I'm not confident I am able to make it to my standards."
    - "While I'm not comfortable taking money in exchange for a product I'm not sure I can make yet, I would not mind obligation-free donations to this project. It's not cheap to develop a product like this. So I greatly appreciate your support."

links:
  - label: "Support the development on Ko-fi"
    url: "https://ko-fi.com/marcusjyoo"
  - label: "See the discussion on Reddit"
    url: "https://www.reddit.com/r/sliderules/search?q=PCBrule&restrict_sr=1"
---

## Story

I was a freshman in high school when I first learned what a slide rule was. My FIRST robotics mentor brought a slide rule to a meeting one day and I was blown away by the magic math stick and what it could do.

I've always been attracted to purely mechanical things — I love analog photography because I find it really neat that you can produce an image using only gears, curtains, levers, glass, and chemistry. My favorite school supply throughout high school was a cherry red DigiKey PCB ruler — there was a satisfying quality about the gold lettering and just how durable it was.

Since then, I've had a nagging idea in my head: *"Wouldn't it be awesome if you made a slide rule out of Printed Circuit Board?"*

Now as a student in university I am finally acting on that idea — and it is pretty awesome in my opinion.

## Inspiration

"If you've had this idea for a while, what pushed you to actually make it?" you ask.

Well it's simple. I am a student in a competitive field. I wanted to make a really cool and memorable "business card" that I could hand out at my school's career fair. I was hoping this memorable object would sit on a company recruiter's desk with my name on it, and they'd see it, and give me an internship.

Selling them and bringing it to market was mostly an afterthought.

![PCBrule panel layout](/images/pcbrule/panel.jpg)

## Wait, what's a slide rule?

A slide rule is a mechanical calculator — engineers used them before the advent of digital computers. It is a tool that operates on the principle of adding together logarithms.

The Apollo astronauts carried a Pickett N600-ES to the moon, and the PCBrule is modeled after that very same design — with identical scales and calculation capabilities. Its layout has been time tested and literally approved by NASA.

## Current Prototype Demonstration

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/S7x2U8cqt70"
    title="PCBrule Prototype Demonstration"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>

## Upcoming Prototype Iterations

- **Mechanical redesign of cursor guidance system** — Engineering cursor rails and guides to eliminate acrylic surface contact
- **Polycarbonate window prototyping and testing** — Sourcing and machining polycarbonate alternatives for durability testing
- **Friction and smoothness optimization** — Testing different materials and coatings for optimal slide feel
- **Long-term durability testing** — Stress testing the updated design for wear patterns and reliability
- **Shim manufacturing jig** — Developing a jig to assist in punching and cutting of 0.1 mm stainless steel shim pieces
- **Bow spring bending jig** — Making a device to repeatably and consistently bend the phosphor bronze cursor springs

