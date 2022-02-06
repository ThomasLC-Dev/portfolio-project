import {useState, useEffect} from 'react';

import styles from './Header.module.css';

const Header = () => {

    const [showSticky, setShowSticky] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            (window.scrollY > 0) ? setShowSticky(true) : setShowSticky(false);
        });
    }, []);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return(
        <header className={showSticky && styles.sticky}>
            <a href="/#banner" class={styles.logo}>Portfolio</a>
            <nav>
                <ul class={`${styles.menu} ${showMenu && styles.open}`}>
                    <li><a href="/#aboutme" onClick={toggleMenu}>A propros</a></li>
                    <li><a href="/#workexperiences" onClick={toggleMenu}>Expériences</a></li>
                    <li><a href="/#projects" onClick={toggleMenu}>Projets</a></li>
                    <li><a href="/#skills" onClick={toggleMenu}>Compétences</a></li>
                    <li><a href="/#contact" onClick={toggleMenu}>Contact</a></li>
                </ul>
            </nav>
            <div className={styles["menu-icon"]} onClick={toggleMenu}>
                <div className={`${styles.line} ${showMenu && styles.open}`}></div>
                <div className={`${styles.line} ${showMenu && styles.open}`}></div>
                <div className={`${styles.line} ${showMenu && styles.open}`}></div>
            </div>
        </header>
    );
};

export default Header;