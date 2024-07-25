import { motion, useAnimate, ValueAnimationTransition} from "framer-motion";
import { FunctionComponent, useEffect } from "react";

interface GlowingHeaderProps {
    header: string;
    fixed: boolean;
    fixedColor?: Array<Array<number>> | null | undefined;
}

const calculateColor = function(startingColor: Array<number>, step : Array<number>, idx : number)
{
    const calculatedColor = [startingColor[0] + step[0] * idx, startingColor[1] + step[1] * idx, startingColor[2] + step[2] * idx]
    return `(${calculatedColor[0]},${calculatedColor[1]},${calculatedColor[2]})`
}

const generateGradient = function(colors: Array<Array<number>>){
    let gradient = "linear-gradient(to right,"
    
    for (let color of colors) {
        gradient += `rgba(${color[0]},${color[1]},${color[2]},1),`
    }

    return gradient.slice(0, gradient.length - 1) + ")"
}

const getStyleObject = function(idx:number){
    const obj = {WebkitBackgroundClip: "text", boxShadow: "0px 0px 200px "}
    if (idx == 0)
    {
        obj.boxShadow = obj.boxShadow + "rgba(255,255,255,0.5)"
        return {color: "rgba(255,255,255,0.1)", obj: {...obj, background: "linear-gradient(to right, #f00, #fff, #fff)"}}
    }
    if (idx == 1)
    {
        obj.boxShadow = obj.boxShadow + "rgba(255,0,0,0.5)"
        return {color: "rgba(255,0,0,0.1)",obj: {...obj, background: "linear-gradient(to right, #fff, #f00, #f00)"}}
    }
    if (idx == 2)
    {
        obj.boxShadow = obj.boxShadow + "rgba(255,255,255,0.8)"
        return {color: "rgba(255,255,255,0.1)", obj: {...obj, background: "linear-gradient(to right, #fff, #fff, #fff)"}}
    }
    if (idx == 3)
    {
        obj.boxShadow = obj.boxShadow + "rgba(255,0,0,0.5)"
        return {color: "rgba(255,0,0,0.1)",obj: {...obj, background: "linear-gradient(to right, #f00, #f00, #fff)"}}
    }
    if (idx == 4)
    {
        obj.boxShadow = obj.boxShadow + "rgba(255,0,0,1)"
        return {color: "rgba(255,0,0,0.1)",obj: {...obj, background: "linear-gradient(to right, #f00, #f00, #f00)"}}
    }
    return {color: "rgba(255,0,0,0)",obj: {...obj, background: ""}}
}
 
const GlowingHeader: FunctionComponent<GlowingHeaderProps> = ({header, fixed, fixedColor}) => {
    const startingColor: Array<number> = [255,255,255]
    const endingColor: Array<number> = [255,0,0]
    let step : Array<number> = [0,0,0];
    
    const length = header.length
    for(let i = 0; i < 3; i++) {
        step[i] = (endingColor[i] - startingColor[i]) / length
    }


    const [headerRef, animate] = useAnimate()
    const [bgRef, animateBG] = useAnimate()

    const animationSeries = async ()=>{
        if (fixed) return;
        const optionsObject: ValueAnimationTransition<any> | undefined = {duration: 2, ease: "easeInOut"}
        for(let i = 0; i < 5; i++)
        {
            const {color, obj} = getStyleObject(i)
            animate(headerRef.current, obj, optionsObject)
            await animateBG(bgRef.current, {backgroundColor: color}, optionsObject)
        }
        animationSeries()
    }

    useEffect(()=>{animationSeries()}, [])

    const initialGradient = fixed && fixedColor != null && fixedColor != undefined ? generateGradient(fixedColor) : "linear-gradient(to right, #f00, #f00, #00f)" 
    
    return ( 
        <div className="antialiased opacity-50 rounded-2xl" ref={bgRef}>
            <motion.div className="font-Headers text-6xl rounded-2xl"  ref={headerRef}
            initial={{
                color: "transparent",
                WebkitTextFillColor: "transparent",
                background: initialGradient, 
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                boxShadow: "2px 2px 200px rgba(255,255,255,0.4)",
                borderColor: "transparent"
                }}
            >
                {header}
            </motion.div>
        </div>
    );
}
 
export default GlowingHeader;