import { FunctionComponent } from "react";
import GlowingHeader from "../Elements/glowing-header";
import ProjectCard from "../Elements/ProjectCard";

interface ProjectsProps {
    
}
 
const Projects: FunctionComponent<ProjectsProps> = () => {
    return ( 
        
    <div className="w-screen min-h-screen">

        <div className="flex flex-row gap-8 px-8 justify-around w-full">
                <div className="flex-1 py-8 text-center">
                    <GlowingHeader header="Projects" fixed={false}></GlowingHeader>
                </div>

                <div className="flex-1 py-8 text-center hidden lg:block">
                    <GlowingHeader header="プロジェクト" fixed={false}></GlowingHeader>
                </div>
        </div>      

        <div className="relative flex flex-col justify-start items-center">
            
            <div className="w-full flex flex-row gap-28 px-28 justify-around">
                <div className="flex-1">
                    <ProjectCard 
                        name={"GigaChat"} 
                        backgroundUrl={"projects/X-Clone/background.png"} 
                        memeUrl={"projects/X-Clone/meme.mp4"} 
                        memeType={"VIDEO"} 
                        description={""} 
                        link={"https://github.com/MohammedAdel/X-Clone"}
                        gradientColor={[[255,255,255],[255,0,0]]}
                    ></ProjectCard>
                </div>

                <div className="flex-1">
                    <ProjectCard 
                        name={"x86 Processor"} 
                        backgroundUrl={"projects/Processor/background.png"} 
                        memeUrl={"projects/Processor/meme.mp4"} 
                        memeType={"VIDEO"} 
                        description={""} 
                        link={"https://github.com/MohammedAdel/X-Clone"}
                        gradientColor={[[0,0,0],[255,0,0]]}
                    ></ProjectCard>
                </div>
                
            </div>
               


            <div className="w-[2px] h-full bg-[rgba(255,255,255,0.4)] absolute" style={{boxShadow: "2px 2px 100px rgba(255,255,255,0.5)"}}></div>
        </div>
    </div>
        
    );
}
 
export default Projects;