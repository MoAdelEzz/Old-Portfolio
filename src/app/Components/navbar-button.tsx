'use client'

import { FunctionComponent, ReactNode } from "react";
import {easeInOut, motion} from "framer-motion"

interface NavbarButtonProps {
    children?: ReactNode
}
 
const NavbarButton: FunctionComponent<NavbarButtonProps> = ({children}) => {

    const hoverVariant = {
        initial: { scaleX: 0},
        hover: { scaleX: 1},
        
    };

    return ( 
        
        <motion.div className="mx-5" initial="initial" whileHover="hover" >
            
            <button className="text-white antialiased tracking-widest">
                {children}
            </button>

            <motion.div
                variants={hoverVariant}
                transition={{duration: 0.25, easings: "easeInOut"}}
                className="relative bottom-0 left-0 border-2 border-red-600"
            >
            </motion.div>

        </motion.div>



    );
}
 
export default NavbarButton;