import Header from "./components/Header";
import Footer from "./components/Footer";

import { useState } from "react";
import Main from "./components/Main";

function App() {
  const [isDark, setIsDark] = useState(false);
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
