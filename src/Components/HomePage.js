import React, { Fragment, Component } from "react";
import PlayersList from "./PlayersList";
import FixturesList from "./FixturesList";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfPlayers: 8,
      playerNames: ["Sam", "Ricky", "Dan", "Tim", "Ian", "Dave", "Paul", "Jordan"], // dummy data for testing.
      playerName: "",
      numberOfPlayersValid: false,
      error: ""
    };
    this.handleChangePlayers = this.handleChangePlayers.bind(this);
    this.numberOfPlayersSubmit = this.numberOfPlayersSubmit.bind(this);
    this.handleChangeNames = this.handleChangeNames.bind(this);
    this.playerNamesSubmit = this.playerNamesSubmit.bind(this);
    this.onClickRemovePlayer = this.onClickRemovePlayer.bind(this);
  }

  numberOfPlayersSubmit(e) { // function to validate if number of players is valid.
    e.preventDefault();
    let { numberOfPlayers, error } = this.state;
    if (numberOfPlayers == 0) {
      error = "You cannot play with no players!";
      this.setState({
        error: error
      })
    // } else if (numberOfPlayers % 4 !== 0 || numberOfPlayers > 16) {
    //     error = "You need to have 4, 8 or 16 Players!";
    //     this.setState({
    //       error: error
    //     })
    } else {
      this.setState({
        numberOfPlayersValid: true
      });
    }
  }

  playerNamesSubmit(e) {
    e.preventDefault();
    let { playerName, playerNames } = this.state;
    this.setState({
      playerNames: [...playerNames, playerName],
      playerName: ""
    });
  }

  onClickRemovePlayer(i) { // taking in index of player and removing it from the playerList. 
    const playerNames = [...this.state.playerNames];
    playerNames.splice(i, 1);
    this.setState({
      playerNames: playerNames
    });
  }

  handleChangePlayers(e) { // user inputs for the number of players.
    this.setState({ numberOfPlayers: e.target.value });
  }

  handleChangeNames(e) { // user inputs for the players names.
    this.setState({ playerName: e.target.value });
  }

  render() {
    const {
      playerName,
      numberOfPlayersValid,
      error,
      playerNames,
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
            // disabled submit button when the number of players is correct.
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
                value={playerName}
                placeholder='Enter name here....'
              />
              <input
                onClick={e => this.playerNamesSubmit(e)}
                type="submit"
                value="+"
                disabled={playerNames.length >= numberOfPlayers ? "disabled" : null} 
                // disables submit button once there are enough player names. 
                className="btn-success btn submit-button"
              />
            </Fragment>
          ) : null}
        </div>
        {playerNames.length > 0 ? ( // will only display playerList if there are playernames in the state. 
          <Fragment>
            <div>
            <PlayersList
              playerNames={playerNames}
              onClickDelete={this.onClickRemovePlayer}
            />
            </div>
          </Fragment>
        ) : null}
        {playerNames.length !== 0 && playerNames.length >= numberOfPlayers ? ( 
          // will only display the fixtures list if there are as many players names as the number user entered.
          <FixturesList numberOfPlayers={numberOfPlayers} playerNames={playerNames} />
        ) : null}
      </Fragment>
    );
  }
}

export default HomePage;
