"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";


const certificates = [

{
title:"SIRA Security Certification",
issuer:"Security Industry Regulatory Agency - Dubai",
category:"Security",
image:"/certificates/sira.jpg"
},


{
title:"Security System Operator Certificate",
issuer:"Professional Security System Training",
category:"Security Operations",
image:"/certificates/security-system.jpg"
},


{
title:"CCTV Operator Certification",
issuer:"CCTV Monitoring & Surveillance Training",
category:"CCTV",
image:"/certificates/cctv.jpg"
},


{
title:"Microsoft Office Certification",
issuer:"MS Office, Excel & Data Management Training",
category:"Technical Skills",
image:"/certificates/microsoft.jpg"
},


{
title:"Fire & Safety Training Certificate",
issuer:"Fire Safety Awareness & Emergency Response",
category:"Safety",
image:"/certificates/fire-safety.jpg"
},


{
title:"Web Development Certificate",
issuer:"Modern Web Development - Next.js & Frontend Technologies",
category:"Development",
image:"/certificates/web-development.jpg"
}


];




export default function Certificates(){


return (

<section

id="certificates"

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


<h2

className="
text-center
mb-14
"

>

Certificates & Achievements

</h2>





<div

className="
grid
sm:grid-cols-2
lg:grid-cols-3
gap-8
"

>


{

certificates.map((certificate,index)=>(


<motion.div


key={certificate.title}


initial={{

opacity:0,

y:40

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

y:-8

}}


className="
glass
overflow-hidden
flex
flex-col
"

>





{/* Certificate Image */}


<div

className="
h-48
overflow-hidden
rounded-2xl
mb-5
"

>


<img

src={certificate.image}

alt={certificate.title}

className="
w-full
h-full
object-cover
transition
duration-500
hover:scale-110
"

/>


</div>





{/* Content */}


<div

className="
flex
flex-col
flex-1
"

>


<span

className="
text-xs
font-bold
text-[#2D9C8C]
"

>

{certificate.category}

</span>





<h3

className="
mt-3
text-lg
font-bold
"

>

{certificate.title}

</h3>





<p

className="
mt-3
text-sm
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