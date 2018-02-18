import fetch from 'isomorphic-unfetch'

const apiUrl = 'http://localhost:5000'

export const getTodos = async () => {
  const result = await fetch(`${apiUrl}/api/todos`, {
    method: 'GET',
    credentials: 'same-origin'
  })
  .catch((err) => {
    throw err
  })
  return result
}

export const postTodos = async (todo) => {
  const result = fetch(`${apiUrl}/api/todos`, {
    method: 'POST',
    credentials: 'same-origin',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify({
      payload: {
      title: todo
      }
    })
  })
  .then((res) => res.status === 200 && res.json())
  .catch((err) => {
    throw err
  })
  return result
}

export const deleteTodos = async (todoId) => {
  const result = fetch(`${apiUrl}/api/todos/${todoId}`, {
    method: 'DELETE',
    credentials: 'same-origin'
  })
  .then((res) => res.status === 200 && res.json())
  .catch((err) => {
    throw err
  })
  return result
}