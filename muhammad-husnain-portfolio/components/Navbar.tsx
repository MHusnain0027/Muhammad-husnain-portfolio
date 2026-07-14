"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";


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

const [dark,setDark]=useState(false);



function toggleDark(){

document.documentElement.classList.toggle("dark");

setDark(!dark);

}



return (

<nav

className="
fixed
top-0
left-0
right-0
z-50
backdrop-blur-xl
bg-white/70
dark:bg-black/70
border-b
"

>


<div

className="
max-w-7xl
mx-auto
px-6
py-4
flex
justify-between
items-center
"

>


<h1

className="
text-2xl
font-bold
"

>

MH

</h1>



<div

className="
hidden
md:flex
gap-6
"

>

{
links.map((link)=>(

<Link

key={link.name}

href={link.href}

className="
hover:opacity-70
transition
"

>

{link.name}

</Link>

))
}


<button

onClick={toggleDark}

>

{

dark ?

<Sun />

:

<Moon />

}

</button>


</div>



<button

className="md:hidden"

onClick={()=>setOpen(!open)}

>

{

open ?

<X />

:

<Menu />

}

</button>


</div>



{
open &&

<div

className="
md:hidden
px-6
pb-6
flex
flex-col
gap-4
bg-white
dark:bg-black
"

>

{
links.map((link)=>(


<Link

key={link.name}

href={link.href}

onClick={()=>setOpen(false)}

>

{link.name}

</Link>


))
}


</div>

}



</nav>

);

}