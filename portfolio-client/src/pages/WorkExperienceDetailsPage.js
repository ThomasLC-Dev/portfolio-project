import { useContext, useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import GlobalContext from '../store/global-context';

import Banner from '../components/work-experience-details-page/Banner';
import DetailsSection from '../components/work-experience-details-page/DetailsSection';

const WorkExperienceDetailsPage = () => {

    const ctx = useContext(GlobalContext);
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        if(params.workExperienceId > (ctx.workExperiencesList.length - 1) || params.workExperienceId !== '4'){
            console.log("test");
            navigate('/');
        }
    });

    window.scrollTo(0,0);
    const workExperience = ctx.workExperiencesList[params.workExperienceId];

    return(
        <div className="work-experience-details">
            <Banner company={workExperience.company} img={workExperience.img} startDate={workExperience.startDate} endDate={workExperience.endDate}/>
            <DetailsSection presentationText={workExperience.presentationText} contextText={workExperience.contextText} conclusionText={workExperience.conclusionText} rapportLink={workExperience.rapportLink} />
        </div>
    );
}

export default WorkExperienceDetailsPage;