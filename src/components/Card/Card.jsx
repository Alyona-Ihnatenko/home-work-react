import React from 'react';
import { Button } from '../Button/Button';

class Card extends React.Component {
  handleClick = () => {
    const { name, handleClick } = this.props;
    handleClick(name);
  };
  render() {
    const { name, buttonName } = this.props;
    return (
      <div key={name}>
        <span>{name}</span>
        <Button buttonName={buttonName} onClick={this.handleClick} />
      </div>
    );
  }
}
export { Card };
