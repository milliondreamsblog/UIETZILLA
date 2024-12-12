import React from 'react';
import Navbar from './Navbar';
import AnimateWrapper from './AnimateWrapper';

function Hero() {
    return (
        <>
            <div className='relative'>
                <Navbar />
                <div className='w-full h-screen'>
                    <div className='absolute'>
                        <AnimateWrapper>
                            <h1 className="text-center absolute text-white sm:text-5xl top-[46vh] left-[55vh] w-[75vh] text-4xl font-semibold">
                                The campus club you love
                            </h1>
                        </AnimateWrapper>
                        <AnimateWrapper>
                            <p className='text-center absolute text-white sm:text-xl top-[56vh] left-[55vh] w-[75vh] text-4xl opacity-30'>
                                We make tech exuberant and open source. We know no limits.
                            </p>
                        </AnimateWrapper>
                    </div>
                    <img className='w-full h-screen' src="/herobg.png" alt="bg" />
                </div>
            </div>
        </>
    );
}

export default Hero;
