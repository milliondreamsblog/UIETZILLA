import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimateWrapper from './AnimateWrapper';
import img from './image/smart.jpg'
const Navbar = () => {
    const [scroll, setScroll] = useState(false);

    // Function to monitor scroll position
    const handleScroll = () => {
        setScroll(window.scrollY > 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`w-full flex items-center justify-between py-4 px-6 fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${
                scroll ? 'bg-black text-white shadow-lg py-2' : 'bg-transparent text-white py-4'
            }`}
        >
            {/* Logo or Company Name */}
            <div className="flex items-center">
                <AnimateWrapper animationType="fadeIn">
                    <Link to="/" className="text-xl font-bold">
<<<<<<< HEAD
                        {scroll ? 'MyCompany' : <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBsz7N7JJdEj_WEz-gy4kNUPmxT9Fg35EzlA&s" alt="Logo" className="w-10 h-10" />}
=======
                        {scroll ? 'MyCompany' : <img src={img} alt="Logo" className="w-10 h-10" />}
>>>>>>> c703df621139ccedf1bfb8e56b3d6848e6856b08
                    </Link>
                </AnimateWrapper>
            </div>

            {/* Navigation Links (Hide on Scroll) */}
            {!scroll && (
                <ul className="flex space-x-6">
                    {['Home', 'About Us', 'Team', 'Projects', 'Events', "What's New?"].map((item, index) => (
                        <AnimateWrapper key={index} animationType="fadeIn">
                            <li className="hover:underline cursor-pointer">
                                <Link to={`/${item.replace(/\s+/g, '').toLowerCase()}`}>{item}</Link>
                            </li>
                        </AnimateWrapper>
                    ))}
                </ul>
            )}

            {/* Login and Register Buttons */}
            <div className="flex items-center space-x-4">
                {!scroll && (
                    <AnimateWrapper animationType="fadeIn">
                        <Link
                            to="/login"
                            className={`transition-colors rounded-full px-4 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                                scroll
                                    ? 'bg-white text-black hover:bg-gray-200 focus:ring-gray-400 focus:ring-offset-black'
                                    : 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-gray-800'
                            }`}
                        >
                            Login
                        </Link>
                    </AnimateWrapper>
                )}
                {!scroll && (
                    <AnimateWrapper animationType="fadeIn">
                        <Link
                            to="/register"
                            className="bg-blue-600 hover:bg-blue-700 transition-colors rounded-full text-white px-6 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                            Register
                        </Link>
                    </AnimateWrapper>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
