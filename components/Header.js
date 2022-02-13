import React from 'react'
import TextLoop from './TextLoop'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <motion.div className='h-screen'
      style={{
        opacity:0
    }}
      animate={{
        y:-50,
        opacity:1
      }}
      transition={{
        duration:1.4,
        delayChildren: 0.3,
       staggerChildren: 0.2
      }}>
      <h1 className='typeSeek-heading'> TypeSeek </h1>
      <p className='font-serif text-center text-3xl pt-12' >Explore Fonts</p>
      <TextLoop />
    </motion.div>
  )
}

export default Header