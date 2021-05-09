import { connect } from "react-redux";
import { useEffect } from "react";

import { hideNotification } from "../redux/actions/notification";

const Notification = ({ isEnable, type, message, dispatch }) => {
  useEffect(() => {
    if (isEnable)
      setTimeout(() => {
        dispatch(hideNotification());
      }, 1500);
  }, [dispatch, isEnable]);

  const className = isEnable
    ? `notification ${type}-notification`
    : `notification`;

  return (
    <div className={className}>
      <p>{message}</p>
    </div>
  );
};

const mapStateToProps = ({ notification }) => notification;

export default connect(mapStateToProps)(Notification);
