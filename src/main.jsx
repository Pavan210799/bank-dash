import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/fonts.css';
import './styles/tokens.css';
import './styles/dashboard.css';
import './styles/responsive-guard.css';
import './styles/transactions.css';
import './styles/accounts-investments.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
