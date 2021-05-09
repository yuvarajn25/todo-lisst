import supabase from "../../server";

import { showNotification } from "../actions/notification";

export const saveTodo = (todo) => {
  return async (dispatch, getState) => {
    if (todo.task === "") return;
    if (!todo.id) todo.created_date = parseInt(Date.now() / 1000);
    const { data, error } = await supabase
      .from("to_do")
      .insert([todo], { upsert: true });

    if (error) dispatch(showNotification("error", error.message));
    dispatch({ type: "SAVE_TODO", todo: data[0] });
  };
};

export const deleteTodo = (todo) => {
  return async (dispatch, getState) => {
    const { data, error } = await supabase
      .from("to_do")
      .delete()
      .eq("id", todo.id);
    if (error) dispatch(showNotification("error", error.message));
    dispatch({ type: "DELETE_TODO", todo });
  };
};

export const getTodos = (isCompleted) => {
  return async (dispatch, getState) => {
    const { data: todos, error } = await supabase
      .from("to_do")
      .select("*")
      .eq("is_completed", isCompleted)
      .order("created_date", { ascending: true });
    if (error) dispatch(showNotification("error", error.message));
    console.log({ isCompleted, todos });
    dispatch({ type: "SET_TODO", todos, isCompleted });
  };
};
