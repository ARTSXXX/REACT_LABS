import React, { useState } from 'react'
import './StudentInfo.css'
export default function StudentInfo() {
  const [fio, setfio] = useState([
    {
      
    }
  ])
  const [date, setdate] = useState("28.01.2004")
  const [year, setyear] = useState("2021")
  const [faculty, setfaculty] = useState("FIT")
  const [spec, setspec] = useState("ISiT")
  const [email, setemail] = useState("raar.prpr@gmail.com")
  const [numb, setnumb] = useState("+375336189791")
  const [age, setage] = useState("20 лет")


  const arr_date = [
    {
      title: "Фамилия Имя Отчество",
      id: 1,
      value: fio,

    },
    {
      title: "Дата рождения",
      id: 2,
      value: date,
    },
    {
      title: "Год поступления",
      id: 3,
      value: year,
    },
    {
      title: "Факультет",
      id: 4,
      value: faculty,
    },
    {
      title: "Специальность",
      id: 5,
      value: spec,
    },
    {
      title: "Почта",
      id: 6,
      value: email,
    },
    {
      title: "Номер",
      id: 7,
      value: numb,
    },
    {
      title: "Возраст",
      id: 8,
      value: age,
    },

  ]
  const handlefio = (e) => {

    setfio(e.target.value)

  }
  const handledate = (e) => {

    setdate(e.target.value)

  }
  const handleyear = (e) => {

    setyear(e.target.value)

  }
  const handlefaculty = (e) => {

    setfaculty(e.target.value)

  }
  const handleemail = (e) => {

    setemail(e.target.value)
  }
  const handlenumb = (e) => {

    setnumb(e.target.value)

  }
  const handleage = (e) => {

    setage(e.target.value)

  }
  const handlespec = (e) => {

    setspec(e.target.value)

  }

  return (
    <div>
      <div>
        <input placeholder="ФИО" onChange={handlefio} />

      </div>
      <div>
        <input placeholder="Дата рождения" onChange={handledate} />

      </div>
      <div>
        <input placeholder="Год рождения" onChange={handleyear} />

      </div>
      <div>
        <input placeholder="Факульетет" onChange={handlefaculty} />

      </div>
      <div>
        <input placeholder="Специальность" onChange={handlespec}/>

      </div>
      <div>
        <input placeholder="Адрес эл.почты" onChange={handleemail}/>

      </div>
      <div>
        <input placeholder="Номер телефона" onChange={handlenumb}/>

      </div>
      <div>
        <input placeholder="Возраст" onChange={handleage}/>

      </div>
          
          
      <table>
      
        {arr_date.map(el => <tr>
          {el.title}
          <td>
            {el.value}
          </td>
        </tr>)}
        <tr> Оператор
            {numb.slice(0,6) === "+37533" && <td>Мтс</td>}
            {numb.slice(0,6) === "+37544" && <td>А1</td>}
            {numb.slice(0,6) === "+37525" && <td>Лайв</td>}
            {numb.slice(0,6) === "+37517" && <td>Белетелеком</td>}
       
        </tr>
      </table>
       <button>Отправить данные</button>
       
     
    </div>
  )
}
