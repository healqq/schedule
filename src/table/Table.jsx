import React, { Component } from 'react';
import moment from 'moment';
import RColumn from '../column/RColumn';

import './Table.css';

/**
 * Table Component
 * Contains current week columns
 * 
 */
class Table extends Component {
  constructor(props) {
    super(props);

    this.days = [];

    for (var i = 0; i < 7; i++) {
      const date = moment().startOf('week').add(i, 'days');
      this.days.push({
        value: date,
        key: date.unix()
      });
    }
  }
  render() {
    return (
    <div className="table">
      <header className="table__header">
        Schedule
      </header>
      <div className="table__contents">
        {this.days.map(day => (
          <RColumn key={day.key} date={day.value}/>
        ))}
      </div>
    </div>);
  }

}

export default Table;
