import TodoForm from './todoForm'
import TodoList from './todoList'
import { postTodos, deleteTodos } from '../../lib/todos'

import { compose, withHandlers, withState } from 'recompose'

// const transform = (data) => {
//   const result = {}
//   data.map((item) => Object.assign(result, {[item.id]: item.title}))
//   return result
// }

const enhance = compose(
  withState('todos', 'setTodos', ({ initialTodos }) => initialTodos),
  withState('input', 'setInput', ''),
  withHandlers({
    handleChange: ({ input, setInput }) => (e) => {
      setInput(e.target.value)
    },
    handleSubmit: ({ todos, input, setTodos, setInput }) => (e) => {
      e.preventDefault()
      if(!input) return
      const form = e.target.elements
      postTodos(input).then((result) => {
        const { id, title } = result
        if(id) {
          setTodos([ ...todos, { _id: id, title } ])
          setInput('')
        }
      })
    }
  })
)

const Todo = enhance(({todos, input, ...rest }) => (
  <div>
    <TodoForm input={input} {...rest}/>
    <TodoList todos={todos}/>
  </div>
))

export default Todo