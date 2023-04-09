import './index.css';
import Index from './pages/index';
import reportWebVitals from './services/reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<React.StrictMode>
		<Index />
	</React.StrictMode>,
);

reportWebVitals();
