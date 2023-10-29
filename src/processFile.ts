import {countBlanks, countLetters, countRepeated, getWords} from "./statistics";
import {fileContents} from "./fileContents";

interface FileStatisticsFunction {
    (content: string, words: string[]): string;
}

const wordsNrStatistics: FileStatisticsFunction = (_content, words) => `Total number of words: ${words.length}`;
const letterNrStatistics: FileStatisticsFunction = (_content, words) => `Total number of letters: ${countLetters(words)}`;
const blankNrStatistics: FileStatisticsFunction = (content, _words) => `Total number of blanks: ${countBlanks(content)}`;
const repeatedWordsStatistics: FileStatisticsFunction = (_content, words) => {
    const repeatedWords = countRepeated(words, 10);
    return `Words repeated more than 10 times:\n${repeatedWords.join('\n')}`;
}

export async function processFile(filePath: string): Promise<string[]> {
    let fileContent: string = await fileContents(filePath);

    const words = getWords(fileContent);

    // Functional version of the Command pattern.
    // It seems overkill here, but it's in the requirements :-)
    const statistics: FileStatisticsFunction[] = [
        wordsNrStatistics,
        letterNrStatistics,
        blankNrStatistics,
        repeatedWordsStatistics
    ];

    return statistics.map(statFunction => statFunction(fileContent, words));
}
