import { connect } from 'react-redux';

function UsersList(props) {
  const { users, isFetching, error } = props;

  useEffect(async () => {
    try {
    const savedUsers = await API.createUser();
    if (savedUsers && savedUsers.length>0) {
      
    }   

    } catch (error) {

    }

  }, []);

  return (
    <section>
      <h2>Users list</h2>
      {isFetching && <p>Loading...</p>}
      {error && <p>JSON.stringify(error)</p>}
      {users.length === 0 && <p>no users</p>}
      {users.map((user) => (
        <li key={user.id}>{user.email}</li>
      ))}
    </section>
  );
}

const mapStateToProps = ({ users }) => users;

export default connect(mapStateToProps)(UsersList);
