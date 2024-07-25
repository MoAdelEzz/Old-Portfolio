
import { FunctionComponent, useRef } from "react";
import GlowingHeader from "./glowing-header";
import { motion } from "framer-motion";
import { ArrowRight} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlutter, IconDefinition, } from "@fortawesome/free-brands-svg-icons"; 

interface ProjectCardProps {
    name: string;
    backgroundUrl: string;
    contentUrl: Array<string>;
    contentType: "IMAGE" | "VIDEO";
    description: string;
    link: string;
    gradientColor: Array<Array<number>>;
    tools: Array<IconDefinition> | null;
}
 
const ProjectCard: FunctionComponent<ProjectCardProps> = ({name, backgroundUrl, contentType, contentUrl, description, link, gradientColor, tools}) => {

    const mainVariant = {
        initial: { opacity: 1},
        hover: { opacity: 0},
    };
    const invVariant = {
        initial: { opacity: 0},
        hover: { opacity: 1},
    };

    const vidVariants = {
        initial: { opacity:0, display: "none"},
        hover: { opacity: 1, display: "block"},
    }

    const toolsRender = tools?.map((tool, idx)=>{return <FontAwesomeIcon icon={tool} key={"tool" +idx} fontSize={40} color="red"></FontAwesomeIcon>})
    

    const contents = contentUrl.map((url, idx)=>{
        return <motion.div key={"video" + idx} variants={vidVariants} transition={{duration: 0.2, ease: "easeInOut"}} className="opacity-0 hidden w-full h-auto">
                    <video src={url} autoPlay = {true} muted loop width={500} className="w-full h-full"/>
                </motion.div>
    })

    return ( 
        <motion.div whileHover="hover" style={{background: `url(${backgroundUrl})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%"}} 
        className="w-full h-80 flex justify-center items-center relative cursor-pointer overflow-hidden rounded-xl"
        onClick={()=>{window.location.href = link}}
        >
            {contents}

            <motion.div variants={mainVariant}  className="absolute select-none">
                <GlowingHeader header={name} fixed={true} fixedColor={gradientColor}></GlowingHeader>
            </motion.div>
            
            <motion.div variants={invVariant} className="absolute opacity-0 z-10 bg-[rgba(0,0,0,0.6)] w-full h-full flex flex-col items-center justify-around text-center">
                <div className="w-full flex justify-center items-center gap-8">
                    {toolsRender}             
                </div>
                <p>{description}</p>
                <div className=" text-gray-400">
                    click to check the full project <ArrowRight className="inline "></ArrowRight>
                </div>
            </motion.div>
        </motion.div>
    );
}
 
export default ProjectCard;