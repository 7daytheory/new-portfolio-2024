import React from "react";
import { Fade } from "react-reveal";
import lottieHeader from "../../assets/lottie/lottieHeader.json";
import DisplayLottie from "../../components/DisplayLottie";

function Banner() {
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main mx-auto mt-8 w-[90%] p-5" id="banner">
        <div className="banner-main flex">
          <div className="banner-text-div flex-1 mb-8">
            <div>
              <h1 className="banner-text text-[70px] leading-[1.1] text-black">
                Hi. My name is Matthew.
              </h1>
              <p className="banner-text-p text-[30px] leading-10 text-gray-600">
                I'm a software developer.
              </p>
            </div>
          </div>
          <div className="banner-image-div flex-1">
              <DisplayLottie animationData={lottieHeader} />
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Banner;