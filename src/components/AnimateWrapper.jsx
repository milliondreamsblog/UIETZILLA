import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimateWrapper = ({ children }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true, // Animation runs once when it comes into view
        threshold: 0.1,    // Percentage of the component that needs to be visible to trigger the animation
    });

    React.useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: { duration: 0.8 },
            });
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }} // Initial state before it becomes visible
            animate={controls} // Animates when the component is in view
        >
            {children}
        </motion.div>
    );
};

export default AnimateWrapper;
