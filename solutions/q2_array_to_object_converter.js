/* Write a Program to convert an array of objects to an object
	based on a given key */


const convert = (peopleArray, keyField) => {
	// Write your code here
	if(Array.isArray(peopleArray)){
		const peopleObject = peopleArray.reduce((ac, p) => 
		({...ac, [p[keyField]]: p }), {} )
		console.log(peopleObject);
		return peopleObject;
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