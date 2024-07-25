import { FunctionComponent, useEffect, useState } from "react";
import { motion, useAnimate } from "framer-motion"
import { Sparkle as Star, Square } from "lucide-react";
import AnimatedText from "../Elements/animated-text";
import LayoutBox from "../Elements/LayoutBox";


const aboutMe: string = "Mohammed Adel is a 5★ character from the fire element who follows the Path of Development." 
+ "A member of faculty of engineering cairo university in 5th and last year."
+ "With his laptop, MoA Born as a software engineer who can design and develop a high quality software using all his knowledge in software technologies and principles."
+ "To learn more about MoA keep going in his portfolio."


interface AboutPageProps {

}

const AboutPage: FunctionComponent<AboutPageProps> = () => {
    const [classState, setClassState] = useState("")
    const [animationOver, setAnimationOver] = useState(false)
    const [scope, animate] = useAnimate();
    async function MoaAnimation() {
        await animate(scope.current, { scale: 1 }, { type: 'spring', stiffness: 20, damping: 10, duration: 1.2 });
        
        if (window.innerWidth <= 1024){
            await animate(scope.current, {opacity: 0}, { duration: 0.2 });
        }
        else{
            await animate(scope.current, {}, { duration: 1 });
        }

        setClassState("hidden lg:block opacity-100")
        setAnimationOver(true)
        animate(scope.current, {opacity: 1}, { duration: 1 });
    }
    useEffect(() => { MoaAnimation() }, []);


    return (
        <motion.div layout className="bg-cover w-screen h-screen flex flex-row items-center justify-center relative" style={{backgroundImage: 'url(images/bg.jpg'}}>
            {animationOver &&
                <div className="flex-1 flex flex-col justify-center gap-4">
                    <motion.div layout className="flex flex-col gap-2 items-center justify-center relative">
                        <motion.div
                            initial={{ x: -50, opacity: 0.1 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ type: 'spring', stiffness: 20, damping: 10, duration: 1.2 }}
                            className="bg-[hsla(0,0%,100%,1)] px-2 flex">
                            <h1 className="inline text-black font-bold">
                                Developer
                                <span className="text-[6px] tracking-widest text-gray-400"> 開発者</span>
                            </h1>
                        </motion.div>


                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ type: 'spring', stiffness: 20, delay: 0.5, damping: 10, duration: 1.2 }}
                            className="flex flex-row w-full bg-green-500 justify-center items-center"
                            style={{ background: "linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.4), rgba(255,255,255,0" }}>
                            <div className="h-full">
                                <img src="images/fire.png" height={56} width={56} />
                            </div>

                            <div>
                                <h1> Mohammed Adel </h1>

                                <h1 className="flex flex-row ">
                                    <Star fill="#ffd15c" color="#ffd15c"></Star>
                                    <Star fill="#ffd15c" color="#ffd15c"></Star>
                                    <Star fill="#ffd15c" color="#ffd15c"></Star>
                                    <Star fill="#ffd15c" color="#ffd15c"></Star>
                                    <Star fill="#ffd15c" color="#ffd15c"></Star>
                                </h1>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ type: 'spring', stiffness: 20, delay: 0.7, damping: 10, duration: 1.2 }}
                            className="bg-gray-600 px-2 flex h-full gap-2 items-center">
                            <img src="images/pathOfDevelopment.png" height={27} width={27} alt="" />
                            <h1>Development</h1>
                        </motion.div>
                    </motion.div>



                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 20, delay: 0.9, damping: 10, duration: 1.2 }}
                        className="w-[95%] mx-auto">
                        <LayoutBox text={aboutMe} header="About"></LayoutBox>
                    </motion.div>




                </div>
            }


            <motion.div layout className={"w-full lg:w-1/2 overflow-hidden rounded-full relative " + classState}
                ref={scope}
                initial={{ scale: 1.5 }}

            >
                <img src="images/MoA.jpg" className="w-full aspect-square" />
            </motion.div>
        </motion.div>
    );
}

export default AboutPage;