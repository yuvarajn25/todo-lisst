import Notification from "../components/notification";

export default function showMessage(type, message) {
  return <Notification type={type} message={message} />;
}
