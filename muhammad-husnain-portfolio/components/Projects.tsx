"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";


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
"Professional portfolio website showcasing security experience, technical skills and modern web development.",
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
"Future automation and artificial intelligence solutions for security and smart systems.",
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
bg-gray-50
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

Projects

</h2>



<div
className="
grid
md:grid-cols-3
gap-8
"
>


{
projects.map((project,index)=>(


<motion.div

key={project.title}

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
delay:index*0.15
}}

whileHover={{
y:-10
}}

className="
p-8
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

{project.category}

</span>



<h3
className="
text-2xl
font-bold
mt-4
mb-4
"
>

{project.title}

</h3>



<p
className="
text-gray-600
dark:text-gray-300
mb-6
leading-relaxed
"
>

{project.description}

</p>



<div
className="
flex
flex-wrap
gap-2
"
>


{
project.tech.map((item)=>(


<span

key={item}

className="
px-3
py-1
rounded-full
text-sm
bg-gray-200
dark:bg-white/20
"

>

{item}

</span>


))
}


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