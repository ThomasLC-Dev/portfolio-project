import { useEffect, useState } from 'react';
import axios from 'axios';

import Project from './Project';
import ProjectDetails from './ProjectDetails';

import styles from './ProjectsSection.module.css';

const ProjectSection = () => {

    const [projectDetailsIsShown, setProjectDetailsIsShown] = useState(false);
    const [project, setProject] = useState();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('https://portfolio-tlc-dev.herokuapp.com/projects/').then(response => {
            setProjects(response.data);
        });
    },[]);

    const showProjectDetails = (id) => {
        axios.get('https://portfolio-tlc-dev.herokuapp.com/projects/'+id).then(response => {
            setProject(response.data);
            setProjectDetailsIsShown(true);
        });
    }

    const hideProjectDetails = () => {
        setProjectDetailsIsShown(false);
        setProject();
    }

    console.log(projects);

    const projectsList = projects.map(project => <Project onShowProjectDetails={showProjectDetails} key={project._id} project={project} />)

    return(
        <section className={styles.projects} id="projects">
            {projectDetailsIsShown && <ProjectDetails project={project} onClose={hideProjectDetails} />}
            <h3 className="section-title">Mes projets</h3>

            <div className={styles["projects-list"]}>
                {projectsList.reverse()}
            </div>
        </section>
    );
};

export default ProjectSection;