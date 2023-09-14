import { Suspense } from "react";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";



const Tech = () => {
  return (
    <div className={` ${styles.padding} flex flex-row flex-wrap justify-center gap-10 max-w-7xl m-auto`}>

      {technologies.map((technology) => {
        return (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        )
      })}

    </div>
  )
}

export default Tech