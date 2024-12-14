function myFunction1 (word){
    console.log("This is a function. The word is: " + word);
}//#function
function myFunction1 (word){
    console.log("This is a function. The word is: " + word);
}//||

function myFunction2 (name, happy) {
    console.log(`This is a function. ${name} is ${(happy) ? "" : 'not '}happy`);
}//#checked


class MyClass {
    constructor(test)
    {
        console.log("This is a class.");
    }
}//#class
// will not be exported
class MyClass {
    constructor(test)
    {
        console.log("This is a class2.");
    }
}//#checked


const square = x => x * x //||
const square = x => x * x //||
const anotherFunction = (test) => { console.log("This is an arrow function."); } //#checked
const add = (a, b) => a + b //#arrow
