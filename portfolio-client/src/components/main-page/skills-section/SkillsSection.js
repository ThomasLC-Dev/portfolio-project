import Skill from './Skill';

import styles from './SkillsSection.module.css';

const SKILLS_LIST = [
    {
        id: 0,
        name: 'html',
        percentage: 90,
        color: '#E34F26'
    },
    {
        id: 1,
        name: 'css',
        percentage: 80,
        color: '#2196F3'
    },
    {
        id: 2,
        name: 'php',
        percentage: 75,
        color: '#777BB3'
    },
    {
        id: 3,
        name: 'database',
        percentage: 50,
        color: '#525762'
    },
    {
        id: 4,
        name: 'java',
        percentage: 90,
        color: '#D28017'
    },
    {
        id: 5,
        name: 'javascript',
        percentage: 80,
        color: '#F7DF1E'
    },
    {
        id: 6,
        name: 'react',
        percentage: 75,
        color: '#61D9FA'
    },
    {
        id: 7,
        name: 'nodejs',
        percentage: 50,
        color: '#6ABD49'
    },
];

const SkillsSection = () => {

    const skillsList = SKILLS_LIST.map(skill => <Skill id={skill.id} skill={skill} />)

    return(
        <section className={styles.skills} id="skills">
            <h3 className="section-title">Mes compétences</h3>
            
            <div className={styles["skills-list"]}>
                {skillsList}
            </div>

            <a href="https://1drv.ms/x/s!Aq1sIoKVIjq7ihFl63VD9TDq28bI?e=dQGpGP" target="_blank" rel="noreferrer" className={styles['skill-btn']}>Tableau de synthèse</a>
        </section>
    );
};

export default SkillsSection;