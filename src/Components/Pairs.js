import React, { Component } from "react";

class Pairs extends Component {
  constructor(props) {
    super(props);
    this.renderPairs = this.renderPairs.bind(this);
  }

  renderPairs() {
    // pass pairs as prop
    this.props.pairs.map(pair => {
      return <li key={pair.join("-")}>{pair.join(" vs ")}</li>;
    });
  }

  render() {
    return <ul>{this.renderPairs()}</ul>;
  }
}

export default Pairs;
