import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { AudioProvider } from "./components/AudioProvider";

import Home from './Home.tsx';
import './index.css';
import './global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AudioProvider>
      <HashRouter >
        <Home />
      </HashRouter>
    </AudioProvider>
  </React.StrictMode>
);
