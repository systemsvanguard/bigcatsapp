import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import ReactDOM from 'react-dom/client'; 
import 'bootstrap-icons/font/bootstrap-icons.min.css';
// import '@fortawesome/css/fontawesome.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css'; 
import '@fortawesome/fontawesome-free/js/all.js';

// import './assets/fontawesome/css/solid.min.css';
// import './assets/fontawesome/css/brands.min.css';
// import '@fortawesome/fontawesome-svg-core/styles.css';
// import '@fortawesome/free-solid-svg-icons/';
// import '@fortawesome/free-brands-svg-icons/'

import 'bulma/css/bulma.min.css'; 
import './styles.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
