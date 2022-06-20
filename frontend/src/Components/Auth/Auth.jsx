import React from 'react';
import { Button } from '@mui/material';
import style from './Auth.css';

function Auth() {
  return (
    <div className={style}>
      <div>
        <h1>Авторизация</h1>
        <form>
          <Button type="primary">Войти через GitHub</Button>
        </form>
      </div>
    </div>
  );
}

export default Auth;
