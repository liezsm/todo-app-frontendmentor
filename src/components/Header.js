import lightThemeLogo from "../dist/images/icon-moon.svg";
import darkThemeLogo from "../dist/images/icon-sun.svg";

const Header = ({ onTheme, isDark }) => {
  return (
    <header>
      <h1>TOdo</h1>
      <button onClick={onTheme} className='btn'>
        <img src={isDark ? darkThemeLogo : lightThemeLogo} alt='moon icon' />
      </button>
    </header>
  );
};

export default Header;
