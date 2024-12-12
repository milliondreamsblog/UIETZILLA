import React from 'react';
import AnimateWrapper from './AnimateWrapper';

const Ideation = () => {
    return (
        <div className="flex flex-wrap w-[80vw] left-40 mt relative">
            <div className="xl:w-3/6 lg:w-2/5 w-auto">
                {/* Animate the heading */}
                <AnimateWrapper>
                    <h1 className="text-white text-3xl lg:mt-5 mt-16">
                        Ideation<span className="text-orange600 text-4xl">.</span>
                    </h1>
                </AnimateWrapper>

                {/* Animate the paragraph */}
                <AnimateWrapper>
                    <p className="text-white text-lg my-4">
                        Wonders happen as we single-mindedly put our soul on paper. Sketching our ideas is the perfect place to start. We take rejections like a boss until the final model gets drafted.
                    </p>
                </AnimateWrapper>

                {/* Animate the image */}
                <AnimateWrapper>
                    <img
                        src="/bulb.png"
                        className="w-5/6 h-auto z-10 -ml-16 -mt-10 lg:block hidden relative"
                        draggable="false"
                        alt="bulb"
                    />
                </AnimateWrapper>
            </div>

            {/* Animate the video container */}
            <AnimateWrapper>
                <div className="lg:mt-52 mt-24 mx-auto z-30">
                    <div className="relative video transform -rotate-6 bg-[#fe644e] md:w-72 md:h-72 sm:h-64 sm:w-64 h-52 w-52 items-center rounded-2xl z-40">
                        <div className="absolute h-full w-full transform rotate-6 bg-white -top-8 left-6 rounded-2xl">
                            <div>
                                <video autoPlay className="h-full w-full mt-8" src="/idea.mp4" />
                            </div>
                        </div>
                    </div>
                </div>
            </AnimateWrapper>

            {/* Animate the SVG */}
            <AnimateWrapper>
                <svg
                    className="absolute right-[-10rem] top-[45vh]"
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
                        style={{ transform: 'translateX(-0.0180782px) translateY(5.26033px)', transformOrigin: '857px 150px' }}
                    />
                    <path
                        d="M951 72.5C965.5 92.8333 988.4 146 964 196"
                        stroke="#FFFBFB"
                        strokeLinejoin="round"
                        style={{ transform: 'translateX(-0.0180782px) translateY(5.26033px)', transformOrigin: '962.86px 134.25px' }}
                    />
                    <path
                        d="M956 210C953.989 214.469 947.974 223.527 940 224"
                        stroke="#FFFBFB"
                        style={{ transform: 'translateX(-0.0180782px) translateY(5.26033px)', transformOrigin: '948px 217px' }}
                    />
                    <circle
                        cx="858"
                        cy="228"
                        r="10.5"
                        stroke="#FFFBFB"
                        style={{ transform: 'translateX(-0.0180782px) translateY(5.26033px)', transformOrigin: '858px 228px' }}
                    />
                    <circle
                        cx="191"
                        cy="190"
                        r="10.5"
                        stroke="#FFFBFB"
                        style={{ transform: 'translateX(9.99186px) translateY(-2.13179px)', transformOrigin: '191px 190px' }}
                    />
                    <circle
                        cx="65"
                        cy="204"
                        r="10.5"
                        stroke="#FFFBFB"
                        style={{ transform: 'translateX(-0.0180782px) translateY(5.26033px)', transformOrigin: '65px 204px' }}
                    />
                    <circle
                        cx="689.5"
                        cy="234.5"
                        r="17"
                        stroke="#FFFBFB"
                        style={{ transform: 'translateX(-99.9186px) translateY(-2.13179px)', transformOrigin: '689.5px 234.5px' }}
                    />
                    <circle
                        cx="17.5"
                        cy="259.5"
                        r="17"
                        stroke="#FFFBFB"
                        style={{ transform: 'translateX(59.9512px) translateY(-2.13179px)', transformOrigin: '17.5px 259.5px' }}
                    />
                    <circle
                        cx="125.5"
                        cy="227.5"
                        r="17"
                        stroke="#FFFBFB"
                        style={{ transform: 'translateX(-0.0180782px) translateY(5.26033px)', transformOrigin: '125.5px 227.5px' }}
                    />
                </svg>
            </AnimateWrapper>
        </div>
    );
};

export default Ideation;
