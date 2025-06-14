import React, { useState, useRef } from 'react';
import { useGame } from '../context/GameContext';
import { motion } from 'framer-motion';
import ShareDropdown from '../components/ShareDropdown.jsx';
import html2canvas from 'html2canvas';

const ResultsScreen: React.FC = () => {
  const { gameState, restartGame } = useGame();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showShare, setShowShare] = useState(false);
  const [screenshotUrl, setScreenshotUrl] = useState<string | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const character = gameState.selectedCharacter;
  if (!character) return null;

  const getScoreLevel = () => {
    const score = gameState.score;
    if (score < 40) return 1;
    if (score < 80) return 2;
    if (score < 120) return 3;
    if (score < 160) return 4;
    return 5;
  };

  const level = getScoreLevel();
  const isWin = level >= 3;

  const getResultMessage = () => {
    return isWin ? '恭喜你！成功了！' : '噢～你失敗了';
  };

  const getRankTitle = () => {
    const titles = ['政治小白', '黨意喉舌', '牆頭草代表', '民意合夥人', '國會之王'];
    return titles[level - 1];
  };

  const getPersonalityTrait = () => {
    const id = character.id;
    const traits = {
      ChangChihLun: [
        '新手上路，還分不清藍綠。',
        '一切照黨意來，民意不重要。',
        '搖擺不定，說話圓滑。',
        '試圖平衡兩邊壓力，疲於奔命。',
        '笑裡藏刀，誰也看不透你。'
      ]
    };
    return traits[id]?.[level - 1] || '該立委評語未定義';
  };

  const handleSubmitEmail = async () => {
    if (!email || !character) return;
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      await fetch('https://script.google.com/macros/s/AKfycbyF2RBHz_E88v6rEV1cZ3Rys7KOdWIXR8lqHcH94_o12OTAhCPKM6-pkEn8aOBRTUej1A/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          character: character.name,
          score: gameState.score,
          timestamp: new Date().toISOString(),
        })
      });
      setSubmitStatus('success');
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const apiDomain = import.meta.env.VITE_API_DOMAIN;
  const shareUrl = `${apiDomain}/share/default`;
  const shareText = `該如何在立法院生存呢？\n一起來玩小遊戲吧！\n立法院生存指南上線囉！`;

  const handleScreenshotShare = async () => {
    const canvas = await html2canvas(document.body);
    const dataUrl = canvas.toDataURL();
    setScreenshotUrl(dataUrl);
    setShowShare(true);
  };

  return (
    <div className={`min-h-screen bg-[url('/images/results/fail_bg.png')] bg-cover bg-center py-10 px-4 flex flex-col justify-between`}>
      <div className="flex flex-col items-center text-center" ref={resultsRef}>
        <img src={`/images/results/fail_title.png`} alt="Result Title" className="w-72 md:w-96 mb-2" />
        <h3 className="text-lg font-bold text-white mb-4">{getResultMessage()}</h3>

        <div className="bg-gradient-to-br from-[#5D2A7A] to-[#1C1C1C] text-white w-full max-w-2xl rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-around items-center gap-6">
            <div className="flex flex-col items-center">
              <p className="text-sm mb-1">你扮演的立委是</p>
              <img src={`/images/results/avatar/${character.id}_pic_lv${level}.gif`} alt={character.name} className="w-20 h-20 object-contain" />
              <p className="text-base font-bold mt-1">{character.name}</p>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-sm mb-1">累積連署書</p>
              <img src={`/images/results/statement_lv${level}.png`} alt="score icon" className="w-16 h-16" />
              <p className="text-xl font-bold">x{gameState.score}</p>
            </div>

            <div className="flex flex-col items-center max-w-sm">
              <p className="text-sm mb-1">{getRankTitle()}</p>
              <img src={`/images/results/result_prettyName_Lv${level}.png`} alt="rank icon" className="w-16 h-16" />
              <p className="text-sm mt-1 text-center leading-snug">{getPersonalityTrait()}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-6 mb-8">
          <motion.button
            onClick={handleScreenshotShare}
            className="bg-transparent border-none focus:outline-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={`/images/results/fail_btn_share.png`} alt="分享結果" className="w-28" />
          </motion.button>

          <motion.button
            onClick={restartGame}
            className="bg-transparent border-none focus:outline-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={`/images/results/fail_btn_restart.png`} alt="再玩一次" className="w-28" />
          </motion.button>
        </div>

        {showShare && screenshotUrl && (
          <ShareDropdown
            shareUrl={shareUrl}
            shareText={shareText}
            imageData={screenshotUrl}
            open={showShare}
            setOpen={setShowShare}
          />
        )}
      </div>

      <div className="flex items-center justify-between bg-[#0000FF] w-full py-4 px-4 flex-wrap gap-4 text-white">
        <img src="/images/logo.png" alt="Logo" className="h-12" />
        <div className="flex gap-2 flex-1 max-w-xl">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="想收到更多相關資訊嗎？請輸入您的 Email"
            className="flex-1 px-4 py-2 rounded text-black focus:outline-none"
          />
          <button
            onClick={handleSubmitEmail}
            disabled={isSubmitting || !email}
            className={`px-4 py-2 font-bold rounded ${isSubmitting || !email ? 'bg-gray-400 text-white' : 'bg-red-600 text-white hover:bg-red-700'}`}
          >
            {isSubmitting ? '提交中...' : '訂閱'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsScreen;
