import "./globals.css";
import { Anton, Manrope } from 'next/font/google'  

export const metadata = {
  title: "Les Petits Plats",
  description: "Découvrez nos recettes du quotidien",
};

 const anton = Anton({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
//  variable: '--font-anton', 
})

 const manrope = Manrope({ 
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
 // variable: '--font-manrope',
})

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${anton.variable} ${manrope.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}