import React, { Component } from 'react';

export class CounterWithMethod extends Component {
  static defaultProps = {
    step: 1,
  };

  state = { value: 0 };

  handleIncrement = () => {
    this.setState((state, props) => ({
      value: state.value + props.step,
    }));
  };

  handleDecrement = () => {
    this.setState((state, props) => ({
      value: state.value - props.step,
    }));
  };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //     this.handleDecrement = this.handleDecrement.bind(this);
  //   }

  //   handleIncrement(evt) {
  //     console.log('Increment button was clicked!', evt); // работает
  //     console.log('this.props: ', this.props); // Error: cannot read props of undefined
  //   }

  //   handleDecrement(evt) {
  //     console.log('Decrement button was clicked!', evt); // работает
  //     console.log('this.props: ', this.props); // Error: cannot read props of undefined
  //   }

  //   handleIncrement = evt => {
  //     console.log('Increment button was clicked!', evt); // работает
  //     console.log('this.props: ', this.props); // работает
  //   };

  //   handleDecrement = evt => {
  //     console.log('Decrement button was clicked!', evt); // работает
  //     console.log('this.props: ', this.props); // работает
  //   };

  render() {
    const { step } = this.props;
    const { value } = this.state;
    // console.log('this.propsdd: ', this.props);

    return (
      <div>
        <span>{value}</span>
        <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}
