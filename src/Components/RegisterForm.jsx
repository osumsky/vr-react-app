import AppInput from './AppInput';
import { useState } from 'react';

export default function RegisterForm({ onSubmit }) {
  const [user, setUserData] = useState({ email: '', psw: '' });
  const setUserEmail = (e) => {
    const email = e.target.value;
    setUserData({ ...user, email });
  };
  const setUserPwd = (e) => {
    const psw = e.target.value;
    setUserData({ ...user, psw });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(user);
    setUserData({ email: '', psw: '' });
  };

  return (
    <>
      <h1>Please, register</h1>

      <form
        onSubmit={handleFormSubmit}
      >
        <AppInput
          name="email"
          label="Email"
          type="email"
          onChange={setUserEmail}
          required={true}
          value={user.email}
        />

        <AppInput
          name="pwd"
          label="Password"
          type="password"
          onChange={setUserPwd}
          required={true}
          value={user.psw}
        />
        {/* {JSON.stringify(user)} */}
        <button>Submit</button>
      </form>
    </>
  );
}
