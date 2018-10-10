/* Write a Program to convert an array of objects to an object
	based on a given key */

const convert = (peopleArray, keyField) => {
	if(Array.isArray(peopleArray) && keyField){
	var result = {};
	for (var i=0; i<peopleArray.length; i++) {
		result[peopleArray[i][keyField]] = peopleArray[i];
	}
	return result;
	}else{
		return null;
	}
};
/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/

module.exports = convert;

convert([{id: 1, value: 'Barnasree', order: 'First Name'}, {id: 2, value: 'Goswami', order: 'Last Name'}], 'order');