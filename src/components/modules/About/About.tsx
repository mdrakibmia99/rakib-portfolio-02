'use client'
import { motion } from "motion/react";
import image from "@/assets/images/rakib.jpeg";


import Image from "next/image";
import { fadeTop, motionStep } from "@/components/motion/motion";
import AboutLeft from "./AboutLeft";

const About = () => {
  return (
    <section id='about' className=" text-white h-auto mb-5 custom-container mx-auto py-24">
      <motion.div variants={fadeTop} {...motionStep} className='col-span-3'>
        <div className="text-center ">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
    
            <span className="text-black dark:text-white text-shadow">About Me</span>
          </h3>

          <div className="flex md:flex-row flex-col-reverse items-center justify-between md:gap-6 gap-12 px-5 md:px-0  mx-auto">
            <div className=" text-start lg:w-3/5 md:w-1/2 w-full z-0">
              <AboutLeft />
            </div>

            {/* <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center lg:w-1/2 md:w-1/2 w-full"> */}
              <div className="lg:w-[300px] h-full relative  w-11/12   z-0 overflow-hidden border-2 rounded-lg">
                <Image
                  src={image}
                  width={300}
                  height={400}
                  alt="User image"
                  className="w-full h-full object-cover transition-all duration-500 transform hover:scale-[1.20] hover:grayscale-0 grayscale hover:brightness-100 brightness-95 p-5 "
                />
              </div>
            {/* </div> */}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
