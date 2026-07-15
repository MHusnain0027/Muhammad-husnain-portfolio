"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import GlassCard from "./ui/GlassCard";
import Button from "./ui/Button";
import Reveal from "./Reveal";


export default function Hero() {


return (

<section

id="home"

className="
min-h-screen
flex
items-center
justify-center

px-6
pt-32

"

>


<Reveal>


<GlassCard

className="
max-w-5xl
w-full

p-8
md:p-14

text-center

"

>


<motion.div

initial={{
opacity:0,
scale:.9
}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:.7
}}

>


{/* Logo */}

<motion.div

animate={{
y:[0,-10,0]
}}

transition={{
duration:4,
repeat:Infinity
}}

className="
mx-auto
mb-8

w-28
h-28

rounded-full

flex
items-center
justify-center

text-5xl
font-black

bg-[#6DD5C4]

text-slate-900

shadow-xl

"

>

MH

</motion.div>





<h1

className="
text-5xl
md:text-7xl

font-black

text-slate-900

leading-tight

"

>

Muhammad

<span className="
text-[#4FC8B3]
">

 Husnain

</span>


</h1>





<h2

className="
mt-6

text-xl
md:text-3xl

font-bold

text-slate-700

"

>

Security Operations

<br/>

<span className="
text-[#0f766e]
">

AI Technology × Web Development

</span>


</h2>





<p

className="
max-w-3xl
mx-auto

mt-6

text-lg

text-slate-600

leading-relaxed

"

>

Professional Security System Operator specializing in
CCTV monitoring, security operations, reporting,
automation solutions and modern web technologies.

</p>





<div

className="
mt-10

flex
flex-col
sm:flex-row

gap-5

justify-center

"

>


<Link href="#resume">

<Button>

Download CV

</Button>

</Link>





<Link href="#projects">

<Button variant="secondary">

View Projects

</Button>

</Link>


</div>





</motion.div>


</GlassCard>


</Reveal>


</section>

)

}