import React from 'react';
import AnimateWrapper from './AnimateWrapper'; // Adjust the path if necessary

function Footer() {
    return (
        <AnimateWrapper>
            <footer className="relative bg-cover footer-bg w-full h-[-80vh]">
                <div className="relative">
                    <div className="absolute flex text-white md:text-2xl text-xl md:top-20 top-auto bottom-24 right-1/2 transform translate-x-1/2 md:translate-x-0 md:right-16">
                        {/* Social Links */}
                        <a href="..." className="group h-10 relative w-10 border-2 hover:border-logoGreen border-white rounded-full mr-3 transition duration-300">
                            <svg aria-hidden="true" /* include your SVG properties here */></svg>
                        </a>
                        {/* More icons */}
                    </div>

                    <div className='flex h-[40vh] relative left-[60vw]'>
                        {/*Explore Section */}
                        <div className="md:mr-28 mr-12 text-white ml-2 relative top-10 sm:block hidden">
                            <h1 className="md:text-2xl text-xl relative">Explore
                                <div className="absolute top-full mt-2 left-0 w-24 md:w-32 h-1 bg-white opacity-25"></div>
                                <div className="absolute top-full h-1 mt-2 w-16 md:w-24 bg-baseBlue left-0"></div>
                            </h1>
                            <div className="mt-8 text-sm md:text-lg">
                                <a href="/" className="text-logoGreen block mt-2 cursor-pointer transition duration-75">Home</a>
                                <a href="/projects" className="block mt-2 cursor-pointer transition duration-75">Projects</a>
                                <a href="/about" className="block mt-2 cursor-pointer transition duration-75">About Us</a>
                                <a href="/services" className="block mt-2 cursor-pointer transition duration-75">Our Services</a>
                                <a href="/team" className="block mt-2 cursor-pointer transition duration-75">Team</a>
                            </div>
                        </div>

                        {/* Get in Touch Section */}
                        <div className="mt-12 text-white">
                            <h1 className="md:text-2xl text-xl relative">Get in Touch
                                <div className="absolute top-full mt-2 left-0 w-24 md:w-32 h-1 bg-white opacity-25"></div>
                                <div className="absolute top-full h-1 mt-2 w-16 md:w-24 bg-baseBlue left-0"></div>
                            </h1>
                            <div className="mt-8 text-sm md:text-lg">
                                <a rel="noopener noreferrer" href="mailto:technical@srmkzilla.net" className="cursor-pointer flex items-center">
                                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                    akshatsan@gmail.com
                                </a>
                                <a rel="noopener noreferrer" href="tel:9767246968" className="mt-2 cursor-pointer flex items-center">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-green-500 mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M391 480c-19.52 0-46.94-7.06-88-30-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0128.64-15.2c1-.43 1.93-.84 2.76-1.21 4.95-2.23 12.45-5.6 21.95-2 6.34 2.38 12 7.25 20.86 16 18.17 17.92 43 57.83 52.16 77.43 6.15 13.21 10.22 21.93 10.23 31.71 0 11.45-5.76 20.28-12.75 29.81-1.31 1.79-2.61 3.5-3.87 5.16-7.61 10-9.28 12.89-8.18 18.05 2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47 1.48-1.13 3-2.3 4.59-3.47 10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18 18 9.08 59.11 33.59 77.14 51.78 8.77 8.84 13.66 14.48 16.05 20.81 3.6 9.53.21 17-2 22-.37.83-.78 1.74-1.21 2.75a176.49 176.49 0 01-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.42 67.42 0 01391 480z"></path>
                                    </svg>
                                   
                                </a>
                                <a rel="noopener noreferrer" href="tel:9653317382" className="mt-2 cursor-pointer flex items-center">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-green-500 mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M391 480c-19.52 0-46.94-7.06-88-30-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0128.64-15.2c1-.43 1.93-.84 2.76-1.21 4.95-2.23 12.45-5.6 21.95-2 6.34 2.38 12 7.25 20.86 16 18.17 17.92 43 57.83 52.16 77.43 6.15 13.21 10.22 21.93 10.23 31.71 0 11.45-5.76 20.28-12.75 29.81-1.31 1.79-2.61 3.5-3.87 5.16-7.61 10-9.28 12.89-8.18 18.05 2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47 1.48-1.13 3-2.3 4.59-3.47 10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18 18 9.08 59.11 33.59 77.14 51.78 8.77 8.84 13.66 14.48 16.05 20.81 3.6 9.53.21 17-2 22-.37.83-.78 1.74-1.21 2.75a176.49 176.49 0 01-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.42 67.42 0 01391 480z"></path>
                                    </svg>
                                   
                                </a>
                                <a rel="noopener noreferrer" href="tel:9653317382" className="mt-2 cursor-pointer flex items-center">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-green-500 mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M391 480c-19.52 0-46.94-7.06-88-30-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0128.64-15.2c1-.43 1.93-.84 2.76-1.21 4.95-2.23 12.45-5.6 21.95-2 6.34 2.38 12 7.25 20.86 16 18.17 17.92 43 57.83 52.16 77.43 6.15 13.21 10.22 21.93 10.23 31.71 0 11.45-5.76 20.28-12.75 29.81-1.31 1.79-2.61 3.5-3.87 5.16-7.61 10-9.28 12.89-8.18 18.05 2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47 1.48-1.13 3-2.3 4.59-3.47 10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18 18 9.08 59.11 33.59 77.14 51.78 8.77 8.84 13.66 14.48 16.05 20.81 3.6 9.53.21 17-2 22-.37.83-.78 1.74-1.21 2.75a176.49 176.49 0 01-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.42 67.42 0 01391 480z"></path>
                                    </svg>
                                    
                                </a>
                                <a rel="noopener noreferrer" href="https://what.sapp.link/kzilla-24" className="mt-2 cursor-pointer flex items-center">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-green-500 mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M391 480c-19.52 0-46.94-7.06-88-30-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0128.64-15.2c1-.43 1.93-.84 2.76-1.21 4.95-2.23 12.45-5.6 21.95-2 6.34 2.38 12 7.25 20.86 16 18.17 17.92 43 57.83 52.16 77.43 6.15 13.21 10.22 21.93 10.23 31.71 0 11.45-5.76 20.28-12.75 29.81-1.31 1.79-2.61 3.5-3.87 5.16-7.61 10-9.28 12.89-8.18 18.05 2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47 1.48-1.13 3-2.3 4.59-3.47 10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18 18 9.08 59.11 33.59 77.14 51.78 8.77 8.84 13.66 14.48 16.05 20.81 3.6 9.53.21 17-2 22-.37.83-.78 1.74-1.21 2.75a176.49 176.49 0 01-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.42 67.42 0 01391 480z"></path>
                                    </svg>
                                   
                                </a>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-center text-white mt-16 text-sm md:mt-auto pb-5">© crafted with ❤️ 2025</h1>
                </div>
            </footer>
        </AnimateWrapper>
    );
}

export default Footer;