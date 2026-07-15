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

Professional Gallery

</h2>





<div

className="
grid
sm:grid-cols-2
lg:grid-cols-4
gap-6
"

>


{

gallery.map((item,index)=>(


<motion.div


key={item.title}


initial={{

opacity:0,

scale:.95

}}


whileInView={{

opacity:1,

scale:1

}}


viewport={{

once:true

}}


transition={{

delay:index*.12

}}


whileHover={{

y:-8

}}


className="
group
relative
overflow-hidden
rounded-3xl
glass
"

>





<img


src={item.image}


alt={item.title}


className="
h-80
w-full
object-cover
transition
duration-700
group-hover:scale-110
"

/>





{/* Overlay */}


<div

className="
absolute
inset-0
bg-gradient-to-t
from-black/70
via-black/10
to-transparent
flex
items-end
p-6
"

>


<div>


<p

className="
text-xs
text-[#DFF6F0]
font-semibold
"

>

{item.category}

</p>



<h3

className="
mt-2
text-white
text-lg
font-bold
"

>

{item.title}

</h3>



</div>


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