"use client";


import {

Mail

} from "lucide-react";


import {

FaGithub,
FaLinkedin

} from "react-icons/fa";


import {

motion

} from "framer-motion";


import profile from "@/data/profile";
import social from "@/data/social";



export default function Footer(){



const linkedin =
social.find(item=>item.name==="LinkedIn")?.url || "#";


const github =
social.find(item=>item.name==="GitHub")?.url || "#";


const email =
social.find(item=>item.name==="Email")?.url || "#";





const socials = [

{

name:"LinkedIn",

url:linkedin,

icon:<FaLinkedin size={22}/>

},


{

name:"GitHub",

url:github,

icon:<FaGithub size={22}/>

},


{

name:"Email",

url:email,

icon:<Mail size={22}/>

}


];





return (


<footer

className="
px-6
pb-10
relative
overflow-hidden
"

>


{/* Glow */}

<div

className="
absolute
left-1/2
-translate-x-1/2

bottom-0

w-[500px]
h-[300px]

bg-[var(--primary)]

opacity-10

blur-[120px]

"

/>





<div

className="
container
relative
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

duration:.8

}}



className="

glass

rounded-3xl

p-10

text-center

border

border-white/10

"

>





<h2

className="
text-3xl
font-black
text-[var(--primary)]
drop-shadow-[0_0_20px_rgba(0,229,176,.5)]
"

>

{profile.name}

</h2>





<p

className="
mt-4
text-[var(--text-muted)]
"

>

{profile.role}

</p>





<p

className="
mt-3
text-sm
text-[var(--text-muted)]
"

>

Security Operations • AI Solutions • Modern Web Development

</p>







<div

className="
mt-8
flex
justify-center
gap-5
"

>


{

socials.map((item,index)=>(


<motion.a


key={item.name}


href={item.url}


target="_blank"


rel="noopener noreferrer"


initial={{

opacity:0,

y:20

}}


whileInView={{

opacity:1,

y:0

}}


transition={{

delay:index*.15

}}



whileHover={{

y:-8,

scale:1.08

}}



className="

w-14

h-14

rounded-full

bg-white/5

border

border-white/10

flex

items-center

justify-center


text-[var(--primary)]


hover:border-[var(--primary)]

hover:shadow-[0_0_30px_rgba(0,229,176,.35)]


transition-all

"

>


{item.icon}


</motion.a>


))


}



</div>








<div

className="
mt-10
pt-6
border-t
border-white/10
"

>


<p

className="
text-sm
text-[var(--text-muted)]
"

>

© 2026 {profile.name}. All Rights Reserved.

</p>


<p

className="
mt-2
text-xs
text-[var(--text-muted)]
"

>

Built with Next.js • React • TypeScript • AI

</p>


</div>






</motion.div>


</div>


</footer>


);

}