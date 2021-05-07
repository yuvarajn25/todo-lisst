import { useState } from "react";
import TaskList from "../components/TaskList";

export default function Home({ onNotification }) {
  return (
    <div>
      <TaskList header="Pending Tasks" isCompleted={false} />
      <TaskList header="Completed Tasks" isCompleted={true} />
    </div>
  );
}
