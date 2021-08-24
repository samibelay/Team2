// variable and checking if it was a type of Number//
let myNumber = 15;
console.log(typeof myNumber);
//checking the variable in if/else-if/else conditions//
if(myNumber === isNaN()){
console.log('This is not a number');
}
else if(myNumber % 3 == 0 && myNumber % 5 == 0) {
  console.log('GenBuzz');
}
else if(myNumber % 3 === 0) {
  console.log('Gen');

}

else if(myNumber % 5 === 0) {
  console.log('Buzz');

}

else{
  console.log('myNumber');
}

//E commerce shooping list //


let storeItem = 'Hat'
switch(storeItem) {
  case 'Shoes':
    console.log('Shoes are $50');
    break;
  case 'Jeans':
    console.log('Jeans are $25');
     break;
  case 'Hat': 
      console.log('Hats are $12');
      break;
  case 'socks':
    console.log('socks are $2');
    break;
    default:
      console.log('Invalid item');
      break;
}
// between 100 and 50 the range is 50(100-50 = 50) we add 1 //
//random whole number bn 50 and 100//
randomNumber = Math.floor(Math.random() * 51) + 50;
console.log(randomNumber);
	  




