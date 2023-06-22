import React from 'react';
import '../index.css';
import me from '../assets/me.jpg';
import { motion } from 'framer-motion';
import BottomMenu from './BottomMenu';
import ThemeButton from './ThemeButton';
import ThemeContext from './ThemeContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { theme } = React.useContext(ThemeContext);

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

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
    pressed: {
      scale: 0.9,
    },
  };

  const backgroundColor = theme === 'light' ? 'bg-gray-200' : 'bg-black';
  const textColor = theme === 'light' ? 'text-black' : 'text-white';

  return (
    <>
      {/*  Main Content */}
      <div
        onMouseMove={onMouseMove}
        className={
          "font-['Poppins'] flex min-h-full w-screen items-center overflow-hidden z-20 " +
          backgroundColor
        }>
        {/* content */}
        <div className="absolute bottom-4 right-4 md:top-4 md:right-4 z-40">
          <div className="flex flex-row">
            <Link to="/projects">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="pressed"
                className=" text-white font-bold py-2 px-4 rounded ml-2">
                Projects
              </motion.button>
            </Link>
            <ThemeButton />
          </div>
        </div>
        <div
          className=" relative flex md:flex-row flex-col-reverse w-full items-center p-10
min-h-screen justify-end md:justify-between z-20 ">
          {/* text */}
          <div className="w-full mt-20 md:mb-0 md:pb-0 md:w-1/2 ">
            <h1 className={'lg:text-6xl text-4xl ' + textColor}>
              I am a {''}
              <span className="text-inherit" style={style}>
                {text}
              </span>
            </h1>
          </div>
          {/* image */}
          <motion.div
            whileHover={{
              scale: [1, 1.5, 1],
              transition: { duration: 1.5 },
            }}
            whileTap={{
              scale: 0.8,
            }}
            className="md:w-1/3 ">
            <img className="rounded-full " src={me} alt="" />
          </motion.div>
        </div>
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

export default Home;
