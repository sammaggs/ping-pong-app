import React from "react";
import { Link } from "react-router-dom";


const PlayerList = ({playerNames}) => {
  return (
    <section>
    <h1>{playerNames.length >= 1 ? "Player Names" : null}</h1>
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
  );
};

export default PlayerList;
