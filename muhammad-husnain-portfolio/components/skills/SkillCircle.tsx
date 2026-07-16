"use client";

import { motion } from "framer-motion";


interface SkillCircleProps {

name:string;

level:number;

}



export default function SkillCircle({

name,

level

}:SkillCircleProps){


const radius = 45;

const circumference = 2 * Math.PI * radius;


return (

<div

className="
flex
flex-col
items-center
gap-4

"

>


<div

className="
relative
w-32
h-32

"

>


<svg

className="
w-full
h-full
rotate-[-90deg]

"

viewBox="0 0 120 120"

>


<circle

cx="60"

cy="60"

r={radius}

stroke="rgba(148,163,184,.15)"

strokeWidth="10"

fill="none"

/>



<motion.circle

cx="60"

cy="60"

r={radius}

stroke="var(--primary)"

strokeWidth="10"

fill="none"

strokeLinecap="round"

strokeDasharray={circumference}

initial={{

strokeDashoffset:circumference

}}

animate={{

strokeDashoffset:

circumference -

(level / 100) * circumference

}}

transition={{

duration:1.5,

ease:"easeOut"

}}

/>



</svg>




<div

className="
absolute
inset-0

flex
items-center
justify-center

"

>


<span

className="
text-2xl
font-black

text-[var(--foreground)]

"

>

{level}%

</span>


</div>



</div>



<p

className="
font-bold

text-sm

text-[var(--foreground)]

"

>

{name}

</p>



</div>

);

}