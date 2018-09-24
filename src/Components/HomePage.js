import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import PlayersList from './PlayersList';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfPlayers: 0,
      playerNamesArray: [],
      playerNames: "",
      numberOfPlayersValid: false,
      error: "",
    };
    this.handleChangePlayers = this.handleChangePlayers.bind(this);
    this.numberOfPlayersSubmit = this.numberOfPlayersSubmit.bind(this);
    this.handleChangeNames = this.handleChangeNames.bind(this);
    this.playerNamesSubmit = this.playerNamesSubmit.bind(this);
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

  playerNamesSubmit(e){
    e.preventDefault();
    let { playerNames, playerNamesArray } = this.state;
    this.setState({
        playerNamesArray: [...playerNamesArray, playerNames],
        playerNames: ""
    })
  }

  handleChangePlayers(e) {
    this.setState({ numberOfPlayers: e.target.value });
  }

  handleChangeNames(e) {
    this.setState({ playerNames: e.target.value });
  }

  render() {
    const { playerNames, numberOfPlayersValid, error, playerNamesArray } = this.state;

    return (
      <section>
        <h1>How many players are playing in your tournament?</h1>
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
          />
        </form>
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
                value="Add player names!"
                placeholder="Enter your name"
              />
            </Fragment>
          ) : null}
        </div>
        <PlayersList playerNames={playerNamesArray}/>
      </section>
    );
  }
}

export default HomePage;
