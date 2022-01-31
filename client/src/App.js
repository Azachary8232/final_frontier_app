
import './App.css';
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


      // VIEWS / CONTROLLERS IMPORTS
import Test from './views/Test';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route to="/test">
            <Test/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
