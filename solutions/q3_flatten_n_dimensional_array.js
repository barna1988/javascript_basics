/* Write a Program to Flatten a given n-dimensional array */

const flatten = (myArray) => {
	// Write your code here
	if(Array.isArray(myArray)){
		var myStr = myArray.toString('');
		var elements = JSON.parse('['+myStr+']');
		console.log(elements);
		return elements;
	}else{
		return null;
	}
};

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;

flatten([1, [2, 3], [[4, 5], [6, 7]], [[[8, 9], 10]]]);