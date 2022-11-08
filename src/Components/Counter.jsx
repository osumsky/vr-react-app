import React from 'react';

class ChildClass extends React.Component {
  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnMount');
  }

  render() {
    return <h2>I am a child</h2>;
  }
}

class Counter extends React.Component {
  state = { counter: 0 };

  render() {
    const { counter } = this.state;

    return (
      <>
        <h1> Parent {counter}</h1>
        <button
          onClick={() => {
            if (counter > 4) this.setState({ counter: 0 });
            else this.setState({ counter: counter + 1 });
          }}
        >
          Test
        </button>
        {counter < 3 ? <ChildClass /> : 'Child removed'}
      </>
    );
  }
}

export default Counter;
