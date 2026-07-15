"use client";

import { motion } from "framer-motion";

import Reveal from "./Reveal";
import GlassCard from "./ui/GlassCard";
import SectionTitle from "./ui/SectionTitle";


const skills = [

  {
    name:"CCTV Monitoring",
    level:95
  },

  {
    name:"Fire Alarm Systems",
    level:90
  },

  {
    name:"Access Control",
    level:85
  },

  {
    name:"Security Operations",
    level:95
  },

  {
    name:"Report Writing",
    level:90
  },

  {
    name:"MS Office / Excel",
    level:90
  },

  {
    name:"AI Tools",
    level:80
  },

  {
    name:"Next.js Development",
    level:75
  }

];



export default function Skills(){


return (

<section

id="skills"

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

badge="SKILLS"

title="Technical & Professional Expertise"

description="
Combining security operations knowledge with modern
technology, AI tools and web development skills.
"

/>





<div

className="
grid
md:grid-cols-2

gap-8

mt-12

"

>


{
skills.map((skill,index)=>(


<GlassCard

key={skill.name}

className="
p-7

"

>


<motion.div

initial={{
opacity:0,
y:30
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
delay:index*.08
}}

>


<div

className="
flex
justify-between
items-center

mb-5

"

>


<h3

className="
text-lg
font-bold
text-slate-900

"

>

{skill.name}

</h3>



<span

className="
font-bold
text-[#0f766e]

"

>

{skill.level}%

</span>


</div>





<div

className="
w-full

h-3

rounded-full

bg-slate-200

overflow-hidden

"

>


<motion.div

initial={{
width:0
}}

whileInView={{
width:`${skill.level}%`
}}

viewport={{
once:true
}}

transition={{

duration:1,
delay:.2

}}

className="
h-full

rounded-full

bg-gradient-to-r

from-[#6DD5C4]

to-[#2D9C8C]

"

/>


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