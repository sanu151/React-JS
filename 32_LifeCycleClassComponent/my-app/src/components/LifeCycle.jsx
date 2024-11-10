import { Component } from "react";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    console.log("Consturctor Called");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate Called");
    return true;
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    console.log("Render Called");
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}
