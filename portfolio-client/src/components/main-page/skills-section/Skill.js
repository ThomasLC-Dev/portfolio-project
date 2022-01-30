import styles from './Skill.module.css';

const Skill = props => {
    return(
        <div className={styles.skill} style={{border: '10px solid '+props.skill.color}}>
            <img src={`/icons/${props.skill.name}.png`} alt="icon skill" />
        </div>
    );
};

export default Skill;