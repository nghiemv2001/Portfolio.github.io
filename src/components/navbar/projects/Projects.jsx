import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Booking Restaurant",
    desc: "As part of a team of four, I am responsible as a front-end developer for building the UI/UX for the website using the React library and independently designing the Figma prototype for the project",
    video: "../../../../public/video_restaurant.mp4",
  },
  {
    id: 2,
    title: "Booking Beverage",
    desc: "While learning more about TypeScript, I independently built a 'booking beverage' website using API hooks.",
    video: "../../../../public/vid_booking_beverage.mp4",
  },
  {
    id: 3,
    title: "UI Flutter",
    desc: "I practiced with Flutter by creating the UI for Instagram and a login page.",
    video: "../../../../public/vid_ui_flutter.mp4",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);
  return (
    <section ref={ref}>
      <div className="container">
        <div className="wrapper">
          <div className="videoContainer">
          <video
              src={item.video}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="project">
      <div className="progress">
        <h1>Projects Works</h1>
        <motion.div style={{ scaleX }} className="progress-bar"></motion.div>
      </div>
      {projects.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
