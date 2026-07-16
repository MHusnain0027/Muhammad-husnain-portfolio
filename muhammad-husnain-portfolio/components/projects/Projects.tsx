import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

import ProjectGrid from "./ProjectGrid";



export default function Projects(){


return (

<Section

id="projects"

>


<Container>



<Heading

eyebrow="Projects"

title="Featured Projects & Digital Solutions"

description="A collection of security, AI and web development projects built with modern technologies."

/>



<div

className="
mt-16

"

>


<ProjectGrid />


</div>



</Container>


</Section>

);

}