import { actions } from "./ItemActions";
import moment from 'moment';

/**
 * Updates element in collection by id
 * @param {Array} collection 
 * @param {Object} item
 * @param {Number} item.id
 * @returns {Array} 
 */
const updateById = (collection, item) =>
  collection.map((it) => {
    if (it.id === item.id) {
      return { ...it, ...item };
    }
    return it;
  });

const newItem = {
    startTime: moment(),
    finishTime: moment(),
    isEdit: true,
};
// autoincrement id on each add
let currentId = 0;


/**
 * Items actions reducer
 */
const items = (state = [], action) => {
    switch(action.type) {
        case actions.ADD_ITEM: {
            currentId++;
            return state.concat([{...newItem, id: currentId, date: action.date}]);
        }
        case actions.EDIT_ITEM: {
            return updateById(state, action.item);
        }
        case actions.DELETE_ITEM: {
            return state.filter(item => item.id !== action.id);
        }
    }
    return state;
};

export default items;