"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import {
Menu,
X
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";



const links = [

{
name:"Home",
href:"#home"
},

{
name:"About",
href:"#about"
},

{
name:"Experience",
href:"#experience"
},

{
name:"Skills",
href:"#skills"
},

{
name:"Projects",
href:"#projects"
},

{
name:"Certificates",
href:"#certificates"
},

{
name:"Gallery",
href:"#gallery"
},

{
name:"Contact",
href:"#contact"
}

];



export default function Navbar(){


const [open,setOpen]=useState(false);

const [scrolled,setScrolled]=useState(false);



useEffect(()=>{


const handleScroll=()=>{

setScrolled(window.scrollY > 30);

};


window.addEventListener(
"scroll",
handleScroll
);


return()=>{

window.removeEventListener(
"scroll",
handleScroll
);

};


},[]);





return (

<nav

className="
fixed
top-5
left-0
right-0
z-50
px-6
"

>


<div

className={`

container

rounded-full

py-4

px-6

flex

items-center

justify-between


transition-all

duration-500


${

scrolled

?

"bg-[#050816]/80 backdrop-blur-xl shadow-[0_0_40px_rgba(0,229,176,.15)]"

:

"glass"

}


border

border-white/10


`}

>



<Link

href="#home"

className="
font-black
text-2xl
tracking-wider
text-[var(--primary)]
drop-shadow-[0_0_20px_rgba(0,229,176,.8)]
hover:scale-110
transition
"

>

MH

</Link>






<div

className="
hidden
lg:flex
items-center
gap-7
"

>


{

links.map((link)=>(


<Link

key={link.name}

href={link.href}

className="

relative

text-sm

font-semibold

text-[var(--text-muted)]

hover:text-[var(--primary)]

transition-all

duration-300

group

"

>


{link.name}



<span

className="

absolute

left-0

bottom-[-6px]

w-0

h-[2px]

bg-[var(--primary)]

transition-all

duration-300

group-hover:w-full

"

/>


</Link>


))

}


</div>







<button

onClick={()=>setOpen(!open)}

className="

lg:hidden

text-[var(--primary)]

hover:scale-110

transition

"

>

{

open

?

<X size={28}/>

:

<Menu size={28}/>

}

</button>





</div>







<AnimatePresence>


{

open &&


<motion.div


initial={{

opacity:0,

y:-20,

scale:.95

}}


animate={{

opacity:1,

y:0,

scale:1

}}


exit={{

opacity:0,

y:-20,

scale:.95

}}


transition={{

duration:.25

}}



className="

lg:hidden

container

glass

mt-4

rounded-3xl

p-6

flex

flex-col

gap-5

border

border-white/10

"

>


{

links.map((link,index)=>(


<motion.div

key={link.name}

initial={{

opacity:0,

x:-20

}}

animate={{

opacity:1,

x:0

}}

transition={{

delay:index*.05

}}

>


<Link


href={link.href}

onClick={()=>setOpen(false)}


className="

text-[var(--text-muted)]

hover:text-[var(--primary)]

font-semibold

transition

"

>

{link.name}

</Link>


</motion.div>


))


}



</motion.div>


}


</AnimatePresence>



</nav>

);

}