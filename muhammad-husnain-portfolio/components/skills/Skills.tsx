import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

import skills from "@/components/data/skills";

import SkillCategory from "./SkillCategory";


export default function Skills(){


return (

<Section

id="skills"

>


<Container>


<Heading

eyebrow="Skills"

title="Technical Expertise & Professional Capabilities"

description="A combination of security operations knowledge and modern technology skills."

/>




<div

className="
space-y-20

mt-16

"

>


{

skills.map((category)=>(


<SkillCategory

key={category.category}

title={category.category}

skills={category.skills}

/>


))


}



</div>


</Container>


</Section>

);

}