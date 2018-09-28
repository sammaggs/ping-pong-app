import React, { Fragment, Component } from "react";

class Rounds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winners: [],
      roundFinished: false,
    };
  }

  render() {
    const shuffledWinners = [...this.props.winners];
    shuffledWinners.sort(() => 0.5 - Math.random());
    const winnersMatchs = [];
    while (shuffledWinners.length >= 2) {
      const pair = [shuffledWinners.pop(), shuffledWinners.pop()];
      winnersMatchs.push(pair);
    }

    return (
      <Fragment>
      <h1>Round 2</h1>
      {winnersMatchs.map((pair, i) => {
        return (
          <div key={i} className="fixture-div">
            <ul className="list-unstyled fixture-list">
              <li
                // style={player1Styling}
                // onClick={() => this.onClickWinnerP1()}
                className="hvr-grow fixture">
                {pair[0].player}
              </li>
              <span>vs</span>
              <li
                // style={player2Styling}
                // onClick={() => this.onClickWinnerP2()}
                className="hvr-grow fixture">
              {pair[1].player}
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