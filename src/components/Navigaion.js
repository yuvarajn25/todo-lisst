import { Link } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";
import supabase from "../server";
import { connect } from "react-redux";
import { showNotification } from "../redux/actions/notification";

function Navigation({ dispatch }) {
  const logoff = () => {
    const { error } = supabase.auth.signOut();
    if (error) dispatch(showNotification("error", error.message));
    else {
      dispatch(showNotification("success", "Logged Out"));
    }
  };

  return (
    <div className="nav">
      <div></div>
      <div className="appname">
        <Link to="/home">TODO List</Link>
      </div>
      <div className="action">
        <FaPowerOff onClick={logoff} />
      </div>
    </div>
  );
}

export default connect()(Navigation);
