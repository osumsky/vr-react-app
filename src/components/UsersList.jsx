import { useEffect } from 'react';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import * as UserActionCreators from '../actions/userCreactors';

function UsersList(props) {
  // const { users, isFetching, error, getUsersReq } = props;
  const { users, isFetching, error } = useSelector(({ users }) => users);
  const dispatch = useDispatch();
  const loadUsers = ({ limit, offset }={}) =>
    dispatch(UserActionCreators.getUsersRequest({ offset: users.length }));

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <section>
      <h2>Users list</h2>
      {isFetching && <p>Loading...</p>}
      {error && <p>{JSON.stringify(error)}</p>}
      {users.length === 0 && <p>no users</p>}
      {users.map((user) => (
        <li key={user.id}>{user.email}</li>
      ))}
      <button onClick={() => loadUsers()}>Load more</button>
    </section>
  );
}

// Used with "connect" function from 'react-redux'
// const mapStateToProps = ({ users }) => users;
// const mapDispatchToProps = (dispatch) => ({
//   getUsersReq: ({ limit, offset }) =>
//     dispatch(UserActionCreators.getUsersRequest({ limit, offset })),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(UsersList);

export default UsersList;
