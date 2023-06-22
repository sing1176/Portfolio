import React, { useContext, useState, useEffect } from 'react';
import ThemeContext from './ThemeContext';
import BottomMenu from './BottomMenu';
import Blob from './Blob';
import Nav from './Nav';

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

  const onMouseMove = (e) => {
    setMouseCoords({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      <div
        className={`font-Poppins flex min-h-screen w-screen items-center overflow-hidden ${backgroundColor}`}
        onMouseMove={onMouseMove}>
        <div className="absolute bottom-4 right-4 md:top-4 md:right-4 z-40">
          <Nav />
        </div>
      </div>
      <BottomMenu />
      <Blob mouseCoords={mouseCoords} />
    </>
  );
};

export default Projects;
