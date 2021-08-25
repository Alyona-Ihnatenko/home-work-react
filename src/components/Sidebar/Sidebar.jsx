import { Menu } from '../Menu/Menu';
import css from '../Sidebar/Sidebar.module.css';

function Sidebar() {
  return (
    <div className={css.sidebar}>
      <Menu />
    </div>
  );
}

export { Sidebar };
