'use strict';

 const Entity = function(obj) {
        this.id = obj.id;
        this.firstName = obj.firstName;
        this.surName = obj.surName;
        this.lastName = obj.lastName;
        this.sex = obj.sex;
    };


 const talk = {
        sayAge() {
            if (typeof  this.age === 'undefined') {
                console.log(`hm undefined? Lets fix it...`);
            }
            else  {
                console.log(`I'm ${this.age} years old, success!`);
            }
        },
        say() {
            console.log("");
        }
};

 const age = {
        fixAge(age) {
                if (typeof  age === 'undefined')
                    console.log(`hm undefined? Lets fix it...`);
            else{
                    this.age = age;
                    console.log(`now I'm ${age} years old, let's check it...`);
                }
        }
};

 export {Entity, talk, age};
