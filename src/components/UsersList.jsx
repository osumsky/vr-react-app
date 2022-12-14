import { useEffect } from 'react';

import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import * as UserActionCreators from '../actions/userCreactors';

function UsersList(props) {
  const { users, isFetching, error } = useSelector(({ users }) => users);
  const { getUsersRequest, clearUserError } = bindActionCreators(
    UserActionCreators,
    useDispatch()
  );

  const loadUsers = ({ limit, offset } = {}) =>
    getUsersRequest({ offset: users.length, limit });

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <section>
      <h2>Users list</h2>
      {isFetching && <p>Loading...</p>}
      {error && (
        <div>
          <span>{error.message}</span>
          <button onClick={clearUserError}>Reset error</button>
        </div>
      )}
      {users.length === 0 && <p>no users</p>}
      {users.map((user) => (
        <li key={user.id}>{user.email}</li>
      ))}
      <button onClick={() => loadUsers()}>Load more</button>
    </section>
  );
}

export default UsersList;
