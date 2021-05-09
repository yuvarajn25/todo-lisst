const initialState = {
  isEnable: true,
  messageType: "",
  message: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case "SHOW_NOTIFICATION": {
      return {
        isEnable: true,
        type: action.messageType,
        message: action.message,
      };
    }
    case "HIDE_NOTIFICATION": {
      return {
        ...state,
        isEnable: false,
      };
    }
    default:
      return state;
  }
}
