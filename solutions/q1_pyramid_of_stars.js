/* Write a program to build a `Pyramid of stars` of given height */

function printStars(i, str){
    let k;
    for (k = 0; k < 2 * i + 1; k += 1) {
        if (k === 0 || k % 2 === 0) {
        str = str + "*";
        } else {
        str = str + " ";
        }
    }

    return str;
}

const buildPyramid = (depth) => {
    // Write your code here
   
    var finalStr = "";
    if(!isNaN(depth)){
        let i; let j;
        
        for (i = 0; i < depth; i += 1) {
        
            // space
            let str = " ";
            for (j = 0; j < depth - i - 1; j += 1) {     
                str = str + " ";
            }
        
            // *
            str = printStars(i, str);
            str = str + "  ";
            finalStr = finalStr + str + '\n';
            
        }
    }
    return finalStr;
};

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

buildPyramid(6);

module.exports = buildPyramid;
