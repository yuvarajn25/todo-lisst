import { Link } from "react-router-dom";
import supabase from "../server";

export default function Login({ isLogin, onNotification, history }) {
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
        onNotification("error", error.message);
      } else {
        history.push("/home");
      }
    } else {
      const { error } = await supabase.auth.signUp(params);
      if (error) onNotification("error", error.message);
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
