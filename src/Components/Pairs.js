import React, { Fragment, Component } from "react";
import Button from "./Button";

class Pairs extends Component {
  constructor(props) {
    super(props);
    this.renderPairs = this.renderPairs.bind(this);
  }

  renderPairs() {
    const { pairs } = this.props;
    return pairs.map((pair, i) => {
      return (
        <li key={i}>{pair.join(" vs ")}</li>
      )
    });
  }

  render() {
    return (
      <Fragment>
        <Button
          onClick={this.props.onClick}
          className={"btn btn-success"}
          buttonText={"Create Fixtures"}
        />
        <ul className="list-unstyled">
          { this.renderPairs() }
        </ul>
      </Fragment>
    );
  }
}

export default Pairs;
