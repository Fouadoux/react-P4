"use client"

import { useState } from "react"
import Image from "next/image";

export default function SearchBar() {

    const [searchValue, setSearchValue] = useState('')

    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <div className="relative w-[954px] h-[72px]">
            <input className="w-full h-full bg-white rounded-[11px] px-[35px] text-base
    text-[#7A7A7A] placeholder:text-[#7A7A7A] outline-none"
                type="search"
                id="search-input"
                placeholder="Rechercher une recette, un ingrédient, ..."
                autoComplete="search"
                value={searchValue}
                onChange={handleChange}
            />
            <button className="absolute right-[10px] top-[10px] w-[51px] h-[52px] bg-[#1B1B1B]
                 rounded-[10px] flex items-center justify-center">
                <Image
                    src="/icons/icon_2.png"
                    alt="Icône associée"
                    width={22.05}
                    height={21.25}
                    className="object-contain"
                />
            </button>
        </div >
    )


}