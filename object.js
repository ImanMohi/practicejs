let person = {
    firstname: "John",
    lastname: 'Doe',
};

console.log(Object.keys(person));

console.log(Object.values(person));

console.log(Object.assign(person, {
    firstname: 'Jane',
    email: 'jane.doe@gmail.com'
}));

console.log('\n\n\n\n');

let a= {
    value: 10
};

let b=a;
let c = {
    value: 10
};

console.log(a==b);
console.log(a===b);
console.log(a==c);
console.log(a===c);
a.value=15;
console.log(a.value);
console.log(b.value);
console.log(c.value);