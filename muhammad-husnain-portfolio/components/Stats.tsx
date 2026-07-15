"use client";

import { motion } from "framer-motion";

import Reveal from "./Reveal";
import GlassCard from "./ui/GlassCard";


const stats = [

  {
    number: "5+",
    title: "Years Experience",
    description:
      "Security Operations & Site Management"
  },

  {
    number: "24/7",
    title: "Monitoring",
    description:
      "CCTV & Control Room Operations"
  },

  {
    number: "10+",
    title: "Projects",
    description:
      "Security & Technology Solutions"
  },

  {
    number: "UAE",
    title: "Professional Experience",
    description:
      "Dubai Security Environment"
  }

];



export default function Stats(){


return (

<section

className="
py-24
px-6

"

>


<Reveal>


<div

className="
max-w-7xl
mx-auto

grid

sm:grid-cols-2

lg:grid-cols-4

gap-6

"

>


{
stats.map((item,index)=>(


<GlassCard

key={index}

className="
p-8
text-center
"

>


<motion.div

initial={{
opacity:0,
scale:.8
}}

whileInView={{
opacity:1,
scale:1
}}

viewport={{
once:true
}}

transition={{
duration:.5,
delay:index*.1
}}

>


<h3

className="
text-5xl
font-black

bg-gradient-to-r

from-[#6DD5C4]

to-[#2D9C8C]

bg-clip-text

text-transparent

"

>

{item.number}

</h3>



<h4

className="
mt-5

text-xl

font-bold

text-slate-900

"

>

{item.title}

</h4>




<p

className="
mt-3

text-slate-600

leading-relaxed

"

>

{item.description}

</p>



</motion.div>


</GlassCard>


))

}


</div>


</Reveal>


</section>

)

}