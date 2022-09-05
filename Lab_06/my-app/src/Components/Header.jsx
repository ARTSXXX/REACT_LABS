import React from 'react'
import s from './Header.module.css'
import {Row, Col} from 'react-bootstrap'
export default function Header() {
  return (
    <Row>
 <Col className={s.root}>Лист заметок</Col>
    </Row>
   
  )
}
