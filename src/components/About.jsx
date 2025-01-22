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
I am Karan Yadav, a passionate Front-End Developer with 8+ months of experience in building responsive, user-friendly websites and applications. Proficient in technologies like React.js, Node.js, and WordPress, I specialize in creating visually appealing and functional web solutions. My expertise includes optimizing website performance, integrating APIs, and implementing SEO strategies to enhance user engagement and drive organic traffic.  

I have developed diverse projects, including a blog platform, Google Gemini and Stack Overflow clones, and interactive games, showcasing my ability to merge creativity with technical precision. I am always eager to learn and explore innovative technologies to deliver impactful digital experiences.</motion.p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About