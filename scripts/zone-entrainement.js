const currentLocationData = {
    "location": "ZONE D ENTRAINEMENT VIRTUELLE",
    "quests": [
        {
            "id": 50,
            "title": "La zone d'entrainement virtuelle",
            "description": `La zone d’entraînement virtuel est un vaste dôme circulaire, bardé de runes luminescentes gravées dans la pierre. En son centre, de larges cristaux scintillants diffusent une énergie bleutée qui active les illusions magiques. Lorsque les apprentis s’y installent, le sol se métamorphose en terrains d’aventures : forêts sombres, ruines antiques, arènes de combat. Des silhouettes évanescentes apparaissent, adversaires ou alliés, selon le programme choisi. L’ambiance y est électrisante, entre le silence concentré des novices et les échos surnaturels des simulations. C’est un lieu où l’on peut tomber mille fois, sans jamais mourir, pour mieux apprendre à survivre.`,
            "image": "",
            "requirement": null
        },
        {
            "id": 51,
            "title": "Kirout, le mentor",
            "mainCharacter": "KIROUT",
            "description": `Kirout teste une simulation d'attaque sur le village. Il atteint tous ses objectifs sans effort, prouvant sa maîtrise tactique. Un jeune villageois, impressionné, lui demande un conseil, et Kirout prend le temps de le coacher.`,
            "image": "",
            "requirement": null
        },
        {
            "id": 52,
            "title": "Bedeu, le héros à la retraite",
            "mainCharacter": "BEDEU",
            "description": `A la zone d'entrainement, on constate que les high-score de la majorité des niveaux sont détenu par Bedeu, signe d'un aventurier d'exception`,
            "image": "",
            "requirement": null
        }
    ]
}
document.addEventListener('DOMContentLoaded', () => {
    // updateLastVisitedLocation(currentLocationData.location)
    // const randomChapter = getRandomChapter(currentLocationData.quests)
    const bestChapter = chooseBestChapter(currentLocationData)
    insertChapter(bestChapter)
    updateSeenQuestsList(bestChapter.id)
})