import { connect } from 'react-redux';
import * as ActionCreators from './actions';

function App(props) {
  const { count, step, dispatch } = props;
  const inc = () => dispatch(ActionCreators.increment());
  const dec = () => dispatch(ActionCreators.decrement());
  const onChangeStep = ({ target: { value } }) =>
    dispatch(ActionCreators.setStep(Number(value)));
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <input type="number" value={step} onChange={onChangeStep} />
    </>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(App);
