import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import AboutContent from "./AboutContent";
import AboutStats from "./AboutStats";
import AboutVisual from "./AboutVisual";
import Timeline from "./Timeline";


export default function About(){


return (

<Section

id="about"

>


<Container>



<div

className="
grid

lg:grid-cols-2

gap-16

items-center

"

>


<div>


<AboutContent />


<div className="mt-10">

<AboutStats />

</div>


</div>





<div>


<AboutVisual />


</div>



</div>





<div

className="
mt-20

"

>


<Timeline />


</div>



</Container>


</Section>

);

}