import AboutText from './AboutText';

import profil from '../../../assets/img/photo.jpg'

import styles from './AboutSection.module.css';

const AboutSection = () => {
    return(
        <section className={styles.aboutme} id="aboutme">
            <div className={styles["section-content-box"]}>
                <AboutText />
                <img className={styles["section-content-img"]} src={profil} alt="Thomas" />
            </div>
        </section>
    );
};

export default AboutSection;