import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import ThemeButton from './ThemeButton';

const Nav = () => {
  const location = useLocation();
  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
    pressed: {
      scale: 0.9,
    },
  };

  const isHomePage = location.pathname === '/';
  const navLink = isHomePage ? '/projects' : '/';

  return (
    <div className="flex items-center justify-between px-4 py-2">
      <Link to={navLink}>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="pressed"
          className="text-white font-bold py-2 px-4 rounded mr-4">
          {isHomePage ? 'Projects' : 'Back to Home'}
        </motion.button>
      </Link>
      <ThemeButton />
    </div>
  );
};

export default Nav;