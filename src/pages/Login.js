import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { showNotification } from "../redux/actions/notification";

import supabase from "../server";

function Login({ isLogin, dispatch }) {
  let history = useHistory();

  if (supabase.auth.session()) history.push("/home");

  const submit = async (event) => {
    event.preventDefault();
    const {
      email: { value: email },
      password: { value: password },
    } = event.target;

    const params = {
      email,
      password,
    };

    if (isLogin) {
      const { error } = await supabase.auth.signIn(params);
      if (error) {
        dispatch(showNotification("error", error.message));
      }
      history.push("/home");
    } else {
      const { error } = await supabase.auth.signUp(params);
      if (error) dispatch(showNotification("error", error.message));
    }
  };
  return (
    <div>
      <div className="login">
        <form onSubmit={submit}>
          <input
            placeholder="Email"
            className={"field"}
            name="email"
            type="text"
          />
          <input
            placeholder="Password"
            className={"field"}
            name="password"
            type="password"
          />
          <input type="submit" value={isLogin ? "Login" : "Sign Up"} />
          <div className="signup">
            <Link to={isLogin ? "/signup" : "/login"}>
              {isLogin
                ? "do not have account? Signup here"
                : "Already have account? Login here"}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default connect()(Login);
