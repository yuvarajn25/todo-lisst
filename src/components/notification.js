import { useEffect, useState } from "react";

export default function Notification({ message, type, onComplete }) {
  const [msg, setMsg] = useState(message?.msg);
  useEffect(() => {
    setMsg(message?.message);
    if (message)
      setTimeout(() => {
        onComplete(null);
      }, 2000);
  }, [message, onComplete]);

  const className = message
    ? `${type}-notification active-notification`
    : `${type}-notification`;

  console.log(className);
  return (
    <div className={className}>
      <p>{msg}</p>
    </div>
  );
}
