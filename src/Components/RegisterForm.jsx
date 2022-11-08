import AppInput from './AppInput';

export default function RegisterForm() {
  return (
    <>
      <h1>Please, register</h1>

      <form
        onSubmit={() => {
          console.log('done');
        }}
      >
        <AppInput
          name="email"
          label="Label"
          type="email"
          onChange={console.log}
          required={true}
        />

        <AppInput
          name="pwd"
          label="Password"
          type="email"
          onChange={console.log}
          required={true}
        />
      </form>
      <button>Submit</button>
    </>
  );
}
