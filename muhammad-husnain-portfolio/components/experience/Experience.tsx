import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

import ExperienceTimeline from "./ExperienceTimeline";
import ExperienceSkills from "./ExperienceSkills";


export default function Experience(){


return (

<Section

id="experience"

>


<Container>



<Heading

eyebrow="Experience"

title="Professional Journey & Technical Growth"

description="A combination of security operations experience and modern technology development."

/>





<div

className="
mt-16

"

>


<ExperienceTimeline />


</div>





<div

className="
mt-20

"

>


<ExperienceSkills />


</div>



</Container>


</Section>

);

}