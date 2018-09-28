import React, { Fragment, Component } from "react";
import Button from "./Button";
// import TwoRounds from "./TwoRounds";

const playerStylingTrue = {
  backgroundColor: "#26C281"
};

class Matches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfRounds: "",
      player1Clicked: false,
      player2Clicked: false,
      winners: []
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
    let player1String = player1.toString();
      this.setState(prevState => ({
        player1Clicked: !this.state.player1Clicked,
        player2Clicked: this.state.player1Clicked,
        winners: [...prevState.winners, {player : player1String, winner : true}]
      }))
  };

  onClickWinnerP2(player2) {
    let player2String = player2.toString();
    this.setState(prevState => ({
        player2Clicked: !this.state.player2Clicked,
        player1Clicked: this.state.player2Clicked,
        winners: [...prevState.winners, {player : player2String, winner:true}]
    }))

};

  render() {
    const { pairs } = this.props;
    const { winners } = this.state;
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
                    style={ this.state.winners.includes(player1) ? playerStylingTrue : null}
                    onClick={() => this.onClickWinnerP1(player1)}
                    className="hvr-grow fixture">
                    {player1}
                  </li>
                  <span>vs</span>
                  <li
                    style={this.state.winners.includes(player2) ? playerStylingTrue : null}
                    onClick={() => this.onClickWinnerP2(player2)}
                    className="hvr-grow fixture">
                  {player2}
                </li>
              </ul>
            </div>
          )
        })
        }
        {/* <TwoRounds pairs={pairs}/> */}
      </Fragment>
    );
  }
}

export default Matches;
