// =====================================================================
// Ajouts pour la version mobile / application
// =====================================================================

// Copie le code de sauvegarde dans le presse-papiers (pratique sur téléphone)
function copySaveText() {
    var box = document.getElementById("importExportBox")
    if (!box.value) exportGameData()
    box.select()
    var done = function () { alert("Code de sauvegarde copié.") }
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(box.value).then(done, function () {
            document.execCommand("copy"); done()
        })
    } else {
        document.execCommand("copy"); done()
    }
}

// Sauvegarde immédiate quand l'application passe en arrière-plan
// (Android peut fermer l'appli sans prévenir)
// (sauf pendant une réinitialisation, sinon la partie effacée serait réécrite)
var resettingGame = false
var originalResetGameData = resetGameData
resetGameData = function () {
    resettingGame = true
    originalResetGameData()
}
function saveIfNotResetting() {
    if (!resettingGame) saveGameData()
}
document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") saveIfNotResetting()
})
window.addEventListener("pagehide", saveIfNotResetting)

// Sur téléphone (pas de survol à la souris) : toucher une classe, une
// compétence ou un objet affiche sa description ; toucher ailleurs la ferme.
document.addEventListener("touchstart", function (e) {
    var tip = e.target.closest ? e.target.closest(".tooltip") : null
    var shown = document.querySelectorAll(".tooltip.showTip")
    for (var i = 0; i < shown.length; i++) {
        if (shown[i] !== tip) shown[i].classList.remove("showTip")
    }
    if (tip) tip.classList.add("showTip")
}, {passive: true})

// Sur téléphone : en changeant d'onglet, on remonte en haut du contenu
var originalSetTab = setTab
setTab = function (element, selectedTab) {
    originalSetTab(element, selectedTab)
    if (window.innerWidth <= 1000) {
        var panel = document.getElementById("mainPanel")
        if (panel.getBoundingClientRect().top < 0) panel.scrollIntoView()
    }
}

// Service worker : permet de jouer hors ligne et d'installer le jeu
if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1")) {
    window.addEventListener("load", function () {
        navigator.serviceWorker.register("sw.js").catch(function (err) {
            console.warn("Service worker non enregistré :", err)
        })
    })
}
