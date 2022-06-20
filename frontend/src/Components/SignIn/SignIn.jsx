import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import style from './SignIn.module.css';
import { signIn } from '../../Redux/actions/userAction';

function SignIn() {
  const [userSignIn, setUserSignIn] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const from = { pathname: '/' };

  const changeHandler = (e) => {
    setUserSignIn((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    let payload = Object.entries(userSignIn).filter((el) => (el[1] ? el[1].trim() : el[1]));
    if (payload.length) {
      payload = Object.fromEntries(payload);
      dispatch(signIn(payload, navigate, from));
    }
  };
  return (
    <form onSubmit={submitHandler} method="post" className={style.form}>
      <div className={style.signin__card}>
        <label className={style.signin__card_label} htmlFor="exampleEmail">Введите Email</label>
        <input
          onChange={changeHandler}
          value={userSignIn.email}
          className={style.signin__card_input}
          required="required"
          type="email"
          name="email"
          placeholder="email"
        />
        <label className={style.signin__card_label} htmlFor="examplePassword">Введите пароль</label>
        <input
          onChange={changeHandler}
          value={userSignIn.password}
          className={style.signin__card_input}
          required="required"
          type="password"
          name="password"
          placeholder="password"
        />
      </div>

      <button className={style.signin__form_button} type="submit">
        Войти
      </button>
      <button className={style.signin__form_button} type="submit">
        Войти с GitHub
      </button>

    </form>
  );
}

export default SignIn;
