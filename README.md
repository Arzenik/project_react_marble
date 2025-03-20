# Marble - Plateforme de Réservation d'Expériences

Une application React moderne permettant aux utilisateurs de découvrir et réserver des expériences uniques.

## Fonctionnalités

- 🏠 Page d'accueil avec présentation des expériences phares
- 📋 Liste des expériences avec filtrage et recherche
- 🔍 Page de détail pour chaque expérience
- 📅 Système de réservation avec validation des formulaires
- 📱 Interface responsive et moderne
- ⚡ Optimisations de performance

## Technologies Utilisées

- React 18 avec TypeScript
- Material-UI pour l'interface utilisateur
- React Router pour la navigation
- Hooks personnalisés pour la gestion des formulaires
- ESLint pour la qualité du code

## Installation

1. Cloner le repository
2. Installer les dépendances :
   ```bash
   npm install
   ```
3. Lancer l'application en développement :
   ```bash
   npm start
   ```

## Structure du Projet

```
src/
  ├── api/          # Services et types pour l'API
  ├── components/   # Composants réutilisables
  ├── hooks/        # Hooks personnalisés
  ├── pages/        # Pages de l'application
  └── types/        # Types TypeScript
```

## Points Techniques

- Utilisation de TypeScript pour la sécurité du typage
- Gestion optimisée du state avec useState et hooks personnalisés
- Data fetching avec gestion des erreurs et chargement
- Formulaires contrôlés avec validation
- Optimisations de performance (useMemo, useCallback)
- Code style et linting avec ESLint

## Améliorations Possibles

- [ ] Tests unitaires et d'intégration
- [ ] Internationalisation (i18n)
- [ ] Mode hors ligne (PWA)
- [ ] Animations et transitions
- [ ] Système de notation des expériences
- [ ] Intégration de paiement

## Auteur

Projet réalisé dans le cadre de la soutenance React.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
