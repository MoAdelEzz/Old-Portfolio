
import { FunctionComponent } from "react";
import NavbarButton from "./navbar-button";
import {motion} from 'framer-motion'

interface NavbarProps {
    
}
 
const Navbar: FunctionComponent<NavbarProps> = () => {

    const navbarVariant = {
        initial: {x: 0, y: -75},
        hover: {x: 0, y: 0},
        
    };


    return ( 
        <motion.div initial="initial" whileHover="hover" 
        className="h-16 fixed top-0 w-screen p-10 z-10"
        >
            <motion.header className="flex flex-row justify-between items-center bg-transparent w-full h-full relative"
            variants={navbarVariant}
            animate={{x:0, y:0}}

            transition={{duration: 0.5, delay: 0.4, easings: true, ease: 'easeOut'}}
            >
                {/* Icon Here  */}
                <div className="">
                    <img src="images/logo.png" className="h-16" />
                </div>

                {/* Buttons Here */}
                <div className="flex flex-row justify-evenly">
                    <NavbarButton>
                        About
                    </NavbarButton>

                    <NavbarButton>
                        Projects
                    </NavbarButton>

                    <NavbarButton>
                        Contact
                    </NavbarButton>


                </div>
            
            
            
            </motion.header>
        </motion.div>
    );
}
 
export default Navbar;