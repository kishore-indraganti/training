function grettme(cb) {
    setTimeout(function() {
        var databaseresult = 1;
        cb(databaseresult, addTwoToResult);
    }, 500);
}

var addOneToResult = function(result, fn) {
    fn(result + 1, addThreeToResult);
};

var addTwoToResult = function(result, fn) {
    fn(result + 2);
};

var addThreeToResult = function(result, fn) {
    var output = fn(result + 3);
    console.log(output);
};

grettme(addOneToResult);


