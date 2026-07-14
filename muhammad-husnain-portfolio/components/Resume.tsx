"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";


export default function Resume(){


return (

<section

id="resume"

className="
px-6
py-24
bg-white
dark:bg-black
"

>


<div

className="
max-w-5xl
mx-auto
"

>


<Reveal>


<motion.div

whileHover={{
scale:1.02
}}

className="
p-10
rounded-3xl
bg-gray-100
dark:bg-white/10
border
shadow-xl
text-center
backdrop-blur
"

>


<h2

className="
text-4xl
md:text-5xl
font-bold
mb-6
"

>

My Resume

</h2>



<p

className="
text-gray-600
dark:text-gray-300
mb-8
leading-relaxed
"

>

Download my professional resume to explore my security experience,
technical skills, certifications and project work.

</p>



<div

className="
flex
flex-col
md:flex-row
justify-center
gap-5
"

>


<a

href="/resume/Muhammad-Husnain-CV.pdf"

target="_blank"

className="
px-8
py-3
rounded-full
bg-black
text-white
dark:bg-white
dark:text-black
font-semibold
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
font-semibold
hover:scale-105
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
font-semibold
hover:scale-105
transition
"

>

Print

</button>



</div>


</motion.div>


</Reveal>


</div>


</section>

);

}