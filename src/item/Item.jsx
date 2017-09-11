import React, { Component } from 'react';
import moment from 'moment';

import './Item.css';

/**
 * Item Component
 * Contains item info and edit form
 * 
 * @param {any} props 
 */
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {...props.item};

  }

  onTimeChange(target) {
    const time = moment();
    const values = target.value.split(':');
    time.hours(values[0]);
    time.minutes(values[1]);
    var newState = {
      [target.name]: time
    };
    this.setState(newState);
  }

  onDateChange(target) {
    const date = moment().startOf('day');
    const values = target.value.split('-');
    date.year(values[0]);
    // 0 - 11
    date.month(values[1] - 1);
    date.date(values[2]);

    var newState = {
      [target.name]: date
    };
    this.setState(newState);
  }
  getDate(value) {
    return value.format('YYYY-MM-DD'); 
  }

  getTime(value) {
    return value.format('HH:mm');
  }

  setEditState() {
    this.setState({
      isEdit: !this.state.isEdit
    });
  }

  onDragStart() {
    this.props.onDragStart(this.state.id);
  }

  onSave(event) {
    event.preventDefault();
    this.props.save({...this.state, isEdit: false});
    this.setState({
      isEdit: false,
    });
  }
  render() {
    return (
        <div className="item" onDragStart={(evt) => this.onDragStart(evt)} onDragEnd={() => this.props.onDragEnd()} draggable="true">
            <header className="item__header">
              Item
            </header>
            <div className={`item__contents ${this.state.isEdit ? "hidden" : ""}`}>
                <div>
                  id: {this.state.id}
                </div>
                <div>
                  date: {this.state.date.format("DD MMM YYYY")}
                </div>
                <div>
                  start: {this.state.startTime.format('HH:mm')}
                </div>
                <div>
                  finish: {this.state.finishTime.format('HH:mm')}
                </div>
              <button onClick={() => this.setEditState()} className="button">
                edit
              </button> 
            </div>
            <div className={`item__edit ${this.state.isEdit ? "" : "hidden"}`}>
              <form className="item__form" noValidate onSubmit={(evt) => this.onSave(evt)}>
                <div className="item__form-input">
                  <label htmlFor="startTime">
                      Start:
                  </label>
                  <input type="time" name="startTime" value={this.getTime(this.state.startTime)}
                    onChange={(evt) =>  this.onTimeChange(evt.target)}/>
                </div>
                <div className="item__form-input">
                  <label htmlFor="finishTime">
                      Finish:
                  </label>
                  <input type="time" name="finishTime" value={this.getTime(this.state.finishTime)}
                  onChange={(evt) =>  this.onTimeChange(evt.target)}/>
                </div>
                <div className="item__form-input">
                  <label htmlFor="date">
                      date:
                  </label>
                  <input type="date" name="date" value={this.getDate(this.state.date)}
                    onChange={(evt) => this.onDateChange(evt.target)}/>
                  <input type="submit" value="save" className="button"/>
                </div>
              </form>
            </div>
            <button onClick={() => this.props.delete(this.state.id)} className="button item__delete">
              delete
            </button> 
        </div>
    );
  }
}

export default Item;
