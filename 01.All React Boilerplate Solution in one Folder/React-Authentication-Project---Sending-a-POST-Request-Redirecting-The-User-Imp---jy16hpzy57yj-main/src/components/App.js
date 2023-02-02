import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Profile from "./Profile";
import PrivateRoute from "./PrivateRoute";
const App = () => {
    return (
        <div id="main">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login}></Route>
                <PrivateRoute exact path="/profile">
                    <Profile />
                </PrivateRoute>
            </Switch>
        </div>
    );
};

export default App;
