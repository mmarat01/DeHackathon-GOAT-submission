import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Data from "./Data";
import Donors from "./Donors";
import Members from "./Members";
import Login from "./Login";
import Register from "./Register";

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
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/register'>
          <Register/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
