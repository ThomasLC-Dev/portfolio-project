import Article from './Article';

import styles from './ThemeColumn.module.css';

const ThemeColumn = props => {

    const newsList = props.articles.map(news => <Article id={news.id} article={news} />)

    return(
        <div className={styles.column}>
            <h2 className={styles['column-title']}>{props.title}</h2>
            <span className={styles.separator}></span>
            <div className={styles.list}>
                {newsList}
            </div>
        </div>
    );
};

export default ThemeColumn;