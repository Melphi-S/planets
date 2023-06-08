import { FC } from "react";
import {
  IPlanetInfo,
  TPlanetArticle,
} from "../../types/planet-info";
import styles from "./planetImage.module.scss";

interface IPlanetImage {
    article: TPlanetArticle,
    planet: IPlanetInfo
}

const PlanetImage: FC<IPlanetImage> = ({ article, planet}) => {
  return (
    <div key={planet.name} className={styles.imageWrapper}>
      <img
        src={
          article === "structure"
            ? planet.images.structure
            : planet.images.overview
        }
        alt={article}
        className={planet.name}
      ></img>
      {article === "geology" && (
        <img
          src={planet.images.geology}
          alt="geology"
          className={styles.image_geology}
        ></img>
      )}
    </div>
  );
};

export default PlanetImage;
