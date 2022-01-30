import { useContext } from 'react';

import WorkExperience from './WorkExperience';

import GlobalContext from '../../../store/global-context';

import styles from './WorkExperiencesSection.module.css';

const WorkExperiencesSection = () => {

    const ctx = useContext(GlobalContext);

    const workExperiencesList = ctx.workExperiencesList.map(we => <WorkExperience id={we.id} workExperience={we} />)

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