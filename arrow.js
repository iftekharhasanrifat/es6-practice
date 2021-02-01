//arrow function
// function doubleIt(num) {
//     return num*2;
// }

// const doubleIt = function myFunc(num){
//     return num*2;
// }

//arrow function
const doubleIt = (num) => num * 2; //single parameter
const add = (x, y) => x + y; //multiple parameter
const give5 = () => 5;//without parameter
const doMath = (x,y)=>{       //multiline arrow function
    const sum = x+y;
    const diff = x-y;
    const result = sum*diff; 
    return result;
}

const result = add(5, 6);
const result1 = give5();
const result3 = doMath(5,3);
console.log(result1);
console.log(result3);