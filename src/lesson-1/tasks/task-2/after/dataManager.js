'use strict';

let entityArr = [];

export function addEntity(x) {
    entityArr.push(x);
}

export function getEntities(){
    return entityArr;
}

export function getCount(){
    return entityArr.length;
}

export function getEntityById(n){
    return entityArr[n];
}

export function getFirstEntity(){
    return entityArr[0]
}

export function getLastEntity(){
    return entityArr[entityArr.length -1];
}
