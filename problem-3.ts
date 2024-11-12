
function countWordOccurrences(sentence:string, word:string):number {
    const caseSen = sentence.toLowerCase();
    const caseWord = word.toLowerCase()

    const words = caseSen.split(' ')

    let wordCount = 0;
    for(const w of words){
        if(w === caseWord){
            wordCount++;
        }
    }
    return wordCount;
}

const fullSentence = countWordOccurrences("I love typescript", "typescript");
console.log(fullSentence)