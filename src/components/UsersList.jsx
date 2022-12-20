import { useEffect } from 'react';
import { connect } from 'react-redux';
import * as UserActionCreators from '../actions/userCreactors';

function UsersList(props) {
  const { users, isFetching, error, getUsersReq } = props;

  useEffect(() => {
    getUsersReq({});
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
      <button onClick={() => getUsersReq({ offset: users.length })}>
        Load more
      </button>
    </section>
  );
}

const mapStateToProps = ({ users }) => users;
const mapDispatchToProps = (dispatch) => ({
  getUsersReq: ({ limit, offset }) =>
    dispatch(UserActionCreators.getUsersRequest({ limit, offset })),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
