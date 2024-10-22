import { Component } from "react";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";

export default class RenderPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: true,
    };
  }

  render() {
    const { isLogin } = this.state;
    return <div>{isLogin ? <HomePage /> : <LoginPage />}</div>;
  }
}
