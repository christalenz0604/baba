import './App_landing.css';
import useTypewriter from './useTypewriter';
import { useState, useEffect } from 'react';
import { getImagePath } from '../utils/pathUtils';

function Landing() {
  const lines = ["穿越紅毯，朝小野大的全新國會正式拉開序幕，",
    "執政黨已經無法阻攔你通過任何法案。",
    "但扶植你壯大的黨，卻可能與你的良心背道而馳，",
    "在黨意與民意之間，你會怎麼選擇？"];
  const [done, setDone] = useState(false);
  const [allowClick, setAllowClick] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [skip, setSkip] = useState(false);

  const text = useTypewriter(
    lines,
    75,
    1000,
    false, // 不 loop
    () => setDone(true), // 動畫完成後呼叫
    skip    // skip status
  );

  useEffect(() => {
    if (done) {
      // 顯示提示訊息 & 開放點擊
      setTimeout(() => setAllowClick(true), 500);
    }
  }, [done]);

  useEffect(() => {
    if (clicked) {
      // Use the correct path for GitHub Pages
      window.location.href = getImagePath('/#/main');
    }
  }, [clicked]);

  // next page or skip animation when clicked
  const handleClick = () => {
    if (allowClick) {
      setClicked(true);
    }
  };

  return (
    <div className="container_landing" onClick={handleClick}>
      {!done && (
        <button className="skip-button" onClick={(e) => {
          e.stopPropagation(); // 不觸發 container 的 onClick
          setSkip(true);
          setDone(true);
          setAllowClick(true);
        }}>
          Skip
        </button>
      )}

      <img src={getImagePath('images/議場.gif')} alt="背景圖" className="background" />
      <div className="foreground">
        <img src={getImagePath('images/藍委跑步.gif')} alt="動畫" className="gif" />
        <div className="text">
          {text.split('\n').map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
          {allowClick && <div className="prompt">點擊任一處繼續</div>}
        </div>
      </div>
    </div>
  );
}

export default Landing;
