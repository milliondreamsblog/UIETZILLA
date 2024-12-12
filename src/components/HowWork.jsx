import React from 'react';
import Ideation from './Ideation';
import Message from './Message';
import Design from './Design';
import TechnicalSection from './TechnicalSection';

function HowWork() {
    return (
        <>
            <h1 className="mt-16 text-white text-center font-medium text-3xl">How we work</h1>
            <Message msg={"Sketch me like one of your live projects!"} />
            <Ideation />
            <Message msg={"2040 just called; they said they want their design back."} />
            <Design />
            <Message className={'bg-[#fe644e]'} msg={"404 does mnot exist in our number line"} />
            <TechnicalSection />
        </>
    );
}

export default HowWork;