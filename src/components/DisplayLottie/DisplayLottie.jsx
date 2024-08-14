import React, { Suspense } from "react";
import Lottie from "react-lottie";

const DisplayLottie = ({ animationData }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div onClick={null}>
        <Lottie options={defaultOptions} />
      </div>
    </Suspense>
  );
};

export default DisplayLottie;
