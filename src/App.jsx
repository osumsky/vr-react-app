import RegisterForm from './Components/RegisterForm';
import ConfirmDialog from './Components/ConfirmDialog';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({});
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [isConfirmed, setConfirmed] = useState(false);
  const confirmUserData = (user) => {
    setUser(user);
    setConfirmationOpen(true);
    console.log(user);
  };
  const closeDialog = () => setConfirmationOpen(false);
  const confirmDialog = () => {
    closeDialog();
    setConfirmed(true);
  };
  return (
    <>
      <main>
        {isConfirmed ? (
          `Congratulation user: ${user.email}`
        ) : (
          <RegisterForm onSubmit={confirmUserData} />
        )}
      </main>
      <ConfirmDialog
        open={confirmationOpen}
        title="Please confirm registration"
        cancel={closeDialog}
        confirm={confirmDialog}
      >
        <p>Please confirm your email: {user.email}</p>
      </ConfirmDialog>
    </>
  );
}

export default App;
