import dateIcon from '../../assets/icons/ic_date.png';

import styles from './Banner.module.css';

const Banner = props => {
    return(
        <section className={styles.banner} id="banner" style={{background: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url(${props.img})`, backgroundSize: 'cover'}}>
            <section className="banner-text-box">
                <h1>{props.company}</h1>
                <h2 className={styles.date}><img src={dateIcon} alt="icon date" />{props.startDate} - {props.endDate}</h2>
            </section>
        </section>
    );
}

export default Banner;