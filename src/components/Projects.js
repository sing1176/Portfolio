import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ThemeContext from './ThemeContext';
import BottomMenu from './BottomMenu';
import Blob from './Blob';
import Nav from './Nav';
import { motion } from 'framer-motion';

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  const location = useLocation();

  const backgroundColor = theme === 'light' ? 'bg-gray-200' : 'bg-black';
  const textColor = theme === 'light' ? 'text-black' : 'text-white';

  const onMouseMove = (e) => {
    setMouseCoords({ x: e.clientX, y: e.clientY });
  };

  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'Project 2',
      description:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    },
    {
      id: 3,
      title: 'Project 3',
      description:
        'Nullam finibus sem in justo varius, a sagittis nulla vehicula.',
    },
  ];

  useEffect(() => {
    const animateList = () => {
      const listItems = document.querySelectorAll('.project-item');

      listItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-50px)';
        item.style.transition = `opacity 0.3s ease ${
          index * 0.1
        }s, transform 0.3s ease ${index * 0.1}s`;
      });

      setTimeout(() => {
        listItems.forEach((item) => {
          item.style.opacity = '1';
          item.style.transform = 'translateX(0)';
        });
      }, 0);
    };

    if (location.state?.from === '/') {
      // Animation triggered when navigating from the home page
      animateList();
    }
  }, [location]);

  return (
    <>
      <Nav />
      <div
        className={`font-Poppins flex min-h-screen w-screen items-center overflow-hidden ${backgroundColor}`}
        onMouseMove={onMouseMove}>
        <div className="flex justify-between flex-col ml-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-item"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}>
              <motion.button
                className={`p-4 flex flex-col items-center justify-center ${backgroundColor} ${textColor}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                <h2 className="text-lg">{project.title}</h2>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
      <BottomMenu />
      <Blob mouseCoords={mouseCoords} />
    </>
  );
};

export default Projects;
