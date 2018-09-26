import React, { Fragment, Component } from "react";
import Button from "./Button";

const PlayerList = ({ onClickDelete, playerNames } ) => {
  
    return (
      <Fragment>
        <section>
          <h3>Player Names</h3>
          <div>
            <ul className="list-unstyled">
              {playerNames.map((player, i) => (
                <Fragment>
                  <div className="playerNameDiv">
                  <li index={i} key={i}>{player}</li>
                  <Button
                    onClick={onClickDelete}
                    className={"btn-warning btn"}
                    buttonText={"Delete"}
                  />
                  </div>
                </Fragment>
              ))}
            </ul>
          </div>
        </section>
      </Fragment>
    );
  }
export default PlayerList;
