import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { slideIn } from '../utils/motion';



// template_8lm3vos
// service_j1dizm2
// jgL5FaP4Cq2Lbi5vl

const Contact = () => {

  const templateID = 'template_8lm3vos';
  const serviceID = 'service_j1dizm2';
  const apiKEY = 'jgL5FaP4Cq2Lbi5vl';
  const [popUP, setPopUp] = useState({
    value: false,
    message: ''
  });

  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form, [name]: value
    });
  };

  const showPopUp = (message) => {
    setPopUp({
      value: true,
      message: message
    });

    setTimeout(() => {
      setPopUp({
        value: false,
        message: ''
      });
    }, 2000);
  }




  const handleSubmit = (e) => {
    e.preventDefault();

    if (!navigator.onLine) {
      showPopUp('Plese connect to Internet');
      return;
    }

    setLoading(true);

    emailjs.send(
      serviceID,
      templateID,
      {
        from_name: form.name,
        to_name: 'Abhinav',
        from_email: form.email,
        to_email: 'abhinavkumar5383@gmail.com',
        message: form.message
      },
      apiKEY)
      .then(() => {
        setLoading(false);

        showPopUp('Message Sent');

        setForm({
          name: '',
          email: '',
          message: ''
        });
      }),
      error((error) => {
        console.log(error);

        showPopUp('Something Went Wrong');

      })
  };


  return (
    <div id='contact' className={` ${styles.paddingX} xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden`}>

      <motion.div variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl relative '
      >

        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>

            <input type="text"
              name='name'
              required
              value={form.name}
              onChange={handleChange}
              placeholder='Christina Jenn'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />

          </label>


          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>

            <input type='email'
              name='email'
              required
              value={form.email}
              onChange={handleChange}
              placeholder='example@domain.com'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />

          </label>


          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>

            <textarea
              rows="7"
              name='message'
              required
              value={form.message}
              onChange={handleChange}
              placeholder='What do you want to say'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />

          </label>

          <button type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>

        </form>

        <div className={`${popUP.value === false ? "opacity-0 scale-0" : " opacity-100 scale-100"} pop-up text-white-100 absolute w-full h-[100%] top-0 left-0 bg-black-100 bg-opacity-50 transition-all`}>

          <div className="alert bg-secondary text-[18px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-6 py-3 rounded-lg ">
            {popUP.message}
          </div>

        </div>

      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='flex xl:flex-1 xl:h-auto md:h-[550px] h-350px '
      >

        < EarthCanvas />

      </motion.div>

    </div>
  )
}

export default Contact