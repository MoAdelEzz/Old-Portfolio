'use client'

import { FunctionComponent } from "react";
import {Sparkle as Star} from "lucide-react"
import {motion} from "framer-motion"

interface EntryStarProps {
    size: number;
    delay: number;
}
 
const EntryStar: FunctionComponent<EntryStarProps> = ({size, delay}) => {
    return ( 
        <div className="flex items-center relative">
            
            <motion.div 
            initial= {{scaleX: 1, display: "none"}}
            animate= {{scaleX: 0, display: "block"}}
            transition={{duration: 0.75, delay: delay + 0.1, easings: true, ease: 'easeOut'}}
            className="bg-[rgba(142,168,252,0.09)] h-screen absolute w-full" 
            ></motion.div>


            <motion.div
                initial= {{opacity: 0, y: 50}}
                animate= {{opacity: 1, y: 0}}
                transition={{duration: 0.75, delay: delay, ease: 'easeOut'}}
            >
                <Star className="relative" size={size} fill="yellow" color="#8a8155"></Star>
            </motion.div>
        </div>
    );
}
 
export default EntryStar;