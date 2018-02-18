import Input from '../../components/input'
import Button from '../../components/button'

const TodoForm = ({ handleSubmit, handleChange, input }) => (
  <form onSubmit={(e) => handleSubmit(e)}>
    <Input value={input || ''} type='text' name='todoInput' placeholder='Add Todos' onChange={handleChange}/>
    <Button variant='grey' type='submit' style={{ marginTop: '16px' }}>Submit</Button>
  </form>
)

export default TodoForm