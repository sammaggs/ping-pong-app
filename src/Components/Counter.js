import React, { Component } from 'react';
import './App.css';

const App = ( {
    player1, 
    player2, 
    onClickUpP1, 
    onClickUpP2, 
    onClickReset, 
    serving
} ) => {

  const winner = player1 >= 21 && player1 >= player2 + 2 ? '1' : '' || player2 >= 21 && player2 >= player1 + 2 ? '2' : '';


  
  return (
  <React.Fragment>
      {/* header */}
      <header className="page-header">
          <h1>PongPing</h1>
      </header>

      {/* scores */}
      <div className="row">
          <div className="col-xs-6">
              {serving ? <p>Player 1 <span class="label label-success">Serving</span></p> : <p>Player 1</p> }
              <p className="well">{player1}</p>
              {winner === '' ? <button onClick={onClickUpP1} className="btn btn-primary">+</button> : null}
          </div>

          <div className="col-xs-6">
              {serving ? <p>Player 2</p> : <p>Player 2 <span class="label label-success">Serving</span></p> }
              <p className="well">{player2}</p>
              {winner === '' ? <button onClick={onClickUpP2} className="btn btn-primary">+</button> : null}
          </div>
      </div>

      { /* winner message */}
      {winner === '' ? null : <h2 className="jumbotron">  Player {winner} wins!</h2>}

      <hr />

      { /* reset button */}
      <button onClick={onClickReset} className="btn btn-danger">Reset</button>
  </React.Fragment>
  )};

export default App;
