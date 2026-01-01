import React from 'react';
import { motion } from 'framer-motion';
import { techSlides } from "../../constants";

const TechSlider = () => {
    const duplicatedSlides = [...techSlides, ...techSlides];

    return (
        <div className="relative h-full overflow-hidden max-md:pt-4 pt-2 bg-transparent mx-auto" style={{ width: "100%" }}>

            <div className="absolute "></div>

            <motion.div
                className="flex"
                animate={{
                    x: ['0%', '-100%'],
                    transition: {
                        ease: 'linear',
                        duration: 15,
                        repeat: Infinity,
                    }
                }}
            >
                {duplicatedSlides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0" style={{ width: `${100 / techSlides.length}%` }}>
                        <div className="flex items-center justify-center h-full">
                            <slide.icon className="w-12 h-12 text-white" />
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default TechSlider;