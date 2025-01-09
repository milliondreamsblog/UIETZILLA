import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card({ heading, details, img }) {
    const navigate = useNavigate();
    
    const handleClick = () => {
        // Convert heading to URL-friendly format
        const courseId = heading
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
        
        navigate(`/course/${courseId}`);
    };

    return (
        <div 
            className='bg-gray-800 sm:w-80 h-auto rounded-xl xl:mx-12 mx-6 p-2 mb-10 card transform transition-all duration-300 hover:scale-105 cursor-pointer'
            onClick={handleClick}
        >
            <div className='overflow-hidden rounded-xl'>
                <img 
                    className='rounded-xl w-full h-48 object-cover transform transition-transform duration-300 hover:scale-110' 
                    src={img} 
                    alt={heading}
                />
            </div>
            <h1 className="text-white text-center text-xl font-medium mt-5">{heading}</h1>
            <p className="text-gray-300 px-3 mt-3 text-sm leading-relaxed">
                {details}
            </p>
            <div className='banner text-center mt-6 mb-5'>
                <button className="banner bg-blue-600 hover:bg-blue-700 transition-colors rounded-full text-white px-6 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800">
                    Learn More 
                </button>
            </div>
            <canvas id="dotsCanvas"></canvas>
        </div>

    );
}

export default Card;