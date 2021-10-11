window.music = 'classical';

var foo = function () {
    var music = 'blues';
    return this.music;
};

bar = {
    music : 'jazz',
    getMusic : function(){
        return this.music;
    }
}

console.log(this.music); //'classical' (global)

console.log(foo()); //'classical' (global)

console.log(bar.getMusic()); //'jazz' (property of object: bar)