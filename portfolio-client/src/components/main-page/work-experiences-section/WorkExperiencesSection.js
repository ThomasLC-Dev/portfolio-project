import { useState, useEffect } from 'react';
import axios from 'axios';

import WorkExperience from './WorkExperience';

import styles from './WorkExperiencesSection.module.css';

const WorkExperiencesSection = () => {

    const [workExperiences, setWorkExperiences] = useState([]);

    useEffect(() => {
        axios.get('https://portfolio-tlc-dev.herokuapp.com/work-experiences/').then(response => {
            setWorkExperiences(response.data);
        });
    },[]);
    
    const workExperiencesList = workExperiences.map(we => <WorkExperience key={we._id} workExperience={we} />)

    return(
        <section className={styles.workexperiences} id="workexperiences">
            <h3 className="section-title">Mes expériences professionnelles</h3>

            <div className={styles["work-experiences-list"]}>
                {workExperiencesList.reverse()}
            </div>
        </section>
    );
};

export default WorkExperiencesSection;