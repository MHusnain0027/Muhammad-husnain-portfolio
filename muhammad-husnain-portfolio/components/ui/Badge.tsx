import React from "react";


interface BadgeProps {

children: React.ReactNode;

className?: string;

}


export default function Badge({

children,

className=""

}:BadgeProps){


return (

<span

className={`
inline-flex
items-center
gap-2

px-4
py-2

rounded-full

text-xs
font-bold

uppercase
tracking-wider

text-[var(--primary)]

bg-[rgba(0,229,176,0.08)]

border
border-[rgba(0,229,176,0.25)]

shadow-[0_0_20px_rgba(0,229,176,.12)]

backdrop-blur

${className}

`}

>


<span

className="
w-2
h-2
rounded-full
bg-[var(--primary)]
shadow-[0_0_10px_var(--primary)]
"

/>


{children}


</span>

);

}