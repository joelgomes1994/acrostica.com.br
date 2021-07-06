const LOCALE = {

    portuguese: {
        navNews: "Notícias",
        navAbout: "Sobre",
        navDiscography: "Discografia",
        navContact: "Contato",
        footerListen: "Ouça",
        footerNav: "Navegação",
        footerSocial: "Siga",
        aboutTitle: "Sobre a Acróstica",
        aboutText: "Mesclando deathcore, groove metal, progressivo e música sinfônica, a banda Acróstica é formada por remanescentes e integrantes de bandas da região de Diadema e São Paulo (SP). A banda propõe uma ligação entre a música e a parte lírica através de letras sobre problemas sociais, contradições morais, males contemporâneos e niilismo. O nome 'Acróstica' se origina do termo 'acróstico', que é uma forma de se escrever poemas onde cada letra de uma palavra ou frase forma um dos versos, e essa é a mecânica das letras das músicas.",
    },

    english: {
        navNews: "News",
        navDiscography: "Discography",
        navAbout: "About",
        navContact: "Contact",
        footerListen: "Listen",
        footerNav: "Navigation",
        footerSocial: "Follow",
        aboutTitle: "About Acróstica",
        aboutText: "Mixing deathcore, groove metal, progressive metal and symphonic music, the band Acróstica is formed by former members of bands from the regions of Diadema and São Paulo (SP, Brazil). The band proposes a connection between music and the lyrical part through lyrics about social problems, moral contradictions, modern problems and nihilism. The name 'Acróstica' comes from the term 'acrostic', which is a way of writing poems where each letter of a word or phrase forms one of the verses, and that is the mechanics of the lyrics of the songs.",
    }
}


function translateElements() {
    const currentLocale = localStorage.language ? localStorage.language : "portuguese"
    localStorage.language = currentLocale

    for (const key in LOCALE[currentLocale]) {
        let elements = document.getElementsByClassName(key)
        if (elements.length) {
            for (let i = 0; i < elements.length; i++) {
                elements[i].innerHTML = LOCALE[currentLocale][key]
            }
        }
    }
}


function setLocale(lang) {
    if (LOCALE.hasOwnProperty(lang)) {
        localStorage.language = lang
        translateElements()
    }
}