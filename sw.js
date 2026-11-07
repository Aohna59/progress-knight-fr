// =====================================================================
// Service worker : garde une copie de tous les fichiers du jeu sur le
// téléphone, pour pouvoir jouer sans connexion.
// Quand vous modifiez un fichier du jeu, augmentez le numéro de VERSION
// pour que les joueurs reçoivent la mise à jour.
// =====================================================================

const VERSION = "pk2-fr-v1"

const FILES = [
    "./",
    "./index.html",
    "./manifest.webmanifest",
    "./css/w3.css",
    "./css/styles.css",
    "./css/dark.css",
    "./css/mobile.css",
    "./js/HackTimer.js",
    "./js/i18n-fr.js",
    "./js/classes.js",
    "./js/main.js",
    "./js/mobile.js",
    "./img/logo.ico",
    "./img/logos.png",
    "./img/icon-192.png",
    "./img/icon-512.png",
    "./img/icon-maskable-512.png",
]

// Installation : on met tous les fichiers en cache
self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(VERSION).then(function (cache) { return cache.addAll(FILES) })
    )
    self.skipWaiting()
})

// Activation : on supprime les anciennes versions du cache
self.addEventListener("activate", function (event) {
    event.waitUntil(
        caches.keys().then(function (keys) {
            return Promise.all(keys.filter(function (k) { return k !== VERSION })
                                   .map(function (k) { return caches.delete(k) }))
        }).then(function () { return self.clients.claim() })
    )
})

// Requêtes : on répond tout de suite avec la copie locale (fonctionne hors
// ligne) et, si internet est disponible, on télécharge en arrière-plan la
// dernière version du fichier pour le prochain lancement.
self.addEventListener("fetch", function (event) {
    if (event.request.method !== "GET") return
    if (new URL(event.request.url).origin !== self.location.origin) return
    event.respondWith(
        caches.open(VERSION).then(function (cache) {
            return cache.match(event.request, {ignoreSearch: true}).then(function (cached) {
                var network = fetch(event.request).then(function (response) {
                    if (response.ok) cache.put(event.request, response.clone())
                    return response
                }).catch(function () { return cached })
                return cached || network
            })
        })
    )
})
