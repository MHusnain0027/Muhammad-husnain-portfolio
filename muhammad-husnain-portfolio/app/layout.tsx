import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";


const inter = Inter({
  subsets:["latin"],
});


export const metadata: Metadata = {


title:
"Muhammad Husnain | Security System Operator | AI Enthusiast",


description:
"Professional portfolio of Muhammad Husnain showcasing security operations, CCTV monitoring, FireGuard AI project and technical skills.",


keywords:[

"Security System Operator",

"CCTV Operator",

"Dubai Security",

"SIRA",

"Fire Alarm",

"AI Projects",

"Next.js Developer"

],


authors:[

{
name:"Muhammad Husnain"
}

],


openGraph:{


title:
"Muhammad Husnain Portfolio",


description:
"Security professional and AI enthusiast portfolio website.",


type:"website"


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