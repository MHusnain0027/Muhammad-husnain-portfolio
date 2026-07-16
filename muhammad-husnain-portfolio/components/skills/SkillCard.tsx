import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";

import SkillCircle from "./SkillCircle";


interface SkillCardProps {

name:string;

level:number;

category:string;

description:string;

}



export default function SkillCard({

name,

level,

category,

description

}:SkillCardProps){


return (

<GlassCard

className="
flex
flex-col
items-center
text-center
"

>


<Badge>

{category}

</Badge>



<div className="mt-6">


<SkillCircle

name={name}

level={level}

/>


</div>



<p

className="
mt-5

text-sm

text-[var(--text-muted)]

leading-relaxed

"

>

{description}

</p>



</GlassCard>

);

}