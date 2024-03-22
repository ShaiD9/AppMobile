# APP_MOBILE | Création d'une application mobile

## Informations générales
- Nom du projet : APP_MOBILE
- Date du projet : 22/03/2024
- Résumé : Création d'une application mobile permettant de voir les données du projet en Laravel

## Fonctionalité de l'application
- L'application permet de se connecter 
- L'application permet de visionner different types de données tel que :
    - Les agences 
    - Les agents
    - Les fdr (feuille de routes)
    - Les vehicules

## Technologie et deploiment
- J'utilise diferente technologie pour la mise en place de ce projet :
    - J'utilise React-native pour le developement de l'application
    - J'utilise aussi Expo qui me m'aide a developement et a concevoir mon application mobile
    - Mon application fonctionne avec l'aide de mon api precedemment réalisé, qui me permet de d'utiliser ces routes pour aller chercher les informations nécessaire

## Rappel des exigences 
Voici un rappel des exigences :

- Système d'Authentification : L'application devra proposer une fonctionnalité de
connexion et d'inscription permettant aux utilisateurs de créer un compte
personnel et d'y accéder de manière sécurisée.

- Menu de Navigation : Une fois authentifié, l'utilisateur devra avoir accès à un
menu lui permettant de naviguer aisément entre les différentes sections de
l'application. Ce menu doit être intuitif et facile à utiliser.

- Page d'Accueil : La page d'accueil représente la première interface avec laquelle
l'utilisateur interagit après s'être connecté. Elle doit être accueillante, claire, et
fournir un accès rapide aux principales fonctionnalités de l'application.

- Conception du Style : L'interface utilisateur de l'application doit suivre une ligne
directrice esthétique cohérente. L'application devra donc présenter un style visuel
uniforme, incluant la palette de couleurs et les éléments de design utilisés.

- Intégration avec le Back-End : L'application devra être correctement reliée à un
serveur back-end. Cette intégration implique la gestion des requêtes HTTP, le
traitement des données utilisateur, et la communication efficace entre le
front-end et le back-end pour une expérience utilisateur fluide.``

### Voici les étapes a suivre pour installer le projet :

1. Clonez ce référentiel sur votre machine locale.

   ```bash
      git clone https://github.com/ShaiD9/AppMobile.git
    ```

2. Exécutez les migrations.

   ```bash
      php artisan migrate```

3. Exécutez l'appication.

   ```bash
      npx expo start```