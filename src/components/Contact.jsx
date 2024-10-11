
import React from 'react'
import {motion} from "framer-motion";
function Contact() {
  return (
    <div className='border-b border-neutral-600 pb-20 pt-10'>
      <motion.h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}} className='my-10 text-center text-4xl'>Get In Touch</motion.h1>
      <div className='text-center tracking-tighter'>
        <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1}} className='my-4'>Sonia Vihar , New Delhi - 94 , India.</motion.p>
        <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1}} className='my-4'>{`(+91) 8178646708`}</motion.p>
        <motion.a whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1}} href="mailto:karan342772@gmail.com" className='my-4 underline hover:text-purple-500'>karan342772@gmail.com</motion.a>
      </div>
    </div>
  )
}

export default Contact
