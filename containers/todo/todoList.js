import TodoItem from './todoItem'

const TodoList = ({ todos }) => (
  <div>
    {todos && todos.length > 0 ? todos.map((item) => <TodoItem key={item._id} title={item.title}/>) : <p>You doesn't have any todo</p>}
  </div>
)

export default TodoList