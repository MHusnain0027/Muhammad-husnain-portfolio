"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";


const projects = [

{
title:"🔥 FireGuard AI",
category:"AI Security System",

description:
"AI-based fire alarm assistant system designed for smart monitoring, emergency support and security operations.",

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

category:"Automation Technology",

description:
"Future automation and artificial intelligence solutions focused on smart security and digital transformation.",

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
"

>


<div

className="
container
"

>


<Reveal>


<h2

className="
text-center
mb-14
"

>

Projects

</h2>





<div

className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
"

>


{

projects.map((project,index)=>(


<motion.div


key={project.title}


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

delay:index*.15

}}


whileHover={{

y:-10

}}


className="
glass
flex
flex-col
min-h-[360px]
"

>





<div>


<span

className="
inline-block
text-sm
font-semibold
text-[#2D9C8C]
mb-4
"

>

{project.category}

</span>





<h3

className="
text-xl
font-bold
"

>

{project.title}

</h3>





<p

className="
mt-4
text-sm
"

>

{project.description}

</p>


</div>





{/* Tech Stack */}


<div

className="
mt-auto
pt-6
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
bg-[#DFF6F0]
text-[#2D9C8C]
text-xs
font-semibold
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