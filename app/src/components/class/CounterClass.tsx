import React, { Component } from "react";

type CounterClassProps = {
  message: string;
};

type CounterClassState = {
  count: number;
};

export default class CounterClass extends Component<
  CounterClassProps,
  CounterClassState
> {
  state = {
    count: 0,
  };

  handleCounter = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div className="mt-3 d-flex flex-column align-items-center">
        <p>{this.props.message}</p>
        <p>Count is: {this.state.count}.</p>
        <button onClick={this.handleCounter} className="btn btn-info">
          Increase counter
        </button>
      </div>
    );
  }
}
