import React, { Component } from 'react';

export class Counter1 extends Component {
  static defaultProps = {
    step: 1,
  };

  render() {
    const { step } = this.props;

    return (
      <div>
        <span>0</span>
        <button
          type="button"
          onClick={evt => {
            console.log('Increment button was clicked!', evt); // работает
            console.log('this.props: ', this.props); // работает
          }}
        >
          > Increment by {step}
        </button>
        <button
          type="button"
          onClick={evt => {
            console.log('Decrement button was clicked!', evt); // работает
            console.log('this.props: ', this.props); // работает
          }}
        >
          Decrement by {step}
        </button>
      </div>
    );
  }
}
