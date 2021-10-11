function makeFunc() {
    var name = 'FooBar';
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  var myFunc = makeFunc();
  myFunc();