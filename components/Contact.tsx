
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { ReactElement } from "react";
import { FieldValues, useForm } from "react-hook-form";

export interface ContactProps {
}

export function Contact(props: ContactProps): ReactElement {

    const { register, handleSubmit, formState: { errors }, resetField } = useForm<FieldValues>();

    function sendUserInputOnSubmit(formData: FieldValues): void {

        window.location.href = `mailto:rdmc0072@yhaoo.com?subject=${formData.subject}&body=Hello, my name is ${formData.name},\n I wanted to talk about *${formData.subject}* \n ${formData.message}`;

        resetField("subject");
        resetField("message");
        resetField("email");
    }

    return (
        <div className="flex mt-10 pt-40 justify-center flex-col items-center">
            <h1 className="font-bold w-[250px] mb-10 text-center uppercase tracking-[20px]
             text-gray-500 text-2xl Contact">Contact</h1>

            <h2 className="w-96 pr-10 pl-10 text-center md:w-[fit-content] 
            tracking-wide font-bold mb-10 md:text-[3rem] text-[2rem]">
                I've got exactly what you need. <span className="underline decoration-[#f7AB0A]">
                    Lets Talk</span></h2>
            <div className="w-full">
                <div className="mb-5 font-semibold ml-auto mr-auto w-60 flex items-center ">
                    <PhoneIcon className="text-[#f7AB0A] mr-5 h-10 w-10">
                    </PhoneIcon>+3012040530</div>
                <div className="mb-5 font-semibold ml-auto mr-auto w-60 flex items-center ">
                    <EnvelopeIcon className="text-[#f7AB0A] mr-5 h-10 w-10">
                    </EnvelopeIcon>rdmc0072@yahoo.com</div>
                <div className="mb-5 font-semibold ml-auto mr-auto w-60 flex items-center ">
                    <MapPinIcon className="text-[#f7AB0A] mr-5 h-10 w-10">
                    </MapPinIcon>Hyattsville, MD</div>
            </div>

            <form method="post" onSubmit={handleSubmit(sendUserInputOnSubmit)}
                className="mt-10 bg-[#242424] flex-col flex w-[85%] md:w-[40rem]">

                <div className="mb-2 flex">
                    <input
                        {...register("name", { required: true })}
                        name="name"
                        className="caret-[#f7AB0A] focus:outline-none bg-[#292929] 
                    indent-4 w-[80%] h-10 rounded-lg" type="text" placeholder="Name" />

                    <input
                        {...register("email", { required: true })}
                        name="email"
                        className="caret-[#f7AB0A] bg-[#292929] focus:outline-none 
                    indent-4 w-[80%] h-10 ml-2 rounded-lg" placeholder="Email" type="email" />
                </div>

                <input
                    {...register("subject", { required: true })}
                    name="subject"
                    className="caret-[#f7AB0A] bg-[#292929] focus:outline-none 
                indent-4 mb-2 w-full h-10 rounded-lg" type="text" placeholder="Subject" />

                <textarea
                    {...register("message", { required: true })}
                    name="message"
                    className="caret-[#f7AB0A] bg-[#292929] focus:outline-none 
                indent-4 rounded-lg" cols={20} placeholder="Message" rows={5}></textarea>

                <button className="text-black font-bold bg-[#f7AB0A] w-full h-14 rounded-lg 
                mt-2 mb-40" type="submit">Submit</button>
            </form>
        </div>
    );
}
