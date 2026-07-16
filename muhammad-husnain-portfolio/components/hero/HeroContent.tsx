import Button from "@/components/ui/Button";

import profile from "@/components/data/profile";

import TypingText from "./TypingText";
import StatusCard from "./StatusCard";
import TechStack from "./TechStack";



export default function HeroContent(){


return (

<div

className="
flex
flex-col
justify-center
"

>


<p

className="
mb-5
uppercase
tracking-[0.35em]
text-xs
font-bold
text-[var(--primary)]
"

>

Security • AI • Technology

</p>


<div

className="
inline-flex
w-fit

mb-6

px-4
py-2

rounded-full

bg-white/5

border
border-white/10

text-xs

font-bold

tracking-widest

text-[var(--primary)]

"

>

AVAILABLE FOR AI & SECURITY PROJECTS

</div>


<h1

className="
text-4xl
md:text-6xl

font-black

leading-tight

text-[var(--foreground)]

"

>

{profile.name}

</h1>






<h2

className="
mt-4

text-2xl
md:text-4xl

font-bold

"

>

<RoleText />

</h2>






<div

className="
mt-4
text-xl
"

>

<TypingText />

</div>







<p

className="
mt-6

text-[var(--text-muted)]

max-w-xl

"

>

{profile.summary}

</p>







<div

className="
mt-8

flex

flex-wrap

gap-4

"

>



<Button href="#projects">

View Projects

</Button>






<Button

href="/resume.pdf"

variant="secondary"

>

Download Resume

</Button>





</div>







<div

className="mt-10"

>

<StatusCard />

</div>







<div

className="mt-6"

>

<TechStack />

</div>






</div>

);

}






function RoleText(){


return (

<span

className="
text-[var(--primary)]

"

>

{profile.role}

</span>

);

}