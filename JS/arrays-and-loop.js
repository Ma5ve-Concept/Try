const myArray = [10,20,40];
console.log(myArray);

console.log(myArray[2]);
myArray[0] = 98;
console.log(myArray);

newArray = [1,'hello', true, {name: 'socks'},[1,2]];

console.log(newArray);
console.log(newArray.length);

myArray.push(100); // .push adds a number to the end of an array.

myArray.splice(0,2); // .splice removes value from an array. the first number inside the bracket is the index or position of the value we want to remove and the second number inside the bracket is the number of values we want to remove i.e how many values we want to remove.
console.log(myArray);

