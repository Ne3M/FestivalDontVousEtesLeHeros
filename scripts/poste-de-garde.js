const currentLocationData = {
    "location": "POSTE DE GARDE",
    "quests": [
        {
            "id": 0,
            "title": "Le poste de garde",
            "description": `Le poste de garde se dresse à l’entrée du village, massif et rassurant. Construit en pierre grise, il est flanqué de meurtrières et d’une lourde porte en bois cerclée de fer. À l’intérieur, les murs sont décorés de trophées d’armes, d’étendards et de cartes détaillées des environs. Les gardes vont et viennent, armés mais souriants, offrant au lieu une atmosphère de vigilance bienveillante plutôt que d’oppression. C’est le premier visage du village, ferme mais accueillant.`,
            "image": "images/poste-de-garde.webp",
            "requirement": null
        },
        {
            "id": 1,
            "title": "Oyez! Heraut du village!",
            "description": `Le chemin poussiéreux s’élargit, et bientôt se dressent devant vous les lourdes portes de Grésombre, faites de bois rouge cerclé de fer. Deux gardes en armure se placent en travers de votre route, hallebardes croisées. L’air est tendu un instant, puis l’un d’eux sort un parchemin qu’il conserve dans une bourse scellée aux armes du roi. Ses yeux s’écarquillent en lisant les mots, et il se redresse aussitôt, solennel.
<br><br>
— « C’est vous... l’émissaire du trône. Vous êtes ici pour choisir le nouveau bourgmestre. »
<br><br>
L’autre garde s’incline à son tour et vous tend un document soigneusement plié : une carte du village. Les portes s’ouvrent dans un grincement, dévoilant les ruelles pavées et les toits de tuiles qui s’étendent derrière. L’aventure commence.`,
            "image": "",
            "requirement": null
        },
        {
            "id": 2,
            "title": "L'injustice",
            "mainCharacter": "ORITAL",
            "description": `Vous entrez au poste de garde, où l’odeur de cuir et de métal se mêle à l’atmosphère feutrée des couloirs. Un vieux garde, appuyé sur sa hallebarde, vous interpelle d’une voix grave :
<br>
— « Vous voulez connaître la vérité sur Orital ? »
<br><br>
Il vous conduit devant un registre ancien, dont les pages sont jaunies par le temps. Ses doigts tremblants parcourent les lignes, et il vous montre certaines entrées : des annotations falsifiées qui, à l’évidence, ont conduit à la destitution injuste d’Orital.
<br><br>
Autour de lui, plusieurs gardes baissent les yeux ou se détournent, visiblement gênés à l’évocation de cette injustice passée. Vous sentez un mélange de colère et de tristesse flotter dans l’air : derrière les murs solides du poste de garde, le souvenir d’un complot persiste, et il éclaire d’un jour nouveau le personnage d’Orital et la complexité de la politique villageoise.`,
            "image": "",
            "requirement": null
        },
        {
            "id": 3,
            "title": "La bagarre",
            "mainCharacter": "BEDEU",
            "description": `Au poste de garde, l’atmosphère se tend soudainement. Deux villageois s’échangent des mots durs, et bientôt, une bagarre menace d’éclater. Le bruit des voix s’élève, les gardes se préparent à intervenir, mais avant que la situation ne dégénère, Bedeu surgit au milieu de la mêlée.
<br>
— « Oh là, les amis! Calmez-vous! » clame-t-il d’une voix ferme mais posée.
<br><br>
Son autorité tranquille et son regard assuré suffisent à faire reculer les protagonistes. Il sépare les belligérants, leur parlant avec patience et humour pour apaiser les tensions. Les regards se détendent, les épaules se relâchent, et en quelques instants, le calme revient. Vous observez Bedeu, impressionné : derrière le sourire accueillant du tavernier se cache un homme capable de maîtriser les conflits et de préserver la paix du village.`,
            "image": "",
            "requirement": [10]
        },
        {
            "id": 4,
            "title": "La formation des recrues",
            "mainCharacter": "KIROUT",
            "description": `Dans l’ombre de la zone d’entraînement, vous apercevez Kirout entouré de nouvelles recrues. Il parle peu, ses mots sont sobres, mais chaque geste est mesuré et précis. Il corrige une posture, ajuste la tension d’une corde, montre la manière correcte de tenir un arc… Chaque mouvement semble calculé pour enseigner l’efficacité et la discipline.
<br><br>
Les gardes, attentifs, suivent ses instructions avec un respect silencieux, manifestant une confiance totale en son expertise. Vous sentez que, derrière cette sobriété apparente, Kirout transmet non seulement un savoir technique, mais aussi une philosophie de rigueur et de dévouement qui inspire ceux qui l’écoutent.`,
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