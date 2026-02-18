import "./globals.css";
import { anton, manrope } from './fonts'  

export const metadata = {
  title: "Les Petits Plats",
  description: "Découvrez nos recettes du quotidien",
};


export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${anton.variable} ${manrope.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}