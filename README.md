# Le Voyage Pour Tous

Landing page pour **Le Voyage Pour Tous** — ton carnet de voyage moderne.

## Stack technique

- ⚡ [Vite](https://vitejs.dev/) — serveur de dev ultra-rapide
- ⚛️ [React](https://react.dev/) — composants UI
- 🎨 [Tailwind CSS](https://tailwindcss.com/) — styles utilitaires

## Installation

```bash
# 1. Installe les dépendances
npm install

# 2. Lance le serveur de développement
npm run dev
```

Le site sera disponible sur **http://localhost:5173**

## Build pour la production

```bash
npm run build
```

Les fichiers seront générés dans le dossier `dist/`.

## Structure du projet

```
src/
├── components/
│   ├── Navbar.jsx         # Barre de navigation fixe
│   ├── Hero.jsx           # Section principale (hero)
│   ├── Services.jsx       # Les 7 modules du carnet
│   ├── HowItWorks.jsx     # Comment ça marche (3 étapes)
│   ├── ComingSoon.jsx     # Modules bientôt disponibles
│   ├── Testimonials.jsx   # Témoignages communauté
│   ├── WaitlistForm.jsx   # Formulaire liste d'attente
│   └── Footer.jsx         # Pied de page
├── App.jsx                # Assemblage de tous les composants
├── main.jsx               # Point d'entrée React
└── index.css              # Styles globaux + Tailwind
```
