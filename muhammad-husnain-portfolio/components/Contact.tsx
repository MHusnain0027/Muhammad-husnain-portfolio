"use client";

import { motion } from "framer-motion";

import {
  Mail,
  Phone,
  MapPin
} from "lucide-react";

import {
  FaLinkedin,
  FaGithub
} from "react-icons/fa";


import Reveal from "./Reveal";
import GlassCard from "./ui/GlassCard";
import SectionTitle from "./ui/SectionTitle";



const contactInfo = [

  {
    title:"Email",
    value:"your-email@example.com",
    link:"mailto:your-email@example.com",
    icon:<Mail size={28}/>
  },


  {
    title:"WhatsApp",
    value:"+971 XX XXX XXXX",
    link:"#",
    icon:<Phone size={28}/>
  },


  {
    title:"LinkedIn",
    value:"linkedin.com/in/your-profile",
    link:"#",
    icon:<FaLinkedin size={28}/>
  },


  {
    title:"GitHub",
    value:"github.com/your-profile",
    link:"#",
    icon:<FaGithub size={28}/>
  },


  {
    title:"Location",
    value:"Dubai, UAE",
    link:"#",
    icon:<MapPin size={28}/>
  }

];



export default function Contact(){


return (

<section

id="contact"

className="
px-6
py-24

"

>


<div

className="
max-w-6xl
mx-auto

"

>


<Reveal>


<SectionTitle

badge="CONTACT"

title="Let's Connect"

description="
Feel free to connect for security operations,
technology projects and professional opportunities.
"

/>





<div

className="
grid

sm:grid-cols-2

lg:grid-cols-3

gap-6

mt-12

"

>


{
contactInfo.map((item,index)=>(


<GlassCard

key={item.title}

className="
p-7

"

>


<motion.a

href={item.link}

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
duration:.4,
delay:index*.1
}}

whileHover={{
y:-8
}}

className="
block

"

>


<div

className="
w-14
h-14

rounded-2xl

bg-[#DFF6F0]

text-[#0f766e]

flex
items-center
justify-center

mb-5

"

>

{item.icon}

</div>




<h3

className="
text-xl

font-bold

text-slate-900

"

>

{item.title}

</h3>




<p

className="
mt-3

text-slate-600

break-words

"

>

{item.value}

</p>



</motion.a>


</GlassCard>


))

}


</div>





<GlassCard

className="
mt-10
p-8
text-center

"

>


<h3

className="
text-2xl

font-black

text-slate-900

"

>

Available For Opportunities

</h3>



<p

className="
mt-3

text-slate-600

"

>

Open to security technology projects,
AI solutions and web development opportunities.

</p>



</GlassCard>



</Reveal>


</div>


</section>

)

}