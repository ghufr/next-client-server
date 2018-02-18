import Button from '../../components/button'

const TodoItem = ({ id, title, handleClick }) => (
  <div>
    <p style={{display: 'inline-block'}}>{title}</p>
  </div>
)

export default TodoItem