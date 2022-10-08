
import { motion } from "framer-motion";
import { ReactElement } from "react";
import { Hero } from "./Hero";

export interface BackgroundCirclesProps {
}

export function BackgroundCircles(props: BackgroundCirclesProps): ReactElement {
    return (
        <div className="w-screen relative top-32 flex justify-center">
            
            <Hero></Hero>
            <div className="absolute border border[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping"  />
                
            {/* <div className="absolute border border[#333333] rounded-full h-[300px] w-[300px] mt-40 "/>

            <div className="absolute border border[#333333] rounded-full h-[500px] w-[500px] mt-20 "/> */}

            <div className="absolute border border[#333333] opacity-20 rounded-full h-[650px] w-[650px] mt-5 animate-pluse"/>

            <div />

        </div>
    );
}
