// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here

let fruits = [{name: 'Apple', color: 'Red', pricePerKg: 'Rs. 210'}, 
                {name: 'Banana', color: 'Green', pricePerKg: 'Rs. 80'},
                {name: 'Orange', color: 'Orange', pricePerKg: 'Rs. 180'},
                {name: 'Pomelo', color: 'Light Green', pricePerKg: 'Rs. 90'},
                {name: 'Mango', color: 'Yellow', pricePerKg: 'Rs. 60'}];

const convert = (fruitArray, name) => {
    let finalResult;
    if(Array.isArray(fruitArray) && name){
        let result = {};
        for (let i=0; i<fruitArray.length; i += 1) {
            result[fruitArray[i].name] = fruitArray[i];
        }
        finalResult = result[name];
    }else{
        finalResult = null;
    }
    return finalResult;
};
                
const fastRetrieval = (fruitArray, name) => {
    let retObj = null;
    if(Array.isArray(fruitArray)){
        fruitArray.push({name: 'Watermelon', color: 'Striped Green', pricePerKg: 'Rs. 120'});
        fruitArray.pop();
        const fruitObject = convert(fruitArray, name);
        retObj = JSON.stringify(fruitObject);
    }else{
        retObj = null;
    }
    return retObj;
};

module.exports = fastRetrieval;

fastRetrieval(fruits, 'Mango');
