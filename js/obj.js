function grettme(cb) {
    setTimeout(function() {
        var name = 'Kishore';
        cb(name);
    }, 1000); 
}

var converToLowerCase = function(input) {
    input = input.toLocaleLowerCase();
    let fn = function (input) {
        console.log(input);
    }
    let result = addGretting(input, fn);
    //console.log(result);
}

var addGretting = function(input, cb) {
    setTimeout(function() {
        input = 'Good Morning '+ input+ '!';        
        cb(input);
    }, 2000);
}

grettme(converToLowerCase);