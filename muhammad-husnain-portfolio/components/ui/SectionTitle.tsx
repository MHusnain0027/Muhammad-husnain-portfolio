"use client";

import { motion } from "framer-motion";


interface SectionTitleProps {

  badge?: string;

  title: string;

  description?: string;

}



export default function SectionTitle({

  badge,

  title,

  description,

}: SectionTitleProps) {


return (

<motion.div

initial={{
opacity:0,
y:20
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:0.5
}}

className="
max-w-3xl
mx-auto
text-center
mb-16
"

>


{
badge && (

<div

className="
inline-flex
mb-5
px-5
py-2
rounded-full

bg-[#6DD5C4]/20

border
border-[#6DD5C4]/30

text-[#0f766e]

text-sm
font-semibold
"

>

{badge}

</div>

)

}



<h2

className="
text-4xl
md:text-6xl
font-black
text-slate-900
"

>

{title}

</h2>



{
description && (

<p

className="
mt-5
text-lg
text-slate-600
leading-relaxed
"

>

{description}

</p>

)

}



</motion.div>

)

}