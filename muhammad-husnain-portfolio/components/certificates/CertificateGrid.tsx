import CertificateCard from "./CertificateCard";

import certificates from "@/components/data/certificates";


export default function CertificateGrid(){


return (

<div

className="
grid

md:grid-cols-2

gap-8

"

>


{

certificates.map((certificate)=>(


<CertificateCard

key={certificate.title}

{...certificate}

/>


))


}



</div>

);

}