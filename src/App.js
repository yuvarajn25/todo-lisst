import "./App.css";
import supabase from "./server";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navigaion from "./components/Navigaion";
import Notification from "./components/notification";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useState, useRef } from "react";

function App() {
  const [session, setSession] = useState(supabase.auth.session());
  const ref = useRef(null);

  const showNotification = (type, message) => {
    ref.current.showNotification(type, message);
  };

  supabase.auth.onAuthStateChange((event, session) => {
    setSession(session);
    console.log(event, session);
  });

  console.log({ session });

  return (
    <div>
      <Router>
        <Notification ref={ref} />
        {/* <Navigaion onNotification={showNotification} /> */}
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return session ? (
                <Redirect to="/home" />
              ) : (
                <Redirect to="/login" />
              );
            }}
          />
          <Route exact path="/login">
            <Login isLogin={true} onNotification={showNotification} />
          </Route>
          <Route exact path="/signup">
            <Login isLogin={false} onNotification={showNotification} />
          </Route>
          <Route exact path="/home" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
