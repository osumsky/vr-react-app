import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { createTask } from '../actions/todoCreactors';

const TaskForm = ({ createTaskAction }) => {
  const onSubmit = (values, formikBag) => {
    createTaskAction(values);
    formikBag.resetForm();
  };

  return (
    <div>
      <h2>To-Do</h2>
      <Formik initialValues={{ body: '', isDone: false }} onSubmit={onSubmit}>
        <Form>
          <Field name="body" />
          <Field type="checkbox" name="isDone" />
          <input type="submit" value="Add" />
          <input type="reset" value="Reset" />
        </Form>
      </Formik>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createTaskAction: (values) => dispatch(createTask(values)),
});

export default connect(null, mapDispatchToProps)(TaskForm);
