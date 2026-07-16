import Button from "@/components/ui/Button";


interface ProjectLinksProps {

github?:string;

demo?:string;

}



export default function ProjectLinks({

github,

demo

}:ProjectLinksProps){


return (

<div

className="
flex

flex-wrap

gap-4

mt-6

"

>


{

github && (

<a

href={github}

target="_blank"

rel="noopener noreferrer"

>

<Button>

GitHub ↗

</Button>

</a>

)

}




{

demo && (

<a

href={demo}

target="_blank"

rel="noopener noreferrer"

>

<Button>

Live Demo ↗

</Button>

</a>

)

}



</div>

);

}