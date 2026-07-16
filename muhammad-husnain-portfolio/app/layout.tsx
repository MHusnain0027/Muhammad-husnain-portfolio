import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";


const inter = Inter({

subsets:["latin"],

});



export const metadata: Metadata = {


metadataBase: new URL(
"https://muhammad-husnain-portfolio.vercel.app"
),



title:{

default:
"Muhammad Husnain | Security System Operator | AI Enthusiast",

template:
"%s | Muhammad Husnain"

},



description:

"Professional portfolio of Muhammad Husnain showcasing security operations, CCTV monitoring, FireGuard AI project, automation and modern web development skills.",



keywords:[

"Muhammad Husnain",

"Security System Operator",

"CCTV Operator",

"Dubai Security Professional",

"SIRA Certified",

"Fire Alarm Systems",

"FireGuard AI",

"Next.js Developer",

"AI Automation",

"Web Developer"

],



authors:[

{

name:"Muhammad Husnain"

}

],



creator:"Muhammad Husnain",



openGraph:{


title:
"Muhammad Husnain Portfolio",


description:
"Security professional combining security operations, AI and modern technology solutions.",


url:
"/",


siteName:
"Muhammad Husnain Portfolio",


type:"website",


locale:"en_US",


images:[

{

url:"/images/profile.jpg",

width:1200,

height:630,

alt:"Muhammad Husnain Portfolio"

}

]


},



twitter:{


card:"summary_large_image",


title:
"Muhammad Husnain Portfolio",


description:
"Security System Operator | AI Enthusiast | Web Developer",


images:[

"/images/profile.jpg"

]


},



robots:{


index:true,

follow:true


}


};





export default function RootLayout({

children,

}: Readonly<{

children:React.ReactNode;

}>) {



return (

<html lang="en">


<body className={inter.className}>


<Navbar />


{children}


</body>


</html>

);

}