const removeFromArray = function(array, ...args) {

    for(let i = 0; i < args.length; i++){
        array = array.filter(function(letter) {
            return !args.includes(letter);
        });
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
