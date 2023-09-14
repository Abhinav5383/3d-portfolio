import { Html, useProgress } from "@react-three/drei";
import './Loader.css';


const Loader = () => {

  const { progress } = useProgress();

  return (
    <Html>
      <div className="main_loading">

        <div className="loading">

          <div className="loading-bar">
            <div className="loading-bar-bg" style={{width: `${progress.toFixed(2)}%`}}></div>
          </div>
        </div>

      </div>
    </Html>
  )
}

export default Loader