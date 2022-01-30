import { useContext } from 'react';

import Modal from '../../utils/Modal';
import ImageSlider from './ImageSlider';

import styles from './ProjectDetails.module.css';

import GlobalContext from '../../../store/global-context';

const ProjectDetails = props => {

    const ctx = useContext(GlobalContext);

    const project = ctx.projectsList[props.projectId];

    return(
        <Modal className={styles['project-details']} onClose={props.onClose}>
            <ImageSlider className={styles['slider']} images={project.images}/>
            <div className={styles.infos}>
                <div className={styles.left}>
                    <h2>{project.title}</h2>
                    <br />
                    <p className={styles.description}>{project.description}</p>
                </div>
                <div className={styles.right}>
                    <div className={styles.languages}>
                        {project.languages.map(language => <img src={`/icons/${language}.png`} alt="icon languges" />)}
                    </div>
                    <p className={styles.company}>{project.company}</p>
                    {(project.github !== '') && <a href={project.github} target="_blank" className={styles['github-btn']} rel="noreferrer">GitHub</a>}
                    {(project.website !== '') && <a href={project.website} target="_blank" className={styles['website-btn']} rel="noreferrer">Accéder au site</a>}
                </div>
            </div>
        </Modal>
    );
}

export default ProjectDetails;