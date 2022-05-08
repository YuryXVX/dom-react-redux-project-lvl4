import React from 'react';
import style from './header.scss';

export const HeaderComponent = ({ children }) => (
  <header className="ui__header p-2 shadow-sm">
    {children}
  </header>
)