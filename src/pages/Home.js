import { useState } from "react";
import TaskList from "../components/TaskList";

export default function Home({ onNotification }) {
  const [refetch, setFetch] = useState(true);
  return (
    <div>
      <TaskList
        header="Pending Tasks"
        isCompleted={false}
        setFetch={setFetch}
        refetch={refetch}
      />
      <TaskList
        header="Completed Tasks"
        isCompleted={true}
        setFetch={setFetch}
        refetch={refetch}
      />
    </div>
  );
}
