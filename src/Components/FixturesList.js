import React, { Component, Fragment } from "react";
import Matches from "./Matches";

class FixturesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pairs: []
    };
    this.onClickMakeFixtures = this.onClickMakeFixtures.bind(this);
  };

  onClickMakeFixtures() { // function to shuffle the player names to create random fixtures for first round. 
    const shuffledPlayers = [...this.props.playerNames];
    shuffledPlayers.sort(() => 0.5 - Math.random());
    const pairs = [];
    while (shuffledPlayers.length >= 2) {
      const pair = [shuffledPlayers.pop(), shuffledPlayers.pop()];
      pairs.push(pair); // creates pairs from the shuffled players then puts pairs into state. 
    }
    this.setState({
        pairs : pairs
    })
  };

  render() {
    const { pairs }  = this.state;
    const { numberOfPlayers } = this.props;

    return (
      <Fragment>
          <h3>Fixtures</h3>
        <Matches numberOfPlayers={numberOfPlayers} onClick={this.onClickMakeFixtures} pairs={pairs} />
       {/* sending numberOfPlayers, fixture shuffling onClick and pairs(matches) */}
      </Fragment>
    );
  }
}

export default FixturesList;
