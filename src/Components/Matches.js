import React, { Fragment, Component } from "react";
import Button from "./Button";
import Rounds from "./Rounds";

const winnerStyling = {
  backgroundColor: "green"
};

class Matches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfRounds: "",
      winners: [],
      roundFinished: false
    };
    this.onClickWinnerP1 = this.onClickWinnerP1.bind(this);
    this.onClickWinnerP2 = this.onClickWinnerP2.bind(this);
    this.numberOfRounds = this.numberOfRounds.bind(this);
  }

  numberOfRounds() { // function to calculate how many rounds there will be in tourney, based of number of players.
    const { numberOfPlayers } = this.props;
    const numOfRounds = Math.ceil(Math.log(numberOfPlayers) / Math.log(2));
    return (
      <h4 className="h5-styling">
        Your tournament will have {numOfRounds} rounds, enjoy!
      </h4>
    );
  }

  onClickWinnerP1(player1) {
    const { winners } = this.state;
    const { pairs } = this.props;
    let player1String = player1.toString(); //creates string player1 that has been passed into click handler.
    const isWinner = winners.find(o => o.player === player1String); 
    // sets variable isWinner equal to player if player is found in state.winners. 
    this.setState(prevState => ({
      winners:
        isWinner == null
          ? [...prevState.winners, { player: player1String, winner: true }] // if player in state, dont add again.
          : [...prevState.winners], 
      roundFinished: winners.length >= pairs.length - 1 ? true : false // if there are as many winners as pairs,
      // game must be finished. If so set state.roundFinished to true.
    }));
  }

  onClickWinnerP2(player2) { // same logic as above player1 click handler, but for player2.
    const { winners } = this.state;
    const { pairs } = this.props;
    let player2String = player2.toString();
    const isWinner = winners.find(o => o.player === player2String);
    this.setState(prevState => ({
      winners:
        isWinner == null
          ? [...prevState.winners, { player: player2String, winner: true }]
          : [...prevState.winners],
      roundFinished: winners.length >= pairs.length - 1 ? true : false
    }));
  }

  render() {
    const { pairs } = this.props;
    const { winners, roundFinished } = this.state;
    
    return (
      <Fragment>
        <Button
          onClick={this.props.onClick}
          className={"btn btn-success"}
          buttonText={"Create Random Matches 🏓"}
        />
        {this.numberOfRounds()} 
        {/*  ^^^ call function to display how many rounds to expect to user  */}
        {pairs.map((pair, i) => { // map over pairs and split in 2, to create player1 & player2. 
          let player1 = [...pair];
          let player2 = player1.splice(0, Math.ceil(player1.length / 2));
          let isWinner1 = winners.find(o => o.player == player1); // searches state.winners to see if already winner
          let isWinner2 = winners.find(o => o.player == player2);

          return (
            <div key={i} className="fixture-div">
              <ul className="list-unstyled fixture-list">
                <li
                  style={isWinner1 == null ? null : winnerStyling} // is winner? set winner styling / null
                  onClick={() => this.onClickWinnerP1(player1)} // sending player1 into clickhandler above
                  className={isWinner2 != null ? "li-disabled fixture loser-styling" : "hvr-grow fixture"} 
                >
                  {player1}
                </li>
                <span>vs</span>
                <li
                  style={isWinner2 == null ? null : winnerStyling} // is winner? set winner styling / null
                  onClick={() => this.onClickWinnerP2(player2)} // sending player1 into clickhandler above
                  className={isWinner1 != null ? "li-disabled fixture loser-styling" : "hvr-grow fixture"} 
                >
                  {player2}
                </li>
              </ul>
            </div>
          );
        })}
        {roundFinished ? <Rounds players={winners} /> : null} 
        {/* only display next round once this round is finished */}
      </Fragment>
    );
  }
}

export default Matches;
