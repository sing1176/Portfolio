import React from 'react';
import '../index.css';
import me from '../assets/me.jpg';
import { motion } from 'framer-motion';
import BottomMenu from './BottomMenu';

const Home = () => {
  const [mouseCoords, setMouseCoords] = React.useState({ x: 0, y: 0 });

  const options = [
    'Full Stack Developer',
    'UI/UX Designer',
    'Freelancer',
    'Photographer',
  ];

  const [current, setCurrent] = React.useState(0);
  const length = options.length;
  const [text, setText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [loopNum, setLoopNum] = React.useState(0);
  const [typingSpeed, setTypingSpeed] = React.useState(150);

  React.useEffect(() => {
    const lastIndex = length - 1;
    if (current < 0) {
      setCurrent(lastIndex);
    }
    if (current > lastIndex) {
      setCurrent(0);
    }
  }, [current, length]);

  React.useEffect(() => {
    let slider = setInterval(() => {
      setCurrent(current + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [current]);

  React.useEffect(() => {
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

  const blobDesign = {
    background: 'linear-gradient(to right, pink, purple)',
    height: '200px',
    width: '200px',
    filter: 'blur(80px)',
  };

  const onMouseMove = (e) => {
    setMouseCoords({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      {/*  Main Content */}
      <div
        onMouseMove={onMouseMove}
        className=" font-['Poppins'] bg-black flex min-h-full w-screen items-center overflow-hidden z-20 ">
        <div
          className=" relative flex md:flex-row flex-col-reverse w-full items-center p-10
min-h-screen justify-between ">
          <div className="w-full mb-20 pb-20 md:mb-0 md:pb-0 md:w-1/2 ">
            <h1 className="text-white lg:text-6xl text-4xl">
              I am a {''}
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
            className="mt-20 md:mt-0 md:w-1/2 ">
            <img className="rounded-full " src={me} alt="" />
          </motion.div>
        </div>
      </div>
      {/*  Bottom Menu */}
      <BottomMenu />
      {/*  Blob */}
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

export default Home;
