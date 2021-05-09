import { connect } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState, useEffect } from "react";

function TaskItem({ todo, onSave, onDelete }) {
  const [localTodo, saveLocalTodo] = useState(todo);

  const handleCheckBox = (event) => {
    if (!localTodo.is_completed) {
      localTodo.completed_date = parseInt(Date.now() / 1000);
    }
    onSave({ ...localTodo, is_completed: !localTodo.is_completed });
  };

  const handleTaskText = (event) => {
    saveLocalTodo({ ...localTodo, task: event.target.value });
  };

  if (!localTodo) return <div></div>;
  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={localTodo.is_completed}
        onChange={handleCheckBox}
        style={!localTodo.id ? { visibility: "hidden" } : {}}
      />
      <input
        type="text"
        value={localTodo.task}
        onChange={handleTaskText}
        onBlur={() => onSave(localTodo)}
        placeholder={!localTodo.id ? "+ Add New" : ""}
      />
      <RiDeleteBin6Line
        onClick={() => onDelete(localTodo)}
        style={!localTodo.id && { visibility: "hidden" }}
      />
    </div>
  );
}

export default connect()(TaskItem);
