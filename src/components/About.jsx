import About_pic from '../assets/About_pic.png';
import {motion} from "framer-motion";
function About() {
  return (
    <div className="border-b border-neutral-700 pb-4">
        <motion.h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}} className="my-20 text-center text-4xl">
            About<span className="text-neutral-500 pb-4"> Me</span>
        </motion.h1>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <motion.img whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.5}} src={About_pic} alt="About" className='rounded-2xl w-11/12'/>
                </div>
            </div>
            <div className='w-full lg:w-1/2'>
                <div className='flex justify-center lg:justify-start'>
                <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.5}} className='my-2 max-w-xl py-6 font-light tracking-tighter text-balance mx-2 lg:mx-0'>
I am an enthusiastic and curious Full Stack Developer with a deep passion for technology and continuous learning. I love exploring how innovative ideas can be transformed into real-world digital solutions that make a meaningful impact. Along with strengthening my foundation in web development, I’m expanding my knowledge into cutting-edge technologies like Artificial Intelligence, Machine Learning, and LangChain, with the goal of building intelligent and interactive web applications.

My vision is to integrate AI-driven solutions into modern web platforms, creating smarter, more personalized, and efficient user experiences. I believe in constant growth — learning new tools, experimenting with emerging technologies, and pushing boundaries to stay ahead in the ever-evolving tech landscape. My ultimate aim is to become a versatile developer capable of bridging traditional web development with the future of AI-powered innovation.</motion.p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About