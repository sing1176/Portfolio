import React from 'react';
import '../index.css';
import me from '../assets/me.jpg';
import { motion } from 'framer-motion';
import BottomMenu from './BottomMenu';
const Home = () => {
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
  const [clientX, setClientX] = React.useState(0);
  const [clientY, setClientY] = React.useState(0);

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
    const { clientX, clientY } = e;
    setClientX(clientX);
    setClientY(clientY);
  };

  return (
    <>
      <div
        onMouseMove={onMouseMove}
        className=" font-['Poppins'] bg-black flex min-h-screen items-center overflow-hidden ">
        <div className="relative  flex items-center min-w-full min-h-full justify-between p-10">
          <h1 className="text-white text-6xl w-2/3">
            I am a {''}
            <span className="text-6xl" style={style}>
              {text}
            </span>
          </h1>
          <img className="w-1/3 rounded-full " src={me} alt="" />
        </div>
      </div>

      <BottomMenu />
      <motion.div
        animate={{
          x: clientX - 100,
          y: clientY - 100,
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
