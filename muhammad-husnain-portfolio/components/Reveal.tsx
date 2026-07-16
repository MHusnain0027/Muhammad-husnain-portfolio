"use client";

import { motion } from "framer-motion";


interface RevealProps {

children: React.ReactNode;

delay?: number;

direction?: "up" | "left" | "right";

}



export default function Reveal({

children,

delay = 0,

direction = "up"

}: RevealProps){



const animations = {


up: {

hidden:{
opacity:0,
y:60,
filter:"blur(10px)"
},

visible:{
opacity:1,
y:0,
filter:"blur(0px)"
}

},


left:{

hidden:{
opacity:0,
x:-60,
filter:"blur(10px)"
},

visible:{
opacity:1,
x:0,
filter:"blur(0px)"
}

},


right:{

hidden:{
opacity:0,
x:60,
filter:"blur(10px)"
},

visible:{
opacity:1,
x:0,
filter:"blur(0px)"
}

}


};



return (

<motion.div


initial={
animations[direction].hidden
}


whileInView={
animations[direction].visible
}


viewport={{

once:true,

amount:0.15

}}


transition={{

duration:0.8,

delay,

ease:[0.22,1,0.36,1]

}}


>

{children}


</motion.div>

);

}