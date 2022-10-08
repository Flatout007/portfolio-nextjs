import { motion } from "framer-motion";
import { ReactElement } from "react";
import { Experiences } from "../typings";
import { Card } from "./Card";

export interface ExperienceProps {
    experiences: Experiences[];
}

export function Experience({ experiences }: ExperienceProps) {

    const experienceItems: ReactElement[] = experiences?.map(function (ele: Experiences): ReactElement {
        return (<Card key={ele._id} experience={ele}></Card>)
    })

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
            className="flex justify-center pt-[10em]
            flex-col items-center Experience relative">
                
            <h1 className="w-[345px] font-bold absolute top-14 pt-7
             uppercase tracking-[20px] text-gray-500 text-2xl Experience">Experience</h1>

            <div className="md:flex-row md:snap-x w-screen flex flex-col 
            md:overflow-x-scroll scrollbar scrollbar-track-gray-400/20
             scrollbar-thumb-[#f7AB0A]">

                {experienceItems}

            </div>
        </motion.div>
    );
}
