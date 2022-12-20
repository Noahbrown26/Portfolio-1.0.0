import LineGradient from "../utils/LineGradient";
import { motion } from "framer-motion";

import img from "../assets/project-4.jpeg";
import img1 from "../assets/project-vinyl-2.0.0.jpeg";
import img2 from "../assets/project-vinyl-1.0.0.jpeg";
import img3 from "../assets/project-5.jpeg";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, link, text, image }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
      <a href={link} target="blank">
        <p className="text-2xl font-playfair">{title}</p>
        </a>
        <p className="mt-3">
          {text}
        </p>
      </div>
      <a href={link}>
      <img src={image} alt={projectTitle} />
      </a>
    </motion.div>
  );
};

/*`../assets/${projectTitle}.jpg`*/

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
        Take a look at some of my favorite projects I have completed
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project 
          title="Stride"
          link="https://stride-1.herokuapp.com/"
          text="MERN Full-Stack"
          image={img}
           />
          <Project 
          title="Project Vinyl 2.0.0" 
          link="https://projectvinyl.herokuapp.com/"
          text="Node.JS/Express MySQL"
          image={img1}
          />

          {/* ROW 2 */}
          
          {/* ROW 3 */}
          <Project 
          title="J.A.T.E"
          link="https://jate-3.herokuapp.com/"
          text="Progressive Web Application" 
          image={img2}
          />
          <Project 
          title="Note Taker" 
          link="https://note-taker-express26.herokuapp.com/"
          text="Node.JS Express"
          image={img3}
          />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
