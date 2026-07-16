import React from "react";


interface HeadingProps {

eyebrow?: string;

title: string;

description?: string;

className?: string;

}


export default function Heading({

eyebrow,

title,

description,

className=""

}:HeadingProps){


return (

<div

className={`
mb-12
${className}
`}

>


{

eyebrow &&

<p

className="
uppercase
tracking-[0.3em]
text-xs
font-bold
text-[var(--primary)]
mb-4
"

>

{eyebrow}

</p>

}



<h2

className="
text-3xl
md:text-5xl
font-black
tracking-tight
text-[var(--foreground)]
"

>

{title}

</h2>



{

description &&

<p

className="
mt-5
text-[var(--text-muted)]
max-w-2xl
"

>

{description}

</p>

}



</div>

);

}