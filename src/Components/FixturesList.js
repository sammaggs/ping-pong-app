import React, { Component, Fragment } from "react";
import Matches from "./Matches";
import Button from './Button';

class FixturesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pairs: []
    };
    this.onClickMakeFixtures = this.onClickMakeFixtures.bind(this);
  }

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
  }


  render() {
    const { pairs }  = this.state;
    const { numberOfPlayers } = this.props;

    return (
      <Fragment>
        <section>
          <h1>Fixtures</h1>
        </section>
        {/* <Button className={"btn-success"} onClick={this.onClickMakeFixtures} buttonText="Create Tournament"/> */}
        <Matches numberOfPlayers={numberOfPlayers} onClick={this.onClickMakeFixtures} pairs={pairs} />
      </Fragment>
    );
  }
}

export default FixturesList;
