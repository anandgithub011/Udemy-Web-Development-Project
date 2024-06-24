var nameInp = prompt("What is your name ?");
var firstChar = nameInp.slice(0,1).toUpperCase();

var remainingChar = nameInp.slice(1,nameInp.length).toLocaleLowerCase();

alert("Your Welcome :" + firstChar+remainingChar);

