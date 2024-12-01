import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useGameStore } from './store/gameStore';
import Home from './pages/Home';
import Game from './pages/Game';
import GameOver from './pages/GameOver';
import Settings from './pages/Settings';
import PremiumSuccess from './pages/PremiumSuccess';
import PremiumCancel from './pages/PremiumCancel';

export default function App() {
  const { currentMode } = useGameStore();

  return (
    <Router>
      <div className="min-h-screen" data-theme={currentMode?.toLowerCase() || 'classic'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/game-over" element={<GameOver />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/premium-success" element={<PremiumSuccess />} />
          <Route path="/premium-cancel" element={<PremiumCancel />} />
        </Routes>
      </div>
    </Router>
  );
}