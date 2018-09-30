import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Components/Counter';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from "redux";
import initial from './Data/Store';
import reducer from './Data/reducer';
import {store} from './Data/Store';


const render = () => {
    let state = store.getState();
    // pass in state.value as a value prop
    ReactDOM.render(
        <Counter 
            player1={ state.player1 }
            player2={ state.player2 }
            serving= { state.serving }
            onClickUpP1={ () => store.dispatch({ type: "incrementPlayer1" })}
            onClickUpP2={ () => store.dispatch({ type: "incrementPlayer2" })}
            onClickReset={ () => store.dispatch({ type: "reset" })}
            />,
        document.getElementById('root')
    );
};
     
store.subscribe(render); // render when state changes
render(); // render when page loads using initial state



