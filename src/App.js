import "./App.css";
import supabase from "./server";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navigaion from "./components/Navigaion";
import Notification from "./components/Notification";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useState, useRef } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const [session, setSession] = useState(supabase.auth.session());
  const ref = useRef(null);

  supabase.auth.onAuthStateChange((event, session) => {
    setSession(session);
  });

  const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      // Show the component only when the user is logged in
      // Otherwise, redirect the user to /signin page
      <Route
        {...rest}
        render={(props) =>
          session ? (
            <div>
              <Navigaion />
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
    <Provider store={store}>
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
            <Login isLogin={true} />
          </Route>
          <Route exact path="/signup">
            <Login isLogin={false} />
          </Route>
          <PrivateRoute exact path="/home" component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
