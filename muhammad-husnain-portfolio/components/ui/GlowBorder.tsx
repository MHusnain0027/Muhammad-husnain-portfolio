import React from "react";


interface GlowBorderProps {

children: React.ReactNode;

className?: string;

}


export default function GlowBorder({

children,

className=""

}:GlowBorderProps){


return (

<div

className={`
relative
rounded-3xl
p-[1px]

bg-gradient-to-r
from-[var(--primary)]
via-[var(--accent)]
to-[var(--primary)]

${className}

`}

>


<div

className="
rounded-3xl
bg-[var(--surface)]
h-full
w-full
"

>

{children}

</div>


</div>

);

}