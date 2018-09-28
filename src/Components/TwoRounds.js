import React, {Component } from "react";

class TwoRounds extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  };

  render() {
     return (
              <ul className="list-unstyled fixture-list">
                <li className="hvr-grow fixture">Player 1</li>
                <span>vs</span>
                <li className="hvr-grow fixture">Player 2</li>
              </ul>
        );
    }
};

export default TwoRounds;
