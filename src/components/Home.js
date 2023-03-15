import React from 'react';
import '../index.css';
import me from '../assets/me.jpg';
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

  return (
    <>
      <main className=" font-['Poppins'] bg-black flex min-h-screen overflow-none items-center">
        <div className=" flex items-center min-w-full min-h-full justify-between p-10">
          <h1 className="text-white text-6xl w-2/3">I am a {text}</h1>
          <img className="w-1/3 rounded-full" src={me} alt="" />
        </div>
      </main>
    </>
  );
};

export default Home;
