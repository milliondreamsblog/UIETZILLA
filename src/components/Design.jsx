import React from 'react';
import AnimateWrapper from './AnimateWrapper'; // Import the reusable animation wrapper

const Design = () => {
  return (
    <div className="flex flex-wrap w-[80vw] left-40 mt relative">
      <div className="xl:w-3/6 lg:w-2/5 w-auto">
        <div>
          {/* Wrap the animated text inside the AnimateWrapper */}
          <AnimateWrapper>
            <span className="text-white text-3xl relative lg:mt-24">
              Design<span className="text-orange600 text-4xl">.</span>
              <img
                src="/arrow.png"
                className="absolute top-full left-full h-5 transform -translate-y-2"
                alt="arrow"
              />
            </span>
          </AnimateWrapper>

          {/* Wrap paragraph inside AnimateWrapper for animation */}
          <AnimateWrapper>
            <p className="text-white text-lg my-4">
              Getting our creative juices flowing helps us create magnificent designs. The design puts flesh and blood to the existing idea. These designs help turn our dreams into reality.
            </p>
          </AnimateWrapper>

          {/* Wrap the video element */}
          <AnimateWrapper>
            <div>
              <video
                src="/pendrop.mp4"
                className="w-full mt-16 mx-auto"
                autoPlay
              ></video>
            </div>
          </AnimateWrapper>
        </div>
      </div>

      <div className="mt-24 lg:block hidden z-20 h-96">
        <AnimateWrapper>
          <video
            className="w-96 z-30 h-auto xl:ml-16 ml-10 mt-0 border-orange600 border-8 rounded-2xl"
            src="/draw.mp4"
            autoPlay
          ></video>
        </AnimateWrapper>
      </div>

      <svg
        className="absolute top-2/3 -mt-28 z-0"
        width="1007"
        height="400"
        viewBox="0 0 1007 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="857"
          cy="150"
          r="149.5"
          stroke="#FFFBFB"
          style={{
            transform: 'translateX(-34.2922px) translateY(0.59549px)',
            transformOrigin: '857px 150px',
          }}
        />
        <path
          d="M951 72.5C965.5 92.8333 988.4 146 964 196"
          stroke="#FFFBFB"
          strokeLinejoin="round"
          style={{
            transform: 'translateX(-34.2922px) translateY(0.59549px)',
            transformOrigin: '962.86px 134.25px',
          }}
        />
        <path
          d="M956 210C953.989 214.469 947.974 223.527 940 224"
          stroke="#FFFBFB"
          style={{
            transform: 'translateX(-34.2922px) translateY(0.59549px)',
            transformOrigin: '948px 217px',
          }}
        />
        <circle
          cx="858"
          cy="228"
          r="10.5"
          stroke="#FFFBFB"
          style={{
            transform: 'translateX(-34.2922px) translateY(0.59549px)',
            transformOrigin: '858px 228px',
          }}
        />
        <circle
          cx="191"
          cy="190"
          r="10.5"
          stroke="#FFFBFB"
          style={{
            transform: 'translateX(9.82141px) translateY(-3.91056px)',
            transformOrigin: '191px 190px',
          }}
        />
        <circle
          cx="65"
          cy="204"
          r="10.5"
          stroke="#FFFBFB"
          style={{
            transform: 'translateX(-34.2922px) translateY(0.59549px)',
            transformOrigin: '65px 204px',
          }}
        />
        <circle
          cx="689.5"
          cy="234.5"
          r="17"
          stroke="#FFFBFB"
          style={{
            transform: 'translateX(-98.2141px) translateY(-3.91056px)',
            transformOrigin: '689.5px 234.5px',
          }}
        />
        <circle
          cx="17.5"
          cy="259.5"
          r="17"
          stroke="#FFFBFB"
          style={{
            transform: 'translateX(58.9284px) translateY(-3.91056px)',
            transformOrigin: '17.5px 259.5px',
          }}
        />
        <circle
          cx="125.5"
          cy="227.5"
          r="17"
          stroke="#FFFBFB"
          style={{
            transform: 'translateX(-34.2922px) translateY(0.59549px)',
            transformOrigin: '125.5px 227.5px',
          }}
        />
      </svg>
    </div>
  );
};

export default Design;
