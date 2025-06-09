import './App_landing.css';
import useTypewriter from './useTypewriter';
import { useState, useEffect } from 'react';

function Landing() {
  const lines = ["穿越紅毯，朝小野大的全新國會正式拉開序幕，", 
                 "執政黨已經無法阻攔你通過任何法案。", 
    			 "但扶植你壯大的黨，卻可能與你的良心背道而馳，", 
                 "在黨意與你的理想之間，你會怎麼選擇？"];
  const [done, setDone] = useState(false);
  const [allowClick, setAllowClick] = useState(false);
  const [clicked, setClicked] = useState(false);

  const text = useTypewriter(
    lines,
    75,
    1000,
    false, // 不 loop
    () => setDone(true) // 動畫完成後呼叫
  );

  useEffect(() => {
    if (done) {
      // 顯示提示訊息 & 開放點擊
      setTimeout(() => setAllowClick(true), 500);
    }
  }, [done]);

  useEffect(() => {
    if (clicked) {
      // 這裡可以替換成 window.location.href 或 navigate()
      window.location.href = '/#/main'; // ← 替換成你要導向的路徑
    }
  }, [clicked]);

  const handleClick = () => {
    if (allowClick) {
      setClicked(true);
    }
  };

  return (
    <div className="container_landing" onClick={handleClick}>
      <img src="images/議場.gif" alt="背景圖" className="background" />
      <div className="foreground">
        <img src="images/藍委跑步.gif" alt="動畫" className="gif" />
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
