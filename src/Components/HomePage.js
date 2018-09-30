import React, { Fragment, Component } from "react";
import PlayersList from "./PlayersList";
import FixturesList from "./FixturesList";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfPlayers: 0,
      playerNames: [],
      // ["Jen", "Declan", "Andy", "Jordan", "Chris", "Sarah", "Sally", "Dave", "Ian", "Paul", "Jane", "Mo"],
       // ^^ dummy data for testing. Add to playerNames array to auto populate player for speedy testing.
       // Remember to update the number of players to either 4, 8 or 16. Depending on how many players you add.
      playerName: "",
      numberOfPlayersValid: false,
      error: "",
      duplicateName: false
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
    } else if (numberOfPlayers % 4 !== 0 || numberOfPlayers > 16) {
        error = "You need to have 4, 8 or 16 Players!";
        this.setState({
          error: error
        })
    } else {
      this.setState({
        numberOfPlayersValid: true,
      });
    }
  }

  playerNamesSubmit(e) { // validates players names, does not allow duplicates or an empty value. 
    e.preventDefault();
    let { playerName, playerNames } = this.state;
    let duplicatePlayers = playerNames.includes(playerName);
    let error = duplicatePlayers ? "You already have a player with that name, please include your surname" : null;
    this.setState({
      playerNames: duplicatePlayers || playerName == "" ? [...playerNames] : [...playerNames, playerName],
      playerName: "",
      error: error,
      duplicateName: duplicatePlayers ? true : false
    });
  }

  onClickRemovePlayer(i) { // taking in index of player and removing it from the playerList. 
    const playerNames = [...this.state.playerNames];
    playerNames.splice(i, 1);
    this.setState({
      playerNames: playerNames
    });
  }

  handleChangePlayers(e) {
    let numberOfPlayers = e.target.value; // user inputs for the number of players.
    this.setState({ 
      numberOfPlayers: numberOfPlayers 
    });
  }

  handleChangeNames(e) { // user inputs for the players names.
    let playerNames = e.target.value;
    this.setState({ 
      playerName: playerNames
    });
  }

  render() {
    const {
      playerName,
      numberOfPlayersValid,
      playerNames,
      numberOfPlayers,
    } = this.state;

    return (
      <Fragment>
      <div className="animated fadeInLeftBig">
        <h3>Welcome to the only Ping Pong TrnmntGnrtr you will ever need!</h3>
        {playerNames.length > 0 ? null : <h5>How many players are playing in your tournament?</h5>}
        {playerNames.length > 0 ? null :
        <Fragment>
        <form>
          <input
            type="number"
            pattern="[0-9]*"
            onChange={e => this.handleChangePlayers(e)}
            placeholder="0"
            disabled={numberOfPlayersValid ? "disabled" : null}
            min="0"
            max="16"
            // value={numberOfPlayers}
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
        </Fragment>
        }
        <div>
          {numberOfPlayersValid && playerNames.length < numberOfPlayers ?  ( // only render if meets conditions
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
      </div>  
      </Fragment>
    );
  }
}

export default HomePage;

