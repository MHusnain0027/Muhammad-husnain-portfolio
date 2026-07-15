"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";


const details = [

{
title:"Professional Role",
value:"Security System Operator | CCTV Specialist"
},

{
title:"Technical Skills",
value:"Next.js, TypeScript, Tailwind CSS & AI Tools"
},

{
title:"Certifications",
value:"SIRA Security Certification & Professional Training"
},

{
title:"Experience",
value:"Dubai Security Operations & Technology Projects"
}

];



export default function About(){


return (

<section

id="about"

className="
px-6
"

>


<div

className="
container
"

>


<Reveal>


<div

className="
grid
lg:grid-cols-2
gap-10
items-center
"

>


{/* Left Content */}

<motion.div

initial={{
opacity:0,
x:-30
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

>


<h2

className="
mb-6
"

>

About Me

</h2>



<p>

I am Muhammad Husnain, a professional Security System Operator
with experience in CCTV monitoring, control room operations,
security reporting and site management.


</p>


<p

className="
mt-5
"

>

Along with security operations, I have developed strong interest
and practical experience in modern web technologies. I build
professional websites and AI-based solutions using Next.js,
TypeScript, Tailwind CSS and modern development tools.


</p>


<p

className="
mt-5
"

>

My goal is to combine security expertise with technology
to create smart, efficient and innovative solutions.

</p>



</motion.div>





{/* Right Cards */}


<div

className="
grid
sm:grid-cols-2
gap-5
"

>


{

details.map((item,index)=>(


<motion.div


key={item.title}


initial={{

opacity:0,

y:30

}}


whileInView={{

opacity:1,

y:0

}}


viewport={{

once:true

}}


transition={{

delay:index*.1

}}


whileHover={{

y:-6

}}


className="
glass
"

>


<h3

className="
text-lg
font-bold
"

>

{item.title}

</h3>



<p

className="
mt-3
text-sm
"

>

{item.value}

</p>



</motion.div>


))

}


</div>



</div>


</Reveal>


</div>


</section>


);

}