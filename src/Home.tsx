import { Routes, Route } from 'react-router-dom';
import Landing from './landing/App_landing.jsx';
import App from './App.tsx';
import SharePage from './pages/SharePage';

function Home() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/main" element={<App />} />
      <Route path="/share" element={<SharePage />} />
    </Routes>
  );
}
export default Home;
