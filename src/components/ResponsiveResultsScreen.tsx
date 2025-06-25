// ✅ 已整合 ResultsScreen 與 DesktopResultsScreen 成為 ResponsiveResultsScreen
// ✅ 根據 isDesktop 切換 UI 排版與資源
// ✅ 含動畫播放、截圖分享、Email 訂閱、關於我們視窗

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

  const [canPlayConfetti, setCanPlayConfetti] = useState(false);

  const resultsRef = useRef<HTMLDivElement>(null);

  const character = gameState.selectedCharacter;
  if (!character) return null;

  const isDesktopWidth = 539;

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > isDesktopWidth);
  const [showIntroVideo, setShowIntroVideo] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play();
      video.onended = () => {
        setShowIntroVideo(false);
        setTimeout(() => {
          setCanPlayConfetti(true);
        }, 200);
      };
    }
  }, []);

  const skipIntro = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
    }
    setShowIntroVideo(false);
    setTimeout(() => {
      setCanPlayConfetti(true);
    }, 200);
  };

  // Get Result Page Title if gameState.score is the same as the character's score show Sucessed if not show Failed
  const getResult = () => (gameState.score === character.score ? '成功' : '失敗');



  useEffect(() => {
    try {
      if ((getResult() === '成功') && canPlayConfetti) {
        launchConfetti?.();
        const interval = setInterval(() => {
          launchFirework?.();
        }, 1000);
        return () => clearInterval(interval);
      }
    } catch (error) {
      console.error("煙火或彩帶初始化錯誤：", error);
    }
  }, [canPlayConfetti]);


  //Get Result Character Image if success show sad.gif if faile and the score is less than 100 show happy.gif if the score is between 100 and character.score show normal.gif
  const getResultCharacterImage = () => {
    const score = gameState.score;
    const characterScore = character.score;
    if (score === characterScore) return character.resultCharacterImages.success;
    return character.resultCharacterImages.fail;
  };

  //Get Paper Count Image if score is less than 100 show 100.png if the score is between 100 and character.score show 10000.png if the score is between 10000 and character.score show 100000.png
  const getPaperCountImage = () => {
    const score = gameState.score;
    const characterScore = character.score;
    if (score === characterScore) return getImagePath("/images/results/objects/result_staement_lv3.webp");
    if (score < 100) return getImagePath("/images/results/objects/result_staement_lv1.webp");
    return getImagePath("/images/results/objects/result_staement_lv2.webp");
  };

  const getResultTitleImage = () => {
    const score = gameState.score;
    if (score < 100) return getImagePath("/images/results/objects/result_prettyName_Lv1.webp");
    if (score < 5000) return getImagePath("/images/results/objects/result_prettyName_Lv2.webp");
    if (score < 10000) return getImagePath("/images/results/objects/result_prettyName_Lv3.webp");
    if (score < 20000) return getImagePath("/images/results/objects/result_prettyName_Lv4.webp");
    return getImagePath("/images/results/objects/result_prettyName_Lv5.webp");
  };
  const getResultTitle = () => {
    const score = gameState.score;
    if (score < 100) return "選區裝飾品";
    if (score < 5000) return "提案複製機";
    if (score < 10000) return "政黨特攻隊長";
    if (score < 20000) return "國安漏洞製造者";
    return "賣台第一把交椅";
  };
  const getCharacterType = () => character?.id !== 'LoMingTsai';
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
      if (score < 100) return "白X政策連署萌芽者，聲量微弱如昔日批評";
      if (score < 10000) return "昏暗A柱連署快閃隊，連署書突然暴增，讓人防不勝防";
      return "民主絕命轟炸機，嘎啦嘎啦";
    }

    if (characterType === 'wanghungwei') {
      if (score < 100) return "你努力在黨意和民意中拉扯～你被黨開除了";
      if (score < 10000) return "尚未安全，總召在盯著你！";
      return "就沒在怕罷免的嘛～民意沸騰準備罷免妳囉！";
    }
    if (characterType === 'LEEYEHSIU') {
      if (score < 100) return "你努力在黨意和民意中拉扯～你被黨開除了";
      if (score < 10000) return "尚未安全，總召在盯著你！";
      return "你在黨的國會裡生存下來，但人民要罷免你了！";
    }

    if (characterType === 'YEHYUANCHIH') {
      if (score < 100) return "看起來大家對我做的事情沒什麼感覺，那好像還可以繼續不做事上通告爽領每月20萬";
      if (score < 10000) return "想罷我？看我使用迴轉招式「反罷免」，哎呀！怎麼黨裡的同志都被起訴了！";
      return "破130%又還沒確定被罷免！我來上節目繼續酸嗆聲學生，看到「同意」罷免選票才是真得啦！";
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
  const shareText = `#雙和罷免團隊 全新企劃第二彈 來囉！\n隆重獻上「#國會派對：生存之亂」 playbaba.tw\n讓你扮演國民黨立委深入當今 #國會亂象！\n是要 #跟隨民意，還是要 #聽從黨意？\n快上 playbaba.tw 試試看！\n各位不熟政治的朋友們快來體驗國會亂象！`;
  const shareLineText = `雙和罷免團隊全新企劃第二彈來囉！\n隆重獻上「國會派對：生存之亂」 \n各位不熟政治的朋友們快來體驗國會亂象！`;
  
  const handleScreenshotShare = async () => {
    const canvas = await html2canvas(document.body); // 你可以改成特定區域
    const dataUrl = canvas.toDataURL();
    setScreenshotUrl(dataUrl);
    setShowShare(true); // 觸發打開 ShareDropdown
  };

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > isDesktopWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const bgImage = getImagePath(getResult() === '成功' ? '/images/results/objects/result_bg_Win.webp' : '/images/results/objects/result_bg_Fail.webp');
  const boardImage = getImagePath(`/images/results/objects/result_Board_${isDesktop ? 'WebSize' : 'phoneSize'}_${getResult() === '成功' ? 'Win' : 'Fail'}.webp`);

  return (
    <div>
      {showIntroVideo && (
        <div className="full-height">
          <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center safe-footer">
            <video
              ref={videoRef}
              src={getResult() === "成功" ? `${getImagePath('/media/results_anime_success.mp4')}` : `${getImagePath('/media/results_anime_fail.mp4')}`}

              className="max-w-full max-h-full w-auto h-auto object-contain"
              muted
              playsInline
            />
            <button
              onClick={skipIntro}
              className="skip-button"
			  style = {{
				border: "2px solid white"  
			  }}
            >
              Skip
            </button>
          </div>
        </div>
      )}

      {!showIntroVideo && (
        <div className="full-height">
          <div
            className={`${isDesktop
              ? "flex flex-col min-h-screen bg-cover py-4 px-4"
              : "min-h-[100dvh] bg-cover py-10 px-2 overflow-hidden"
              }`}
            style={{
              backgroundImage: `url(${bgImage})`
            }}
          >

            <div className="fireworks-container" id="fireworks"></div>
            <canvas id="confetti"></canvas>



            <div className="flex-frow max-w-4xl mx-auto" >
              <motion.div
                className="flex flex-col rounded-0 overflow-visible justify-center my-4 relative mx-auto lg:w-[90%]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className={`${isDesktop
                  ? "relative flex justify-center items-center w-full mt-10 overflow-visible"
                  : "relative flex justify-center items-center w-full mt-0 overflow-visible"
                  }`}>
                  {/* 上方 Game Over / You Win title 疊在 ribbon 上方一點點 */}
                  <img
                    src={getResult() === "成功" ? `${getImagePath('/images/results/objects/title_Win.webp')}` : `${getImagePath('/images/results/objects/title_Fail.webp')}`}
                    alt="result title"
                    className={`${isDesktop
                      ? "absolute -top-10 w-[70%] max-w-[320px] h-auto object-contain z-30 pointer-events-none"
                      : "absolute -top-10 w-[70%] max-w-[320px] h-auto object-contain z-30 pointer-events-none"
                      }`}
                  />

                  {/* ribbon 背景 */}
                  <img
                    src={getResult() === "成功" ? `${getImagePath('/images/results/objects/title_Ribbon_Win.webp')}` : `${getImagePath('/images/results/objects/title_Ribbon_Fail.webp')}`}
                    alt="ribbon"
                    className={`${isDesktop
                      ? "w-[100%] max-w-[480px] h-auto object-contain z-10"
                      : "w-[100%] max-w-[480px] h-auto object-contain z-10"
                      }`}
                  />

                  {/* 插入文字在 ribbon 上 */}
                  <div className={`${isDesktop
                    ? "absolute text-white font-pixel font-bold text-[clamp(2rem,3.5vw,1.5rem)] z-20 pointer-events-none whitespace-nowrap drop-shadow-[2px_2px_0px_rgba(0,0,0,0.4)]"
                    : "absolute text-white font-pixel font-bold text-[clamp(2rem,3.5vw,1.5rem)] z-20 pointer-events-none whitespace-nowrap drop-shadow-[2px_2px_0px_rgba(0,0,0,0.4)]"
                    }`}
                  >

                    {getResult() === "成功" ? "恭喜你！成功了！" : "失敗！你得跟隨黨意！"}
                  </div>
                </div>

                {/* 改為圖片方式呈現背景 + 四角裝飾 */}
                <div className="relative flex flex-col items-center w-full justify-center">
                  {/* 背景主圖 */}
                  <img
                    src={boardImage}
                    className={`${isDesktop
                      ? "w-full max-w-[900px] h-auto object-contain transition-all duration-300 -mt-16"
                      : "w-full max-w-[900px] h-auto object-contain transition-all duration-300 -mt-4"
                      }`}
                    alt="結果底圖"
                  />

                  {/* 四個角落裝飾圖 - 疊在上方 */}
                  <img src={getImagePath("/images/corner_LT.webp")}
                    className={`${isDesktop
                      ? "pointer-events-none absolute top-4 left-4 w-10 h-10 z-30 -mt-16"
                      : "pointer-events-none absolute top-8 left-2 w-10 h-10 z-30 -mt-6"
                      }`}
                    alt="LT" />
                  <img src={getImagePath("/images/corner_RT.webp")}
                    className={`${isDesktop
                      ? "pointer-events-none absolute top-4 right-4 w-10 h-10 z-30 -mt-16"
                      : "pointer-events-none absolute top-8 right-2 w-10 h-10 z-30 -mt-6"
                      }`}
                    alt="RT" />
                  <img src={getImagePath("/images/corner_LB.webp")}
                    className={`${isDesktop
                      ? "pointer-events-none absolute bottom-4 left-4 w-10 h-10 z-30"
                      : "pointer-events-none absolute bottom-2 left-2 w-10 h-10 z-30"
                      }`}
                    alt="LB" />
                  <img src={getImagePath("/images/corner_RB.webp")}
                    className={`${isDesktop
                      ? "pointer-events-none absolute bottom-4 right-4 w-10 h-10 z-30"
                      : "pointer-events-none absolute bottom-2 right-2 w-10 h-10 z-30"
                      }`}
                    alt="RB" />

                  {/* 實際內容區域 */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-6 py-12 z-20">

                    {isDesktop ?
                      (<>
                        <div className="flex flex-row items-start w-full content-center px-4 mt-5 md:mt-0">
                          <div className="flex flex-col h-auto items-center" style={{ width: '32rem' }}>
                            <p className="flex font-medium text-gray-200 text-base md:text-2xl">你扮演的立委是</p>
                            <img src={getResultCharacterImage()} alt={character.name} className="w-[60%] h-[60%] object-cover" />
                            <h3 className="flex font-semibold text-white text-2xl md:text-4xl">{character.name}</h3>
                          </div>
                          <div className="flex flex-col h-auto items-center" style={{ width: '32rem' }}>
                            <p className="flex font-medium text-gray-200 text-base md:text-2xl">累積連署書</p>
                            <img src={getPaperCountImage()} alt="" className="w-[60%] h-[60%] object-cover" />
                            <p className="flex text-4xl font-bold text-white xs:text-xl">x {gameState.score}</p>
                          </div>
                          <div className="flex flex-col h-auto items-center" style={{ width: '32rem' }}>
                            <p className="flex font-medium text-gray-200 text-base md:text-2xl">{getResultTitle()}</p>
                            <img src={getResultTitleImage()} alt="" className="w-[60%] h-[60%] object-cover" />
                            <p className="flex font-bold text-white text-xs md:text-base">{getPersonalityTrait()}</p>
                          </div>
                        </div>
                      </>)
                      :
                      (<div className="mt-28">
                        <div className="flex flex-row items-center w-full justify-center pt-4">
                          <div className="flex w-1/2 h-auto overflow-hidden border-indigo-500">
                            <img src={getResultCharacterImage()} alt={character.name} className="w-3/4 h-3/4 object-cover" />
                          </div>
                          <div className="flex flex-col w-1/2 h-auto">
                            <p className="flex w-full pl-6 text-gray-200 text-sm xs:text-lg">你扮演的立委是</p>
                            <h3 className="flex font-semibold pl-6 text-white text-3xl xs:text-4xl">{character.name}</h3>
                          </div>
                        </div>
                        <div className="w-full flex flex-col">
                          <div className="flex flex-row justify-center items-center rounded-0 p-4 mb-2">
                            <div className="flex items-center mb-2 w-1/2 h-auto px-2 sm:px-4">
                              <img src={getPaperCountImage()} alt="" className="w-3/4 h-3/4 object-cover" />
                            </div>
                            <div className="flex-col w-1/2">
                              <p className="flex font-medium text-gray-200 pl-6 text-sm xs:text-lg">累積連署書</p>
                              <p className="flex text-2xl font-bold text-white pl-6 text-3xl xs:text-4xl">x {gameState.score}</p>
                            </div>
                          </div>
                        </div>
                        <div className="w-full flex flex-col pb-4">
                          <div className="flex flex-row justify-center items-center rounded-0 -mt-8">
                            <div className="flex items-center mb-2 w-1/2 h-auto p-2">
                              <img src={getResultTitleImage()} alt="" className="w-3/4 h-3/4 object-cover" />
                            </div>
                            <div className="flex-col w-1/2">
                              <p className="flex font-medium text-gray-200 pl-6 tracking-wide text-sm xs:text-lg">{getResultTitle()}</p>
                              <p className="flex font-bold text-white pl-6 text-xs xs:text-sm se:text-xs md:text-sm sp:text-sm md:text-xl">{getPersonalityTrait()}</p>
                            </div>
                          </div>
                        </div>
                      </div>)
                    }

                    {/* add two buttons in a row. One is share and the other is restart. */}
                    {/* add imeages on the buttons. share is a share icon and restart is a restart icon. */}
                    <div
                      className={`${isDesktop
                        ? "flex flex-row items-center w-3/4 justify-center z-40 min-h-[150px] md:min-h-[200px] w-2/3 md:w-3/4 lg:w-full"
                        : "flex flex-row items-start w-4/5 justify-center z-40 xs:w-3/4 -translate-y-5 md:translate-y-0 md:w-full"
                        }`}
                    >
                      <motion.button
                        onClick={async () => {
                          if (showShare) {
                            setShowShare(false); // 關閉分享選單
                          } else {
                            await handleScreenshotShare(); // 先截圖 → 再開啟分享
                          }
                        }}
                        className={`${isDesktop
                          ? "font-medium mx-4 w-1/3 lg:w-1/4"
                          : "font-medium mx-4 w-full"
                          }`}

                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <img src={getResult() === "成功" ? getImagePath("/images/results/objects/btn_Share_Success.webp") : getImagePath("/images/results/objects/btn_Share_Fail.webp")} alt="share" className="w-full h-full object-contain" />
                      </motion.button>

                      <motion.button
                        onClick={restartGame}
                        className={`${isDesktop
                          ? "font-medium mx-4 w-1/3 lg:w-1/4"
                          : "font-medium mx-4 w-full"
                          }`}

                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <img src={getResult() === "成功" ? getImagePath("/images/results/objects/btn_Tryagain_Success.webp") : getImagePath("/images/results/objects/btn_Tryagain_Fail.webp")} alt="restart" className="w-full h-full object-contain" />
                      </motion.button>
                    </div>
                    {
                      screenshotUrl && (
                        <div className="flex justify-center mt-4">
                          {<ShareDropdown
                            shareUrl={shareUrl}
                            shareText={shareText}
                            shareLineText={shareLineText}
                            imageData={screenshotUrl}
                            open={showShare}
                            setOpen={setShowShare}
                          />}
                        </div>
                      )
                    }
                  </div>
                </div>
              </motion.div>
            </div>
            {/* 桌機or筆電畫面 */}
            <div
              className={`${isDesktop
                ? "flex flex-row w-full mx-auto justify-center -my-0 text-white tracking-wider text-xl md:text-3xl lg:text-4xl font-bold z-12"
                : "hidden"
                }`}
            >
              <p className={`${getResult() === "成功"
                ? "text-center text-black"
                : "text-center"
                }`}
              >{getCharacterType() ? "7月26日(六)出門投票，同意罷免，終結國會之亂！" : "投下同意罷免，下架惡質立委！"}</p>
            </div>
            {/* if failed css background color is #1f31fe and if success css background color is #fe3427 */}
            {/* Email subscription form */}
            {/* add a div with a background color and a gradient to the bottom of the page */}
            <div className="fixed bottom-0 w-full overflow-hidden z-50 left-0 safe-footer" style={{ minHeight: '0vh' }}>
              {/* Gradient background fixed to bottom to cover entire footer */}
              <div
                className={`pointer-events-none fixed bottom-0 left-0 w-full h-[50vh] xs:h-[25vh] z-0 bg-gradient-to-b from-transparent via-transparent safe-footer ${getResult() === '成功' ? 'to-[#fe3427]/90' : 'to-[#1f31fe]/90'}`}
              ></div>

              {/* Footer subscription section */}
              <div className="relative z-10 flex max-w-4xl mx-auto pb-0 px-0">
                <div className="flex-shrink-0 w-1/5 py-2 pl-1 pr-0 se:mt-5">
                  <img src={getImagePath("/images/logo.webp")} className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col w-4/5 p-2">
                  <div className="flex items-end w-full">
                    <div className="flex w-1/4">
                      <button
                        onClick={() => setIsAboutUsOpen(true)}
                        className="w-32 h-12 sm:w-40 sm:h-14 md:w-48 md:h-16 result-bb"></button>
                    </div>
                    {/* 手機畫面 */}
                    <div
                      className={`${isDesktop
                        ? "hidden"
                        : "flex flex-col w-full text-pretty tracking-wider text-[clamp(0.75rem,4vw,1.5rem)] md:text-xl font-bold z-12"
                        }`}
                    >
                      {getCharacterType() ? (
                        <p className={`${getResult() === "成功" ? "text-black pl-2" : "text-white pl-2"}`}>
                          7/26(六)<br></br>同意罷免，終結國會之亂！
                        </p>
                      ) : (
                        <p className={`${getResult() === "成功" ? "text-black pl-2" : "text-white pl-2"}`}>
                          同意罷免，下架惡質立委！
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex mt-2">
                    <input
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="輸入 Email 獲得更多相關資訊"
                      className={`px-2 py-1 se:w-20 flex-grow lg:px-4 md:py-2 border ${isEmailValid ? 'border-gray-300' : 'border-red-500'
                        } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    />
                    <button
                      onClick={handleSubmitEmail}
                      disabled={isSubmitting || !email || !isEmailValid}
                      className={`px-2 se:py-1 se:w-20 lg:px-4 py-2 shrink-0 font-medium ${isSubmitting || !email || !isEmailValid
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
            {isAboutUsOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`${isDesktop
                  ? "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                  : "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                  }`}
                onClick={() => setIsAboutUsOpen(false)}
              >
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.95 }}
                  className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                  onClick={e => e.stopPropagation()}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">製作團隊</h3>
                    <button
                      onClick={() => setIsAboutUsOpen(false)}
                      className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
                    >
                      <X className="w-6 h-6 text-gray-500" />
                    </button>
                  </div>
                  {isDesktop
                    ? (
                      <>
                        <div className="w-full text-center text-2xl font-bold text-gray-800 tracking-wider">雙和罷免團隊（新北市雙和公民參與協會）</div>

                      </>
                    )
                    : (
                      <>
                        <div className="w-full text-center text-2xl font-bold text-gray-800 tracking-wider">雙和罷免團隊</div>
                        <div className="w-full text-center text-2xl font-bold text-gray-800 tracking-wider">（新北市雙和公民參與協會）</div>
                      </>
                    )}

                  <div
                    className={`${isDesktop
                      ? "w-3/4 mx-auto pl-2"
                      : "w-full mx-auto"
                      }`}
                  >
                    <div className="text-gray-700 text-lg my-4">
                      <div className="flex w-full font-semibold">專案發想</div>
                      <div
                        className={`${isDesktop
                          ? "flex flex-row justify-start gap-7"
                          : "flex flex-wrap justify-start gap-2"
                          }`}
                      >
                        <div>mini</div>
                        <div>先西</div>
                        <div>Kate</div>
                      </div>
                    </div>
                    <div className="text-gray-700 text-lg my-4">
                      <div className="flex w-full font-semibold">專案進度</div>
                      <div
                        className={`${isDesktop
                          ? "flex flex-row justify-start gap-7"
                          : "flex flex-wrap justify-start gap-2"
                          }`}
                      >
                        <div>馬可詠嘆師</div>
                        <div>希斯特莉雅</div>
                      </div>
                    </div>
                    <div className="text-gray-700 text-lg my-4">
                      <div className="flex w-full font-semibold">網頁技術</div>
                      <div
                        className={`${isDesktop
                          ? "flex flex-row justify-start gap-7"
                          : "flex flex-wrap justify-start gap-2"
                          }`}
                      >
                        <div>馬可詠嘆師</div>
                        <div>迪奧</div>
                        <div>希斯特莉雅</div>
                      </div>
                    </div>
                    <div className="text-gray-700 text-lg my-4">
                      <div className="flex w-full font-semibold">文本</div>
                      <div
                        className={`${isDesktop
                          ? "flex flex-row justify-start gap-7"
                          : "flex flex-wrap justify-start gap-2"
                          }`}
                      >
                        <div>羅丹</div>
                        <div>Phoebe</div>
                        <div>希斯特莉雅</div>
                        <div>Kate</div>
                        <div>先西</div>
                      </div>
                    </div>
                    <div className="text-gray-700 text-lg my-4">
                      <div className="flex w-full font-semibold">美術</div>
                      <div
                        className={`${isDesktop
                          ? "flex flex-row justify-start gap-7"
                          : "flex flex-wrap justify-start gap-2"
                          }`}
                      >
                        <div>阿柔</div>
                        <div>阿瑋</div>
                        <div>小鄒鄒</div>
                        <div>永和哈比人</div>
                        <div>AK</div>
                        <div>威哥</div>
                      </div>
                    </div>
                    <div className="text-gray-700 text-lg my-4">
                      <div className="flex w-full font-semibold">影片</div>
                      <div
                        className={`${isDesktop
                          ? "flex flex-row justify-start gap-7"
                          : "flex flex-wrap justify-start gap-2"
                          }`}
                      >
                        <div>Amber</div>
                        <div>先西</div>
                      </div>
                    </div>
                    <div className="text-gray-700 text-lg my-4">
                      <div className="flex w-full font-semibold">法律諮詢</div>
                      <div
                        className={`${isDesktop
                          ? "flex flex-row justify-start gap-7"
                          : "flex flex-wrap justify-start gap-2"
                          }`}
                      >
                        <div>雞仔</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-700 text-lg my-4">
                    <p>感謝所有罷團夥伴，薪偷之餘還能快速生出一個小遊戲，就算沒有直接相關背景，也使出渾身解術加快腳步趕緊製作！</p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </div >
        </div>
      )}
    </div>
  );
};

export default ResponsiveResultsScreen;
