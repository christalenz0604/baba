import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import Home from './Home.tsx';
import './index.css';
import './global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter >
      <Home />
    </HashRouter>
  </React.StrictMode>
);
