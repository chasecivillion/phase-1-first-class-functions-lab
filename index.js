// Code your solution in this file!

const array = ["Antonia", "Nuru", "Amari", "Mo"]
const returnFirstTwoDrivers = function() { 
    const firstTwo = array.slice(0,2);
    return firstTwo;
};

const returnLastTwoDrivers = function() {
    const lastTwo = array.slice(2);
    return lastTwo;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function fareMultiplier( integer ) {
    return function(fare) {
        return fare * integer; 
    }
};    

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers( array , whichTwoDrivers) {
    return whichTwoDrivers(array);
};


// - `selectDifferentDrivers()` — This function takes two arguments, an array of
//   the names of Scuber's `drivers` and either the `returnFirstTwoDrivers()` or
//   `returnLastTwoDrivers()` function. Based on these two arguments,
//   `selectDifferentDrivers()` will return either the first two drivers or the
//   last two drivers.