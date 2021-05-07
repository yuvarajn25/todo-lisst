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
  });

  console.log({ session });

  const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      // Show the component only when the user is logged in
      // Otherwise, redirect the user to /signin page
      <Route
        {...rest}
        render={(props) =>
          session ? (
            <div>
              <Navigaion onNotification={showNotification} />
              <Component {...props} />
            </div>
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );
  };

  return (
    <div>
      <Router>
        <Notification ref={ref} />
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
          <PrivateRoute
            exact
            path="/home"
            component={() => <Home onNotification={showNotification} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
