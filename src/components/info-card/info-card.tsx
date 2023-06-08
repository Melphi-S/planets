import { FC } from "react";
import { CardName, IPlanetInfo, TParameter } from "../../types/planet-info";
import styles from "./info-card.module.scss";

interface IInfoCard {
  planet: IPlanetInfo;
  parameter: TParameter;
}

const InfoCard: FC<IInfoCard> = ({ planet, parameter }) => {
  return (
    <li key={planet.name + parameter} className={styles.card}>
      <h3 className={styles.title}>
        {CardName[parameter as keyof typeof CardName]}
      </h3>
      <p className={styles.info}>{planet[parameter]}</p>
    </li>
  );
};

export default InfoCard;
