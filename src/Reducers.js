import { combineReducers } from 'redux';
import items from './ItemsReducer.js';
import drag from './DragReducer.js';

const reducers = combineReducers({
  items,
  drag,
})

export default reducers;