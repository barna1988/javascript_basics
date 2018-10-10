// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here

var fruits = [{name: 'Apple', color: 'Red', pricePerKg: 'Rs. 210'}, 
                {name: 'Banana', color: 'Green', pricePerKg: 'Rs. 80'},
                {name: 'Orange', color: 'Orange', pricePerKg: 'Rs. 180'},
                {name: 'Pomelo', color: 'Light Green', pricePerKg: 'Rs. 90'},
                {name: 'Mango', color: 'Yellow', pricePerKg: 'Rs. 60'}];

const fastRetrieval = (fruitArray, name) => {
    if(Array.isArray(fruitArray)){
        fruitArray.push({name: 'Watermelon', color: 'Striped Green', pricePerKg: 'Rs. 120'});
        fruitArray.pop();
        const fruitObject = convert(fruitArray, name);
        return JSON.stringify(fruitObject);
    }else{
        return null;
    }
};

const convert = (fruitArray, name) => {
	if(Array.isArray(fruitArray) && name){
        var result = {};
        for (var i=0; i<fruitArray.length; i += 1) {
            result[fruitArray[i].name] = fruitArray[i];
        }
        return result[name];
	}else{
		return null;
	}
};

module.exports = fastRetrieval;

fastRetrieval(fruits, 'Mango');
