import React from 'react';
import RItem from '../item/RItem';

import './Column.css';
/**
 * Column Component
 * Holds all items with matching date
 * 
 * @param {any} props 
 */
function Column(props) {
  const onDragEnd = (evt) => {
    evt.preventDefault();
    if (props.draggedItemId !== null) {
      props.onDrop();
      props.editItem({
        date: props.date,
        id: props.draggedItemId,
      });
    }
  };
  return (
  <div className="column" onDrop={(evt) => onDragEnd(evt)} onDragOver={(evt) => evt.preventDefault()}>
    <header className="column__header">
      {props.date.format("D MMM YYYY")}
    </header>
    {props.items.map(item => (
      <RItem item={item} key={item.id}/>
    ))}
    <hr/>
    <button className="column__add-item button" onClick={() => props.addItem(props.date)}>
      add item
    </button>
  </div>);
}

export default Column;
