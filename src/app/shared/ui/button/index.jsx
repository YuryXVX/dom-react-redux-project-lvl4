import { Button as BButton } from 'react-bootstrap';
import React from 'react';

export const Button = (props) => {
  const { children, ...rest } = props;
  return (
    <BButton {...rest}>{children}</BButton>
  )
}