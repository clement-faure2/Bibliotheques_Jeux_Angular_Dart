# 🎮 Bibliotheques_Jeux_Angular_dart - Plateforme Multiplateforme

Ce dépôt centralise le développement de **Bibliotheques_Jeux_Angular_dart**, une solution multiplateforme de gestion et de création de bibliothèques de jeux personnalisées. 

L'architecture est séparée en deux applications distinctes (chacune codée de son côté avec sa propre technologie), mais elles sont **entièrement reliées en temps réel par le même backend Firebase** (Authentication & Firestore Database).

---

## 🚀 Architecture du Projet

Le projet se découpe en deux environnements autonomes :

### 1. 🌐 Application Web (Angular)
* **Technologie :** Angular (TypeScript, SCSS).
* **Rôle :** Interface utilisateur Web permettant de s'authentifier, de gérer son profil et d'accéder à sa bibliothèque de jeux depuis n'importe quel navigateur.
* **🔗 Version en ligne :** Vous pouvez tester l'application directement ici : [concert-hall-project-angular.web.app](https://concert-hall-project-angular.web.app/)

### 2. 📱 Application Mobile (Flutter / Dart)
* **Technologie :** Flutter & Dart.
* **Rôle :** Version mobile native offrant une expérience fluide sur smartphone, connectée à la même base de données que la version Web.
* **🛠️ Statut & Émulation :** L'application mobile est actuellement en cours de développement/test. Pour l'exécuter, il est nécessaire de cloner ce dossier et de lancer un émeulateur (iOS/Android) via **Android Studio** ou VS Code.

---

## ✨ Fonctionnalités Globales

Grâce à la centralisation sur **Firebase**, les actions sont synchronisées instantanément entre les deux applications :
* **Système de Connexion Sécurisé :** Inscription, connexion et gestion des sessions gérées par *Firebase Authentication*.
* **Bibliothèque Personnelle :** Une fois connecté, l'utilisateur accède à son espace personnel.
* **Gestion des Jeux :** Possibilité de créer, modifier, organiser et personnaliser sa propre liste de jeux.

---

## 🛠️ Comment lancer les projets en local ?

### Pour la partie Web (Angular)
1. Allez dans le dossier dédié : `cd Bibliotheque_Jeux_angular`
2. Installez les dépendances : `npm install`
3. Lancez le serveur local : `ng serve`
4. Ouvrez `http://localhost:4200`

### Pour la partie Mobile (Flutter)
1. Allez dans le dossier mobile (dès qu'il sera ajouté) : `cd nom_du_dossier_dart`
2. Récupérez les packages : `flutter pub get`
3. Ouvrez un émeulateur sur **Android Studio**
4. Lancez l'application : `flutter run`
