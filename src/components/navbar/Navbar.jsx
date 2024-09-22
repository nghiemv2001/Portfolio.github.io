import "./navbar.scss";
import { motion } from "framer-motion";
import { Sidebar } from "./sidebar/Sidebar";
export const Navbar = () => {
  return (
    <div className="navbar">
        <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Nghiem Dev
        </motion.span>
        <div className="social">
          <a href="https://github.com/nghiemv2001">
            <img src="/ic_git.svg" />
          </a>
          <a href="https://www.linkedin.com/in/nghiem-vo-8b8999265/">
            <img src="/linked.svg" />
          </a>
          <a href="https://www.facebook.com/votrongnghiem">
            <img src="/facebook.png" />
          </a>
        </div>
      </div>
    </div>
  );
};
