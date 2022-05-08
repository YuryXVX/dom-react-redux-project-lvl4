import { Form, Button, FloatingLabel } from 'react-bootstrap';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from "yup";
import { handleAuthentication } from '../model/thunks.js';
import { useDispatch } from 'react-redux';

import { useHistory } from "react-router-dom";



export const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required(),
  });

  const handleSubmit = (user, {setErrors}) => {
    dispatch(handleAuthentication({
      user, 
      onErrors: setErrors,
      onRedirect: (path) => history.push(path)
    }))
  }
  
  return (
    <>
      <Formik
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        initialValues={{
          username: '',
          password: ''
        }}
      >
        {
          ({ handleSubmit, handleChange, values, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <FloatingLabel
                controlId="floatingInput"
                label="Имя"
                className="mb-3"
              >
                <Form.Control 
                  type="email"
                  name="username"
                  placeholder="Имя"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </FloatingLabel>

              <FloatingLabel 
                controlId="floatingPassword" 
                label="Пароль"
              >
                <Form.Control 
                  type="password" 
                  name="password"
                  placeholder="Пароль"
                  value={values.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </FloatingLabel>

              <Button 
                variant="outline-primary"
                className="w-100 mt-3"
                type="submit"
              >
                Войти
              </Button>
            </Form>
        )}
      </Formik>
      </>
    )
}