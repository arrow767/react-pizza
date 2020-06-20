import React from 'react';
import logoSvg from './assets/img/pizza-logo.svg';

class Button extends React.Component {
  render() {
    return <button>{this.props.text}</button>;
  }
}

export default Button;
