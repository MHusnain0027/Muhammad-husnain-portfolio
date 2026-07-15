"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Download,
  Printer
} from "lucide-react";

import Reveal from "./Reveal";



export default function Resume(){


return (

<section

id="resume"

className="
px-6
"

>


<div

className="
container
max-w-4xl
"

>


<Reveal>


<motion.div


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


whileHover={{

y:-6

}}


className="
glass
text-center
"

>





<div

className="
w-16
h-16
mx-auto
rounded-2xl
bg-[#DFF6F0]
flex
items-center
justify-center
mb-6
"

>

<FileText

size={32}

className="
text-[#2D9C8C]
"

/>

</div>





<h2>

Professional Resume

</h2>





<p

className="
mx-auto
mt-5
"

>

Explore my professional background including security operations,
CCTV monitoring, SIRA certification, technical skills,
web development projects and AI-based solutions.

</p>





<div

className="
mt-8
grid
sm:grid-cols-3
gap-4
"

>


<div className="glass">

<h3>

5+

</h3>

<p>

Years Experience

</p>

</div>



<div className="glass">

<h3>

UAE

</h3>

<p>

Professional Experience

</p>

</div>



<div className="glass">

<h3>

AI + Web

</h3>

<p>

Technology Skills

</p>

</div>


</div>





<div

className="
mt-10
flex
flex-col
sm:flex-row
justify-center
gap-4
"

>



<a

href="/resume/Muhammad-Husnain-CV.pdf"

target="_blank"

className="
btn-primary
flex
items-center
justify-center
gap-2
"

>

<FileText size={18}/>

View Resume

</a>





<a

href="/resume/Muhammad-Husnain-CV.pdf"

download

className="
btn-secondary
flex
items-center
justify-center
gap-2
"

>


<Download size={18}/>

Download CV

</a>





<button

onClick={()=>window.print()}

className="
btn-secondary
flex
items-center
justify-center
gap-2
"

>

<Printer size={18}/>

Print

</button>



</div>





</motion.div>


</Reveal>


</div>


</section>


);

}