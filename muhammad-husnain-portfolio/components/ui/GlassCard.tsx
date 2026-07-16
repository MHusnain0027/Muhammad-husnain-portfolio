import React from "react";


interface GlassCardProps {

children: React.ReactNode;

className?: string;

}


export default function GlassCard({

children,

className=""

}: GlassCardProps){


return (

<div

className={`
glass
group
relative
overflow-hidden
transition-all
duration-500
hover:-translate-y-2
hover:border-[var(--primary)]
hover:shadow-[0_0_40px_rgba(0,229,176,0.15)]
${className}
`}

>


<div

className="
absolute
inset-0
opacity-0
group-hover:opacity-100
transition
duration-500
bg-gradient-to-br
from-[rgba(0,229,176,0.08)]
via-transparent
to-[rgba(56,189,248,0.08)]
pointer-events-none
"

/>


<div className="relative z-10">

{children}

</div>


</div>

);

}