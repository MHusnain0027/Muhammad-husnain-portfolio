import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";


const skillGroups = [

{
title:"Security Operations",

skills:[

"CCTV Monitoring",

"Incident Reporting",

"Access Control",

"Security Procedures"

]

},


{
title:"Safety Systems",

skills:[

"Fire Alarm Systems",

"Emergency Response",

"Safety Coordination"

]

},


{
title:"Technology",

skills:[

"Next.js",

"React",

"TypeScript",

"Supabase",

"AI Solutions"

]

}

];



export default function ExperienceSkills(){


return (

<div

className="
grid

md:grid-cols-3

gap-6

"

>


{

skillGroups.map((group)=>(


<GlassCard

key={group.title}

>


<h3

className="
text-lg

font-black

text-[var(--foreground)]

mb-5

"

>

{group.title}

</h3>



<div

className="
flex

flex-wrap

gap-3

"

>


{

group.skills.map((skill)=>(


<Badge

key={skill}

>

{skill}

</Badge>


))


}



</div>



</GlassCard>


))


}


</div>

);

}