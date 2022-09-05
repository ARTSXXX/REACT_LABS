import React, { useState } from 'react'
import './../App.css';

export default function Commets() {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [comment, setcomment] = useState("")
    const [avatar, setavatar] = useState()
    const [state, setState] = useState([])
    const [edit, setedit] = useState(null) // Находимся по дефолту не в режиме редактирования
    const [value, setvalue] = useState("")
    const [secret, setSecret] = useState("")

    const editTodo = (id, comment) => {
        setedit(id)
        setvalue(comment)

    }
    const SSavetodo = (id) => {
        let newTodo = [...state].map(item => {
            if (item.id == id) {    // Изменение свойситва объекта(Edit comment)
                item.comment = value; // Переписать значение в комменте
            }
            return item
        })
        setState(newTodo)
        
    }
    const handle = () => {


        const newComment = {
            name: name,
            avatar: avatar,
            email: email,
            comment: comment,
            id: new Date(),
            secret: secret
        }
        setState([...state, newComment])
    


    }

    const deleteS = (id) => {
        let secrets = prompt("Введитк секретное слово");
        if (secrets === secret) {
            let newtodo = [...state].filter((el) => el.id !== id);
            setState(newtodo);
        }

    }

    return (
        <div>



            <div><input placeholder='Имя пользователя' value={name} onChange={(e) => setname(e.target.value)} /></div>
            <div className="wrapper">
                <span className="text">Point</span>
                <div className="list">
                    <div className="point">
                        <img src="https://static8.depositphotos.com/1207999/1027/i/600/depositphotos_10275820-stock-photo-business-man-suit-avatar.jpg" alt="" />
                        <span onClick={() => setavatar("https://static8.depositphotos.com/1207999/1027/i/600/depositphotos_10275820-stock-photo-business-man-suit-avatar.jpg")}>Men</span>
                    </div>
                    <div className="point">
                        <img src="data:image/png;base64,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" alt="" />
                        <span onClick={() => setavatar("data:image/png;base64,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")}>Women</span>
                    </div>
                </div>
            </div>
            <div><input placeholder='Электронная почта' onChange={(e) => setemail(e.target.value)} /></div>
            <div>
                <input
                    placeholder='Секретное слово для удаления'
                    value={secret}
                    onChange={(e) => setSecret(e.target.value)}

                /></div>
            <div>
                <textarea onChange={(e) => setcomment(e.target.value)} placeholder='Комментарий' />



            </div>
            <button onClick={handle}>Отправить комментарий</button>


            {state.map(el => <div> <p>{el.name} : {el.email} </p> <img className='img-s' src={el.avatar} /> <div> Комментарий: {el.comment}

               :    {el.id.toLocaleTimeString()}
            </div>



                {
                    edit == el.id ?
                        <div>
                            <input onChange={(e) => setvalue(e.target.value)} value={value} />

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
                            <button onClick={() => deleteS(el.id)}>Delete</button>
                            <button onClick={() => editTodo(el.id, el.comment)}>Редактировать</button>
                        </div>
                }







            </div>)}


        </div>
    )
}
