import { motion } from "framer-motion";
import "./hero.scss";
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const slideVariants = {
  // Sửa chính tả
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      duration: 20,
      repeatType: "mirror",
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Trong Nghiem</motion.h2>
          <motion.h1 variants={textVariants}>
            Front End Web & Mobile Developer {/* Sửa chính tả */}
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt="Scroll Down"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={slideVariants}
        initial="initial"
        animate="animate"
      >
        Front End Web & Mobile Developer {/* Sửa chính tả */}
      </motion.div>
      <div className="imageContainer">
        <img src="/ui.png" alt="Nghiem Dev" />
      </div>
    </div>
  );
};

export default Hero;
