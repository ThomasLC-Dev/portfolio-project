import { useContext, useState } from 'react';

import Project from './Project';
import ProjectDetails from './ProjectDetails';

import GlobalContext from '../../../store/global-context';

import styles from './ProjectsSection.module.css';

const ProjectSection = () => {

    const [projectDetailsIsShown, setProjectDetailsIsShown] = useState(false);
    const [projectDetailsId, setProjectDetailsId] = useState(-1);

    const ctx = useContext(GlobalContext);

    const showProjectDetails = (id) => {
        setProjectDetailsIsShown(true);
        setProjectDetailsId(id);
        console.log("test");
    }

    const hideProjectDetails = () => {
        setProjectDetailsIsShown(false);
        setProjectDetailsId(-1);
    }

    const projectsList = ctx.projectsList.map(project => <Project onShowProjectDetails={showProjectDetails} id={project.id} project={project} />)

    return(
        <section className={styles.projects} id="projects">
            {projectDetailsIsShown && <ProjectDetails projectId={projectDetailsId} onClose={hideProjectDetails} />}
            <h3 className="section-title">Mes projets</h3>

            <div className={styles["projects-list"]}>
                {projectsList.reverse()}
            </div>
        </section>
    );
};

export default ProjectSection;