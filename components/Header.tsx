import Link from "next/link";
import { motion } from "framer-motion";
import { ReactElement } from "react";
import { SocialIcon } from "react-social-icons";
import { Social } from "../typings";

interface HeaderProps {
    socials: Social[];
}

function Header({ socials }: HeaderProps): ReactElement {

    const socialItems: ReactElement[] = socials.map(function (ele: Social): ReactElement {
        return (<SocialIcon key={ele._id} bgColor="transparent"
            fgColor="gray" url={ele.socialURL} />)
    });

    return (
        <div className="z-[100] w-full flex 
        bg-[#242424] absolute justify-center">

            <nav className=" z-[100] flex mt-5 max-w-7xl 
                justify-between w-screen h-12.1 header__nav">

                <motion.div
                    initial={{
                        x: -500,
                        opacity: 0,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                    }}
                    transition={{ duration: 1 }}
                    className="ml-5 h-12.1 header__nav-left">

                    {socialItems}

                </motion.div>
                
                <motion.div
                    initial={{
                        x: 500,
                        opacity: 0
                    }}
                    animate={{
                        x: 0,
                        opacity: 1
                    }}
                    transition={{ duration: 1 }}
                    className="cursor-pointer flex items-center mr-5 
                    header__nav-right">

                    <SocialIcon bgColor="transparent" fgColor="gray"
                        network="email">
                    </SocialIcon>
                    <Link href={"#contact"}>
                        <p className="h-5 w-13 hidden md:inline-flex text-sm uppercase
                        text-gray-400 header__nav-p">Get in Touch
                        </p>
                    </Link>
                </motion.div>
            </nav>
        </div>
    );
}

export default Header