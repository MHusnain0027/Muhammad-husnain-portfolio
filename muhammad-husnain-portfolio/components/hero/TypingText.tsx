"use client";

import { useEffect, useState } from "react";


const words = [
"Security System Operator",
"AI Enthusiast",
"Next.js Developer",
"FireGuard AI Creator"
];


export default function TypingText(){


const [index,setIndex] = useState(0);

const [text,setText] = useState("");

const [deleting,setDeleting] = useState(false);



useEffect(()=>{


const current = words[index];


const timeout = setTimeout(()=>{


if(!deleting){


setText(
current.substring(0,text.length + 1)
);



if(text === current){

setTimeout(()=>setDeleting(true),1000);

}


}


else{


setText(
current.substring(0,text.length - 1)
);



if(text === ""){

setDeleting(false);

setIndex(
(index + 1) % words.length
);

}


}


}, deleting ? 50 : 100);



return ()=>clearTimeout(timeout);



},[text,deleting,index]);




return (

<span

className="
text-[var(--primary)]
font-bold
drop-shadow-[0_0_15px_rgba(0,229,176,.6)]
"

>

{text}

<span className="
animate-pulse
"
>
|
</span>


</span>

);


}