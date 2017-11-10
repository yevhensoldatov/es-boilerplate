'use strict';

export default class Entity {
    entity;
    constructor(someFields) {
        this.entity = someFields
    }
    getEntity(){
        console.log(this.entity);
        return this.entity
    }
}

