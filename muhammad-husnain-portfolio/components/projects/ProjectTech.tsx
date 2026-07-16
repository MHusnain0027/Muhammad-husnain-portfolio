import Badge from "@/components/ui/Badge";


interface ProjectTechProps {

technologies:string[];

}



export default function ProjectTech({

technologies

}:ProjectTechProps){


return (

<div

className="
flex

flex-wrap

gap-3

mt-5

"

>


{

technologies.map((tech)=>(


<Badge

key={tech}

>

{tech}

</Badge>


))


}


</div>

);

}