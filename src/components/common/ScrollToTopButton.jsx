import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { BsFillRocketFill } from "react-icons/bs";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    controls.start({
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0, rotate: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0,
        rotate: isVisible ? 360 : 0,
      }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="fixed bottom-4 right-4 z-50 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full p-3 hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-700 "
    >
      <BsFillRocketFill color="white" size={20} />
    </motion.button>
  );
};

export default ScrollToTopButton;
