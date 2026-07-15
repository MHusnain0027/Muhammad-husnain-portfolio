"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";


const experiences = [

{
year:"2026",
role:"Security System Operator",
company:"Security Operations & Control Room",
description:
"CCTV monitoring, incident reporting, security system handling and daily operational support."
},


{
year:"2025",
role:"Security Operations Support",
company:"Expo City Dubai",
description:
"Supported professional security operations, monitoring activities and site safety procedures."
},


{
year:"2024",
role:"Event Security Operations",
company:"COP28 & Major Events Support",
description:
"Provided security support during large-scale events with focus on safety and coordination."
},


{
year:"2023",
role:"Security Monitoring & Reporting",
company:"Dubai Rugby Sevens",
description:
"Handled monitoring, reporting and communication responsibilities during major events."
},


{
year:"Previous",
role:"Data Management",
company:"Reports, Records & System Handling",
description:
"Managed documentation, data entry, reporting and administrative system tasks."
}

];



export default function Experience(){


return (

<section

id="experience"

className="
px-6
"

>


<div

className="
container
max-w-5xl
"

>


<Reveal>


<h2

className="
text-center
mb-16
"

>

Experience

</h2>




<div

className="
relative
"

>


{/* Timeline Line */}

<div

className="
absolute
left-4
md:left-1/2
top-0
bottom-0
w-[2px]
bg-[#6DD5C4]
"

></div>




{

experiences.map((item,index)=>(


<motion.div


key={item.year}


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

duration:.5,

delay:index*.1

}}


className="
relative
mb-12
"

>



{/* Dot */}

<div

className="
absolute
left-[6px]
md:left-1/2
md:-translate-x-1/2
top-8
w-5
h-5
rounded-full
bg-[#6DD5C4]
border-4
border-white
shadow-lg
"

></div>





{/* Card */}


<div

className={`
glass
ml-12
md:ml-0
md:w-[45%]

${

index % 2 === 0

?

"md:mr-auto"

:

"md:ml-auto"

}

`}

>


<span

className="
text-sm
font-bold
text-[#2D9C8C]
"

>

{item.year}

</span>




<h3

className="
mt-3
"

>

{item.role}

</h3>




<h4

className="
mt-2
text-base
font-semibold
"

>

{item.company}

</h4>




<p

className="
mt-4
text-sm
"

>

{item.description}

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