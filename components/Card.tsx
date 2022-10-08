import { motion } from "framer-motion";
import { ReactElement } from "react";
import { Experiences, TechStack } from "../typings";
import { urlFor } from "../sanity";

export interface CardProps {
    experience: Experiences;
}

export function Card({ experience }: CardProps): ReactElement {

    const bulletItems: ReactElement[] = experience?.bulletPoints.map(function (ele, i): ReactElement {
        return (<li className="text-[1.1rem]" key={i}>{ele}</li>)
    });

    const techStackItems: ReactElement[] = experience?.techStack.map(function (ele: TechStack): ReactElement {
        return (<img key={ele._id} src={`${urlFor(ele.skillImage).url()}`}
            className="w-10 h-10 mr-2"
        ></img>)
    });

    return (
        <motion.div
            className="md:mb-0 mb-10 ml-10 mr-10 rounded-lg flex items-center 
            justify-center md:snap-center">
            <article className="z-10 opacity-40 hover:opacity-100 
            transition-opacity duration-200 items-center rounded-lg h-[800px] 
            w-[650px] bg-[#292929]">

                <motion.img
                    initial={{
                        y: -500,
                        opacity: 0
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                    }}
                    transition={{
                        delay: 2,
                        duration: 1
                    }}
                    viewport={{ once: true }}

                    src={`${urlFor(experience.companyImage).url()}`}
                    className={`bg-white relative top-5 ml-auto mr-auto h-40 w-40 rounded-full border
                 `}>
                </motion.img>

                <div className="ml-5 mt-10">
                    <h1 className="text-[2rem]">{experience.JobTitle}</h1>
                    <h2>{experience.companyName}</h2>
                    <ul className="flex mt-5 list-none">

                        {techStackItems}

                    </ul>
                    <p className="mt-5 font-light">{`${experience.dateStart} to ${experience.dateEnd}`}</p>
                    <ol className="font-light mt-5 pr-5 pl-5 list-disc">

                        {bulletItems}

                    </ol>
                </div>
            </article>
        </motion.div>

    );
}