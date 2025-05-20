import React from "react";
import { AnimatePresence, motion } from 'framer-motion'
const FramerMotion = () => {
    // const [isVisible, setIsVisible] = useState(true);
 return(
<>
 <AnimatePresence>
  {true && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      I fade in and out!
    </motion.div>
  )}
</AnimatePresence>
<motion.div
  drag
  dragConstraints={{ top: 0, left: 0, right: 300, bottom: 300 }}
  style={{ width: 100, height: 100, background: 'red' }}
>
  Drag me
</motion.div>

</>
 )

}

export default FramerMotion;