import { useEffect, useState } from 'react';
import './cursor.scss'
import { motion } from 'framer-motion';

const Cursor = () => {

  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const moisevent = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener('mousemove', moisevent);
    return () => {
      window.removeEventListener('mousemove', moisevent);
    }
  });


  return (
    <motion.div className='cursor' animate={{x: position.x+10, y: position.y+10}}>
      
    </motion.div>
  )
}

export default Cursor
