"use client"
import Image from 'next/image'

export default function SearchBar({ searchTerm, setSearchTerm }) {
  const handleChange = (e) => {
    setSearchTerm(e.target.value)  // Met à jour le state du parent
  }

  return (
    <div className="relative w-[954px] h-[72px]">
      <input 
        className="w-full h-full bg-white rounded-[11px] px-[35px] text-base text-[#7A7A7A] placeholder:text-[#7A7A7A] outline-none"
        type="search"
        id="search-input"
        placeholder="Rechercher une recette, un ingrédient, ..."
        autoComplete="search"
        value={searchTerm}
        onChange={handleChange}
      />
      <button className="absolute right-[10px] top-[10px] w-[51px] h-[52px] bg-[#1B1B1B] rounded-[10px] flex items-center justify-center">
        <Image
          src="/icons/icon_2.png"
          alt="Icône recherche"
          width={22.05}
          height={21.25}
          className="object-contain"
        />
      </button>
    </div>
  )
}