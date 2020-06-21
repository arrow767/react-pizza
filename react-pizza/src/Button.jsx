import React from 'react';
import logoSvg from './assets/img/pizza-logo.svg';

class Button extends React.Component {
  render() {
    return (
      <button className={`button ${this.props.outline ? 'button--outline' : ''}`}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
