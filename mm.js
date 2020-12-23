db = {
    keywords: [
        "my soul",
        "BATMAN",
        "Barack Obama",
        "poverty",
        "millions of cane toads",
        "sweet, sweet vengeance",
        "liberals",
        "being rich",
        "powerful thighs",
        "teenage pregnancy",
        "white privilege",
        "Ghandi",
        "a brain tumour"
    ],
    randomIndexGenerator () {
        const randomIndex1 = Math.floor(Math.random() * this.keywords.length)
        let randomIndex2 = Math.floor(Math.random() * this.keywords.length)
        if (randomIndex1 !== randomIndex2) {
            return [randomIndex1, randomIndex2]
        } else {
            while (randomIndex1 === randomIndex2) {
                randomIndex2 = Math.floor(Math.random() * this.keywords.length)
            }
            return [randomIndex1, randomIndex2]
        }
    },
    randomSentenceSelector () {
        const randomSentenceIndex = Math.floor(Math.random() * sentenceStems.length);
        return randomSentenceIndex
    }
}

const indexes = db.randomIndexGenerator();
const word1 = db.keywords[indexes[0]]
const word2 = db.keywords[indexes[1]]

const sentenceStems = [
        `For my next trick, I will pull ${word1} out of ${word2}.`,
        `I never truly understood ${word1} until I encountered ${word2}.`,
        `${word1} is a slippery slope that leads to ${word2}.`,
        `Michael Bay's new three-hour action epic pits ${word1} against ${word2}.`,
        `They said we were crazy. They said we couldn't put ${word1} inside of ${word2}. They were wrong.`,
        `In M. Night Shyamalan's new movie, Bruce Willis discovers that ${word1} had really been ${word2} all along.`
]

const sentenceIndex = db.randomSentenceSelector();
const randomSentence = sentenceStems[sentenceIndex]

console.log(randomSentence);


