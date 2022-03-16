const FilterTodos = ({ buttonColor, handleFilter }) => {
  return (
    <div className='filter-card'>
      <button
        className={buttonColor.all ? "blue-color" : ""}
        name='all'
        onClick={(e) => handleFilter(e)}
      >
        All
      </button>
      <button
        className={buttonColor.active ? "blue-color" : ""}
        name='active'
        onClick={(e) => handleFilter(e)}
      >
        Active
      </button>
      <button
        className={buttonColor.completed ? "blue-color" : ""}
        name='completed'
        onClick={(e) => handleFilter(e)}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterTodos;
