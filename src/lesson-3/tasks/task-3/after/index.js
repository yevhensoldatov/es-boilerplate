'use strict';
const multiplier = 2;

 const sum = () => {
     var s = 0;

return function (num) {
    s+=num;
    console.log(s);
}
 };

 export default sum;
