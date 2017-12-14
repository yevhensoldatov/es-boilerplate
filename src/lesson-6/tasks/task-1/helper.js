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
    if (!Array.isArray(social)) {
        throw new Error ("WTF!! Social should be an array");
    }


        social.forEach(item => {
            if(typeof item !== "object"){
                throw new Error("WTF!Social item is not object")
            }

            const {id: socialId, title, views} = item;

            if (typeof socialId !== 'number' ) {
                throw new Error ("WTF! Social id should be a number ");
            }
            if (typeof title !== 'string' || item.length === 0) {
                throw new Error ("WTF! Social title should be a not empty string");
            }
            if (typeof views !== 'number' ) {
                throw new Error ("WTF! Social views should be a number");
            }

            });




}
