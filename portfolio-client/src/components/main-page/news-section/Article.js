import styles from './Article.module.css';

const Article = props => {
    return(
        <div className={styles.article}>
            <div className={styles.img}>

            </div>
            <div className={styles.infos}>
                <div className={styles.top}>
                    <h2>{props.article.title}</h2>
                    <span className={styles.date}>
                        {props.article.date}
                    </span>
                </div>
                <div className={styles.bottom}>
                    {props.article.description}
                </div>
            </div>
        </div>
    );
};

export default Article;