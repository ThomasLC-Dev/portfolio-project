import cityIcon from '../../../assets/icons/ic_city.png';
import dateIcon from '../../../assets/icons/ic_date.png';
import personIcon from '../../../assets/icons/ic_person.png';

import styles from './WorkExperience.module.css';

const WorkExperience = props => {
    return(
        <div className={styles["work-experience"]}>
            <div className={styles.header}>
                <div className={styles.left}>
                    <span className={styles.company}>{props.workExperience.company}</span>
                </div>
                <div className={styles.right}>
                    <span className={styles.city}><img src={cityIcon} alt="icon city" />{props.workExperience.city}</span>
                    <span className={styles.type}><img src={personIcon} alt="icon person" />{props.workExperience.type}</span>
                </div>
            </div>
            <span className={styles.date}><img src={dateIcon} alt="icon date" />{props.workExperience.startDate} - {props.workExperience.endDate}</span>
            <ul className={styles.tasks}>
                {props.workExperience.tasks.map(task => (task.subtasks === undefined) ? <li>{task.name}</li> : <li>{task.name} : <ul>{task.subtasks.map(subtask => <li>{subtask}</li>)}</ul></li>)}
            </ul>
        </div>
    );
};

export default WorkExperience;