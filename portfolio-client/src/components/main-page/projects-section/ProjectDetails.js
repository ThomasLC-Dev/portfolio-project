import Modal from '../../utils/Modal';
import ImageSlider from './ImageSlider';

import styles from './ProjectDetails.module.css';

const ProjectDetails = props => {
    return(
        <Modal className={styles['project-details']} onClose={props.onClose}>
            <ImageSlider className={styles['slider']} images={props.project.images}/>
            <div className={styles.infos}>
                <div className={styles.left}>
                    <h2>{props.project.title}</h2>
                    <br />
                    <p className={styles.description}>{props.project.description}</p>
                </div>
                <div className={styles.right}>
                    <div className={styles.languages}>
                        {props.project.languages.map(language => <img src={language} alt="icon languges" />)}
                    </div>
                    <p className={styles.company}>{props.project.company}</p>
                    {(props.project.github !== '') && <a href={props.project.github} target="_blank" className={styles['github-btn']} rel="noreferrer">GitHub</a>}
                    {(props.project.website !== '') && <a href={props.project.website} target="_blank" className={styles['website-btn']} rel="noreferrer">Accéder au site</a>}
                </div>
            </div>
        </Modal>
    );
}

export default ProjectDetails;