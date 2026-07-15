"use client";

import { motion } from "framer-motion";

import Reveal from "./Reveal";
import GlassCard from "./ui/GlassCard";
import SectionTitle from "./ui/SectionTitle";


export default function Resume(){


return (

<section

id="resume"

className="
px-6
py-24

"

>


<div

className="
max-w-5xl
mx-auto

"

>


<Reveal>


<SectionTitle

badge="RESUME"

title="Professional Resume"

description="
Explore my security experience, technical skills,
certifications and technology projects.
"

/>





<GlassCard

className="
p-10
text-center
mt-12

"

>


<motion.div

whileHover={{
y:-5
}}

transition={{
duration:.3
}}

>


<h2

className="
text-3xl

md:text-4xl

font-black

text-slate-900

"

>

Muhammad Husnain CV

</h2>




<p

className="
mt-5

text-slate-600

leading-relaxed

max-w-2xl

mx-auto

"

>

Download my professional resume to explore my
Security System Operator experience, CCTV expertise,
certifications, AI learning and Web Development projects.

</p>





<div

className="
flex

flex-col

md:flex-row

justify-center

gap-5

mt-8

"

>



<a

href="/resume/Muhammad-Husnain-CV.pdf"

target="_blank"

className="
px-8

py-3

rounded-full

bg-[#6DD5C4]

text-[#064e3b]

font-bold

hover:scale-105

transition

"

>

View Resume

</a>





<a

href="/resume/Muhammad-Husnain-CV.pdf"

download

className="
px-8

py-3

rounded-full

border

border-[#6DD5C4]

text-[#0f766e]

font-bold

hover:bg-[#DFF6F0]

transition

"

>

Download CV

</a>





<button

onClick={()=>window.print()}

className="
px-8

py-3

rounded-full

border

border-slate-300

font-bold

text-slate-700

hover:bg-slate-100

transition

"

>

Print

</button>



</div>



</motion.div>


</GlassCard>



</Reveal>


</div>


</section>

)

}