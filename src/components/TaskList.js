import { useEffect, useState } from "react";
import { connect } from "react-redux";
import TaskItem from "../components/TaskItem";
import { getTodos, saveTodo, deleteTodo } from "../redux/actions/todo";

function TaskList({ dispatch, header, isCompleted, todos = [] }) {
  const [isFetched, setFetchStatus] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    if (isFetched) return;
    dispatch(getTodos(isCompleted));
    setFetchStatus(true);
  });

  const onSaveTodo = async (todo) => {
    if (todo.task === "") return;
    if (!todo.id) todo.created_date = parseInt(Date.now() / 1000);
    dispatch(saveTodo(todo));
  };

  const onDeleteTodo = async (todo) => {
    dispatch(deleteTodo(todo));
  };

  return (
    <div className="todo-pending">
      <div>
        <h2>{header}</h2>
        {todos.map((todo) => (
          <TaskItem
            key={todo.id}
            todo={todo}
            onSave={onSaveTodo}
            onDelete={onDeleteTodo}
          />
        ))}
        {!isCompleted && (
          <TaskItem
            todo={{ is_completed: false, task: "" }}
            key={0}
            onSave={onSaveTodo}
            onDelete={onDeleteTodo}
          />
        )}
      </div>
    </div>
  );
}

const mapStateToProps = ({ todo }, props) => ({
  todos: props.isCompleted ? todo.completedTodos : todo.pendingTodos,
});
export default connect(mapStateToProps)(TaskList);
