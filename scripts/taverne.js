const currentLocationData = {
    "location": "TAVERNE",
    "quests": [
        {
            "id": 10,
            "title": "La taverne",
            "description": `La taverne est un refuge chaleureux, aux murs de pierre épaisse et aux poutres de bois noirci par les années. Une grande cheminée crépite au fond de la salle, emplissant l’air d’une odeur de feu de bois et de bière épicée. Des tables robustes, souvent bancales, sont couvertes de chopes mousseuses, de dés éparpillés et de miettes de pain. L’ambiance y est bruyante et vivante : rires, chants à pleins poumons, et le cliquetis régulier des chopes qui s’entrechoquent. Derrière le comptoir, Bedeu, le maître brasseur surveille sa salle d’un œil attentif, prêt à remplir les verres et à calmer les querelles.
            Il connaît chaque client par son prénom et semble apprécié de tous. Vous sentez qu’il inspire la confiance.`,
            "image": "images/taverne.png",
            "requirement": null
        },
//         {
//             "id": 11,
//             "title": "Bedeu, le tavernier",
//             "mainCharacter": "BEDEU",
//             "description": `La taverne est animée. Rires, chants et odeurs de bière chaude emplissent l’air.  
// Derrière le comptoir, Bedeu vous accueille avec un large sourire. Il vous sert un verre et engage la conversation.  
// Il connaît chaque client par son prénom et semble apprécié de tous.  
// Vous sentez qu’il inspire la confiance.`,
//             "image": "images/taverne.png",
//             "requirement": null
//         },
        {
            "id": 12,
            "title": "L'ancien sénateur'",
            "mainCharacter": "ORITAL",
            "description": `Vous poussez la porte de la taverne, et l’odeur chaleureuse du bois et du houblon vous enveloppe aussitôt. Dans un coin tranquille, Orital est assis, un livre d’histoire ouvert devant lui. Sa posture est calme, concentrée, et il tourne les pages avec soin.
<br><br>
Lorsque certains villageois le remarquent, ils s’inclinent légèrement en signe de respect, tandis que d’autres détournent poliment le regard, marquant la méfiance persistante.
<br><br>
Vous vous approchez et engagez la conversation. Orital parle avec sérénité et lucidité, exposant sa vision du village, ses projets et sa manière de gérer les affaires communales. Ses mots sont mesurés, réfléchis, et derrière la réserve de ses gestes, vous sentez une profonde conviction et un désir sincère de bien faire.`,
            "image": "images/taverne.png",
            "requirement": [2]
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