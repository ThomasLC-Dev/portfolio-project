import GlobalContext from './global-context';

const WORK_EXPERIENCES_LIST = [
    {
        id: 0,
        company: 'Mairie',
        city: 'Auray',
        startDate: '3 Décembre 2018',
        endDate: '21 Décembre 2018',
        type: 'Stage',
        tasks: [
            {name: "Réalisation d'un plan du réseau"},
            {name: "Utilisation de la console des switchs Alcatel-Lucent et Cisco"},
            {name: "Utilisation de GLPI"}
        ]
    },
    {
        id: 1,
        company: 'Infonet Media',
        city: 'Portsmouth, Royaume-Uni',
        startDate: '4 Mars 2019',
        endDate: '5 Avril 2019',
        type: 'Stage',
        tasks: [
            {name: "Création et configuration d'un site web de e-commerce via WordPress"},
            {name: "Configuration d'un système de membres et d'un système d'achat en ligne sur WordPress"}
        ]
    },
    {
        id: 2,
        company: 'Ouest Boissons',
        city: 'Auray',
        startDate: '4 Novembre 2019',
        endDate: '29 Novembre 2019',
        type: 'Stage',
        tasks: [
            {name: "Installation et configuration de Nagios"},
            {name: "Installation et configuration de GLPI (Inventaire et déploiement de paquets avec Fusion Inventory)"},
            {name: "Scripts Bash"},
            {name: "Haute disponibilité (Heartbeat / DRBD)"},
        ]
    },
    {
        id: 3,
        company: 'Mairie',
        city: 'Auray',
        startDate: '20 Janvier 2020',
        endDate: '14 Février 2020',
        type: 'Stage',
        tasks: [
            {name: "Test de compatibilité des logiciels métiers"},
            {name: "Mise en place de procédure d'installation"},
            {name: "Création de GPO / Scripts PowerShell"},
            {name: "Inventaire du parc"},
            {name: "Installation et configuration de Nagios"}
        ]
    },
    {
        id: 4,
        company: 'Envie de voyages',
        city: 'Auray',
        startDate: '25 Mai 2021',
        endDate: '25 Juin 2021',
        type: 'Stage',
        img: "/work-experiences-img/envie-de-voyages/banner.png",
        tasks: [
            {name: "Modification de sites sous Wordpress (Système de cagnotte, modification de la mise en page)"},
            {name: "Réalisation de procédure utilisateur"},
            {
                name: "Modification d'un site web HTML/CSS/Javascript/PHP",
                subtasks: [
                    "Création, modification et affichage (PDF) de devis, contrats, convocations, etc...",
                    "Modification de la base de données pour correspondre aux nouvelles attentes client",
                    "Création d'un système d'extraction de données comptables au format Excel"
                ]
            }
        ],
        presentationText: 'L’entreprise MLG Voyages est une agence de voyage sur mesure, sous la forme juridique d’une EURL. Elle permet aux gens de créer leur voyage sur mesure, en se basant sur leurs gôuts et leurs envies.',
        contextText: 'Durant mon stage, ma principale mission a été la modification du logiciel interne en PHP afin d\'y corriger ses principales erreurs et d\'y ajouter des fonctionnalités telles que : l\'extraction de données, l\'archivage, le stockage d\'informations en base de données et la génération de fichiers PDF.',
        conclusionText: 'Ce stage m’aura apporté beaucoup sur le plan professionnel mais également sur le plan personnel, en me permettant d’évoluer techniquement, d’acquérir de nouvelles compétences, tel que la gestion d’un projet au sein d’une entreprise, la développement et son organisation au sein de l’entreprise. Ce stage m’a également permis de développer mon esprit d’équipe et mon esprit critique, mais également mon sens des responsabilités et de l’organisation.',
        rapportLink: '/files/rapport.pdf'
    }
    
];

const PROJECTS_LIST = [
    {
        id: 0,
        title: 'Kerr 3B',
        thumbnail: "/projects-img/karr3b/thumbnail.png",
        languages: [
            "html",
            "css"
        ],
        description: 'Ce projet a été réalisé dans le cadre d\'un projet scolaire. Le but était de mettre en place un site vitrine ainsi qu\'une maquette pour un projet de covoiturage interne au lycée.',
        github: '',
        website: '',
        images: [
            '/projects-img/karr3b/login.png',
            '/projects-img/karr3b/register1.png',
            '/projects-img/karr3b/register2.png',
            '/projects-img/karr3b/register3.png',
            '/projects-img/karr3b/home.png',
            '/projects-img/karr3b/home-details.png',
            '/projects-img/karr3b/home-add.png',
            '/projects-img/karr3b/profil.png',
            '/projects-img/karr3b/messages.png',
        ],
        company: 'Projet d\'AP'
    },
    {
        id: 1,
        title: 'GSBv2',
        thumbnail: "/projects-img/gsbv2/thumbnail.png",
        languages: [
            "html",
            "css",
            "javascript",
            "php"
        ],
        description: 'Ce projet a été réalisé dans le cadre d\'un projet scolaire. GSBv2 est une application de gestion et de remboursement des frais médicaux. Les visiteurs devaient avoir la possibilité de renseigner ainsi que de consulter leurs fiches de frais sur une année, le tout stocké en base de données.',
        github: 'https://github.com/ThomasLC-Dev/gsbV2',
        website: '',
        images: [
            '/projects-img/gsbv2/connect.png',
            '/projects-img/gsbv2/connect_with_login.png',
            '/projects-img/gsbv2/dashboard.png',
            '/projects-img/gsbv2/renseigner_fiche_frais.png',
            '/projects-img/gsbv2/renseigner_fiche_frais_fill.png',
            '/projects-img/gsbv2/show_new_frais_hors_forfait.png',
            '/projects-img/gsbv2/show_details_fiche_frais.png',
            '/projects-img/gsbv2/MLD.jpeg'
        ],
        company: 'Projet d\'AP'
    }
];

const defaultGlobalContext = {
    workExperiencesList: WORK_EXPERIENCES_LIST,
    projectsList: PROJECTS_LIST
};

const GlobalProvider = props => {
    return(
        <GlobalContext.Provider value={defaultGlobalContext}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export default GlobalProvider;