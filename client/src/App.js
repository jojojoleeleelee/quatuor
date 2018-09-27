import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import { NavBar } from './components/NavBar'

import Home from './containers/Home'
import QuartetIndex from './containers/QuartetIndex'
import QuartetShow from './containers/QuartetShow'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
          <NavBar />
            <div className="col s-12">
            <Switch>
              <Route exact path ="/" component={Home} />
              <Route exact path="/quartet" component={QuartetIndex} />
              <Route exact path='/quartet/:id' component={QuartetShow} />
            </Switch>
            </div>
          </div>
      </Router>
      </div>
    );
  }
}

export default App;
