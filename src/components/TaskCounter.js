const TaskCounter = () => {
  return (
    <div className='task-counter'>
      <p>5 items left</p>
      <div className='fiter-desktop-only'>
        <a href='#'>All</a>
        <a href='#'>Active</a>
        <a href='#'>Completed</a>
      </div>
      <a href='#'>Clear Completed</a>
    </div>
  );
};

export default TaskCounter;
