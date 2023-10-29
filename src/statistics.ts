import {Str} from "@supercharge/strings";

export function getWords(fileContent: string): string[] {
    return Str(fileContent).toLowerCase().words();
}

export function countRepeated(words: string[], theshold: number = 0): [string, number][] {
    const wordMap: Map<string, number> = new Map();
    words.forEach(word => {
        if (wordMap.has(word)) {
            wordMap.set(word, wordMap.get(word)! + 1);
        } else {
            wordMap.set(word, 1);
        }

    });
    const repeatedWords: [string, number][] =
        Array.from(wordMap.entries())
            .filter(([word, count]) => count > theshold)
            .sort(([w1, n1], [w2, n2]) => n1 === n2 ? w1.localeCompare(w2) : n2 - n1);
    return repeatedWords;
}

export function countLetters(words: string[]): number {
    return words.reduce((accumulator, word) => accumulator + word.length, 0 );
}

export function countBlanks(content: string): number {
    return content.split('').filter(char => char === ' ').length;
}
