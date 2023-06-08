import { FC } from "react";
import styles from "./button.module.scss";
import classnames from "classnames";

interface IButton {
  number: number;
  title: string;
  planet: string;
  onClick: () => void;
  isActive: boolean;
}

const Button: FC<IButton> = ({ number, title, planet, onClick, isActive }) => {
  const buttonClassNames = classnames({
    [styles.button]: true,
    [styles.button_inactive]: !isActive,
    [styles[planet]]: isActive
  });

  return (
    <button type="button" onClick={onClick} className={buttonClassNames}>
      <span className={styles.button__number}>{number}</span>
      {title}
    </button>
  );
};

export default Button;
