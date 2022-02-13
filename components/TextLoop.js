import {React, useRef } from "react";
// 1. Importing framer-motion
import { motion, useViewportScroll, useMotionValue, useTransform } from "framer-motion";




const TextLoop = () => {

  
  const { scrollYProgress } = useViewportScroll()
  const yValue = useTransform(scrollYProgress, [0,1], [0, 500])


 
  1

    
    

  return (
    <div>
      <div  className="text-loop-container">
                {/* 3. Using framer motion */}
        <motion.div
        
          className="text-loop"
          style={{x:yValue}}
         
        >
          <h3>Sans</h3>
          <h3>Serif</h3>
          <h3>Display</h3>
          <h3>Light</h3>
          <h3>Serif</h3>
          <h3>Heavy</h3>
          <h3>Monospace</h3>
          <h3>Bold</h3>
          <h3>Handwritten</h3>
          <h3>Regular</h3>
          <h3>Sans</h3>
          <h3>Serif</h3>
          <h3>Display</h3>
          <h3>Light</h3>
          <h3>Serif</h3>
          <h3>Heavy</h3>
          <h3>Monospace</h3>
          <h3>Bold</h3>
          <h3>Handwritten</h3>
         
        </motion.div>

        
      </div>
    </div>
  );
};

export default TextLoop;