import Portfolio_img from '../assets/Portfolio_img.png';
import { motion } from "framer-motion";

const container = (delay)=> ({
    hidden:{x:-100,opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5, delay:delay},
    },
});

function Hero() {
  return (
    <div className='border-b border-neutral-700 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1 variants={container(0)} initial="hidden" animate="visible" className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
                        Karan Yadav
                    </motion.h1>
                    <motion.span variants={container(0.5)} initial="hidden" animate="visible" className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
                        Full Stack Developer
                    </motion.span>
                    <motion.p variants={container(1)} initial="hidden" animate="visible" className='my-2 max-w-xl py-6 font-light tracking-tighter mx-2 lg:mx-0'>I am a Full Stack Developer skilled in designing and developing responsive, user-focused websites and web applications. Proficient in modern front-end technologies such as React.js, Next.js, JavaScript, HTML5, CSS3, Bootstrap, Tailwind CSS, and WordPress, as well as backend technologies including Node.js, Express.js, MongoDB, PHP, Laravel, and CodeIgniter. Experienced in building dynamic user interfaces, integrating RESTful APIs, managing state with Redux Toolkit, and optimizing performance for scalability and efficiency. Passionate about writing clean, maintainable code and delivering seamless digital experiences across the full development lifecycle — from concept to deployment.
                    </motion.p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8 px-2'>
                <div className='flex justify-center'>
                    <motion.img initial={{x:100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:1,delay:1.2}} src={Portfolio_img} alt="Karan Yadav" style={{height:'500px'}} className='rounded-xl'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero