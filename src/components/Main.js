import FilterTodos from "./FilterTodos";
import Task from "./Task";
import TaskCounter from "./TaskCounter";

const Main = ({
  todos,
  onToggle,
  handleCompleted,
  handleFilter,
  buttonColor,
  isAll,
  isActive,
  isCompleteTask,
  delBtn,
}) => {
  return (
    <main>
      <div className='todo-card'>
        {isAll &&
          todos.map((todo) => (
            <Task
              todo={todo}
              key={todo.id}
              onToggle={onToggle}
              delBtn={delBtn}
            />
          ))}
        {isActive &&
          todos
            .filter((todo) => !todo.isCompleted)
            .map((todo) => (
              <Task
                todo={todo}
                key={todo.id}
                onToggle={onToggle}
                delBtn={delBtn}
              />
            ))}

        {isCompleteTask &&
          todos
            .filter((todo) => todo.isCompleted)
            .map((todo) => (
              <Task
                todo={todo}
                key={todo.id}
                onToggle={onToggle}
                delBtn={delBtn}
              />
            ))}

        <TaskCounter
          todos={todos}
          handleCompleted={handleCompleted}
          handleFilter={handleFilter}
          buttonColor={buttonColor}
        />
      </div>

      <FilterTodos buttonColor={buttonColor} handleFilter={handleFilter} />
    </main>
  );
};

export default Main;
