import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";


interface ExperienceCardProps {

role:string;

company:string;

duration:string;

description:string;

achievements:string[];

skills:string[];

}



export default function ExperienceCard({

role,

company,

duration,

description,

achievements,

skills

}:ExperienceCardProps){


return (

<GlassCard

className="
relative
overflow-hidden
"

>


<div

className="
absolute
top-0
right-0

w-32
h-32

bg-[var(--primary)]

opacity-10

blur-3xl

"

></div>




<p

className="
text-sm

font-bold

text-[var(--primary)]

"

>

{duration}

</p>



<h3

className="
mt-3

text-2xl

font-black

text-[var(--foreground)]

"

>

{role}

</h3>



<p

className="
mt-1

font-semibold

text-[var(--secondary)]

"

>

{company}

</p>




<p

className="
mt-5

text-[var(--text-muted)]

leading-relaxed

"

>

{description}

</p>





<div

className="
mt-6

"

>

<h4

className="
text-sm

font-bold

uppercase

tracking-wider

text-[var(--foreground)]

mb-3

"

>

Achievements

</h4>



<ul

className="
space-y-2

text-sm

text-[var(--text-muted)]

"

>


{

achievements.map((item)=>(

<li

key={item}

className="
flex
gap-2

"

>

<span

className="
text-[var(--primary)]

"

>
✓
</span>

{item}

</li>

))

}


</ul>


</div>





<div

className="
mt-6

flex

flex-wrap

gap-2

"

>


{

skills.map((skill)=>(


<Badge

key={skill}

>

{skill}

</Badge>


))

}



</div>



</GlassCard>


);

}