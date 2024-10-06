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
                <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.5}} className='my-2 max-w-xl py-6 font-light tracking-tighter text-balance mx-2 lg:mx-0'>Hi, I’m Karan, a dedicated Web Developer from New Delhi, India, and currently pursuing my Bachelor's degree at Delhi University.I’ve had the opportunity to hone my skills through an internship as a Web Developer at NullClass, where I excelled in front-end development using technologies like React.js, Bootstrap, Tailwind, JavaScript, HTML, and CSS to create dynamic and responsive websites and in Back End I have used Node js, Express js, Mongo Db. My commitment to professional growth is also reflected in my completion of a digital marketing course from True CV, where I learned valuable tools related to SEO and WordPress. Now, I’m expanding my expertise by diving into backend development with Node.js, Express.js, and MongoDB, with a clear goal of becoming a well-rounded full-stack developer.</motion.p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About