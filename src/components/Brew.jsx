import React from 'react';
import AnimateWrapper from './AnimateWrapper'; // Ensure you import AnimateWrapper
import Card from './Card';

function Brew() {
    return (
        <>
            <div className='w-full h-auto flex justify-center'>
            <AnimateWrapper animationType="fadeIn">
                    <h2 className='text-3xl text-white font-semibold mt-28'>Our Latest Brew</h2>
                </AnimateWrapper>
            </div>
            <div className='mt-16 flex flex-wrap justify-around gap-y-5'>
                <AnimateWrapper>
                    <Card
                        heading={"MOZOHACK 5.0"}
                        img={"/Card1st.png"}
                        details={"Continuing the legacy of our past iterations, we have come back with even more grit, more challenge and most of all more fun. SRMKZILLA invites you to the most anticipated hackathon of the year - MOZOHACK 5.0"} />
                </AnimateWrapper>
                <AnimateWrapper>
                    <Card
                        heading={"MOZFEST '24"}
                        img={"/Card2nd.png"}
                        details={"It's time to break free from the mundane and dive into the ultimate adventure, we’re bringing you MOZOFEST’24! Get ready to turn up the energy and join us for an epic experience that'll leave you buzzing with excitement"} />
                </AnimateWrapper>
                <AnimateWrapper>
                    <Card
                        heading={"Off The Clock"}
                        img={"/Card3rd.png"}
                        details={"Finding your spark in this chaotic world must seem extremely knackering and perplexing, but as always, SRMKZILLA is up for the task. We present to you “off the clock” - a harmonious event that soothes your ‘soul’. Our guiding lights - speakers will speak to you about all things ‘purpose’ - how to discover your own and what to do with it!"} />
                </AnimateWrapper>
                <AnimateWrapper>
                    <Card
                        heading={"Neo's Nexus"}
                        img={"/Card4th.jpg"}
                        details={"The Matrix is a system, Neo. That system is our enemy. But look around when you're inside—what do you see? Students struggling with the same outdated, ineffective methods of learning web development. KZILLA is here to disrupt that. With our workshop, Neo’s Nexus, you'll discover how to find the right resources and truly kickstart your journey into Web-Dev!"} />
                </AnimateWrapper>
                {/* Duplicate cards can also be wrapped */}
                <AnimateWrapper>
                    <Card
                        heading={"MOZOHACK 5.0"}
                        img={"/Card1st.png"}
                        details={"Continuing the legacy of our past iterations, we have come back with even more grit, more challenge and most of all more fun. SRMKZILLA invites you to the most anticipated hackathon of the year - MOZOHACK 5.0"} />
                </AnimateWrapper>
                <AnimateWrapper>
                    <Card
                        heading={"MOZFEST '24"}
                        img={"/Card2nd.png"}
                        details={"It's time to break free from the mundane and dive into the ultimate adventure, we’re bringing you MOZOFEST’24! Get ready to turn up the energy and join us for an epic experience that'll leave you buzzing with excitement"} />
                </AnimateWrapper>
            </div>
        </>
    );
}

export default Brew;
