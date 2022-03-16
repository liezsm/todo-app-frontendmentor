import { useState } from "react";

const TaskCounter = ({ todos, handleCompleted, handleFilter, buttonColor }) => {
  const todosLeft = todos.filter((todo) => !todo.isCompleted).length;

  return (
    <div className='task-counter'>
      <p>
        {todosLeft > 0 ? `${todosLeft} items left` : "All todos completed!"}{" "}
      </p>
      <div className='fiter-desktop-only'>
        <button
          className={buttonColor.all ? "blue-color" : ""}
          name='all'
          onClick={(e) => handleFilter(e)}
        >
          All
        </button>
        <button
          className={buttonColor.active ? "blue-color" : ""}
          name='active'
          onClick={(e) => handleFilter(e)}
        >
          Active
        </button>
        <button
          className={buttonColor.completed ? "blue-color" : ""}
          name='completed'
          onClick={(e) => handleFilter(e)}
        >
          Completed
        </button>
      </div>
      <button className='clearCompleted' onClick={handleCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default TaskCounter;
