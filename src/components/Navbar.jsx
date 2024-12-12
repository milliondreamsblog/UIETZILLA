import React, { useState, useEffect } from 'react';
import AnimateWrapper from './AnimateWrapper'; // Import your AnimateWrapper

const Navbar = () => {
    const [scroll, setScroll] = useState(false);

    // Function to monitor scroll position
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };

    // Effect to attach scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`w-full flex items-center justify-between py-4 px-6 relative z fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${
                scroll ? 'bg-black text-white shadow-lg' : 'bg-transparent text-white'
            }`}
        >
            <div className="flex items-center space-x-4">
                {/* Logo */}
                <AnimateWrapper animationType="fadeIn"> {/* Wrap in AnimateWrapper */}
                    <div className="flex items-center">
                        <img src="path_to_logo" alt="Logo" className="w-10 h-10" />
                    </div>
                </AnimateWrapper>

                {/* Links */}
                <ul className="flex space-x-6">
                    {['Home', 'About Us', 'Our Services', 'Team', 'Projects', 'Events', "What's New?"].map((item, index) => (
                        <AnimateWrapper key={index} animationType="fadeIn"> {/* Wrap each link in AnimateWrapper */}
                            <li className="hover:underline cursor-pointer">{item}</li>
                        </AnimateWrapper>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
