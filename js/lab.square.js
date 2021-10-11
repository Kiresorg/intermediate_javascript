// functional
function square(number) {
    return number * number;
}

console.log(square(2));

// anonymous expression
var square1 = function(number) { return number * number }

console.log(square1(3));

// named expression
var square2 = function sqr (number) { return number * number }

console.log(square2(4));
