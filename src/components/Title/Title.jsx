import css from '../Title/Title.module.css';

function Title({ title }) {
  return <h3 className={css.title}>{title}</h3>;
}
export { Title };
