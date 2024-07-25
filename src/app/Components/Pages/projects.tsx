import { FunctionComponent, useEffect, useRef } from "react";
import GlowingHeader from "../Elements/glowing-header";
import ProjectCard from "../Elements/ProjectCard";
import { animate, motion, useAnimation, useInView } from "framer-motion";
import { faAngular, faFlutter, faJava, faPhp, faReact, faUnity } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faMicrochip } from "@fortawesome/free-solid-svg-icons";

interface ProjectsProps {
    
}
 
const Projects: FunctionComponent<ProjectsProps> = () => {
    return (     
    <div className="w-screen min-h-screen ">

        <div className="flex flex-row gap-8 px-8 justify-around w-full">
                <motion.div initial={{x:-10, opacity: 0}} animate={{ x:0, opacity: 1}} className="flex-1 py-8 text-center">
                    <GlowingHeader header="Projects" fixed={false}></GlowingHeader>
                </motion.div>

                <div className="flex-1 py-8 text-center hidden lg:block">
                    <GlowingHeader header="プロジェクト" fixed={false}></GlowingHeader>
                </div>
        </div>      

        <div className="relative flex flex-col gap-10 justify-start items-center ">
            {/* row1 */}
            <div className="w-full flex flex-row gap-28 px-28 justify-around">   
                {/* Gigachat */}
                <motion.div 
                variants={{hidden: {opacity:0, x:-40}, visible: {opacity:1, x:0}}}
                initial="hidden"
                transition={{duration: 1, ease: "easeInOut"}}
                className="flex-1">
                    <ProjectCard 
                        name={"GigaChat"} 
                        backgroundUrl={"projects/X-Clone/background.png"} 
                        contentUrl={["projects/X-Clone/video.mp4", "projects/X-Clone/video-2.mp4", "projects/X-Clone/video-3.mp4"]}
                        contentType={"VIDEO"} 
                        description={"This project entailed the development of a comprehensive Twitter clone, meticulously replicating core functionalities and incorporating additional features to enhance user experience. The project was executed through a collaborative team effort, spanning both front-end, cross platform, testing, DevOps and back-end development."} 
                        link={"https://github.com/MoAdelEzz/X-Clone"}
                        gradientColor={[[255,255,255],[255,0,0]]}
                        tools={[faFlutter]}
                    ></ProjectCard>
                </motion.div>


                {/* Doodle Search Engine */}
                <div className="flex-1">
                    <ProjectCard 
                        name={"Doodle"} 
                        backgroundUrl={"projects/Doodle/background.png"} 
                        contentUrl={["projects/Doodle/video.mp4"]}
                        contentType={"VIDEO"} 
                        description={"A Complete Search Engine Developed using java spring boot for server side and reactjs for client ui, the server provides all search engine functionality starting from crawling the web to find web pages, an indexer that stores the data in a way that will result in optimized searching performance, ranker and query engine"} 
                        link={"https://www.linkedin.com/posts/mohammed-adel-mohammed-ezz-eldin-115609245_im-thrilled-to-share-that-we-me-and-my-activity-7076886519717707776-u96f?utm_source=share&utm_medium=member_desktop"}
                        gradientColor={[[255,255,0],[255,0,0]]}
                        tools={[faJava, faReact, faDatabase]}
                    ></ProjectCard>
                </div>
            </div>


            {/* row2 */}
            <div className="w-full flex flex-row gap-28 px-28 justify-around">   
                {/* Laptopia */}
                <motion.div 
                className="flex-1"
                variants={{hidden: {opacity:0, x:-40}, visible: {opacity:1, x:0}}}
                initial="hidden"
                transition={{duration: 1, ease: "easeInOut"}}
                >
                    <ProjectCard 
                        name={"Laptopia"} 
                        backgroundUrl={"projects/Laptopia/background.png"} 
                        contentUrl={["projects/Laptopia/video.mp4"]}
                        contentType={"VIDEO"} 
                        description={"An ecommerce application implemented using angularjs, php and mysql, it provides different type of a general ecommerce application features like cart, product listing, orders, admin dashboard and more"} 
                        link={"https://www.linkedin.com/posts/mohammed-adel-mohammed-ezz-eldin-115609245_%D8%A7%D9%84%D8%AD%D9%85%D8%AF-%D9%84%D9%84%D9%87-%D9%88-%D9%81%D9%8A-%D8%B4%D9%87%D8%B1-%D8%B9%D9%85%D9%84-%D8%AC%D9%85%D8%A8-%D8%A8%D8%B1%D9%88%D8%AC%D9%83%D8%AA-%D8%A7%D9%84%D8%A7%D8%B3%D9%85%D8%A8%D9%84%D9%8A-activity-7024826675569778688--gh8?utm_source=share&utm_medium=member_desktop"}
                        gradientColor={[[0,0,255],[255,255,255]]}
                        tools={[faAngular, faPhp, faDatabase]}
                    ></ProjectCard>
                </motion.div>




                {/* Unpredictable */}
                <div className="flex-1">
                    <ProjectCard 
                        name={""} 
                        backgroundUrl={"projects/Unpredictable/background.png"} 
                        contentUrl={["projects/Doodle/video.mp4"]}
                        contentType={"VIDEO"} 
                        description={"2D indie game developed using UNITY game engine, the game idea is something like the famous game (trap adventure) where the player will experience unexpected traps while trying to reach the finish line"} 
                        link={"https://www.linkedin.com/posts/mohammed-adel-mohammed-ezz-eldin-115609245_im-thrilled-to-share-that-we-me-and-my-activity-7076886519717707776-u96f?utm_source=share&utm_medium=member_desktop"}
                        gradientColor={[[2,0,0],[50,50,50]]}
                        tools={[faUnity]}
                    ></ProjectCard>
                </div>
            </div>



            <div></div>
            <div className="w-[2px] h-full bg-[rgba(255,255,255,0.4)] absolute" style={{boxShadow: "2px 2px 100px rgba(255,255,255,0.5)"}}></div>
        </div>
    </div>
        
    );
}
 
export default Projects;