"use client";


import Image from "next/image";
import { motion } from "framer-motion";


import GlowBorder from "@/components/ui/GlowBorder";
import GlassCard from "@/components/ui/GlassCard";



export default function AboutVisual(){


return (

<div

className="
relative
flex
justify-center
items-center

"

>


<motion.div

animate={{

y:[0,-12,0]

}}

transition={{

duration:5,

repeat:Infinity,

ease:"easeInOut"

}}

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

width={450}

height={450}

className="
rounded-3xl
aspect-square
object-cover

"

/>


</div>


</GlowBorder>



</motion.div>





<motion.div

animate={{

y:[0,8,0]

}}

transition={{

duration:4,

repeat:Infinity

}}

className="
absolute
bottom-8
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
text-[var(--primary)]

"

>

SECURITY + AI

</p>



<p

className="
text-xs
text-[var(--text-muted)]

"

>

Technology Driven Approach

</p>


</GlassCard>



</motion.div>



</div>

);

}