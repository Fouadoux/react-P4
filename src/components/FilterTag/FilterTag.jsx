"use client"

export default function FilterTag({ label, onRemove }) {
  return (
    <div className="flex items-center justify-between gap-2 px-4 py-2 bg-[#FFD15B] rounded-full w-[195px] h-[59px]">
      {/* Le texte du tag */}
      <span className="font-manrope text-sm text-[#1B1B1B]">
        {label}
      </span>
      
      {/* Bouton X pour supprimer */}
      <button 
        onClick={onRemove}
       
        className="text-[#1B1B1B] hover:text-gray-700"

      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
          <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"/>
        </svg>
      </button>

      
    </div>
  )
}