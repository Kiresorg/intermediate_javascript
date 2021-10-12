// lexical scoping

function init() {
    var name = 'FooBar'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();

  // With a closure

  function makeFunc() {
    var name = 'FooBarFTW';
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  var myFunc = makeFunc();
  myFunc();