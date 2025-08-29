const currentLocationData = {
    "location": "PLACE DU VILLAGE",
    "quests": [
        {
            "id": 20,
            "title": "La place du village",
            "mainCharacter": null,
            "description": `La place du village est un vaste espace pavé aux dalles inégales, polies par des siècles de passages. Quelques grands arbres, aux troncs noueux et aux feuillages généreux, y apportent de l’ombre et une sensation de fraîcheur, tandis que des bancs de pierre invitent les habitants à s’y reposer. Au centre trône un préhaut en bois sculpté, aux colonnes finement ouvragées, servant à la fois de scène pour les annonces, de tribune pour les discours, et de lieu de rassemblement lors des fêtes. Autour, de petites échoppes s’ouvrent directement sur la place, exhalant des odeurs de pain chaud, de cuir ou de houblon. L’endroit respire la vie quotidienne : on y entend les appels des marchands, le rire des enfants courant entre les arbres, et le tintement des marteaux des artisans voisins. C’est le cœur battant du village, à la fois familier et solennel.`,
            "image": "images/place.png",
            "requirement": null
        }, {
            "id": 21,
            "title": "Le bon samaritain",
            "mainCharacter": "KIROUT",
            "description": `Sur la place du village, l’air embaume encore l’odeur de pluie et de bois mouillé après la tempête. Vous remarquez Kirout, perché sur un toit abîmé, ajustant avec soin les tuiles disjointes. Ses gestes sont précis, efficaces, mais il ne réclame ni regard admiratif ni remerciement.
<br><br>
Plusieurs villageois, qui observent la scène depuis la rue pavée, échangent des murmures :
<br>
— « C’est incroyable… il est toujours là quand il y a un souci, mais il ne se vante jamais. »
<br>— « Un vrai pilier de notre village, discret et fiable. »
<br><br>
Vous sentez que la force de Kirout ne réside pas seulement dans ses talents d’archer ou de stratège, mais aussi dans cette fidélité silencieuse au bien commun, qui inspire respect et admiration autour de lui..`,
            "image": "images/place.png",
            "requirement": null
        }, {
            "id": 22,
            "title": "La star du village",
            "mainCharacter": "BEDEU",
            "description": `Sur la place du village, vous apercevez Bedeu, le tavernier, qui traverse les ruelles pavées en portant un petit tonnelet sous le bras. À chaque pas, il salue les villageois d’un sourire chaleureux et d’un geste amical. Les habitants lui répondent avec autant de cordialité, certains échangeant même un mot ou une plaisanterie.
<br><br>
L’atmosphère est légère et conviviale, et il devient évident que Bedeu n’est pas seulement un commerçant : il est apprécié, presque aimé, pour sa gentillesse, sa disponibilité et sa façon de mettre tout le monde à l’aise. Vous comprenez qu’un simple passage de ce tonnelier dans les rues suffit à renforcer le tissu social du village.`,
            "image": "images/place.png",
            "requirement": [10]
        }, {
            "id": 23,
            "title": "Les soupçons ont la vie dure",
            "mainCharacter": "ORITAL",
            "description": `Sur la place centrale, le brouhaha attire votre attention. Un petit groupe de villageois s’est rassemblé, leurs voix se mêlant dans une discussion animée. Certains défendent Orital avec passion, louant sa justice, son intelligence et la sagesse dont il fit preuve lors de son mandat.
<br><br>
— « Il a toujours veillé au bien de tous ! » s’exclame l’un.
<br>— « Sans lui, notre village serait bien moins organisé et prospère. »
<br><br>
Mais d’autres secouent la tête, leurs regards méfiants trahissant un doute tenace.
<br>
— « Peut-être, mais on ne peut pas oublier ce qu’on a entendu… même s’il a été innocenté. »
<br><br>
Vous observez la scène, conscient que cette division, ce contraste entre loyauté et suspicion, pourrait devenir le plus grand obstacle d’Orital dans sa quête pour redevenir bourgmestre. Le village semble partagé, et chaque mot échangé pourrait peser dans la balance de l’élection à venir.`,
            "image": "images/place.png",
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