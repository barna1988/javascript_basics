/* Write a Program to convert an array of objects to an object
	based on a given key */

const convert = (peopleArray, keyField) => {
	let result = {};
	if(Array.isArray(peopleArray) && keyField){
	for (let i=0; i<peopleArray.length; i += 1) {
		result[peopleArray[i][keyField]] = peopleArray[i];
		}
	}else{
		result = null;
	}
	return result;
};
/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/

module.exports = convert;

convert([{id: 1, value: 'Barna', order: '1st'}, {id: 2, value: 'Goswami', order: '2nd'}], 'order');