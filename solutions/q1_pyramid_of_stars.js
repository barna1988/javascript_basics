/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (depth) => {
    // Write your code here
    if(isNaN(depth)){
        console.log('');
        return '';
    }else{
        var i; var j; var k;
        var finalStr = "";
        for (i = 0; i < depth; i++) {
        
            // space
            str = " ";
            for (j = 0; j < depth - i - 1; j++) {     
                str = str + " ";
            }
        
            // *
            for (k = 0; k < 2 * i + 1; k++) {
                if (k == 0 || k % 2 == 0) {
                str = str + "*";
                } else {
                str = str + " ";
                }
            }
            str = str + "  ";
            finalStr = finalStr + str + '\n';
        }
        console.log(finalStr);
        return finalStr;
    }
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

buildPyramid(5);

module.exports = buildPyramid;
