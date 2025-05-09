import type { FC } from 'react';

interface ResumePageProps {
    navigate: (page: 'main' | 'resume' | 'gallery') => void;
}

const ResumePage: FC<ResumePageProps> = ({ navigate }) => {
    return (
        <div id="wrapper">
            <article id="resume" style={{ height: '110vh' }}>
                <div className="section-header">
                    <h2 className="major">Résumé</h2>
                    <button onClick={() => navigate('main')} className="back-button">
                        Back to Home
                    </button>
                </div>
                <iframe src="/docs/LoganPhinney_Resume.pdf" title="Resume PDF" loading="lazy" width="100%" height="90%"></iframe>
            </article>
        </div>
    );
};

export default ResumePage;
