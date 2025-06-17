import React, { useState, useRef } from 'react';
import { useGame } from '../context/GameContext';
import { motion } from 'framer-motion';
import html2canvas from 'html2canvas';
import ShareDropdown from './ShareDropdown';
import { getImagePath } from '../utils/pathUtils';

const DesktopResultsScreen: React.FC = () => {
  const { gameState, restartGame } = useGame();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showShare, setShowShare] = useState(false);
  const [screenshotUrl, setScreenshotUrl] = useState<string | null>(null);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const resultsRef = useRef<HTMLDivElement>(null);

  const character = gameState.selectedCharacter;
  if (!character) return null;

  // Get Result Page Title if gameState.score is the same as the character's score show Sucessed if not show Failed
  const getResult = () => {
    const score = gameState.score;
    const characterScore = character.score;
    if (score === characterScore) return "成功";
    return "失敗";
  };

  //Get Result Character Image if success show sad.gif if faile and the score is less than 100 show happy.gif if the score is between 100 and character.score show normal.gif
  const getResultCharacterImage = () => {
    const score = gameState.score;
    const characterScore = character.score;
    if (score === characterScore) return character.resultCharacterImages.success;
    if (score < 100) return character.resultCharacterImages.happy;
    return character.resultCharacterImages.normal;
  };

  //Get Paper Count Image if score is less than 100 show 100.png if the score is between 100 and character.score show 10000.png if the score is between 10000 and character.score show 100000.png
  const getPaperCountImage = () => {
    const score = gameState.score;
    const characterScore = character.score;
    if (score === characterScore) return getImagePath("/images/result_staement_lv3.png");
    if (score < 100) return getImagePath("/images/result_staement_lv1.png");
    return getImagePath("/images/result_staement_lv2.png");
  };

  const getResultTitleImage = () => {
    const score = gameState.score;
    const characterScore = character.score;
    if (score === characterScore) return getImagePath("/images/result_prettyName_Lv5.png");
    if (score < 100) return getImagePath("/images/result_prettyName_Lv1.png");
    if (score < 1000) return getImagePath("/images/result_prettyName_Lv2.png");
    if (score < 10000) return getImagePath("/images/result_prettyName_Lv3.png");
    return getImagePath("/images/result_prettyName_Lv4.png");
  };
  const getResultTitle = () => {
    const score = gameState.score;
    if (score < 100) return "選區裝飾品";
    if (score < 500) return "提案複製機";
    if (score < 1000) return "政黨特攻隊長";
    if (score < 5000) return "國安漏洞製造者";
    if (score < 10000) return "賣台第一把交椅";
  };
  const getPersonalityTrait = () => {
    const characterType = character.id;
    const score = gameState.score;
    if (characterType === 'ChangChihLun') {
      if (score < 100) return "努力在黨意和民意中拉扯，跑地方跟里長一樣勤，要不要回去當里長？";
      if (score < 10000) return "反正出來連署的民眾都不是中和人，對吧？";
      return "跟隨黨意做事犧牲人民權益，拿石頭砸自己腳，這款立委該罷！";
    }
    if (characterType === 'linTeFu') {
      if (score < 100) return "不愧是20年老立委，黨與地方你都兼顧～";
      if (score < 10000) return "黨意需服從，民意又擋不住，你選擇再睡一下。";
      return "為了忠黨卻不愛國，民意沸騰罷免你了！";
    }

    if (characterType === 'HSUCHIAOHSIN') {
      if (score < 100) return "你努力在黨意和民意中拉扯～你被黨開除了";
      if (score < 10000) return "尚未安全，總召在盯著你！";
      return "你在黨的國會裡生存下來，但人民要罷免你了！";
    }

    if (characterType === 'LaiShyhBao') {
      if (score < 100) return "Developing Empath";
      if (score < 10000) return "Intuitive Soul";
      return "Emotional Sage";
    }

    if (characterType === 'wanghungwei') {
      if (score < 100) return "白X政策連署萌芽者，聲量微弱如昔日批評";
      if (score < 10000) return "昏暗A柱連署快閃隊，連署書突然暴增，讓人防不勝防";
      return "民主絕命轟炸機，嘎啦嘎啦";
    }
    if (characterType === 'LEEYEHSIU') {
      if (score < 100) return "你努力在黨意和民意中拉扯～你被黨開除了";
      if (score < 10000) return "尚未安全，總召在盯著你！";
      return "就沒在怕罷免的嘛～民意沸騰準備罷免妳囉！";
    }

    if (characterType === 'ChenYuJen') {
      if (score < 100) return "你努力在黨意和民意中拉扯～你被黨開除了";
      if (score < 10000) return "尚未安全，總召在盯著你！";
      return "就沒在怕罷免的嘛～民意沸騰準備罷免妳囉！";
    }

    if (characterType === 'YEHYUANCHIH') {
      if (score < 100) return "看起來大家對我做的事情沒什麼感覺，那好像還可以繼續不做事上通告爽領每月20萬";
      if (score < 10000) return "想罷我？看我使用迴轉招式「反罷免」，哎呀！怎麼黨裡的同志都被起訴了！";
      return "破130%又還沒確定被罷免！我來上節目繼續酸嗆聲學生，看到「同意」罷免選票才是真得啦！";
    }

    if (characterType === 'FUKUNCHI') {
      if (score < 100) return "努力在黨意和民意中拉扯～被黨開除了";
      if (score < 10000) return "尚未安全，聖上習皇帝在盯著你！";
      return "你遵從聖意生存下來，但人民要罷免你了！";
    }

    if (characterType === 'HungMongKai') {
      if (score < 100) return "想罷我？你們大家分寸拿捏一下,不要太超過";
      if (score < 10000) return "我想回家找媽媽了";
      return "媽！我回家你會養我嗎？人民想要罷免我～";
    }

    if (characterType === 'LoMingTsai') {
      if (score < 100) return "我不同意罷免 我不同意罷免 不同意 不同意";
      if (score < 10000) return "我八連霸誒 ！！看我找人弄你";
      return "前進,前進,前～～～進 (腳步持續後退中）";
    }

    if (characterType === 'LIAOHsienHsiang') {
      if (score < 100) return "你努力在黨意和民意中拉扯，資歷尚淺，被黨綱處分";
      if (score < 10000) return "黨意需服從，民意又擋不住，你選擇再瞎一回！";
      return "太蝦了吧！民意沸騰～告別蝦王之日即將到來！";
    }

    if (characterType === 'LOCHIHCHIANG') {
      if (score < 100) return "白X政策連署萌芽者，聲量微弱如昔日批評";
      if (score < 10000) return "昏暗A柱連署快閃隊，連署書突然暴增，讓人防不勝防";
      return "民主絕命轟炸機，嘎啦嘎啦";
    }
    return "該立委不予評論";
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsEmailValid(newEmail === '' || validateEmail(newEmail));
  };

  const handleSubmitEmail = async () => {
    if (!email || !character || !validateEmail(email)) return;
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
    const canvas = await html2canvas(document.body); // 你可以改成特定區域
    const dataUrl = canvas.toDataURL();
    setScreenshotUrl(dataUrl);
    setShowShare(true); // 觸發打開 ShareDropdown
  };


  return (
    // bg image url 需要調整
    <div className={`min-h-screen bg-contain ${getResult() === "成功" ? `bg-[url('/baba_test/images/result_bg_Win.png')]` : `bg-[url('/baba_test/images/result_bg_Fail.png')]`} bg-cover`}>
      <div className="flex-frow max-w-4xl mx-auto" >
        <motion.div
          className="flex flex-col rounded-0 overflow-hidden justify-center my-4 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative flex justify-center items-center w-full h-[50px] mb-0 mt-10 overflow-visible">
            {/* 上方 Game Over / You Win title 疊在 ribbon 上方一點點 */}
            <img
              src={getResult() === "成功" ? `${getImagePath('/images/title_Win.png')}` : `${getImagePath('/images/title_Fail.png')}`}
              alt="result title"
              className="absolute -top-10 w-[70%] max-w-[320px] h-auto object-contain z-30 pointer-events-none"
            />

            {/* ribbon 背景 */}
            <img
              src={getResult() === "成功" ? `${getImagePath('/images/title_Ribbon_Win.png')}` : `${getImagePath('/images/title_Ribbon_Fail.png')}`}
              alt="ribbon"
              className="w-[100%] max-w-[480px] h-auto object-contain z-10"
            />

            {/* 插入文字在 ribbon 上 */}
            <div className="absolute text-white font-pixel font-bold text-[clamp(1.5rem,3.5vw,1.5rem)] z-20 pointer-events-none whitespace-nowrap drop-shadow-[2px_2px_0px_rgba(0,0,0,0.4)]">
              {getResult() === "成功" ? "恭喜你！成功了！" : "嘩～你失敗了"}
            </div>
          </div>

          <div className={`flex flex-col items-center w-full justify-center ${getResult() === "成功" ? `bg-[url('/baba_test/images/result_Board_WebSize_Win.png')]` : `bg-[url('/baba_test/images/result_Board_WebSize_Fail.png')]`}`}>
            <div className="flex flex-row items-center w-full content-center px-2 my-10">
              <div className="flex flex-col h-auto items-center" style={{ width: '32rem' }}>
                <p className="flex font-medium text-gray-200">你扮演的立委是：</p>
                <img src={getResultCharacterImage()} alt={character.name} className="w-[60%] h-[60%] object-cover" />
                <h3 className="flex font-semibold text-lg text-white">{character.name}</h3>
              </div>
              <div className="flex flex-col h-auto items-center" style={{ width: '32rem' }}>
                <p className="flex font-medium text-gray-200">累積連署書</p>
                <img src={getPaperCountImage()} alt="" className="w-[60%] h-[60%] object-cover" />
                <p className="flex text-2xl font-bold text-white">x {gameState.score}</p>
              </div>
              <div className="flex flex-col h-auto items-center" style={{ width: '32rem' }}>
                <p className="flex font-medium text-gray-200">{getResultTitle()}</p>
                <img src={getResultTitleImage()} alt="" className="w-[60%] h-[60%] object-cover" />
                <p className="flex text-l font-bold text-white">{getPersonalityTrait()}</p>
              </div>
            </div>
            {/* add two buttons in a row. One is share and the other is restart. */}
            {/* add imeages on the buttons. share is a share icon and restart is a restart icon. */}
            <div className="flex flex-row items-center mb-4 w-full justify-center">
              <motion.button
                onClick={async () => {
                  if (showShare) {
                    setShowShare(false); // 關閉分享選單
                  } else {
                    await handleScreenshotShare(); // 先截圖 → 再開啟分享
                  }
                }}
                className="font-medium w-1/5 h-1/5 mx-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <img src={getResult() === "成功" ? getImagePath("/images/btn_Share_Success.png") : getImagePath("/images/btn_Share_Fail.png")} alt="share" className="w-full h-full object-cover" />
              </motion.button>

              <motion.button
                onClick={restartGame}
                className="font-medium w-1/5 h-1/5 mx-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <img src={getResult() === "成功" ? getImagePath("/images/btn_Tryagain_Success.png") : getImagePath("/images/btn_Tryagain_Fail.png")} alt="restart" className="w-full h-full object-cover" />
              </motion.button>
            </div>
            {
              showShare && screenshotUrl && (
                <div className="flex justify-center mt-4">
                  <ShareDropdown
                    shareUrl={shareUrl}
                    shareText={shareText}
                    imageData={screenshotUrl}
                    open={showShare}
                    setOpen={setShowShare}
                  />
                </div>
              )
            }
          </div>
        </motion.div>
      </div>

      {/* if failed css background color is #1f31fe and if success css background color is #fe3427 */}
      {/* Email subscription form */}
      {/* add a div with a background color and a gradient to the bottom of the page */}
      <div className={`w-full mt-auto mx-auto justify-center bg-gradient-to-b from-transparent via-transparent ${getResult() === "成功" ? "to-[#fe3427]/90" : "to-[#1f31fe]/90"} py-8`}>
        <div className="flex max-w-4xl mx-auto">

          <div className="flex-shrink-0 w-1/5 p-2">
            <img src={getImagePath("/images/logo.png")} className="w-full h-full object-contain" />

          </div>
          <div className="flex flex-col w-4/5 p-2">
            <div className="flex items-end w-full">
              <div className="flex w-1/4">
                <button className="w-32 h-12 sm:w-40 sm:h-14 md:w-48 md:h-16 result-bb"></button>
              </div>
              <h4 className="flex-grow text-[clamp(1rem,4vw,1.5rem)] font-semibold text-white leading-none px-2">
                想收到更多相關資訊嗎？
              </h4>
            </div>
            <div className="flex mt-2">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="請輸入您的 Email"
                className={`flex-1 px-4 py-2 border ${
                  isEmailValid ? 'border-gray-300' : 'border-red-500'
                } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              />
              <button
                onClick={handleSubmitEmail}
                disabled={isSubmitting || !email || !isEmailValid}
                className={`px-4 py-2 font-medium ${
                  isSubmitting || !email || !isEmailValid
                    ? 'bg-[#d7005c] text-white cursor-not-allowed'
                    : 'bg-[#5b00d7] text-white hover:bg-indigo-700'
                }`}
              >
                {isSubmitting ? '提交中...' : '訂閱'}
              </button>
            </div>
            {!isEmailValid && email !== '' && (
              <p className="mt-2 text-sm text-red-600">
                請輸入有效的 Email 地址
              </p>
            )}
            {submitStatus === 'success' && (
              <p className="mt-2 text-sm text-green-600">
                感謝訂閱！我們會寄送相關資訊給你。
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="mt-2 text-sm text-red-600">
                抱歉，發生錯誤。請稍後再試。
              </p>
            )}
          </div>
        </div>
      </div>
    </div >
  );
};

export default DesktopResultsScreen;
