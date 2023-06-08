import Navigation from '../navigation/navigation';
import styles from './header.module.scss'

const Header = () => {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>the planets</h1>
            <Navigation/>
        </div>
    );
};

export default Header;