import React, { Fragment, Component } from 'react';

class ScoreCounter extends Component {
    constructor(props) {
    super(props);
    this.state = {
        player1: 0,
        player2: 0,
        serving: true
    };
    this.onClickPlayer1Point = this.onClickPlayer1Point.bind(this);
    this.onClickPlayer2Point = this.onClickPlayer2Point.bind(this)
    this.onClickResetScore = this.onClickResetScore.bind(this)
};

onClickPlayer1Point() {
    let player1Score = this.state.player1 + 1;
    let servePlayer1 = this.state.serving;
    const {player2, serving} = this.state;
    if(player1Score >= 20 && player2 >= 20 && (player1Score + player2) % 2 === 0) {
        servePlayer1 = !serving
    } else if ((player1Score + player2) % 5 === 0) {
        servePlayer1 = !serving
    }
    this.setState({
        player1: player1Score,
        serving: servePlayer1
    })
};

onClickPlayer2Point() {
    let player2Score = this.state.player2 + 1;
    let servePlayer2 = this.state.serving;
    const { player1, serving} = this.state;
    if(player1 >= 20 && player2Score >= 20 && (player1 + player2Score) % 2 === 0) {
        servePlayer2 = !serving
    } else if ((player1 + player2Score) % 5 === 0) {
        servePlayer2 = !serving
    }
    this.setState({
        player2: player2Score,
        serving: servePlayer2 
    })
};

onClickResetScore() {
    this.setState({
        player1: 0,
        player2: 0
    })
}

  render() {
    const { player1, player2, serving} = this.state;
    const winner = player1 >= 21 && player1 >= player2 + 2 ? '1' : '' || player2 >= 21 && player2 >= player1 + 2 ? '2' : '';

  return (
  <Fragment>
      {/* <header className="page-header">
          <h4>Keep track of your scores: </h4>
      </header> */}

      {/* scores */}
      <div>
          <div className="score-counter-players">
              {serving ? <h4 className="player-p">Player 1 <span className="player-serving">Serving</span></h4> : <h4 className="player-p">Player 1</h4> }
              <h4>{player1}</h4>
          </div>
          <button onClick={this.onClickPlayer1Point} className="btn btn-primary">+</button>


        <div className="score-counter-players">
              {serving ? <h4 className="player-p">Player 2</h4> : <h4 className="player-p">Player 2 <span className="player-serving">Serving</span></h4> }
              <h4>{player2}</h4>
        </div>
        <button onClick={this.onClickPlayer2Point} className="btn btn-primary">+</button>
      </div>

      { /* winner message */}
      {winner === '' ? null : <h3 className="winner">  Player {winner} wins!</h3>}
      { /* reset button */}
      <button className="reset-button btn btn-success"onClick={this.onClickResetScore}>Reset</button>
  </Fragment>
  )
}
};

export default ScoreCounter;
