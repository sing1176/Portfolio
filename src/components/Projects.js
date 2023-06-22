import React, { useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ThemeButton from './ThemeButton';
import ThemeContext from './ThemeContext';
import BottomMenu from './BottomMenu';

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });

  const backgroundColor = theme === 'light' ? 'bg-gray-200' : 'bg-black';
  const textColor = theme === 'light' ? 'text-black' : 'text-white';

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
    pressed: {
      scale: 0.9,
    },
  };

  const blobDesign = {
    background: 'linear-gradient(to right, pink, purple)',
    height: '200px',
    width: '200px',
    filter: 'blur(80px)',
  };

  const onMouseMove = (e) => {
    setMouseCoords({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    // Add any additional logic or side effects here
    // ...

    // Clean up any subscriptions or intervals in the cleanup function
    return () => {
      // Cleanup logic here
      // ...
    };
  }, []);

  return (
    <>
      <div
        className={`font-Poppins flex min-h-screen w-screen items-center overflow-hidden ${backgroundColor}`}
        onMouseMove={onMouseMove}>
        <div className="absolute bottom-4 right-4 md:top-4 md:right-4 z-40">
          <div className="flex flex-row">
            <Link to="/">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="pressed"
                className={`text-white font-bold py-2 px-4 rounded ml-2 ${backgroundColor}`}>
                Go to Home
              </motion.button>
            </Link>
            <ThemeButton />
          </div>
        </div>

        {/* Add your Projects content here */}
      </div>

      <BottomMenu />

      <motion.div
        animate={{
          x: mouseCoords.x,
          y: mouseCoords.y,
          rotate: 360,
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 5,
          ease: 'circOut',
          repeat: Infinity,
        }}
        className="fixed top-0 left-0 overflow-hidden"
        style={blobDesign}></motion.div>
    </>
  );
};

export default Projects;
