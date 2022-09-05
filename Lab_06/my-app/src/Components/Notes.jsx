import React, { useState } from 'react'
import AddTodo from './AddTodo'
import Header from './Header'
import TodoList from './TodoList'
import { Container } from 'react-bootstrap'
export default function Notes() {
  const [todo, setTodo] = useState([


  ])
  return (
    <Container><Header />
      <AddTodo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </Container>
  )
}
