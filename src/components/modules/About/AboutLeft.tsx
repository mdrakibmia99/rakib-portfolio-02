'use client'
import { fadeTop, motionStep } from "@/components/motion/motion";
import { motion } from "motion/react"


function AboutLeft() {


  return (
    <motion.div variants={fadeTop} {...motionStep} className="col-span-3">
      <div className="space-y-4  dark:text-slate-200 text-slate-600">
        <p>
          Hello! My name is Md Rakib Mia and I enjoy creating things that live
          on the internet. My interest in web development started back in 2021
          when I decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about HTML & CSS!
        </p>
        <p>
          Fast-forward to today, and I’ve had the privilege of working at an
          advertising agency, a start-up, a huge corporation, and a student-led
          design studio. My main focus these days is building accessible,
          inclusive products and digital experiences at Up statement for a
          variety of clients.
        </p>


      </div>
    </motion.div>
  );
}

export default AboutLeft;
