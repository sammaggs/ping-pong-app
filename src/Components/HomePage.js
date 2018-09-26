import React, { Fragment, Component } from "react";
import PlayersList from "./PlayersList";
import FixturesList from "./FixturesList";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfPlayers: 0,
      playerNamesArray: [],
      playerNames: "",
      numberOfPlayersValid: false,
      error: ""
    };
    this.handleChangePlayers = this.handleChangePlayers.bind(this);
    this.numberOfPlayersSubmit = this.numberOfPlayersSubmit.bind(this);
    this.handleChangeNames = this.handleChangeNames.bind(this);
    this.playerNamesSubmit = this.playerNamesSubmit.bind(this);
    this.onClickRemovePlayer = this.onClickRemovePlayer.bind(this);
  }

  numberOfPlayersSubmit(e) {
    e.preventDefault();
    let { numberOfPlayers, error } = this.state;

    if (numberOfPlayers === 0 || numberOfPlayers % 2 !== 0) {
      error = "Please enter a number that is a multiple of 2";
      this.setState({
        error: error
      });
    } else {
      this.setState({
        numberOfPlayersValid: true
      });
    }
  }

  playerNamesSubmit(e) {
    e.preventDefault();
    let { playerNames, playerNamesArray } = this.state;
    this.setState({
      playerNamesArray: [...playerNamesArray, playerNames],
      playerNames: ""
    });
  }

  onClickRemovePlayer(player) {
    let playerNamesArray = [...this.state.playerNamesArray];

    playerNamesArray.splice(playerNamesArray.indexOf(player), 1);

    this.setState({
      playerNamesArray: playerNamesArray
    });
  }

  handleChangePlayers(e) {
    this.setState({ numberOfPlayers: e.target.value });
  }

  handleChangeNames(e) {
    this.setState({ playerNames: e.target.value });
  }

  render() {
    const {
      playerNames,
      numberOfPlayersValid,
      error,
      playerNamesArray,
      numberOfPlayers
    } = this.state;

    return (
      <section>
        <h3>How many players are playing in your tournament?</h3>
        <form>
          <input
            type="number"
            pattern="[0-9]*"
            onChange={e => this.handleChangePlayers(e)}
          />
          <input
            onClick={e => this.numberOfPlayersSubmit(e)}
            type="submit"
            value="Create Your Tournament!"
            disabled={numberOfPlayersValid ? "true" : null}
            className="btn-success"
          />
        </form>
        <h4>Players: {numberOfPlayers}</h4>
        <div>{numberOfPlayersValid ? null : <h1>{error}</h1>}</div>
        <div>
          {numberOfPlayersValid ? (
            <Fragment>
              <input
                type="text"
                onChange={e => this.handleChangeNames(e)}
                value={playerNames}
              />
              <input
                onClick={e => this.playerNamesSubmit(e)}
                type="submit"
                value="Enter name"
                disabled={playerNames === "" ? "true" : null}
                className="btn-success"
              />
            </Fragment>
          ) : null}
        </div>
        {playerNamesArray.length >= 1 ? (
          <Fragment>
            <PlayersList
              playerNames={playerNamesArray}
              onClickDelete={this.onClickRemovePlayer}
            />
            {playerNamesArray.length >= numberOfPlayers ? (
              <FixturesList playerNames={playerNamesArray} />
            ) : null}
          </Fragment>
        ) : null}
      </section>
    );
  }
}

export default HomePage;
