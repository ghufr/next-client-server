const TodoItem = ({ id, title, handleClick }) => (
  <div>
    <p>{title}</p>
    <button onClick={() => handleClick(id)}>Del Todo</button>
  </div>
)

export default TodoItem