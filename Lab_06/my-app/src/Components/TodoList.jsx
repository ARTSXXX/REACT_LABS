import React from 'react'
import { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import s from './ToDoList.module.css'
export default function TodoList({ todo, setTodo }) {
  const deleteTodo = (id) => {
    let newtodo = [...todo].filter(el => el.id != id)
    setTodo(newtodo);
  }

  return (
    <div className={s.text}>
      
      {todo.length > 8 && <h3 className={s.center}>Слишком много заметок (Больше 8)</h3>}
      {todo.map((el, index) => (<div className={index + 1 > 8 ? s.red : s.list} key={el.id}>
        
        <p className={s.title}>
        {el.title}</p>
        <div className={s.centerDate} > {el.date.toLocaleDateString()} </div>
        <div >  <Button className={s.btn}  onClick={() => deleteTodo(el.id)}>Удалить</Button> </div>

      </div>
      ))}
    </div>
  )
}
