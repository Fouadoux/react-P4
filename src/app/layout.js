import "./globals.css";
import { anton, manrope } from './fonts'  

export const metadata = {
  title: "Les Petits Plats",
  description: "Découvrez nos recettes du quotidien",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${anton.variable} ${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}