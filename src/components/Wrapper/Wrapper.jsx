import { Main } from '../Main/main';
import { Sidebar } from '../Sidebar/Sidebar';
import { Menu } from '../Menu/Menu';
import css from '../Wrapper/Wrapper.module.css';

function Wrapper() {
  return (
    <div className={css.wrapper}>
      <Sidebar />
      <Main />
      <Menu />
    </div>
  );
}
export { Wrapper };
