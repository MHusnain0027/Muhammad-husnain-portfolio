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

import profile from "@/data/profile";
import social from "@/data/social";



export default function Contact(){


const contactInfo = [

{
title:"Email",
value:profile.email,
icon:<Mail size={26}/>,
link:`mailto:${profile.email}`
},


{
title:"WhatsApp",
value:profile.phone,
icon:<Phone size={26}/>,
link:social.find(item=>item.name==="WhatsApp")?.url || "#"
},


{
title:"LinkedIn",
value:"LinkedIn Profile",
icon:<FaLinkedin size={26}/>,
link:social.find(item=>item.name==="LinkedIn")?.url || "#"
},


{
title:"GitHub",
value:"GitHub Profile",
icon:<FaGithub size={26}/>,
link:social.find(item=>item.name==="GitHub")?.url || "#"
},


{
title:"Location",
value:profile.location,
icon:<MapPin size={26}/>,
link:"#"
}


];



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