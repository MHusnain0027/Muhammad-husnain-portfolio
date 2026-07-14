"use client";

import { motion } from "framer-motion";


export default function Loading(){


return (

<div className="
fixed
inset-0
z-[999]
flex
items-center
justify-center
bg-black
text-white
">


<motion.div

initial={{
opacity:0,
scale:0.8
}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:0.8
}}

className="text-center"

>


<h1 className="
text-6xl
font-bold
mb-4
">

MH

</h1>


<p className="
text-xl
">

Muhammad Husnain

</p>


<p className="
text-gray-400
mt-2
">

Security System Operator

</p>


<motion.div

animate={{
rotate:360
}}

transition={{
repeat:Infinity,
duration:2,
ease:"linear"
}}

className="
mt-8
mx-auto
w-8
h-8
border-4
border-white
border-t-transparent
rounded-full
"

/>


</motion.div>


</div>

);

}