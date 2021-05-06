import "./App.css";
import supabase from "./server";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login isLogin={true} />
        </Route>
        <Route path="/signup">
          <Login isLogin={false} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
