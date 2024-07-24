'use client'

import { motion } from "framer-motion";
import { FunctionComponent, useEffect, useState } from "react";
import TypeWriter from "typewriter-effect"

interface AnimatedTextProps {
    text: string;
}
 
const AnimatedText: FunctionComponent<AnimatedTextProps> = ({text}) => {

    return ( 
        <TypeWriter 
            onInit={(typewriter)=> {
                typewriter.typeString(text).changeDelay(0.0002).start();
            }}
        />
    );
}
 
export default AnimatedText;