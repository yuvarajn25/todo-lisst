export const showNotification = (type, message) => ({
  type: "SHOW_NOTIFICATION",
  messageType: type,
  message,
});

export const hideNotification = () => ({
  type: "HIDE_NOTIFICATION",
});
