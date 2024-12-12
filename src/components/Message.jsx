import React from 'react'

function Message({ msg,
    className
}) {
    return (
        <div className={`message bg-[#3b82f6] float-right px-6 sm:mr-24 mr-20 py-5 rounded-xl z-10 relative mt-20 ${className}`}>
            <div className="absolute bg-black-200 h-full w-full top-0 left-0" style={{ opacity: 0 }}></div>
            <p>{msg}</p>
            <img
                className="absolute right-0 transform left-full ml-5 sm:top-5 top-1/2"
                src="./images/messageLogo.png"
                alt="logo"
                draggable="false"
            />
            <div className="absolute border-white w-full h-full top-0 left-0 rounded-xl border transform -translate-y-1 -translate-x-1 z-10"></div>
            <div className="corner h-5 w-6 bg--[#3b82f6] absolute right-0 transform translate-x-1/2 rounded-bl-2xl">
                <div className="block bg-black-200 h-4 w-3 float-right rounded-bl-xl"></div>
            </div>
        </div>
    )
}

export default Message