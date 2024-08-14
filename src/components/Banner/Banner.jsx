import React from 'react';
import DisplayLottie from '../DisplayLottie/DisplayLottie';
import lottiePerson from '../../assets/lottie/lottieHeader.json';

const Banner = () => {
  return (
    <div className="flex justify-center py-6">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-screen-xl px-4 max-w-80p">
        <div className="flex-1 md:mr-4 text-center md:text-left">
        <h1 className="relative text-6xl md:text-5xl font-bold text-black mb-4 mt-[3em]">
          <span className="text-gray-100 text-[4em] font-bold absolute top-0 left-0 transform -translate-y-1/2 -translate-x-1/2 z-0" style={{left: '49%', top: '-25px'}}>
            Hello!
          </span>
          <span className="relative z-2">I am <span className="text-red-600">Matthew.</span></span>
        </h1>
          <p className="relative text-lg md:text-md text-gray-700 z-2">
            I have been a developer with 10 years experience. I build Web and Mobile applications with JavaScript, React/Angular, PHP, Laravel/CakePHP, Bootstrap, Flexbox, and other cool libraries and frameworks.
          </p>
        </div>
        <div className="flex-1 md:ml-4 mt-6 md:mt-0 flex justify-center">
          <DisplayLottie animationData={lottiePerson} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
