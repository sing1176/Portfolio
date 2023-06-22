import React from 'react';
import { motion } from 'framer-motion';

const Blob = ({ mouseCoords }) => {
  const blobDesign = {
    background: 'linear-gradient(to right, pink, purple)',
    height: '200px',
    width: '200px',
    filter: 'blur(80px)',
  };

  return (
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
  );
};

export default Blob;
