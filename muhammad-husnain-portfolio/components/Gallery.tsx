"use client";

import { motion } from "framer-motion";

import Reveal from "./Reveal";
import GlassCard from "./ui/GlassCard";
import SectionTitle from "./ui/SectionTitle";


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

badge="GALLERY"

title="Professional Moments"

description="
A visual collection of security operations,
professional activities and career highlights.
"

/>





<div

className="
grid

md:grid-cols-2

gap-8

mt-12

"

>


{
gallery.map((item,index)=>(


<GlassCard

key={item.title}

className="
p-0
overflow-hidden

"

>


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

transition={{
duration:.5,
delay:index*.15
}}

whileHover={{
y:-8
}}

className="
relative
group
overflow-hidden

"

>


<img

src={item.image}

alt={item.title}

className="
w-full

h-80

object-cover

group-hover:scale-110

transition

duration-700

"

/>





<div

className="
absolute

inset-0

bg-gradient-to-t

from-black/80

via-black/20

to-transparent

"

></div>





<div

className="
absolute

bottom-0

left-0

right-0

p-7

text-white

"

>


<p

className="
text-sm

text-[#6DD5C4]

font-semibold

"

>

{item.category}

</p>




<h3

className="
mt-2

text-2xl

font-black

"

>

{item.title}

</h3>



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