import GlassCard from "@/components/ui/GlassCard";


const timeline = [

{
year:"2024 - Present",
title:"Security System Operator",
description:
"Managing security operations, CCTV monitoring, incident reporting and safety procedures."
},


{
year:"2023",
title:"Security Technology Experience",
description:
"Working with surveillance systems, fire safety operations and technical monitoring."
},


{
year:"2022",
title:"Technology Development Journey",
description:
"Started exploring web development, automation and modern AI technologies."
}

];



export default function Timeline(){


return (

<div

className="
relative
space-y-8

"

>


<div

className="
absolute
left-4
top-0
bottom-0

w-px

bg-gradient-to-b

from-[var(--primary)]

to-transparent

"

/>



{

timeline.map((item)=>(


<div

key={item.year}

className="
relative
pl-12

"

>


<div

className="
absolute
left-0
top-6

w-8
h-8

rounded-full

bg-[var(--primary)]

shadow-[0_0_25px_var(--primary)]

"

></div>



<GlassCard>


<p

className="
text-sm
font-bold

text-[var(--primary)]

"

>

{item.year}

</p>



<h3

className="
mt-2

text-xl

font-black

text-[var(--foreground)]

"

>

{item.title}

</h3>



<p

className="
mt-3

text-[var(--text-muted)]

"

>

{item.description}

</p>


</GlassCard>


</div>


))


}


</div>

);

}