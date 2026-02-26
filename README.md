# 🍽️ Les Petits Plats

Un site web de recettes développé avec **Next.js 15** et **Tailwind CSS**, réalisé dans le cadre du cursus OpenClassrooms.

---

## 📋 Description

Les Petits Plats est une application web permettant de parcourir une collection de recettes de cuisine. Elle offre une interface claire avec un système de recherche et de filtres avancés pour trouver rapidement la recette idéale.

---

## ✨ Fonctionnalités

- 🔍 **Recherche globale** — par nom, description ou ingrédients
- 🧅 **Filtres avancés** — Ingrédients, Appareils et Ustensiles
- 🏷️ **Tags de filtres actifs** — supprimables en un clic
- 📄 **Pagination** — 9 recettes par page
- 📱 **Design responsive** — adapté à tous les écrans
- 🗂️ **Pages dynamiques** — page de détail par recette via slug
- ❌ **Page 404** personnalisée

---

## 🗂️ Structure du projet

```
src/
├── app/
│   ├── page.jsx                  # Page d'accueil
│   ├── layout.jsx                # Layout global
│   ├── not-found.jsx             # Page 404
│   └── recipe/
│       └── [slug]/
│           └── page.jsx          # Page détail recette
│
├── components/
│   ├── Header/
│   ├── HeaderRecipePage/
│   ├── Footer/
│   ├── SearchBar/
│   ├── RecipeCard/
│   ├── RecipeList/
│   ├── RecipePage/
│   ├── Filters/
│   ├── FilterDropdown/
│   └── FilterTag/
│
└── data/
    └── recipes.json              # Données des recettes
```

---

## 🛠️ Technologies

| Technologie | Usage |
|-------------|-------|
| [Next.js 15](https://nextjs.org/) | Framework React (App Router) |
| [React 19](https://react.dev/) | Bibliothèque UI |
| [Tailwind CSS](https://tailwindcss.com/) | Styles utilitaires |
| [ESLint](https://eslint.org/) | Qualité du code |

---

## 🚀 Installation & Lancement

### Prérequis

- Node.js 18+
- npm

### Étapes

```bash
# Cloner le dépôt
git clone https://github.com/votre-username/les-petits-plats.git
cd les-petits-plats

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build de production

```bash
npm run build
npm start
```

---

## ⚙️ Fonctionnement des filtres

Les filtres utilisent une logique **AND** : toutes les conditions doivent être satisfaites simultanément.

```
Résultats = recettes où :
  searchTerm correspond (nom / description / ingrédients)
  ET ingrédient sélectionné correspond
  ET appareil sélectionné correspond
  ET ustensile sélectionné correspond
```

Les options disponibles dans les dropdowns se mettent à jour **dynamiquement** en fonction des recettes actuellement affichées.

---

## 📦 Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm start` | Démarrer en production |
| `npm run lint` | Vérification ESLint |

---

## 📐 Architecture des composants

```
Page (Client Component — gestion de l'état)
├── Header
│   └── SearchBar          ← searchTerm + setSearchTerm
├── Filters                ← filtres sélectionnés + recettes filtrées
│   ├── FilterDropdown (×3)
│   └── FilterTag (×n)
├── RecipeList             ← recettes filtrées + pagination
│   └── RecipeCard (×n)
└── Footer
```

L'état centralisé (recherche + filtres) est géré dans un `RecipeExplorer` client component, gardant `page.jsx` en Server Component.

---

## 👤 Auteur

**Fouad** — Formation Développeur Web @ OpenClassrooms

---

## 📝 Licence

Ce projet est réalisé dans un cadre pédagogique.
