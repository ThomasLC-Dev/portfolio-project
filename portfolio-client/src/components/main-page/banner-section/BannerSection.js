import img from '../../../assets/img/code.jpg';

import styles from './BannerSection.module.css';

const BannerSection = () => {
    return(
        <section className={styles.banner} id="banner" style={{background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${img})`, backgroundSize: 'cover'}}>
            <div className="banner-text-box">
                <h1>Thomas LE CORVEC</h1>
                <h2>Développeur Web</h2>
                <a href="#aboutme" className={styles["banner-btn"]}>A propos</a>
            </div>
        </section>
    );
};

export default BannerSection;