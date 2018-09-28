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

  onClickMakeFixtures() {
    const shuffledPlayers = [...this.props.playerNames];
    shuffledPlayers.sort(() => 0.5 - Math.random());
    const pairs = [];
    while (shuffledPlayers.length >= 2) {
      const pair = [shuffledPlayers.pop(), shuffledPlayers.pop()];
      pairs.push(pair);
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
      </Fragment>
    );
  }
}

export default FixturesList;
