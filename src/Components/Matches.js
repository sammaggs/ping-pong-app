import React, { Fragment, Component } from "react";
import Button from "./Button";

class Matches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      p1Clicked: false,
      p2Clicked: false,
      numOfRounds: "",
      winners: [],
      numberOfPlayers: this.props.numberOfPlayers
    }
    this.renderFirstRound = this.renderFirstRound.bind(this);
    this.onClickWinnerP1 = this.onClickWinnerP1.bind(this);
    this.onClickWinnerP2 = this.onClickWinnerP2.bind(this);

  }

  renderFirstRound() {
    const { pairs, numberOfPlayers } = this.props;
    const numOfRounds = Math.ceil((Math.log(numberOfPlayers)) / (Math.log(2)));
    this.setState = ({
      numOfRounds: numOfRounds
    })

    return pairs.map((pair, i) => {
      let player1 = [...pair];
      let player2 = player1.splice(0, Math.ceil(player1.length / 2));
      return (
        <div>
          <ul className="list-unstyled fixture-list">
            <li onClick={this.onClickWinnerP1} className="hvr-grow fixture" key={player1}>{player1}</li>
            <span>vs</span>
            <li onClick={this.onClickWinnerP2} className="hvr-grow fixture" key={player2}>{player2}</li>
          </ul>
        </div>
      )
    });
  }

  onClickWinnerP1() {
    console.log("Hello you have clicked on a p1 li");
    this.setState = ({
      p1Clicked: true
    })
  };

  onClickWinnerP2() {
    console.log("Hello you have clicked on a p2 li");
    this.setState = ({
      p2Clicked: true
    })
  };

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
