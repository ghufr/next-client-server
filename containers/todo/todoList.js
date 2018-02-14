const TodoList = ({ todos }) => (
  <div>
    {todos && todos.length > 0 ? todos.map((item) => <p key={item._id}>{item.title}</p> ) : <p>You doesn't have any todo</p>}
  </div>
)

export default TodoList