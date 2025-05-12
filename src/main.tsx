import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
    <HashRouter>
        <StrictMode>
            <App />
        </StrictMode>
    </HashRouter>
);
