"use client";


import Image from "next/image";
import { motion } from "framer-motion";


import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";


import ProjectTech from "./ProjectTech";
import ProjectLinks from "./ProjectLinks";



interface ProjectCardProps {

title:string;

description:string;

image:string;

status:string;

technologies:string[];

github?:string;

demo?:string;

}



export default function ProjectCard({

title,

description,

image,

status,

technologies,

github,

demo

}:ProjectCardProps){


return (

<motion.div

whileHover={{

y:-8

}}

transition={{

duration:.3

}}

>


<GlassCard

className="
overflow-hidden
p-0
"

>


<div

className="
relative
h-56
"

>


<Image

src={image}

alt={title}

fill

className="
object-cover

"

/>



<div

className="
absolute
top-4
right-4

"

>

<Badge>

{status}

</Badge>


</div>


</div>





<div

className="
p-6

"

>


<h3

className="
text-2xl

font-black

text-[var(--foreground)]

"

>

{title}

</h3>



<p

className="
mt-4

text-[var(--text-muted)]

leading-relaxed

"

>

{description}

</p>



<ProjectTech

technologies={technologies}

/>



<ProjectLinks

github={github}

demo={demo}

/>



</div>



</GlassCard>


</motion.div>

);

}