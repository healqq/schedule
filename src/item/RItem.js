import { connect } from 'react-redux';
import Item from './Item';
import { editItem, deleteItem } from '../ItemActions';
import { dragStart, dragEnd } from '../DragActions';
/* eslint no-console: 0 */
const mapStateToProps = (state, ownProps) => {
  return ownProps;
};

const mapDispatchToProps = dispatch => ({
  save: (item) => dispatch((editItem(item))),
  delete: (id) => dispatch(deleteItem(id)),
  onDragStart: (id) => dispatch(dragStart(id)),
  onDragEnd: () => dispatch(dragEnd()),
});
const RItem = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Item);

export default RItem;