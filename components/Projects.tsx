import { ReactElement } from "react";
import { Project } from "../typings";
import { ProjectItem } from "./ProjectItem";


export interface ProjectsProps {
    projects: Project[];
}

export function Projects({ projects }: ProjectsProps): ReactElement {

    const projectItems: ReactElement[] = projects?.reverse().map(function (ele: Project): ReactElement {
        return (<ProjectItem
            key={ele._id}
            codeURL={ele.codeURL}
            liveURL={ele.liveURL}
            name={ele.projectName}
            gif={ele.projectImage}
        />);
    })

    return (
        <div
            className="relative pt-[10em] w-screen flex flex-col justify-center">
            <h1 className="w-[400px] font-bold mb-10 ml-auto mr-auto text-center uppercase tracking-[20px] text-gray-500 text-2xl Projects">Projects</h1>

            <div className="-z-20 w-full absolute top-[20em] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" ></div>

            <div className="gap-[10px] justify-center items center md:flex">

                {projectItems}

            </div>
        </div>
    );
}
