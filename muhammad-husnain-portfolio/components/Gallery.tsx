"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";


const gallery = [

{
title:"Security Control Room",
category:"CCTV Monitoring",
image:"/images/control-room.jpg"
},


{
title:"Security Operations",
category:"Site Security",
image:"/images/security.jpg"
},


{
title:"Major Events",
category:"Event Security",
image:"/images/events.jpg"
},


{
title:"Professional Work",
category:"Career Gallery",
image:"/images/work.jpg"
}

];



export default function Gallery(){


return (

<section

id="gallery"

className="
px-6
py-24
bg-gray-50
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

Gallery

</h2>



<div

className="
grid
md:grid-cols-2
gap-8
"

>


{
gallery.map((item,index)=>(


<motion.div

key={item.title}


initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
delay:index*0.15
}}

whileHover={{
scale:1.03
}}

className="
relative
overflow-hidden
rounded-3xl
border
shadow-xl
group
"

>


<img

src={item.image}

alt={item.title}

className="
w-full
h-72
object-cover
group-hover:scale-110
transition
duration-500
"

/>



<div

className="
absolute
bottom-0
left-0
right-0
p-6
bg-black/70
text-white
"

>


<p
className="
text-sm
text-gray-300
"
>

{item.category}

</p>



<h3

className="
text-2xl
font-bold
"

>

{item.title}

</h3>


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