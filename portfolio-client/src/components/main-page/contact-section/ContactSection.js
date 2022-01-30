import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

import styles from './ContactSection.module.css';

const ContactSection = () => {
    return(
        <section className={styles.contact} id="contact">
            <h3 className="section-title">Contact</h3>
            <div className={styles["contact-content"]}>
                <ContactInfo />
                <ContactForm />
            </div>
        </section>
    );
};

export default ContactSection;