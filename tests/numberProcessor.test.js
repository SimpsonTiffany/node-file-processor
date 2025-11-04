const fs = require('fs');
const { calculateSum, findMax, findMin, calculateAverage } = require('../src/numberProcessor');

const fileData = fs.readFileSync('./data/sample-numbers.txt', 'utf8');

describe('numberProcessor functions', () => {
    test('calculates the sum of all numbers correctly', () => {
        const result = calculateSum(fileData);
        const expected = fileData
            .split(/\r?\n/)
            .filter(line => line.trim() !== '')
            .map(Number)
            .reduce((a, b) => a + b, 0);
        expect(result).toBe(expected);
    });

    test('finds the highest number correctly', () => {
        const result = findMax(fileData);
        const expected = Math.max(
            ...fileData
                .split(/\r?\n/)
                .filter(line => line.trim() !== '')
                .map(Number)
        );
        expect(result).toBe(expected);
    });

    test('finds the lowest number correctly', () => {
        const result = findMin(fileData);
        const expected = Math.min(
            ...fileData
                .split(/\r?\n/)
                .filter(line => line.trim() !== '')
                .map(Number)
        );
        expect(result).toBe(expected);
    });

    test('calculates the average of numbers correctly', () => {
        const result = calculateAverage(fileData);
        const nums = fileData
            .split(/\r?\n/)
            .filter(line => line.trim() !== '')
            .map(Number);
        const expected = nums.reduce((a, b) => a + b, 0) / nums.length;
        expect(result).toBeCloseTo(expected, 5);
    });

    test('handles empty data gracefully', () => {
        expect(calculateAverage('')).toBe(0);
    });
});

