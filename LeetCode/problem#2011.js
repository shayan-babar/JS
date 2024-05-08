var finalValueAfterOperations = function (operations) {
    var count = 0;
    for (var i = 0; i < operations.length; i++) {
        if (operations[i].includes('X++')) {
            count = count + 1;
        }
        else if (operations[i].includes('++X')) {
            count = count + 1;
        } else if (operations[i].includes('X--')) {
            count = count - 1;
        }
        else if (operations[i].includes('--X')) {
            count = count - 1;
        }
    }
    return count;
};
