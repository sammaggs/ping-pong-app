import React, { Fragment, Component } from "react";
import ScoreCounter from './ScoreCounter';

const winnerStyling = {
  backgroundColor: "rgb(191,155,48)"
};

class NextRounds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winners: [],
      roundFinished: false,
      matches: [],
    };  
    this.onClickWinnerP1 = this.onClickWinnerP1.bind(this);
    this.onClickWinnerP2 = this.onClickWinnerP2.bind(this);
  }

  onClickWinnerP1(player1) { // same logic as previous round.
    const { winners, matches } = this.state;
    const isWinner = winners.find(o => o.player === player1.player);
    this.setState(prevState => ({
      winners:
        isWinner == null
          ? [...prevState.winners, { player: player1.player, winner: true }]
          : [...prevState.winners],
      roundFinished: winners.length >= matches.length - 1 ? true : false,
    }));
  }

  onClickWinnerP2(player2) { // same logic as previous round, however no need to convert to string now.
    const { winners, matches } = this.state;
    const isWinner = winners.find(o => o.player === player2.player);
    this.setState(prevState => ({
      winners:
        isWinner == null
          ? [...prevState.winners, { player: player2.player, winner: true }]
          : [...prevState.winners],
      roundFinished: winners.length >= matches.length - 1 ? true : false,
    }));
  }

  componentDidMount() { // <NextRounds> has loaded? Then call fixture shuffling function below.
    this.onLoadMakeFixtures()
  }

  onLoadMakeFixtures() { // takes in players and shuffles, then splits into pairs for the matches. 
    const { players } = this.props;
    const shuffledWinners = [...players];
    shuffledWinners.sort(() => 0.5 - Math.random());
    const matches = [];
    while (shuffledWinners.length >= 2) {
      const pair = [shuffledWinners.pop(), shuffledWinners.pop()];
      matches.push(pair);
    }
    this.setState({
      matches: matches
    });
  }

  render() {
    const { matches, winners, roundFinished } = this.state;
    const { roundNumber } = this.props;

    return (
      <Fragment>
        <div className="animated zoomIn">
        {matches.length == 1 ? <h1>Final Round</h1> : <h1>Round { roundNumber } </h1>}
        {winners.length === 1 && matches.length == 1 ? <h2 className="animated pulse infinite">
        <span aria-labelledby="ping pong emoji" role="img">🏓 </span>  {winners[0].player} Wins the Tourney!   <span aria-labelledby="ping pong emoji" role="img">🏓 </span></h2> : null}
        {matches.length > 0
          ? matches.map((match, i) => { 
              let player1 = match[0];
              let player2 = match[1];
              let player1String = match[0].player.toString();
              let player2String = match[1].player.toString();
              let isWinner1 = winners.find(o => o.player == player1String); 
              let isWinner2 = winners.find(o => o.player == player2String);
              return (
                <div key={i} className="fixture-div">
                  <ul className="list-unstyled fixture-list">
                    <li style={isWinner1 == null ? null : winnerStyling}
                        onClick={() => this.onClickWinnerP1(player1)}
                        className={isWinner2 != null || isWinner1 != null ? "fixture-disabled fixture loser-styling" : "hvr-grow fixture"}>
                        {match[0].player}
                    </li>
                    <span>vs</span>
                    <li style={isWinner2 == null ? null : winnerStyling}
                        onClick={() => this.onClickWinnerP2(player2)}
                        className={isWinner1 != null || isWinner2 != null ? "fixture-disabled fixture loser-styling" : "hvr-grow fixture"}>
                      {match[1].player}
                    </li>
                  </ul>
                </div>
              );
            })
          : null}
      {roundFinished && matches.length > 1 ? <NextRounds roundNumber={roundNumber + 1} players={winners} /> : null}
      {matches.length === 0 || roundFinished ? null : <ScoreCounter/>} 
      {/*  ^^ show score counter each time there is a new round */}
      </div>
      </Fragment>
    );
  }
}

export default NextRounds;
