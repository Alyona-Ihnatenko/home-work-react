import React from 'react';
import { Button } from '../Button/Button';
import { Title } from '../Title/Title';
import css from '../Form/Form.module.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }
  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.reset();
  };

  reset = () => {
    this.setState({ value: '' });
  };
  render() {
    const { value } = this.state;
    // const { onSubmit } = this.props;
    return (
      <form style={{ marginBottom: '32px' }} onSubmit={this.onSubmit}>
        <p>Добавление города</p>
        <input
          className={css.input}
          type="text"
          value={value}
          onChange={e => {
            console.log('value', e.currentTarget.value);
            this.setState({ value: e.currentTarget.value });
          }}
        />
        <Button type="submit" buttonName="Добавить " />
      </form>
    );
  }
}
export { Form };
