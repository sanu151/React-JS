import { Component, createRef } from "react";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.userNameRef = createRef();
    this.passwordRef = createRef();
    this.state = {};
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.userNameRef.current.value);
    console.log(this.passwordRef.current.value);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="userName">User Name : </label>
            <input type="text" id="userName" ref={this.userNameRef} />
          </div>
          <div>
            <label htmlFor="password">Password : </label>
            <input type="password" id="password" ref={this.passwordRef} />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}
