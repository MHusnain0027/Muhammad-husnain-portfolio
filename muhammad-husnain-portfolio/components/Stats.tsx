"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";


const stats = [

{
number:"5+",
title:"Years Experience",
description:"Security Operations & Site Management"
},

{
number:"24/7",
title:"Monitoring",
description:"CCTV & Control Room Operations"
},

{
number:"10+",
title:"Projects",
description:"Security & Technology Solutions"
},

{
number:"UAE",
title:"Professional Experience",
description:"Dubai Security Environment"
}

];



export default function Stats(){


return (

<section

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


<div

className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-6
"

>


{

stats.map((item,index)=>(


<motion.div


key={item.title}


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

delay:index*.1

}}


whileHover={{

y:-8

}}


className="
glass
min-h-[220px]
flex
flex-col
justify-center
items-center
text-center
"

>


<h3

className="
text-4xl
md:text-5xl
font-black
gradient-text
"

>

{item.number}

</h3>



<h4

className="
mt-4
text-lg
font-bold
"

>

{item.title}

</h4>



<p

className="
mt-3
text-sm
"

>

{item.description}

</p>



</motion.div>


))

}


</div>


</Reveal>


</div>


</section>


);

}