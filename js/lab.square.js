// functional declaration
function square(number) {
    return number * number;
}
console.log(square(2));

// with arrow
newSquare = (number) => {
    return number*number;
}

console.log(newSquare(11));



// anonymous expression
const square1 = function(number) { return number * number }

console.log(square1(3));

// named expression
let square2 = function sqr (number) { return number * number }

console.log(square2(4));
