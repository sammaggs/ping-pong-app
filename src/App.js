import React, { Fragment, Component } from 'react';
import './App.css';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import Header from './Components/Header';
import HomePage from './Components/HomePage';


class App extends Component {
  render() {
    return (
        <Router>
          <Fragment>
            <Header/>
            <Route exact path="/" component={ HomePage } />
          </Fragment>
        </Router>
  
    );
  }
}

export default App;
