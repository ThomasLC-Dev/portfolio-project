import {Routes, Route} from 'react-router-dom';

import Header from './components/utils/Header';
import Footer from './components/utils/Footer';
import MainPage from './pages/MainPage';
import WorkExperienceDetailsPage from './pages/WorkExperienceDetailsPage';

function App() {
	return (
		<div className="App">
			<Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/work-experience/:workExperienceId" element={<WorkExperienceDetailsPage />} />
            </Routes>
			<Footer />
		</div>
	);
}

export default App;
