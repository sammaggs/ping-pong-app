import React, { Fragment } from "react";
import Button from "./Button";
import DeleteIcon from '../images/delete-icon.png'

const PlayerList = ({ onClickDelete, playerNames } ) => { // players names and onClick passed in as props
  
    return (
      <Fragment>
        <section>
          <h3>Players:</h3>
          <div>
            <ul className="list-unstyled">
              {playerNames.map((player, i) => ( 
                // mapping over player names to create a seperate list item for each one. 
                  <div key={i} className="animated zoomIn playerNameDiv">
                  <li>{player}</li>
                  <Button
                    onClick={() => onClickDelete(i)} // onclick that has been accepted as prop from HomePage with player index. 
                    className={"btn-danger btn"}
                    buttonText={<img alt="delete button for removing player" src={DeleteIcon}/>}
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
