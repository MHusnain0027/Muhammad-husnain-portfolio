"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Reveal from "./Reveal";


export default function Hero() {


  return (

    <section
      id="home"
      className="
      min-h-screen
      flex
      items-center
      justify-center
      px-6
      pt-20
      bg-gradient-to-br
      from-slate-900
      via-black
      to-slate-800
      text-white
      "
    >


      <Reveal>


        <div
          className="
          max-w-5xl
          text-center
          backdrop-blur-xl
          bg-white/10
          border
          border-white/20
          rounded-3xl
          p-10
          shadow-2xl
          "
        >


          <motion.div

            initial={{
              opacity:0,
              scale:0.9
            }}

            animate={{
              opacity:1,
              scale:1
            }}

            transition={{
              duration:0.8
            }}

          >



            <div
              className="
              mx-auto
              mb-6
              w-24
              h-24
              rounded-full
              bg-white/20
              flex
              items-center
              justify-center
              text-4xl
              font-bold
              "
            >

              MH

            </div>



            <h1
              className="
              text-5xl
              md:text-7xl
              font-bold
              mb-6
              "
            >

              Muhammad Husnain

            </h1>



            <h2
              className="
              text-xl
              md:text-3xl
              text-gray-300
              mb-6
              "
            >

              Security System Operator

              <br />

              CCTV Specialist | AI Enthusiast

            </h2>



            <p
              className="
              text-gray-400
              max-w-2xl
              mx-auto
              mb-8
              leading-relaxed
              "
            >

              Professional Security System Operator with experience in
              CCTV monitoring, security operations, reporting and
              modern technology solutions.

            </p>



            <div
              className="
              flex
              flex-col
              md:flex-row
              gap-4
              justify-center
              "
            >


              <Link
                href="/resume"
                className="
                px-8
                py-3
                rounded-full
                bg-white
                text-black
                font-semibold
                hover:scale-105
                transition
                "
              >

                Download CV

              </Link>




              <Link
                href="#projects"
                className="
                px-8
                py-3
                rounded-full
                border
                border-white
                hover:bg-white
                hover:text-black
                transition
                "
              >

                View Projects

              </Link>



            </div>



          </motion.div>



        </div>


      </Reveal>



    </section>

  );

}