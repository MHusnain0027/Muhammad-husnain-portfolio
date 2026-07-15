"use client";

import { motion } from "framer-motion";

import Reveal from "./Reveal";
import GlassCard from "./ui/GlassCard";
import SectionTitle from "./ui/SectionTitle";


const projects = [

  {
    title:"🔥 FireGuard AI",
    category:"AI Security System",
    description:
    "AI based fire alarm assistant system designed for smart monitoring, emergency support and security operations.",
    tech:[
      "Next.js",
      "TypeScript",
      "AI",
      "Supabase"
    ]
  },


  {
    title:"🌐 Muhammad Husnain Portfolio",
    category:"Personal Brand Website",
    description:
    "Professional portfolio website showcasing security experience, technical skills and modern web development capabilities.",
    tech:[
      "Next.js",
      "Tailwind CSS",
      "Framer Motion"
    ]
  },


  {
    title:"🚀 Future AI Projects",
    category:"Upcoming Technology",
    description:
    "Future automation and artificial intelligence solutions focused on security systems and smart technology.",
    tech:[
      "AI",
      "Automation",
      "Web Technology"
    ]
  }

];



export default function Projects(){


return (

<section

id="projects"

className="
px-6
py-24

"

>


<div

className="
max-w-6xl
mx-auto

"

>


<Reveal>


<SectionTitle

badge="PROJECTS"

title="Featured Technology Projects"

description="
Innovative projects combining security knowledge,
AI solutions and modern web development.
"

/>





<div

className="
grid
md:grid-cols-3

gap-8

mt-12

"

>


{
projects.map((project,index)=>(


<GlassCard

key={project.title}

className="
p-8
h-full

"

>


<motion.div

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.5,
delay:index*.15
}}

whileHover={{
y:-8
}}

>


<span

className="
text-sm

font-semibold

text-[#0f766e]

"

>

{project.category}

</span>





<h3

className="
text-2xl

font-black

mt-4

text-slate-900

"

>

{project.title}

</h3>





<p

className="
mt-5

text-slate-600

leading-relaxed

"

>

{project.description}

</p>





<div

className="
flex
flex-wrap

gap-3

mt-6

"

>


{
project.tech.map((item)=>(


<span

key={item}

className="
px-4
py-2

rounded-full

text-sm

font-medium

bg-[#DFF6F0]

text-[#0f766e]

"

>

{item}

</span>


))

}


</div>



</motion.div>


</GlassCard>


))

}


</div>


</Reveal>


</div>


</section>

)

}