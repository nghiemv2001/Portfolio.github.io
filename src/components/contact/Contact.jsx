import { useRef, useState } from "react";
import "./contact.scss";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_brb9dvz', 'template_df23zb8', formRef.current, {
            publicKey: '7JAkdwuXkevBtHT6X',
          })
          .then(
            (result) => {
              console.log(result.text);

            },
            (error) => {
              console.log(error.text);
    
            },
          );
      };
  return (
    <motion.div className="contact" variants={variants}initial="initial" whileInView="animate">
      <motion.div className="textContainer"  variants={variants}>
        <motion.h1  variants={variants}>Contact With Me</motion.h1>
        <motion.div   className="item">
          <h2>Email</h2>
          <span>nghiemV2001@gmail.com</span>
        </motion.div>
        <motion.div className="item">
          {" "}
          <h2>Phone</h2>
          <span>08308 016 036</span>
        </motion.div>
      </motion.div>
      <div className="formContainer" >
        <form ref={formRef} onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="name"/>
          <input type="email" placeholder="Email" name="email"/>
          <textarea rows={8} placeholder="Message" name="message"/>
          <button>Send</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
