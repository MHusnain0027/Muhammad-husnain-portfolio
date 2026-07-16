"use client";

import { motion } from "framer-motion";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";


export default function Hero(){


return (

<Section

id="home"

className="
min-h-screen
flex
items-center
relative
overflow-hidden
pt-32
"

>


{/* Premium Aurora Effects */}


<div

className="
absolute
top-[-200px]
left-1/2
-translate-x-1/2

w-[900px]
h-[900px]

rounded-full

bg-[var(--primary)]

opacity-[0.08]

blur-[180px]

"

></div>



<div

className="
absolute
right-[-200px]
top-1/3

w-[400px]
h-[400px]

rounded-full

bg-[var(--accent)]

opacity-[0.08]

blur-[140px]

"

></div>



{/* Floating dots */}

<motion.div

animate={{

y:[0,-20,0]

}}

transition={{

duration:5,

repeat:Infinity

}}

className="
absolute
top-32
left-20

w-3
h-3

rounded-full

bg-[var(--primary)]

shadow-[0_0_30px_var(--primary)]

"

/>





<Container>


<div

className="
grid

lg:grid-cols-2

gap-16

items-center

"

>



<motion.div

initial={{

opacity:0,

x:-60

}}

animate={{

opacity:1,

x:0

}}

transition={{

duration:.9

}}

>


<HeroContent />


</motion.div>







<motion.div

initial={{

opacity:0,

x:60

}}

animate={{

opacity:1,

x:0

}}

transition={{

duration:.9,

delay:.2

}}

>


<HeroVisual />


</motion.div>



</div>


</Container>


</Section>


);

}