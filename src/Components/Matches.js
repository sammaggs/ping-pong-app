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
      roundFinished: false,
      }
    this.onClickWinnerP1 = this.onClickWinnerP1.bind(this);
    this.onClickWinnerP2 = this.onClickWinnerP2.bind(this);
    this.numberOfRounds = this.numberOfRounds.bind(this);
  }

  numberOfRounds() {
    const { numberOfPlayers } = this.props;
    const numOfRounds = Math.ceil((Math.log(numberOfPlayers)) / (Math.log(2)));
    return (
      <h4 className="h5-styling">
        Your tournament will have {numOfRounds} rounds, enjoy!
      </h4>
    )
  };

  onClickWinnerP1(player1) {
    const { winners } = this.state;
    const { pairs } = this.props;
    let player1String = player1.toString();
    const isWinner = winners.find(o => o.player === player1String);
      this.setState(prevState => ({
        winners: isWinner == null ? [...prevState.winners, {player : player1String, winner : true}] : [...prevState.winners],
        roundFinished: winners.length >= pairs.length - 1 ? true : false
      }))      
      // let player1Styling = isWinner === null ? "" : winnerStyling;
  };

  onClickWinnerP2(player2) {
    const { winners } = this.state;
    const { pairs } = this.props;
    let player2String = player2.toString();
    const isWinner = winners.find(o => o.player === player2String);
    this.setState(prevState => ({
        winners: isWinner == null ? [...prevState.winners, {player : player2String, winner:true}] :
        [...prevState.winners],
        roundFinished: winners.length >= pairs.length - 1 ? true : false
    }))
    // let player2Styling = isWinner === null ? "" : winnerStyling;
};

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
        {pairs.map((pair, i) => {
            let player1 = [...pair];
            let player2 = player1.splice(0, Math.ceil(player1.length / 2));
            return (
              <div key={i} className="fixture-div">
                <ul className="list-unstyled fixture-list">
                  <li
                    // style={player1Styling}
                    onClick={() => this.onClickWinnerP1(player1)}
                    className="hvr-grow fixture">
                    {player1}
                  </li>
                  <span>vs</span>
                  <li
                    // style={player2Styling}
                    onClick={() => this.onClickWinnerP2(player2)}
                    className="hvr-grow fixture">
                  {player2}
                </li>
              </ul>
            </div>
            )
          })
        }
      {roundFinished ? <Rounds 
                          onClickPlayer1={() => this.onClickWinnerP1()} 
                          onClickPlayer1={() => this.onClickWinnerP1()}
                          winners={winners}/> 
                      : null}
      </Fragment>
    );
  }
}

export default Matches;
