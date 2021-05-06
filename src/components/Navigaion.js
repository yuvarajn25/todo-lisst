import { Link } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";
import supabase from "../server";

export default function Navigation({ onNotification }) {
  const logoff = () => {
    const { error } = supabase.auth.signOut();
    if (error) onNotification("error", error.message);
    else {
      onNotification("success", "Logged Out");
    }
  };

  return (
    <div className="nav">
      <div>asdsad</div>
      <div className="appname">
        <Link to="/home">TODO List</Link>
      </div>
      <div className="action">
        <FaPowerOff onClick={logoff} />
      </div>
    </div>
  );
}
