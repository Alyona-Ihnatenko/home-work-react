import { Main } from '../Main/Main';
import { Sidebar } from '../Sidebar/Sidebar';
import { Menu } from '../Menu/Menu';
import css from '../Wrapper/Wrapper.module.css';

function Wrapper() {
  return (
    <div className={css.wrapper}>
      <Sidebar />
      <Main />
    </div>
  );
}
export { Wrapper };
