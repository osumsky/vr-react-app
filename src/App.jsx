import { connect } from 'react-redux';
import * as ActionCreators from './actions';

function App(props) {
  const { count, step, incrementAction, decrementAction, setStepAction } =
    props;
  const setStep = ({ target: { value } }) => setStepAction(Number(value));
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={incrementAction}>+</button>
      <button onClick={decrementAction}>-</button>
      <input type="number" value={step} onChange={setStep} />
    </>
  );
}

// берем из store (initValues) только те свойства которые нам надо
const mapStateToProps = ({ count, step }) => {
  return { count, step };
};

// по умолчанию из store передается только метод dispatch
// здесь мы подмешиваем к App props сразу методы для работы c dispatch
const mapDispatchToProps = (dispatch) => ({
  incrementAction: () => dispatch(ActionCreators.increment()),
  decrementAction: () => dispatch(ActionCreators.decrement()),
  setStepAction: (newStep) => dispatch(ActionCreators.setStep(newStep)),
});

// export default connect(mapStateToProps)(App)
// connect может содержать только mapStateToProps
// и метод dispatch передается автоматически сразу в props of App

export default connect(mapStateToProps, mapDispatchToProps)(App);
