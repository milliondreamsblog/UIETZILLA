import React from 'react';
import Navbar from './Navbar';
import AnimateWrapper from './AnimateWrapper';
import { Link } from 'react-router-dom';
function Hero() {
    return (
        <>
            <div className="relative">
                <Navbar />
                <div className="w-full h-screen flex items-center justify-between bg-gray-50 relative px-10">
                    {/* Left Content */}
                    <div className="max-w-lg">
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                            The #1 AI-powered LMS <br /> built for course creators
                        </h1>
                        <p className="mt-4 text-lg text-gray-700">
                            From digital products to marketing and selling tools, get everything you need to build a profitable business, all in one scalable platform.
                        </p>
                        <div className="mt-6 flex space-x-4">
                        <AnimateWrapper animationType="fadeIn">
                                <Link
                                    to="/register"
                                    className="bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-00"
                                >
                                    Get Started Free
                                </Link>
                        </AnimateWrapper>
                            <AnimateWrapper animationType="fadeIn">
                                <Link
                                    to="/register"
                                    className="bg-transparent border border-teal-500 text-teal-500 px-6 py-2 rounded-md hover:bg-teal-100"
                                >
                                    DEMO VIDEO
                                </Link>
                            </AnimateWrapper>
                        </div>
                    </div>

                    {/* Right Video Section */}
                    <div className="relative max-w-xl h-[70vh] shadow-lg">
                        <video
                            className="w-full h-full object-cover rounded-lg"
                            src="https://www.learnworlds.com/app/themes/learnworlds/dist/video/homepage-version3/hero.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                        <div className="absolute top-5 left-5 bg-black/75 text-white p-4 rounded-lg">
                            <h2 className="text-lg font-semibold">Create an Online Course</h2>
                            <p className="text-sm mt-2">What are the 4 keys of innovation?</p>
                            <ul className="mt-2 space-y-1">
                                <li>✔ Collaboration</li>
                                <li>✔ Ideation</li>
                                <li>✔ Implementation</li>
                                <li>✔ Value Creation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
