
function receivesAFunction (callback) {
    callback();
}

function givesAFunction() {
        console.log("Grave Digger is my favorite!");
    }

receivesAFunction (givesAFunction);


function returnsANamedFunction() {
    console.log(namedFunction);
    return namedFunction;
}
function namedFunction() {
    console.log("Helloo Cleveland!");
}
returnsANamedFunction(namedFunction);

function returnsAnAnonymousFunction() {
    return function () {
    console.log("Hello World");
}
}

returnsAnAnonymousFunction();

/*
function Monday() {
    console.log("Go for a five-mile run");
    console.log("Pump Iron");
}
function Tuesday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
}
function Wednesday() {
    console.log("Go for a five-mile run");
    console.log("Go for a five-mile run");
}
function Thursday() {
    console.log("Go for a five-mile run");
    console.log("Pump Iron");
}
function Friday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
}
*/