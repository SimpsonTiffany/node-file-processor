const fs = require('fs');

// Read numbers from text and convert to array
function getNumbers(text) {
    return text
        .split(/\r?\n/)
        .map(line => line.trim())
        .filter(line => line !== '')
        .map(Number);
}

// Calculate the sum of all numbers
function calculateSum(text) {
    const nums = getNumbers(text);
    return nums.reduce((a, b) => a + b, 0);
}

// Find the highest number
function findMax(text) {
    const nums = getNumbers(text);
    return Math.max(...nums);
}

// Find the lowest number
function findMin(text) {
    const nums = getNumbers(text);
    return Math.min(...nums);
}

// Calculate the average
function calculateAverage(text) {
    const nums = getNumbers(text);
    return nums.length === 0 ? 0 : calculateSum(text) / nums.length;
}

// Manual verification (only runs if called directly)
if (require.main === module) {
    const fileData = fs.readFileSync('./data/sample-numbers.txt', 'utf8');
    console.log('Sum:', calculateSum(fileData));
    console.log('Max:', findMax(fileData));
    console.log('Min:', findMin(fileData));
    console.log('Average:', calculateAverage(fileData));
}

// Export functions for Jest testing
module.exports = { calculateSum, findMax, findMin, calculateAverage };

