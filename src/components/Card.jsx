import React from 'react'

function Card({ heading, details, img }) {
    return (
        <div className='bg-black-200 sm:w-80 h-auto rounded-xl xl:mx-12 mx-6 p-2 mb-10 card'>
            <div className=''>
                <img className='rounded-xl' src={img} alt="" />
            </div>
            <h1 className="text-white text-center text-xl font-medium mt-5">{heading}</h1>
            <p className="text-white font-semibold px-3 mt-3 text-xs">
                {details}
            </p>
            <div className=' text-center mt-10 mb-5 '>
                <button className="bg-black border rounded-full text-white text-xs px-5 py-1 border-white focus:outline-none">
                    Register now
                </button>
            </div>
        </div>
    )
}

export default Card
