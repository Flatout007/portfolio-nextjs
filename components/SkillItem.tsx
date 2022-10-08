import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";

export interface SkillItemProps {
    directionLeft?: boolean;
    skillImage: SanityImageSource;
    skillName: string;
}

export function SkillItem({ skillImage, skillName, directionLeft }: SkillItemProps) {
    return (
        <div className="w-24 h-24 relative flex cursor-pointer SkillItem rounded-full md:h-32 md:w-32">
            <motion.img
                initial={{
                    x: directionLeft ? -100 : 50,
                    opacity: 0
                }}
                transition={{
                    duration: 1
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="filter hover:grayscale duration-300 ease-in-out"
                src={`${urlFor(skillImage).url()}`}
            >
            </motion.img>
        </div>
    );
}
