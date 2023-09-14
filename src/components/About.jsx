import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants/index.js";
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';
import '../index.css';


const ServiceCard = (props) => {
  return (
    <Tilt className=" about-card xs:w-[260px] w-[85%] my-[3%]"
      style={{ "--index": props.index }} >

      <motion.div variants={fadeIn("right", "spring", 0.5 * props.index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card ">

        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-center items-center flex-col"
          options={{
            max: 20,
            scale: 1,
            speed: 450
          }}>

          <img src={props.icon} alt={props.title} className="w-[35%] aspect-square object-contain my-[1.5em]" />

          <h3 className="text-white text-[20px] font-bold text-center">{props.title}</h3>

        </div>

      </motion.div>

    </Tilt >
  )
}


const About = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}

      id="about"
      className={`${styles.paddingX} flex flex-col items-center justify-center py-[10%]`}>

      <motion.div
        variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Introduction</p>
        <h2 className={styles.sectionHeadText} >Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("right", "spring", 0.1, 1)}
        className={` mt-4 text-secondary text-[16px] max-w-6xl leading-[30px]`}>
        I'm a skilled software developer With experience in Typescript and JavaScript, and expertise in frameworks like React, Node.js, and Three. js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="w-full mt-20 flex flex-wrap justify-center gap-[5%]">
        {services.map(((service, index) => {
          return (
            < ServiceCard key={service.title} title={service.title} icon={service.icon} index={index} />
          )
        }))}
      </div>
    </motion.section>
  )
}

export default About;