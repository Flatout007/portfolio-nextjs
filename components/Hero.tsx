import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";

export interface HeroProps {
}

export function Hero(props: HeroProps) {

    const [text, count] = useTypewriter({
        words: ["Hi, I'm Reggie", "Guy-who-loves-to-code.tsx", "TypeScript is a Life Saver"],
        loop: true,
        delaySpeed: 2000
    })

    return (
        <div className="absolute top-60 z-20">
            <h1 className="text-sm text-center uppercase text-gray-500 pb-2 tracking-[15px]">Software Engineer</h1>
            <div className="flex justify-center">
                <h1 className="inline text-3xl">
                    <span>{text}</span>
                    <Cursor cursorColor="#F7AB3A"></Cursor>
                </h1>
            </div>
            <div className="flex">
                <Link href="#about">
                    <div className="w-24 flex justify-center heroButton">About</div>
                </Link>
                <Link href="#experience">
                    <div className=" w-24 flex justify-center heroButton">Experience</div>
                </Link>
                <Link href="#skills">
                    <div className="w-24 flex justify-center heroButton">Skills</div>
                </Link>
                <Link href="#projects">
                    <div className="w-24 flex justify-center heroButton">Projects</div>
                </Link>
            </div>
        </div>
    );
}
