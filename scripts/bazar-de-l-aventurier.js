const currentLocationData = {
    "location": "BAZAR DE L AVENTURIER",
    "quests": [
        {
            "id": 40,
            "title": "Au bazar des aventuriers",
            "description": `Le bazar de l’aventurier est un capharnaüm organisé, où chaque étagère déborde de trésors improbables. Entre les torches de voyage et les cordes usées, on distingue des fioles aux liquides chatoyants, des parchemins roulés, des amulettes ternies et même quelques armes exotiques. L’air est saturé d’odeurs de cuir, de métal et d’épices. Le bois sombre des étagères craque sous le poids de ce bric-à-brac hétéroclite, et un comptoir grinçant attend quiconque désire troquer quelques pièces d’or contre un objet utile… ou inutile. Chaque recoin du bazar invite à fouiller, comme si un secret attendait d’être découvert.`,
            "image": "images/bazar.png",
            "requirement": null
        }, 
        {
            "id": 41,
            "title": "Kirout, le protecteur",
            "mainCharacter": "KIROUT",
            "description": `Au milieu des étagères chargées de fioles et de parchemins, la marchande baisse la voix en rangeant quelques potions dans un coffret de bois. « Vous savez, » dit-elle avec un sourire en coin, « Kirout vient souvent ici… mais il ne m’achète jamais de quoi blesser. Toujours des potions défensives, pour protéger plutôt que frapper. » Elle marque une pause, caressant l’étiquette d’une bouteille émeraude. « L’autre jour encore, il m’a apporté une cargaison entière de plantes rares, de celles qu’on ne trouve qu’au prix de jours de voyage. Il a refusé toute monnaie en retour. M’a simplement dit que c’était pour le bien du village. » Ses yeux brillent d’une reconnaissance sincère.`,
            "image": "images/bazar.png",
            "requirement": null
        }, 
        {
            "id": 42,
            "title": "Orital, Bourgmestre compréhensif",
            "mainCharacter": "ORITAL",
            "description": `Vous vous penchez sur le comptoir où une marchande trie des fioles et des herbes aux couleurs vives. Elle vous jette un regard pensif avant de murmurer :
<br><br>
— « Orital… Ah, lui, oui. Toujours prêt à soutenir les petites entreprises. Des aides, des réductions d’impôts… Il savait comment soulager ceux qui peinaient à joindre les deux bouts. »
<br><br>
Un soupir traverse ses lèvres, chargé de nostalgie. Elle hoche la tête, comme perdue dans un souvenir :
<br><br>
— « Les villageois l’aimaient beaucoup à l’époque… Avant cette histoire de ‘complot’, il était respecté pour sa compétence et son sens de la justice… »
<br><br>
Vous sentez que, malgré la rumeur qui a terni sa réputation, une part de la population se souvient encore de ses mérites avec affection.`,
            "image": "images/bazar.png",
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