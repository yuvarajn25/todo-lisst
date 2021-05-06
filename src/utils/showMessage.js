import Notification from "../components/notification";

export default function showMessage(type, message) {
  console.log({ type, message });
  return <Notification type={type} message={message} />;
}
