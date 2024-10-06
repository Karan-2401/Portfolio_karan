import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaPhp } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa6";
import {animate, motion} from "framer-motion";

const iconVariants = (duration) =>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        }
    }
})

function Technolgies() {
  return (
    <div className="border-b border-neutral-600 pb-24">
        <motion.h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}} className="my-20 text-center text-4xl">Technologies</motion.h1>
        <motion.div whileInView={{opacity:1,x:0}} initial={{x:-100,opacity:0}} transition={{duration:1.5}} className="flex flex-wrap items-center justify-center gap-4">
            <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-purple-400 p-4">
                <FaReact className="text-4xl text-cyan-400"/>
            </motion.div>
            <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-purple-400 p-4">
                <FaNodeJs className="text-4xl text-green-400"/>
            </motion.div>
            <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-purple-400 p-4">
                <SiExpress className="text-4xl text-slate-100"/>
            </motion.div>
            <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-purple-400 p-4">
                <FaPhp className="text-4xl text-purple-600"/>
            </motion.div>
            <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-purple-400 p-4">
                <SiMysql className="text-4xl"/>
            </motion.div>
            <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-purple-400 p-4">
                <IoLogoJavascript className="text-4xl text-yellow-400"/>
            </motion.div>
            <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-purple-400 p-4">
            <FaBootstrap className="text-4xl text-purple-600"/>
            </motion.div>
            <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-purple-400 p-4">
            <RiTailwindCssFill className="text-4xl text-blue-400"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technolgies