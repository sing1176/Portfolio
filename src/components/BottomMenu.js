import React from 'react';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import { useState } from 'react';

const BottomMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const iconlist = [
    {
      url: 'https://www.linkedin.com/in/sandeepsaini2213/',
      icon: 'linkedin',
      key: 1,
    },
    {
      url: 'https://dribbble.com/deepsaini2213',
      icon: 'dribbble',
      key: 2,
    },
    {
      url: 'https://github.com/sing1176/',
      icon: 'github',
      key: 3,
    },
  ];

  const Icons = () => {
    return (
      <div className="flex flex-row gap-4 z-20">
        {iconlist.map((icon, index) => {
          return (
            <motion.button key={index}>
              <SocialIcon
                key={index}
                url={icon.url}
                fgColor="white"
                style={{
                  height: 40,
                  width: 40,
                }}
              />
            </motion.button>
          );
        })}
      </div>
    );
  };

  const variants = {
    open: {
      opacity: 1,
      x: 0,
      rotate: 180,
    },
    closed: {
      opacity: 1,
      x: -200,
      rotate: 0,
      backgroundColor: 'white',
    },
  };

  const socialIconVariants = {
    open: { opacity: 1, x: 0, rotate: 0 },
    closed: {
      opacity: 0,
      x: -200,
      rotate: 0,
    },
  };

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-4 absolute bottom-4  left-16  md:bottom-10 z-30 md:opacity-20">
      <motion.div
        variants={socialIconVariants}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        transition={{ duration: 0.5 }}>
        <Icons />
      </motion.div>

      <motion.button
        variants={variants}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        onClick={handleButtonClick}
        whileHover={{
          scale: 1.5,
          backgroundColor: 'black',
          color: 'white',
        }}
        whileTap={{ scale: 0.9 }}
        className="rounded-full p-2 transition-colors duration-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-6 h-6 ">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
          />
        </svg>
      </motion.button>
    </motion.div>
  );
};

export default BottomMenu;
