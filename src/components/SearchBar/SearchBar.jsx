"use client"
import Image from 'next/image'

/**
 * Barre de recherche principale.
 * @param {string} searchTerm - Terme de recherche actuel.
 * @param {Function} setSearchTerm - Setter du terme de recherche.
 */
export default function SearchBar({ searchTerm, setSearchTerm }) {

  /** Met à jour le terme de recherche à chaque saisie */
  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className="relative w-238.5 h-18">
      <input
        className="w-full h-full bg-white rounded-[11px] px-8.75 text-base text-[#7A7A7A] placeholder:text-[#7A7A7A] outline-none"
        type="search"
        id="search-input"
        placeholder="Rechercher une recette, un ingrédient, ..."
        autoComplete="search"
        value={searchTerm}
        onChange={handleChange}
      />
      {/* Bouton de recherche */}
      <button className="absolute right-2.5 top-2.5 w-12.75 h-13 bg-[#1B1B1B] rounded-[10px] flex items-center justify-center">
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