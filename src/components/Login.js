import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../server";
import Notification from "./notification";

export default function Login({ isLogin }) {
  const [error, setError] = useState(null);
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
      const { user, session, error } = await supabase.auth.signIn(params);
      console.log({ user, session });
      if (error) setError(error);
    } else {
      console.log("heree");
      const { user, session, error } = await supabase.auth.signUp(params);
      if (error) setError(error);
    }
  };
  console.log({ isLogin });
  return (
    <div>
      <Notification type="error" message={error} onComplete={setError} />
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
