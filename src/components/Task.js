import DeleteLogo from "../dist/images/icon-cross.svg";
const Task = ({ todo: { id, text, isCompleted }, onToggle, delBtn }) => {
  return (
    <div className='task-item'>
      <input
        type='checkbox'
        className='checkbox'
        checked={isCompleted}
        onChange={() => onToggle(id)}
      />
      <h3 className={isCompleted ? "checked-task" : ""}>{text}</h3>
      <button className='delete-btn' onClick={() => delBtn(id)}>
        <img src={DeleteLogo} alt='delete button' />
      </button>
    </div>
  );
};

export default Task;