import { motion } from "framer-motion";
import { FiBatteryCharging, FiWifi } from "react-icons/fi";
import Section from "./Section";

const Phone = () => {
    return (
        <Section>
            <section className="grid place-content-center p-12">
                <FloatingPhone />
            </section>
        </Section>

    );
};

const FloatingPhone = () => {
    return (
        <div
            style={{
                transformStyle: "preserve-3d",
                transform: "rotateY(-30deg) rotateX(15deg)",
            }}
            className="rounded-[24px] bg-violet-500"
        >
            <motion.div
                initial={{
                    transform: "translateZ(8px) translateY(-2px)",
                }}
                animate={{
                    transform: "translateZ(32px) translateY(-8px)",
                }}
                transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 2,
                    ease: "easeInOut",
                }}
                className="relative h-96 w-56 rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]"
            >
                <HeaderBar />
                <Screen />
            </motion.div>
        </div>
    );
};

const HeaderBar = () => {
    return (
        <>
            <div className="absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-neutral-900"></div>
            <div className="absolute right-3 top-2 z-10 flex gap-2">
                <FiWifi className="text-neutral-600" />
                <FiBatteryCharging className="text-neutral-600" />
            </div>
        </>
    );
};

const Screen = () => {
    return (
        <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-white">
            {/* Example logo from logoispum */}
            <svg
                width="50"
                height="39"
                viewBox="0 0 50 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-violet-500"
            >
                <path
                    d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
                    stopColor="#000000"
                ></path>
                <path
                    d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
                    stopColor="#000000"
                ></path>
            </svg>

            <button className="absolute bottom-4 left-4 right-4 z-10 rounded-lg border-[1px] bg-white py-2 text-sm font-medium text-violet-500 backdrop-blur">
                Get Started
            </button>

            {/* <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-violet-500" /> */}
            <div className="absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full bg-violet-500" />
        </div>
    );
};

export default Phone;