import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import data from "../../utils/mocks/data.json";
import styles from "./navigation.module.scss";

const Navigation = () => {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    const planets = data.map((planet) => planet.name);

    setItems(planets);
  }, []);

  return (
    <nav>
      <ul className={styles.nav}>
        {items.map((item) => (
          <li key={item}>
            <NavLink to={`/${item}`} className={styles.link}>
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
