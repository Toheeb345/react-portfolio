import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import pro_1 from "../assets/project-1.jpg";
import pro_2 from "../assets/project-2.jpeg";
import pro_3 from "../assets/project-3.jpeg"
import pro_4 from "../assets/project-4.jpeg"
import pro_5 from "../assets/project-5.jpeg"
import pro_6 from "../assets/project-6.jpeg"
import pro_7 from "../assets/project-7.jpeg"
// import { Link } from "react-router-dom"


const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
};

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8},
    visible: { opacity: 1, scale:1 }
};

const Project = ({ title, body, live , source, img }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex-col justify-center items-center p-16 text-deep-blue` 
    const projectTitle = title.split(" ").join("-").toLowerCase();

    return (
        <div className="">
        <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair italic font-bold tracking-wide">{title}</p>
                <p className="mt-7 tracking-wider">{body}</p>
            </div>
            <img src={img} alt={projectTitle} className=" w-[400px] h-[400px]" />
        </motion.div>
             <div className="flex px-[3%] pb-4 items-center basis-full text-[#343030] justify-center pt-[2px] font-semibold">
                <button className="basis-1/2 bg-blue py-1 border-2 rounded-md">
                <a className="" href={source} >GitHub Link</a>
                </button>
                <LineGradient width="w-[40%]" />
                <button className="basis-1/2 bg-blue py-1 border-2 rounded-md">
                    <a className="" href={live} >Live Page</a>
                </button>
                
            </div>
                </div>
    )
}

const Projects = () => {
    return (
        <section id="projects" className="pt-48 pb-48">
            {/* HEADINGS */}
            <motion.div 
                 className=" md:w-2/4 mx-auto text-center"
                 initial="hidden" whileInView="visible"
                 viewport={{ once: true, amount: 0.5}} 
                 transition={{ duration: 0.5}} variants={{
                 hidden: { opacity: 0, y: -50},
                 visible: { opacity: 1, y: 0}
                }}>
                    <div className="">
                    <p className=" font-playfair font-semibold text-4xl">
                       <span className="text-red">PRO</span>JECTS
                    </p>
                    <div className="flex justify-center mt-5">
                     <LineGradient width="w-1/3" />
                    </div>
                    </div>
                        
                        <p className="mt-10 mb-10">
                        Incidunt ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dignissimos quae quam id amet, incidunt error non animi sit omnis?
                        </p>
                </motion.div>

                {/* PROJECTS */}
                <div className="flex justify-center">
                 <motion.div
                 className=" grid sm:grid-cols-3 gap-2"
                 initial="visible"
                 whileInView="visible" 
                 viewport={{ once: true, amount: 0.5}} 
                 variants={container}>
                    {/* ROW 1 */}
                    <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
                        BEAUTIFUL USER INTERFACES
                    </div>

                    <Project title="Weather App" body="WavesWeather is a web app that tells the weather of any city around the globe, it fetches the data from an API and it is made with html, css and JavaScript" live="https://weatherwaves.netlify.app" source="https://github.com/Toheeb345/weather-app" img={pro_1} />

                    <Project title="project 2" body="Sed dignissimos at quae laborum consectetur dolor voluptatum." img={pro_2} />

                    {/* ROW 2 */}
                    <Project title="project 3" img={pro_3} />
                    <Project title="project 4" img={pro_4} />
                    <Project title="project 5" img={pro_5} />
                    
                    {/* ROW 3 */}
                    <Project title="project 6" img={pro_6} />
                    <Project title="project 7" img={pro_7} />

                    <div className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
                        SMOOTH USER EXPERIENCE
                    </div>
                 </motion.div>
                </div>
        </section>
    );
}
 
export default Projects;