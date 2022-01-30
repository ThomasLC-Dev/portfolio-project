import mailIcon from '../../../assets/icons/ic_mail.png';
import telIcon from '../../../assets/icons/ic_call.png';
import linkedinIcon from '../../../assets/icons/ic_linkedin.png';

import styles from './ContactInfo.module.css';

const ContactInfo = () => {
    return(
        <div className={styles["contact-info"]}>
            <h4>Informations</h4>
            <div className={styles.item}>
                <img src={mailIcon} alt="icon mail"/>
                <div className={styles.text}>
                    <h5>Email</h5>
                    <p>thomas.le-corvec@outlook.com</p>
                </div>
            </div>
            <div className={styles.item}>
                <img src={telIcon} alt="icon tel"/>
                <div className={styles.text}>
                    <h5>Numéro</h5>
                    <p>06 61 87 98 81</p>
                </div>
            </div>
            <div className={styles.item}>
                <img src={linkedinIcon} alt="icon linkedin"/>
                <div className={styles.text}>
                    <h5>Linkedin</h5>
                    <p><a href="https://www.linkedin.com/in/thomas-le-corvec-b029a21b8/" target="_blank" rel="noreferrer">Thomas LE CORVEC</a></p>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;