// Button получает функцию changeMessage (имя пропа),
// которая вызывается при событии onClick

import React, { Component } from 'react';

const Button = ({ changeMessage, label }) => (
  <button type="button" onClick={changeMessage}>
    {label}
  </button>
);

export class App1 extends Component {
  state = {
    message: new Date().toLocaleTimeString(),
  };

  // Метод который будем передавать в Button для вызова при клике
  updateMessage = evt => {
    console.log(evt); // Доступен объект события
    this.setState({
      message: new Date().toLocaleTimeString(),
    });
  };

  render() {
    return (
      <>
        <span>{this.state.message}</span>
        <Button label="Change message" changeMessage={this.updateMessage} />
      </>
    );
  }
}
