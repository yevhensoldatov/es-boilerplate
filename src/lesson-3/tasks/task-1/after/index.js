'use strict';

const func = (num = 10, time = 1000, callback) =>{
    if (typeof callback !== 'undefined') {
        for (let i = 0; i < num;i++) {
            setTimeout(() => console.log(callback(i)), i*time)
        }
    } else {
        throw new Error("You must use new with Entity.");
    }
};

export default func;
