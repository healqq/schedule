export const actions = {
    EDIT_ITEM: 'EDIT_ITEM',
    ADD_ITEM: 'ADD_ITEM',
    DELETE_ITEM: 'DELETE_ITEM',
};

export const addItem = date => ({
  type: actions.ADD_ITEM,
  date,
});

export const editItem = item => ({
  type: actions.EDIT_ITEM,
  item,
});

export const deleteItem = id => ({
  type: actions.DELETE_ITEM,
  id,
});