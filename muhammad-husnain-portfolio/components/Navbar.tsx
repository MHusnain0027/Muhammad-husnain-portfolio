"use client";

import { useState } from "react";
import Link from "next/link";
import {
Menu,
X,
Moon,
Sun
} from "lucide-react";


const links=[

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



function toggleTheme(){

document.documentElement.classList.toggle("dark");

setDark(!dark);

}



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

className="
container
glass
rounded-full
py-4
px-6
flex
items-center
justify-between
"

>


<h1

className="
font-black
text-xl
text-[#2D9C8C]
"

>

MH

</h1>





<div

className="
hidden
lg:flex
items-center
gap-6
"

>


{

links.map((link)=>(


<Link

key={link.name}

href={link.href}

className="
text-sm
font-semibold
hover:text-[#2D9C8C]
transition
"

>

{link.name}

</Link>


))


}



<button

onClick={toggleTheme}

className="
ml-4
"

>

{

dark ?

<Sun size={20}/>

:

<Moon size={20}/>

}


</button>


</div>





<button

className="
lg:hidden
"

onClick={()=>setOpen(!open)}

>

{

open ?

<X/>

:

<Menu/>

}


</button>



</div>






{

open &&

<div

className="
lg:hidden
container
glass
mt-3
rounded-3xl
p-6
flex
flex-col
gap-4
"

>


{

links.map((link)=>(


<Link

key={link.name}

href={link.href}

onClick={()=>setOpen(false)}

className="
font-semibold
"

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