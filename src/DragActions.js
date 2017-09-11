export const actions = {
    DRAG_START: 'DRAG_START',
    DRAG_END: 'DRAG_END',
};

export const dragStart = id => ({
  type: actions.DRAG_START,
  id,
});

export const dragEnd = () => ({
  type: actions.DRAG_END,
});