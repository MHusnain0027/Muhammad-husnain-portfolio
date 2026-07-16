import React from "react";
import Link from "next/link";


interface ButtonProps {

children: React.ReactNode;

href?: string;

variant?: "primary" | "secondary";

className?: string;

}


export default function Button({

children,

href,

variant="primary",

className=""

}:ButtonProps){


const styles = `

inline-flex
items-center
justify-center
gap-2

px-7
py-3

rounded-full

font-bold

transition-all
duration-300

hover:-translate-y-1

${

variant==="primary"

?

`
bg-[var(--primary)]
text-[#022c22]

shadow-[0_0_25px_rgba(0,229,176,.35)]

hover:shadow-[0_0_45px_rgba(0,229,176,.6)]

`

:

`

border
border-white/20

text-[var(--foreground)]

bg-white/5

backdrop-blur

hover:border-[var(--primary)]

hover:text-[var(--primary)]

`

}

${className}

`;



if(href){

return (

<Link

href={href}

className={styles}

>

{children}

</Link>

);

}



return (

<button

className={styles}

>

{children}

</button>

);


}