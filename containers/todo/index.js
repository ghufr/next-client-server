import TodoForm from './todoForm'
import TodoList from './todoList'
import { postTodos } from '../../lib/todos'

import { compose, withHandlers, withState } from 'recompose'


const enhance = compose(
  withState('todos', 'setTodos', ({ initialTodos }) => initialTodos),
  withHandlers({
    handleSubmit: ({ todos, setTodos }) => (e) => {
      e.preventDefault()
      const form = e.target.elements
      const todo = form.todoInput.value
      console.log(todo)
      
      postTodos(todo).then((result) => {
        const { id } = result
        if(id) {
          setTodos([ ...todos, { _id: id, title: todo } ])
        }
      })
    }
  })
)

const Todo = enhance(({ handleSubmit, todos }) => (
  <div>
    {console.log(todos)}
    <TodoForm handleSubmit={handleSubmit}/>
    <TodoList todos={todos}/>
  </div>
))

export default Todo