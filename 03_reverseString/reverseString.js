const reverseString = function(string) {
    let final = ''

    for(let i = string.length - 1; i >= 0; i--){
        final += string[i];
    }

    return final;
};

// Do not edit below this line
module.exports = reverseString;
