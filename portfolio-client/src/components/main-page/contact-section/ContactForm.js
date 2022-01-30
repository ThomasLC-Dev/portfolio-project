import styles from './ContactForm.module.css';

const ContactForm = () => {

    const submitMail = () => {
        console.log("mail");
    }

    return(
        <div className={styles["contact-form"]}>
            <h4>Message</h4>
            <form onSubmit={submitMail}>
                <input required disabled type="text" name="name" placeholder="Nom et Prénom" />
                <input required disabled type="email" name="email" placeholder="Email" />
                <textarea required disabled placeholder="Votre message"></textarea>
                <input disabled type="submit" value="Envoyer"/>
            </form>
        </div>
    );
};

export default ContactForm;