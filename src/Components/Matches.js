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
  };

  onClickWinnerP1() {
    this.setState = ({
      ...this.state.p1Clicked,
      p1Clicked: true
    });
    console.log("p1 clicked is", this.state.p1Clicked);
  };

  onClickWinnerP2() {
    this.setState = ({
      p2CLicked: !this.state.p2Clicked
      
    });
    console.log("p2 clicked is", this.state.p2Clicked);
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
