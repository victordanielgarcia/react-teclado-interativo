import './index.css';
import Index from './pages/index';
import reportWebVitals from './services/reportWebVitals';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<React.StrictMode>
		<Index />
	</React.StrictMode>,
);

reportWebVitals();
