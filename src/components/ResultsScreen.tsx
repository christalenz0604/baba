import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { motion } from 'framer-motion';

const ResultsScreen: React.FC = () => {
  const { gameState, restartGame } = useGame();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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
    if (score === characterScore) return "/baba_test/images/result_staement_lv3.png";
    if (score < 100) return "/baba_test/images/result_staement_lv1.png";
    return "/baba_test/images/result_staement_lv2.png";
  };

  const getResultTitleImage = () => {
    const score = gameState.score;
    const characterScore = character.score;
    if (score === characterScore) return "/baba_test/images/result_prettyName_Lv5.png";
    if (score < 100) return "/baba_test/images/result_prettyName_Lv1.png";
    if (score < 1000) return "/baba_test/images/result_prettyName_Lv2.png";
    if (score < 10000) return "/baba_test/images/result_prettyName_Lv3.png";
    return "/baba_test/images/result_prettyName_Lv4.png";
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
    const canvas = await html2canvas(document.body); // 你可以改成特定區域
    const dataUrl = canvas.toDataURL();
    setScreenshotUrl(dataUrl);
    setShowShare(true); // 觸發打開 ShareDropdown
  };


  return (
    <div className={`min-h-screen bg-contain ${getResult() === "成功" ? "bg-[url('/baba_test/images/result_bg_Win.png')]" : "bg-[url('/baba_test/images/result_bg_Fail.png')]"} bg-cover py-10 px-4`}>
      <div className="max-w-4xl mx-auto" >
        <motion.div
          className="flex flex-col rounded-0 overflow-hidden justify-center my-4 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full z-10 justify-center ${getResult() === "成功" ? "bg-[url('/baba_test/images/title_Ribbon_Win.png')]" : "bg-[url('/baba_test/images/title_Ribbon_Fail.png')]"} bg-cover`}>
        <img src={getResult() === "成功" ? "/baba_test/images/title_Win.png" : "/baba_test/images/title_Fail.png"} alt="" className="w-1/3 h-auto object-cover content-center mx-auto" /> 
      </div>
      <div className={`flex flex-col items-center w-full justify-center z-0 ${getResult() === "成功" ? "bg-[url('/baba_test/images/result_Board_phoneSize_Win.png')]" : "bg-[url('/baba_test/images/result_Board_phoneSize_Fail.png')]"} bg-cover relative`}>
          <div className="flex flex-row items-center mb-4 w-full justify-center">
            <div className="flex w-1/2 h-auto rounded-full overflow-hidden border-2 border-indigo-500">
              <img src={getResultCharacterImage()} alt={character.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col w-1/2 h-auto">
              <p className="flex w-full text-gray-200">你扮演的立委是：</p>
              <h3 className="flex font-semibold text-lg text-white">{character.name}</h3>
            </div>
          </div>

          <div className="w-full flex flex-col">
            <div className="flex flex-row justify-center items-center rounded-0 p-4 mb-2">
              <div className="flex items-center mb-2 w-1/2 h-auto">
                <img src={getPaperCountImage()} alt="" className="w-full h-full object-cover"/>
              </div>
              <div className="flex-col w-1/2">
                <p className="flex font-medium text-gray-200">累積連署書</p>
                <p className="flex text-2xl font-bold text-white">x {gameState.score}</p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col">
            <div className="flex flex-row justify-center items-center rounded-0 p-4 mb-6">
              <div className="flex items-center mb-2 w-1/2 h-auto">
                <img src={getResultTitleImage()} alt="" className="w-full h-full object-cover"/>
              </div>
              <div className="flex-col w-1/2">
                <p className="flex font-medium text-gray-200">{getResultTitle()}</p>
                <p className="flex text-l font-bold text-white">{getPersonalityTrait()}</p>
              </div>
            </div>
          </div>
         </div>
        </motion.div>
        
{/* add two buttons in a row. One is share and the other is restart. */}
{/* add imeages on the buttons. share is a share icon and restart is a restart icon. */}
        <div className="flex flex-row items-center mb-4 w-full justify-center">
          <button className="font-medium w-1/2 h-1/2 mx-4">
            <img src={getResult() === "成功" ? "/baba_test/images/btn_Share_Success.png" : "/baba_test/images/btn_Share_Fail.png"} alt="share" className="w-full h-full object-cover" />
          </button>
          <button className="font-medium w-1/2 h-1/2 mx-4">
            <img src={getResult() === "成功" ? "/baba_test/images/btn_Tryagain_Success.png" : "/baba_test/images/btn_Tryagain_Fail.png"} alt="restart" className="w-full h-full object-cover" />
          </button>
        </div>

          {/* Email subscription form */}
          <div className="mb-6">
            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                想收到更多相關資訊嗎？
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="請輸入您的 Email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  onClick={handleSubmitEmail}
                  disabled={isSubmitting || !email}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    isSubmitting || !email
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  }`}
                >
                  {isSubmitting ? '提交中...' : '訂閱'}
                </button>
              </div>
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
    </div>
  );
};

export default ResultsScreen;