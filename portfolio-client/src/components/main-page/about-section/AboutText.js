import styles from './AboutText.module.css';

const AboutText = () => {
    return(
        <div className={styles["section-content"]}>
            <h3 className="section-title">A propos</h3>
            <div className={styles["section-text"]}>
            Passionné par la programmation depuis mes 14 ans, j'ai pu apprendre en auto-didacte le développement Web et Mobile durant mes années de collège et de lycée. Je suis actuellement en première année de BTS Services Informatiques aux Organisations option Solutions Logicielles et Applications Métiers.<br /><br />

            Je développe principalement des sites Web, soit à l'aide des langages HTML, CSS et PHP, soit avec différent framework Javascript (VueJS, ReactJS pour le front-end et NodeJS pour le back-end).<br />

            Je programme également en Java.<br /><br />

            Vous pouvez également télécharger mon CV au format PDF ci-dessous.
            </div>
            <a href="/files/CV.pdf" target="_blank" className={styles["cv-btn"]}>Télécharger mon CV</a>
        </div>
    );
};

export default AboutText;