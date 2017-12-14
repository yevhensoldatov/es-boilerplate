'use strict';
import validator from "../helper";

const data = [];

const addEntity = (entity) => {
    validator(entity);
    data.push(entity)
};


const getEntities = () => data;

const getCount = () => data.length;

const  getEntityById = (id) => {
    if (typeof id !== 'number') {
        throw new Error ("id should be number")
    }
    const entity = data.filter(current => id ===current.id);

    return entity.length === 0 ? null : data[0];
};

const getFirstEntity = () => {
    const [firstEntity] = data;
    return firstEntity;
};

const getLastEntity = () => {
    return data.length ? data[data.length - 1] : null;
};

const getEntityTotalviews = (id, socialFilter, callback = total => total) => {
    const user = getEntityById(id);
    if(Array.isArray(socialFilter) && socialFilter.length === 0){
        throw Error("Array is empty")
    }
    const socials = user.social;
    if(typeof socialFilter === "undefined" || socialFilter === null){
        let total = socials.reduce((sum, {views: currViews} ) => sum + currViews, 0);
        return callback(total);
    }

    let total = 0;
    socialFilter.forEach(val =>{
        let res;
        if(typeof val === "number"){
            res = socials.filter(s => s.id === val);
        }else if(typeof val === "string"){
            res = socials.filter(s => s.title === val);
        }else {
            throw Error("Invalid array")
        }
        total += res
            .map(s => s.views)
            .reduce((prev, curr) => prev + curr);
    });

    return callback(total);


};

const getEntitiesSortedByPopularity = () => {
    const copiedArray = data.slice();
    if(copiedArray.length <= 1){
        return copiedArray;
    }

    const sortedPeople = copiedArray.sort((prev, next) => getEntityTotalviews(next.id) - getEntityTotalviews(prev.id));

    return sortedPeople;

};

export {addEntity, getEntities, getCount, getEntityById, getFirstEntity, getLastEntity, getEntityTotalviews, getEntitiesSortedByPopularity} ;
