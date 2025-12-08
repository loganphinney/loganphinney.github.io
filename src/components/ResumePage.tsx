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
                <div style={{ margin: 'auto' }}>
                    <h3 style={{ margin: 'auto' }}>
                        Not Available At This Time.
                    </h3>
                    <p style={{ textAlign: 'center' }}>Already employed :)</p>
                </div>
                {/*<iframe src="/docs/LoganPhinney_Resume.pdf" title="Resume PDF" loading="lazy" width="100%" height="90%"></iframe>
                <a href="/docs/LoganPhinney_Resume.pdf" download="LoganPhinney-Resume" target="_blank">
                    <button className="download-button">Download</button>
                </a>*/}
            </article>
        </div>
    );
};

export default ResumePage;
