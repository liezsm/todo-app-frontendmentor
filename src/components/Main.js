import FilterTodos from "./FilterTodos";
import Task from "./Task";
import TaskCounter from "./TaskCounter";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";

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
  handleDragEnd,
}) => {
  return (
    <main>
      <div className='todo-card'>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId='todos'>
            {(provided) => (
              <div
                className='todo-list'
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {isAll &&
                  todos.map((todo, index) => (
                    <Task
                      index={index}
                      key={todo.id}
                      todo={todo}
                      onToggle={onToggle}
                      delBtn={delBtn}
                    />
                  ))}
                {isActive &&
                  todos
                    .filter((todo) => !todo.isCompleted)
                    .map((todo, index) => (
                      <Task
                        key={todo.id}
                        index={index}
                        todo={todo}
                        onToggle={onToggle}
                        delBtn={delBtn}
                      />
                    ))}

                {isCompleteTask &&
                  todos
                    .filter((todo) => todo.isCompleted)
                    .map((todo, index) => (
                      <Task
                        todo={todo}
                        index={index}
                        key={todo.id}
                        onToggle={onToggle}
                        delBtn={delBtn}
                      />
                    ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
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
