var friends = ['Matt', 'Will', 'Jackson', 'David', 'Paul', 'Kimberly', 'Rio'];

for (var i=0; i<friends.length; i++) {
    console.log(i);

    if (friends[i]=='David') {
        console.log('Found David!!');
        console.log('\n\n\n\n\n');
        break;
    }
}

let arr = [10, 11, 12];

arr.foo = 'bar';


for (let i in arr) {
    console.log(i); // logs '0', '1', '2', 'foo'
}

for (let i of arr) {
    console.log(i); // logs 10, 11, 12
    
}

console.log('\n\n\n\n\n');


let im;
let ji;

loop1:
    for (im = 0; im < 3; im++) {      //The first for statement is labeled "loop1"
        loop2:
            for (ji = 0; ji < 3; ji++) {   //The second for statement is labeled "loop2"
                if (im === 1 && ji === 1) {
                    continue loop1;
                }

                console.log('i = ' + im + ', j = ' + ji);
            }
    }

console.log('\n\n\n\n\n');

