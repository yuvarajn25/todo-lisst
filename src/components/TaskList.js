import { useEffect, useState } from "react";
import TaskItem from "../components/TaskItem";
import supabase from "../server";

export default function TaskList({ onNotification, header, isCompleted }) {
  const [tasks, setTasks] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    if (tasks.length) return;
    const fetchData = async () => {
      let { data, error } = await supabase
        .from("to_do")
        .select("*")
        .eq("is_completed", isCompleted)
        .order("created_date");
      if (error) {
        onNotification("error", error.message);
        return;
      }
      const localTasks = data;
      !isCompleted &&
        localTasks.push({
          is_completed: false,
          task: "",
        });
      setTasks(localTasks);
    };

    fetchData();
  }, [tasks]);

  const saveTask = async (task) => {
    if (task.task === "") return;
    if (!task.id) task.created_date = parseInt(Date.now() / 1000);
    const { data, error } = await supabase
      .from("to_do")
      .insert([task], { upsert: true });

    if (error) this.props.onNotification("error", error.message);
    setTasks([]);
  };

  const deleteTask = async (taskId) => {
    const { data, error } = await supabase
      .from("to_do")
      .delete()
      .eq("id", taskId);
    if (error) this.props.onNotification("error", error.message);
    setTasks([]);
  };

  return (
    <div className="todo-pending">
      <div>
        <h2>{header}</h2>
        {tasks.map((task) => (
          <TaskItem task={task} onSave={saveTask} onDelete={deleteTask} />
        ))}
      </div>
    </div>
  );
}
