import {FC} from "react";
import styles from "./planetMain.module.scss";
import iconSource from "../../assets/images/icon-source.svg";
import {IPlanetInfo, TPlanetArticle} from "../../types/planet-info";

interface IPlanetMain {
    article: TPlanetArticle,
    planet: IPlanetInfo
}

const Planet: FC<IPlanetMain> = ({article, planet}) => {
    return (
        <div className={styles.main}>
            <h2 key={planet.name} className={styles.title}>{planet.name}</h2>
            <article className={styles.text}>
                <p key={planet.name + article} className={styles.text__info}>{planet[article].content}</p>
                <span className={styles.text__source}>
              Source :{" "}
                    <a
                        href={planet[article].source}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.text__link}
                    >
                Wikipedia
              </a>
              <img src={iconSource} alt="Source icon."/>
            </span>
            </article>
        </div>

    );
};

export default Planet;
