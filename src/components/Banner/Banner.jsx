import React from 'react';
import DisplayLottie from '../DisplayLottie/DisplayLottie';
import lottiePerson from '../../assets/lottie/lottieHeader.json';
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  return (
    <div className="flex justify-center py-0 md:py-6">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-screen-xl px-4 max-w-80p">
        <div className="flex-1 md:mr-4 text-center md:text-left">
        <h1 className="relative text-6xl md:text-5xl font-bold text-black mb-4 mt-[3em]">
          <span className="text-gray-100 text-[2em] md:text-[4em] font-bold absolute top-[-25px] left-[55%] md:left-[250px] transform -translate-y-1/2 -translate-x-1/2 z-0">
            <Fade direction='up' duration={2500}>Hello!</Fade>
          </span>
          <Fade direction='left' duration={1500}><span className="relative z-2">I am <span className="text-red-600">Matthew.</span></span></Fade>
        </h1>
          <p className="relative text-lg md:text-md text-gray-700 z-2">
          <Fade direction='down' duration={2000}>
            I am a developer with over 9 years experience. 
            I build Web and Mobile applications with JavaScript, React/Angular, PHP, Laravel/CakePHP, Bootstrap, Flexbox, and other cool libraries and frameworks. 
            I also have a background in graphic design which has been a useful skill for smaller companies or for hot fixes.</Fade>
          </p>
        </div>
        <div className="flex-1 md:ml-4 mt-6 md:mt-0 flex justify-center">
          <Fade direction="right" duration={1500}>
             <DisplayLottie animationData={lottiePerson} />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Banner;
