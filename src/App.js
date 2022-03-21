import Header from "./components/Header";
import Footer from "./components/Footer";

import { useState } from "react";
import Main from "./components/Main";

function App() {
  //todo user's device default color preference
  const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  // console.log(darkModeMediaQuery);
  const [isDark, setIsDark] = useState(darkModeMediaQuery);
  const [preferDark, setPreferDark] = useState(false);
  const [todos, setTodos] = useState([
    { id: 1, text: "Complete Javascript course", isCompleted: true },
    { id: 2, text: "Jog around the park 3x", isCompleted: false },
    { id: 3, text: "10 minutes meditation", isCompleted: true },
    { id: 4, text: "Read for one hour", isCompleted: false },
    { id: 5, text: "Pick up groceries", isCompleted: false },
    { id: 6, text: "Complete Todo App on Frontend Mentor", isCompleted: true },
  ]);

  const handleTheme = () => {
    setIsDark(!isDark);
  };

  // todo to add the class for theme preference using toggle and prefers-color-scheme
  let themeSwitch = isDark ? "App dark-theme" : "App light-theme";
  isDark
    ? (document.body.className = "dark-theme")
    : (document.body.className = "light-theme");

  // todo toggle todo check/uncheck
  const handleChange = (id) => {
    // console.log(id);
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      });
    });
  };

  // todo input text to add todo

  const handleInput = (e, todoItem) => {
    e.preventDefault();

    setTodos((prevTodos) => [
      ...prevTodos,
      { id: prevTodos.length + 1, ...todoItem },
    ]);
  };

  // todo handle Clear completed todos

  const handleCompleted = () => {
    const updatedTodos = todos.filter((todo) => !todo.isCompleted);
    setTodos(updatedTodos);
  };
  // todo taskcounter
  const [changeTextColor, setChangeTextColor] = useState({
    all: true,
    active: false,
    completed: false,
  });
  // todo for the filtered buttons todos to be displayed( i use this technique instead of using the todos because when clicking from all to active to completed, data will change and doesnt maintain the original one so nothing to display)
  const [isAll, setIsAll] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [isCompleteTask, setIsCompleteTask] = useState(false);

  const handleFilter = (e) => {
    const { name } = e.target;

    //   todo reset all the values of each buttons to false so when clicked, only one will be able to clicked
    const updated = {};
    const reset = Object.keys(changeTextColor)
      .filter((i) => i !== name)
      .map((i) => {
        return (updated[i] = false);
      });

    setChangeTextColor((prevColor) => {
      return { ...updated, [name]: !prevColor[name] };
    });

    // todo filtering todos baased on button clicked(all, active, completed)
    switch (name) {
      case "active":
        setIsActive(!isActive);
        setIsAll(false);
        setIsCompleteTask(false);
        break;
      case "all":
        setIsAll(!isAll);
        setIsActive(false);
        setIsCompleteTask(false);
        break;
      case "completed":
        setIsCompleteTask(!isCompleteTask);
        setIsAll(false);
        setIsActive(false);
        break;
    }
  };

  // todo delete a todo with delete btn

  const delBtn = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  // todo for drag and drop functon

  // - https://www.youtube.com/watch?v=aYZRRyukuIw
  // exp this tutorial has helped me with the implementation of drag and drop feature
  const [todo, updateTodo] = useState(todos);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    // console.log(result);
    const items = Array.from(todos);
    // console.log("before", items);
    const [reoderredItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reoderredItem);
    // console.log("after", items);
    updateTodo(items);
    setTodos(items);
  };

  return (
    <div className={themeSwitch}>
      <Header
        onTheme={handleTheme}
        isDark={isDark}
        handleInput={handleInput}
        todos={todos}
      />
      <div className='wrapper'>
        <Main
          todos={todos}
          onToggle={handleChange}
          handleCompleted={handleCompleted}
          handleFilter={handleFilter}
          buttonColor={changeTextColor}
          isAll={isAll}
          isActive={isActive}
          isCompleteTask={isCompleteTask}
          delBtn={delBtn}
          handleDragEnd={handleDragEnd}
        />

        <Footer />
      </div>
    </div>
  );
}

export default App;
