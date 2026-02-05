"use client"
import { useState } from 'react'

export default function FilterDropdown({ label, options, selected, onSelect }) {
    const [isOpen, setIsOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    const filteredOptions = options.filter(option =>
        option.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
  <div className="relative">
    {/* Bouton */}
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex items-center justify-between px-4 py-[17px] w-[195px] h-[56px] bg-white rounded-[11px]"
    >
      <span className="font-manrope font-medium text-base text-[#1B1B1B]">
        {label}
      </span>
      <span>{isOpen ? '▲' : '▼'}</span>
    </button>

    {/* Menu déroulant*/}
    {isOpen && (
      <div className="absolute top-[56px] left-0 w-[195px] bg-white text-black rounded-lg shadow-lg max-h-60 overflow-y-auto z-10">
        {/* Barre de recherche */}
        <input
          type="text"
          placeholder="Rechercher..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border-b font-manrope text-sm"
          onClick={(e) => e.stopPropagation()}
        />
        
        {/* Options filtrées */}
        {filteredOptions.map((option) => (
          <div
            key={option}
            onClick={() => {
              onSelect(option)
              setIsOpen(false)
              setSearchTerm('')
            }}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-manrope text-sm text-black"
          >
            {option}
          </div>
        ))}
        
        {/* Message si aucun résultat */}
        {filteredOptions.length === 0 && (
          <div className="px-4 py-2 text-gray-400 font-manrope text-sm">
            Aucun résultat
          </div>
        )}
      </div>
    )}
  </div>
)
}