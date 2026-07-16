import GlassCard from "@/components/ui/GlassCard";

import profile from "@/components/data/profile";



const stats = [

{
number: profile.experienceYears,
label:"Years Experience",
description:"Security Operations"
},


{
number:"10+",
label:"Certificates",
description:"Professional Training"
},


{
number:profile.projectsCount,
label:"Technology Projects",
description:"AI & Web Development"
},


{
number:"24/7",
label:"Monitoring",
description:"Security Mindset"
}


];



export default function AboutStats(){


return (

<div

className="
grid

grid-cols-2

gap-5

"

>


{

stats.map((item)=>(


<GlassCard

key={item.label}

className="
text-center
"

>


<h3

className="
text-4xl

font-black

text-[var(--primary)]

"

>

{item.number}

</h3>




<p

className="
mt-3

font-bold

text-[var(--foreground)]

"

>

{item.label}

</p>




<p

className="
mt-1

text-sm

text-[var(--text-muted)]

"

>

{item.description}

</p>



</GlassCard>


))


}



</div>

);

}