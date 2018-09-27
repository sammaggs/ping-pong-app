import React, { Fragment } from "react";
import Button from "./Button";

const PlayerList = ({ onClickDelete, playerNames } ) => {
  
    return (
      <Fragment>
        <section>
          <h3>Player Names</h3>
          <div>
            <ul className="list-unstyled">
              {playerNames.map((player, i) => (
                  <div key={i} className="playerNameDiv">
                  <li>{player}</li>
                  <Button
                    onClick={onClickDelete}
                    className={"btn-danger btn"}
                    buttonText={"x"}
                  />
                  </div>
              ))}
            </ul>
          </div>
        </section>
      </Fragment>
    );
  }
export default PlayerList;
