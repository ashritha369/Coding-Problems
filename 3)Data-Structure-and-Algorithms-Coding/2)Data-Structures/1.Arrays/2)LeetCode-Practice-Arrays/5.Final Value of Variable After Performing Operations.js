//https://leetcode.com/problems/final-value-of-variable-after-performing-operations/
var finalValueAfterOperations = function(operations) {
    let X = 0;

    operations.forEach(item => {
        if (item === 'X++') {
            X++;
        } else if (item === '++X') {
            ++X;
        } else if (item === '--X') {
            --X;
        } else if (item === 'X--') {
            X--;
        }
    });

    return X;
};

console.log(finalValueAfterOperations(["X++", "++X", "--X", "X--"]));
