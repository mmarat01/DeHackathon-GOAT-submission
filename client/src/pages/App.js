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
        <div style={{
          minHeight:'100vh',
          backgroundImage:"url(/assets/hands-together-dio-hasbi-saniskoro-3280130.jpg)",
          backgroundRepeat:"no-repeat",
          backgroundSize:"cover",
          }}>
            <Home /> 
          </div>
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
