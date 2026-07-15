"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";


interface ButtonProps {

  children: ReactNode;

  variant?: "primary" | "secondary";

  className?: string;

}


export default function Button({

  children,

  variant = "primary",

  className = "",

}: ButtonProps) {


  const styles = {

    primary:
    `
    bg-[#6DD5C4]
    text-[#083344]
    hover:bg-[#52c7b3]
    `,


    secondary:
    `
    bg-white/60
    text-slate-800
    border
    border-[#6DD5C4]/30
    hover:bg-white
    `

  };


  return (

    <motion.button

      whileHover={{
        scale:1.05
      }}

      whileTap={{
        scale:0.95
      }}

      className={`
      
      px-8
      py-3

      rounded-full

      font-semibold

      transition

      backdrop-blur-xl

      ${styles[variant]}

      ${className}

      `}

    >

      {children}

    </motion.button>

  );

}