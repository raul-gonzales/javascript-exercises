const removeFromArray = function(theArray, ...args) {
    const filteredArray = [];
    theArray.forEach(element => {
        if (!args.includes(element)){
            filteredArray.push(element);
        }
    });

    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
