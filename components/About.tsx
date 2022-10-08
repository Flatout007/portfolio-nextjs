import { motion } from "framer-motion";
import { ReactElement } from "react";


export interface AboutProps {
}

export function About(props: AboutProps): ReactElement {
    return (
        <motion.div
            initial={{
                x: -200,
                opacity: 0
            }}
            transition={{
                duration: 1
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex pt-40 justify-center flex-col items-center ">
            <h1 className="font-bold w-[165px] mb-10 text-center uppercase tracking-[20px] text-gray-500 text-2xl About">About</h1>
            <div className="w-screen flex justify-center">
            <h2 className="w-60 md:w-[fit-content] tracking-wide font-bold mb-10 md:text-[3rem] text-[2.3rem]">Here's a <span className="underline decoration-[#f7AB0A]">little</span> background</h2>
            </div>
            <p className="text-[1.45rem] md:text-[1.6rem] md:w-[700px] leading-snug pr-20 pl-20 w-[500px] tracking-tight text-base">Born and raised in Washington,DC. I currently live just outside of the nation's capital in Hyattsville, Maryland, but planning on moving soon.
                I'm a software engineer with strong attention to detail and fluent in TypeScript, Ruby, and JavaScript.
            </p>
        </motion.div>
    );
}
