"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import GlowBorder from "@/components/ui/GlowBorder";
import GlassCard from "@/components/ui/GlassCard";


export default function HeroVisual(){


return (

<div

className="
relative
flex
justify-center
items-center
"

>


{/* Glow Background */}

<div

className="
absolute
w-72
h-72

rounded-full

bg-[var(--primary)]

opacity-20

blur-[120px]

"

></div>




<motion.div

animate={{

y:[0,-15,0]

}}

transition={{

duration:5,

repeat:Infinity,

ease:"easeInOut"

}}

className="
relative
z-10

"

>


<GlowBorder>


<div

className="
p-3
"

>


<Image

src="/images/profile/husnain-profile.jpg"

alt="Muhammad Husnain"

width={500}

height={500}

className="
rounded-3xl
object-cover

aspect-square

"

/>


</div>


</GlowBorder>



</motion.div>





{/* Floating Card Top */}

<motion.div

animate={{

y:[0,-8,0]

}}

transition={{

duration:3,

repeat:Infinity

}}

className="
absolute
top-5
right-0

"

>


<GlassCard

className="
px-5
py-4
"

>


<p

className="
text-xs
text-[var(--text-muted)]
"

>

SYSTEM STATUS

</p>


<p

className="
text-[var(--primary)]
font-bold
"

>

ONLINE ●

</p>


</GlassCard>


</motion.div>




{/* Floating Card Bottom */}

<motion.div

animate={{

y:[0,10,0]

}}

transition={{

duration:4,

repeat:Infinity

}}

className="
absolute
bottom-10
left-0

"

>


<GlassCard

className="
px-5
py-4
"

>

<p

className="
text-sm
font-bold
text-[var(--foreground)]
"

>

AI + Security

</p>


<p

className="
text-xs
text-[var(--text-muted)]
"

>

Next Generation Systems

</p>


</GlassCard>


</motion.div>



</div>

);

}