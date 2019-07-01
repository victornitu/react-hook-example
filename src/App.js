import React, { useState, useReducer, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { getTodo } from './services'

const initialState = {count: 0, todo: null};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {...state, count: state.count + 1};
    case 'decrement':
      return {...state, count: state.count - 1};
    case 'setTodo':
      return {...state, todo: action.payload}
    default:
      throw new Error();
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const { todo } = state

  const [message, setMessage] = useState("Hello!")

  useEffect(() => {
    console.log('init')
    getTodo(dispatch)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{state.count}</p>
        <p>{message}</p>
        <button onClick={() => dispatch({type: 'increment'})}>
          Increment
        </button>
        <button onClick={() => dispatch({type: 'decrement'})}>
          Decrement
        </button>
        <button onClick={() => setMessage("Bye")}>
          Bye
        </button>
        {todo && (
          <ul>
            <li>{todo.userId}</li>
            <li>{todo.id}</li>
            <li>{todo.title}</li>
            <li>{todo.completed}</li>
          </ul>
        )}
      </header>
    </div>
  );
}

export default App;
