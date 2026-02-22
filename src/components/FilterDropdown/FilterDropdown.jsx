"use client"
import { useState } from 'react'
import Image from 'next/image'

/**
 * Dropdown de filtre avec recherche interne.
 * @param {string} label - Libellé du bouton.
 * @param {string[]} options - Liste des options disponibles.
 * @param {string} selected - Option actuellement sélectionnée.
 * @param {Function} onSelect - Callback appelé à la sélection d'une option.
 */
export default function FilterDropdown({ label, options, selected, onSelect }) {

  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  /** @returns {string[]} Options filtrées selon le terme de recherche */
  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  )

  /** Réinitialise le champ de recherche */
  const clearSearch = () => {
    setSearchTerm('')
  }

  return (
    <div className="relative">

      {/* Bouton d'ouverture du dropdown */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between px-4 py-4.25 w-48.75 h-14 bg-white font-manrope font-medium text-base text-[#1B1B1B] ${isOpen ? 'rounded-t-[11px]' : 'rounded-[11px]'}`}
      >
        <span>{label}</span>
        <svg
          width="13"
          height="8"
          viewBox="0 0 13 8"
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        >
          <path d="M1 1L6.5 6L12 1" stroke="#1B1B1B" strokeWidth="1.5" fill="none" />
        </svg>
      </button>

      {/* Menu déroulant */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-48.75 bg-white rounded-b-[11px] shadow-[0px_4px_34px_30px_rgba(0,0,0,0.04)] max-h-60 overflow-y-auto z-10">

          {/* Barre de recherche interne */}
          <div className="flex justify-center py-3 bg-white">
            <div className="relative w-40.75 h-9">
              <input
                type="text"
                placeholder=""
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-full px-3 pr-12 font-manrope text-sm text-[#1B1B1B] placeholder:text-gray-400 outline-none bg-white border border-gray-300 rounded-[5px]"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                {/* Croix de réinitialisation - visible si texte saisi */}
                {searchTerm && (
                  <button onClick={clearSearch} className="text-gray-400 hover:text-gray-600">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                      <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" />
                    </svg>
                  </button>
                )}
                {/* Icône loupe */}
                <Image src="/icons/loupe.svg" alt="Rechercher" width={16} height={16} />
              </div>
            </div>
          </div>

          {/* Liste des options filtrées */}
          {filteredOptions.map((option) => (
            <div
              key={option}
              onClick={() => {
                onSelect(option)
                setIsOpen(false)
                setSearchTerm('')
              }}
              className={`px-4 py-3 cursor-pointer font-[manrope] text-sm text-[#1B1B1B] transition-colors ${selected === option ? 'bg-[#FFD15B] font-medium' : 'hover:bg-[#FFD15B]'}`}
            >
              {option}
            </div>
          ))}

          {/* Message si aucun résultat */}
          {filteredOptions.length === 0 && (
            <div className="px-4 py-3 text-gray-400 font-[manrope] text-sm">
              Aucun résultat
            </div>
          )}

        </div>
      )}
    </div>
  )
}