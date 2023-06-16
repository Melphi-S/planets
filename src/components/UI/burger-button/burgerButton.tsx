import { FC } from "react";
import styles from "./burgerButton.module.scss";
import { ReactComponent as BurgerIcon} from '../../../assets/images/icon-hamburger.svg'

interface IBurgerButton {
  onClick: () => void;
  isBurgerOpen: boolean;
}

const BurgerButton: FC<IBurgerButton> = ({ onClick, isBurgerOpen }) => {

  return (
        <button type="button" onClick={onClick} className={styles.button}>
            <BurgerIcon className={isBurgerOpen ? styles.icon_fade : ''}/>
        </button>
  );
};

export default BurgerButton;
