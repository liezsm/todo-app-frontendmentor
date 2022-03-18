import DeleteLogo from "../dist/images/icon-cross.svg";

import { Draggable } from "react-beautiful-dnd";

const Task = ({ todo: { id, text, isCompleted }, onToggle, delBtn, index }) => {
  return (
    <Draggable key={id} draggableId={text} index={index}>
      {(provided) => (
        <div
          className='task-item'
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
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
      )}
    </Draggable>
  );
};

export default Task;
