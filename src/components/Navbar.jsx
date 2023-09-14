import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants/index';
import { logo, menu, close } from '../assets';

const Navbar = () => {

  const [active, setActive] = useState("");
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} no-highlight w-full flex items-center py-3 fixed top-0 bg-primary z-20`}>

      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">

        <Link to='/'
          className='no-highlight flex items-center gap-2'
          onClick={() => { setActive(""); window.scrollTo(0, 0); }}
        >
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
          <p className="text-white text-[18px] font-bold cursor-pointer">Abhinav</p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-5'>
          {navLinks.map(Link => {
            return (
              <li key={Link.id}
                className={``}>

                <a className={`cursor-pointer hover:text-white text-[18px] ${active === Link.id ? 'text-white' : 'text-secondary'}  font-medium px-2 py-1`}
                  href={`#${Link.id}`}
                  onClick={() => setActive(Link.id)}>
                  {Link.title}
                </a>

              </li>
            )
          })}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center relative'>
          <img src={menuToggle ? close : menu}
            alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setMenuToggle(!menuToggle)}
          />

          <div className={`secondary-menu ${menuToggle ? 'flex active ' : 'flex'} p-6 black-gradient absolute mx-4 min-w-[9em] rounded-xl z-10 origin-center`}>

            <ul className='list-none flex flex-col justify-end items-start gap-3'>
              {navLinks.map(Link => {
                return (
                  <li key={Link.id}
                    className={`${active === Link.id ? 'text-white' : 'text-secondary'} font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setActive(Link.id);
                      setMenuToggle(!menuToggle);
                    }}>

                    <a href={`#${Link.id}`}>{Link.title}</a>

                  </li>
                )
              })}
            </ul>

          </div>
        </div>

      </div>

    </nav >
  )
}

export default Navbar;

