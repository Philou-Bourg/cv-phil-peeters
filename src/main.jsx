import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Importer Bootstrap CSS et JS, ainsi que Font Awesome
import 'bootstrap/dist/css/bootstrap.min.css'; // Importation de Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importation de Bootstrap JS
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importation de Font Awesome

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
