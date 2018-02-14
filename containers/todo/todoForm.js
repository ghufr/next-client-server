import Input from '../../components/input'
import Button from '../../components/button'

const TodoForm = ({ handleSubmit }) => (
  <form onSubmit={(e) => handleSubmit(e)}>
    <Input type='text' name='todoInput' placeholder='Add Todos'/>
    <Button type='submit' style={{ marginTop: '16px' }}>Submit</Button>
  </form>
)

export default TodoForm