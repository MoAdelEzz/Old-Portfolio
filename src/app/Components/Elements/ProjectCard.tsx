
import { FunctionComponent, useRef } from "react";
import GlowingHeader from "./glowing-header";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface ProjectCardProps {
    name: string;
    backgroundUrl: string;
    memeUrl: string;
    memeType: "IMAGE" | "VIDEO";
    description: string;
    link: string;
    gradientColor: Array<Array<number>>;
}
 
const ProjectCard: FunctionComponent<ProjectCardProps> = ({name, backgroundUrl, memeType, memeUrl, description, link, gradientColor}) => {

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


    return ( 
        <motion.div whileHover="hover" style={{background: `url(${backgroundUrl})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%"}} 
        className="w-full h-80 flex justify-center items-center relative cursor-pointer overflow-hidden"
        >
            <motion.div variants={vidVariants} transition={{duration: 0.2, ease: "easeInOut"}} className="opacity-0 hidden">
                <video src={memeUrl} autoPlay = {true} muted loop/>
            </motion.div>

            <motion.div variants={mainVariant}  className="absolute select-none">
                <GlowingHeader header={name} fixed={true} fixedColor={gradientColor}></GlowingHeader>
            </motion.div>
            
            <motion.div variants={invVariant} className="absolute opacity-0">
                <div className="w-10 h-10 flex justify-center items-center rounded-full bg-[rgba(255,0,0,0.3)]"><ArrowDown className="animate-bounce"></ArrowDown></div>
            </motion.div>
        </motion.div>
    );
}
 
export default ProjectCard;