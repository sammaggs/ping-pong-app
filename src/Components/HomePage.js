import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfPlayers: 0,
      numberOfPlayersValid: false,
      error: "",
      playerNames: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.numberOfPlayersSubmit = this.numberOfPlayersSubmit.bind(this);
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
        numberOfPlayersValid: true,
      });
    }
  }

  handleChange(e) {
    this.setState({ numberOfPlayers: e.target.value });
  }

  render() {
    const { numberOfPlayersValid, error } = this.state;

    return (
      <section>
        <h1>How many players are playing in your tournament?</h1>
        <h3>Please enter an even number</h3>
        <form>
          <input
            type="number"
            pattern="[0-9]*"
            onChange={e => this.handleChange(e)}
          />
            <input
              onClick={e => this.numberOfPlayersSubmit(e)}
              type="submit"
              value="Create Your Tournament!"
            />
        </form>
        <div>
            {numberOfPlayersValid ? null : <h1>{error}</h1>}
        </div>
            
      </section>
    );
  }
}

export default HomePage;
