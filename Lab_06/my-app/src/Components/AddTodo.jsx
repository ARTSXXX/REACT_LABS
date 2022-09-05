import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'
import s from './AddTodo.module.css'
import { Row, Col, Button, FormControl} from 'react-bootstrap'

export default function AddTodo({ todo, setTodo }) {
    const [value, setValue] = useState('')
    const savetodo = () => {
        setTodo(
            [...todo, {
                id: uuidv4(),
                title: value,
                date : new Date()

            }]
        )
        setValue('')
    }
    const keypress = (e) => {
        if (e.key === "Enter") {
            savetodo(e)
        }
    }
    return (

        <Row>
            <Col className={s.addtodoform}>
                <FormControl  onChange={(e) => setValue(e.target.value)} value={value} onKeyDown={keypress} placeholder='Введите заметку' />
                <Button className={s.btn} variant="outline-primary" onClick={savetodo}>Сохранить</Button>
            </Col>
        </Row>
    )
}

