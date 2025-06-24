import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ComingSoon.css';
import '../styles/pixel.css';

import { needPassword } from '../types.ts';

const PASSWORD = 'baba19890604baba';

export default function ComingSoon() {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const access = localStorage.getItem('baba_access_granted') === 'yes';
    const timestamp = parseInt(localStorage.getItem('baba_access_time') || '0', 10);
    const now = Date.now();
    const expired = now - timestamp > 3 * 60 * 60 * 1000; // 3 小時

    if (!needPassword || (access && !expired)) {
      navigate('/landing');
    }
  }, [navigate]);


  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setTimeout(() => {
      if (input === PASSWORD) {
        localStorage.setItem('baba_access_granted', 'yes');
		localStorage.setItem('baba_access_time', Date.now().toString());
        navigate('/landing');
      } else {
        setError('密碼錯誤，請再試一次');
        setLoading(false);
      }
    }, 600);
  };

  return (
    <div className="full-height comingsoon-container font-pixel">
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