import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'leaflet/dist/leaflet.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const base = '/oslo';

root.render(
    <React.StrictMode>
        <BrowserRouter basename={base}>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

// https://bit.ly/CRA-vitals
reportWebVitals();
