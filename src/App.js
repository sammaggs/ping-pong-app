import React, { Fragment, Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Header from './Components/Header';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Header/>
        </Router>
      </Fragment>
  
    );
  }
}

export default App;
