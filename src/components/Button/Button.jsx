import css from '../Button/Button.module.css';

function Button({ type, onClick, buttonName }) {
  return (
    <button type={type} className={css.button} onClick={onClick}>
      {buttonName}
    </button>
  );
}

export { Button };
