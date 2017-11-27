'use strict';
import {validator} from "./helpers";

const DataManager = function () {


    let data = [];

     this.add = (entity) => {
        validator(entity);
        data.push(entity)
    };


     this.getEntities = () => data;

     this.getCount = () => data.length;

     this.getEntityById = (id) => {
        if (typeof id !== 'number') {
            throw new Error("id should be number")
        }
        const entity = data.filter(current => current.id === id);

        const result = entity.length ? entity : null;

        return result;

    };

     this.getFirstEntity = () => data[0];

     this.getLastEntity = () => data[data.length - 1];

     this.filter = (item) => data.filter(item);

}


export {DataManager} ;
