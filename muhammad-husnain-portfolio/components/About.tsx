"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";


const details = [

{
title:"Nationality",
value:"Pakistani"
},

{
title:"Languages",
value:"English, Urdu, Hindi"
},

{
title:"Education",
value:"Professional & Technical Training"
},

{
title:"Certification",
value:"SIRA Certified Security Professional"
}

];


export default function About(){


return (

<section
id="about"
className="
min-h-screen
px-6
py-24
bg-white
dark:bg-black
"
>


<div className="
max-w-6xl
mx-auto
">


<Reveal>


<motion.h2

initial={{
opacity:0,
x:-30
}}

whileInView={{
opacity:1,
x:0
}}

className="
text-4xl
md:text-5xl
font-bold
mb-8
"

>

About Me

</motion.h2>



<p
className="
text-lg
text-gray-600
dark:text-gray-300
leading-relaxed
mb-12
"
>

I am Muhammad Husnain, a professional Security System Operator
specializing in CCTV monitoring, security operations, incident reporting
and data management.

I have experience working in professional environments where safety,
security and technology work together.

</p>



<div
className="
grid
md:grid-cols-2
gap-6
"
>


{
details.map((item,index)=>(


<motion.div

key={item.title}

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index*0.15
}}

whileHover={{
scale:1.05
}}

className="
p-6
rounded-3xl
bg-gray-100
dark:bg-white/10
border
shadow-lg
backdrop-blur
"

>


<h3
className="
text-xl
font-bold
mb-2
"
>

{item.title}

</h3>



<p
className="
text-gray-600
dark:text-gray-300
"
>

{item.value}

</p>



</motion.div>


))
}


</div>


</Reveal>


</div>


</section>

);

}