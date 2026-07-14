"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";


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
bg-white
dark:bg-black
"
>


<div
className="
max-w-6xl
mx-auto
"
>


<Reveal>


<h2
className="
text-4xl
md:text-5xl
font-bold
mb-12
"
>

Skills

</h2>



<div
className="
grid
md:grid-cols-2
gap-8
"
>


{
skills.map((skill,index)=>(


<motion.div

key={skill.name}

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
delay:index*0.1
}}

whileHover={{
scale:1.03
}}

className="
p-7
rounded-3xl
bg-gray-100
dark:bg-white/10
border
shadow-xl
backdrop-blur
"

>


<div
className="
flex
justify-between
mb-4
"
>

<h3
className="
font-bold
text-lg
"
>

{skill.name}

</h3>


<span>
{skill.level}%
</span>


</div>



<div
className="
w-full
h-3
rounded-full
bg-gray-300
dark:bg-gray-700
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
duration:1
}}


className="
h-full
rounded-full
bg-black
dark:bg-white
"

/>


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