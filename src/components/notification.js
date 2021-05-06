import { useEffect, useState, forwardRef, useImperativeHandle } from "react";

const Notification = forwardRef((props, ref) => {
  const [value, setValue] = useState(false);
  const [type, setType] = useState(null);
  const [message, setMessage] = useState(null);

  const showNotification = (type, message) => {
    setValue(true);
    setType(type);
    setMessage(message);
  };
  const hideNotification = () => {
    setValue(false);
  };

  useImperativeHandle(ref, () => {
    return {
      showNotification,
    };
  });

  useEffect(() => {
    if (value)
      setTimeout(() => {
        hideNotification(null);
      }, 1500);
  }, [value]);

  const className = value
    ? `notification ${type}-notification`
    : `notification`;

  return (
    <div className={className}>
      <p>{message}</p>
    </div>
  );
});

export default Notification;
