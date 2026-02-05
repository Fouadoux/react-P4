import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-9xl text-black font-anton">404</h1>
      <Link href="/" className="mt-8 px-6 py-3 bg-[#f6b71a] rounded-lg font-manrope">
        Retour à l'accueil du site
      </Link>
    </div>
  )
}