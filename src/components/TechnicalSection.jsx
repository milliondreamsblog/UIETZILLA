import React from 'react';
import AnimateWrapper from './AnimateWrapper';

function TechnicalSection() {
    return (
        <div className="flex flex-wrap w-[80vw] left-40 mt relative">
            <div className="xl:w-3/6 lg:w-2/5 -mt-5 w-auto">
                <h1 className="text-white text-3xl mt-24">
                    Technical<span className="text-orange600 text-4xl">.</span>
                </h1>
                <AnimateWrapper>
                    <div className="text-white text-lg my-4">
                        <p className="text-xl font-semibold">Robust Code</p>
                        <p className="text-lg font-normal">We go through endless debugging to ensure our code can withstand a storm.</p>
                    </div>
                </AnimateWrapper>
                <AnimateWrapper>
                    <div className="text-white text-lg my-4">
                        <p className="text-xl font-semibold">Spick and Span</p>
                        <p className="text-lg font-normal">We ensure that we follow the best practices for every project. Sticking to convention and arranging our work as a beautiful cheese platter is a priority for us.</p>
                    </div>
                </AnimateWrapper>
                <AnimateWrapper>
                    <div className="text-white text-lg my-4">
                        <p className="text-xl font-semibold">Open source projects</p>
                        <p className="text-lg font-normal">Edit and create something of your own from our Github repositories.</p>
                    </div>
                </AnimateWrapper>
            </div>
            <div className="lg:mt-24 lg:w-1/2 w-auto mt-0 md:mb-24 mb-14">
                <video 
                    src="/technical.mp4" 
                    className="lg:w-3/4 w-screen lg:ml-24 sm:mx-auto mx-auto lg:mt-0 mt-16" 
                    autoPlay 
                    loop
                    muted
                />
            </div>
        </div>
    );
}

export default TechnicalSection;