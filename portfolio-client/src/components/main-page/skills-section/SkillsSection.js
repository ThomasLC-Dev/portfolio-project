import { useEffect, useState } from 'react';
import axios from 'axios';
import Skill from './Skill';

import styles from './SkillsSection.module.css';

const SkillsSection = () => {

    const [skills, setSkills] = useState([]);

    useEffect(() => {
        axios.get('https://portfolio-tlc-dev.herokuapp.com/skills/').then(response => {
            setSkills(response.data);
        });
    },[]);

    console.log(skills);


    const skillsList = skills.map(skill => <Skill key={skill._id} skill={skill} />)

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