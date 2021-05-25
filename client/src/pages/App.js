import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Data from "./Data";
import Donors from "./Donors";
import Members from "./Members";

function App() {
  return (
    <div className='wrapper'>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/donors'>
          <Donors />
        </Route>
        <Route path='/members'>
          <Members />
        </Route>
        <Route path='/data'>
          <Data />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
