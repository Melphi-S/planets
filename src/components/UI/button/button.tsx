import { FC } from "react";
import styles from "./button.module.scss";
import classnames from "classnames";

interface IButton {
  number?: number;
  title: string;
  planet: string;
  onClick: () => void;
  isActive: boolean;
  type: 'desktop' | 'mobile'
}

const Button: FC<IButton> = ({ number, title, planet, onClick, isActive, type }) => {
  const buttonClassNames = classnames({
    [styles.button]: true,
    [styles[`button_type_${type}`]]: true,
    [styles.button_inactive]: !isActive && type === 'desktop',
    [styles[`${planet}_type_${type}`]]: isActive,
  });

  return (
    <>
      { (
        <button type="button" onClick={onClick} className={buttonClassNames}>
          {number && (
            <span className={styles.button__number}>
              {String(number).padStart(2, "0")}
            </span>
          )}
          {title}
        </button>
      )}
    </>
  );
};

export default Button;
