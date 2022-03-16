import lightThemeLogo from "../dist/images/icon-moon.svg";
import darkThemeLogo from "../dist/images/icon-sun.svg";

import { useState } from "react";

const Header = ({ onTheme, isDark, handleInput, todos }) => {
  const [addTodo, setAddTodo] = useState({
    text: "",
    isCompleted: false,
  });

  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { type, name, value } = e.target;
    const val = type == "checkbox" ? e.target.checked : value;
    setAddTodo({
      ...addTodo,
      [name]: val,
    });
  };

  const textInput = document.querySelector(".todo-input");
  return (
    <header>
      <div className='wrapper'>
        <div className='title'>
          <h1>TODO</h1>
          <button onClick={onTheme} className='btn'>
            <img
              src={isDark ? darkThemeLogo : lightThemeLogo}
              alt='moon icon'
            />
          </button>
        </div>
        <form
          onSubmit={(e) => {
            handleInput(e, addTodo);
            setIsSubmit(true);
            setTimeout(() => {
              setAddTodo({
                text: "",
                isCompleted: false,
              });
            }, 1000);
          }}
        >
          <div className='addTodo-form'>
            <input
              type='checkbox'
              className='checkbox'
              name='isCompleted'
              checked={addTodo.isCompleted}
              onChange={(e) => handleChange(e)}
            />
            <input
              type='text'
              className='todo-input'
              placeholder='Create a new todo....'
              name='text'
              value={addTodo.text}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <input type='submit' style={{ display: "none" }} />
        </form>
      </div>
    </header>
  );
};

export default Header;
