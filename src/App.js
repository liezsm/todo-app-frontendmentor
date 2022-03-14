import Header from "./components/Header";

import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);
  const handleTheme = () => {
    setIsDark(!isDark);
  };
  let themeSwitch = isDark ? "App dark-theme" : "App light-theme";
  return (
    <div className={themeSwitch}>
      <Header onTheme={handleTheme} isDark={isDark} />
      <main></main>
      <footer></footer>
    </div>
  );
}

export default App;
