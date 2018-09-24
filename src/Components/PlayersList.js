import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const PlayerList = ({ playerNames }) => {
  return (
    <Fragment>
      <section>
        <h1>Player Names</h1>
        <div>
          <ul>
            {playerNames.map(player => (
              <li>{player}</li>
            ))}
          </ul>
        </div>
        {/* {playerNames.length >= 1 ? 
    //   <Link/> : null} */}
      </section>
      <Button buttonText="Create Fixtures!"/>
    </Fragment>
  );
};

export default PlayerList;
