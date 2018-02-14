import Card from '../components/card'
import { compose, setStatic } from 'recompose'
import fetch from 'isomorphic-unfetch'
import Todo from '../containers/todo'
import Page from '../containers/page'
import Container from '../components/container'

const enhance = compose(
  setStatic(
    'getInitialProps',
    async ({ req }) => {
      // Server Side
      if(req) {
        const data = await fetch('http://localhost:5000/api/todos', {
          method: 'GET',
          credentials: 'same-origin'
        }).then((res) => res.status === 200 && res.json())
        return { todos: data }
      }
      
      return { todos: null }
    }
  )
)

export default enhance(({ todos }) => (
  <Page>
    <Container>
      <Card>
        <Todo initialTodos={todos}/>
      </Card>
    </Container>
  </Page>
))