"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";


const skills = [

{
name:"CCTV Monitoring",
level:95,
category:"Security"
},

{
name:"Fire Alarm Systems",
level:90,
category:"Security"
},

{
name:"Access Control Systems",
level:85,
category:"Security"
},

{
name:"Security Operations",
level:95,
category:"Security"
},

{
name:"Incident Reporting",
level:90,
category:"Management"
},

{
name:"MS Office & Excel",
level:90,
category:"Technical"
},

{
name:"AI Tools",
level:80,
category:"Technology"
},

{
name:"Next.js Development",
level:75,
category:"Web Development"
}

];



export default function Skills(){


return (

<section

id="skills"

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

Skills & Expertise

</h2>





<div

className="
grid
md:grid-cols-2
gap-6
"

>


{

skills.map((skill,index)=>(


<motion.div


key={skill.name}


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

delay:index*.08

}}


whileHover={{

y:-6

}}


className="
glass
"

>


<div

className="
flex
justify-between
items-center
mb-4
"

>


<div>


<h3

className="
text-base
font-bold
"

>

{skill.name}

</h3>


<span

className="
text-xs
text-[#2D9C8C]
"

>

{skill.category}

</span>


</div>



<span

className="
px-3
py-1
rounded-full
bg-[#DFF6F0]
text-[#2D9C8C]
text-sm
font-bold
"

>

{skill.level}%

</span>



</div>





{/* Progress Bar */}


<div

className="
w-full
h-3
bg-slate-200
rounded-full
overflow-hidden
"

>


<motion.div


initial={{

width:0

}}


whileInView={{

width:`${skill.level}%`

}}


viewport={{

once:true

}}


transition={{

duration:1,

ease:"easeOut"

}}


className="
h-full
rounded-full
bg-[#6DD5C4]
"

></motion.div>



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