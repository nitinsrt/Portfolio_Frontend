import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navigation = () => {
  return (
    <nav>
      <Link to="home" smooth={true} duration={500}></Link>
      <Link to="experience" smooth={true} duration={500}></Link>
      <Link to="education" smooth={true} duration={500}></Link>
    </nav>
  );
};

export default Navigation;