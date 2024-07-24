import { FunctionComponent } from "react";
import EntryStar from "../entry-page-star";
import {motion} from "framer-motion"


interface EntryPageProps {
    
}
 
const EntryPage: FunctionComponent<EntryPageProps> = () => {

    
    return ( 
        <div className="flex gap-3 justify-center items-center relative h-screen w-screen">
            {/* Logo */}
            <motion.div className="absolute translate-x-1/2 translate-y-1/2 "
                initial={{opacity: 0, x: "50%", y: "60%"}}
                animate={{opacity: 1, x: "50%", y: "50%"}}
                transition={{duration: 0.75, delay: 0, easings: true, ease: 'easeOut'}}
            
            >

                <img src="images/pathOfDevelopment.png" 
                className="-translate-x-1/2 -translate-y-1/2 opacity-30" 
                />

            </motion.div>

            <EntryStar size={50} delay={0}></EntryStar> 
            
            <EntryStar size={75} delay={0.25}></EntryStar> 

            <EntryStar size={100} delay={0.5}></EntryStar> 
            
            <EntryStar size={75} delay={0.25}></EntryStar> 

            <EntryStar size={50} delay={0}></EntryStar>

        </div>
     );
}
 
export default EntryPage;