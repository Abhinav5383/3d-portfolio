import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter className='overflow-hidden '>

      <div className="primary z-0 bg-primary">

        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          < Navbar />
          < Hero />
        </div>

        < About />
        < Experience />
        < Tech />
        < Works />
        < Feedbacks />

        <div className="relative z-0 pb-10">
          < Contact />
          < StarsCanvas />
        </div>

      </div>

    </BrowserRouter >
  )
}

export default App;