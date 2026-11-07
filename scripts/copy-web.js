// Copie les fichiers du jeu dans le dossier "www" utilisé par Capacitor.
// Lancé par : npm run build
const fs = require("fs")
const path = require("path")

const root = path.join(__dirname, "..")
const out = path.join(root, "www")
const items = ["index.html", "manifest.webmanifest", "sw.js", "css", "js", "img"]

fs.rmSync(out, { recursive: true, force: true })
fs.mkdirSync(out)
for (const item of items) {
    fs.cpSync(path.join(root, item), path.join(out, item), { recursive: true })
}
console.log("Fichiers du jeu copiés dans www/")
