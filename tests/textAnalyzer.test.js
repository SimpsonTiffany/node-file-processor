const fs = require('fs');
const { countWords, findLongestWord, countLines } = require('../src/textAnalyzer');

const fileData = fs.readFileSync('./data/sample-text.txt', 'utf8');

describe('textAnalyzer functions', () => {
    test('counts total words correctly', () => {
        const result = countWords(fileData);
        const expected = fileData.split(/\s+/).filter(word => word.length > 0).length;
        expect(result).toBe(expected);
    });

    test('finds the longest word correctly', () => {
        const result = findLongestWord(fileData);
        const expected = fileData
            .split(/\s+/)
            .filter(word => word.length > 0)
            .reduce((longest, current) => (current.length > longest.length ? current : longest), '');
        expect(result).toBe(expected);
    });

    test('counts total lines correctly', () => {
        const result = countLines(fileData);
        const expected = fileData.split('\n').length;
        expect(result).toBe(expected);
    });

    test('handles empty text gracefully', () => {
        expect(countWords('')).toBe(0);
        expect(findLongestWord('')).toBe('');
        expect(countLines('')).toBe(1);
    });
});

