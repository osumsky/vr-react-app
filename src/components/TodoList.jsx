import React from 'react';
import { connect } from 'react-redux';
import { updateTask, deleteTask } from '../actions/todoCreactors';

const TodoList = (props) => {
  const { tasks, deleteTaskAction, updateTaskAction } = props;
  const onDelete = ({
    target: {
      parentElement: { id },
    },
  }) => {
    deleteTaskAction(id);
  };
  const onChange = ({
    target: {
      checked,
      parentElement: { id },
    },
  }) => {
    updateTaskAction(id, { isDone: checked });
  };
  return (
    <>
      {tasks.map(({ id, body, isDone }) => (
        <li key={id} id={id}>
          <span>{body}</span>
          <input type="checkbox" checked={isDone} onChange={onChange} />
          <button onClick={onDelete}>Delete</button>
        </li>
      ))}
    </>
  );
};

const mapStateToProps = ({ todo }) => todo;

const mapDispatchToProps = (dispatch) => ({
  updateTaskAction: (id, values) => dispatch(updateTask(id, values)),
  deleteTaskAction: (id) => dispatch(deleteTask(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
