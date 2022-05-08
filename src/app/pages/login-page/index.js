import React from 'react';
import {User} from '../../feature/login/index.js';
import styles from './styles.scss';

export const LogInPage = () => (
  <div className="page__login">
    <div>
      <h5>Войти</h5>
      <User.LoginForm />
    </div>
  </div>
)