import supabase from "../server";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function TaskItem(props) {
  const [task, setTask] = useState(props.task);

  const handleCheckBox = (event) => {
    if (!task.is_completed) {
      task.completed_date = parseInt(Date.now() / 1000);
    }
    props.onSave({ ...task, is_completed: !task.is_completed });
  };

  const handleTaskText = (event) => {
    setTask({ ...task, task: event.target.value });
  };

  if (!task) return <div></div>;
  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.is_completed}
        onChange={handleCheckBox}
        style={!task.id ? { visibility: "hidden" } : {}}
      />
      <input
        type="text"
        value={task.task}
        onChange={handleTaskText}
        onBlur={() => props.onSave(task)}
        placeholder={!task.id ? "+ Add New" : ""}
      />
      <RiDeleteBin6Line
        onClick={() => props.onDelete(task.id)}
        style={!task.id && { visibility: "hidden" }}
      />
    </div>
  );
}
