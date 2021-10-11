const foo = {
    fn: function() {
        let a = "outer function";
        console.log(this.a);
    },
    y : {
        fn: function() {
            let a = "inner function";
            console.log(this.a);
        }
    }
}

foo.fn();
