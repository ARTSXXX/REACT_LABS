import React, { useState, useEffect } from 'react';
import './App.css'
import Birth from "./Birh";
import Numb from "./Numb";
function App() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [emailDirty, setEmailDirty] = useState(false)  // Состояние которое отображает были ли мы в инпуте или нет
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [emailError, setEmailError] = useState('Email не может быть пустым')
  const [passwordError, setPasswordError] = useState('Password не может быть пустым')
  const [formValid, setformValid] = useState(false)


  const [password_two, setPassword_two] = useState()
  const [passwordDirty_two, setPasswordDirty_two] = useState(false)
  const [passwordError_two, setPasswordError_two] = useState('Password не может быть пустым')

  const passwordHandler_two = (e) => {
    setPassword_two(e.target.value)
    if (e.target.value.length < 4 || e.target.value.length > 11) {
      setPasswordError_two('Password должен содержать от 4 до 11 символов')
    }
    else {
      setPasswordError_two();
    }
  }
  const blur_two = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;

      case 'password_two':
        setPasswordDirty_two(true);
        break;
    }
  };


  useEffect(() => {
    if (emailError || passwordError) {
      setformValid(false)
    }
    else {
      setformValid(true)
    }
  }
    , [emailError, passwordError])

  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный email')
    }
    else {
      setEmailError();
    }
  }
  const passwordHandler = (e) => {
    setPassword(e.target.value)
    if (e.target.value.length < 4 || e.target.value.length > 11) {
      setPasswordError('Password должен содержать от 4 до 11 символов')
    }
    else {
      setPasswordError();
    }
  }

  const blur = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;

      case 'password':
        setPasswordDirty(true);
        break;
    }
  };
  function Check() {
    let small = "([a-z])+"; // ЧИТАТЬ ПРО РЕГУЛЯРНЫЕ ВЫРЖАЕНИЯ!
    let protect = 0;

    if (password.length < 8) {
      return (<div className='green'>Слабый пароль</div>)
    }
    if (password.match(small)) {
      protect++;
    }
    let big = "([A-Z]+)"
    if (password.match(big)) {
      protect++;
    }
    let numb = "([0-9]+)"
    if (password.match(numb)) {
      protect++;
    }
    if (protect === 2) {
      return (<div className='yellow'>Средний пароль</div>)

    }
    if (protect === 3) {
      return (<div className='red'>Надежный пароль</div>)

    }
  }



  return (
    <div>
      <div className="full">
        <form >
          <div> Регистрация </div>
          {(emailDirty && emailError) && <div style={{ color: 'red' }}>{emailError}</div>}
          <input onChange={emailHandler} value={email} onBlur={blur} name="email" type="text" placeholder="Enter your email" />
          {(passwordDirty && passwordError) && <div style={{ color: 'red' }}>{passwordError}</div>}
          <div>  <input onChange={passwordHandler} value={password} onBlur={blur} name="password" type="password" placeholder="Enter your password" /> </div>
          {Check  }
          <input value={password_two} onChange={passwordHandler_two} onBlur={blur_two} name="password" type="password" placeholder="Confirm your password" />
          {password != password_two && <div>Пароли не совпадают</div>}
          <div>  <input type="text" placeholder="Имя" /></div>
       <div>   <input type="text" placeholder="Фамилия" /></div>
          <div> Date of nate
            <Birth />
            <Numb />
            <button disabled={!formValid} type="submit">Registration</button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default App;
