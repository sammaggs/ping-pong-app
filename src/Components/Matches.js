import React, { Fragment, Component } from "react";
import Button from "./Button";

class Matches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      numOfRounds: "",
      numberOfPlayers: this.props.numberOfPlayers
    }
    this.renderFirstRound = this.renderFirstRound.bind(this);
  }

  renderFirstRound() {
    const { pairs } = this.props;
    return pairs.map((pair, i) => {
      let player1 = [...pair];
      let player2 = player1.splice(0, Math.ceil(player1.length / 2));
      return (
        <ul className="list-unstyled fixture-list">
          <li className="hvr-grow fixture" key={i}>{player1}</li>
          <span>vs</span>
          <li className="hvr-grow fixture" key={i}>{player2}</li>
        </ul>
      )
    });
  }

  render() {
    return (
      <Fragment>
        <Button
          onClick={this.props.onClick}
          className={"btn btn-success"}
          buttonText={"Create Random Matches 🏓"}
        />
      { this.renderFirstRound() }
      
      </Fragment>
    );
  }
}

export default Matches;
