const car={
    make:'Toyota',
    model:'Camry',
    year:2020,
    color:'blue',
    state:'KA',
    owner:"Prateek"
};

console.log('Original car object');
for(const property in car){
    console.log(`${property}:${car[property]}`);
}

const secondProperty=Object.keys(car)[5];
delete car[secondProperty];

console.log('\n Car Object after deleting the sixth property:');
for(const property in car ){
    console.log(`${property}:${car[property]}`);
}

const length=Object.keys(car).length;
console.log(`\n Length of the car object after deleting the second property:${length}`);