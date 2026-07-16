interface CertificateVerifyProps {

text?:string;

}



export default function CertificateVerify({

text="Verified Certificate"

}:CertificateVerifyProps){


return (

<div

className="
inline-flex

items-center

gap-2

px-4

py-2

rounded-full

border

border-[var(--primary)]

bg-[rgba(0,229,176,.08)]

"

>


<span

className="
w-2

h-2

rounded-full

bg-[var(--primary)]

shadow-[0_0_10px_var(--primary)]

"

></span>



<p

className="
text-sm

font-bold

text-[var(--primary)]

"

>

{text}

</p>



</div>

);

}