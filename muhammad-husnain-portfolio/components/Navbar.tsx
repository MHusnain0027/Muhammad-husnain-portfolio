"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


const links = [
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
    name:"Contact",
    href:"#contact"
  }
];


export default function Navbar(){


const [open,setOpen]=useState(false);



return (

<header className="
fixed
top-5
left-0
right-0
z-50
px-4
">


<motion.nav

initial={{
opacity:0,
y:-30
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.6
}}

className="
max-w-7xl
mx-auto

flex
items-center
justify-between

rounded-3xl

bg-white/60

backdrop-blur-xl

border
border-[#6DD5C4]/30

shadow-lg

px-6
py-4

"

>


<Link href="#home">

<div className="
text-3xl
font-black
tracking-wider
">

<span className="text-slate-900">
M
</span>

<span className="text-[#6DD5C4]">
H
</span>


</div>

</Link>





<nav className="
hidden
md:flex
items-center
gap-8
">


{
links.map((link)=>(

<Link

key={link.name}

href={link.href}

className="
text-slate-600
font-medium
transition
hover:text-[#0f766e]
"

>

{link.name}

</Link>

))

}


</nav>





<div className="
hidden
md:block
">


<Link

href="#resume"

className="
flex
items-center
gap-2

rounded-full

bg-[#6DD5C4]

px-6
py-3

font-semibold

text-slate-900

hover:bg-[#52c7b3]

transition
"

>

Resume

<ArrowUpRight size={17}/>

</Link>


</div>





<button

onClick={()=>setOpen(!open)}

className="
md:hidden
text-slate-800
"

>

{

open ?

<X size={28}/>

:

<Menu size={28}/>

}

</button>




</motion.nav>





<AnimatePresence>


{
open && (

<motion.div

initial={{
opacity:0,
y:-20
}}

animate={{
opacity:1,
y:0
}}

exit={{
opacity:0,
y:-20
}}

className="
md:hidden

mt-3

rounded-3xl

bg-white/80

backdrop-blur-xl

border
border-[#6DD5C4]/30

p-6

shadow-xl

"

>


<div className="
flex
flex-col
gap-5
">


{
links.map((link)=>(


<Link

key={link.name}

href={link.href}

onClick={()=>setOpen(false)}

className="
text-slate-700
font-medium
"

>

{link.name}

</Link>


))

}


<Link

href="#resume"

className="
rounded-full
bg-[#6DD5C4]
py-3
text-center
font-semibold
"

>

Download Resume

</Link>


</div>


</motion.div>

)
}

</AnimatePresence>



</header>

)

}