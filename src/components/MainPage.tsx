import type { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

interface MainPageProps {
    navigate: (page: 'main' | 'resume' | 'gallery') => void;
}

const MainPage: FC<MainPageProps> = ({ navigate }) => {
    return (
        <div id="wrapper">
            <header id="header">
                <div className="logo">
                    <FontAwesomeIcon icon={faTerminal} size="2x" />
                </div>
                <div className="content">
                    <div className="inner">
                        <h1>Logan Phinney</h1>
                        <h3>Welcome to my personal website!</h3>
                    </div>
                </div>
                <hr></hr>
                <nav>
                    <ul className="nav-buttons">
                        <li>
                            <button className="nav-button" onClick={() => navigate('resume')}>
                                Résumé
                            </button>
                        </li>
                        <li>
                            <button className="nav-button" onClick={() => navigate('gallery')}>
                                Image Gallery
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
            <footer id="footer">
                <a href="https://github.com/loganphinney" target="_blank" rel="noopener noreferrer" className="icon brands fa-github">
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
            </footer>
            <div id="bg"></div>
        </div>
    );
};

export default MainPage;
