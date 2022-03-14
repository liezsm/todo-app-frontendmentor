import DeleteLogo from "../dist/images/icon-cross.svg";
const Task = () => {
  return (
    <div className='task-item'>
      <input type='checkbox' className='checkbox' />
      <h3 className='task-text'>Todo App from frontend mentor</h3>
      <button className='delete-btn'>
        <img src={DeleteLogo} alt='delete button' />
      </button>
    </div>
  );
};

export default Task;
