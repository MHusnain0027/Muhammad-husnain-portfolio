import Image from "next/image";

import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";

import CertificateVerify from "./CertificateVerify";


interface CertificateCardProps {

title:string;

organization:string;

image:string;

description:string;

skills:string[];

download?:string;

}



export default function CertificateCard({

title,

organization,

image,

description,

skills,

download

}:CertificateCardProps){


return (

<GlassCard

className="
overflow-hidden
"

>


<div

className="
relative

h-56

rounded-2xl

overflow-hidden

"

>


<Image

src={image}

alt={title}

fill

sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

className="
object-cover
"

/>


</div>




<div className="mt-6">


<CertificateVerify />



<h3

className="
mt-5

text-2xl

font-black

text-[var(--foreground)]

"

>

{title}

</h3>



<p

className="
mt-2

font-semibold

text-[var(--secondary)]

"

>

{organization}

</p>




<p

className="
mt-4

text-[var(--text-muted)]

leading-relaxed

"

>

{description}

</p>





<div

className="
mt-5

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





{

download && (

<a

href={download}

download

className="
inline-block

mt-6

px-6

py-3

rounded-full

bg-[var(--primary)]

text-black

font-bold

"

>

Download Certificate

</a>

)

}



</div>



</GlassCard>

);

}