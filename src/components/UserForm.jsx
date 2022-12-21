import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as UserActionCreators from '../actions/userCreactors';

const aaa = {
  fname: 'Elon',
  lname: 'Mask',
  email: 'elon@gmail.com',
  password: 'sdakfjlsdkajfklsajfiefjklsdmv',
  birthday: '2022-10-10',
  isMale: true,
};

const UserForm = (props) => {
  const { createUserRequestAction } = props;
  const onSubmit = (values, formikBag) => {
    createUserRequestAction({values});
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={{
        fname: '',
        lname: '',
        email: '',
        password: '',
        birthday: '',
        isMale: true,
      }}
      onSubmit={onSubmit}
    >
      <Form>
        <Field name="fname" placeholder="fname" />
        <Field name="lname" placeholder="lname" />
        <Field name="email" placeholder="email" />
        <Field name="password" placeholder="password" />
        <Field name="birthday" placeholder="birthday" />
        <Field name="isMale" placeholder="isMale" type="checkbox" />
        <button type='submit'>Creat user</button>
      </Form>
    </Formik>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createUserRequestAction: (values) =>
    dispatch(UserActionCreators.createUserRequest(values)),
});

export default connect(undefined, mapDispatchToProps)(UserForm);
