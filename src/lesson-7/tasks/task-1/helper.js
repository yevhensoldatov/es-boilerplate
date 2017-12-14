'use strict';

export default ({id, firstName, lastName, age, sex, social}) => {
    if (typeof firstName !== 'string') {
        throw new Error ("WTF! It's not firstName");
    }
    if (typeof lastName !== 'string') {
        throw new Error ("WTF! It's not lastName");
    }
    if (typeof age !== 'number' || age < 0) {
        throw new Error ("WTF! It's not age");
    }
    if (typeof sex !== 'string' && (sex !== 'Male' || sex !== "Female")) {
        throw new Error ("WTF! It's not sex");
    }
    if (typeof id !== 'number') {
        throw new Error ("WTF! It's not id");
    }

}
