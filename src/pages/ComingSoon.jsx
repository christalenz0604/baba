import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ComingSoon.css';
import '../styles/pixel.css';

const PASSWORD = 'baba2024';

export default function ComingSoon() {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setTimeout(() => {
      if (input === PASSWORD) {
        navigate('/landing');
      } else {
        setError('密碼錯誤，請再試一次');
        setLoading(false);
      }
    }, 600);
  };

  return (
    <div className="comingsoon-container font-pixel">
      <h1 className="comingsoon-title">
        Coming Soon
        <span className="dot-animate">...</span>
      </h1>
      <form className="comingsoon-form" onSubmit={handleSubmit}>
        <input
          type="password"
          className="comingsoon-input"
          placeholder="請輸入密碼進入遊戲"
          value={input}
          onChange={e => setInput(e.target.value)}
          disabled={loading}
        />
        <button type="submit" className="comingsoon-btn" disabled={loading}>
          {loading ? '驗證中...' : '進入'}
        </button>
      </form>
      {error && <div className="comingsoon-error">{error}</div>}
    </div>
  );
} 