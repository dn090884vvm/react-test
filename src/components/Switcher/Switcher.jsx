import React, { Component } from 'react';

export class Toggle extends Component {
  state = { isOpen: false };

  toggle = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };

  render() {
    const { isOpen } = this.state;
    // console.log(isOpen);
    const { children } = this.props;

    return (
      <div>
        <button onClick={this.toggle}>{isOpen ? 'Hide' : 'Show'}</button>
        {isOpen && children}
      </div>
    );
  }

  //   show = () => this.setState({ isOpen: true });

  //   hide = () => this.setState({ isOpen: false });

  //   render() {
  //     const { isOpen } = this.state;
  //     // console.log(this.state);
  //     // console.log(isOpen);
  //     const { children } = this.props;
  //     // console.log(this.props);

  //     return (
  //       <>
  //         <button onClick={this.show}>Show</button>
  //         <button onClick={this.hide}>Hide</button>

  //         {isOpen && children}
  //       </>
  //     );
  //   }
}
