import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

// REMIX-ICONS
import 'remixicon/fonts/remixicon.css';
// TAILWIND-CSS
import './assets/css/index.css';
// CUSTOM-CSS
import './assets/css/custom.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
