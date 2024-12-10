import DisplayLottie from '../DisplayLottie/DisplayLottie';
import lottiePerson from '../../assets/lottie/lottieHeader.json';
import { Fade } from "react-awesome-reveal";
import { banner } from  '../../content.js';

const Banner = () => {
  const { bannerGreeting, bannerIntro, bannerName, bannerBlurb } = banner;
  return (
    <div className="flex justify-center py-0 md:py-6">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-screen-xl px-4 max-w-80p">
        <div className="flex-1 md:mr-4 text-center md:text-left">
        <h1 className="relative text-6xl md:text-5xl font-bold text-black mb-4 mt-[3em]">
          <span className="text-gray-100 text-[2em] md:text-[4em] font-bold absolute top-[-25px] left-[55%] md:left-[250px] transform -translate-y-1/2 -translate-x-1/2 z-0">
            <Fade direction='up' duration={2500}>{bannerGreeting}</Fade>
          </span>
          <Fade direction='left' duration={1500}><span className="relative z-2">{bannerIntro} <span className="text-red-600">{bannerName}</span></span></Fade>
        </h1>
        <Fade direction='down' duration={2000}>
          <p className="relative text-lg md:text-md text-gray-700 z-2">
            {bannerBlurb}
          </p>
        </Fade>
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
