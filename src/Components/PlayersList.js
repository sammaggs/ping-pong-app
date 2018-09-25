import React, { Fragment } from "react";
import Button from './Button';

const PlayerList = ({ playerNames, onClickDelete }) => {
  return (
    <Fragment>
      <section>
        <h1>Player Names</h1>
        <div>
          <ul className="list-unstyled">
            {playerNames.map((player, i) => (
              <Fragment>
              <li key={i}>{player}</li>
              <Button className={"btn-warning"} buttonText={"Delete"}/>
              </Fragment>
            ))}
          </ul>
        </div>
      </section>
    </Fragment>
  );
};

export default PlayerList;
