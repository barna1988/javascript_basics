/* Write a Program to Flatten a given n-dimensional array */

const flatten = (myArray) => {
	// Write your code here
	let elements = null;
	if(Array.isArray(myArray)){
		let myStr = myArray.toString('');
		elements = JSON.parse('['+myStr+']');
	}
	return elements;
};

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;

flatten([1, [2, 3], [[4, 5], [6, 7]], [[[8, 9], 10]]]);