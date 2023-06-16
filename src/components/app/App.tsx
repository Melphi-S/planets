import { useState } from "react";
import { useScrollbarWidth } from "../../hooks/useScrollbarWidth";
import Header from "../header/header";
import { Navigate, Route, Routes } from "react-router-dom";
import styles from "./app.module.scss";
import Planet from "../../pages/planet";

function App() {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const scrollbarWidth = useScrollbarWidth();

  const toggleMenu = () => {
    if (!burgerMenu) {
      setBurgerMenu(true);
      document.body.style.overflow = "hidden";
    } else {
      setBurgerMenu(false);
      document.body.style.overflow = "unset";
    }
  };

  return (
    <div
      className={styles.app}
      // style={{ paddingRight: burgerMenu ? scrollbarWidth : 0 }}
    >
      <Header burgerMenu={burgerMenu} onClick={toggleMenu} />
      <Routes>
        <Route path="/" element={<Navigate to="Mercury" replace />} />
        <Route path=":planetName" element={<Planet />} />
      </Routes>
    </div>
  );
}

export default App;
