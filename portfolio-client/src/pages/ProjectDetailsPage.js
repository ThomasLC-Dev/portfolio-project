import { useContext } from 'react';

import { Redirect, useParams } from 'react-router-dom';

import GlobalContext from '../store/global-context';

import Banner from '../components/project-details-page/Banner';

const ProjectDetailsPage = () => {

    const ctx = useContext(GlobalContext);
    const params = useParams();
    
    if(params.projectId > (ctx.projectsList.length - 1)){
        return(
            <Redirect to="/" />
        );
    }
    else{
        const project = ctx.projectsList[params.projectId];

        return(
            <div>
                <Banner img={project.img} title={project.title} />
            </div>
        );
    }
}

export default ProjectDetailsPage;