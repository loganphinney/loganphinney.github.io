import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import './App.css';
import MainPage from './components/MainPage';
import ResumePage from './components/ResumePage';
import GalleryPage from './components/GalleryPage';

function App() {
    const location = useLocation();
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState<'main' | 'resume' | 'gallery'>('main');

    useEffect(() => {
        const path = location.pathname;
        if (path.includes('resume')) {
            setCurrentPage('resume');
        } else if (path.includes('gallery')) {
            setCurrentPage('gallery');
        } else {
            setCurrentPage('main');
        }
    }, [location]);

    useEffect(() => {
        if (currentPage === 'resume') {
            navigate('/resume');
        } else if (currentPage === 'gallery') {
            navigate('/gallery');
        } else {
            navigate('/');
        }
    }, [currentPage, navigate]);

    return (
        <div className="App">
            {currentPage === 'main' && <MainPage navigate={setCurrentPage} />}
            {currentPage === 'resume' && <ResumePage navigate={setCurrentPage} />}
            {currentPage === 'gallery' && <GalleryPage navigate={setCurrentPage} />}
        </div>
    );
}

export default App;
