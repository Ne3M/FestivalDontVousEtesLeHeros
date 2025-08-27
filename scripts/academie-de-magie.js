const currentLocationData = {
    "location": "ACADEMIE DE MAGIE",
    "quests": [
        {
            "id": 30,
            "title": "L'académie de magie",
            "description": `L’académie de magie s’élève comme un édifice de pierre claire et de vitraux colorés, à la fois austère et merveilleuse. Les hautes portes en bois ouvrent sur un hall où flottent des chandelles éternelles, diffusant une lumière douce et mouvante. Les murs sont tapissés d’étagères croulant sous les grimoires et les fioles mystérieuses, et l’air y sent le parchemin ancien mêlé aux herbes séchées. Des escaliers en colimaçon mènent vers des salles de cours, d’où s’échappent parfois des éclats de lumière ou des rires étouffés. Le lieu respire la connaissance et l’ésotérisme, empreint de ce mélange d’autorité académique et de magie vivante.`,
            "image": "",
            "requirement": null
        },
        {
            "id": 31,
            "title": "Kirout, le partenaire sceptique",
            "mainCharacter": "KIROUT",
            "description": `Un professeur explique que Kirout s’est toujours méfié de la magie, mais qu’il collabore désormais avec l’école pour assurer une défense conjointe du village. Il a même prêté son arc enchanté à un étudiant prometteur.`,
            "image": "",
            "requirement": null
        },
        {
            "id": 32,
            "title": "Bedeu, un puissant mage ?",
            "mainCharacter": "BEDEU",
            "description": `A l'école de magie, on découvre que Bedeu était autrefois un bon magicien, apte à assurer la sécurité du village`,
            "image": "",
            "requirement": null
        },
        {
            "id": 33,
            "title": "Orital, le fondateur",
            "mainCharacter": "ORITAL,ROUT",
            "description": `L’un des professeurs raconte que c’est Orital qui a fondé l’école, convaincu que la connaissance protège mieux que la force brute. Il a lui-même rédigé les premiers manuels d’apprentissage.`,
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