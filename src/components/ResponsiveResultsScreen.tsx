import React, { useState, useEffect, useRef } from 'react';
import { useGame } from '../context/GameContext';
import { motion } from 'framer-motion';
import html2canvas from 'html2canvas';
import ShareDropdown from './ShareDropdown.jsx';
import { getImagePath } from '../utils/pathUtils';
import { launchConfetti } from '../utils/confetti';
import { launchFirework } from '../utils/firework';
import { X } from 'lucide-react';

const ResponsiveResultsScreen: React.FC = () => {
  const { gameState, restartGame } = useGame();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showShare, setShowShare] = useState(false);
  const [screenshotUrl, setScreenshotUrl] = useState<string | null>(null);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 767);

  const resultsRef = useRef<HTMLDivElement>(null);
  const character = gameState.selectedCharacter;
  if (!character) return null;

  const getResult = () => gameState.score === character.score ? '成功' : '失敗';

  const handleResize = () => setIsDesktop(window.innerWidth > 767);
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (getResult() === '成功') {
      const interval = setInterval(() => {
        launchFirework?.();
      }, 1000);
      return () => clearInterval(interval);
    }
  }, []);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsEmailValid(newEmail === '' || validateEmail(newEmail));
  };

  const handleSubmitEmail = async () => {
    if (!email || !validateEmail(email)) return;
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

  const shareUrl = `${import.meta.env.VITE_API_DOMAIN}/share/default`;
  const shareText = `該如何在立法院生存呢？\n一起來玩小遊戲吧！\n立法院生存指南上線囉！`;

  const handleScreenshotShare = async () => {
    const canvas = await html2canvas(document.body);
    const dataUrl = canvas.toDataURL();
    setScreenshotUrl(dataUrl);
    setShowShare(true);
  };

  const baseImagePrefix = isDesktop ? 'WebSize' : 'phoneSize';
  const bgImage = getImagePath(getResult() === '成功' ? '/images/results/objects/result_bg_Win.webp' : '/images/results/objects/result_bg_Fail.webp');
  const boardImage = getImagePath(`/images/results/objects/result_Board_${baseImagePrefix}_${getResult() === '成功' ? 'Win' : 'Fail'}.webp`);

  return (
    <div className="full-height">
    <div className="min-h-[100dvh] bg-contain bg-cover px-2 py-4 overflow-hidden" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="fireworks-container" id="fireworks"></div>
      <canvas id="confetti"></canvas>
      <div className="max-w-5xl mx-auto">
        <motion.div className="flex flex-col rounded-0 overflow-visible justify-center my-4 relative" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="relative flex flex-col items-center w-full justify-center">
            <img src={boardImage} className="w-full max-w-[900px] h-auto object-contain transition-all duration-300" alt="結果底圖" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 py-12 z-20">
              <div className={`flex ${isDesktop ? 'flex-row' : 'flex-col'} items-center w-full gap-4`}>
                <div className="flex flex-col items-center w-full">
                  <p className="text-white">你扮演的立委是</p>
                  <img src={character.resultCharacterImages[getResult() === '成功' ? 'success' : 'fail']} alt={character.name} className="w-3/4 h-auto" />
                  <h3 className="text-white text-xl font-bold">{character.name}</h3>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center mt-4 gap-4">
                <motion.button onClick={async () => showShare ? setShowShare(false) : await handleScreenshotShare()} className="w-[160px] h-[160px]">
                  <img src={getImagePath(`/images/results/objects/btn_Share_${getResult() === '成功' ? 'Success' : 'Fail'}.webp`)} alt="share" className="w-full h-full object-contain" />
                </motion.button>
                <motion.button onClick={restartGame} className="w-[160px] h-[160px]">
                  <img src={getImagePath(`/images/results/objects/btn_Tryagain_${getResult() === '成功' ? 'Success' : 'Fail'}.webp`)} alt="restart" className="w-full h-full object-contain" />
                </motion.button>
              </div>
              {screenshotUrl && (
                <ShareDropdown shareUrl={shareUrl} shareText={shareText} imageData={screenshotUrl} open={showShare} setOpen={setShowShare} />
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Gradient + Footer */}
      <div className="fixed bottom-0 w-full overflow-hidden z-50 safe-footer">
        <div className={`pointer-events-none fixed bottom-0 left-0 w-full h-[50vh] z-0 bg-gradient-to-b from-transparent via-transparent safe-footer ${getResult() === '成功' ? 'to-[#fe3427]/90' : 'to-[#1f31fe]/90'}`} />
        <div className="relative z-10 flex max-w-4xl mx-auto pb-0 px-4">
          <div className="flex-shrink-0 w-1/5 p-2">
            <img src={getImagePath('/images/logo.webp')} className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col w-4/5 p-2">
            <div className="flex items-end w-full">
              <div className="flex w-1/4">
                <button onClick={() => setIsAboutUsOpen(true)} className="w-32 h-12 sm:w-40 sm:h-14 md:w-48 md:h-16 result-bb" />
              </div>
              <h4 className="flex-grow text-[clamp(1rem,4vw,1.5rem)] font-semibold text-white leading-none px-2">想收到更多相關資訊嗎？</h4>
            </div>
            <div className="flex mt-2">
              <input type="email" value={email} onChange={handleEmailChange} placeholder="請輸入您的 Email" className={`flex-1 px-4 py-2 border ${isEmailValid ? 'border-gray-300' : 'border-red-500'} focus:outline-none focus:ring-2 focus:ring-indigo-500`} />
              <button onClick={handleSubmitEmail} disabled={isSubmitting || !email || !isEmailValid} className={`px-4 py-2 font-medium ${isSubmitting || !email || !isEmailValid ? 'bg-[#d7005c] text-white cursor-not-allowed' : 'bg-[#5b00d7] text-white hover:bg-indigo-700'}`}>{isSubmitting ? '提交中...' : '訂閱'}</button>
            </div>
            {!isEmailValid && email !== '' && <p className="mt-2 text-sm text-red-600">請輸入有效的 Email 地址</p>}
            {submitStatus === 'success' && <p className="mt-2 text-sm text-green-600">感謝訂閱！我們會寄送相關資訊給你。</p>}
            {submitStatus === 'error' && <p className="mt-2 text-sm text-red-600">抱歉，發生錯誤。請稍後再試。</p>}
          </div>
        </div>
      </div>

      {isAboutUsOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={() => setIsAboutUsOpen(false)}>
          <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-gray-800">製作團隊</h3>
              <button onClick={() => setIsAboutUsOpen(false)} className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200">
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>
            <div className="w-full text-center text-2xl font-bold text-gray-800 tracking-wider">雙和罷免團隊（新北市雙和公民參與協會）</div>
            <div className="w-3/4 mx-auto pl-2">
              <div className="text-gray-700 text-lg my-4">
                <div className="flex w-full font-semibold">專案發想</div>
                <div className="flex flex-row gap-7"><div>mini</div><div>先西</div><div>Kate</div></div>
              </div>
              <div className="text-gray-700 text-lg my-4">
                <div className="flex w-full font-semibold">專案進度</div>
                <div className="flex flex-row gap-7"><div>馬可詠嘆師</div><div>希斯特莉雅</div></div>
              </div>
              <div className="text-gray-700 text-lg my-4">
                <div className="flex w-full font-semibold">網頁技術</div>
                <div className="flex flex-row gap-7"><div>馬可詠嘆師</div><div>迪奧</div><div>希斯特莉雅</div></div>
              </div>
              <div className="text-gray-700 text-lg my-4">
                <div className="flex w-full font-semibold">文本</div>
                <div className="flex flex-row gap-7"><div>羅丹</div><div>Phoebe</div><div>希斯特莉雅</div><div>Kate</div><div>先西</div></div>
              </div>
              <div className="text-gray-700 text-lg my-4">
                <div className="flex w-full font-semibold">美術</div>
                <div className="flex flex-row gap-7"><div>阿柔</div><div>阿瑋</div><div>小鄒鄒</div><div>永和哈比人</div><div>AK</div><div>威哥</div></div>
              </div>
              <div className="text-gray-700 text-lg my-4">
                <div className="flex w-full font-semibold">影片</div>
                <div className="flex flex-row gap-7"><div>Amber</div><div>先西</div></div>
              </div>
              <div className="text-gray-700 text-lg my-4">
                <div className="flex w-full font-semibold">法律諮詢</div>
                <div className="flex flex-row gap-7"><div>雞仔</div></div>
              </div>
            </div>
            <div className="text-gray-700 text-lg my-4">
              <p>感謝所有罷團夥伴，薪偷之餘還能快速生出一個小遊戲，就算沒有直接背景，也使出渾身解術壓DDL製作！</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
	</div>
  );
};

export default ResponsiveResultsScreen;
