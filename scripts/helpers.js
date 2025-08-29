const BedeuQuests = [3,10,22,32,52]
const KiroutQuests = [4,21,31,41,51]
const OritalQuests = [2,12,23,33,42]

const getCharacterPathProgress = () => {
    const seenQuests = getSeenQuestsList()
    const BedeuProgress = BedeuQuests.filter(q => seenQuests.includes(q)).length/BedeuQuests.length*100
    const KiroutProgress = KiroutQuests.filter(q => seenQuests.includes(q)).length/KiroutQuests.length*100
    const OritalProgress = OritalQuests.filter(q => seenQuests.includes(q)).length/OritalQuests.length*100
    // console.log({BedeuProgress, KiroutProgress, OritalProgress})

    document.querySelector('.bedeu-progress span').style=`--progress:${Math.round(BedeuProgress)}%`
    document.querySelector('.kirout-progress span').style=`--progress:${Math.round(KiroutProgress)}%`
    document.querySelector('.orital-progress span').style=`--progress:${Math.round(OritalProgress)}%`

    return [BedeuProgress, KiroutProgress, OritalProgress].some(p => p === 100)
}

const enableEndOfGame = (chapterId) => {
    if(chapterId === 999) window.location = "/la-grande-annonce.html"
}

const getChapterTPL = () => {
    return document.querySelector('#chapter-tpl').innerHTML
}

const getRandomChapter = currentLocationQuests => {
    const chapterCount = currentLocationQuests.length;
    const randomQuest = Math.floor(Math.random()*chapterCount)
    return currentLocationQuests[randomQuest]
}

const chooseBestChapter = currentLocationData => {
    const currentLocationQuests = currentLocationData.quests
    const currentLocation = currentLocationData.location
    const seenQuestsList = JSON.parse(localStorage.getItem('seenQuestsList')) ?? []

    const firstQuestHere = !seenQuestsList.includes(currentLocationQuests[0].id)
    if( firstQuestHere ) {
        // console.log('FIRST QUEST')
        setLastVisit(currentLocation)
        return currentLocationQuests[0]
    }

    const isFinished = currentLocationQuests.every(quest => seenQuestsList.includes(quest.id));
    if( isFinished ) {
        // console.log('FINISHED PLACES')
        setLastVisit(currentLocation)
        return {
            id: 999,
            title: "C'est calme ici",
            description: `Il semble que plus rien de neuf ne se passe ici...
            <br><br>
            Explorez les autres lieux du village, vous y apprendrez sûrement d'autres informations.`,
            image: ""
        }
    } 

    const lastWasAlreadyHere = currentLocationQuests.some(quest => quest.id === seenQuestsList.at(-1))
    const tooEarlyForNewQuestHere = isLastVisitTooClose(currentLocation)
    if( lastWasAlreadyHere && tooEarlyForNewQuestHere ) {
        // console.log('REPEAT QUEST')
        const lastQuest = currentLocationQuests.find(quest => quest.id === seenQuestsList.at(-1))
        const repeatQuest = {...lastQuest}
        repeatQuest.id = 999
        repeatQuest.title = "Un peu de patience..."
        repeatQuest.description = `La scène précédente vient d'avoir lieu, visitez un autre endroit ou revenez un peu plus tard...<br><br><br>Maisi vos souvenirs sont déjà effacés :</p>
        <h2>${lastQuest.title}</h2>
        <p>${lastQuest.description}
        `
        return repeatQuest
    }

    const remainingChapters = currentLocationQuests.filter(item => !seenQuestsList.includes(item.id)) 
    // console.log('NEW QUEST')
    setLastVisit(currentLocation)
    return getRandomChapter(remainingChapters)
}

const insertChapter = chapter => {
    const chapterTPL = getChapterTPL()
    const mainContent = document.querySelector('main')
    const chapterToInsert = chapterTPL
        .replace(/{{TITLE}}/g, chapter.title)
        .replace(/{{DESCRIPTION}}/g, chapter.description)
        .replace(/{{IMG}}/g, chapter.image)

    mainContent.insertAdjacentHTML('afterbegin', chapterToInsert)
}

// const updateLastVisitedLocation = location => {
//     localStorage.setItem('lastVisitedPlace', location)
// }

const updateSeenQuestsList = questId => {
    // if( questId === 999 ) return;
    const seenQuestsList = JSON.parse(localStorage.getItem('seenQuestsList')) ?? []
    seenQuestsList.push(questId)
    localStorage.setItem('seenQuestsList', JSON.stringify(seenQuestsList))
}

const getSeenQuestsList = () => JSON.parse(localStorage.getItem('seenQuestsList')) ?? []

/* LAST VISIT */
const getLastVisit = place => localStorage.getItem('lastVisit_'+place) || now()
const setLastVisit = place => localStorage.setItem('lastVisit_'+place, now())
const now = () => new Date().getTime()
const isLastVisitTooClose = place => {
    const lastVisit = getLastVisit(place)
    return (now() - lastVisit) < 1000 * 60 * 10
}