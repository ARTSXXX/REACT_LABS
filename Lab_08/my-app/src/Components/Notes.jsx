import React, { useState } from 'react'
import AddTodo from './AddTodo'
import Header from './Header'
import TodoList from './TodoList'
import Comments from './Commets'
import { Container } from 'react-bootstrap'
export default function Notes({ dateNotes, functTodo,  }) {
  const [todo, setTodo] = useState([]);
  return (
    <Container>
      <Header />
      <AddTodo todo={todo} setTodo={setTodo} date={dateNotes}/>
      <TodoList todo={todo} setTodo={setTodo} functTodo={functTodo} />
    </Container>
  );
}
