import { actions } from "./DragActions";

/**
 * Drag actions reducer
 */
const drag = (state = {id: null}, action) => {
    switch(action.type) {
        case actions.DRAG_START: {
            return {id: action.id};
        }
        case actions.DRAG_END: {
            return {id: null};
        }
    }
    return state;
};

export default drag;