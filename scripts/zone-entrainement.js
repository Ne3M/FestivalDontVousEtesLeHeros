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
            "description": `Vous entrez dans la zone d’entraînement virtuelle, où des hologrammes de bâtiments et de villageois simulés flottent dans l’air. Kirout se tient au centre, l’arc prêt, observant attentivement chaque mouvement. Soudain, il déclenche une simulation d’attaque sur le village. Les cibles surgissent, les obstacles se multiplient, mais lui avance avec une précision et une fluidité déconcertantes. Chaque objectif est atteint sans effort apparent, et la tactique qu’il déploie semble presque instinctive.
<br><br>
Un jeune villageois, fasciné, s’approche timidement et demande :
<br>
— « Maître Kirout… auriez-vous un conseil à me donner ? »
<br><br>
Kirout pose son arc, sourit légèrement, et commence à lui montrer comment anticiper les mouvements, viser avec précision et garder son calme sous pression. Vous observez la scène, impressionné : derrière la force et l’adresse, se cache un sens du mentorat sincère, prêt à transmettre son savoir aux plus jeunes..`,
            "image": "",
            "requirement": null
        },
        {
            "id": 52,
            "title": "Bedeu, le héros à la retraite",
            "mainCharacter": "BEDEU",
            "description": `Vous vous aventurez dans la zone d’entraînement, où des panneaux lumineux affichent les meilleurs scores de chaque épreuve. Vos yeux s’écarquillent en voyant un nom qui revient sur presque tous les niveaux : Bedeu. Les chiffres flamboyants témoignent d’une maîtrise exceptionnelle, d’une précision et d’une rapidité qui dépassent de loin celles des autres participants.
<br>
La révélation vous frappe : le tavernier apprécié du village n’est pas seulement un homme de paroles et de bonne humeur, mais fut autrefois un aventurier hors pair, capable de prouesses que peu pourraient égaler aujourd’hui. Vous imaginez les exploits passés derrière ce sourire accueillant et ce regard chaleureux.`,
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

    const endAvailable = getCharacterPathProgress()
    if(endAvailable) enableEndOfGame(bestChapter.id)
})