const currentLocationData = {
    "location": "ACADEMIE DE MAGIE",
    "quests": [
        {
            "id": 30,
            "title": "L'académie de magie",
            "description": `L’académie de magie s’élève comme un édifice de pierre claire et de vitraux colorés, à la fois austère et merveilleuse. Les hautes portes en bois ouvrent sur un hall où flottent des chandelles éternelles, diffusant une lumière douce et mouvante. Les murs sont tapissés d’étagères croulant sous les grimoires et les fioles mystérieuses, et l’air y sent le parchemin ancien mêlé aux herbes séchées. Des escaliers en colimaçon mènent vers des salles de cours, d’où s’échappent parfois des éclats de lumière ou des rires étouffés. Le lieu respire la connaissance et l’ésotérisme, empreint de ce mélange d’autorité académique et de magie vivante.`,
            "image": "images/academie.png",
            "requirement": null
        },
        {
            "id": 31,
            "title": "Kirout, le partenaire sceptique",
            "mainCharacter": "KIROUT",
            "description": `Dans la cour pavée de l’académie, un vieux professeur s’adresse aux élèves rassemblés, sa voix grave résonnant entre les colonnes. « Kirout… » commence-t-il, « …voilà un homme qui n’a jamais eu foi en la magie. Depuis toujours, il en parle avec prudence, parfois même avec méfiance. Et pourtant, les temps changent, mes amis. Aujourd’hui, il a choisi de collaborer avec notre école, convaincu qu’ensemble nous saurons protéger Grésombre. » Le professeur marque une pause, ses yeux brillants de fierté. « Pour sceller cette alliance, il a même confié son arc enchanté à l’un de nos plus brillants étudiants. » Un murmure d’émerveillement parcourt l’assemblée.`,
            "image": "images/academie.png",
            "requirement": null
        },
        {
            "id": 32,
            "title": "Bedeu, un puissant mage ?",
            "mainCharacter": "BEDEU",
            "description": `Dans une salle tapissée d’étagères croulant sous les grimoires, un maître de l’académie referme doucement un vieux registre aux pages jaunies. « Bedeu… » murmure-t-il avec un mélange de respect et de nostalgie. « Peu de gens s’en souviennent, mais il fut autrefois l’un de nos meilleurs magiciens. Sa maîtrise des arcanes était telle qu’il assurait lui-même la protection de Grésombre, veillant sur le village avec une vigilance sans faille. » Ses doigts glissent sur la couverture usée du livre, comme pour ranimer un souvenir endormi. « Le temps a peut-être voilé son éclat, mais son nom reste gravé dans l’histoire de notre école. »`,
            "image": "images/academie.png",
            "requirement": null
        },
        {
            "id": 33,
            "title": "Orital, le fondateur",
            "mainCharacter": "ORITAL",
            "description": `Dans l’amphithéâtre aux hautes voûtes, un professeur à la voix grave s’adresse aux élèves rassemblés. « N’oubliez jamais, » dit-il en pointant son bâton vers les fresques anciennes, « que cette école n’existerait pas sans Orital. C’est lui qui, autrefois, eut la conviction que la connaissance offrait une meilleure protection que la seule force des armes. Il traça les premières règles, enseigna les premières leçons et, de sa propre main, rédigea les manuels qui guident encore nos pas aujourd’hui. Chaque pierre de ces murs résonne de sa vision. » Un silence respectueux emplit la salle, comme si le fondateur lui-même observait encore.`,
            "image": "images/academie.png",
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