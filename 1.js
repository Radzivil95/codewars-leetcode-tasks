// function foo() {
//     return { bar: 1};
// }

// console.log(typeof foo().bar)

// var a = 1, b = function a(x) {
//     x && a(--x);
// };
// console.log(a)

// var name = "John";

// var user = {
//     name: "Peter",
//     printMessage() {
//         console.log(`Hello, ${this.name}!`)
//     }
// }

// var printMessage = user.printMessage;
// printMessage()

// let name = "John";

// function printName() {
//     console.log(name)
// }

// setTimeout(() => {
//     let name = "Peter";
//     printName();
// }, 1000)

// const foo = bar();
// const number = 2;

// function bar() {
//     return number
// }

// "use strict";

// const details = {
//     message: 'Hello!',
// }

// function getMessage() {
//     return this.message;
// }

// console.log(getMessage.call(details));

// function foo(a,b) {return a * b}
// const bar = foo.bind(null,2);
// bar(2)

"use strict";

function getThis() {
    return this;
}

console.log(getThis());

// printMessage();

// function printMessage() {
//     console.log("Hello!")
// }

// var name = "John";

// function printName() {
//     console.log(name)
//     var name = "Peter";
//     console.log(name);
// }

// printName();

// const foo = bar();

// const number = 2;

// function bar() { return number;}

// const details = {
//     name: 'John!',
// }
// function getMessage(message) {
//     return `${message} ${this.name}`;
// }

// console.log(getMessage.apply(details, ['Hello']))

// for(let i = 0; i < 3; i++) {
//     setTimeout(function() {
//         console.log(i)
//     }, 1000);
// }

// function x(a, b) {
//     console.log(arguments)
// }

// console.log(x(7,4))

// let name = "John";

// function printName() {
//     let name = "Peter";
//     console.log(name);
// }

// printName()

// function foo() {console.log(this);}
// console.log(foo.call(null));

// let f = new Function("a", "b", "return a+b")
// console.log(f(12,3))

// function foo() {
//     return { bar: 1};
// }
// console.log(typeof foo().bar)

// printMessage();
// function printMessage(){
//     console.log("Hello")
// }

// console.log(message);
// let message = "Hello"


// var name = "John";

// var user = {
//     name: "Peter",
//     printMessage() {
//         console.log(`Hello, ${this.name}!`);
//     }
// }

// var printMessage = user.printMessage;
// printMessage()

// function foo(a, b) {
//     return a* b;
// }

// const bar = foo.bind(null,2);
// console.log(bar(2))