import React, { Component } from "react";

interface Myprops {
  cardTitle: string;
  cardDesc: string;
}
export default class Card extends Component {
  constructor(props: Myprops) {
    super(props);
  }
  render() {
    const { cardTitle, cardDesc } = this.props;
    return (
      <div>
        <h3>{cardTitle}</h3>
        <p>{cardDesc}</p>
      </div>
    );
  }
}
