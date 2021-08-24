import css from './Menu.module.css';

import { menuConfig } from '../../utils/menu';

function Menu() {
  return (
    <div>
      {menuConfig.map(menuItem => (
        <div key={menuItem.id} className={css.menuItem}>
          {menuItem.icon}
          <span className={css.menuName}>{menuItem.name}</span>
        </div>
      ))}
    </div>
  );
}

export { Menu };
