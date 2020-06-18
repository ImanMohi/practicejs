var userChoice = prompt("Please enter your choice", "pizza");

switch (userChoice) {
    case 'pizza':
        console.log('$1.50');
        break;
    case 'spaghetti':
        console.log('$5.50');
        break;
    case 'lasagna':
        console.log('$8.50');
        break;
    case 'hamburger':
        console.log('$2.50');
        break;
    case 'cheeseburger':
        console.log('$3.00');
        break;
    case 'chicken tenders':
        console.log('$3.50');
        break;
    case 'taco':
        console.log('$2.00');
        break;
    case 'burrito':
        console.log('$4.00');
        break;
    default:
        console.log('Please select an option');

}