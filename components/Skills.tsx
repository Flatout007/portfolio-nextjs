import { ReactElement } from "react";
import { Skill } from "../typings";
import { SkillItem } from "./SkillItem";

export interface SkillsProps {
  skills: Skill[]
}

export function Skills({ skills }: SkillsProps): ReactElement {

  const mid: number = Math.floor(skills?.length / 2);

  const firstHalfOfSkillItems: ReactElement[] = skills?.slice(0, mid).map(function (ele: Skill): ReactElement {
    return (<SkillItem key={ele._id} directionLeft={true} skillImage={ele.skillImage} skillName={ele.skillName} />)
  });
  const secondHalfOfSkillItems: ReactElement[] = skills?.slice(mid).map(function (ele: Skill): ReactElement {
    return (<SkillItem key={ele._id} directionLeft={false} skillImage={ele.skillImage} skillName={ele.skillName} />)
  });

  return (
    <div
      className="mt-10 pt-40 w-screen flex flex-col justify-center">
      <h1 className="w-[400px] font-bold mb-10 ml-auto mr-auto text-center uppercase tracking-[20px] text-gray-500 text-2xl Skills">Skills</h1>

      <div className=" w-[390px] h-[30rem] mt-16 ml-auto mr-auto grid md:w-[580px] md:h-[42rem] grid-cols-4 gap-4">

        {firstHalfOfSkillItems}

        {secondHalfOfSkillItems}

      </div>
    </div>
  );
}


