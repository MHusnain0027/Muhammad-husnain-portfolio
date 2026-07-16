import ExperienceCard from "./ExperienceCard";


const experiences = [

{
duration:"2024 - Present",

role:"Security System Operator",

company:"Dubai Security Operations",

description:
"Managing security monitoring operations, CCTV surveillance, incident reporting and safety coordination.",

achievements:[

"CCTV monitoring and security system operation",

"Incident reporting and emergency response coordination",

"Fire alarm and safety system awareness"

],

skills:[

"CCTV",

"Security Systems",

"Fire Alarm"

]

},



{
duration:"2023",

role:"Security & Technical Operations",

company:"Professional Security Environment",

description:
"Supporting daily security operations with technology driven monitoring and reporting processes.",

achievements:[

"Maintained operational records",

"Supported technical security procedures",

"Improved reporting workflow"

],

skills:[

"Monitoring",

"Reporting",

"Safety"

]

}

];



export default function ExperienceTimeline(){


return (

<div

className="
relative

space-y-10

"

>


<div

className="
absolute

left-4

top-0

bottom-0

w-px

bg-gradient-to-b

from-[var(--primary)]

to-transparent

"

></div>



{

experiences.map((item)=>(


<div

key={item.role}

className="
relative

pl-12

"

>


<div

className="
absolute

left-0

top-8

w-8

h-8

rounded-full

bg-[var(--primary)]

shadow-[0_0_25px_var(--primary)]

"

></div>



<ExperienceCard

{...item}

/>



</div>


))


}



</div>

);

}