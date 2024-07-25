'use client'

import { motion, useAnimation, useInView } from "framer-motion";
import { FunctionComponent, ReactNode, useEffect, useRef } from "react";

interface AnimateOnScrollProps {
    children: ReactNode
    className: string
    direction: "RIGHT" | "LEFT"
}
 
const AnimateOnScroll: FunctionComponent<AnimateOnScrollProps> = ({children, className, direction}) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    const controls = useAnimation()


    useEffect(() =>{
        if (isInView)
        {
            controls.start("visible")
        }
    },[isInView])

    return ( 
        <motion.div 
        variants={{
            hidden: {opacity:0, x: 50 * (direction === "RIGHT" ? -1 : 1)},
            visible: {opacity:1, x: 0},
        }}
        initial="hidden"
        animate={controls}
        transition={{duration: 2, delay:0.25}}
        ref={ref}
        className={className}
        >
            {children}
        </motion.div>    
    );
}
 
export default AnimateOnScroll;