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
  
  // Maximum possible score (for the tree visualization)
  const maxScore = 200;
  
  // Determine result message based on score
  const getResultTitle = () => {
    const score = gameState.score;
    //遊戲封號
    if (score < 30) return "阿罷";
    if (score < 60) return "看罷";
    if (score < 90) return "好罷";
    if (score < 120) return "國安漏洞製造者";
    return "天罷王";
  };
  
  // Get personality trait based on character type and score
  // 需要跟 角色id 對照
  // 角色murmur
  const getPersonalityTrait = () => {
    const characterType = character.id;
    const score = gameState.score;
    if (characterType === 'ChangChihLun') {
      if (score < 50) return "你獲得了被罷免的資格";
      if (score < 100) return "很棒，黨說甚麼，你就做甚麼，這樣真的是好的嗎？看看那堆積如山的連署書";
      return "罷免不適任立委，讓國會回歸正軌！";
    }
    
    if (characterType === 'linTeFu') {
      if (score < 50) return "Budding Creator";
      if (score < 100) return "Innovative Mind";
      return "Visionary Genius";
    }
    
    if (characterType === 'HSUCHIAOHSIN') {
      if (score < 50) return "Developing Empath";
      if (score < 100) return "Intuitive Soul";
      return "Emotional Sage";
    }

    if (characterType === 'LaiShyhBao') {
      if (score < 50) return "Developing Empath";
      if (score < 100) return "Intuitive Soul";
      return "Emotional Sage";
    }
    
    if (characterType === 'wanghungwei') {
      if (score < 50) return "Developing Empath";
      if (score < 100) return "Intuitive Soul";
      return "Emotional Sage";
    }
    if (characterType === 'LEEYEHSIU') {
      if (score < 50) return "Developing Empath";
      if (score < 100) return "Intuitive Soul";
      return "Emotional Sage";
    }

    if (characterType === 'ChenYuJen') {
      if (score < 50) return "Developing Empath";
      if (score < 100) return "Intuitive Soul";
      return "Emotional Sage";
    }

    if (characterType === 'YEHYUANCHIH') {
      if (score < 50) return "Developing Empath";
      if (score < 100) return "Intuitive Soul";
      return "Emotional Sage";
    }

    if (characterType === 'FUKUNCHI') {
      if (score < 50) return "Developing Empath";
      if (score < 100) return "Intuitive Soul";
      return "Emotional Sage";
    }

    if (characterType === 'HungMongKai') {
      if (score < 50) return "Developing Empath";
      if (score < 100) return "Intuitive Soul";
      return "Emotional Sage";
    }

    if (characterType === 'LoMingTsai') {
      if (score < 50) return "Developing Empath";
      if (score < 100) return "Intuitive Soul";
      return "Emotional Sage";
    }

    if (characterType === 'LIAOHsienHsiang') {
      if (score < 50) return "Developing Empath";
      if (score < 100) return "Intuitive Soul";
      return "Emotional Sage";
    }

    if (characterType === 'LOCHIHCHIANG') {
      if (score < 50) return "Developing Empath";
      if (score < 100) return "Intuitive Soul";
      return "Emotional Sage";
    }
    return "罷免不適任立委才能換得正常的國會";
  };

  const handleSubmitEmail = async () => {
    if (!email || !character) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyF2RBHz_E88v6rEV1cZ3Rys7KOdWIXR8lqHcH94_o12OTAhCPKM6-pkEn8aOBRTUej1A/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          character: character.name,
          score: gameState.score,
          timestamp: new Date().toISOString()
        })
      });
      
      setSubmitStatus('success');
    } catch (error) {
      console.error('Error submitting email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-contain bg-gradient-to-b from-blue-50 to-indigo-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="flex flex-col bg-red-500 rounded-0 overflow-hidden justify-center my-4 py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
            {/* 封號、關於本立委的murmur */}
            <div className="flex items-center w-full justify-center">
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                  {getResultTitle()}
                </h3>
            </div>

              {/* 角色 */}
              <div className="flex flex-row items-center mb-4 w-full justify-center">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-500 mr-4">
                  {/* 立委大頭 */}
                  <img 
                    src={character.avatar} 
                    alt={character.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="w-full text-gray-600">你扮演的立委是：</p>
                  <h3 className="font-semibold text-lg text-gray-800">{character.name}</h3>
                </div>
              </div>

              <div className="w-full">
                <div className="flex flex-row justify-center items-center rounded-0 p-4 mb-6">

                  <div className="flex items-center mb-2">
                  {/* 連署書圖 */}
                    <img src="" alt="" />
                  </div>
                  <div className="flex ">
                    <p className="font-medium text-gray-700">人民累積的怒氣值 x </p>
                    <p className="text-2xl font-bold text-indigo-600">{gameState.score}</p>
                  </div>
                </div>
              </div>
              {/* murmur */}
              <div className="w-full mx-4 my-4">
                <div className="flex flex-row justify-center items-center">
                  <p className="flex justify-center text-gray-700">{getPersonalityTrait()}</p>
                </div>
              </div>

          </motion.div>
          {/* 截圖分享 & 再玩一次 */}
          <div className="flex items-between justify-center mx-4">
            <motion.button
              //onClick={shareGame} //截圖分享的函式
              className="w-20 h-20 mx-4 py-3 px-4 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              截圖分享
            </motion.button>
            
            <motion.button
              onClick={restartGame}
              className="w-20 h-20 mx-4py-3 px-4 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              再玩一次
            </motion.button>
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