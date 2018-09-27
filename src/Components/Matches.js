import React, { Fragment, Component } from "react";
import Button from "./Button";
import TwoRounds from "./TwoRounds";

const playerStylingTrue = {
  backgroundColor: "#C5B358"
};

class Matches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfRounds: "",
      numberOfPlayers: this.props.numberOfPlayers,
      player1Clicked: false,
      player2Clicked: false,
      winners: []
    }
    this.onClickWinnerP1 = this.onClickWinnerP1.bind(this);
    this.onClickWinnerP2 = this.onClickWinnerP2.bind(this);
  }

  numberOfRounds() {
    const { numberOfPlayers } = this.state;
    const numOfRounds = Math.ceil((Math.log(numberOfPlayers)) / (Math.log(2)));
    this.setState = ({
      numOfRounds: numOfRounds
    })
  };

  onClickWinnerP1(player1) {
    let { winners } = this.state;
      this.setState({
        player1Clicked: !this.state.player1Clicked,
        player2Clicked: this.state.player1Clicked,
        winners: [...winners, player1]
      })
  }

  onClickWinnerP2(player2) {
    let { winners } = this.state;
    
    this.setState({
        player2Clicked: !this.state.player2Clicked,
        player1Clicked: this.state.player2Clicked,
        winners: [...winners, player2],
    })
};

  render() {
    const { pairs } = this.props;
    return (
      <Fragment>
        <Button
          onClick={this.props.onClick}
          className={"btn btn-success"}
          buttonText={"Create Random Matches 🏓"}
        />
        {pairs.map((pair, i) => {
            let player1 = [...pair];
            let player2 = player1.splice(0, Math.ceil(player1.length / 2));

            return (
              <div key={i} className="fixture-div">
                <ul className="list-unstyled fixture-list">
                  <li
                    style={this.state.player1Clicked ? playerStylingTrue : null}
                    onClick={() => this.onClickWinnerP1(player1)}
                    className="hvr-grow fixture">
                    {player1}
                    {console.log(player1)}
                  </li>
                  <span>vs</span>
                  <li
                    style={this.state.player2Clicked ? playerStylingTrue : null}
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
