import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

import '../../node_modules/react-vertical-timeline-component/style.min.css';

import { styles } from "../styles";
import { experiences } from "../constants";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {

  return (
    <VerticalTimelineElement
      contentStyle={{
        backgroundColor: `#1d1836`,
        color: `#FFF`
      }}

      contentArrowStyle={{ borderRight: `7px solid #232631` }}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img src={experience.icon}
            alt={experience.company_name}
            className={`w-[60%] h-[60%] object-contain `}
          />
        </div>
      }
      date={experience.date}
    >
      <div>

        <h3 className=" text-white text-[24px] font-bold ">{experience.title}</h3>

        <p className="text-secondary text-[16px] font-semibold  " style={{ margin: '0' }}>{experience.company_name}</p>

        <ul className=" mt-5 list-disc ml-5 space-y-2">

          {experience.points.map((point, index) => {
            return (
              <li key={`experience-point-${index + 1}`}
                className=" text-white-100 text-[14px] "
                style={{ margin: '0' }}>
                {point}
              </li>
            )
          })}

        </ul>

      </div>


    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <section
      className={` ${styles.paddingX} flex flex-col items-start py-[10%] bg-slate-700`}>

      <motion.div
        variants={textVariant()}>

        <p className={`${styles.sectionSubText} text-start`}>What I have done so far</p>

        <h2 className={`${styles.sectionHeadText} text-start`} >work Experience.</h2>

      </motion.div>

      <div className="mt-20 flex flex-col items-center justify-center w-full">

        <VerticalTimeline>
          {experiences.map((experience, index) => {
            return (
              < ExperienceCard key={index} experience={experience} />
            )
          })}
        </VerticalTimeline>

      </div>

    </section>
  )
}

export default Experience