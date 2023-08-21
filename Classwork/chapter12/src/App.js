// Firstly, we import useState from the react library as we will be using it for hooks
import React, { useState, } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import useFetch from './useFetch'
import Users from './Users'

const App = () => {
  const postsUrl = "https://jsonplaceholder.typicode.com/posts"
  const todosUrl = "https://jsonplaceholder.typicode.com/todos"

  // we have a variable requested in our state, and we set its initial value to postsUrl
  // And setRequested is the setter method to update the value of this piece of state

  const [requested, setRequested] = useState('posts') 
  const data = useFetch(requested)


  return (
    <div>
      <Users />
      <Button variant="link" onClick={() => setRequested(postsUrl)}>
        Posts
      </Button>
      <Button variant="link" onClick={() => setRequested(todosUrl)}>
        Todos
      </Button>
      <br />
      Requested: {requested}
      <ul>
        {data.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  )
}
export default App;