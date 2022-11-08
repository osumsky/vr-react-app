import React from 'react';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    console.log(this);
    if (this.state.name === 'Me')
     this.props.onHide();
    this.setState({ name: 'Me' });
  }

  render() {
    return <h1 onClick={this.clickHandler}>Hello {this.state.name}</h1>;
  }
}

export default Greeting;
