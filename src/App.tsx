import { useState } from 'react';
import './App.css';
import MainPage from './components/MainPage';
import ResumePage from './components/ResumePage';
import GalleryPage from './components/GalleryPage';

function App() {
    const [currentPage, setCurrentPage] = useState<'main' | 'resume' | 'gallery'>('main');

    return (
        <div className="App">
            {currentPage === 'main' && <MainPage navigate={setCurrentPage} />}
            {currentPage === 'resume' && <ResumePage navigate={setCurrentPage} />}
            {currentPage === 'gallery' && <GalleryPage navigate={setCurrentPage} />}
        </div>
    );
}

export default App;
