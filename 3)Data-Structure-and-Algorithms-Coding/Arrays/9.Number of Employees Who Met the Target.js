//https://leetcode.com/problems/number-of-employees-who-met-the-target/description/
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let count=0;
    hours.forEach(eachPersonWorkedHour=>eachPersonWorkedHour>=target?count++:count)
    return count;
};
numberOfEmployeesWhoMetTarget([5,1,4,2,2],6)