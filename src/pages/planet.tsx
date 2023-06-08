import {FC, useEffect, useRef, useState} from "react";
import {useParams} from "react-router-dom";
import {
    ButtonName,
    IPlanetInfo,
    TParameter,
    TPlanetArticle,
} from "../types/planet-info";
import data from "../utils/mocks/data.json";
import styles from "./planet.module.scss";
import iconSource from "../assets/images/icon-source.svg";
import Button from "../components/UI/button/button";
import InfoCard from "../components/info-card/info-card";
import PlanetImage from "../components/planet-image/planetImage";
import PlanetMain from "../components/planet-main/planetMain";

const articles: TPlanetArticle[] = ["overview", "structure", "geology"];
const parameters: TParameter[] = [
    "rotation",
    "revolution",
    "radius",
    "temperature",
];

const Planet: FC = () => {
    const {planetName} = useParams();

    const [planet, setPlanet] = useState<IPlanetInfo | null>(null);
    const [article, setArticle] = useState<TPlanetArticle>("overview");

    useEffect(() => {
        const planet = data.find((planet) => planet.name === planetName);

        planet && setPlanet(planet);
        setArticle("overview");
    }, [planetName]);

    return (
        <>
            {planet && (
                <section className={styles.planet}>
                    <PlanetImage article={article} planet={planet}/>
                    <PlanetMain article={article} planet={planet}/>
                    <nav className={styles.nav}>
                        {articles.map((button, index) => (
                            <Button
                                key={index}
                                number={index + 1}
                                title={ButtonName[button as keyof typeof ButtonName]}
                                planet={planetName as string}
                                onClick={() => setArticle(button)}
                                isActive={button === article}
                            />
                        ))}
                    </nav>
                    <ul className={styles.infoBlock}>
                        {parameters.map((parameter) => (
                            <InfoCard key={parameter} parameter={parameter} planet={planet}/>
                        ))}
                    </ul>
                </section>
            )}
        </>
    );
};

export default Planet;
