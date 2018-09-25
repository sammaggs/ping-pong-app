import React, { Fragment } from "react";

const PlayerList = ({ playerNames, onClickDelete }) => {
  return (
    <Fragment>
      <section>
        <h1>Player Names</h1>
        <div>
          <ul>
            {playerNames.map((player, i) => (
              <li key={i}>{player}</li>
            ))}
          </ul>
        </div>
      </section>
    </Fragment>
  );
};

export default PlayerList;
