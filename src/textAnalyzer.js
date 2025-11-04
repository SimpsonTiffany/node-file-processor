const fs = require('fs');

// Count total words in a text file
function countWords(text) {
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    return words.length;
}

// Find the longest word
function findLongestWord(text) {
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    return words.reduce((longest, current) =>
        current.length > longest.length ? current : longest, '');
}

// Count number of lines
function countLines(text) {
    return text.split(/\r?\n/).length;
}

// Verify the functions (manual test)
if (require.main === module) {
    const fileData = fs.readFileSync('./data/quotes.txt', 'utf8');
    console.log('Total Words:', countWords(fileData));
    console.log('Longest Word:', findLongestWord(fileData));
    console.log('Line Count:', countLines(fileData));
}

// Export functions for testing
module.exports = { countWords, findLongestWord, countLines };

