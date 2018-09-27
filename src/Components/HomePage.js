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
    if (numberOfPlayers == 0) {
      error = "You cannot play with no players!";
      this.setState({
        error: error
      })
    } else if (numberOfPlayers % 4 !== 0 || numberOfPlayers > 16) {
        error = "You need to have 4, 8 or 16 Players!";
        this.setState({
          error: error
        })
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
    const playerNamesArray = [...this.state.playerNamesArray];
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
      <Fragment>
      <h3>How many players are playing in your tournament?</h3>
        <form>
          <input
            type="number"
            pattern="[0-9]*"
            onChange={e => this.handleChangePlayers(e)}
            placeholder='0'
          />
          <input
            onClick={e => this.numberOfPlayersSubmit(e)}
            type="submit"
            value="Create Your Tournament!"
            disabled={numberOfPlayersValid ? "disabled" : null}
            className="btn-success btn submit-button"
          />
        </form>
        <h5 className="h5-styling">Players required: 4, 8 or 16</h5>
        <div>{numberOfPlayersValid ? null : <h1>{error}</h1>}</div>
        <div>
          {numberOfPlayersValid ? (
            <Fragment>
              <input
                type="text"
                onChange={e => this.handleChangeNames(e)}
                value={playerNames}
                placeholder='Enter name here....'
              />
              <input
                onClick={e => this.playerNamesSubmit(e)}
                type="submit"
                value="+"
                disabled={playerNames === "" ? "disabled" : null}
                className="btn-success btn submit-button"
              />
            </Fragment>
          ) : null}
        </div>
        {playerNamesArray.length > 0 ? (
          <Fragment>
            <div>
            <PlayersList
              playerNames={playerNamesArray}
              onClickDelete={this.onClickRemovePlayer}
            />
            </div>
          </Fragment>
        ) : null}
        {playerNamesArray.length >= numberOfPlayers ? (
          <FixturesList numberOfPlayers={numberOfPlayers} playerNames={playerNamesArray} />
        ) : null}
      </Fragment>
    );
  }
}

export default HomePage;
