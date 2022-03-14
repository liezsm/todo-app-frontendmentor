import Header from "./components/Header";
import Footer from "./components/Footer";

import { useState } from "react";
import Main from "./components/Main";

function App() {
  const [isDark, setIsDark] = useState(false);
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
  let themeSwitch = isDark ? "App dark-theme" : "App light-theme";
  return (
    <div className={themeSwitch}>
      <Header onTheme={handleTheme} isDark={isDark} />
      <div className='wrapper'>
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
