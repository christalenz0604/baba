import { Routes, Route } from 'react-router-dom';
import Landing from './landing/App_landing.jsx';
import App from './App.tsx';

function Home() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/main" element={<App />} />
    </Routes>
  );
}

export default Home;