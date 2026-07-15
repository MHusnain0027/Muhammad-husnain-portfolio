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



const contactInfo = [

{
title:"Email",
value:"your-email@example.com",
icon:<Mail size={26}/>,
link:"mailto:your-email@example.com"
},


{
title:"WhatsApp",
value:"+971 XX XXX XXXX",
icon:<Phone size={26}/>,
link:"#"
},


{
title:"LinkedIn",
value:"linkedin.com/in/your-profile",
icon:<FaLinkedin size={26}/>,
link:"#"
},


{
title:"GitHub",
value:"github.com/your-profile",
icon:<FaGithub size={26}/>,
link:"#"
},


{
title:"Location",
value:"Dubai, UAE",
icon:<MapPin size={26}/>,
link:"#"
}


];





export default function Contact(){


return (

<section

id="contact"

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

Contact Me

</h2>





<div

className="
grid
sm:grid-cols-2
lg:grid-cols-5
gap-6
"

>


{

contactInfo.map((item,index)=>(


<motion.a


href={item.link}


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
flex
flex-col
items-center
text-center
"

>


<div

className="
w-14
h-14
rounded-2xl
bg-[#DFF6F0]
flex
items-center
justify-center
text-[#2D9C8C]
mb-5
"

>

{item.icon}

</div>





<h3

className="
text-base
font-bold
"

>

{item.title}

</h3>





<p

className="
mt-3
text-sm
break-words
"

>

{item.value}

</p>



</motion.a>


))


}



</div>



</Reveal>


</div>


</section>


);

}