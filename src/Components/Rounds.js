import React, { Fragment, Component } from "react";
// import Button from "./Button";
// import { onLoadMakeFixtures } from '../Utility/Helper';

class Rounds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winners: [],
      roundFinished: false,
      matches: []
    };
    this.onClickWinnerP1 = this.onClickWinnerP1.bind(this);
    this.onClickWinnerP2 = this.onClickWinnerP2.bind(this);
  }

  onClickWinnerP1(player1) {
    const { winners, matches } = this.state;
    const isWinner = winners.find(o => o.player === player1.player);
    this.setState(prevState => ({
      winners:
        isWinner == null
          ? [...prevState.winners, { player: player1.player, winner: true }]
          : [...prevState.winners],
      roundFinished: winners.length >= matches.length - 1 ? true : false
    }));
  }

  onClickWinnerP2(player2) {
    const { winners, matches } = this.state;
    const isWinner = winners.find(o => o.player === player2.player);
    this.setState(prevState => ({
      winners:
        isWinner == null
          ? [...prevState.winners, { player: player2.player, winner: true }]
          : [...prevState.winners],
      roundFinished: winners.length >= matches.length - 1 ? true : false
    }));
  }

  componentDidMount() {
    this.onLoadMakeFixtures()
  }

  onLoadMakeFixtures() {
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
    const { matches } = this.state;
    return (
      <Fragment>
        <h1>Round 2</h1>
        {matches.length > 0
          ? matches.map((match, i) => {
              let player1 = match[0];
              let player2 = match[1];
              return (
                <div key={i} className="fixture-div">
                  <ul className="list-unstyled fixture-list">
                    <li onClick={() => this.onClickWinnerP1(player1)}
                        className="hvr-grow fixture">
                        {match[0].player}
                    </li>
                    <span>vs</span>
                    <li onClick={() => this.onClickWinnerP2(player2)}
                        className="hvr-grow fixture">
                      {match[1].player}
                    </li>
                  </ul>
                </div>
              );
            })
          : null}
      </Fragment>
    );
  }
}

export default Rounds;
