import React from 'react'
import { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import s from './ToDoList.module.css'
export default function TodoList({ todo, setTodo, functTodo }) {

   const [edit, setedit] = useState(null) // Находимся по дефолту не в режиме редактирования
   const [value, setvalue] = useState(" ")
   const deleteTodo = (id) => {
    let newtodo = [...todo].filter((el) => el.id !== id);
    setTodo(newtodo);
    
    functTodo(newtodo);
    };
  const editTodo =(id , title) => {

      setedit (id)
      setvalue(title)

  }

  const SSavetodo =(id) => {
      let newTodo = [...todo].map(item => {
        if(item.id == id) {
            item.title = value;
        }
        return item
  })
  setTodo (newTodo)
  setedit (null)
  }
  return (
    <div className={s.text}>
      
      {todo.length > 8 && <h3 className={s.center}>Слишком много заметок (Больше 8)</h3>}
      {todo.map((el, index) => (<div className={index + 1 > 8 ? s.red : s.list} key={el.id}>
        {
          edit == el.id ? 
          <div> 
           <input onChange={(e) => setvalue(e.target.value)} value={value}/>
           
           </div>
           :
           <div> </div>
        }
      {
         edit == el.id ? 
         <div>
           <button onClick={() => SSavetodo(el.id)}> Save</button>
           </div>
           : 
           <div>
             <Button className={s.btn} onClick={() => deleteTodo(el.id)}>Удалить</Button>
        <Button className={s.btn}  onClick={() => editTodo(el.id , el.title)}>Редактировать</Button>
              </div>
      } 
        
        
        <p className={s.title}>
        {el.title}</p>
        <div /*className={s.centerDate}*/ > {el.date} </div>
        <div >  
         </div>

      </div>
      ))}
    </div>
  )
}
