// Write Javascript to perform the following tasks. Please submit links to your assignment on repl.it. Here is the Javascript console we used in class: repl.it

// 1. Perform three basic math operations
console.log(5+5, 8*3, 6-4)
// 2. Create a variable called "myNum" and assign it a value of 3
let myNum= 3
// 3. Output/print/return the value of the "myNum" variable
console.log(myNum)
// 4. Assign "mynum" a value of 7
myNum=7;
// 5. Output/print/return the value of "myNum"
console.log(myNum)
// 6. Increase the value of "myNum" by 3
myNum= myNum + 3;
// 7. Output/print/return the value of "myNum"
console.log(myNum)
// 8. Create another variable called "myOtherNum" with value 5
let myOtherNum = 5;
console.log(myOtherNum)
// 9. Compare "myNum" and "myOtherNum". Are they equal? Your code should return 'true' or 'false'
function aretheyequal(myNum, myOtherNum) {
	if (myNum === myOtherNum) {
		return console.log('they are equal');
	}
	else {
		return console.log('false');
	}
};

aretheyequal(myNum,myOtherNum);


// 10. Increase the value of "myOtherNum" by 5
myOtherNum = myOtherNum + 5;
// 11. Compare "myNum" and "myOtherNum". Are they equal? Your code should return 'true' or 'false' 
Boolean(myNum === myOtherNum)
// 12. Create a third variable called "myString" with value "10" (note: "2" should be a string, NOT a number)
let myString = ("10")
console.log(myString)