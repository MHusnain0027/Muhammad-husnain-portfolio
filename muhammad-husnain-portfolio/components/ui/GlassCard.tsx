"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";


interface GlassCardProps {

  children: ReactNode;

  className?: string;

}


export default function GlassCard({

  children,

  className = "",

}: GlassCardProps) {


  return (

    <motion.div

      initial={{
        opacity:0,
        y:20
      }}

      whileInView={{
        opacity:1,
        y:0
      }}

      viewport={{
        once:true
      }}

      transition={{
        duration:0.5
      }}

      whileHover={{
        y:-8
      }}

      className={`
      
      rounded-3xl

      border
      border-[#6DD5C4]/30

      bg-white/60

      backdrop-blur-xl

      shadow-[0_20px_60px_rgba(0,0,0,0.08)]

      transition-all

      ${className}

      `}

    >

      {children}

    </motion.div>

  );

}