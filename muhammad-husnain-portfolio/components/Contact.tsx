"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin
} from "lucide-react";

import {
  FaLinkedin,
  FaGithub
} from "react-icons/fa";


const contactInfo = [

  {
    title: "Email",
    value: "your-email@example.com",
    icon: <Mail size={24} />
  },

  {
    title: "WhatsApp",
    value: "+971 XX XXX XXXX",
    icon: <Phone size={24} />
  },

  {
    title: "LinkedIn",
    value: "linkedin.com/in/your-profile",
    icon: <FaLinkedin size={24} />
  },

  {
    title: "GitHub",
    value: "github.com/your-profile",
    icon: <FaGithub size={24} />
  },

  {
    title: "Location",
    value: "Dubai, UAE",
    icon: <MapPin size={24} />
  }

];


export default function Contact() {

  return (

    <section
      id="contact"
      className="px-6 py-24 bg-gray-50 dark:bg-black"
    >

      <div className="max-w-6xl mx-auto">


        <motion.h2
          initial={{
            opacity:0,
            y:30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          className="text-4xl font-bold mb-12"
        >
          Contact Me
        </motion.h2>



        <div className="grid md:grid-cols-3 gap-6">


          {
            contactInfo.map((item,index)=>(

              <motion.div

                key={item.title}

                initial={{
                  opacity:0,
                  y:40
                }}

                whileInView={{
                  opacity:1,
                  y:0
                }}

                transition={{
                  delay:index * 0.15
                }}

                whileHover={{
                  scale:1.05
                }}

                className="
                p-6
                rounded-2xl
                bg-white
                dark:bg-white/10
                border
                shadow-lg
                "

              >

                <div className="mb-4">
                  {item.icon}
                </div>


                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>


                <p className="
                mt-2
                text-gray-600
                dark:text-gray-300
                ">
                  {item.value}
                </p>


              </motion.div>

            ))
          }


        </div>


      </div>


    </section>

  );

}