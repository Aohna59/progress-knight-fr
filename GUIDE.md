# Progress Knight 2.0 en français, sur Android

Ce dossier contient le jeu traduit en français, adapté aux téléphones et
jouable sans connexion. Ce guide explique ce qui a été modifié, puis
comment obtenir le jeu sur votre téléphone Android.

---

## 1. Ce qui a été modifié

### La traduction (fichier `js/i18n-fr.js`)

Dans le code du jeu, chaque classe, compétence ou objet a un **nom interne en
anglais** (par exemple `"Beggar"`). Ce nom sert de clé : les sauvegardes, les
prérequis (« Fermier niveau 10 ») et les calculs s'en servent. Si on le
changeait, les anciennes sauvegardes ne fonctionneraient plus.

Les noms internes n'ont donc **pas changé**. On a seulement ajouté un
« dictionnaire » : au moment d'afficher `Beggar` à l'écran, le jeu demande
au dictionnaire sa traduction et affiche `Mendiant`.

- `js/i18n-fr.js` contient toutes les traductions (noms, effets,
  descriptions). Pour corriger une traduction, modifiez simplement le texte
  à droite des deux-points.
- Dans `js/main.js` et `js/classes.js`, seules les lignes qui affichent du
  texte ont été modifiées (elles portent le commentaire `// FR`).
- `index.html` (les textes fixes de la page) a été traduit directement.
- Les pièces s'affichent en **p**latine, **o**r, **a**rgent et **c**uivre.

### La version mobile (fichier `css/mobile.css`)

Le jeu d'origine fait 1220 pixels de large. Sur un écran de moins de
1000 pixels :

- le panneau d'informations (âge, argent, bonheur…) passe au-dessus et prend
  toute la largeur ;
- les onglets (Classes, Compétences, Boutique, Amulette, Options) deviennent
  une barre fixe en bas de l'écran, comme dans une application ;
- les tableaux défilent horizontalement si besoin ;
- un appui sur une classe ou un objet affiche sa description dans une bulle
  (il n'y a pas de souris pour « survoler ») ; un appui ailleurs la ferme.

Sur ordinateur, le jeu garde sa présentation d'origine.

### Le mode hors ligne et l'installation (PWA)

Une « PWA » est un site web qui peut s'installer comme une application.

- `manifest.webmanifest` : la carte d'identité de l'application (nom,
  icône, couleurs).
- `sw.js` (le « service worker ») : un petit programme qui garde une copie
  de tous les fichiers du jeu sur le téléphone. Le jeu se lance donc même
  sans internet. S'il y a une connexion, il télécharge les mises à jour en
  arrière-plan ; elles apparaissent au lancement suivant.
- `img/icon-*.png` : les icônes de l'application.
- La feuille de style W3.CSS, qui était téléchargée depuis internet, est
  maintenant dans `css/w3.css`. L'image Discord a été remplacée par un
  simple bouton.

### Autres petites améliorations

- Bouton **Copier** dans les Options, pour copier facilement le code de
  sauvegarde sur téléphone.
- La partie est enregistrée dès que vous quittez l'application.
- **Tout effacer** demande maintenant une confirmation.
- Taper un code de sauvegarde ne déclenche plus les raccourcis clavier.

---

## 2. Essayer le jeu sur votre ordinateur

Le service worker ne fonctionne pas si on ouvre `index.html` par un double
clic. Il faut un petit serveur local. Dans un terminal ouvert dans ce
dossier :

```bash
python -m http.server 8123
```

Puis ouvrez http://localhost:8123 dans votre navigateur. Pour voir la
version mobile, réduisez la largeur de la fenêtre.

---

## 3. Obtenir l'APK Android

Il y a deux méthodes. **La méthode A est la plus simple** : rien à installer,
GitHub construit l'APK pour vous.

### Méthode A — Capacitor, construit par GitHub (recommandée)

Capacitor est un outil qui emballe un jeu web dans une vraie application
Android. Le fichier `.github/workflows/build-apk.yml` demande aux serveurs
de GitHub de faire tout le travail.

1. Créez un compte gratuit sur https://github.com s'il vous en faut un.
2. Créez un nouveau dépôt (bouton **New repository**), par exemple
   `progress-knight-fr`. Laissez-le vide.
3. Sur la page du dépôt, cliquez sur **uploading an existing file** et
   glissez-y **tout le contenu** de ce dossier (sauf le dossier caché
   `.git`). Le dossier `.github` doit bien être envoyé. Si, après l'envoi,
   il n'apparaît pas dans la liste des fichiers du dépôt : cliquez sur
   **Add file → Create new file**, tapez comme nom
   `.github/workflows/build-apk.yml`, collez-y le contenu de ce fichier,
   puis **Commit changes**.
4. Cliquez sur **Commit changes**.
5. Ouvrez l'onglet **Actions** du dépôt. La tâche « Construire l'APK
   Android » démarre toute seule (sinon, cliquez dessus puis sur
   **Run workflow**). Elle dure environ 5 minutes.
6. Quand elle est verte, cliquez dessus : en bas, dans **Artifacts**,
   téléchargez `progress-knight-fr-apk`. C'est un fichier zip qui contient
   `app-debug.apk`.
7. Envoyez `app-debug.apk` sur votre téléphone (câble USB, Google Drive,
   e-mail…), puis ouvrez-le. Android vous demandera d'autoriser
   l'installation d'applications « de sources inconnues » pour l'application
   qui ouvre le fichier : acceptez pour cette fois.

C'est une version « debug » : parfaite pour un usage personnel, mais pas
publiable telle quelle sur le Google Play Store (il faudrait une version
signée).

### Méthode B — PWABuilder (sans Capacitor)

PWABuilder (https://www.pwabuilder.com) transforme une PWA **déjà en ligne**
en APK. Il faut donc d'abord mettre le jeu sur internet, par exemple avec
GitHub Pages (gratuit) :

1. Suivez les étapes 1 à 4 de la méthode A.
2. Dans le dépôt : **Settings** → **Pages** → « Branch » : choisissez
   `main`, dossier `/ (root)`, puis **Save**.
3. Après une minute, le jeu est en ligne à une adresse du type
   `https://VOTRE-NOM.github.io/progress-knight-fr/`. Ouvrez-la sur votre
   téléphone pour vérifier.

   Astuce : à ce stade, vous pouvez déjà l'installer sans APK. Dans Chrome
   sur Android, menu ⋮ → **Ajouter à l'écran d'accueil** / **Installer
   l'application**. Le jeu fonctionnera ensuite hors ligne.
4. Allez sur https://www.pwabuilder.com, collez cette adresse et cliquez sur
   **Start**.
5. Cliquez sur **Package for stores** → **Android** → **Generate**.
   Téléchargez le zip : il contient un fichier `.apk` à installer sur le
   téléphone comme à l'étape 7 de la méthode A.

Avec cette méthode, l'application affiche le site en ligne (et garde sa
copie hors ligne grâce au service worker).

### Méthode C — Capacitor sur votre propre ordinateur (pour plus tard)

Si un jour vous voulez tout faire vous-même, il faut installer
Node.js (https://nodejs.org) et Android Studio
(https://developer.android.com/studio). Ensuite, dans ce dossier :

```bash
npm install
```

```bash
npm run android:init
```

```bash
npm run android:open
```

Android Studio s'ouvre ; le menu **Build → Build App Bundle(s) / APK(s) →
Build APK(s)** crée l'APK. Après chaque modification du jeu, lancez
`npm run android:sync`.

---

## 4. Vos sauvegardes

La partie est enregistrée dans l'application elle-même. Si vous désinstallez
l'application, ou passez de la version navigateur à l'APK, la partie ne suit
pas. Avant de changer, allez dans **Options → Exporter → Copier**, gardez le
code quelque part, puis collez-le dans la nouvelle version avec **Importer**.
Les sauvegardes de la version anglaise d'origine fonctionnent aussi.

---

## 5. Licence

Le jeu d'origine (https://github.com/Symb1/progress_knight_2) est dans le
domaine public (licence UNLICENSE). Cette version l'est aussi.
