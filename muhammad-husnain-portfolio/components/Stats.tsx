"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";


const stats = [
  {
    number: "5+",
    title: "Years Experience",
    description: "Security Operations & Site Management"
  },

  {
    number: "24/7",
    title: "Monitoring",
    description: "CCTV & Control Room Operations"
  },

  {
    number: "10+",
    title: "Projects",
    description: "Security & Technology Solutions"
  },

  {
    number: "UAE",
    title: "Professional Experience",
    description: "Dubai Security Environment"
  }
];


export default function Stats(){


return(

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


<motion.div

key={index}

whileHover={{
y:-8
}}

transition={{
duration:0.3
}}

className="
glass
rounded-3xl
p-8
border
border-white/10
"

>


<h3
className="
text-5xl
font-black
gradient-text
"
>

{item.number}

</h3>


<h4
className="
mt-4
text-xl
font-bold
text-white
"
>

{item.title}

</h4>


<p
className="
mt-3
text-slate-400
"
>

{item.description}

</p>


</motion.div>


))
}


</div>

</Reveal>


</section>

)

}