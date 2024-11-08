
function countWordOccurrences(sentence:string, word:string):number {
    const caseSen = sentence.toLowerCase();
    const caseWord = word.toLowerCase()

    const regex = new RegExp(`\\b${caseWord}\\b`, 'g');
    const matches = caseSen.match(regex)

    return matches ? matches.length : 0
}

const words = countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");
console.log(words)