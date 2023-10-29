import {countBlanks, countLetters, countRepeated, getWords} from "../src/statistics";
import {processFile} from "../src/processFile";

describe('Process file', () => {
    it('is able to read a file', async () => {
        const result = await processFile('fixtures/99bottles.txt');
        const expectedResult = [
            "Total number of words: 2504",
            "Total number of letters: 8882",
            "Total number of blanks: 2304",
`Words repeated more than 10 times:
beer,300
of,300
bottles,297
the,201
on,200
wall,200
and,100
around,99
down,99
it,99
one,99
pass,99
take,99`
        ];
        expect(result).toEqual(expectedResult);
    });
});
