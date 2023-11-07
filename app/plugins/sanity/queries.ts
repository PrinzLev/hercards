import { sanityFetch } from "./fetcher"
import { ICategory } from "@/app/store/category"
import { IQuestion } from "@/app/store/question"

export const getQuestionCount = async (
    category?: ICategory
): Promise<number> => {
    return await sanityFetch(
        `count(*[_type == 'question'${
            !category || category._id === "all"
                ? ""
                : ` && '${category._id}' in categories[]._ref`
        }])`
    )
}

export const getCategories = async (): Promise<ICategory[]> => {
    return await sanityFetch('*[_type == "category"]')
}

export const getQuestion = async (
    category: ICategory,
    questionIndex: number
): Promise<IQuestion> => {
    return await sanityFetch(
        `*[_type == 'question'${
            category._id !== "all"
                ? ` && '${category._id}' in categories[]._ref`
                : ""
        }][$questionIndex]`,
        { questionIndex }
    )
}
