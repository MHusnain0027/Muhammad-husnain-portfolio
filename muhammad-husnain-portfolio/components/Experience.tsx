"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";


const experiences = [

{
year:"2026",
role:"Security System Operator",
company:"Security Operations & Control Room"
},

{
year:"2025",
role:"Security Operations Support",
company:"Expo City Dubai"
},

{
year:"2024",
role:"Event Security Operations",
company:"COP28 & Major Events Support"
},

{
year:"2023",
role:"Security Monitoring & Reporting",
company:"Dubai Rugby Sevens"
},

{
year:"Previous",
role:"Data Management",
company:"Reports, Records & System Handling"
}

];


export default function Experience(){


return (

<section
id="experience"
className="
px-6
py-24
bg-gray-50
dark:bg-black
"
>


<div className="
max-w-5xl
mx-auto
">


<Reveal>


<h2
className="
text-4xl
md:text-5xl
font-bold
mb-14
"
>

Experience

</h2>



<div
className="
relative
border-l-2
border-gray-300
dark:border-gray-700
"
>


{
experiences.map((item,index)=>(


<motion.div

key={index}

initial={{
opacity:0,
x:-50
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

transition={{
delay:index*0.15
}}

className="
relative
mb-12
ml-8
"

>



<div
className="
absolute
-left-[42px]
top-2
w-5
h-5
rounded-full
bg-black
dark:bg-white
border-4
border-white
dark:border-black
"
/>



<div
className="
p-7
rounded-3xl
bg-white
dark:bg-white/10
border
shadow-xl
backdrop-blur
"

>


<span
className="
text-sm
text-gray-500
"
>

{item.year}

</span>



<h3
className="
text-2xl
font-bold
mt-2
"
>

{item.role}

</h3>



<p
className="
text-gray-600
dark:text-gray-300
mt-3
"
>

{item.company}

</p>



</div>



</motion.div>


))
}



</div>


</Reveal>


</div>


</section>

);

}