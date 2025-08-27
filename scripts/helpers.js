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
        console.log('FIRST QUEST')
        setLastVisit(currentLocation)
        return currentLocationQuests[0]
    }

    const isFinished = currentLocationQuests.every(quest => seenQuestsList.includes(quest.id));
    if( isFinished ) {
        console.log('FINISHED PLACES')
        return {
            id: 999,
            title: "C'est calme ici",
            description: `Il semble que rien de neuf ne se passe ici...
            <br><br>
            Explorez peut-être les autres lieux du village.`,
            image: ""
        }
    } 

    const lastWasAlreadyHere = currentLocationQuests.some(quest => quest.id === seenQuestsList.at(-1))
    const tooEarlyForNewQuestHere = isLastVisitTooClose(currentLocation)
    if( lastWasAlreadyHere && tooEarlyForNewQuestHere ) {
        console.log('REPEAT QUEST')
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
    console.log('NEW QUEST')
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
    if( questId === 999 ) return;
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