"use client";

import { motion } from "framer-motion";

import Reveal from "./Reveal";
import GlassCard from "./ui/GlassCard";
import SectionTitle from "./ui/SectionTitle";


const details = [

  {
    title: "Nationality",
    value: "Pakistani"
  },

  {
    title: "Languages",
    value: "English, Urdu, Hindi"
  },

  {
    title: "Education",
    value: "Professional & Technical Training"
  },

  {
    title: "Certification",
    value: "SIRA Certified Security Professional"
  }

];



export default function About(){


  return (

    <section

      id="about"

      className="
      px-6
      py-24
      "

    >


      <div

        className="
        max-w-6xl
        mx-auto
        "

      >


        <Reveal>


          <SectionTitle

            badge="ABOUT ME"

            title="Security Professional With Technology Vision"

            description="
            Security operations experience combined with AI,
            automation and modern web development skills.
            "

          />



          <div

            className="
            grid
            md:grid-cols-2
            gap-10
            items-center
            "

          >



            {/* Introduction Card */}

            <GlassCard

              className="
              p-8
              md:p-10
              "

            >


              <motion.p

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

                className="
                text-lg
                text-slate-600
                leading-relaxed
                "

              >

                I am Muhammad Husnain, a professional Security System
                Operator specializing in CCTV monitoring, control room
                operations, security reporting and incident management.


                <br />
                <br />


                Alongside my security career, I have developed practical
                skills in Web Development and modern technologies.
                I work with HTML, CSS, JavaScript, React, Next.js and
                modern UI frameworks to create responsive and
                user-friendly web applications.


                <br />
                <br />


                My goal is to combine my security knowledge with
                technology by exploring AI solutions, automation systems
                and innovative digital platforms that improve efficiency,
                safety and user experience.


              </motion.p>


            </GlassCard>





            {/* Details Cards */}

            <div

              className="
              grid
              sm:grid-cols-2
              gap-6
              "

            >


              {
                details.map((item,index)=>(


                  <GlassCard

                    key={item.title}

                    className="
                    p-6
                    "

                  >


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
                        duration:.4,
                        delay:index * .1
                      }}

                    >


                      <h3

                        className="
                        text-xl
                        font-bold
                        text-slate-900
                        "

                      >

                        {item.title}

                      </h3>



                      <p

                        className="
                        mt-3
                        text-slate-600
                        "

                      >

                        {item.value}

                      </p>


                    </motion.div>


                  </GlassCard>


                ))
              }


            </div>



          </div>


        </Reveal>


      </div>


    </section>

  );

}