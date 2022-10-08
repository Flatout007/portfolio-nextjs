import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Link from "next/link";
import { urlFor } from "../sanity";

export interface ProjectItemProps {
    name: string;
    gif: SanityImageSource;
    codeURL: string;
    liveURL: string;
}

export function ProjectItem({ name, gif, codeURL, liveURL }: ProjectItemProps) {
    return (
        <div className="mt-28 md:min-w-[320px] rounded-sm bg-[rgba(17, 25, 40, 0.25)] project-container">
            <div className="wrapper">
                <img src={`${urlFor(gif).url()}`} className="project-image" alt="" />
                <h1 className="text-[2.4rem] selection:uppercase font-[Righteous, sans-serif] text-[rgba(255,255,255,0.98)]">{name}</h1>
            </div>
            <div className="mt-5 button-wrapper">
                <Link href={`${codeURL}`}>
                    <button className="cursor-pointer leading-[2px] text-[0.8rem] border-none px-6 py-3 rounded-md btn outline">Github</button>
                </Link>

                <Link href={`${liveURL}`}>
                    <button className="cursor-pointer leading-[2px] text-[0.8rem] border-none px-6 py-3 rounded-md ml-3 btn fill">DEMO</button>
                </Link>
            </div>
        </div>
    );
}

