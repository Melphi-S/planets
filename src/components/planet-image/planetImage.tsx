import {FC} from "react";
import {
    IPlanetInfo,
    TPlanetArticle,
} from "../../types/planet-info";
import styles from "./planetImage.module.scss";

interface IPlanetImage {
    article: TPlanetArticle,
    planet: IPlanetInfo
}

const PlanetImage: FC<IPlanetImage> = ({article, planet}) => {
    return (
        <div key={planet.name} className={styles.imageWrapper}>
            <img
                src={
                    require(`../../assets/images/planet-${planet.name.toLowerCase()}${article === "structure" ? '-internal' : ''}.svg`)
                }
                alt={article}
                className={styles[planet.name]}
            ></img>
            {article === "geology" && (
                <img
                    src={require(`../../assets/images/geology-${planet.name.toLowerCase()}.png`)}
                    alt="geology"
                    className={styles.image_geology}
                ></img>
            )}
        </div>
    );
};

export default PlanetImage;
