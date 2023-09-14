import { motion } from 'framer-motion';
import React from 'react';

import { styles } from '../styles';
import { github } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = (props) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', props.index * 0.5, 0.75)} className='w-[90%] sm:w-[440px] flex items-center justify-center'>

      <div
        className="bg-tertiary p-5 rounded-2xl w-full"
        style={{
          transition: `all 1s ease`
        }}
      >

        <div className="relative w-full">

          <img src={props.project.image}
            alt={props.project.name}
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">

            <div onClick={() => {
              window.open(props.project.source_code_link, "_blank")
            }}
              className='black-gradient w-8 h-8 flex justify-center items-center cursor-pointer rounded-full'
            >

              <img src={github}
                alt="GitHub"
                className='w-[70%] h-[70%] object-contain'
              />

            </div>

          </div>

        </div>

        <div className="mt-5">
          <h3 className='text-white font-bold text-[24px]'>{props.project.name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{props.project.description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {props.project.tags.map((tag, index) => {
            return (
              <p key={index} className={`text-14px ${tag.color}`}>#{tag.name}</p>
            )
          })}
        </div>

      </div>

    </motion.div>
  )
}


const Works = () => {
  return (
    <div
      id="work"
      className={`${styles.padding}`}>
      <motion.div
        variants={textVariant()}>

        <p className={`${styles.sectionSubText} text-start`}>My Work</p>

        <h2 className={`${styles.sectionHeadText} text-start`} >Projects.</h2>

      </motion.div>

      <div className="-w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[16px] max-w-3xl leading-[28px]'
        >
          Following projects showcases my skills and experience through real-world examples of my work.
          Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage project effectively.
        </motion.p>
      </div>

      <div className=' w-full mt-20 flex flex-wrap gap-7 items-center justify-center'>
        {projects.map((project, index) => {
          return (
            < ProjectCard
              key={`project-${index}`}
              index={index}
              project={project} />
          )
        })}
      </div>

    </div>
  )
}

export default Works