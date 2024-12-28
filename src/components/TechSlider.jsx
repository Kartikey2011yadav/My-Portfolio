import React from 'react';
import { motion } from 'framer-motion';
import {
    FigmaLogoIcon,
    FramerLogoIcon,
    SketchLogoIcon,
    TwitterLogoIcon,
    GitHubLogoIcon,
    VercelLogoIcon,
    NotionLogoIcon,
    DiscordLogoIcon,
    InstagramLogoIcon,
    LinkedInLogoIcon,
} from "@radix-ui/react-icons";

const slides = [
    { icon: <FigmaLogoIcon /> },
    { icon: <TwitterLogoIcon /> },
    { icon: <GitHubLogoIcon /> },
    { icon: <InstagramLogoIcon /> },
    { icon: <LinkedInLogoIcon /> },
    { icon: <DiscordLogoIcon /> },
    { icon: <SketchLogoIcon /> },
    { icon: <NotionLogoIcon /> },
    { icon: <VercelLogoIcon /> },
];



const TechSlider = () => {
    const duplicatedSlides = [...slides, ...slides];

    return (
        <div className="relative h-full overflow-hidden max-md:pt-4 bg-transparent mx-auto" style={{ width: "100%" }}>

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
                    <div key={index} className="flex-shrink-0" style={{ width: `${100 / slides.length}%` }}>
                        <div className="flex items-center justify-center h-full">
                            {slide.icon}
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default TechSlider;