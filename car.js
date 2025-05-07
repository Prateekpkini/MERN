// write node.js program to print the a car object properties, delete the second property and get length of the object.
let car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2021,
    color: 'Blue'
};
console.log('Car properties before deletion:');
for (let property in car) {
    console.log(`${property}: ${car[property]}`);
}

delete car.model;

console.log('\nCar properties after deletion:');
for (let property in car) {
    console.log(`${property}: ${car[property]}`);
}

let length = Object.keys(car).length;

console.log(`\nLength of the car object after deletion: ${length}`);
