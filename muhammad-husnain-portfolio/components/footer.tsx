"use client";


import {
Mail
} from "lucide-react";


import {
FaGithub,
FaLinkedin
} from "react-icons/fa";



export default function Footer(){


return (

<footer

className="
px-6
pb-10
"

>


<div

className="
container
"

>


<div

className="
glass
rounded-3xl
p-8
text-center
"

>


<h2

className="
text-2xl
font-black
text-[#2D9C8C]
"

>

Muhammad Husnain

</h2>




<p

className="
mt-3
mx-auto
"

>

Security System Operator | CCTV Specialist |
AI Enthusiast | Web Developer

</p>





<div

className="
mt-6
flex
justify-center
gap-4
"

>



<a

href="#"

className="
w-12
h-12
rounded-full
bg-[#DFF6F0]
flex
items-center
justify-center
text-[#2D9C8C]
hover:-translate-y-1
transition
"

>

<FaLinkedin size={20}/>

</a>





<a

href="#"

className="
w-12
h-12
rounded-full
bg-[#DFF6F0]
flex
items-center
justify-center
text-[#2D9C8C]
hover:-translate-y-1
transition
"

>

<FaGithub size={20}/>

</a>





<a

href="mailto:your-email@example.com"

className="
w-12
h-12
rounded-full
bg-[#DFF6F0]
flex
items-center
justify-center
text-[#2D9C8C]
hover:-translate-y-1
transition
"

>

<Mail size={20}/>

</a>




</div>






<div

className="
mt-8
pt-6
border-t
border-[#6DD5C4]/30
"

>


<p

className="
text-sm
"

>

© 2026 Muhammad Husnain. All Rights Reserved.

</p>


</div>



</div>


</div>


</footer>

);

}