import SkillCard from "./SkillCard";


interface SkillCategoryProps {

title:string;

skills:

{

name:string;

level:number;

description:string;

}[];

}



export default function SkillCategory({

title,

skills

}:SkillCategoryProps){


return (

<div>


<h3

className="
text-2xl

font-black

text-[var(--foreground)]

mb-8

"

>

{title}

</h3>




<div

className="
grid

md:grid-cols-2

gap-6

"

>


{

skills.map((skill)=>(


<SkillCard

key={skill.name}

name={skill.name}

level={skill.level}

category={title}

description={skill.description}

/>


))


}



</div>



</div>

);

}