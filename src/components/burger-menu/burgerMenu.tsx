import { FC } from "react";
import { NavLink } from "react-router-dom";
import chevron from "../../assets/images/icon-chevron.svg";
import styles from "./burgerMenu.module.scss";

interface IBurgerMenu {
  items: string[];
}

const BurgerMenu: FC<IBurgerMenu> = ({ items }) => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.nav}>
        {items.map((item) => (
          <li key={item} className={styles.item}>
            <NavLink to={`/${item}`} className={styles.link}>
              <div className={styles.titleWrapper}>
                <div className={styles.circle + ' ' + styles[item]}></div>
                <span className={styles.title}>{item}</span>
              </div>
              <img src={chevron} alt="Arrow." />
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BurgerMenu;
