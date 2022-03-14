import FilterTodos from "./FilterTodos";
import Task from "./Task";
import TaskCounter from "./TaskCounter";

const Main = () => {
  return (
    <main>
      <div className='todo-card'>
        <Task />
        <Task />
        <Task />
        <TaskCounter />
      </div>

      <FilterTodos />
    </main>
  );
};

export default Main;
