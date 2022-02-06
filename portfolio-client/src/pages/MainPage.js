import { Fragment } from 'react';

import BannerSection from '../components/main-page/banner-section/BannerSection';
import AboutSection from '../components/main-page/about-section/AboutSection';
import WorkExperiencesSection from '../components/main-page/work-experiences-section/WorkExperiencesSection';
import ProjectsSection from '../components/main-page/projects-section/ProjectsSection';
import SkillsSection from '../components/main-page/skills-section/SkillsSection';
import ContactSection from '../components/main-page/contact-section/ContactSection';


function MainPage() {
	return (
		<Fragment>
                  <BannerSection />
                  <AboutSection />
                  <WorkExperiencesSection />
                  <ProjectsSection />
                  <SkillsSection />
                  <ContactSection />
		</Fragment>
	);
}

export default MainPage;
