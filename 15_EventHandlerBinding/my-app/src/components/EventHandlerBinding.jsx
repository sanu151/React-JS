import { Component } from "react";

export default class EventHandlerBinding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  }

  handleIncrease() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  handleDecrease() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Count : {count}</h1>
        <button onClick={this.handleIncrease}>Increse</button>
        <button
          onClick={this.handleDecrease}
          disabled={count === 0 ? true : false}
        >
          Decrese
        </button>
      </div>
    );
  }
}
