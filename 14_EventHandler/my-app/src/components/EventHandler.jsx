import { Component } from "react";

export default class EventHandler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changeValue: "",
    };
  }

  handleChange = (e) => {
    this.setState(
      {
        changeValue: e.target.value,
      }, // To create a call back function for instat call this function.
      () => {
        console.log(this.state.changeValue);
      }
    );
  };

  render() {
    return (
      <div className="my-class">
        <input type="text" onChange={this.handleChange} />
        <div>
          <p>{this.state.changeValue}</p>
        </div>
      </div>
    );
  }
}
