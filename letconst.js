//const is used if the variable need not to be changed for future purpose
const name = "iftekhar Hasan";
console.log(name);

const numbers = [12, 45];
numbers[1] = 77;
numbers.push(23);
console.log(numbers);

const person = { name: "Rifat", phone: "1234" };
console.log(person);

//let is used if the variable is changeable for future purpose 
let patientName = "Iftekahr Hasan";
patientName = "hasan"
console.log(patientName);

// let cant be accessed outside of the scope
let sum = 0;
for (let i = 0; i < 10; i++) {
    sum = sum + i;
}
console.log(sum);