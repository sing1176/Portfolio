import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ThemeContext from './ThemeContext';
import me from '../assets/me.jpg';
import BottomMenu from './BottomMenu';
import Blob from './Blob';
import Nav from './Nav';

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });

  const options = [
    'Full Stack Developer',
    'UI/UX Designer',
    'Freelancer',
    'Photographer',
  ];

  const [current, setCurrent] = useState(0);
  const length = options.length;
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const lastIndex = length - 1;
    if (current < 0) {
      setCurrent(lastIndex);
    }
    if (current > lastIndex) {
      setCurrent(0);
    }
  }, [current, length]);

  useEffect(() => {
    let slider = setInterval(() => {
      setCurrent(current + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [current]);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % options.length;
      const fullText = options[i];
      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );
      setTypingSpeed(isDeleting ? 30 : 150);
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    const timeout = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, loopNum]);

  const style = {
    background: 'linear-gradient(90deg, #FF008C 0%, #FF8C00 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const onMouseMove = (e) => {
    setMouseCoords({ x: e.clientX, y: e.clientY });
  };

  const backgroundColor = theme === 'light' ? 'bg-gray-200' : 'bg-black';
  const textColor = theme === 'light' ? 'text-black' : 'text-white';

  return (
    <>
      <Nav />
      <div
        onMouseMove={onMouseMove}
        className={`font-Poppins flex min-h-screen w-screen items-center overflow-hidden ${backgroundColor}`}>
        <div className="relative flex md:flex-row flex-col-reverse w-full items-center p-10 min-h-screen justify-end md:justify-between z-20">
          <div className="w-full mt-20 md:mb-0 md:pb-0 md:w-1/2">
            <h1 className={`lg:text-6xl text-4xl ${textColor}`}>
              I am a{' '}
              <span className="text-inherit" style={style}>
                {text}
              </span>
            </h1>
          </div>

          <motion.div
            whileHover={{
              scale: [1, 1.5, 1],
              transition: { duration: 1.5 },
            }}
            whileTap={{
              scale: 0.8,
            }}
            className="md:w-1/3">
            <img className="rounded-full" src={me} alt="" />
          </motion.div>
        </div>
      </div>
      <BottomMenu />
      <Blob mouseCoords={mouseCoords} />
    </>
  );
};

export default Home;
