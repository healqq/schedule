import { connect } from 'react-redux';
import Column from './Column';
import {addItem, editItem } from '../ItemActions';
import { dragEnd } from '../DragActions';

/* eslint no-console: 0 */
const mapStateToProps = (state, ownProps) => {
  const items = state.items.filter(function(item) {
    return item.date.isSame(ownProps.date)
  });
  return {
    items,
    date: ownProps.date,
    draggedItemId: state.drag.id,
  };
};

const mapDispatchToProps = dispatch => {
    return {
      addItem: (date) => dispatch(addItem(date)),
      editItem: (item) => dispatch(editItem(item)),
      onDrop: () => dispatch(dragEnd()),
    }
};
const RColumn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Column);

export default RColumn;