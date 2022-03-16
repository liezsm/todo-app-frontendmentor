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
      <p className={isCompleted ? "checked-task" : ""}>{text}</p>
      <button className='delete-btn' onClick={() => delBtn(id)}>
        <img src={DeleteLogo} alt='delete button' />
      </button>
    </div>
  );
};

export default Task;
