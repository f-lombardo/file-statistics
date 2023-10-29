import {countBlanks, countLetters, countRepeated, getWords} from "../src/statistics";

const example = `
99 bottles of beer on the wall, 99 bottles of Beer.
Take one down and pass it around, 98 bottles of BEER on the wall.
`;

describe('Words analysis', () => {
    it('is case insensitive', async () => {
        expect(getWords(example)).toEqual([
           "99",
           "bottles",
           "of",
           "beer",
           "on",
           "the",
           "wall",
           "99",
           "bottles",
           "of",
           "beer",
           "take",
           "one",
           "down",
           "and",
           "pass",
           "it",
           "around",
           "98",
           "bottles",
           "of",
           "beer",
           "on",
           "the",
           "wall",
        ]);
    });

    it('can count words', () => {
        expect(countRepeated(getWords(example), 2))
            .toEqual([['beer', 3], ['bottles', 3], ['of', 3]]);
    });

    it('can count letters', () => {
        expect(countLetters(getWords(example)))
            .toEqual(89);
    });
});

describe('Text analysis', () => {
    it('is able to count blanks', async () => {
        expect(countBlanks(example)).toEqual(23);
    });
});
