const initialState = {
  pendingTodos: [],
  completedTodos: [],
};

const deleteFromArray = (arr, itemId) => {
  const isExists = arr.findIndex((a) => a.id === itemId);
  if (isExists > -1) {
    arr.splice(isExists, 1);
  }
};

const pushToArray = (arr, item) => {
  const isExists = arr.findIndex((a) => a.id === item.id);
  if (isExists > -1) {
    arr[isExists] = item;
  }
  arr.push(item);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case "SAVE_TODO": {
      const { todo } = action;
      pushToArray(
        todo.is_completed ? state.completedTodos : state.pendingTodos,
        todo
      );
      deleteFromArray(
        todo.is_completed ? state.pendingTodos : state.completedTodos,
        todo.id
      );
      return {
        pendingTodos: [...state.pendingTodos],
        completedTodos: [...state.completedTodos],
      };
    }
    case "DELETE_TODO": {
      const { todo } = action;
      deleteFromArray(
        todo.is_completed ? state.completedTodos : state.pendingTodos,
        todo.id
      );
      return {
        pendingTodos: [...state.pendingTodos],
        completedTodos: [...state.completedTodos],
      };
    }
    case "SET_TODO": {
      const { todos, isCompleted } = action;
      return {
        ...state,
        [isCompleted ? "completedTodos" : "pendingTodos"]: todos,
      };
    }
    default:
      return state;
  }
}
