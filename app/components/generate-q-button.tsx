"use client"

import { IconRefresh, IconLoader2 } from "@tabler/icons-react"

import { useState } from "react"
import { client } from "../plugins/sanity/client"
import { useAtom } from "jotai"
import { categorySelected } from "../store/category"
import { questionGenerated, IQuestion } from "../store/question"
import { isNoCategorySelected } from "../store/shared"

export default function GenerateQButton() {
    const [isLoading, setIsLoading] = useState(false)
    const [category] = useAtom(categorySelected)
    const [, setQuestionGenerated] = useAtom(questionGenerated)
    const [, setIsNoCategory] = useAtom(isNoCategorySelected)

    const query = `*[_type == 'question'${
        category._id !== "all"
            ? ` && '${category._id}' in categories[]._ref`
            : ""
    }]`

    const getRandomIndex = async () => {
        console.log(query)
        const count: number = await client.fetch(`count(${query})`)

        const index = Math.floor(Math.random() * count)
        return index
    }

    const generateQuestion = async () => {
        if (!category.name) {
            setIsNoCategory(true)
            return
        }
        setIsLoading(true)
        const randomIndex = await getRandomIndex()
        const question: IQuestion = await client.fetch(
            `${query}[$questionIndex]`,
            { questionIndex: randomIndex }
        )

        setQuestionGenerated(question)
        setIsLoading(false)
    }

    return (
        <div
            className="rounded-lg w-[37vw] lg:w-[20vw] 2xl:w-[15vw] py-1 lg:py-3 px-2 lg:px-5 flex justify-between items-center mt-2 bg-[#87D3B3] hover:cursor-pointer"
            onClick={generateQuestion}
        >
            <p className="text-xs lg:text-lg font-semibold">
                Generate Question
            </p>
            {isLoading ? (
                <IconLoader2
                    strokeWidth={1.5}
                    className="animate-spin w-[15px] lg:w-[25px]"
                />
            ) : (
                <IconRefresh
                    strokeWidth={1.5}
                    color="black"
                    className="w-[15px] lg:w-[25px]"
                />
            )}
        </div>
    )
}
