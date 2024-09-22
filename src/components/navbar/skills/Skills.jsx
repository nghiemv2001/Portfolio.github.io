import { useRef } from "react";
import "./skills.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -1500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 1,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Skills = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="skills"
      variants={variants}
      initial="initial"
      ref={ref}
      whileInView="animate"
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          focus on design UI Web and Mobile for your business <br /> and move
          forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="tileContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Tech</motion.b> I Use
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Design UI</motion.b>
          </h1>
          <button>WHICH TECH I USE?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <p>REACT JS</p>
          <div style={{ backgroundColor: "white" }}>
            <img src="/ic_react.svg" alt="" />
          </div>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          {" "}
          <p>REACT NATIVE</p>
          <div style={{ backgroundColor: "#212121" }}>
            <img src="/ic_react.svg" alt="" />
          </div>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <p>FLUTTER</p>
          <div style={{ backgroundColor: "white" }}>
            <img src="ic_flutter.svg" alt="" />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
