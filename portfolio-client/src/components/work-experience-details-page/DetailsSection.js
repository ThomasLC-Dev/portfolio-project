import presentationImg from '../../assets/img/presentation.png';
import tasksImg from '../../assets/img/tasks.png';
import conclusionImg from '../../assets/img/conclusion.png';
import rapportImg from '../../assets/img/rapport.png';

import styles from './DetailsSection.module.css';

const DetailsSection = props => {
    return(
        <section className={styles["details-section"]}>
            <table>
                <tr className={styles.row}>
                    <td>
                        <p><strong>Présentation</strong><br />{props.presentationText}</p>
                    </td>
                    <td>
                        <img src={presentationImg} alt="presentation" />
                    </td>
                </tr>
            </table>
            <div className={styles.separator}></div>
            <table>
                <tr className={styles.row}>
                    <td>
                        <img src={tasksImg} alt="contexte" />
                    </td>
                    <td>
                        <p><strong>Contexte</strong><br />{props.contextText}</p>
                    </td>
                </tr>
            </table>
            <div className={styles.separator}></div>
            <table>
                <tr className={styles.row}>
                    <td>
                        <p><strong>Conclusion</strong><br />{props.conclusionText}</p>
                    </td>
                    <td>
                        <img src={conclusionImg} alt="conclusion" />
                    </td>
                </tr>
            </table>
            <div className={styles.separator}></div>
            <table>
                <tr className={styles.row}>
                    <td>
                        <img src={rapportImg} alt="rapport" />
                    </td>
                    <td>
                        <a className={styles["download-rapport"]} target="_blank" href={props.rapportLink} rel="noreferrer">Rapport de stage</a>
                    </td>
                </tr>
            </table>
        </section>
    )
}

export default DetailsSection;