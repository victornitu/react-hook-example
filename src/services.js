async function handleResponse (response) {
  if (!response.ok) {
    const { message } = await response.json()
    throw new Error(message)
  }
  return response.json()
}

const headers = {
  'Content-Type': 'application/json'
}

const get = async url => fetch(url, { headers }).then(handleResponse)


export async function getTodo(dispatch) {
  const todo = await get('https://jsonplaceholder.typicode.com/todos/1')
  dispatch({
    type: 'setTodo',
    payload: todo
  })
}
