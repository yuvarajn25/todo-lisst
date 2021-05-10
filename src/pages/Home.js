import { connect } from "react-redux";
import TaskList from "../components/TaskList";

function Home() {
  return (
    <div>
      <TaskList header="Pending Tasks" isCompleted={false} />
      <TaskList header="Completed Tasks" isCompleted={true} />
    </div>
  );
}

export default connect()(Home);
