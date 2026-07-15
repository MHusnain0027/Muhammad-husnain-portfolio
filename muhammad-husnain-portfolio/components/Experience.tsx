"use client";

import { motion } from "framer-motion";

import Reveal from "./Reveal";
import GlassCard from "./ui/GlassCard";
import SectionTitle from "./ui/SectionTitle";


const experiences = [

  {
    year:"2026",
    role:"Security System Operator",
    company:"Security Operations & Control Room",
    description:
    "Managing CCTV monitoring, incident reporting, security coordination and daily operational activities."
  },

  {
    year:"2025",
    role:"Security Operations Support",
    company:"Expo City Dubai",
    description:
    "Supported security operations, access control procedures, safety compliance and event activities."
  },

  {
    year:"2024",
    role:"Event Security Operations",
    company:"COP28 & Major Events Support",
    description:
    "Provided professional event security support, crowd management and operational monitoring."
  },

  {
    year:"2023",
    role:"Security Monitoring & Reporting",
    company:"Dubai Rugby Sevens",
    description:
    "Handled monitoring activities, reporting tasks and coordination during large-scale events."
  },

  {
    year:"Previous",
    role:"Data Management",
    company:"Reports, Records & System Handling",
    description:
    "Experienced in data entry, documentation, reporting and maintaining operational records."
  }

];



export default function Experience(){


return (

<section

id="experience"

className="
px-6
py-24
"

>


<div

className="
max-w-5xl
mx-auto
"

>


<Reveal>


<SectionTitle

badge="EXPERIENCE"

title="Professional Journey"

description="
Security operations experience combined with reporting,
technology and operational management skills.
"

/>




<div

className="
relative
mt-14

"

>


{/* Timeline Line */}

<div

className="
absolute
left-3
top-0
bottom-0

w-[2px]

bg-[#6DD5C4]

"

></div>





<div

className="
space-y-10

"

>


{
experiences.map((item,index)=>(


<motion.div

key={index}

initial={{

opacity:0,
x:-40

}}

whileInView={{

opacity:1,
x:0

}}

viewport={{

once:true

}}

transition={{

duration:.5,
delay:index*.1

}}

className="
relative
pl-10

"

>


{/* Timeline Dot */}

<div

className="
absolute

left-0
top-8

w-7
h-7

rounded-full

bg-[#6DD5C4]

border-4

border-white

shadow-lg

"

></div>




<GlassCard

className="
p-7

"

>



<span

className="
text-sm

font-semibold

text-[#0f766e]

"

>

{item.year}

</span>




<h3

className="
mt-3

text-2xl

font-bold

text-slate-900

"

>

{item.role}

</h3>




<h4

className="
mt-2

font-medium

text-slate-700

"

>

{item.company}

</h4>




<p

className="
mt-4

text-slate-600

leading-relaxed

"

>

{item.description}

</p>



</GlassCard>



</motion.div>


))

}



</div>


</div>



</Reveal>


</div>


</section>

)

}