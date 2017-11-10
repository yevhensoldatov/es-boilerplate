'use strict';

export default function func (num, time, callback) {
    for (var n = 0; n < num; ++n) {
        subFunc(n, callback, time);
    }
    function subFunc(n, callback, time) {
        setTimeout(function () {
            console.log(callback(n));
        },n*time);

    }
}

