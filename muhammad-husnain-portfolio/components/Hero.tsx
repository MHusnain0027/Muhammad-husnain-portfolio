"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Reveal from "./Reveal";


export default function Hero(){


return (

<section

id="home"

className="
min-h-screen
flex
items-center
justify-center
px-6
"

>


<div

className="
container
"

>


<Reveal>


<motion.div

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.7
}}

className="
max-w-4xl
mx-auto
text-center
glass
p-8
md:p-12
"

>



{/* Profile */}

<motion.div

whileHover={{
scale:1.05
}}

className="
w-24
h-24
mx-auto
rounded-full
flex
items-center
justify-center
bg-[#DFF6F0]
text-[#2D9C8C]
text-3xl
font-black
mb-8
"

>

MH

</motion.div>





<h1

className="
text-4xl
md:text-5xl
font-black
leading-tight
"

>

Muhammad Husnain

</h1>





<h2

className="
mt-5
text-xl
md:text-2xl
font-bold
text-[#2D9C8C]
"

>

Security System Operator

<br/>

<span className="text-slate-600">

CCTV Specialist | AI Enthusiast | Web Developer

</span>


</h2>







<p

className="
mt-6
mx-auto
"

>

Professional Security System Operator with experience in
CCTV monitoring, control room operations, incident reporting,
AI solutions and modern web development technologies.

</p>






<div

className="
mt-10
flex
flex-col
sm:flex-row
justify-center
gap-4
"

>


<Link

href="/resume"

className="
btn-primary
"

>

Download CV

</Link>




<Link

href="#projects"

className="
btn-secondary
"

>

View Projects

</Link>


</div>






</motion.div>


</Reveal>


</div>


</section>


);


}