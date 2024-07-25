
import { FunctionComponent } from "react";
import {motion} from 'framer-motion'
import NavbarButton from "./navbar-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface NavbarProps {
    
}
 
const Navbar: FunctionComponent<NavbarProps> = () => {

    const navbarVariant = {
        initial: {x: 0, y: -75},
        hover: {x: 0, y: 0},
        
    };


    return ( 
        <motion.div initial="initial" whileHover="hover" 
        className="h-16 fixed top-0 w-screen p-10 z-20 bg-[rgba(0,0,0,0.7)]"
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
                    <div onClick={()=>{window.location.href = "https://www.facebook.com/profile.php?id=100011332956125"}}>
                        <NavbarButton>
                            <FontAwesomeIcon icon={faFacebook} fontSize={40}></FontAwesomeIcon>
                        </NavbarButton>
                    </div>

                    <div onClick={()=>{window.location.href = "https://www.linkedin.com/in/mohammed-adel-mohammed-ezz-eldin-115609245/"}}>
                        <NavbarButton>
                            <FontAwesomeIcon icon={faLinkedin} fontSize={40}></FontAwesomeIcon>
                        </NavbarButton>
                    </div>

                    <div onClick={()=>{window.location.href = "https://github.com/MoAdelEzz"}}>
                        <NavbarButton>
                            <FontAwesomeIcon icon={faGithub} fontSize={40}></FontAwesomeIcon>
                        </NavbarButton>
                    </div>
                </div>
            </motion.header>
        </motion.div>
    );
}
 
export default Navbar;