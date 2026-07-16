import GlassCard from "@/components/ui/GlassCard";


const technologies = [

"Next.js",

"React",

"TypeScript",

"AI Solutions",

"CCTV Systems",

"Fire Alarm",

"SIRA",

"Supabase"

];



export default function TechStack(){


return (

<GlassCard

className="
mt-6
"

>


<h4

className="
text-sm
font-bold
uppercase
tracking-widest
text-[var(--text-muted)]
mb-4
"

>

Technology Stack

</h4>



<div

className="
flex
flex-wrap
gap-3
"

>


{

technologies.map((tech)=>(


<span

key={tech}

className="
px-4
py-2

rounded-full

text-sm
font-semibold

bg-white/5

border
border-white/10

text-[var(--foreground)]

hover:border-[var(--primary)]
hover:text-[var(--primary)]
hover:bg-[var(--primary)]/10
hover:-translate-y-1

transition-all

duration-300

"

>

{tech}

</span>


))

}



</div>


</GlassCard>

);

}