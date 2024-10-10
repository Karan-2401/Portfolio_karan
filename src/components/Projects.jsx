import projects from "../assets";
import {motion} from "framer-motion";

function Projects() {
  return (
    <div className="border-b border-neutral-700 pb-4">
      <motion.h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}} className="my-20 text-center text-4xl">Projects</motion.h1>
      <div>
        {projects.map((x, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.5}} className="w-full lg:w-1/3">
              <a href={x.link}><img src={x.image} alt="P1" className="mb-6 rounded lg:w-2/3" /></a>
            </motion.div>
            <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.5}} className="w-full max-w-xl lg:w-2/3">
              <a href={x.link}><h1 className="mb-2 font-semibold hover:text-purple-500">{x.title}</h1></a>
              <p className="mb-4 text-neutral-400">{x.descreption}</p>
              {x.tech}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
