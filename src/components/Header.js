import lightThemeLogo from "../dist/images/icon-moon.svg";
import darkThemeLogo from "../dist/images/icon-sun.svg";

const Header = ({ onTheme, isDark }) => {
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

        <div className='addTodo-form'>
          <input type='checkbox' className='checkbox' />
          <input
            type='text'
            className='todo-input'
            placeholder='Create a new todo....'
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
