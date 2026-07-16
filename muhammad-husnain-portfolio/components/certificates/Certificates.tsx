import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

import CertificateGrid from "./CertificateGrid";


export default function Certificates(){


return (

<Section

id="certificates"

>


<Container>


<Heading

eyebrow="Certificates"

title="Professional Certifications & Achievements"

description="Verified certifications representing security, safety and technical knowledge."

/>



<div

className="
mt-16

"

>


<CertificateGrid />


</div>



</Container>


</Section>

);

}