'use strict';

 const sum = () => {
     let s = 0;

return  (num) => {
    if (typeof num !== 'number') {
        throw new Error("Should be number!");
    }
    s+=num;
    console.log(s);
}
 };

 export default sum;
