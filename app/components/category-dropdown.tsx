"use client"

import { IconCaretDown } from "@tabler/icons-react"

import { useState } from "react"
import { ICategory } from "../store/category"
import { useAtom } from "jotai"
import { categorySelected } from "../store/category"
import { isNoCategorySelected } from "../store/shared"

export default function CategoryDropdown({
    categories,
}: {
    categories: ICategory[]
}) {
    const [isDropdownOpen, setIsDropdonwOpen] = useState(false)
    const [categ, setCategorySelected] = useAtom(categorySelected)
    const [isNoCategory, setIsNoCategory] = useAtom(isNoCategorySelected)

    const selectCategory = (category: ICategory) => {
        setCategorySelected(category)
        setIsDropdonwOpen(false)
        setIsNoCategory(false)
    }

    return (
        <div
            className={`rounded-lg w-[37vw] lg:w-[20vw] 2xl:w-[15vw] border ${
                isNoCategory ? "border-red-500 shake" : "border-black"
            } hover:cursor-pointer relative`}
        >
            {isDropdownOpen ? (
                <div
                    className="w-screen h-screen fixed top-0 left-0"
                    onClick={() => setIsDropdonwOpen(false)}
                ></div>
            ) : null}
            <div
                className="flex justify-between items-center w-full z-20 py-1 lg:py-3 px-2 lg:px-5"
                onClick={() => setIsDropdonwOpen(!isDropdownOpen)}
            >
                <p
                    className={`text-xs lg:text-xl font-semibold ${
                        isNoCategory ? "text-red-500" : "text-black"
                    }`}
                >
                    {categ.name ? categ.name : "Select A Category"}
                </p>
                <IconCaretDown
                    strokeWidth={1.5}
                    color={isNoCategory ? "red" : "black"}
                    className="w-[15px] lg:w-[25px]"
                />
            </div>
            {isDropdownOpen ? (
                <div className="absolute top-8 lg:top-14 left-0 w-full border border-black bg-[#D9D9D9] rounded-lg z-20 h-[200px] overflow-y-auto">
                    {categories.map((category, index) => (
                        <div
                            className={`px-5 py-2 hover:bg-black  hover:text-white  ${
                                index === 0
                                    ? "rounded-t-lg"
                                    : index === categories.length - 1
                                    ? "rounded-b-lg"
                                    : ""
                            } ${
                                category.name === categ.name
                                    ? "bg-black text-white"
                                    : ""
                            }`}
                            onClick={() => selectCategory(category)}
                            key={category._id}
                        >
                            <p className="font-semibold text-xs lg:text-base">
                                {category.name}
                            </p>
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    )
}
