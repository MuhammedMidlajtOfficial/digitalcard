import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

const ScrollAnimation = ({ children, animationClass, className, style }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={`${className} ${inView ? `animate__animated ${animationClass}` : ''}`}
            style={style}
        >
            {children}
        </div>
    );
};

export default ScrollAnimation;
