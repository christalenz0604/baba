import { Routes, Route } from 'react-router-dom';
import Landing from './landing/App_landing.jsx';
import Game from './Game.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/main" element={<Game />} />
    </Routes>
  );
}

export default App;