import { motion, stagger } from "framer-motion";
import { useState } from "react";

export const Test = () => {
  const variants = {
    visible:(i)=>({ 
      opacity: 1, 
      x: 100,
       transition: {delay: i * 0.3 },
    }),
    hidden: { opacity: 0 },
  };

  const [open, setOpen] = useState(false);

  const items =[
    "item1",
    "item2",
    "item3",
    "item4",
    "item5",
  ]
  return (
    <div className="course">
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item, i) => (
              <motion.li variants={variants} key={item} custom={i}>{item}</motion.li>
        ))}
      
      </motion.ul>
    </div>
  );
};
