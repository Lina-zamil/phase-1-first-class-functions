function receivesAFunction(returnsAnAnonymousFunction) {
    returnsAnAnonymousFunction()
    return returnsAnAnonymousFunction;
};

function returnsANamedFunction() {
    fn = function () { console.log("Hi") }
    return fn;
}

function returnsAnAnonymousFunction() {
    return (function () { console.log("Hay") });
}