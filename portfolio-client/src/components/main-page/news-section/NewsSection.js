import ThemeColumn from './ThemeColumn';

import styles from './NewsSection.module.css';

const NEWS_LIST = [
    {
        id: 0,
        name: 'Android',
        articles: [
            {
                id: 0,
                title: 'Article 1',
                date: '26/01',
                url: '',
                image: '',
                description: 'Description article 1'
            },
            {
                id: 1,
                title: 'Article 2',
                date: '26/01',
                url: '',
                image: '',
                description: 'Description article 2'
            },
            {
                id: 2,
                title: 'Article 3',
                date: '26/01',
                url: '',
                image: '',
                description: 'Description article 3'
            },
            {
                id: 3,
                title: 'Article 4',
                date: '26/01',
                url: '',
                image: '',
                description: 'Description article 4'
            }
        ]
    },
    {
        id: 1,
        name: 'Linux',
        articles: [
            {
                id: 0,
                title: 'Article 1',
                date: '26/01',
                url: '',
                image: '',
                description: 'Description article 1'
            },
            {
                id: 1,
                title: 'Article 2',
                date: '26/01',
                url: '',
                image: '',
                description: 'Description article 2'
            },
            {
                id: 2,
                title: 'Article 3',
                date: '26/01',
                url: '',
                image: '',
                description: 'Description article 3'
            },
            {
                id: 3,
                title: 'Article 4',
                date: '26/01',
                url: '',
                image: '',
                description: 'Description article 4'
            }
        ]
    },
    {
        id: 2,
        name: 'Intelligence Artificielle',
        articles: [
            {
                id: 0,
                title: 'Article 1',
                date: '26/01',
                url: '',
                image: '',
                description: 'Description article 1'
            },
            {
                id: 1,
                title: 'Article 2',
                date: '26/01',
                url: '',
                image: '',
                description: 'Description article 2'
            },
            {
                id: 2,
                title: 'Article 3',
                date: '26/01',
                url: '',
                image: '',
                description: 'Description article 3'
            },
            {
                id: 3,
                title: 'Article 4',
                date: '26/01',
                url: '',
                image: '',
                description: 'Description article 4'
            }
        ]
    }
];

const SkillsSection = () => {

    return(
        <section className={styles.news} id="news">
            <h3 className="section-title">Veille technologique</h3>
            <div className={styles['news-column']}>
                <ThemeColumn title={NEWS_LIST[0].name} articles={NEWS_LIST[0].articles} />
                <ThemeColumn title={NEWS_LIST[1].name} articles={NEWS_LIST[1].articles} />
                <ThemeColumn title={NEWS_LIST[2].name} articles={NEWS_LIST[2].articles} />
            </div>
            <a href="https://1drv.ms/x/s!Aq1sIoKVIjq7jQ3vHziFD9Rq61UK?e=x8Qiez" target="_blank" rel="noreferrer" className={styles['news-btn']}>Veille Technologique</a>
        </section>
    );
};

export default SkillsSection;