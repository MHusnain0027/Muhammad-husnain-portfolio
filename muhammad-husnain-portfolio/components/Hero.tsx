"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="
      relative
      min-h-screen
      flex
      items-center
      overflow-hidden
      px-6
      pt-28
      "
    >

      {/* Background Glow */}

      <div className="
      absolute
      top-20
      left-1/2
      -translate-x-1/2
      w-[500px]
      h-[500px]
      bg-blue-600/20
      blur-[120px]
      rounded-full
      " />


      <Reveal>

        <div className="
        relative
        z-10
        max-w-7xl
        mx-auto
        grid
        md:grid-cols-2
        gap-12
        items-center
        ">


          {/* LEFT CONTENT */}

          <div>


            <motion.div
              initial={{opacity:0,y:20}}
              animate={{opacity:1,y:0}}
              transition={{duration:0.7}}
              className="
              inline-flex
              mb-6
              px-5
              py-2
              rounded-full
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              text-sm
              text-blue-300
              "
            >

              🛡️ Security Operations × Artificial Intelligence

            </motion.div>



            <h1 className="
            text-5xl
            md:text-7xl
            font-black
            leading-tight
            ">

              Muhammad

              <br/>

              <span className="gradient-text">

                Husnain

              </span>

            </h1>



            <h2 className="
            mt-6
            text-2xl
            md:text-4xl
            font-semibold
            text-white
            ">

              Security System Operator
              <br/>

              <span className="text-slate-400">

              CCTV Specialist | AI Enthusiast

              </span>

            </h2>



            <p className="
            mt-6
            max-w-xl
            text-slate-300
            text-lg
            leading-relaxed
            ">

              Building smarter security solutions with
              CCTV monitoring, FireGuard AI and modern
              web technologies.

            </p>



            <div className="
            mt-10
            flex
            flex-col
            sm:flex-row
            gap-5
            ">


              <Link
              href="#projects"
              className="
              rounded-full
              bg-blue-600
              px-8
              py-4
              font-semibold
              text-white
              transition
              hover:bg-blue-500
              hover:scale-105
              "
              >

                View Projects →

              </Link>



              <Link
              href="#resume"
              className="
              rounded-full
              border
              border-white/20
              bg-white/5
              px-8
              py-4
              font-semibold
              text-white
              backdrop-blur-xl
              transition
              hover:bg-white/10
              "
              >

                Download Resume

              </Link>


            </div>


          </div>





          {/* RIGHT CARD */}


          <motion.div

          initial={{opacity:0,scale:0.8}}
          animate={{opacity:1,scale:1}}
          transition={{duration:0.8}}

          className="
          relative
          "

          >


            <div className="
            glass
            rounded-3xl
            p-8
            border
            border-white/10
            "

            >


              <div className="
              text-6xl
              mb-6
              "
              >

              🛡️

              </div>



              <h3 className="
              text-3xl
              font-bold
              "
              >

              Smart Security

              </h3>



              <p className="
              mt-4
              text-slate-300
              "
              >

              Combining security operations,
              artificial intelligence and modern
              technology.

              </p>



              <div className="
              mt-8
              space-y-4
              ">


                <div className="
                rounded-xl
                bg-white/5
                p-4
                border
                border-white/10
                ">

                  📹 CCTV Monitoring

                </div>


                <div className="
                rounded-xl
                bg-white/5
                p-4
                border
                border-white/10
                ">

                  🔥 FireGuard AI

                </div>


                <div className="
                rounded-xl
                bg-white/5
                p-4
                border
                border-white/10
                ">

                  ⚡ Next.js Development

                </div>


              </div>


            </div>


          </motion.div>


        </div>


      </Reveal>


    </section>
  );
}