"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";


const certificates = [

{
title:"SIRA Security Certification",
issuer:"Security Industry Regulatory Agency",
image:"/certificates/sira.jpg"
},


{
title:"CCTV Operator Training",
issuer:"Security System Training",
image:"/certificates/cctv.jpg"
},


{
title:"Fire & Safety Training",
issuer:"Safety Certification",
image:"/certificates/fire-safety.jpg"
},


{
title:"AI & Web Development",
issuer:"Technology Learning",
image:"/certificates/ai-web.jpg"
}

];



export default function Certificates(){


return (

<section

id="certificates"

className="
px-6
py-24
bg-white
dark:bg-black
"

>


<div
className="
max-w-6xl
mx-auto
"
>


<Reveal>


<h2

className="
text-4xl
md:text-5xl
font-bold
mb-12
"

>

Certificates

</h2>



<div

className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-8
"

>


{
certificates.map((certificate,index)=>(


<motion.div

key={certificate.title}


initial={{
opacity:0,
scale:0.8
}}

whileInView={{
opacity:1,
scale:1
}}

viewport={{
once:true
}}

transition={{
delay:index*0.15
}}

whileHover={{
scale:1.05
}}

className="
rounded-3xl
overflow-hidden
bg-gray-100
dark:bg-white/10
border
shadow-xl
"

>


<div
className="
h-52
overflow-hidden
"
>


<img

src={certificate.image}

alt={certificate.title}

className="
w-full
h-full
object-cover
hover:scale-110
transition
"

/>


</div>



<div
className="
p-6
"
>


<h3
className="
font-bold
text-lg
"
>

{certificate.title}

</h3>



<p
className="
text-gray-500
mt-2
"
>

{certificate.issuer}

</p>


</div>



</motion.div>


))
}



</div>


</Reveal>


</div>


</section>

);

}