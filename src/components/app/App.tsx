import {useEffect, useState} from "react";
import Header from "../header/header";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import styles from "./app.module.scss";
import Planet from "../../pages/planet";

function App() {
    const [burgerMenu, setBurgerMenu] = useState(false);
    const {pathname} = useLocation();

    const toggleMenu = () => {
        if (!burgerMenu) {
            setBurgerMenu(true);
            document.body.style.overflow = "hidden";
        } else {
            setBurgerMenu(false);
            document.body.style.overflow = "unset";
        }
    };

    useEffect(() => {
        setBurgerMenu(false);
    }, [pathname])

    return (
        <div
            className={styles.app}
        >
            <Header burgerMenu={burgerMenu} onClick={toggleMenu}/>
            <Routes>
                <Route path="/" element={<Navigate to="Mercury" replace/>}/>
                <Route path=":planetName" element={<Planet/>}/>
            </Routes>
        </div>
    );
}

export default App;
