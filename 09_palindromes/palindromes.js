const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const processedString = string.toLowerCase().split('').filter((char) => alphanumerical.includes(char)).join('');
    
    const reversedString = processedString.split('').reverse().join('');

    return processedString == reversedString;
};

// Do not edit below this line
module.exports = palindromes;
