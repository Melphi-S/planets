import {useState, useEffect, FC} from "react";
import {useResize} from "../../hooks/useResize";
import BurgerMenu from "../burger-menu/burgerMenu";
import Navigation from "../navigation/navigation";
import BurgerButton from "../UI/burger-button/burgerButton";
import data from "../../utils/mocks/data.json";
import styles from "./header.module.scss";

interface IHeader {
    burgerMenu: boolean;
    onClick: () => void;
}

const Header: FC<IHeader> = ({burgerMenu, onClick}) => {
    const {isMobileScreen} = useResize();

    const [items, setItems] = useState<string[]>([]);

    useEffect(() => {
        const planets = data.map((planet) => planet.name);

        setItems(planets);
    }, []);

    return (
        <div className={styles.header}>
            <h1 className={styles.title}>the planets</h1>
            {!isMobileScreen ? (
                <Navigation/>
            ) : (
                <BurgerButton onClick={onClick} isBurgerOpen={burgerMenu}/>
            )}
            {burgerMenu && <BurgerMenu items={items}/>}
        </div>
    );
};

export default Header;
