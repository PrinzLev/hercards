"use client"
import CardImage from "@/public/images/card-template.png"
import Image from "next/image"

import { useAtom } from "jotai"
import { questionGenerated } from "../store/question"

export default function Card() {
    const [question] = useAtom(questionGenerated)
    return (
        <div className="flex justify-center w-full">
            <div className="w-[70%] lg:w-full relative flex justify-center">
                <Image src={CardImage} alt="Herdcard" className="" />
                <div className="absolute top-[20%]  lg:top-10 border-2 border-[#FBCEFF] h-[60%] w-[70%] xl:w-[30%] 2xl:w-[20%] bg-white  p-2 lg:p-5">
                    <p className="font-semibold  question-text">
                        {question.question
                            ? question.question
                            : "Generate a question."}
                    </p>
                </div>
            </div>
        </div>
    )
}
