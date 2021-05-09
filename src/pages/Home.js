import { connect } from "react-redux";
import TaskList from "../components/TaskList";

function Home({ todo: { pendingTodos, completedTodos } }) {
  return (
    <div>
      <TaskList
        header="Pending Tasks"
        isCompleted={false}
        todos={pendingTodos}
      />
      <TaskList
        header="Completed Tasks"
        isCompleted={true}
        todos={completedTodos}
      />
    </div>
  );
}

const mapStateToProps = (todo) => todo;
export default connect(mapStateToProps)(Home);
