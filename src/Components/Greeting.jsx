import React from 'react';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      name: props.name,
    };
  }

  clickHandler() {
    if (this.state.name === 'Me') this.props.onHide();
    this.setState({ name: 'Me' });
  }

  render() {
    return (
      <h1 onClick={this.clickHandler.bind(this)}>Hello {this.state.name}</h1>
    );
  }
}

export default Greeting;
