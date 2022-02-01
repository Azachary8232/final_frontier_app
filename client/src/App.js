
import './App.css';
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Main from './views/Main';
import Test from './views/Test'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route to='/main'>
            <Main/>
          </Route>
          {/* <Route to='/test'>
            <Test/>
          </Route> */}
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
