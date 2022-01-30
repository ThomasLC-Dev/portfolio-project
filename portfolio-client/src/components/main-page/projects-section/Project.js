import styles from './Project.module.css';

const Project = props => {

    const clickMoreButtonHandler = () => {
        props.onShowProjectDetails(props.id);
    }

    return(
        <div className={styles.project}>
            <div className={styles.header} style={{background: '#FFF url('+props.project.thumbnail+')', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            </div>
            <div className={styles.infos}>
                <div className={styles.languages}>
                    {props.project.languages.map(language => <img src={`/icons/${language}.png`} alt="icon language" />)}
                </div>
                <p className={styles.description}>
                    {props.project.description}
                </p>
                <div className={styles["more-btn"]} onClick={clickMoreButtonHandler}>En savoir plus</div>
            </div>
        </div>
    );
};

export default Project;