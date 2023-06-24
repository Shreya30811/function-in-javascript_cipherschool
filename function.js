// E55 - functionally scoped(var)
// es6 - block scoped(let const)

var abc = 10;
function testing (){
    var abc = 20;
    let def = 100;
    console.log(abc);
    // block scope
    if(1){
        var xyz = ' block scoped';
        console.log('Inside If',xyz);
        console.log(abc);
    }
    console.log('Outside If', xyz);
}
testing(); // calling a function



var name = 'Cipher';
let year = 2028;
function test(){
    console.log(name);
    console.log(year);

}
test();

// function declaration and function expression
myFunc()
myFunc2()
function myFunc(){
    console.log('Inside my function declaration');

}
// function expression
let myFunc2 = function(){
    console.log('Inside myFunc2: function expression');
}

console.log(name2)
name();
var name2 = 'Mardula';
var name = function(){
    console.log("Hello");
}

// Arrow function - es6 feature
// this - context

let newFunc = () => {
    console.log('Arrow function created');
    console.log(this);

}
 newFunc();
 function funExp(){
    console.log('function expression created');
    console.log('this')
 }
 funExp();

 let newFunc = name => console.log(name);
 newFunc('Cipher'); // arrow
