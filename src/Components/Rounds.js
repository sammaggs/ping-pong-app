import React, { Fragment, Component } from "react";

class Rounds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winners: [],
      roundFinished: false,
    };
  }

  onClickWinnerP1(player1) {
    console.log(player1)
    // const { winners } = this.state;
    // const { players } = this.props;
    // let player1String = players.player.toString();
    // const isWinner = winners.find(o => o.player === player1String);
    //   this.setState(prevState => ({
    //     winners: isWinner == null ? [...prevState.winners, {player : player1String, winner : true}] : [...prevState.winners],
    //     roundFinished: winners.length >= players.length - 1 ? true : false
    //   }))      
      // let player1Styling = isWinner === null ? "" : winnerStyling;
  };

  onClickWinnerP2(player2) {
    console.log(player2)
    // const { winners } = this.state;
    // const { pairs } = this.props;
    // let player2String = player2.toString();
    // const isWinner = winners.find(o => o.player === player2String);
    // this.setState(prevState => ({
    //     winners: isWinner == null ? [...prevState.winners, {player : player2String, winner:true}] :
    //     [...prevState.winners],
    //     roundFinished: winners.length >= pairs.length - 1 ? true : false
    // }))
    // let player2Styling = isWinner === null ? "" : winnerStyling;
};

  render() {

    const shuffledWinners = [...this.props.players];
    shuffledWinners.sort(() => 0.5 - Math.random());
    const winnersMatchs = [];
    while (shuffledWinners.length >= 2) {
      const pair = [shuffledWinners.pop(), shuffledWinners.pop()];
      winnersMatchs.push(pair);
    }
    console.log(winnersMatchs)

    return (
      <Fragment>
      <h1>Round 2</h1>
      {winnersMatchs.map((match, i) => {
        let player1 = [...match];
        let player2 = player1.splice(0, Math.ceil(player1.length / 2));
        return (
          <div key={i} className="fixture-div">
            <ul className="list-unstyled fixture-list">
              <li
                // style={player1Styling}
                onClick={() => this.onClickWinnerP1(player1)}
                className="hvr-grow fixture">
                {match[0].player}
              </li>
              <span>vs</span>
              <li
                // style={player2Styling}
                onClick={() => this.onClickWinnerP2(player2)}
                className="hvr-grow fixture">
              {match[1].player}
            </li>
          </ul>
        </div>
        )
      })
    }
    </Fragment>
    );
  }
}

export default Rounds;