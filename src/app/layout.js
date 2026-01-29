import "./globals.css";

export const metadata = {
  title: "Les Petits Plats",
  description: "Découvrez nos recettes du quotidien",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Manrope:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}