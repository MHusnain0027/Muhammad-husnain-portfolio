"use client";

import { motion } from "framer-motion";

import Reveal from "./Reveal";
import GlassCard from "./ui/GlassCard";
import SectionTitle from "./ui/SectionTitle";


const certificates = [

  {
    title:"SIRA Security Certification",
    issuer:"Security Industry Regulatory Agency - Dubai",
    image:"/certificates/sira.jpg"
  },


  {
    title:"Security System Operator Certificate",
    issuer:"Security Operations & Control Room Training",
    image:"/certificates/security-operator.jpg"
  },


  {
    title:"CCTV Operator Training Certificate",
    issuer:"Security System Monitoring Training",
    image:"/certificates/cctv.jpg"
  },


  {
    title:"Fire & Safety Training Certificate",
    issuer:"Fire Safety Awareness & Emergency Response",
    image:"/certificates/fire-safety.jpg"
  },


  {
    title:"Microsoft Office Certificate",
    issuer:"MS Office, Excel & Data Management Skills",
    image:"/certificates/microsoft-office.jpg"
  },


  {
    title:"Web Development Certificate",
    issuer:"HTML, CSS, JavaScript, React & Next.js Development",
    image:"/certificates/web-development.jpg"
  },


  {
    title:"AI & Technology Certificate",
    issuer:"Artificial Intelligence & Modern Technology Learning",
    image:"/certificates/ai-web.jpg"
  },


  {
    title:"UAE Professional Training",
    issuer:"Workplace Safety & Professional Development",
    image:"/certificates/uae-training.jpg"
  }

];



export default function Certificates(){


return (

<section

id="certificates"

className="
px-6
py-24

"

>


<div

className="
max-w-7xl
mx-auto

"

>


<Reveal>


<SectionTitle

badge="CERTIFICATIONS"

title="Professional Certificates & Training"

description="
Recognized certifications covering security operations,
technology skills and professional development.
"

/>




<div

className="
grid

sm:grid-cols-2

lg:grid-cols-4

gap-8

mt-12

"

>


{
certificates.map((certificate,index)=>(


<GlassCard

key={certificate.title}

className="
overflow-hidden
p-0

"

>


<motion.div

initial={{
opacity:0,
scale:.85
}}

whileInView={{
opacity:1,
scale:1
}}

viewport={{
once:true
}}

transition={{
duration:.5,
delay:index*.1
}}

whileHover={{
y:-8
}}

>


<div

className="
h-52
overflow-hidden

bg-[#DFF6F0]

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

duration-500

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
text-lg

font-bold

text-slate-900

"

>

{certificate.title}

</h3>




<p

className="
mt-3

text-sm

text-slate-600

leading-relaxed

"

>

{certificate.issuer}

</p>



</div>


</motion.div>


</GlassCard>


))

}


</div>



</Reveal>


</div>


</section>

)

}